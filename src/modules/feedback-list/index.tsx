import React from "react";

import { FeedbackCard } from "../../modules/feedback-card";
import { FeedbackListProps } from "./types/props";

import "./style.scss";

export const FeedbackList: React.FC<FeedbackListProps> = ({ feedbackList }) => {
  return (
    <div className="feedback-list">
      {feedbackList.map((feedback) => (
        <div className="feedback-list__item" key={feedback.id}>
          <FeedbackCard feedback={feedback} />
        </div>
      ))}
    </div>
  );
};
