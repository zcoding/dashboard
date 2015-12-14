import React from 'react'
import Button from 'components/Button'

export default class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="db-g db-padding">
        <div className="u-sm-4">
          <div className="db-panel">
            <Button color="primary">primary 样式</Button>
            <Button color="secondary">secondary 样式</Button>
            <Button color="success">success 样式</Button>
            <Button color="warning" type="button">warning 样式</Button>
            <Button color="danger" type="button">danger 样式</Button>
            <Button color="tips" type="button">tips 样式</Button>
            <Button color="info" type="button">info 样式</Button>
            <Button color="dark" type="button">dark 样式</Button>
            <Button>default 样式</Button>
            <Button radius>radius 样式</Button>
            <Button round>round 样式</Button>
          </div>
        </div>
        <div className="u-sm-4">
          <div className="db-panel">
            <button className="db-btn db-btn-d-primary" type="button">primary样式</button>
            <button className="db-btn db-btn-d-secondary" type="button">secondary样式</button>
            <button className="db-btn db-btn-d-success" type="button">success 样式</button>
            <button className="db-btn db-btn-d-warning" type="button">warning 样式</button>
            <button className="db-btn db-btn-d-danger" type="button">danger 样式</button>
            <button className="db-btn db-btn-d-tips" type="button">tips 样式</button>
            <button className="db-btn db-btn-d-info" type="button">info 样式</button>
            <button className="db-btn db-btn-d-dark" type="button">dark 样式</button>
            <button className="db-btn db-btn-d-dark db-radius" type="button">dark radius 样式</button>
            <button className="db-btn db-btn-d-dark db-round" type="button">dark round 样式</button>
          </div>
        </div>
        <div className="u-sm-4">
          <div className="db-panel">
            <button className="db-btn db-btn-g-primary db-radius" type="button">primary radius 样式</button>
            <button className="db-btn db-btn-g-secondary db-round" type="button">secondary round 样式</button>
            <button className="db-btn db-btn-g-success" type="button">success 样式</button>
            <button className="db-btn db-btn-g-warning" type="button">warning 样式</button>
            <button className="db-btn db-btn-g-danger" type="button">danger 样式</button>
            <button className="db-btn db-btn-g-tips" type="button">tips 样式</button>
            <button className="db-btn db-btn-g-info" type="button">info 样式</button>
            <button className="db-btn db-btn-g-dark" type="button">dark 样式</button>
          </div>
        </div>
        <div className="u-sm-4">
          <div className="db-panel"><button className="db-btn db-btn-primary db-float db-radius" type="button">primary float radius 样式</button></div>
        </div>
      </div>
    )
  }

}
