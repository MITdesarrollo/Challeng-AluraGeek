//GET
//request->response->error?)

 const listaProducts = () =>{
    fetch("http://localhost:3000/producto")
    .then(response => response.json())
    .catch(error => console.log(error))
    return data;
}
export const productoServ = {
    listaProducts
}