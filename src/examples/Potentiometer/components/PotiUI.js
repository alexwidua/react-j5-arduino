import React from "react"

const PotiUI = (props) => {
    const { value } = props

    const circleDisplay = {
        width: "400px",
        height: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all .2s",
        borderRadius: "100%",
        transition: "all 0.35s",
        backgroundImage: `conic-gradient(from 0deg at 50% 50%, #FFFFFF 0deg, #FFFFFF ${
            value / 2
        }deg, #1E1E1E ${value / 2}deg, #1E1E1E 360deg)`,
    }

    const innerCircle = {
        width: "300px",
        height: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#1E1E1E",
        borderRadius: "100%",
        color: "#fff",
        fontSize: "48px",
    }

    return (
        <>
            <div style={circleDisplay}>
                <div style={innerCircle}>{value}</div>
            </div>
        </>
    )
}

export default PotiUI
