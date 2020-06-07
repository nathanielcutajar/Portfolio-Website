//Imports
const fs = require('fs');
const chalk = require('chalk');
const express = require('express');
const path = require('path');

const app = express();

//Resource paths
app.use(express.static('images'));
app.use(express.static('js'));
app.use(express.static('css'));
app.use(express.static('favicon'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')))
app.get('/photography', (req, res) => res.sendFile(path.join(__dirname + '/photography/index.html')))
app.get('/software', (req, res) => res.sendFile(path.join(__dirname + '/software/index.html')))
app.get('/music', (req, res) => res.sendFile(path.join(__dirname + '/music/index.html')))

//--------------------RUN SERVER----------------------
console.clear();
const args = process.argv.slice(2);
var portArg = args[0];
const defaultPort = 3000;

var port = defaultPort;
if (portArg != null) {
    port = TryParseInt(portArg, defaultPort);
}

app.listen(port, () => console.log(`Portfolio website running on http://localhost:${port}`))

//Graceful shutdown
process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Portfolio website terminated')
    })
})

//----------------HELPER METHODS----------------------
function TryParseInt(str, defaultValue) {
    var retValue = defaultValue;
    if (str !== null) {
        if (str.length > 0) {
            if (!isNaN(str)) {
                retValue = parseInt(str);
            }
            else {
                console.log(chalk.yellow('WARNING: ' + str + ' is not a number. Defaulting to ' + defaultValue));
            }
        }
    }
    return retValue;
}