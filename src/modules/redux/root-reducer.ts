import { combineReducers } from "redux";

import { feedbackReducer } from "../../modules/feedback/reducer";

export const rootReducer = combineReducers({
  feedback: feedbackReducer,
});
