import {Route, Switch} from 'react-router-dom'

import CourseItem from './components/CourseItem'

import CourseItemDetails from './components/CourseItemDetails'

import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={CourseItem} />
      <Route exact path="/courses/:id" component={CourseItemDetails} />
      <Route component={NotFound} />
    </Switch>
  </div>
)
export default App