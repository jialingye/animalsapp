const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const {PORT,DATABASE_URL} = require('./config')


app.get('/', (req, res) => {
    res.send('default route')
})
// middleware
app.use(express.urlencoded({extended: false}))
app.use(express.json())

const animalController = require('./controllers/animal');
app.use('/animals', animalController);

// Listener
mongoose.connect(DATABASE_URL).then(
    ()=>{
        app.listen(PORT, () => console.log(`express is listening on port: ${PORT}`));
    }
)
    


