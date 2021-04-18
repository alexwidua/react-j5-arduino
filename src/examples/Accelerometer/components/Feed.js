import React, { useState, useEffect, useRef } from 'react'

const Feed = (props) => {
	const { value } = props
	const [scrollPos, setScrollPos] = useState(0)
	const feedRef = useRef(null)
	const feedItems = 20

	const feedHeight = () => {
		return feedRef.current.clientHeight - window.innerHeight
	}

	useEffect(() => {
		// 'scroll' down if negative roll/pitch
		if (value > 0 && Math.abs(scrollPos) < feedHeight()) {
			setScrollPos((prevPos) => prevPos - Math.abs(1 * value))
		}
		// 'scroll' up if positive roll/pitch
		else if (value < -0 && scrollPos < 0) {
			setScrollPos((prevPos) => prevPos + Math.abs(1 * value))
		}
	}, [value])

	// Pseudo scroll using css transforms for smoother scroll experience
	const pseudoScroll = {
		position: 'relative',
		transform: `translateY(${scrollPos}px)`,
		transition: 'transform 0.1s'
	}

	// Create feed with random unsplash images
	const data = new Array(feedItems).fill().map((item, index) => {
		return (
			<img
				src={'https://source.unsplash.com/random?' + index}
				key={index}
			/>
		)
	})

	return (
		<div className="feed" style={pseudoScroll} ref={feedRef}>
			{data}
		</div>
	)
}

export default Feed
