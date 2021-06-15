import "./FooterStyle.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="copyright">
          <div id="toTop">
            <a className="smoothscroll" title="Back to Top" href="#home">
              {/* how to make this dynamic so the scroll goes back up to the first div on each page */}
              <i className="icon-up-open"></i>
            </a>
          </div>
          <li>
            Created in{" "}
            <a title="" href="">
              2021
            </a>
          </li>
        </div>
      </div>
    </>
  );
};

export default Footer;
