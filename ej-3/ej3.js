const express = require('express');
const app = express();



const products =  [
    { id: 1, nombre: 'Taza de Harry Potter' , precio: 300},
    { id: 2, nombre: 'FIFA 22 PS5' , precio: 1000},
    {  id: 3, nombre: 'Figura Goku Super Saiyan' , precio: 100},
    {  id: 4,  nombre: 'Zelda Breath of the Wild' , precio: 200},
    {  id: 5,  nombre: 'Skin Valorant' , precio: 120},
    {  id: 6, nombre: 'Taza de Star Wars' , precio: 220}
  ];

app.get('/productos', (req, res) => {
    res.send({description: 'Productos', items: products})
});

app.use(express.json());
app.post('/productos/newProduct', (req, res) => {
    const newProduct =  { id: products.length + 1, nombre: req.body.nombre , precio: req.body.precio }
    products.push(newProduct)
    res.status(201)
});

app.put('/productos/:id', (req, res) => {
    const found = products.some(product => product.id == req.params.id)
    if(found) {
        products.forEach(product => {
            if(product.id == req.params.id) {
                product.nombre = req.body.nombre ? req.body.nombre : product.nombre,
                product.precio = req.body.precio ? req.body.precio : product.precio,
                res.send(product)
            }
        })
    }else {
        res.status(404)
    }
});

app.delete('/productos/:id', (req, res) => {
    const found = products.some(product => product.id == req.params.id)
    if(found) {
        res.status(201).send(products.filter(product => product.id != req.params.id))
    } else {
        res.status(404)
    } 
});

app.get('/productos', (req, res) => {
    const filterPrecio = products.filter((product) => product.precio >= 50 && product.precio <= 250 )
    res.send(filterPrecio)
});

app.get('/productos/:id', (req, res) => {
    const filterId = products.filter((product) => product.id == req.params.id)
    res.send(filterId)
});

app.get('/productos/:nombre', (req, res) => {
    const filterNombre = products.filter((product) => product.nombre == req.params.nombre)
    res.send(filterNombre)
});

app.listen('3000', () => {
    console.log('Puerto abierto')
});
