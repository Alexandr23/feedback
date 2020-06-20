import { RootState } from "../../modules/redux/types/root-state";
import { FeedbackPageStateProps } from "./types/state-props";
import { feedbackSelectList } from "../../modules/feedback/selectors/select-list";

export const mapStateToProps = (state: RootState): FeedbackPageStateProps => ({
  feedbackList: feedbackSelectList(state),
});
