import { withStyles } from "direflow-component";
import React from "react";
import styles from "./UsuarioItem.scss";

type Props = Models.Usuario;

const UsuarioItem: React.FC<Props> = ({
  id,
  username,
  criado_em,
  atualizado_em,
}) => {
  return (
    <li className="default-list-item usuario-item">
      <div className="row">
        <div className="col">{id}</div>
        <div className="col">{username}</div>
        <div className="col">{criado_em}</div>
        <div className="col">{atualizado_em}</div>
      </div>
    </li>
  );
};

export default withStyles(styles)(React.memo(UsuarioItem));
