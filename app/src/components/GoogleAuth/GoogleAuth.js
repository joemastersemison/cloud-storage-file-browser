import React, { useState, useEffect } from "react";
import config from "../../config";

const GoogleAuth = ({ setIdToken, setProfile }) => {
  useEffect(() => {
    setIdToken(config.idToken);
    setProfile({
      name: "Library Browser",
      imageUrl:
        "https://winaero.com/blog/wp-content/uploads/2018/12/file-explorer-folder-libraries-icon-18298.png",
      email: "info@fuel-compliance.com",
    });
  }, []);

  return <></>;
};

export default GoogleAuth;
