import React, { useState } from "react";

const Questions = (props) => {
  const { title, content } = props.data;
  const [show, setShow] = useState(false);
  const handleShowDetails = () => {
    setShow(!show);
  };

  return (
    <div className="accordion">
      <div className="accordion-item">
        <div className="accordion-title">
          <div className="question">
            <p  onClick={handleShowDetails} className={show?"bold-text":"normal-text"}>{title}</p>

            <div
              onClick={handleShowDetails}
              className={show ? "arrow-up" : "arrow-down"}
            ></div>
          </div>
        </div>
        <div
          className={show ? "accordion-content-show" : "accordion-content-hide"}
        >
          {content}
        </div>
      </div>
    </div>
  );
};

export default Questions;
