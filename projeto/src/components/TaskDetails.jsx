import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import Button from "./Button";

import "./TaskDetails.css";

const TaskDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
          repudiandae sint rerum, maiores aliquid fugit.
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
