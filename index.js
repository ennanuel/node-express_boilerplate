// Importing express for usage
const express = require('express')

// Initializing express
const app = express();

// What runs when the app is initailized
app.listen(3000, () => {
    console.log('Yay! My backend is running.')
})