import mongoose from 'mongoose'

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (!process.env.MONGODB_URL) return console.log('MONGODB_URL not found');
    
    if (isConnected){
        console.log('Already connected to MongoDB')
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL)
    } catch (error) {
        console.log(error)
    }
}