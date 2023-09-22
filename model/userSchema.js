import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "Name Is Required"],
        minLength: [3, "Name Must be Greater then 2"],
        maxLength: [15, "Name Must be Less then 15"],
        trim: true,
    },
    email: {
        type: String,
        required: true,
        minLength: [5, "Email Must be Greater then 5"],
        maxLength: [35, "Email Must be Less then 20"],
        unique: true,
        lowercase: true,
      },
      password: {
        type: String,
        required: true,
      },
      role: {
        type: String,
        enum: ["admin", "doctor"],
        default: "doctor",
      },
    appoved :  {
        isAppoved : false
      }
})


export default mongoose.models.user || mongoose.model("user", userSchema)