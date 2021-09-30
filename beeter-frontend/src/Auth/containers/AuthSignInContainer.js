import { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Link } from "react-router-dom";
import styled from "styled-components";
import InputField from "../../components/InputField";
import PATHS from "../../routes/paths";
import Button from "../../components/Button";
import CheckboxField from "../../components/CheckboxField";

const StyledAside = styled.aside`
  position: absolute;
  top: 24px;
  right: 24px;
`;

const StyledForm = styled.form`
  margin-top: 24px;
`;
const StyledHr = styled.hr`
  margin: 32px 0 20px;
  display: block;
  box-shadow: none;
  appearance: none;
  border-style: solid;
  border-color: ${({ theme }) => theme.primaryColor};
`;

const AuthSignInContainer = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const intl = useIntl();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign-in", data);
  };
  return (
    <div>
      <StyledAside>
        <FormattedMessage
          id="auth.sign-in.alternative"
          values={{
            link: (
              <Link
                to={PATHS.signUp}
                title={intl.formatMessage({
                  id: "auth.sign-in.alternative-link",
                })}
              >
                <FormattedMessage id="auth.sign-in.alternative-link" />
              </Link>
            ),
          }}
        />
      </StyledAside>
      <h3>
        <FormattedMessage id="auth.sign-in.title" />
      </h3>
      <StyledForm onSubmit={handleSubmit}>
        <InputField
          id="email"
          remember="email"
          name="email"
          type="email"
          label={intl.formatMessage({
            id: "auth.sign-in.form.email",
          })}
          placeholder={intl.formatMessage({
            id: "auth.sign-in.form.email-placeholder",
          })}
          onChange={(e, i) => setData({ ...data, email: e.target.value })}
          value={data.email}
        />
        <InputField
          id="password"
          remember="password"
          name="password"
          type="password"
          label={intl.formatMessage({
            id: "auth.sign-in.form.password",
          })}
          onChange={(e, i) => setData({ ...data, password: e.target.value })}
          value={data.password}
        />
        <CheckboxField
          label={intl.formatMessage({
            id: "auth.sign-in.form.remember",
          })}
          onChange={(value) => setData({ ...data, remember: value })}
          value={data.remember}
        />
        <Button>
          <FormattedMessage id="auth.sign-in.form.submit" />
        </Button>
        <StyledHr />
        <Link
          to={PATHS.forgotPassword}
          title={intl.formatMessage({
            id: "auth.sign-in.forgot-password",
          })}
        >
          <FormattedMessage id="auth.sign-in.forgot-password" />
        </Link>
      </StyledForm>
    </div>
  );
};

export default AuthSignInContainer;
