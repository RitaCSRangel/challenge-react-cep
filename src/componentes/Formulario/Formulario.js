import './Formulario.css';
import { useState } from 'react';
import InputMask from 'react-input-mask';
import Loading from '../../Loading/Loading';

function Formulario() {

    //VARIÁVEIS REATIVAS
    // Esse Hook chamado useState permite criar valores reativos. Uma variável normal não reage às mudanças no front-end, mas uma variável reativa sim.
    //const [nomeDaVariavel, funcaoUsadaParaMudarOValorDaVariavel] = useState(Valor Inicial);
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');

    const [telefoneInvalido, setTelefoneInvalido] = useState(false);
    const [cepInvalido, setCepInvalido] = useState(false);

    const [msgErroTelefone, setMsgErroTelefone] = useState('');
    const [msgErroCep, setMsgErroCep] = useState('');

    const [removerLoading, setRemoverLoading] = useState(true);

    //VARIÁVEIS COMUNS
    const url = "https://viacep.com.br/ws/";

    // FUNÇÕES
    function ValidarTelefone(telefone) {

        if (telefone == null || telefone == "")
            return;

        var telefoneFormatado = "";

        telefone = telefone.toString().replace('/[^0-9]/', '');
        if (telefone.match(/^([14689][0-9]|2[12478]|3([1-5]|[7-8])|5([13-5])|7[193-7])9[0-9]{8}$/)) {

            if (telefone.length >= 10) {
                telefoneFormatado = "(" + telefone.substring(0, 2) + ") ";
                telefoneFormatado += telefone.substring(2, 7) + "-";
                telefoneFormatado += telefone.substring(7, telefone.length) + "";
            }

            setTelefoneInvalido(false);
            setMsgErroTelefone("");
            setTelefone(telefoneFormatado);

        } else {

            setTelefoneInvalido(true);

            if (!/^\d+$/.test(telefone)) {
                setMsgErroTelefone("Insira somente números.");
            } else if (/^\d+$/.test(telefone) && telefone.length < 10) {
                setMsgErroTelefone("Insira DDD + número.");
            } else {
                setMsgErroTelefone("Número inválido.");
            }

        }



    }

    function ConsultarCEP(cep) {

        if (cep == null || cep == "")
            return;

        setRemoverLoading(false);

        setMsgErroCep("");
        var cepFormatado = "";

        cep = cep.replace('/[^0-9]/', '');
        if (cep.length == 8) {

            fetch(url + cep + "/json/").then(
                response => {
                    return response.json();
                }
            ).then(
                data => {
                    console.log(data);
                    setCepInvalido(false);
                    setMsgErroCep("");

                    cepFormatado = cep.substring(0, 5) + "-";
                    cepFormatado += cep.substring(5, cep.length) + "";
                    setCep(cepFormatado);

                    setRua(data.logradouro);
                    setBairro(data.bairro);
                    setCidade(data.localidade);
                    setEstado(data.uf);

                    setTimeout(() => {
                        setRemoverLoading(true);
                    }, "2000");
                }
            ).catch(function () {
                setCepInvalido(true);
                setMsgErroCep("CEP Inválido");
                setTimeout(() => {
                    setRemoverLoading(true);
                }, "2000");
            });

        } else {
            setCepInvalido(true);
            setMsgErroCep("CEP Inválido");
            setTimeout(() => {
                setRemoverLoading(true);
            }, "2000");
        }

    }

    // JSX
    return (
        <div className="form-container">

            <div className="form-elementos">

                {!removerLoading && <Loading />}

                {/* NOME */}
                <div className="form-atrib-input">
                    <label className="form-input-label">Nome</label>
                    <input className="form-input-area" type="text" id="nome" name="nome" placeholder="Digite seu nome" value={nome} onChange={(e) => { setNome(e.target.value) }}></input>
                    <br></br><br></br>
                </div>
                {/* Não pode invodar a função usando o () no final, tem que referenciar somente. Se invocar ela vai executar no onload do form. */}
                {/* Pra conseguir passar parâmetro sem invocar a função tem que envolver ela em uma função anônima. No caso acima é uma arrow function anônima. */}
                {/* Para obter o valor inserido no input utiliza-se o objeto de evento. */}

                {/* SOBRENOME */}
                <div className="form-atrib-input">
                    <label className="form-input-label">Sobrenome</label>
                    <input className="form-input-area" type="text" id="sobrenome" name="sobrenome" placeholder="Digite seu sobrenome" value={sobrenome} onChange={(e) => { setSobrenome(e.target.value) }}></input>
                    <br></br><br></br>
                </div>

                {/* TELEFONE */}
                <div className="form-atrib-input">
                    <label className="form-input-label">Telefone</label>
                    <input className="form-input-area" type="text" id="telefone" name="telefone" placeholder="(00) 00000-0000" mask="(99) 99999-9999" value={telefone} onChange={(e) => { setTelefone(e.target.value) }} onFocus={() => { setTelefone("") }} onBlur={() => { ValidarTelefone(telefone) }}></input>
                    <span className="form-input-area-msgErro"> {msgErroTelefone} </span>
                    <br></br><br></br>
                </div>


                {/* CEP */}
                <div className="form-atrib-input">
                    <label className="form-input-label">CEP</label>
                    <input className="form-input-area" type="text" id="cep" name="cep" placeholder="00000-000" mask="00000-000" value={cep} onChange={(e) => { setCep(e.target.value) }} onFocus={() => { setCep("") }} onBlur={() => { ConsultarCEP(cep) }}></input>
                    <span className="form-input-area-msgErro"> {msgErroCep} </span>
                    <br></br><br></br>
                </div>

                {/* RUA */}
                <div className="form-atrib-input">
                    <label className="form-input-label">Rua</label>
                    <input className="form-input-area" type="text" id="rua" name="rua" placeholder="" value={rua} onChange={(e) => { setRua(e.target.value) }}></input>
                    <br></br><br></br>
                </div>

                {/* COMPLEMENTO */}
                <div className="form-atrib-input">
                    <label className="form-input-label">Complemento</label>
                    <input className="form-input-area" type="text" id="complemento" name="complemento" placeholder="" value={complemento} onChange={(e) => { setComplemento(e.target.value) }}></input>
                    <br></br><br></br>
                </div>

                {/* BAIRRO */}
                <div className="form-atrib-input">
                    <label className="form-input-label">Bairro</label>
                    <input className="form-input-area" type="text" id="bairro" name="bairro" placeholder="" value={bairro} onChange={(e) => { setBairro(e.target.value) }}></input>
                    <br></br><br></br>
                </div>

                {/* CIDADE */}
                <div className="form-atrib-input">
                    <label className="form-input-label">Cidade</label>
                    <input className="form-input-area" type="text" id="cidade" name="cidade" placeholder="" value={cidade} onChange={(e) => { setCidade(e.target.value) }}></input>
                    <br></br><br></br>
                </div>

                {/* ESTADO */}
                <div className="form-atrib-input">
                    <label className="form-input-label">Estado</label>
                    <input className="form-input-area" type="text" id="estado" name="estado" placeholder="" value={estado} onChange={(e) => { setEstado(e.target.value) }}></input>
                    <br></br><br></br>
                </div>
            </div>

        </div>

    );
}

export default Formulario;