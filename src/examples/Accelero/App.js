import React, { useEffect, useState } from "react"
import socketIOClient from "socket.io-client"
import Feed from "./components/Feed"

const socketSrv = process.env.APP_LOCAL_IP + ":" + process.env.APP_LOCAL_PORT
const socket = socketIOClient(socketSrv)

function App() {
    const [value, setValue] = useState(0)

    useEffect(() => {
        socket.on("accelero_change", (value) => {
            setValue(value)
        })
    })
    return (
        <div className="container">
            <Feed value={value} />
        </div>
    )
}

export default App
