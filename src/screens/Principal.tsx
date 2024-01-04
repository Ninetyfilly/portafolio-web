// import { useState } from 'react'
// import reactLogo from '../assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react';
import { Link } from 'react-router-dom';

import './Principal.css'

const Principal: React.FC = () => {
  // const [count, setCount] = useState(0)

  return (
    <>
     <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About me</Link>
            </li>
            <li>
              <Link to="/proyects">Proyects</Link>
            </li>
            <li>
              <Link to="/proyects">Proyects</Link>

            </li>
          </ul>
        </nav>

      </div>
      <button></button>
      <p className="read-the-docs">
        Esta es la pagina principal del proyecto
      </p>
    </>
  )
}

export default Principal
