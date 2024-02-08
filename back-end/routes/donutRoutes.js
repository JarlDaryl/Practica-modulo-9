const {loadData} = require("../controllers/donutControllers")

const donutRouter = require("express").Router()

// donutRouter.get('/loadData', loadData)
donutRouter.get('/', getDonuts)
donutRouter.get('/:id', getDonutById)
donutRouter.post('/', createDonut)
donutRouter.put('/:id', updateDonut)
donutRouter.delete('/:id', getDonuts)


module.exports = donutRouter