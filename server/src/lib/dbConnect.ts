import mongoose from "mongoose";

export const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI!, {
            dbName: "hapanIDE",
        }).then(() => console.log("DB connected"));   
    } catch (error) {
        console.log("Error connecting to the database: ", error);
    }
}