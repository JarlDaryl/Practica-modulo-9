import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="body">
      <div>
        <img src="/images/00003.jpg" alt="donuts" className="image"/>
      <ul className="inicio">
        <li>
          <Link href={{pathname: 'CreateDonutPage'}}> Creación de Donut’s
          </Link>
        </li>
        <li>
          <Link href={{pathname: 'DonutsListPage'}}> Listado de Donut’s
          </Link>
        </li>
        <li>
          <Link href={{pathname: 'ContactPage'}}> Contacto
          </Link>
        </li>
      </ul>
      </div>
      
    </div>
  );
}
