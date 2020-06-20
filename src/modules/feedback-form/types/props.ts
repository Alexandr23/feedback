import { Feedback } from "../../feedback/types/feedback";

export interface FeedbackFormProps {
  onSubmit(form: Feedback): void;
}
