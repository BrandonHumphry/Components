import { useState } from "react";
import PageStructure from "../../Components/PageStructure/PageStructure";
import "./Contact.css";
import Button from "../../Components/Button/Button";

const Contact = ({ data }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  if (data) {
    var contactName = data.name;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var contactEmail = data.email;
    var contactMessage = data.contactmessage;
  }

  const submitForm = () => {
    window.open(
      `mailto:${contactEmail}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
        email
      )}): ${encodeURIComponent(message)}`
    );
  };

  const sendEmail = () => {
    window.location =
      "mailto:eandedesignstudio@gmail.com?Subject=StudioEandE.com%20";
  };

  return (
    <div>
      <PageStructure
        pageTitle="Contact"
        pageDescription="Provident similique accusantium nemo autem. Veritatis
                        obcaecati tenetur iure e\adipisci amet laborum. Perspiciatis 
                        minima nesciunt dolorem! Officiis iure rerum voluptates a cumque veli
                        eandedesignstudio@gmail.com
                        "
      />
      <div className="buttonSection">
        <Button
          className="btn btn--primary--solid btn--medium"
          onClick={sendEmail}
          // target="_top"
        >
          Email me
        </Button>
        {/* <Button
          className="btn btn--primary--solid btn--medium"
          href="mailto:eandedesignstudio@gmail.com?Subject=StudioEandE.com%20"
          target="_top"
        >
          E - mail Me
        </Button> */}
      </div>
    </div>
  );
};

export default Contact;
