const donutsDB = require("../mocks/donutsDB")
const donutModel = require("../models/DonutModel")


// GET todos los donuts 
const getAllDonuts = async (req, res) => {
    try{

        const allDonuts = await donutModel.find()
        const resDonut = allDonuts.map(donut => {
            return {
                id: donut.id,
                nombre: donut.nombre,
                tipo: donut.tipo,
                precio: donut.precio
            }
        })
        res.status(200).json({
            status: 'succeeded',
            data: resDonut,
            error: null
        })

    }catch(error){
        res
        .status(500)
        .json({ status: "failed", data: null, error: error.message }); 
    }
}
// Get donut by Id
const getDonutById = async (req, res) => {
    try{
        const id = req.params.id
        const donut = await donutModel.findById(id)
        res.status(200).json({
            status: 'succeeded',
            data: donut,
            error: null
        })

    }catch(error){
        res
        .status(500)
        .json({ status: "failed", data: null, error: error.message }); 
    }
}
// Create Donut
const createDonut = async (req,res) => {
    try{
        const donutData = req.body
        const newDonut = await donutModel({
            nombre: donutData.nombre,
            tipo: donutData.tipo,
            precio: donutData.precio
        })
        await newDonut.save()
        res.status(200).json({
            status: 'succeeded',
            data: newDonut,
            error: null
        })

    }catch(error){
        res
        .status(500)
        .json({ status: "failed", data: null, error: error.message }); 
    }
}
// Actualizar donut
const updateDonut = async (req,res) => {
    try{
        const id = req.params.id
        const {nombre, tipo, precio} = req.body
        
        const donutAux = await donutModel.findById(id)

        if(!donutAux) return res.status(404).send('El donut no existe')
        
        if(nombre) {
            donutAux.nombre = nombre
        }
        if(tipo){
            donutAux.tipo = tipo
        }
        if(precio){
            donutAux.precio = precio
        }

        await donutAux.save()
        res.status(200).json({
            status: 'succeeded',
            data: donutAux,
            error: null  
        });
        


    }catch(error){
        res
        .status(500)
        .json({ status: "failed", data: null, error: error.message }); 
    }
}

// Eliminar donut
const deleteDonut = async (req,res) => {
    try{
        const id = req.params.id
        await donutModel.findByIdAndDelete(id);
        res.status(200).json({
            status: 'succeeded',
            data: null,
            error: null
        })

    }catch(error){
        res
        .status(500)
        .json({ status: "failed", data: null, error: error.message }); 
    }
}

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

module.exports = {loadData, getAllDonuts, createDonut, getDonutById, updateDonut, deleteDonut}