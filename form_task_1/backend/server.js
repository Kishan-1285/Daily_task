import express from "express";
import cors from "cors";

const app = express();
const users = [];
app.use(cors());
app.use(express.json());

app.post('/users', (req, res) => {
    const user = {
        id: Date.now(),
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        gender: req.body.gender,
        course: req.body.course,
        address: req.body.address
    };
    users.push(user);
    console.log(user);

    res.status(201).json({
        message: "user created successfully",
        data: user
    });
});

app.get('/users', (req, res) => {
    res.status(200).json(users);
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

app.delete('/users/:id', (req, res) => {

    const id = Number(req.params.id);

    console.log("Requested ID:", id);
    console.log("Current users:", users);

    const index = users.findIndex((user) => user.id === id);

    console.log("Found index:", index);

    if (index === -1) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    users.splice(index, 1);

    res.status(200).json({
        message: "User deleted successfully"
    });
});

app.put('/users/:id',(req,res)=>{
    const id = Number(req.params.id);
    const index = users.findIndex((user)=>user.id===id);
    if(index===-1){
        return res.status(404).json({
            message:"user not found"
        });
    } 

    

})


app.listen("5000", () => {
    console.log("App is running on the port 5000");
});