import { useTheme } from "styled-components";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PATHS from "../routes/paths";
import Container from "../components/Container";
import Button from "./Button";
import { FormattedMessage } from "react-intl";

const StyledFigure = styled.figure`
  max-width: 120px;
`;

const StyledContainer = styled((props) => <Container {...props} />)`
  padding: 10px 24px;
  display: grid;
  grid-template-columns: 120px 1fr;
  align-items: center;
  grid-gap: 24px;
`;

const StyledNav = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledList = styled.ul`
  display: flex;
  gap: 24px;
  justify-content: flex-end;
  align-items: center;
`;

const Navigation = () => {
  const theme = useTheme();

  return (
    <StyledContainer>
      <StyledFigure>
        <img src={theme.logo} alt="Beeter logo" />
      </StyledFigure>
      <StyledNav>
        <StyledList>
          <li>
            <Link to={PATHS.base}>
              <FormattedMessage id="paths.home" />
            </Link>
          </li>
          <li>
            <Link to={PATHS.ideas}>
              <FormattedMessage id="paths.ideas" />
            </Link>
          </li>
          <li>
            <Link to={PATHS.about}>
              <FormattedMessage id="paths.about" />
            </Link>
          </li>
        </StyledList>
        <StyledList>
          <li>
            <Link to={PATHS.signIn}>
              {" "}
              <FormattedMessage id="paths.sign-in" />
            </Link>
          </li>
          <li>
            <Link to={PATHS.signUp}>
              <Button>
                <FormattedMessage id="paths.sign-up" />
              </Button>
            </Link>
          </li>
        </StyledList>
      </StyledNav>
    </StyledContainer>
  );
};

export default Navigation;
