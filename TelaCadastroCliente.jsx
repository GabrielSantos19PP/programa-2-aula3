import Pagina from "../templates/Pagina";
import FormCadastroCliente from "./formulario/FormCadastroCliente";
import TabelaClientes from "./tabelas/TabelaClientes";
import { useState } from "react";
import clientes from "../dados/clientes";
import cidades from "../dados/cidades";

export default function TelaCadastroCliente(props) {
    const [mostrarTabela, setMostrarTabela] = useState(true);
    const [listaDeClientes, setListaDeClientes] = useState(clientes);
    const [clienteSelecionado, setClienteSelecionado] = useState({
        cpf: "",
        modelocomputador: "",
        usuario: "",
        placaDeVideo: "",
        processador: "",
        placaMae: "",
        memoriaRam: "",
        fonte: "",
        senha: "",
        cidade: { id: 1, nome: "Sao Paulo", estado: "SP" }
      });

      const [modoEdicao, setModoEdicao] = useState(false);

    return (
        <Pagina titulo="Tela de Cadastro de Cliente">
            {
                mostrarTabela ? <TabelaClientes mostrarTabela={mostrarTabela}
                                                setMostrarTabela={setMostrarTabela}
                                                listaDeClientes={listaDeClientes}
                                                setListaDeClientes={setListaDeClientes}
                                                setClienteSelecionado={setClienteSelecionado}
                                                setModoEdicao={setModoEdicao}
              /> :
                                <FormCadastroCliente    mostrarTabela={mostrarTabela}
                                                        setMostrarTabela={setMostrarTabela}
                                                        listaDeClientes={listaDeClientes}
                                                        setListaDeClientes={setListaDeClientes}
                                                        listaDeCidades={cidades}
                                                        clienteSelecionado={clienteSelecionado}
                                                        setClienteSelecionado={setClienteSelecionado}
                                                        modoEdicao={modoEdicao}
                                                        setModoEdicao={setModoEdicao}/>                        
            }
        </Pagina>
        
    )
}