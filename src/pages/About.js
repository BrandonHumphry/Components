import React from "react";

const About = ({ data }) => {
  if (data) {
    var name = data.name;
    var profilepic = "images/" + data.image;
    var bio = data.bio;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var email = data.email;
    var resumeDownload = data.resumedownload;
  }

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src={profilepic} alt="Profile Pic" />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>
            {bio}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Esta
            pellentesque elit ullamcorper dignissim cras. Penatibus et magnis
            dis parturient montes. Amet est placerat in egestas erat. Varius
            duis at consectetur lorem donec massa sapien faucibus et. Facilisis
            volutpat est velit egestas dui.<br></br>
          </p>
          <p>
            Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Esta pellentesque elit ullamcorper dignissim cras.
            Penatibus et magnis dis parturient montes. Amet est placerat in
            egestas erat. Varius duis at consectetur.<br></br>
          </p>
          <p>
            Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Esta pellentesque elit ullamcorper dignissim cras.
            Penatibus et magnis dis parturient montes. Amet est placerat in
            egestas erat. Varius duis at consectetur.<br></br>
          </p>
          <p>
            Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Esta pellentesque elit ullamcorper dignissim cras.
            Penatibus et magnis dis parturient montes. Amet est placerat in
            egestas erat. Varius duis at consectetur.<br></br>
          </p>
          <p>
            Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Esta pellentesque elit ullamcorper dignissim cras.
            Penatibus et magnis dis parturient montes. Amet est placerat in
            egestas erat. Varius duis at consectetur.<br></br>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
