import React from 'react'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <div>
      <img src="/images/00003.jpg" alt="donuts" className="image"/>
      <div className='contact'>
      <h1>Contact Us</h1>
      
        <h2>Store Name</h2>
        <p>123 Main Street</p>
        <p>City, State ZIP</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@store.com</p>
        <p>En el bullicioso vecindario de Brookdale, se encuentra "Dulces Tentaciones", una acogedora tienda de donuts que ha sido el deleite de la comunidad durante años. Desde temprano en la mañana, el aroma irresistible de los donuts recién horneados atrae a clientes ansiosos que esperan con impaciencia probar las creaciones únicas de la talentosa chef, Emily. Con su pasión por la repostería y su creatividad sin límites, Emily transforma simples bollos de masa en obras maestras de sabor y textura que deleitan los sentidos y alegran los corazones.</p>
        <p>Cada donut en "Dulces Tentaciones" cuenta una historia propia: desde los clásicos favoritos de la infancia hasta innovadoras combinaciones de sabores que desafían las expectativas. La tienda no solo es conocida por sus donuts deliciosamente indulgentes, sino también por el ambiente cálido y acogedor que Emily y su equipo han cultivado, convirtiendo cada visita en una experiencia dulce y memorable para todos los amantes de los postres.</p>
      
    <button><Link href={{ pathname: '/' }}>Inicio</Link></button>
    </div></div>
  )
}
