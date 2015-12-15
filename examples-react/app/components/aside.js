import React    from 'react'
import { Link } from 'react-router'

export default class Aside extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="db-aside">
        <div className="navside">
          <div className="nav-brand">
            <h1>Dashboard</h1>
          </div>
          <div className="db-hide-scroll flex">
            <nav className="scroll">
              <ul>
                <li><Link to={'/'}><span className="db-icon"></span><span className="nav-text">首页(Home)</span></Link></li>
                <li><Link to={'/buttons'}><span className="db-icon"></span><span className="nav-text">按钮(Buttons)</span></Link></li>
                <li><Link to={'/forms'}><span className="db-icon"></span><span className="nav-text">表单(Forms)</span></Link></li>
                <li>
                  <a href="javascript:;"><span className="db-icon"></span><span className="nav-text">多级菜单 Level 1</span><span className="db-icon-toggle"></span></a>
                  <ul>
                    <li><Link to={'/'}><span className="db-icon"></span><span className="nav-text">第二级 Level 2</span></Link></li>
                    <li>
                      <a href="javascript:;"><span className="db-icon"></span><span className="nav-text">第二级 Level 2</span></a>
                      <ul>
                        <li><Link to={'/'}><span className="db-icon"></span><span className="nav-text">第三级 Level 3</span></Link></li>
                        <li><Link to={'/'}><span className="db-icon"></span><span className="nav-text">第三级 Level 3</span></Link></li>
                        <li><Link to={'/'}><span className="db-icon"></span><span className="nav-text">第三级 Level 3</span></Link></li>
                        <li><Link to={'/'}><span className="db-icon"></span><span className="nav-text">第三级 Level 3</span></Link></li>
                        <li><Link to={'/'}><span className="db-icon"></span><span className="nav-text">第三级 Level 3</span></Link></li>
                        <li><Link to={'/'}><span className="db-icon"></span><span className="nav-text">第三级 Level 3</span></Link></li>
                        <li><Link to={'/'}><span className="db-icon"></span><span className="nav-text">第三级 Level 3</span></Link></li>
                        <li><Link to={'/'}><span className="db-icon"></span><span className="nav-text">第三级 Level 3</span></Link></li>
                        <li><Link to={'/'}><span className="db-icon"></span><span className="nav-text">第三级 Level 3</span></Link></li>
                        <li><Link to={'/'}><span className="db-icon"></span><span className="nav-text">第三级 Level 3</span></Link></li>
                        <li><Link to={'/'}><span className="db-icon"></span><span className="nav-text">第三级 Level 3</span></Link></li>
                        <li><Link to={'/'}><span className="db-icon"></span><span className="nav-text">第三级 Level 3</span></Link></li>
                        <li><Link to={'/'}><span className="db-icon"></span><span className="nav-text">第三级 Level 3</span></Link></li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:;"><span className="db-icon"></span><span className="nav-text">第二级 Level 2</span><span className="db-icon-toggle"></span></a>
                      <ul>
                        <li><Link to={'/'}><span className="db-icon"></span><span className="nav-text">第三级 Level 3</span></Link></li>
                        <li><Link to={'/'}><span className="db-icon"></span><span className="nav-text">第三级 Level 3</span></Link></li>
                        <li><Link to={'/'}><span className="db-icon"></span><span className="nav-text">第三级 Level 3</span></Link></li>
                        <li><Link to={'/'}><span className="db-icon"></span><span className="nav-text">第三级 Level 3</span></Link></li>
                        <li><Link to={'/'}><span className="db-icon"></span><span className="nav-text">第三级 Level 3</span></Link></li>
                        <li><Link to={'/'}><span className="db-icon"></span><span className="nav-text">第三级 Level 3</span></Link></li>
                        <li><Link to={'/'}><span className="db-icon"></span><span className="nav-text">第三级 Level 3</span></Link></li>
                        <li><Link to={'/'}><span className="db-icon"></span><span className="nav-text">第三级 Level 3</span></Link></li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div className="nav-footer">
            <nav>
              <ul>
                <li><Link to={'/'}>Trending</Link></li>
                <li><Link to={'/'}>Stars</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    )
  }

}
