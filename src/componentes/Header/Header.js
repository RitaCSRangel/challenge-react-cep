import './Header.css';
import { Link } from 'react-router-dom';

function Banner() {
    return (
        <div className="header-bar">

            {/* TÍTULO */}
            <div className="header-titulo">
                <div className="header-logo-img"><img src="imagens/logo.png" alt="image"></img></div>
                <p className="header-nome">Consultor de CEP</p>
            </div>

            {/* NAVEGAÇÃO */}
            <div className="header-nav">
                <Link to="https://ritacsrangel.github.io/challenge-react-cep/inicio" className="header-nav-itens">Início</Link>
                <Link to="https://ritacsrangel.github.io/challenge-react-cep/formulario" className="header-nav-itens">Formulário</Link>
            </div>

            {/* HEADER FINAL IMAGE */}
            <div className="header-logo-img2"><img src="imagens/logo2.png" alt="image"></img></div></div>
    );
}

export default Banner;