import http from "http";
import SocketIO from "socket.io"
import express from "express";

const app = express()
const path = require('path');

app.set(`view engine`, 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use('/public', express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

const handleListen = () => console.log('Listening on http://localhost:3000');

const httpServer = http.createServer(app);
const wsServer = SocketIO(server);

const sockets = [];

wss.on("connection", (socket) => {
    sockets.push(socket);
    socket["nickname"] = "Anon";

    console.log("Connected to Browser ok")

    socket.on("close", () => console.log("Disconnected from the Browser"));

    socket.on("message", (msg) => { 
        const message = JSON.parse(msg);

        switch (message.type) {
            case "new_message":
                sockets.forEach(s => {
                    s.send(`${socket.nickname}: ${message.payload}`)
                });
            case "nickname":
                socket["nickname"] = message.payload;
        }
    });
});

httpServer.listen(3000, handleListen);