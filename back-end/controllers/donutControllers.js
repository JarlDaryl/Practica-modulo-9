const donutsDB = require("../mocks/donutsDB")
const donutModel = require("../models/DonutModel")


// 






// Carga inicial de datos
const loadData = async(req, res) => {
    try {
        donutsDB.map(async (donut) => {
            const newDonut = donutModel({
                nombre: donut.nombre,
                tipo: donut.tipo,
                precio: donut.precio,
            })
            await newDonut.save()
        })
        res.sendStatus(200)
    } catch(error){
        res
        .status(500)
        .json({ status: "failed", data: null, error: error.message }); 
    }
}

module.exports = {loadData}