import { Feedback } from "../../feedback/types/feedback";

export interface FeedbackFormState {
  form: Feedback;
  errors: Record<keyof Feedback, boolean>;
}
