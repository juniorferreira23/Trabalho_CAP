const express = require('express');

const routes = express.Router();
const users = [
    {
        id: 1,
        name: 'Junior',
        email: 'junior.ferreira@outlook.com',
        password: '1234'
    }

]

routes.post('/login', (req, res) => {
    const { email, password } = req.body;

    const user = users.find(user => user.email === email && user.password === password);
    user ? res.status(200).json(user) : res.status(401).json({ message: 'Credenciais inválidas'})
    
});

module.exports = routes;