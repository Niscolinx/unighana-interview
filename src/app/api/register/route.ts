import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'
import dbConnect from '@/lib/dbConnect'
import User from '@/app/models/User'

async function registerHandler(req: NextApiRequest, res: NextApiResponse) {
    try {
        await dbConnect()

        console.log('req body', req.body)
        const { email, password } = req.body
        //Validate
        if (!email || !email.includes('@') || !password) {
            console.log('failed')
            res.status(422).json({ message: 'Invalid Data' })
            return
        }

        const existingUserEmail = await User.findOne({ email })

        if (existingUserEmail) {
            return res.status(401).json({
                message: 'Email already exists',
            })
        }

        const storeUser = new User({
            email,
            password: await bcrypt.hash(password, 12),
           
        })

        const verifyStored = await storeUser.save()

        console.log({ verifyStored })

        if (verifyStored) {
            res.status(201).json({
                message: 'successful',
            })
        } else {
            res.status(404).json({
                message: 'failed',
            })
        }
    } catch (err) {
        console.log({ err })
        res.status(500).json('Something went wrong')
    }
      
}

export default registerHandler
