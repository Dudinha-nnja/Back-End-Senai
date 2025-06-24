import {useState} from "react";
import foca from "../../assets/img/foca.jpg"
import "../testes/testes.css"
function Testes() {

    const [nome, mudaNome] = useState()

  return (
    <div>
      {/* <img src={foca} alt="foca" /> */}
      <h1> seja bem vindo {nome} </h1>
      <button onClick={()=> {
         mudaNome("queride")
      }}>clique aqui</button>
    </div>
    

  );
}

export default Testes;
