import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import 'primereact/resources/themes/nova-alt/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Routes from './routes';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      
    }
  }
  render(){
    return(
        <Routes />      
    );
  }
  
}
