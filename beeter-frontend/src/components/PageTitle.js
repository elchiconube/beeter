import { Helmet } from "react-helmet";

const PageTitle = ({ title = null }) => {
  const pageSuffix = "| TaxDown";
  const pageSuffixSection = "Tu declaración de la renta online, bien hecha";

  return (
    <Helmet>
      <title>{title ? `${title} ${pageSuffixSection}` : pageSuffix}</title>
    </Helmet>
  );
};

export default PageTitle;
