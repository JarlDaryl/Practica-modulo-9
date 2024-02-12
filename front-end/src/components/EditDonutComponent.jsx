import React from 'react';
import { updateDonut } from '@/api/donutFetch';
import { useRouter } from 'next/router';
import { Formik, Form, Field } from 'formik';

export default function EditDonutComponent({ donut }) {
    const router = useRouter();

    const initialValues = {
        nombre: donut.nombre || '',
        tipo: donut.tipo || '',
        precio: donut.precio || 0,
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            await updateDonut(donut._id, values);
            router.push('/');
        } catch (error) {
            console.error('Error updating donut:', error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ isSubmitting }) => (
                <Form>
                    <label>
                        Nombre:
                        <Field type="text" name="nombre" />
                    </label>
                    <label>
                        Tipo:
                        <Field type="text" name="tipo" />
                    </label>
                    <label>
                        Precio:
                        <Field type="number" name="precio" />
                    </label>

                    <button type="submit" disabled={isSubmitting}>
                        Editar
                    </button>
                </Form>
            )}
        </Formik>
    );
}
