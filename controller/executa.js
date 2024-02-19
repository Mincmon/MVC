const express = require('express');
const Calculadora = require('../model/calculo');
const resultado = express.Router();

resultado.post('/', (req, res) => {
    const {x, y, altura } = req.body;
    const volume = Calculadora.Volume(
        parseFloat(x),parseFloat(y),parseFloat(altura));
        res.redirect(`/resultado.html?volume=${volume}`);
        // caso eu n queira usar o site para o resultado
        //res.send(`A hipotenusa é: ${hipotenusa}`);
});

module.exports = resultado;