import { faTimes, faSmile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const Welcome = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("show_app_intro"));
    setShowWelcome(data === false ? false : true);
  }, []);

  const onHideWelcome = () => {
    setShowWelcome(false);
    localStorage.setItem("show_app_intro", JSON.stringify(false));
  };

  return (
    <>
      {showWelcome && (
        <div className="container">
          <div
            className="alert alert-primary d-flex justify-content-between align-items-center rounded-3 shadow mt-4"
            role="alert"
          >
            <div className="d-flex align-items-center gap-3">
              <FontAwesomeIcon icon={faSmile} size="lg" />
              <span className="fw-bold fs-5">Welcome to SinaHg Coding Shop 🎉</span>
            </div>
            <FontAwesomeIcon
              icon={faTimes}
              onClick={onHideWelcome}
              role="button"
              className="ms-3"
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Welcome;
