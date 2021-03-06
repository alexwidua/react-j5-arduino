// Set up server
require('dotenv').config()
const server = require('http').createServer()
const port = process.env.APP_LOCAL_PORT
const io = require('socket.io')(server, {
	cors: {
		origin: '*'
	}
})

// Setup Johnny-Five
const { Board, Sensor } = require('johnny-five')
const board = new Board()

// Initialize board and sensors
board.on('ready', () => {
	// Make sure that pin matches your setup
	const poti = new Sensor('A0')

	// Listen for serial changes and emit socket event to React client
	poti.on('change', () => {
		const { raw } = poti
		console.log('Value: ' + raw)
		// Emit event TO React client
		io.emit('data_change', raw)
	})
})

// Spin up server
server.listen(port, () => {
	console.log('Listening on port:' + port)
})
