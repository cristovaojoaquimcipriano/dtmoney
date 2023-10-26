import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import Header from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { NewTransactoinModal } from "./components/NewTransactoinModal";
Modal.setAppElement("#root");

function App() {
  const [isNewTransactionModelOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <>
      <Header onOpenNewTranzactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactoinModal
        isOpen={isNewTransactionModelOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </>
  );
}

export default App;
