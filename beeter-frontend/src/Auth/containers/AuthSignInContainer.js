import { FormattedMessage, useIntl } from "react-intl";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PATHS from "../../routes/paths";

const StyledAside = styled.aside`
  position: absolute;
  top: 24px;
  right: 24px;
`;

const AuthSignInContainer = () => {
  const intl = useIntl();
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
      <h1>
        <FormattedMessage id="auth.sign-in.title" />
      </h1>
    </div>
  );
};

export default AuthSignInContainer;
