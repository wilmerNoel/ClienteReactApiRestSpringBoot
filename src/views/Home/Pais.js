import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Panel} from 'primereact/panel';
import {Menubar} from 'primereact/menubar';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

import 'primereact/resources/themes/nova-alt/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import PaisService from '../../service/PaisService';
import Menu from './Menu';

export class Pais extends Component{
  constructor(){
    super();
    this.state = {
      visible: false,
      pais: {
        idPais: null,
        nombre: null
      },
      selectedPais: {
      }
    };
    this.items = [
      {
        label: 'Nuevo',
        icon: 'pi pi-wf pi-plus',
        command: ()=>{this.mostrarDialogoRegistro()}
      },
      {
        label: 'Editar',
        icon: 'pi pi-wf pi-pencil',
        command: ()=>{this.showEditPais()}
      },
      {
        label: 'Eliminar',
        icon: 'pi pi-wf pi-trash',
        command: ()=>{this.delete()}
      }
  ];
  this.items1 = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      url: '/ciudad'
    },
    {
      label: 'Calendar', 
      icon: 'pi pi-fw pi-calendar'
    },
    {
      label: 'Edit', 
      icon: 'pi pi-fw pi-pencil'
    },
    {
      label: 'Documentation', 
      icon: 'pi pi-fw pi-file'
    },
    {
      label: 'Settings', 
      icon: 'pi pi-fw pi-cog'
    }
];
    this.paisService = new PaisService();
    this.save = this.save.bind(this);
    this.delete = this.delete.bind(this);
    this.footer =(
      <div>
        <Button label="Guardar" icon="pi pi-check" onClick={this.save} />
      </div>
    );
  }
  componentDidMount(){
    this.paisService.getAll().then(data => this.setState({paises: data}));
  }
  save(){
    this.paisService.save(this.state.pais).then(data => {
      this.setState({
        visible: false,
        pais: {
          idPais: null,
          nombre: null
        }
      })
      //this.toast.current.show({severity: 'success', summary: 'Exito!!!', detail: 'registro creado correctamente.'});
      this.paisService.getAll().then(data => this.setState({paises: data}));
    })
  }
  render(){
    return(
      <Panel>
            <Menu />
            <Menubar model={this.items} />
            <DataTable value={this.state.paises} paginator={true} rows='10' selectionMode="single" selection={this.state.selectedPais} onSelectionChange={e => this.setState({selectedPais: e.value})}>
              <Column field="idPais" header="ID"></Column>
              <Column field="nombre" header="NOMBRE"></Column>
            </DataTable>
            <Dialog header="Registrar Pais" footer={this.footer} visible={this.state.visible} style={{ width: '30%' }} modal={true} onHide={() => this.setState({visible: false})}>
                <span className="p-float-label">
                <InputText value={this.state.pais.nombre} style={{width: '100%'}} id="nombre" onChange={(e) => {
                    let valor = e.target.value;
                    this.setState(prevState =>{
                    console.log(valor);
                    let pais = Object.assign({}, prevState.pais)
                    pais.nombre = valor;
                    return { pais };

                  })}
                } />
                <label htmlFor="nombre">Nombre</label>
                </span>
            </Dialog>
            <Toast></Toast>
      </Panel>
    );
  }
  mostrarDialogoRegistro(){
    this.setState({
      visible : true,
      pais: {
        idPais: null,
        nombre: null
      }
    })
  }
  showEditPais(){
    this.setState({
      visible: true,
      pais: {
        idPais: this.state.selectedPais.idPais,
        nombre: this.state.selectedPais.nombre
      },
      
    });
  }
  delete(){
    if(window.confirm("¿Realmente desea eliminar el pais?")){
        this.paisService.delete(this.state.selectedPais.idPais).then(data => {
        this.paisService.getAll().then(data => this.setState({paises: data}));
      })
    }
  }
}
export default Pais;