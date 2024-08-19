// src/components/Seguros.js
import React from 'react';


const Header = () => {
    return (
        <header className="header-bg">
            <div className="header container">
                <a href="./">
                    <img src="./img/kuribank-logo.svg" alt="KuriBank" />
                </a>

                <nav aria-label="primaria">
                    <ul className="header-menu font-1-m cor-0">
                        <li><a href="./ContaCorrente.html">Conta Corrente</a></li>
                        <li><a href="./Seguros.html">Seguros</a></li>
                        <li><a href="./Contato.html">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

const Seguros = () => {
    return (
        <main className="seguros-bg">
            <div className="titulo-bg">
                <div className="titulo container">
                    <p className="font-2-l-b cor-5">Resposta em até 24H</p>
                    <h1 className="font-1-xxl cor-0">Seguros<span className="cor-p1">.</span></h1>
                </div>
            </div>

            <div className="seguros container fadenLeft" data-anime="200">
                <h2 className="container font-1-xxl cor-0">Plano Prata<span className="cor-p1">.</span></h2>
                <div className="seguros-item">
                    <h3 className="font-1-xl cor-6">Prata</h3>
                    <span className="font-1 xl cor-0">R$ 199 <span className="font-1-xs cor-6">Mensal</span></span>
                    <ul className="font-2-m cor-0">
                        <li>Duas trocas por ano</li>
                        <li>Assistência Técnica</li>
                        <li>Suporte das 08h às 18h</li>
                        <li>Cobertura estadual</li>
                    </ul>
                    <a className="botao" href="./orcamento.html?tipo=seguro&produto=prata">Inscreva-se</a>
                </div>
            </div>

            <div className="seguros container fadenRight" data-anime="400">
                <h2 className="container font-1-xxl cor-0">Plano Ouro<span className="cor-p1">.</span></h2>
                <div className="seguros-item">
                    <h3 className="font-1-xl cor-6">Ouro</h3>
                    <span className="font-1 xl cor-0">R$ 299 <span className="font-1-xs cor-6">Mensal</span></span>
                    <ul className="font-2-m cor-0">
                        <li>Cinco trocas por ano</li>
                        <li>Assistência Especial</li>
                        <li>Suporte 24h</li>
                        <li>Cobertura nacional</li>
                        <li>Desconto em parceiros</li>
                        <li>Acesso ao Clube KuriBank</li>
                    </ul>
                    <a className="botao" href="./orcamento.html?tipo=seguro&produto=ouro">Inscreva-se</a>
                </div>
            </div>
        </main>
    );
};

const Vantagens = () => {
    return (
        <article className="vantagens-bg">
            <div className="vantagens container">
                <h2 className="font-1-xxl cor-0">Vantagens<span className="cor-p1">.</span></h2>
                <ul>
                    <li>
                        <img src="./img/icones/eletrica.svg" alt="Reparo elétrico" />
                        <h3 className="font-1-l cor-0">Reparo elétrico</h3>
                        <p className="font-2-s cor-5">
                            Garantimos reparo completo do seu motor em casos de falhas.
                        </p>
                    </li>
                    <li>
                        <img src="./img/icones/carbono.svg" alt="Carbono" />
                        <h3 className="font-1-l cor-0">Carbono</h3>
                        <p className="font-2-s cor-5">
                            Nosso quadros são feitos para durar para sempre.
                        </p>
                    </li>
                    <li>
                        <img src="./img/icones/sustentavel.svg" alt="Sustentável" />
                        <h3 className="font-1-l cor-0">Sustentável</h3>
                        <p className="font-2-s cor-5">
                            Trabalhamos com a filosofia de desperdício zero.
                        </p>
                    </li>
                    <li>
                        <img src="./img/icones/rastreador.svg" alt="Rastreador" />
                        <h3 className="font-1-l cor-0">Rastreador</h3>
                        <p className="font-2-s cor-5">
                            Utilizamos o GPS para segurança e recuperação.
                        </p>
                    </li>
                    <li>
                        <img src="./img/icones/seguro.svg" alt="Segurança" />
                        <h3 className="font-1-l cor-0">Segurança</h3>
                        <p className="font-2-s cor-5">
                            Fique tranquilo em saber que seu dinheiro está seguro.
                        </p>
                    </li>
                    <li>
                        <img src="./img/icones/velocidade.svg" alt="Veloz" />
                        <h3 className="font-1-l cor-0">Veloz</h3>
                        <p className="font-2-s cor-5">
                            A sua conta estará pronta para uso no mesmo dia.
                        </p>
                    </li>
                </ul>
            </div>
        </article>
    );
};

const PerguntasFrequentes = () => {
    return (
        <article className="perguntas container">
            <h2 className="font-1-xxl">Perguntas Frequentes<span className="cor-p1">.</span></h2>
            <dl>
                <div>
                    <dt>
                        <button className="font-1-m-b" aria-controls="pergunta1" aria-expanded="true">
                            Qual tipo de pagamento vocês aceitam?
                        </button>
                    </dt>
                    <dd id="pergunta1" className="font-2-s cor-9 ativa">
                        Aceitamos todos os cartões de crédito, PIX, e boletos.
                    </dd>
                </div>
                {/* Adicione mais perguntas frequentes conforme necessário */}
            </dl>
        </article>
    );
};

const Footer = () => {
    return (
        <footer className="footer-bg">
            <div className="footer container">
                <img src="./img/kuribank-logo.svg" alt="KuriBank" />
                <div className="footer-contato">
                    <h3 className="font-2-2-l-b cor-0">Contato</h3>
                    <ul className="font-2-m cor-5">
                        <li><a href="tel:+551199999999">+55 11 9999-9999</a></li>
                        <li><a href="mailto:contato@kuribank.com">contato@kuribank.com</a></li>
                        <li>Rua Henrique Sam Midlim</li>
                        <li>São Paulo - SP</li>
                    </ul>
                    <div className="footer-redes">
                        <a href="./"><img src="./img/redes/instagram.svg" alt="Instagram" /></a>
                        <a href="./"><img src="./img/redes/facebook.svg" alt="Facebook" /></a>
                        <a href="./"><img src="./img/redes/youtube.svg" alt="YouTube" /></a>
                    </div>
                </div>
                <div className="footer-informacoes">
                    <h3 className="font-1-b cor-0">Informações</h3>
                    <nav>
                        <ul className="font-1-m cor-5">
                            <li><a href="./ContaCorrente.html">Conta Corrente</a></li>
                            <li><a href="./Seguros.html">Seguros</a></li>
                            <li><a href="./Contato.html">Contato</a></li>
                            <li><a href="./termos.html">Termos e condições</a></li>
                        </ul>
                    </nav>
                </div>
                <p className="footer-copy font-2-m cor-0">KuriBank © Alguns direitos reservados.</p>
            </div>
        </footer>
    );
};

const App = () => {
    return (
        <div>
            <Header />
            <Seguros />
            <Vantagens />
            <PerguntasFrequentes />
            <Footer />
        </div>
    );
};

export default App;
