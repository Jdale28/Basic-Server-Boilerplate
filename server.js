// You need to clone down your new repo that you created
// You need to run 'npm init' in console (no quotes)
// You need to run 'npm i express' in console (no quotes)
// You need to run 'touch server.js' in console (no quotes)
// You then run  'code .' in console (no quotes)


// The following is "boilerplate" for your server.js
const express = require('express')
const app = express()

const routes = require('./routes/index')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', routes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})
// End of server.js boilerplate



// Create a file called '.gitignore' in your main directory (no quotes)
// The only thing you place in here:
node_modules/
// This will ignore all your node modules when you commit
// End of .gitignore "boilerplate"




// Create a folder named routes and a file named index.js
// The following is "boilerplate" for index.js within routes
const express = require('express')
const router = express.Router()
const applicationController = require('../controllers/application')

router.get('/', applicationController.index)

module.exports = router
// End of index.js "boilerplate" within routes


// Create a folder named controllers and a file named application.js
// The following is "boilerplate" for application.js within controllers folder
const applicationController = {
    index: (req, res) => {
        res.send('Hey whats up this is app index')
    }
}

module.exports = applicationController
// End of application.js "boilerplate" within controllers




// In your console run 'npm i mongoose' (no quotes)
// In your code, create a folder named db with a file named connections.js
// The following is "boilerplate" for using Mongoose
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/store-samples')
mongoose.connection.once('open', () = (
    console.log('Mongoose has connected to MongoDb')
))

module.exports = mongoose
// End of Mongoose "boilerplate"




// Beginning of Model "boilerplate" with store and products as examples
// Beginning of store.js model "boilerplate"
// Create a folder called Models and a file named store.js
const mongoose = require('../db/connections')
const Schema = mongoose.schema
const Store = new Schema ({
    name: String,
    location: String,
    hours: String,
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
})

module.exports = mongoose.model('Store', Store)
// End of store model "boilerplate"



// Beginning of product.js model "boilerplate"
// Create a file named product.js within model folder
const mongoose = require('../db/connections')
const Schema = mongoose.schema
const Product = new Schema ({
    name: String,
    proce: Number,
})

module.exports = mongoose.model('Product', Product)
// end of product.js "boilerplate"
// end of Model folder "boilerplate"




// Beginning of seeds "boilerplate"
// In your code, create a folder called db and a folder named seeds.js 
const Store = require('../models/Store.js')
const Product = require('../models/Product.js')
const mongoose = require('./connections')

const apple = new Product ({
    name: "MacBook Pro",
    price: 3
})

const bread = new Product ({
    name: "MacBook Pro",
    price: 5
})

const kroger = new Store({
    name: "Kroger",
    location: "Edgewood Shopping Center",
    hours: "Open 24hrs",
    products: [apple, bread]
})

// This clears your database of extraneous information prior to seeding your database
Store.remove({})
    .then(() => Product.insertMany([apple, bread]))
    .then(() => kroger.save())
    .then(() => target.save())
    .then(() => console.log("Database seeded successfully"))
    .then(() => mongoose.connection.close())
// End of seed.js "boilerplate"