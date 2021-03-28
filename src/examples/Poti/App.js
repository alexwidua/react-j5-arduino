import React, { useEffect, useState } from "react"
import socketIOClient from "socket.io-client"
import PotiUI from "./components/PotiUI"

const socketSrv = process.env.APP_LOCAL_IP + ":" + process.env.APP_LOCAL_PORT
const socket = socketIOClient(socketSrv)

function App() {
    const [value, setValue] = useState(0)

    useEffect(() => {
        socket.on("poti_change", (value) => {
            setValue(value)
        })
    })

    return (
        <div className="container">
            <PotiUI value={value} />
        </div>
    )
}

export default App
