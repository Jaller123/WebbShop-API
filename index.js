const express = require('express');
const app = express();
app.use(express.json());

let userInfo = [
    {
        id: 1,
        name: "Kenny",
        age: 18,
        married: false,
    },
    {
        id: 2,
        name: "Sarah",
        age: 19,
        married: false,
    },
    {
        id: 3,
        name: "John",
        age: 34,
        married: true,
    }
];

app.get("/users", (req, res) =>
{
    res.json(userInfo)
});

app.post("/users", (req, res) =>
{
    let newUser = req.body
    userInfo.push(newUser)
    res.json(userInfo)
})

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