const express= require('express');
const app = express();


app.listen("3000", (req, res) => {
    console.log('Servidor abierto en el puerto 3000')
})

app.get('/', (req, res) => {
    res.send('Hola, ya estamos aquíííííííí')
});

app.get('/productos', (req, res) => {
    res.send('Esta es la lista de productos')
});


app.post('/productos', (req, res) => {
    res.send('Crear un producto')
});

app.put('/productos', (req, res) => {
    res.send('Ya puedes actualizar un producto')
});

app.delete('/productos', (req, res) => {
    res.send('Ya puedes borrar un producto')
});

app.get('/usuarios', (req, res) => {
    res.send('Esta es la lista de usuarios')
});

app.post('/usuarios', (req, res) => {
    res.send('Crear un usuario')
});

app.put('/usuarios', (req, res) => {
    res.send('Ya puedes actualizar un usuario')
});

app.delete('/usuarios', (req, res) => {
    res.send('Ya puedes borrar un usuario')
});