import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { deleteDonut, getDonut, updateDonut } from '@/api/donutFetch';
import DetalleDonutComponent from '@/components/DetalleDonutComponent';
import EditDonutComponent from '@/components/EditDonutComponent';

export default function DonutDetailsPage() {
    const router = useRouter();
    const { id } = router.query;

    const [donut, setDonut] = useState(null);

    useEffect(() => {
        const fetchDonutDetails = async () => {
            try {
                const response = await getDonut(id);
                setDonut(response.data);
            } catch (error) {
                console.error('Error fetching donut details:', error);
            }
        };

        if (id) {
            fetchDonutDetails();
        }
    }, [id]);

    const deleteDonutById = async () => {
        try {
            await deleteDonut(id);
            router.push('/');
        } catch (error) {
            console.error('Error deleting donut:', error);
        }
    };

    const handleEditSubmit = async (values) => {
        try {
            await updateDonut(id, values);
            router.push('/');
        } catch (error) {
            console.error('Error updating donut:', error);
        }
    };

    return (
        <div className='body'>
            {donut ? (
                <>
                    <DetalleDonutComponent donutId={id} />
                    <EditDonutComponent donut={donut} onSubmit={handleEditSubmit} />
                    <button onClick={deleteDonutById}>Eliminar Donut</button>
                    <button>
                        <Link href={{ pathname: '/' }}>Inicio</Link>
                    </button>
                </>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
}

