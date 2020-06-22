import { RootState } from "../../../modules/redux/types/root-state";
import { feedbackSelectList } from "./select-list";

describe("Feedback List Selector", () => {
  it("Should return a feedback list from a state", () => {
    const list: RootState["feedback"]["list"] = [
      {
        name: "Alex",
        email: "nikiforovalex.tusur@gmail.com",
        rating: 4,
        comment: "Never seen anything better",
        id: "utloap498",
        created: "2020-06-21T13:02:08.106Z",
      },
      {
        name: "Alexandr",
        email: "ns_alex_ns@mail.ru",
        rating: 1,
        comment: "Awful app. The one page site's weight is 800kb!!!",
        id: "d9p2eybwh",
        created: "2020-06-21T13:02:02.818Z",
      },
      {
        name: "Admin",
        email: "test@test.com",
        rating: 5,
        comment:
          "I’m an experienced front-end developer with a strong sense for aesthetics. Last 3 years mainly worked with React and deeply studied its subtleties: performance optimization, state management, hooks, tests, server side rendering, etc. Interested in IT, I always continue to learn with curiosity and initiative. Now I’m learning Node.js (Express), PostgreSQL, GraphQL, Go. I’m seeking to gain more knowledge and experience with a new team in the new place.",
        id: "2q2yvxw96",
        created: "2020-06-21T13:02:11.892Z",
      },
    ];

    const state: RootState = {
      feedback: { list },
    };

    expect(feedbackSelectList(state)).toStrictEqual(list);
  });
});
