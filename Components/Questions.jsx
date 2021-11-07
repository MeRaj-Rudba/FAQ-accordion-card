import React from 'react';

const Questions = (props) => {
    const { title, content } = props.data;


    return (
        <div className="accordion">
        <div className="accordion-item">
          <div className="accordion-title">
            <div>{title}</div>
            {/* <div>+</div> */}
          </div>
          <div className="accordion-content">{content}</div>
        </div>
      </div>
    );
};

export default Questions;