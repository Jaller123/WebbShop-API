let express = require('express');
let app = express();
let cors = require('cors')
app.use(cors())
let fs = require('fs')


let userInfo = require('./user.json')
let orders = require('./orders.json')
let products = require('./products.json')

app.use(express.json());

fs.readFile('user.json', (err, data) =>
{
    if (err)
    {
        console.error('Error reading user.json')
    }

    try 
    {
        userinfo = JSON.parse(data);
        console.log('User data loaded successfully', userInfo)
    }

    catch (error)
    {
        console.error('Error parsing user.json', error)
    }
});

fs.readFile('./orders.json', (err, data) =>
{
    if (err)
    {
        console.error('Error reading orders.json', err)
        return;
    }

    try 
    {
        orders = JSON.parse(data)
        console.log('Orders data loaded successfully')
    }

    catch
    {
        console.error('Error parsing order.json')
    }
})

fs.readFile('./products.json', (err, data) =>
{
    if (err)
    {
        console.error('Error reading products.json', err)
        return;
    }

    try 
    {
        products = JSON.parse(data)
        console.log('Products data loaded successfully')
    }

    catch
    {
        console.error('Error parsing products.json')
    }

    app.get ("/orders",cors(),(req, res) =>
{
    res.json(orders)
});


app.get ("/users",cors(),(req, res) =>
{
    res.json(userInfo)
});

app.get ("/products",cors(),(req, res) =>
{
    res.json(products)
});
})


app.post("/users/create", cors(), (req, res) => {
    let { name, password } = req.body;
    if (!name || !password)
    {
        res.status(400).json({ error: "Name and Password are required" });
    } else 
    {
     
        let newUser = { name, password };
        
        userInfo.push(newUser);
        
        res.json(userInfo);
    }
});

app.post("/orders", cors(), (req, res) =>
{
    let newOrder = req.body;
    orders.push(newOrder)

    fs.writeFile('./orders.json', JSON.stringify(orders), (err) =>
    {
        if(err)
        {
            console.log('Error writing order.js' ,err)
            res.status(500).json({error: 'Failed to add order'})
        }

        else 
        {
            console.log('Order added successfully')
            res.json(orders)
        }
    })

})



app.put("/users/update", (req, res) => //Update users
{
    const newLogin = req.body.newLogin
    for (let i = 0; i < userInfo.length; i++)
    {
        userInfo[i].name.password = newLogin
    }
    //Loops through every name to update
    res.json(userInfo);
})

app.delete("/users/delete", (req, res) =>
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