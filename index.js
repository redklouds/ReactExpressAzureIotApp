const express = require('express')


const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
// Create the server
const app = express()
// Serve our api route /cow that returns a custom talking text cow
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino); //for debugging 


const path = require('path')
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))
// Anything that doesn't match the above, send back index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})


app.get('/api/feeder', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ data: "HELLO" }));
});
app.get('/api/testString/', async (req, res, next) => {
    try {
      //const moo = cowsay.say({ text: 'Hello World MY TEST STRING!' })
      //res.json({ data: "LOVELY DAY", })
      res.send(JSON.stringify({data:"LOVELYDAY"}))
    } catch (err) {
      next(err)
    }
});


app.get('/api/feedpet', (req, res) => {
    //res.setHeader('Content-Type', 'application/json');
    //res.send(JSON.stringify({ data: "HELLO" }));


    res.setHeader('Content-Type', 'application/json');


    var Client = require('azure-iothub').Client;

    var connectionString = "HostName=pyIotFun.azure-devices.net;SharedAccessKeyName=NewPetFeedingPoli;SharedAccessKey=hCe5aCzyB1h7CyMJgbYaykuC8Cp1UTFstvrECewbO7Q=";
    if (!connectionString) {
      console.log('Please set the IOTHUB_CONNECTION_STRING environment variable.');
      process.exit(-1);
    }
    
    var targetDevice = "razarPetFeeder";
    if (!targetDevice) {
      console.log('Please give pass a device id as argument to the script (the name of the method called is methodName1 by default and can be edited directly in the script)');
      process.exit(-1);
    }
    
    var methodParams = {
      methodName: 'feedPet',
      payload: 'petfeeder',
      responseTimeoutInSeconds: 15 // set response timeout as 15 seconds
    };
    
    var client = Client.fromConnectionString(connectionString);
    
    console.log(client)
    client.invokeDeviceMethod(targetDevice, methodParams, function (err, result) {
      if (err) {
        console.error('Failed to invoke method \'' + methodParams.methodName + '\': ' + err.message);
       

      } else {
        console.log(methodParams.methodName + ' on ' + targetDevice + ':');
        console.log(JSON.stringify(result, null, 2));
        res.send(JSON.stringify({ data: result }));
      }
    });
});

// Choose the port and start the server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Mixing it up on port ${PORT}`)
})