import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.primaryColor};
  border: 0;
  padding: ${({ small }) => (small ? "8px 12px" : "14px 28px")};
  border-radius: 5px;
  overflow: hidden;
  color: white;
  font-weight: 500;
  transition: all 300ms ease-in-out;
  display: inline-flex;
  align-items: center;
  display: inline-block;
  white-space: nowrap;

  &:hover {
    background-color: ${({ theme }) => theme.secondaryColor};
  }

  &:disabled {
    opacity: 0.8;
    background-color: #ccc;
    cursor: default;
  }

  > img {
    height: 18px;
    margin-left: 8px;
    display: inline-block;
  }
`;

const Button = ({ children, loading, ...props }) => (
  <StyledButton {...props}>{loading ? "loading" : children}</StyledButton>
);

export default Button;
