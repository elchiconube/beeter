import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0;
  gap: 16px;
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  line-height: 1.5;
`;

const StyledInput = styled.input`
  margin: 0;
`;

const CheckboxField = ({ label, value, onChange }) => {
  return (
    <StyledContainer>
      <StyledLabel>
        <StyledInput
          type="checkbox"
          onClick={() => onChange(!value)}
          value={value}
        />
        <span>{label}</span>
      </StyledLabel>
    </StyledContainer>
  );
};

export default CheckboxField;
