import React from "react";
import styles from "./ArquivoIndexadoItem.scss";
import { Styled} from "direflow-component";
type Props = Models.ArquivoIndexado;

const ArquivoIndexadoItem: React.FC<Props> = ({
  id,
  cpf,
  nome,
  numero_atendimento,
  setor,
  url,
}) => {
  return (
    <Styled styles={[styles]}>
      <li className="default-list-item arquivo-indexado-item">
        <div className="row">
          <div className="col">{id}</div>
          <div className="col">{cpf}</div>
          <div className="col">{nome}</div>
          <div className="col">{numero_atendimento}</div>
          <div className="col">{setor.nome}</div>
          <div className="col">{url}</div>
        </div>
      </li>
    </Styled>
  );
};

export default React.memo(ArquivoIndexadoItem);
