import { addFeedback } from "./add-feedback";
import { Feedback } from "../types/feedback";
import { FeedbackActionType } from "../types/action-type";

describe("Add Feedback Action Creator", () => {
  it("Should return add a feedback action", () => {
    const feedback: Feedback = {
      name: "Alex",
      email: "nikiforovalex.tusur@gmail.com",
      rating: 4,
      comment: "Never seen anything better",
      id: "utloap498",
      created: "2020-06-21T13:02:08.106Z",
    };

    expect(addFeedback(feedback)).toStrictEqual({ type: FeedbackActionType.AddFeedback, payload: { feedback } });
  });
});
