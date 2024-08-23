var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
console.log(`Your API key is ${process.env.API_KEY}`);
const app = express();

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('dist'))

console.log(__dirname);

// Variables for url and api key
   const baseUrl= "https://api.meaningcloud.com/sentiment-2.1"
   const apiKey = process.env.API_KEY // Securely loaded from environment variables


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    })


// POST Route

app.post('/api', async (req, res) => {
    const  url = req.body.url;

    const apiUrl = `${baseUrl}?key=${apiKey}&url=${url}&lang=en`;

    try {
        
        const apiResponse = await fetch(apiUrl);
        const apiData = await apiResponse.json();

        
            res.json({
                polarity: apiData.score_tag,       
                subjectivity: apiData.subjectivity, 
                text: content.substring(0, 300)    
            });
        
    } catch (error) {
        console.error('Error processing the URL:', error);
        res.status(500).json({ message: 'An error occurred while processing your request.' });
    }
});


// Designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!');
});


