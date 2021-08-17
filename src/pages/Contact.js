import React, { useState } from "react";
import "./Contact.css";

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

  return (
    <div className="contactbackground">
      <div className="contact-container">
        <h1> I'm a talker</h1>
        <p id="thankful">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in
          aliquet turpis, at imperdiet orci. Pellentesque semper erat nisl, ut
          ultrices lectus efficitur ut. Pellentesque faucibus tellus tristique
          magna volutpat vestibulum. Fusce id purus malesuada, volutpat libero
          nec, cursus lorem. Suspendisse mollis ante at elit malesuada, sit amet
          dignissim ex lobortis. Curabitur rhoncus nulla sed lorem volutpat, id
          ullamcorper nunc ullamcorper.
        </p>

        <div className="alignbuttons">
          <a
            id="button"
            className="buttons"
            href="mailto:eandedesignstudio@gmail.com?Subject=StudioEandE.com%20"
            target="_top"
          >
            E - mail Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
