import React from 'react'

import './style.sass'

export default function Form() {
    return (
        <form>
            <input type="text" placeholder='Nome Completo'/>
            <input type="email" placeholder='E-mail Profissional'/>
            <input type="tel" placeholder='DDD + Telefone'/>
            <input type="submit" value="Quero um orçamento" />
        </form>
    )
}
