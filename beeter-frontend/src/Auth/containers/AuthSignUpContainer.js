import { FormattedMessage, useIntl } from "react-intl";
import { Link } from "react-router-dom";
import styled from "styled-components";
import InputField from "../../components/InputField";
import PATHS from "../../routes/paths";
import Button from "../../components/Button";
import CheckboxField from "../../components/CheckboxField";
import { useState } from "react";

const StyledAside = styled.aside`
  position: absolute;
  top: 24px;
  right: 24px;
`;

const StyledForm = styled.form`
  margin-top: 24px;
`;

const AuthSignUpContainer = () => {
  const intl = useIntl();

  const [data, setData] = useState({
    fullname: "",
    email: "",
    id: "",
    password: "",
    conditions: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign-up", data);
  };
  return (
    <div>
      <StyledAside>
        <FormattedMessage
          id="auth.sign-up.alternative"
          values={{
            link: (
              <Link
                to={PATHS.signIn}
                title={intl.formatMessage({
                  id: "auth.sign-up.alternative-link",
                })}
              >
                <FormattedMessage id="auth.sign-up.alternative-link" />
              </Link>
            ),
          }}
        />
      </StyledAside>
      <h3>
        <FormattedMessage id="auth.sign-up.title" />
      </h3>
      <StyledForm onSubmit={handleSubmit} autocomplete="off">
        <InputField
          id="fullname"
          remember="fullname"
          name="fullname"
          type="text"
          label={intl.formatMessage({
            id: "auth.sign-up.form.fullname",
          })}
          placeholder={intl.formatMessage({
            id: "auth.sign-up.form.fullname-placeholder",
          })}
          onChange={(e, i) => setData({ ...data, fullname: e.target.value })}
          value={data.fullname}
        />
        <InputField
          id="id"
          name="id"
          type="text"
          label={intl.formatMessage({
            id: "auth.sign-up.form.id",
          })}
          placeholder={intl.formatMessage({
            id: "auth.sign-up.form.id-placeholder",
          })}
          onChange={(e, i) => setData({ ...data, id: e.target.value })}
          value={data.id}
        />
        <InputField
          id="email"
          remember="email"
          name="email"
          type="email"
          label={intl.formatMessage({
            id: "auth.sign-up.form.email",
          })}
          placeholder={intl.formatMessage({
            id: "auth.sign-up.form.email-placeholder",
          })}
          onChange={(e, i) => setData({ ...data, email: e.target.value })}
          value={data.email}
        />
        <InputField
          id="password"
          name="password"
          type="password"
          label={intl.formatMessage({
            id: "auth.sign-up.form.password",
          })}
          onChange={(e, i) => setData({ ...data, password: e.target.value })}
          value={data.password}
        />
        <CheckboxField
          label={intl.formatMessage(
            {
              id: "auth.sign-up.form.conditions",
            },
            {
              terms: (
                <a
                  href={PATHS.terms}
                  target="_blank"
                  rel="noreferrer"
                  title={intl.formatMessage({ id: "paths.terms" })}
                >
                  <FormattedMessage id="paths.terms" />
                </a>
              ),
              privacy: (
                <a
                  href={PATHS.privacy}
                  target="_blank"
                  rel="noreferrer"
                  title={intl.formatMessage({ id: "paths.privacy" })}
                >
                  <FormattedMessage id="paths.privacy" />
                </a>
              ),
            }
          )}
          onChange={(value) => setData({ ...data, conditions: value })}
          value={data.conditions}
        />
        <Button>
          <FormattedMessage id="auth.sign-up.form.submit" />
        </Button>
      </StyledForm>
    </div>
  );
};

export default AuthSignUpContainer;
