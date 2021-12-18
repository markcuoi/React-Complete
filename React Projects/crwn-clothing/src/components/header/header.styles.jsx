import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  align-items: center;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {
    width: 50px;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

// export const OptionDiv = styled.div`
//   ${OptionContainerStyles}
// `;
