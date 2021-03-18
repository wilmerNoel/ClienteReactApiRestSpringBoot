import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';
import  Home  from "../views/Home/Ciudad.js"
import Four0Four from "../views/Four0Four";
export default function Routes() {
    return(
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home></Home>
                </Route>
                <Route>
                    <Four0Four></Four0Four>
                </Route>
            </Switch>
        </Router>
    )
}