import { useTheme } from "styled-components";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PATHS from "../routes/paths";
import Container from "../components/Container";

const StyledFigure = styled.figure`
  max-width: 120px;
`;

const StyledContainer = styled((props) => <Container {...props} />)`
  padding: 10px 24px;
  display: grid;
  grid-template-columns: 120px 1fr;
  align-items: center;
`;

const StyledList = styled.ul`
  display: flex;
  gap: 18px;
  justify-content: flex-end;
`;

const Navigation = () => {
  const theme = useTheme();

  return (
    <StyledContainer>
      <StyledFigure>
        <img src={theme.logo} alt="Beeter logo" />
      </StyledFigure>
      <nav>
        <StyledList>
          <li>
            <Link to={PATHS.signIn}>Sign In</Link>
          </li>
          <li>
            <Link to={PATHS.signUp}>Sign Up</Link>
          </li>
        </StyledList>
      </nav>
    </StyledContainer>
  );
};

export default Navigation;
