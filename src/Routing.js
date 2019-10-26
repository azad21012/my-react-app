import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './views/home';
import Login from './containers/Login';
import auth from './hoc/auth';


class Routing extends React.Component {

    render() {
        // console.log('mount routing') // 1 time rendered
        return (
            <Switch>
                <Route path="/login" component={ auth(Login,false) } />
                <Route path="/" component={ auth(Home,true) } />
            </Switch>
        );
    }

}


export default Routing;
