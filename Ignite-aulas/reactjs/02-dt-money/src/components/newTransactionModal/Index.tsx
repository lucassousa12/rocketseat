import { FormEvent, useState } from 'react'

import Modal from 'react-modal'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { useTransactions } from '../../hooks/useTransactions'

import { Container, TransactionTypeContainer, RadioBox } from './style'

interface NewTransactionModalProps {
    isOpen: boolean,
    onRequestClose: () => void
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [type, setType] = useState('deposit')
    const [category, setCategory] = useState('')

    const { createTransaction } = useTransactions();
    
    async function handleSubmitForm(event: FormEvent) {
        event.preventDefault();

        await createTransaction({
            title,
            type,
            amount, 
            category
        })

        setTitle('')
        setAmount(0)
        setType('deposit')
        setCategory('')

        onRequestClose();
    }

    return (
        <Modal 
            isOpen = {isOpen}
            onRequestClose = {onRequestClose}
            className = "react-modal-content"
            overlayClassName = "react-modal-overlay"
        >
            <button 
                type="button" 
                onClick={onRequestClose} 
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar modal" />
            </button>

            <Container onSubmit={handleSubmitForm}>
                <h2>Cadastrar nova transação</h2>
                <input 
                    type="text" 
                    placeholder = "Titulo"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                    required
                />
                <input 
                    type="number"
                    placeholder = "Valor" 
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                    required
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick = {() => {setType('deposit')}}
                        isActive = {type === 'deposit'}
                        activeColor = "green"
                    >
                        <img src={incomeImg}alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick = {() => {setType('withdraw')}}
                        isActive = {type === 'withdraw'}
                        activeColor = "red"
                    >
                        <img src={outcomeImg} alt="Entrada" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input 
                    type="text"
                    placeholder = "Categoria" 
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                    required
                />
                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    );
}