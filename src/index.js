import React from 'react'
import { render } from 'react-dom'

// Uncomment one of the examples
import App from './examples/Accelerometer/App'
//import App from "./examples/LEDMatrix/App"
//import App from "./examples/Potentiometer/App"

// import styles
import './assets/reset.css'
import './assets/style.css'

render(<App />, document.getElementById('root'))
