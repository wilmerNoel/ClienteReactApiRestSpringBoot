import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';
import  Home  from "../views/Home/Ciudad.js"
import Four0Four from "../views/Four0Four";
import Pais from '../views/Home/Pais.js';
import Login from '../views/Home/Login.js';
import Menu from '../views/Home/Menu.js';
export default function Routes() {
    return(
        <Router>
            <Switch>
                <Route path="/ciudad" exact>
                    <Home></Home>
                </Route>
                <Route path="/pais" exact>
                    <Pais></Pais>
                </Route>
                <Route path="/" exact>
                    <Login />
                </Route>
                <Route path="/menu" exact>
                    <Menu></Menu>
                </Route>
                <Route>
                    <Four0Four></Four0Four>
                </Route>
            </Switch>
        </Router>
    )
}