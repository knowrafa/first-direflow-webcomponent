import React, { useEffect, useState } from "react";
import styles from "styles/index.scss";
import arquivoIndexadoStyle from "./ArquivoIndexadoItem/ArquivoIndexadoItem.scss"
import { Styled } from "direflow-component";
import api from "utils/api";
import ArquivoIndexadoItem from "./ArquivoIndexadoItem";

const ArquivoIndexadoList: React.FC = () => {
  const [arquivos, setArquivos] = useState([]);
  const [carregou, setCarregou] = useState(false);

  async function list() {
    try {
      const response = await api.get("/arquivo_indexado/");
      setArquivos(response.data.results);
    } catch (error) {
      console.error(error);
    } finally {
      setCarregou(true);
    }
  }
  useEffect(() => {
    // Usar boolean pra verificar se já rodou uma vez
    if (!carregou) {
      list();
      setCarregou(true);
    }
  }, [carregou]);
  return (
    <Styled styles={[styles, arquivoIndexadoStyle]}>
      <ul className="default-list zebra">
        <li className="default-list-item arquivo-indexado-item no-feedback">
          <div className="row">
            <div className="col">id</div>
            <div className="col">cpf</div>
            <div className="col">nome</div>
            <div className="col">numero_atendimento</div>
            <div className="col">setor</div>
            <div className="col">url</div>
          </div>
        </li>
        {arquivos.map((arquivo: Models.ArquivoIndexado) => (
          <ArquivoIndexadoItem {...arquivo} key={arquivo.id} />
        ))}
      </ul>
    </Styled>
  );
};
export default ArquivoIndexadoList;
