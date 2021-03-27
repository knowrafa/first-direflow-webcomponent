import React, { useState } from "react";
import { DatePicker } from "antd";
import { Styled } from "direflow-component";
import style from "./EstabelecimentoList.scss";
import useShadowRoot from "hooks/useShadowRoot";
import { estabelecimentoComponentName } from ".";

export const estabelecimentoAppId = "estabelecimento-app";

const EstabelecimentoList: React.FC = () => {
  const [count, setCount] = useState(0);
  const { getContainer } = useShadowRoot(
    estabelecimentoAppId,
    estabelecimentoComponentName
  );
  return (
    <Styled styles={[style]}>
      <div id={estabelecimentoAppId} className="estabelecimento">
        <h1>bom dia {count} aa</h1>
        <button onClick={() => setCount(count + 1)}> Incremente! </button>
        <button onClick={() => setCount(count - 1)}> Decremente! </button>

        <DatePicker getPopupContainer={getContainer} />
      </div>
    </Styled>
  );
};
export default EstabelecimentoList;
