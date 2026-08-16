import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import User from "./modals/user.js";

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/mern_form")
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.log("MongoDB connection error:", error);
    });


app.use(cors());
app.use(express.json());

app.post('/users', async (req, res) => {

    try {

        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
            gender: req.body.gender,
            course: req.body.course,
            address: req.body.address
        });

        const savedUser = await newUser.save();

        console.log(savedUser);

        res.status(201).json({
            message: "user created successfully",
            data: savedUser
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Something went wrong"
        });

    }

});

app.get('/users', async (req, res) => {

    try {

        const users = await User.find();

        res.status(200).json(users);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Something went wrong"
        });

    }

});

// app.delete('./users/:id', (req, res) => {
//     const id = req.params.id;
//     console.log(id);
//     res.status(200).json({
//         message: "delete route working"
//     });
// })

// app.delete('/users/:id', (req, res) => {
//     console.log("DELETE request received");
//     console.log("ID:", req.params.id);

//     res.status(200).json({
//         message: "Delete route working",
//         id: req.params.id
//     });
// });

app.delete('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            message: "User deleted successfully",
            data: deletedUser
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Something went wrong"
        });
    }
});

// app.put('/users/:id',(req,res)=>{
//     const id = Number(req.params.id);
//     const index = users.findIndex((user)=>user.id===id);
//     if(index===-1){
//         return res.status(404).json({
//             message:"user not found"
//         });
//     } 
//     users[index] = {
//         id: id,
//         name: req.body.name,
//         email: req.body.email,
//         age: req.body.age,
//         gender: req.body.gender,
//         course: req.body.course,
//         address: req.body.address
//     };

//     res.status(200).json({
//         message: "User updated successfully",
//         data: users[index]
//     }); 
// })

app.put('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const updatedUser = await User.findByIdAndUpdate(
            id,
            {
                name: req.body.name,
                email: req.body.email,
                age: req.body.age,
                gender: req.body.gender,
                course: req.body.course,
                address: req.body.address
            },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            message: "User updated successfully",
            data: updatedUser
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Something went wrong"
        });
    }
});


app.listen("5000", () => {
    console.log("App is running on the port 5000");
});