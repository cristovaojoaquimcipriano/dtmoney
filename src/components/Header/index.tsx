import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTranzactionModal: () => void;
}

function Header({ onOpenNewTranzactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTranzactionModal}>
          Nova tranzação
        </button>
      </Content>
    </Container>
  );
}

export default Header;
