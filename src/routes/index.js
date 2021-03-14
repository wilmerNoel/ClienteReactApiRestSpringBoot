import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from 'react-router-dom';
import  Home  from "../views/Home"
export default function Routes() {
    return(
        <Router>
            <Route path="/" exact>
                <Home></Home>
            </Route>
        </Router>
    )
}