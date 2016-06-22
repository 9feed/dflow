import React, { PropTypes, Component } from 'react'

class Root extends Component {
  componentDidMount () {
    this.props.onMountRoot()
  }

  render () {
    const { title } = this.props

    return (
      <div>
        <span>{title}</span>
      </div>
    )
  }
}

Root.propTypes = {
  title: PropTypes.string
}

Root.defaultProps = { title: 'foo' }

export default Root