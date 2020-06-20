import { Feedback } from "../../../modules/feedback/types/feedback";

export interface FeedbackPageDispatchProps {
  addFeedback(feedback: Feedback): void;
}
