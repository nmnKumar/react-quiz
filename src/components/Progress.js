function Progress({ index, numQuestions, answer, points, maxPoints }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question{" "}
        <strong>
          {index + 1} / {numQuestions}
        </strong>
      </p>
      <p>
        <strong>
          {points} / {maxPoints}
        </strong>{" "}
        points
      </p>
    </header>
  );
}

export default Progress;
