import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
class App extends React.Component {
  
  /*const url = 'http://localhost:8080/api/ventas/pais/listar'
  const [todos, setTodos] = useState()
  const fetchApi = async () =>{
    const response = await fetch(url)
    console.log(response.statusText)

    const responseJSON = await response.json()
    setTodos(responseJSON)
    console.log(responseJSON)
    
  }
  useEffect(() => {
    fetchApi()
  },[])
  return (
      
      <div className="App">
              <br />
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>ACCIONES</th>
                  </tr>
                </thead>
        {
          !todos ? 'cargando.......':
          todos.map((todo, index)=>{
            return(
                <tbody>
                  <tr key={index}>
                    <td>{todo.idPais}</td>
                    <td>{todo.nombre}</td>
                    <td>
                      <button className="btn btn-primary">editar</button>
                      <button className="btn btn-danger">eliminar</button>
                    </td>
                  </tr>
                </tbody>
              )
            })
        }
        </table> 
    </div>
  );*/
}
export default App;
