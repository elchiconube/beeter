import styled from "styled-components";
import image from "../../assets/images/vertical.jpeg";

const StyledAside = styled.aside`
  background: url("${image}") no-repeat center;
  background-size: cover;
  overflow: hidden;
`;

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 300px 1fr;
  height: 100vh;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledWrapper = styled.div`
  padding: 24px;
  height: 90%;
  width: 50%;
`;

const AuthLayout = ({ children }) => {
  return (
    <StyledMain>
      <StyledAside />
      <StyledContainer>
        <StyledWrapper>{children}</StyledWrapper>
      </StyledContainer>
    </StyledMain>
  );
};

export default AuthLayout;
