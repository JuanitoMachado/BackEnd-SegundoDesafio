const Contenedor = require('./contenedor.js')
const contenedor = new Contenedor()


let producto = {
    title: "Remera Roja",
    price: 70,
    thumbnail: "https://filaar.vtexassets.com/arquivos/ids/6077722-1600-auto?v=637989444454700000&width=1600&height=auto&aspect=true"
}

contenedor.save(producto).then(result => console.log(result))

//contenedor.getAll().then(result => console.log(result))

//contenedor.getById(15).then(result => console.log(result))

//contenedor.deleteById(4).then(result => console.log(result))

//contenedor.deleteAll().then(result => console.log(result))

