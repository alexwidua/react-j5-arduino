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
const { Board, Accelerometer } = require('johnny-five')
const board = new Board()

// Initialize board and sensors
board.on('ready', function () {
	const accelerometer = new Accelerometer({
		// Make sure that pins match your setup
		pins: ['A0', 'A1', 'A2'],
		autoCalibrate: true
	})

	// Listen for serial changes and emit socket event to React client
	accelerometer.on('change', () => {
		const { roll } = accelerometer
		console.log('roll: ' + roll)
		// Emit event TO React client
		io.emit('data_change', roll)
	})
})

// Spin up server
server.listen(port, () => {
	console.log('Listening on port:' + port)
})
