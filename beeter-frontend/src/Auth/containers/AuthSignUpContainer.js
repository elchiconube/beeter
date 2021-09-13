import { FormattedMessage, useIntl } from "react-intl";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PATHS from "../../routes/paths";

const StyledAside = styled.aside`
  position: absolute;
  top: 24px;
  right: 24px;
`;

const AuthSignUpContainer = () => {
  const intl = useIntl();
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
      <h1>
        <FormattedMessage id="auth.sign-up.title" />
      </h1>
    </div>
  );
};

export default AuthSignUpContainer;
