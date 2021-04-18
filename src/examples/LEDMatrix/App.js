import React from 'react'
import socketIOClient from 'socket.io-client'
import MatrixControl from './components/MatrixControl'

const socketSrv = process.env.APP_LOCAL_IP + ':' + process.env.APP_LOCAL_PORT
const socket = socketIOClient(socketSrv)

function App() {
	// Handle matrixMap that got passed up from child component
	const handleMatrixChange = (matrixMap) => {
		socket.emit('matrix_change', matrixMap)
	}

	return (
		<div className="container matrix">
			<MatrixControl onMatrixChange={handleMatrixChange} />
		</div>
	)
}

export default App
