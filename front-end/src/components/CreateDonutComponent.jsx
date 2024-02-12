import { createDonut } from '@/api/donutFetch'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

export default function CreateDonutComponent() {
    const router = useRouter()
    const [nombre, setNombre] = useState("")
    const [tipo, setTipo] = useState("")
    const [precio, setPrecio] = useState("")
    const [nuevoDonut, setNuevoDonut] = useState(null)

    const nombreHandler = (e) => {
        setNombre(e.target.value)
    }
    const tipoHandler = (e) => {
        setTipo(e.target.value)
    }
    const precioHandler = (e) => {
        setPrecio(e.target.value)
    }

    const addDonutClick = async () => {
        try {
            const nuevoDonut = await createDonut({
                nombre,
                tipo,
                precio
            })
            setNuevoDonut(nuevoDonut)
        } catch (error) {
            console.log("Error creando el Donut", error)
        }
    }

  return (
    <div>
        <div>
            <span>Nombre</span>
            <input type="text" value={nombre} onChange={nombreHandler} />
        </div>
        <div>
            <span>Tipo</span>
            <input type="text" value={tipo} onChange={tipoHandler} />
        </div>
        <div>
            <span>Precio</span>
            <input type="text" value={precio} onChange={precioHandler} />
        </div>
        <div><button onClick={addDonutClick}>Crear Donut</button></div>
    </div>
  )
}
