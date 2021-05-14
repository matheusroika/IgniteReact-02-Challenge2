import styled, { css } from 'styled-components';

interface ContainerProps {
  isFilled: boolean;
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  background: #fff;
  border: 1px solid rgb(240, 240, 245);
  border-radius: 8px;
  padding: 18px 24px;
  width: 100%;
  font-size: 16px;

  & + div {
    margin-top: 24px;
  }

  h1 {
    margin-bottom: 40px;
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #3d3d4d;

    &::placeholder {
      color: #b7b7cc;
    }
  }

  svg {
    margin-right: 16px;
  }

  ${props =>
    props.isFocused &&
    css`
      border-color: #ff9000;
      
      input {
        color: #ff9000;
      }
  `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
  `}
`;
