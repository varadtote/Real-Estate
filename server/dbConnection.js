
import mongoose from "mongoose";

export default async function connectDB(url) {
    await mongoose.connect(url).then(() => console.log('DB Connected'))
}