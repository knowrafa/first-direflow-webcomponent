import React, { useEffect, useState } from "react";
import styles from "styles/index.scss";
import menuStyle from "./MenuList.scss";
import { Styled } from "direflow-component";
import api from "utils/api";
import MenuItem from "./MenuItem";

export const menuAppId = "menu-app";

const MenuList: React.FC = () => {
  return (
    <Styled styles={[styles, menuStyle]}>
      <div id={menuAppId}>
        <ul className="default-list zebra menu-list">
          <li className="default-list-item">id</li>
          <li className="default-list-item">cpf</li>
          <li className="default-list-item">nome</li>
          <li className="default-list-item">numero_atendimento</li>
          <li className="default-list-item">setor</li>
          <li className="default-list-item">url</li>
        </ul>
      </div>
    </Styled>
  );
};
export default MenuList;
