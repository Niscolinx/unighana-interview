import { model, models, Schema } from 'mongoose'

export interface IUser {
    _id: string
    email: string
    password: string
}

const userSchema = new Schema<IUser>(
    {
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },

    { timestamps: true }
)

export default models.user || model('user', userSchema)
