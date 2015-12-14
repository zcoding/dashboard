import React from 'react'
import ClassNames from 'classnames'

export default class Button extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    let classnames = ClassNames('db-btn', `db-btn-g-${this.props.color}`, {'db-radius': this.props.radius}, {'db-round': this.props.round})
    return <button className={classnames} type="button">{this.props.children}</button>
  }

}
