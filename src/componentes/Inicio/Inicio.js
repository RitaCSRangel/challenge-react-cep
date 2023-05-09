import './Inicio.css';

function Inicio() {
    return (

        <div className="body-container">

            {/* TÍTULO LATERAL */}
            <div className="body-titulo">
                <div className="body-titulo-upper-img"><img src="imagens/frontImage2.png" alt="image"></img></div>
                <span className="body-titulo-txt1">Consultor</span>
                <span className="body-titulo-txt2">de CEPs</span>
                <span className="body-titulo-txt3">Online</span>
                <div className="body-titulo-bottom-img"><img src="imagens/frontImage1.png" alt="image"></img></div>
            </div>

            {/* TEXTO INTRODUTÓRIO */}
            <div className="body-introdutorio">
                <div className="body-introdutorio-img"><img className="body-introdutorio-img-size" src="imagens/frontImage3.png" alt="image"></img></div>
                <span className="body-introdutorio-texto"> Esta página é um desafio proposto por uma das equipes de desenvolvimento da Accenture Brasil.
                    Nela, foi contruída uma interface simples, utilizando o framework Angular, que permite preencher um formulário curto que conta
                    com uma consulta de endereço automática através da API viaCEP.</span>
            </div>

        </div>
    );
}

export default Inicio;