import { RouteComponentProps } from "react-router-dom";

import { FeedbackPageStateProps } from "./state-props";
import { FeedbackPageDispatchProps } from "./dispatch-props";

export type FeedbackPageProps = RouteComponentProps & FeedbackPageStateProps & FeedbackPageDispatchProps;
