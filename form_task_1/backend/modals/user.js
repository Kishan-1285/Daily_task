import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    age: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    course: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    }
});

const User = mongoose.model("User", userSchema);

export default User;