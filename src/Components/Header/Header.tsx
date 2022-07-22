import React from 'react'

import './style.sass'

export default function Header() {
    return (
        <header>
            <a href="#"><img src="" alt="Logo" /></a>
            <nav>
                <ul>
                    <li><a href="#">Início</a></li>
                    <li><a href="#">Benefícios</a></li>
                    <li><a href="#">Comentários</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}
