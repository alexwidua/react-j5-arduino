import React from "react"
import socketIOClient from "socket.io-client"
import MatrixControl from "./components/MatrixControl"

const socketSrv = process.env.APP_LOCAL_IP + ":" + process.env.APP_LOCAL_PORT
const socket = socketIOClient(socketSrv)

function App() {
    const handleMatrixChange = (payload) => {
        socket.emit("matrix_change", payload)
    }

    return (
        <div className="container matrix">
            <MatrixControl onMatrixChange={handleMatrixChange} />
        </div>
    )
}

export default App
