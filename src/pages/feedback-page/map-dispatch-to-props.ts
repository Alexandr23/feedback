import { Dispatch } from "redux";

import { addFeedback } from "../../modules/feedback/actions/add-feedback";
import { Feedback } from "../../modules/feedback/types/feedback";

export const mapDispathToProps = (dispatch: Dispatch) => ({
  addFeedback: (feedback: Feedback) => dispatch(addFeedback(feedback)),
});
