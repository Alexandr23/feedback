import { Feedback } from "../types/feedback";
import { FeedbackActionType } from "../types/action-type";

export type AddFeedbackAction = {
  type: FeedbackActionType.AddFeedback;
  payload: {
    feedback: Feedback;
  };
};

export type FeedbackAction = AddFeedbackAction;
