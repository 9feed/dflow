import React from 'react'
import { Node } from 'flow-view'

class InvalidNode extends Node {
  getBody () {
    const {
      bodyHeight,
      fontSize,
      pinSize,
      text
    } = this.props

    // Heuristic value, based on Courier font.
    // (comment copyed from flow-view Node)
    const margin = fontSize * 0.2

    return (
      <text
        fill={'tomato'}
        x={pinSize}
        y={bodyHeight + pinSize - margin}
      >
        <tspan>{text}</tspan>
      </text>
    )
  }
}

export default InvalidNode
