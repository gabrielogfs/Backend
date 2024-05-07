const express = require('express');
const router = express.Router();

let pets = [];

// validar nome
router.param('pet',  (req, res, next, pet) => {
    try {
    const nomeValido = /^[a-zA-Z\s]+$/;
    if ( nomeValido.test(pet)) {
        req.pet = pet;
        next()
    } else {
        res.status(400).json({error: "Nome inválido."})
    }} catch {
        res.status(500).send('Falha sistêmica.')
    }
});

// add animal
router.post('/', async (req, res) => {
     const { name, specie } = await req.body;
     
     if (!name || !specie) {
        return res.status(400).json({ error: "Forneça um nome e espécie para o animal."}) 
    }

    const newPet = { name, specie };
    pets.push(newPet);
    res.status(201).json(newPet);
});

// puxar pelo nome
router.get('/:pet([a-zA-Z]+)', async (req, res) => {
    const pet = await pets.find( pet => pet.name === req.pet);

    if (pet) {
        res.json(pet)
    } else {
        res.status(404).json({ error: 'Animal não encontrado.'})
    };
});

// adotar animal
router.put('/:pet', async (req, res) => {
    const petIndex = await pets.findIndex(pet => pet.name === req.pet);
    if (petIndex !== -1) {
        pets[petIndex].adopted = true;
        res.json(pets[petIndex]);
    } else {
        res.status(404).json({ error: 'Animal não encontrado.'})
    }
})

module.exports = router;