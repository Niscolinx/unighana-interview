import mongoose from 'mongoose'


const MONGODB_URI:string = process.env.MONGODB_URI || ''


/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */

if(!MONGODB_URI){
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
}



async function dbConnect() {
  
  if(mongoose.connection.readyState >= 1){
    return mongoose.connection.asPromise()
  }

 



    const opts = {
      bufferCommands: false,
    }

   await mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log("connected successfully")
      return mongoose
    })
  

}

export default dbConnect
