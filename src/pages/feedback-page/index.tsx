import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

import { RootState } from "../../modules/redux/types/root-state";
import { Layout } from "../../modules/layout";
import { FeedbackForm } from "../../modules/feedback-form";
import { FeedbackList } from "../../modules/feedback-list";
import { FeedbackPageProps } from "./types/props";
import { FeedbackPageStateProps } from "./types/state-props";
import { FeedbackPageDispatchProps } from "./types/dispatch-props";
import { mapDispathToProps } from "./map-dispatch-to-props";
import { mapStateToProps } from "./map-state-to-props";
import { Feedback } from "../../modules/feedback/types/feedback";

import "./style.scss";

class FeedbackPageComponent extends React.Component<FeedbackPageProps> {
  constructor(props: FeedbackPageProps) {
    super(props);
  }

  onFeedbackFormSubmit = (feedback: Feedback) => {
    this.props.addFeedback(feedback);
  };

  public render() {
    const feedbackList = [...this.props.feedbackList].reverse();

    return (
      <Layout>
        <div className="feedback-page">
          <div className="feedback-page__main">
            <div className="feedback-page__form">
              <FeedbackForm onSubmit={this.onFeedbackFormSubmit} />
            </div>

            <div className="feedback-page__chart">Chart</div>
          </div>

          <div className="feedback-page__list">
            <FeedbackList feedbackList={feedbackList} />
          </div>
        </div>
      </Layout>
    );
  }
}

export const FeedbackPage = connect<FeedbackPageStateProps, FeedbackPageDispatchProps, RouteComponentProps, RootState>(
  mapStateToProps,
  mapDispathToProps,
)(FeedbackPageComponent);
