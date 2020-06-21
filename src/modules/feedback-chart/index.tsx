import React from "react";
import { Line } from "react-chartjs-2";

import { dateGetTime } from "../../helpers/date/get-time";
import { FeedbackChartProps } from "./types/props";

import "./style.scss";

export class FeedbackChart extends React.Component<FeedbackChartProps> {
  prepareLabels(feedbackList: FeedbackChartProps["feedbackList"]): Array<string> {
    return feedbackList.map((feedback) => dateGetTime(feedback.created));
  }

  prepareData(feedbackList: FeedbackChartProps["feedbackList"]): Array<number> {
    return feedbackList.reduce<Array<number>>((averageList, feedback) => {
      const length = averageList.length;
      const average =
        length === 0 ? feedback.rating : (averageList[length - 1] * length + feedback.rating) / (length + 1);
      const averageToFixed = Number(average.toFixed(3));
      averageList.push(averageToFixed);

      return averageList;
    }, []);
  }

  public render() {
    const labels = this.prepareLabels(this.props.feedbackList);
    const data = this.prepareData(this.props.feedbackList);

    return (
      <div className="feedback-chart">
        <Line
          options={{
            scales: {
              yAxes: [
                {
                  ticks: {
                    max: 5,
                    min: 0,
                  },
                },
              ],
            },
            legend: {
              display: false,
            },
          }}
          width={640}
          height={320}
          data={{
            labels,
            datasets: [
              {
                label: "Average rating",
                data,
                backgroundColor: "rgba(255, 215, 0, 0.3)",
                borderColor: "rgba(255, 215, 0, 1)",
                borderWidth: 1,
                pointBackgroundColor: "rgba(255, 215, 0, 1)",
                pointBorderColor: "rgba(255, 215, 0, 1)",
                pointBorderWidth: 1,
                pointHoverBorderWidth: 2,
              },
            ],
          }}
        />
      </div>
    );
  }
}
