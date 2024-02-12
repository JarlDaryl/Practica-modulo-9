import React from 'react'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <div><h1>ContactPage</h1>
    <button><Link href={{ pathname: '/' }}>Inicio</Link></button></div>
  )
}
