const express =  require('express');
const mongoose =  require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());

const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', socket => {
    socket.on('connectRoom', box => {
        socket.join(box);
    })
})

// Configuração do MongoDB Atlas
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-cwm8i.mongodb.net/omnistack?retryWrites=true', {
    useNewUrlParser: true
});

app.use((req, res, next) => {
    req.io = io;

    return next();
})

// permite o envio de json
app.use(express.json());
// permite enviar arquivos nas resquisições
app.use(express.urlencoded({ extended: true }));
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')))

app.use(require('./routes'));

server.listen(3333);