import React from "react";

function Support({onChatbotOpen}) {
    return ( 
        <div className="support">
            <h1>Suporte ao Cliente</h1>
            <ul>
                <li>FAQ</li>
                <li>Contato</li>
                <li>
                <button onClick={onChatbotOpen}>Fale com o nosso ChatBot</button>
                </li>
            </ul>
        </div>
    )
}

export default Support