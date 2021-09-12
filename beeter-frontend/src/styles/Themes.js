import logoLight from "../assets/images/beeter-light.svg";
import logoDark from "../assets/images/beeter-dark.svg";

const spacings = {
  small1: "4px",
  small2: "8px",
  small3: "16px",
  small4: "24px",
  medium1: "32px",
  medium2: "40px",
  medium3: "48px",
  medium4: "56px",
  medium5: "64px",
  large1: "80px",
  large2: "96px",
  large3: "128px",
  large4: "200px",
};

const commonTheme = {
  primaryColor: "#00dc5a",
  secondaryColor: "#00b67a",
  ...spacings,
};

export const lightTheme = {
  body: "#FEF5E6",
  text: "#333333",
  logo: logoLight,
  ...commonTheme,
};

export const darkTheme = {
  body: "#333333",
  text: "#FEF5E6",
  logo: logoDark,
  ...commonTheme,
};
