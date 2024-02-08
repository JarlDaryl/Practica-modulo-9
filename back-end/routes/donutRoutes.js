const {loadData, getAllDonuts, createDonut, getDonutById, updateDonut, deleteDonut} = require("../controllers/donutControllers")

const donutRouter = require("express").Router()

// donutRouter.get('/loadData', loadData)
donutRouter.get('/', getAllDonuts)
donutRouter.post('/', createDonut)
donutRouter.get('/:id', getDonutById)
donutRouter.put('/:id', updateDonut)
donutRouter.delete('/:id', deleteDonut)


module.exports = donutRouter