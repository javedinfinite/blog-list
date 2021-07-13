import React from "react";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import { Link } from "react-router-dom";

const myImage = {
  backgroundImage: "url(" + "https://search.muz.li/MmNiODdkZGVj" + ")",
  backgroundPosition: "center",
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  height: "80vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Error = (props) => {
  return (
    <div>
      <div style={myImage}>
        <div>
          <Button
            style={{ marginTop: "5%" }}
            size="large"
            variant="contained"
            color="primary"
            component={Link}
            to="/"
            endIcon={<TouchAppIcon />}
          >
            Page is under construction. Go back home.
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Error;
