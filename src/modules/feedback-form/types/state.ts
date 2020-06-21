import { Feedback } from "../../feedback/types/feedback";

export interface FeedbackFormState {
  form: Omit<Feedback, "id" | "created">;
  errors: Record<keyof Omit<Feedback, "id" | "created">, boolean>;
}
