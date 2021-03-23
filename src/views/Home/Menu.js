import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import {Panel} from 'primereact/panel';
import { Menubar } from 'primereact/menubar';
import 'primereact/resources/themes/nova-alt/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default class Menu extends Component{
  constructor(){
    super();
    this.state = {
      
    };
    this.items2 = [
      {
         label:'Opciones',
         icon:'pi pi-fw pi-home',
         items:[
            {
               label:'Pais',
               icon:'pi pi-fw pi-cog',
               items:[
                  {
                     label:'paises',
                     icon:'pi pi-fw pi-bookmark',
                     url: '/pais'
                  },
                  {
                     label:'Video',
                     icon:'pi pi-fw pi-video'
                  },
    
               ]
            },
            {
               label:'Delete',
               icon:'pi pi-fw pi-trash',
            },
            {
               separator:true
            },
            {
               label:'salir',
               icon:'pi pi-fw pi-power-off'
            }
         ]
      },
      {
         label:'Edit',
         icon:'pi pi-fw pi-pencil',
         items:[
            {
               label:'Left',
               icon:'pi pi-fw pi-align-left'
            },
            {
               label:'Right',
               icon:'pi pi-fw pi-align-right'
            },
            {
               label:'Center',
               icon:'pi pi-fw pi-align-center'
            },
            {
               label:'Justify',
               icon:'pi pi-fw pi-align-justify'
            },
    
         ]
      },
      {
         label:'Users',
         icon:'pi pi-fw pi-user',
         items:[
            {
               label:'New',
               icon:'pi pi-fw pi-user-plus',
    
            },
            {
               label:'Delete',
               icon:'pi pi-fw pi-user-minus',
    
            },
            {
               label:'Search',
               icon:'pi pi-fw pi-users',
               items:[
                  {
                     label:'Filter',
                     icon:'pi pi-fw pi-filter',
                     items:[
                        {
                           label:'Print',
                           icon:'pi pi-fw pi-print'
                        }
                     ]
                  },
                  {
                     icon:'pi pi-fw pi-bars',
                     label:'List'
                  }
               ]
            }
         ]
      },
      {
         label:'Reportes',
         icon:'pi pi-fw pi-chart-bar',
         items:[
            {
               label:'Usuarios',
               icon:'pi pi-fw pi-users',
               items:[
                  {
                     label:'Activos',
                     icon:'pi pi-fw pi-check-square'
                  },
                  {
                     label:'Inactivos',
                     icon:'pi pi-fw pi-times-circle'
                  },
    
               ]
            },
            {
               label:'Ventas',
               icon:'pi pi-fw pi-calendar-times',
               items:[
                  {
                     label:'Remove',
                     icon:'pi pi-fw pi-calendar-minus'
                  }
               ]
            }
         ]
      },
      {
         label:'Quit',
         icon:'pi pi-fw pi-power-off',
         url: '/login'
      }
    ];
  }
  render(){
    return(
      <Panel>
        <Menubar model={this.items2}/>    
      </Panel>
    );
  }
  
}
