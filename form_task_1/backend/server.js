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


app.listen("5000", () => {
    console.log("App is running on the port 5000");
});