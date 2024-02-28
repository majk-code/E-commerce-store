const port = 4000;
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const multer = require('multer')
const path = require('path')
const cors = require('cors');
const { runInNewContext } = require('vm');

app.use(express.json());
app.use(cors())

// Database connection with mongodb
mongoose.connect('mongodb+srv://majkcodeadmin:Mjakmichal23102003@cluster0.7ps4cic.mongodb.net/Ecommerce')

// Api creation

app.get('/', (req,res) => {
    res.send('Express App is Running')
})


// Image Storage Engine

const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb) => {
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

// Creating Upload Endpoint for images

app.use('/images', express.static('upload/images'))

app.post('/upload',upload.single('product'),(req,res)=> {
    res.json({
        succes: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})

// Schema for Creating Products

const Product = mongoose.model('Product',{ 
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    }, 
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number, 
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    avilable: {
        type: Boolean,
        default: true,
    },
})

app.post('/addproduct', async (req,res) => {
    let products = await Product.find({})
    let id;
    if(products.length>0) {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
    }
    else {
        id = 1;
    }
    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    })
    console.log(product)
    await product.save()
    console.log('Product saved')
    res.json({
        succes: true,
        name: req.body.name,
    })
})

// Creating API For deleting products

app.post('/removeproduct', async (req,res) => {
    await Product.findOneAndDelete({id:req.body.id})
    console.log("Product removed")
    res.json({
        succes: true,
        name: req.body.name
    })
})

// Creating API for getting all products

app.get('/allproducts', async (req,res) => {
    let products = await Product.find({})
    console.log("All Products Fetched")
    res.send(products)
})

// Schema ( collection in mongo DB ) creating for User model

const Users = mongoose.model('Users', {
    name: {
        type: String,
    }, 
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String
    }, 
    cartData: {
        type: Object
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

// Creating endpoint for registering user
app.post('/signup', async (req,res) => {

    let check = await Users.findOne({email: req.body.email})
    if (check) {
        return res.status(400).json({ succes: false, errors: "account with this email is existing"})
    }
    let cart = {};
    for ( let i = 0; i < 300; i++) {
        cart[i]=0;
    }
    const user = new Users({
        name: req.body.username,
        email: req.body.email,
        password:req.body.password,
        cartData: cart,
    })

    await user.save();

    const data = {
        user: {
            id: user.id
        }
    }

    const token = jwt.sign(data,'secret_ecom')
    res.json({succes:true, token})
})

app.post('/login', async (req, res) => {
    let user = await Users.findOne({email: req.body.email})
    if ( user ) {
        const passCompare = req.body.password === user.password
        if ( passCompare ) {
            const data = {
                user: {
                    id: user.id
                }
            }
            const token = jwt.sign(data, 'secret_ecom');
            res.json({succes: true, token})
        } 
        else {
            res.json({succes: false, errors:"Wrong password"})
        } 
    } 
    else {
        res.json({succes:false, errors: "Wrong email"})
    }
})

// Creating endpoint for newcollection data
app.get('/newcollections', async (req,res) => {
    let products = await Product.find({});
    let newcollection = products.slice(1).slice(-8);
    console.log('New Collection fetched') 
    res.send(newcollection)
})

// Creating endpoint for first main item in newarrivals collection

app.get('/newarrivalsmain', async (req,res) => {
    let products = await Product.find({});
    let newarrivalsMain = products.slice(0,1)[0]
    console.log('New arrivals first item fetched'+ newarrivalsMain)
    res.send(newarrivalsMain)
})

// Shop category list of products (2th)

app.get('/shopsecond', async (req,res) => {
    let products = await Product.find({});
    let shopCategorySecond = products.slice(1,2)[0]
    console.log('Shop category second item fetched'+ shopCategorySecond)
    res.send(shopCategorySecond)
})

// Shop category list of products (3th)

app.get('/shopthird', async (req,res) => {
    let products = await Product.find({});
    let shopCategoryThird = products.slice(2,3)[0]
    console.log('Shop category third item fetched'+ shopCategoryThird)
    res.send(shopCategoryThird)
})

// Shop category list of products (4th)

app.get('/shopfourth', async (req,res) => {
    let products = await Product.find({});
    let shopCategoryFourth = products.slice(3,4)[0]
    console.log('Shop category fourth item fetched'+ shopCategoryFourth)
    res.send(shopCategoryFourth)
})

// Shop category list of products (5th)

app.get('/shopfifth', async (req,res) => {
    let products = await Product.find({});
    let shopCategoryFifth = products.slice(4,5)[0]
    console.log('Shop category fourth item fetched'+ shopCategoryFifth)
    res.send(shopCategoryFifth)
})

// Shop category list of products (6th)

app.get('/shopsixth', async (req,res) => {
    let products = await Product.find({});
    let shopCategorySixth = products.slice(5,6)[0]
    console.log('Shop category fourth item fetched'+ shopCategorySixth)
    res.send(shopCategorySixth)
})

// Shop category list of products (7th)

app.get('/shopseventh', async (req,res) => {
    let products = await Product.find({});
    let shopCategorySeventh = products.slice(6,7)[0]
    console.log('Shop category fourth item fetched'+ shopCategorySeventh)
    res.send(shopCategorySeventh)
})


// Creating endpoint for rest items in newarrivals collection data

app.get('/newarrivals', async (req,res) => {
    let products = await Product.find({});
    let newarrivals = products.slice(1,3)
    console.log('New arrivals items fetched'+ newarrivals)
    res.send(newarrivals)
})

//creating middleware for fetch users
const fetchUser = async (req,res,next) => {
    const token = req.header('auth-token');
    if ( !token ) {
        res.status(401).send({errors: 'Authenticate using valid token'})
    }
    else {
        try {
            const data = jwt.verify(token,'secret_ecom');
            req.user = data.user;
            next();
        } catch (error) {
            res.status(401).send({errors: 'Authenticate using a valid token'})
        }
    }
}

app.post('/addtocart',fetchUser,async (req,res) => {
    let userData = await Users.findOne({_id:req.user.id})
    userData.cartData[req.body.itemId] += 1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})
    res.send('Added')
})

app.post('/removefromcart',fetchUser,async ( req,res) => {
    let userData = await Users.findOne({_id:req.user.id})
    if (userData.cartData[req.body.itemId]>0)
    userData.cartData[req.body.itemId] -= 1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})
    res.send('Removed')
})

app.post('/getcart',fetchUser,async (req,res) => {
    console.log('getCard')
    let userData = await Users.findOne({_id:req.user.id})
    res.json(userData.cartData)
})

app.listen(port,(error)=> {
    if (!error) {
        console.log('server running on port' +port)
    }
    else {
        console.log("Error: "+error)
    }
})