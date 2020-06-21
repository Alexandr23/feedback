# Feedback Page

## Run the project
In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Reflection

- I noticed that at the beginning of the task, along with users and repositories, **issues** are mentioned, but later only users and repositories are required to be implemented. It was worth clarifying immediately, but unfortunately, I started the task only on the weekend. Reminds real technical documentation when it is necessary to ask the manager and designers about implementation details.
- Use the **react-create-app** for a quicker start. Excellent for the test task where custom configuration is not required
- In addition to the debounce, I added **cancellation** of requests for the correct rendering.
- Used **react-select** lib. I don’t think it was worth implementing the select myself.

## TODO
- **Polymorphism**. Different types of lists are actually processed the same way, which can reduce the amount of code.
- Improve form **fields styles**.
- Add scss **mixins** for text size/weight, responsive markup, etc.
- **GraphQL**. Switch to GitHub API v4.
- Add **pagination**.
- Add **error notifications**.