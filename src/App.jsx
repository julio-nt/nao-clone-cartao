import { useState } from "react";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  const [numCartao, setNumCartao] = useState("");
  const [validade, setValidade] = useState("");
  const [cod, setCod] = useState("");
  const [nome, setNome] = useState("");

  return (
    <>
      <h1>Não clone meu cartão!</h1>
      <h3>
        O seu site de confiança para garantir a segurança dos seus cartões
      </h3>
      <div style={styles.container}>
        <p style={styles.label}>Número do Cartão: </p>
        <input type="text" style={styles.input} />
      </div>
      <div style={styles.container}>
        <p style={styles.label}>Data de Validade: </p>
        <input type="text" style={styles.input} />
      </div>
      <div style={styles.container}>
        <p style={styles.label}>CVV: </p>
        <input type="text" style={styles.input} />
      </div>
      <div style={styles.container}>
        <p style={styles.label}>Senha do Cartão: </p>
        <input type="text" style={styles.input} />
      </div>
      <div style={styles.container}>
        <p style={styles.label}>Nome do Titular: </p>
        <input type="text" style={styles.input} required />
      </div>
      <button style={styles.btn} onClick={() => alert('Dados salvos, agora seu cartão nunca mais sera clonado!')}>
        Salvar
      </button>
    </>
  );
}

export default App;

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "21rem",
    marginLeft: "auto",
    marginRight: "auto",
  },
  label: {},
  input: {
    padding: ".5rem",
    marginLeft: ".5rem",
    marginTop: "1rem",
  },
  btn: {
    marginTop: "2rem",
  },
};
