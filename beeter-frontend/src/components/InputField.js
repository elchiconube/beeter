import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin-bottom: 21px;
`;

const LabelText = styled.p`
  margin-bottom: 4px;
  transition: 300ms ease-in-out;
`;

const HelpText = styled.small`
  padding-top: 4px;
  display: block;

  min-height: 25px;
  &.error {
    color: red;
  }
`;

export const Input = styled.input`
  appearance: none;
  outline: 0;
  line-height: 48px;
  text-indent: 24px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  transition: all 300ms ease-in-out;
  background-color: #f5f5f5;
  border-color: #ccc;

  + button {
    position: absolute;
    right: 0;
    bottom: -2px;
    cursor: pointer;
    padding: 16px;

    /* Safari 11+ */
    @media not all and (min-resolution: 0.001dpcm) {
      @supports (-webkit-appearance: none) and (stroke-color: transparent) {
        bottom: 2px;
      }
    }
  }

  &::placeholder {
    color: #ccc;
    transition: color 300ms ease-in-out;
  }

  &.error {
    background-color: red;
    border-color: red;

    &::placeholder {
      color: red;
    }

    &:focus::placeholder {
      color: #ccc;
    }
  }

  &:focus {
    background-color: #ccc;
    border-color: #ccc;

    + ${LabelText} {
      color: #ccc;
    }
  }

  &:disabled {
    background-color: #ccc;
    border-color: #ccc;
    color: #ccc;

    + ${LabelText} {
      color: #ccc;
    }
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column-reverse;
  position: relative;
`;

const InputField = React.forwardRef((props, ref) => {
  const {
    className,
    disabled,
    error,
    help,
    label,
    name,
    onChange,
    placeholder,
    tabIndex,
    type,
    value,
    ...other
  } = props;

  return (
    <StyledContainer className={className}>
      <Label>
        <Input
          className={error ? `error` : null}
          type={type}
          disabled={disabled}
          value={value}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          tabIndex={tabIndex}
          ref={ref}
          {...other}
        />
        {label && <LabelText disabled={disabled}>{label}</LabelText>}
      </Label>
      {help && <HelpText className={error ? "error" : null}>{help}</HelpText>}
    </StyledContainer>
  );
});

InputField.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  help: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  tabIndex: PropTypes.string,
  type: PropTypes.oneOf(["text", "password", "email"]).isRequired,
  value: PropTypes.string,
};

InputField.defaultProps = {
  value: "",
  disabled: false,
  type: "text",
};

export default InputField;
