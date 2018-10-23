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