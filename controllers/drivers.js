const express = require('express')
const router = express.Router()
const db = require('../models')

// GET /games -- index of all games
router.get('/', async (req, res) => {
    try {
        const allDrivers = await db.driver.findAll()
        res.json(allDrivers)
    } catch(error) {
        console.warn(error)
    }
})

// GET /games/:id -- details on one game
router.get('/:id', async (req, res) => {
    try {
        const thisDriver = await db.driver.findByPk(req.params.id)
        res.json(thisDriver)
    } catch(error) {
        console.warn(error)
    }
})

// POST /games -- create new game
router.post('/', async (req, res) => {
    try {
        const [newDriver] = await db.driver.findOrCreate({
            where: {
                name: req.body.name,
                team: req.body.team,
                age: req.body.age,
                titles: req.body.titles
            }
        })
        console.log(`New Driver: ${newDriver.id}`)
        res.json(newDriver)
    } catch(error) {
        console.warn(error)
    }
})

// PUT /games/:id -- update game
router.put('/:id', async (req, res) => {
    try {
        const rowsUpdated = await db.game.update({
            title: req.body.title,
            year: req.body.year,
            rating: req.body.rating
        }, {
            where: {
                id: req.params.id
            }
        })
        console.log(`Game: ${req.params.id} | Num rows updated ${rowsUpdated}`)
        const updatedGame = await db.game.findByPk(req.params.id)
        res.json(updatedGame)
    } catch(error) {
        console.warn(error)
    }
})

// DELETE /games/:id -- delete game
router.delete('/:id', async (req, res) => {
    try {
        await db.game.destroy({
            where: {
                id: req.params.id
            }
        })
        res.send(`Game id# ${req.params.id} deleted`)
    } catch(error) {
        console.warn(error)
    }
})

module.exports = router