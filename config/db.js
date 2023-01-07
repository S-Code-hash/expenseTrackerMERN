const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/.env" });

mongoose.set('strictQuery', true);

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);

        console.log(`MondoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
    } catch (err) {
        console.log(`Error: ${err.message}`.red);
        process.exit(1);
    }
}


module.exports = connectDB;