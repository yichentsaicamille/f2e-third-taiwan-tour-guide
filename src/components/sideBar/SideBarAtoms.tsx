import styled from "styled-components/macro";
import * as constants from "../../constants/constants";

const Logo = styled.img`
  width: 117px;
  height: 47px;
  margin-bottom: 40px;
`;

const Container = styled.section`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 354px;
  box-shadow: ${constants.createBoxShadow()};
  padding: 40px 24px 40px 24px;
`;

export { Container, Logo };
