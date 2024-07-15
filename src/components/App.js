import Main from "./Main";
import Header from "./Header";
import Loader from "./Loader";
import Error from "./Error";
import { useEffect, useReducer } from "react";
import StartScreen from "./StartScreen";
import Question from "./Question";
const initialstate = {
  questions: [],
  status: "loading",
  index: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    default:
      return { ...state, status: "Action unknown" };
  }
}
export default function App() {
  const [{ questions, status, index }, dispatch] = useReducer(
    reducer,
    initialstate
  );
  const numQuestions = questions.length;
  useEffect(function () {
    fetch("http://localhost:8000/questions").then((res) =>
      res
        .json()
        .then((data) => dispatch({ type: "dataReceived", payload: data }))
        .catch((err) => {
          dispatch({ type: "dataFailed" });
        })
    );
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "active" && <Question question={questions[index]} />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} onStartClick={dispatch} />
        )}
      </Main>
    </div>
  );
}
