import React from "react";

const OpenAccount = () => {
    return (
        <section id='open-account' className="bg-white p-8 rounded-lg shadow-md my-8">
            <h2 className="text-2xl font-semibold mb-6">Abrir Conta</h2>
            <p>Para abrir uma conta, preencha o formulário abaixo e um de nossos consultores entrará em contato com você.</p>
            <form className="space-y-4"> 
                <div>
                    <label htmlFor="name" className="block text-gray-700">Nome Completo</label>
                    <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" />
                </div>

                <div>
                    <label htmlFor="email" className="block text-gray-700">Email</label>
                    <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-gray-700">Telefone</label>
                    <input type="text" id="phone" className="w-full p-2 border border-gray-300 rounded" />
                </div>

                <div>
                    <label htmlFor="message" className="block text-gray-700">Mensagem</label>
                    <textarea id="message" className="w-full p-2 border border-gray-300 rounded" rows="4"></textarea>
                </div>

                <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Enviar</button>
            </form> 
        </section>
    );
};

export default OpenAccount;
