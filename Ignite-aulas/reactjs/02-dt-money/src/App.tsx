import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard/Index";
import { NewTransactionModal } from "./components/newTransactionModal/Index";
import { TransactionsProvider } from "./hooks/useTransactions";

import { useState } from 'react'
import Modal from 'react-modal'

import { GlobalStyle } from "./style/GlobalStyle";

Modal.setAppElement('#root');

export function App() {
 
  const [isOpenNewTransactionModal, setNewTransactionModal] = useState(false)

    function handleOpenNewTransactionModal() {
        setNewTransactionModal(true);
    }

    function handleCloseNewTransactionModal() {
        setNewTransactionModal(false)
    }

  return (
    <TransactionsProvider>
      <Header onClickModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal 
        isOpen = {isOpenNewTransactionModal}
        onRequestClose = {handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}


