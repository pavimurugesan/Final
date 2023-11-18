import React from "react";
import "./Contact.css";
import { Button, IconButton } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import BusinessIcon from "@mui/icons-material/Business";
import IosShareIcon from "@mui/icons-material/IosShare";

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="box">
        <h2 className="boxHeader">
          <EmailIcon />
          Contact Us
        </h2>
        <div className="emailBox">
          <a className="mailBtn" href="mailto:knaveenacse@gmail.com">
            <Button>
              knaveenacse@gmail.com <IosShareIcon />
            </Button>
          </a>
        </div>
      </div>

      <div className="box">
        <h2 className="boxHeader">
          <SendIcon />
          Follow Us
        </h2>
        <div className="followBox">
          <a href="https://www.facebook.com/profile.php?id=100090987973566&mibextid=ZbWKwL" target="blank">
            <FacebookIcon className="facebookSvgIcon" />
          </a>
          <a href="https://x.com/NaveenaK247?t=hkdX9BB3L4IkYKL0KFEXBg&s=09" target="blank">
            <TwitterIcon className="twitterSvgIcon" />
          </a>
        </div>
      </div>

      <div className="box">
        <h2 className="boxHeader">
          <BusinessIcon />
          Address
        </h2>
        <div className="addressBox">
          <h3>Tamil Nadu, India</h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
