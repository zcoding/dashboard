import React from 'react'
import Button from 'components/dashboard/Button'
import Button3d from 'components/dashboard/Button3d'
import ButtonGhost from 'components/dashboard/ButtonGhost'

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
            <Button3d color="primary">primary样式</Button3d>
            <Button3d color="secondary">secondary样式</Button3d>
            <Button3d color="success">success 样式</Button3d>
            <Button3d color="warning">warning 样式</Button3d>
            <Button3d color="danger">danger 样式</Button3d>
            <Button3d color="tips">tips 样式</Button3d>
            <Button3d color="info">info 样式</Button3d>
            <Button3d color="dark">dark 样式</Button3d>
            <Button3d color="dark" radius>dark radius 样式</Button3d>
            <Button3d color="dark" round>dark round 样式</Button3d>
          </div>
        </div>
        <div className="u-sm-4">
          <div className="db-panel">
            <ButtonGhost color="primary" radius>primary radius 样式</ButtonGhost>
            <ButtonGhost color="secondary" round>secondary round 样式</ButtonGhost>
            <ButtonGhost color="success">success 样式</ButtonGhost>
            <ButtonGhost color="warning">warning 样式</ButtonGhost>
            <ButtonGhost color="danger">danger 样式</ButtonGhost>
            <ButtonGhost color="tips">tips 样式</ButtonGhost>
            <ButtonGhost color="info">info 样式</ButtonGhost>
            <ButtonGhost color="dark">dark 样式</ButtonGhost>
          </div>
        </div>
        <div className="u-sm-4">
          <div className="db-panel"><Button color="primary" radius float>primary float radius 样式</Button></div>
        </div>
      </div>
    )
  }

}
