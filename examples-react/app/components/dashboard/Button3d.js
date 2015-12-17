import React from 'react'
import ClassNames from 'classnames'

export default class Button extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    let classnames = ClassNames('btn', `btn-d-${this.props.color}`, {'radius': this.props.radius}, {'round': this.props.round})
    return <button className={classnames} type="button">{this.props.children}</button>
  }

}
