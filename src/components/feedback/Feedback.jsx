const Feedback = ({ arrFeedback, totalFeedback, positiveFeedbackProcent }) => {
  const { good, neutral, bad } = arrFeedback;
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positiveFeedbackProcent}</li>
    </ul>
  );
};

export default Feedback;
