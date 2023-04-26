import bcrypt from 'bcryptjs'
import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import { setCookie } from 'cookies-next'

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    const { email, password } = req.body

    console.log(req.body)

    try {

        const user = ''
       



    
        

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
                // userId: user._id.toString(),
                userId: 'sdf'
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
