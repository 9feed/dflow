import React from 'react'
import { Node } from 'flow-view/components'

class SubgraphNode extends Node {
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
        fill={'yellow'}
        x={pinSize}
        y={bodyHeight + pinSize - margin}
      >
        <tspan>{text}</tspan>
      </text>
    )
  }
}

export default SubgraphNode
