import React from 'react'

export default class Badges extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="grid padding">
        <div className="u-sm-16">
          <div className="db-panel">
            <span className="badge">12</span>
            <span className="badge badge-danger">7</span>
            <span className="badge badge-warning">1</span>
            <span className="badge badge-tips">10</span>
            <span className="badge badge-primary">12</span>
            <span className="badge badge-secondary">12</span>
            <span className="badge badge-dark">12</span>
            <span className="badge badge-success">12</span>
            <span className="badge badge-info">12</span>
          </div>
        </div>

        <div className="u-sm-16">
          <div className="db-panel">
            <span className="label">Default</span>
            <span className="label label-danger">Danger</span>
            <span className="label label-warning">Warning</span>
            <span className="label label-tips">Tips</span>
            <span className="label label-primary">Primary</span>
            <span className="label label-secondary">Secondary</span>
            <span className="label label-dark">Dark</span>
            <span className="label label-success">Success</span>
            <span className="label label-info">Info</span>
          </div>
        </div>
      </div>
    )
  }

}
