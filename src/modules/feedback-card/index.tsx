import React from "react";

import { Rating } from "../../modules/rating";
import { FeedbackCardProps } from "./types/props";

import "./style.scss";

export const FeedbackCard: React.FC<FeedbackCardProps> = ({ feedback }) => {
  const name = feedback.name || "user";

  return (
    <div className="feedback-card">
      <div className="feedback-card__avatar">{name[0].toUpperCase()}</div>
      <div className="feedback-card__body">
        <div className="feedback-card__header">
          <div className="feedback-card__name">
            {name} · {feedback.email}
          </div>
          <div className="feedback-card__rating">
            <Rating value={feedback.rating} isReadonly />
          </div>
        </div>
        <div className="feedback-card__comment">{feedback.comment}</div>
      </div>
    </div>
  );
};
