import "./PageStructure.css";

const PageStructure = props => {
  const { pageTitle, pageDescription } = props;
  return (
    <div className="PageStructure">
      <h1 className="pageTitle">{pageTitle}</h1>
      <p className="pageDescription ">{pageDescription}</p>
      {/* <Footer /> */}
    </div>
  );
};

export default PageStructure;
