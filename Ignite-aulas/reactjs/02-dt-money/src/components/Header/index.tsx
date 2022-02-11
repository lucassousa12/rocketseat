import logoImg from '../../assets/logo.svg'
import { Container, Content } from './style'

interface HeaderProps {
    onClickModal: () => void
}

export function Header({onClickModal}: HeaderProps) {
    return (
        <Container >
            <Content>
                <img src={logoImg} alt="Dt money" />
                <button type='button' onClick={onClickModal}>
                    Nova transação
                </button> 
            </Content>
        </Container>
    )
}