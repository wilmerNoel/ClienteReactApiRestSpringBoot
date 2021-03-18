import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Panel} from 'primereact/panel';
import {Menubar} from 'primereact/menubar';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
 

import 'primereact/resources/themes/nova-alt/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import CiudadService from '../../service/CiudadService';
import PaisService from '../../service/PaisService';
export default class Home extends Component{
    constructor(){
        super();
        this.state = {
            visible: false,
            ciudad: {
                idCiudad: null,
                nombre: null,
                idPais:null
            },
            selectedCiudad: {
            },
            pais: {
                idPais: null,
                nombre: null,
            }
        };
        this.items=[
            {
                label: 'Nuevo',
                icon: 'pi pi-wf pi-plus',
                command: ()=>{this.mostrarDialogoRegistro()}
              },
              {
                label: 'Editar',
                icon: 'pi pi-wf pi-pencil',
                command: ()=>{this.showEditCiudad()}
              },
              {
                label: 'Eliminar',
                icon: 'pi pi-wf pi-trash',
                command: ()=>{this.delete()}
              }
        ];
        this.ciudadService = new CiudadService();
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
        this.ciudadService.getAll().then(data => this.setState({ciudades: data}));
        this.paisService.getAll().then(data => this.setState({paises: data}));
    }
    save(){
        this.ciudadService.save(this.state.ciudad).then(data =>{
            this.setState({
                visible: true,
                ciudad: {
                    idCiudad: null,
                    nombre: null,
                    idPais: null
                }
            });
            this.ciudadService.getAll().then(data=> this.setState({ciudades: data}));
            document.getElementById("form-ciudad").reset();
        })
    }

    render(){
        return(
          <Panel header="Listado Ciudades" className="container">
                <Menubar model={this.items} />
                <DataTable value={this.state.ciudades} paginator={true} rows="10" selectionMode="single" selection={this.state.selectedCiudad} onSelectionChange={e => this.setState({selectedCiudad: e.value})}>
                  <Column field="idCiudad" header="ID"></Column>
                  <Column field="nombre" header="NOMBRE"></Column>
                  <Column field="idPais.nombre" header="PAIS"></Column>
                </DataTable>
                <Dialog header="Registrar Ciudad" footer={this.footer} visible={this.state.visible} style={{ width: '30%' }} modal={true} onHide={() => this.setState({visible: false})}>
                    <form id="form-ciudad">
                    <br />
                    <span className="p-float-label">
                    <Dropdown value={this.state.ciudad.idPais} options={this.state.paises} optionLabel="nombre" style={{width: '100%'}} id="pais.idPais" onChange={(e) => {
                        let valor = e.target.value;
                        this.setState(prevState =>{
                       // console.log(valor);
                        let ciudad = Object.assign({}, prevState.pais)
                        ciudad.idPais = valor;
                        return { ciudad };
    
                      })}} />
                    <label htmlFor="pais.IdPais">Selecione Pais</label>
                    </span>
                    <br />
                    <span className="p-float-label">
                    <InputText value={this.state.ciudad.nombre} style={{width: '100%'}} id="nombre" onChange={(e) => {
                        let valor = e.target.value;
                        this.setState(prevState =>{
                        //console.log(valor);
                        let ciudad = Object.assign({}, prevState.ciudad)
                        ciudad.nombre = valor;
                        return { ciudad };
    
                      })}
                    } />

                    <label htmlFor="nombre">Nombre</label>
                    </span>

                    </form>
                </Dialog>
          </Panel>
        );
      }
      mostrarDialogoRegistro(){
        this.setState({
          visible : true,
          ciudad: {
            idCiudad: null,
            nombre: null,
            idPais: null
          }
        })
      }
      showEditCiudad(){
        this.setState({
          visible: true,
          ciudad: {
            idCiudad: this.state.selectedCiudad.idCiudad,
            nombre: this.state.selectedCiudad.nombre,
            idPais: this.state.selectedCiudad.idPais
          },
          
        });
      }
      delete(){
        if(window.confirm("¿Realmente desea eliminar el Ciudad?")){
            this.ciudadService.delete(this.state.selectedCiudad.idCiudad).then(data => {
            this.ciudadService.getAll().then(data => this.setState({ciudades: data}));
          })
        }
    }
}