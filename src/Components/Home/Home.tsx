import React from 'react'
import Form from '../Form/Form'
import HomeImage from '../HomeImage/Home-image'

import './style.sass'

export default function Home() {
  return (
    <section>
        <div>
            <h1>Converta visitantes em clientes!</h1>
            <p>Uma Landing Page para seu negócio.</p>
            <Form/>
        </div>
        <div>
            <HomeImage/>
        </div>
    </section>
  )
}
