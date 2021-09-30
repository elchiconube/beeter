import BaseMap from "../../components/BaseMap";
import Container from "../../components/Container";
import Navigation from "../../components/Navigation";
import styled from "styled-components";
const StyledDiv = styled.div`
  width: 800px;
  height: 700px;
`;
const HomeContainer = () => {
  return (
    <main>
      <Navigation />
      <Container>
        <h1>Home Container</h1>
        <StyledDiv>
          <BaseMap />
        </StyledDiv>
      </Container>
    </main>
  );
};

export default HomeContainer;
