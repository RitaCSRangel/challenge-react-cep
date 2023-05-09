import './Header.css';
import { Link } from 'react-router-dom';

function Banner() {
    return (
        <div className="header-bar">

            {/* TÍTULO */}
            <div className="header-titulo">
                <div className="header-logo-img"><img src="./challenge-react-cep/imagens/logo.png" alt="image"></img></div>
                <p className="header-nome">Consultor de CEP</p>
            </div>

            {/* NAVEGAÇÃO */}
            <div className="header-nav">
                <Link to="/inicio" className="header-nav-itens">Início</Link>
                <Link to="formulario" className="header-nav-itens">Formulário</Link>
            </div>

            {/* HEADER FINAL IMAGE */}
            <div className="header-logo-img2"><img src="./challenge-react-cep/imagens/logo2.png" alt="image"></img></div></div>
    );
}

export default Banner;