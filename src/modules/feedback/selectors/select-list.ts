import { RootState } from "../../../modules/redux/types/root-state";
import { Feedback } from "../types/feedback";

export const feedbackSelectList = (state: RootState): Array<Feedback> => {
  return state.feedback.list;
};
