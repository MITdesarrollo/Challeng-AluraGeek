const listaUsuarios = () => {
    return fetch('http://localhost:3000/users').then(respuesta => respuesta.json());

}

 const detalleUsuario = (id) => {
    return fetch(`https://localhost:3000/users/${id}`).then((resp) => resp.json());
};

const deleteUser = (id) => {
   return fetch(`https://localhost:3000/users/${id}`, { 
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
})
}
 
const newUser = (name, email, password) => {
 return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name,
        email,
        password,
        id: uuid.v4()
    })
})
}

export const userServicios = {
    listaUsuarios,
    newUser,
    deleteUser
}
