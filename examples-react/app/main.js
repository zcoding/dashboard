import React                   from 'react'
import ReactDOM                from 'react-dom'
import { Router, Route, Link } from 'react-router'

import Buttons                 from 'components/buttons.js'
import Aside                   from 'components/aside.js'
import Header                  from 'components/header.js'
import Home                    from 'components/home.js'
import Forms                   from 'components/forms.js'
import Tables                  from 'components/tables.js'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Aside></Aside>
        <Header></Header>
        <div className="db-content">
          { this.props.content || <Home></Home> }
        </div>
      </div>
    )
  }
}

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="buttons" components={ {content: Buttons} }></Route>
      <Route path="forms" components={ {content: Forms} }></Route>
      <Route path="tables" components={ {content: Tables} }></Route>
    </Route>
  </Router>
),  document.getElementById('app-main'))
