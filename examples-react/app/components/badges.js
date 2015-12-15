import React from 'react'

export default class Badges extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="db-g db-padding">
        <div className="u-sm-16">
          <div className="db-panel">
            <span className="db-badge">12</span>
            <span className="db-badge db-badge-danger">7</span>
            <span className="db-badge db-badge-warning">1</span>
            <span className="db-badge db-badge-tips">10</span>
            <span className="db-badge db-badge-primary">12</span>
            <span className="db-badge db-badge-secondary">12</span>
            <span className="db-badge db-badge-dark">12</span>
            <span className="db-badge db-badge-success">12</span>
            <span className="db-badge db-badge-info">12</span>
          </div>
        </div>

        <div className="u-sm-16">
          <div className="db-panel">
            <span className="db-label">Default</span>
            <span className="db-label db-label-danger">Danger</span>
            <span className="db-label db-label-warning">Warning</span>
            <span className="db-label db-label-tips">Tips</span>
            <span className="db-label db-label-primary">Primary</span>
            <span className="db-label db-label-secondary">Secondary</span>
            <span className="db-label db-label-dark">Dark</span>
            <span className="db-label db-label-success">Success</span>
            <span className="db-label db-label-info">Info</span>
          </div>
        </div>
      </div>
    )
  }

}
