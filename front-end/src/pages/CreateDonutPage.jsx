import React from 'react'
import Link from 'next/link'
import CreateDonutComponent from '@/components/CreateDonutComponent'

export default function CreateDonutPage() {
  return (
    <div>
      <h1>Crea tu propio donut</h1>
      <CreateDonutComponent/>
      <button><Link href={{ pathname: '/' }}>Inicio</Link></button>
    </div>
  )
}
