import './Footer.css';

function Footer() {
    return (
        <div id="footer">

            {/* NOME */}
            <p className="footer-nome">Desenvolvedora: Rita de Cássia Santos Rangel</p>

            {/* CRÉDITOS */}
            <div className="footer-creditos">
                <p className="footer-creditos-txt">Créditos do Figma Design Comunity:</p>
                <p className="footer-creditos-txt">Layout da página principal:&nbsp;<a
                    href="https://www.figma.com/community/file/1123976164557247385/Game-Store-Design">
                    Game Store Design</a></p>
                <p className="footer-creditos-txt">Layout do formulário:&nbsp;<a
                    href="https://www.figma.com/community/file/990715552114977823/Flexible-Form-Template">
                    Flexible Form Template</a></p>
            </div>
        </div>
    );
}

export default Footer;