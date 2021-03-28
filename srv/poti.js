// Set up server
require("dotenv").config()
const server = require("http").createServer()
const port = process.env.APP_LOCAL_PORT
const io = require("socket.io")(server, {
    cors: {
        origin: "*",
    },
})

// Setup Johnny-Five
const { Board, Sensor } = require("johnny-five")
const board = new Board()

// Initialize board and sensors
board.on("ready", () => {
    const poti = new Sensor("A3")

    // Listen for changes and emit changes to React client
    poti.on("change", () => {
        const { raw } = poti
        console.log("Value: " + raw)
        // --> Emit to React client
        io.emit("poti_change", raw)
    })
})

// Spin up server
server.listen(port, () => {
    console.log("Listening on port:" + port)
})
