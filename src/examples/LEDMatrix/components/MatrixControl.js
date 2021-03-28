import React, { useEffect, useState } from "react"

/**
 * This component stores the matrix state locally,
 * this means that the state will not be synced to
 * other devices.
 *
 * Improvement idea: instead of mutating
 * a local state, emit the changes to the socket srv
 * and let the socket srv handle the rest.
 */

const Matrix = (props) => {
    const initState = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ]

    const [matrixMap, setMatrixMap] = useState(initState)

    useEffect(() => {
        // join array so it becomes readable for johnny-five
        const joinedMap = matrixMap.map((item) => item.join(""))
        props.onMatrixChange(joinedMap)
    }, [matrixMap])

    const handleChange = (index, subindex) => {
        const newMap = [...matrixMap]
        ;[newMap[index][subindex]] = [newMap[index][subindex] == 0 ? 1 : 0]
        setMatrixMap(newMap)
    }

    const clearMap = () => {
        setMatrixMap(initState)
    }

    return (
        <div>
            {matrixMap.map((item, index) => {
                return (
                    <div key={index}>
                        {item.map((subitem, subindex) => {
                            return (
                                <input
                                    type="checkbox"
                                    key={subindex}
                                    checked={subitem}
                                    onChange={() => handleChange(index, subindex)}
                                />
                            )
                        })}
                    </div>
                )
            })}
            <button onClick={() => clearMap()}>Clear</button>
        </div>
    )
}

export default Matrix
