import { FormEvent, useState } from "react";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import entradaImg from "../../assets/entrada.svg";
import saidaImg from "../../assets/saida.svg";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import { api } from "../../services/api";

interface NewTransactoinModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactoinModal({
  isOpen,
  onRequestClose,
}: NewTransactoinModalProps) {
  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = { title, value, category, type };

    api.post("/api/transactions", data);
  }

  return (
    <Modal
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <button type="button">
        <img
          src={closeImg}
          alt="Fechar modal"
          className="react-modal-close"
          onClick={onRequestClose}
        />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          name="title"
          type="text"
          placeholder="Title"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
        <input
          name="value"
          type="number"
          placeholder="Valor"
          onChange={(event) => setValue(Number(event.target.value))}
          value={value}
        />
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={entradaImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={saidaImg} alt="Saida" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input
          name="category"
          type="text"
          placeholder="Categoria"
          onChange={(event) => setCategory(event.target.value)}
          value={category}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
