import axios from 'axios';

class PaisService{
    baseUrl = "http://localhost:8080/api/ventas/pais/";
    async getAll(){
        const res = await axios.get(this.baseUrl + "listar");
        return res.data;
    }
    async save(pais){
        const res = await axios.post(this.baseUrl + "guardar", pais);
        return res.data;
    }
    delete(id){
        return axios.delete(this.baseUrl + "eliminar/"+id).then(res => res.data);
    }
}
export default PaisService;