import "./FooterStyle.css";

const Footer = () => {
  return (
    <footer>
      <div className="copyright">
        <div id="toTop">
          <a className="smoothscroll" title="Back to Top" href="#home">
            {/* how to make this dynamic so the scroll goes back up to the first div on each page */}
            <i className="icon-up-open"></i>
          </a>
        </div>
        <section>
          Created in{" "}
          <a title="" href="">
            2021
          </a>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
