import React, { useEffect, useState } from 'react';
import { getDonut } from '@/api/donutFetch';

export default function DetalleDonutComponent({ donutId }) {
    const [donut, setDonut] = useState(null);

    useEffect(() => {
        const loadDonut = async () => {
            try {
                if (!donutId) return; // Verifica si donutId tiene un valor
                const donutAux = await getDonut(donutId);
                setDonut(donutAux.data);
            } catch (error) {
                console.error('Error fetching donut details:', error);
            }
        };
        loadDonut();
    }, [donutId]);

    if (!donut) {
        return <p>Cargando...</p>;
    }

    return (
        <div>
            <h2>Detalles de {donut.nombre}</h2>
            <ul>
                <li>Id: {donutId}</li>
                <li>Nombre: {donut.nombre}</li>
                <li>Tipo: {donut.tipo}</li>
                <li>Precio: {donut.precio}</li>
            </ul>
        </div>
    );
}
