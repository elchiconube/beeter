import { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import styled from "styled-components";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

const StyledForm = styled.form`
  margin-top: 24px;
`;

const AuthForgotPasswordContainer = () => {
  const [data, setData] = useState({
    email: "",
  });
  const intl = useIntl();

  const handleSubmit = (e, data) => {
    e.preventDefault();
    console.log(e, data);
  };
  return (
    <div>
      <h3>
        <FormattedMessage id="auth.forgot-password.title" />
      </h3>
      <StyledForm onSubmit={handleSubmit}>
        <InputField
          id="email"
          name="email"
          type="email"
          label={intl.formatMessage({
            id: "auth.forgot-password.form.email",
          })}
          placeholder={intl.formatMessage({
            id: "auth.forgot-password.form.email-placeholder",
          })}
          onChange={(e, i) => setData({ ...data, email: e.target.value })}
          value={data.email}
        />
        <Button>
          <FormattedMessage id="auth.forgot-password.form.submit" />
        </Button>
      </StyledForm>
    </div>
  );
};

export default AuthForgotPasswordContainer;
