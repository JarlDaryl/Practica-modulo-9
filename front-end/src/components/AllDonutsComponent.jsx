import { getAllDonuts } from '@/api/donutFetch';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AllDonutsComponent() {
	const [donut, setDonut] = useState([]);

	const getDonutAux = async () => {
		const donutAux = await getAllDonuts();
		setDonut(donutAux.data);
	};

	useEffect(() => {
		getDonutAux();
	}, []);

	return (
		<>
			<div>
				<h1>Estos son todos nuestros donuts</h1>

				{donut.map((donut, index) => {
					return (
						<ul key={index}>
							<li>
								{/* <span>{donut.id}</span> */}
								<span>{donut.nombre}</span>
								<button className='detalle'>
									<Link
										href={{
											pathname: 'DonutDetailsPage',
											query: { id: donut.id },
										}}
									>
										Detalles del Donut
									</Link>{' '}
								</button>
							</li>
						</ul>
					);
				})}
			</div>
		</>
	);
}
