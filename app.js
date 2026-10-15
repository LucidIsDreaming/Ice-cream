// Import the express module
import express from 'express';
//Create and instance of an express application
const app = express();
//Define a port number for our server to listen on 
const PORT = 3001;

app.use(express.static('public'));
app.get('/', (req, res) => {
    
    //res.send('Welcome to my Ice Cream Shop!');

    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

//Start the server on the designated PORT
app.listen(PORT, () => {

    console.log(`Server is running at 
        http://localhost:${PORT}`);

});