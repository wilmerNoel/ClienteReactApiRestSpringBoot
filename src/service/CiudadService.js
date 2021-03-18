import axios from 'axios';
class CiudadService{
    baseUrl = "http://localhost:8080/api/ventas/ciudad/";
    async getAll(){
        const res = await axios.get(this.baseUrl + "listar");
        return res.data;
    }
    async save(ciudad){
        const res = await axios.post(this.baseUrl + "guardar", ciudad);
        return res.data;
    }
    delete(id){
        return axios.delete(this.baseUrl + "eliminar/"+id).then(res => res.data);
    }
}
export default CiudadService;