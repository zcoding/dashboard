import React                   from 'react'
import ReactDOM                from 'react-dom'
import { Router, Route, Link } from 'react-router'

import App                     from 'components/App.js'

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
    </Route>
  </Router>
),  document.getElementById('app-main'))
