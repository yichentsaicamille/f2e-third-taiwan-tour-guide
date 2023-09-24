import styled from "styled-components/macro";

const Home = (props: any) => {
  const { className, style } = props;
  return (
    <Container style={style} className={className}>
      Hello
    </Container>
  );
};

const Container = styled.section``;

export default Home;
