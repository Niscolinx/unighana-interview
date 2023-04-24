import bcrypt from 'bcryptjs'
import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import dbConnect from '../../../lib/dbConnect'
import { setCookie } from 'cookies-next'
import User, { IUser } from '@/app/models/User'

export default async function login(req: NextApiRequest, res: NextApiResponse) {
    const { emailOrUsername, password, admin } = req.body

    console.log(req.body)

    try {
        await dbConnect()

        const email: IUser | null = await User.findOne({
            email: emailOrUsername,
        })
        const username: IUser | null = await User.findOne({
            username: emailOrUsername,
        })


        const user = email || username


        if (admin) {

            if (!user) {
                return res.status(404).json( {
                    message: 'User not found',
                } )
            }
            if (!bcrypt.compareSync(password, user.password)) {
                return res.status(401).json({
                    message: 'Password is incorrect',
                })
            }
            const token = jwt.sign(
                { userId: user._id.toString(), email: user.email },
                process.env.JWT_SECRET!
            )
            // setCookie('adminToken', token, {
            //     secure: process.env.NODE_ENV! === 'production',
            // })

            //set cookie in nodejs
            res.setHeader('Set-Cookie', `adminToken=${token}; Path=/; HttpOnly; Secure; Max-Age=${60 * 60 * 24 * 7}`)
            return res.status(200).json({ user })
        }
    
        

        if (!user) {
            return res.status(404).json({
                message: 'Invalid user',
            })
        }

        // const checkPassword = await bcrypt.compare(password, user!.password)

        // if (!checkPassword) {
        //     return res.status(401).json({
        //         message: 'Incorrect password',
        //     })
        // }

        const token = jwt.sign(
            {
                email,
                userId: user!._id.toString(),
            },
            process.env.JWT_SECRET!,
            {
                expiresIn: '1hr',
            }
        )
        setCookie('userSession', token, { req, res, maxAge: 60 * 60 * 24 })

        return res.status(200).json(
            user
            //token,
        )
    } catch (err) {
        console.log({ err })
        res.status(400).json('error')
    }
}
