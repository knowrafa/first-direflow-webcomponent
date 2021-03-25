import React, { useState } from "react";
import "./EstabelecimentoList.css";

const EstabelecimentoList: React.FC = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div className="estabelecimento">
      <h1>
        bom dia {count} aa
      </h1>
      <button onClick={() => setCount(count + 1)}> Incremente! </button>
      <button onClick={() => setCount(count - 1)}> Decremente! </button>
    
    </div>
  );
};
export default EstabelecimentoList;
