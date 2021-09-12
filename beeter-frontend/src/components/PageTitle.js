import { Helmet } from "react-helmet";

const PageTitle = ({ title = null }) => {
  const pageSuffix = "| Beeter";
  const pageSuffixSection = "Colabora y crea un mejor lugar";

  return (
    <Helmet>
      <title>{title ? `${title} ${pageSuffixSection}` : pageSuffix}</title>
    </Helmet>
  );
};

export default PageTitle;
