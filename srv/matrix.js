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
const { Board, Led } = require('johnny-five')
const board = new Board()

// Initialize board and sensors
board.on('ready', () => {
	const matrix = new Led.Matrix({
		// Make sure that LED matrix type matches your component
		// Refer to: http://johnny-five.io/examples/#led-digits--matrix
		controller: 'HT16K33',
		isBicolor: true
	})

	// Listen for events emitted FROM React client
	io.on('connection', (socket) => {
		// Receive matrix_change event FROM client
		socket.on('matrix_change', (matrixMap) => {
			matrix.draw(matrixMap)
		})
	})
})

// Spin up server
server.listen(port, () => {
	console.log('Listening on port:' + port)
})
