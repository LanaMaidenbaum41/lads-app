import React from 'react';
import MainApp from './';
import Page404 from './common/404';
import Login from './components/login/Login.js'
import Lessons from './components/teacher/lessons/lessons'
import Lesson from './components/teacher/lesson/lesson'
import {Switch, Route, Redirect} from 'react-router-dom';

const Routes = () => (
    <div className="container">
        <Switch>
            <Route name="home" exact path='/' component={Login} />
       
            <Route exact path="/login" component={Login} />
            <Route exact path="/lessons" component={Lessons} />
          
            <Route exact path="/lesson" component={Lesson} />

            <Route path="*" component={Page404}/>
            {/* <Redirect from="/" to="/login" /> */}
        </Switch>
    </div>
)

export default Routes;
