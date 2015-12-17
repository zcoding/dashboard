import React from 'react'
import ClassNames from 'classnames'

export default class Button extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    let classnames = ClassNames('btn', `btn-${this.props.color}`, {'radius': this.props.radius}, {'round': this.props.round}, {'float': this.props.float})
    return <button className={classnames} type="button">{this.props.children}</button>
  }

}
