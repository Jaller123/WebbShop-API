const express = require('express');
const app = express();
const fs = require('fs')
app.use(express.json());

let userInfo =[]

app.get("/users", (req, res) =>
{
    res.json(userInfo)
});


app.post("/register", (req, res) =>
{
    let { name, password } = req.body;
    if (!name || !password)
    {
        res.status(400).json({error: "Name and Password are required"});
    }
    userInfo.push(newUser)
    res.json(userInfo)
})

app.post("/login", (req, res) => {
    let { name, password } = req.body;
    let user = userInfo.find(user => user.name === name && user.password === password);
    if (user) {
        res.json({ message: "Login successful" });
    } else {
        res.status(401).json({ error: "Invalid credentials" });
    }
});


app.put("/users", (req, res) => //Update users
{
    const newName = req.body.newName
    for (let i = 0; i < userInfo.length; i++)
    {
        userInfo[i].name = newName
    }
    //Loops through every name to update
    res.json(userInfo);
})

app.delete("/users/:id", (req, res) =>
{
    let id = req.params.id
    let foundId = false;
    for (let i = 0; i < userInfo.length; i++)
    {
        if (userInfo[i].id == id)
        {
            userInfo.splice(i, 1)
            foundId = true;
        } //Loops through userInfo and if it finds an element that is
          //equal to index then it will remove 1 index of userInfo
        
    }
    if (!foundId)
    {
        res.status(404).json({error: "Users id not found"})
    }
    else
    {
        res.json(userInfo);
    }
});


app.listen('3001', () => 
{
    console.log("Server running on port 3001")
})