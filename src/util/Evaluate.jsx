export const Evaluate = ({ currOp, prevOp, operation }) => {
  const prev = parseFloat(prevOp);
  const curr = parseFloat(currOp);
  if (isNaN(prev) || isNaN(curr)) return '';
  let computation = '';
  switch (operation) {
    case '+':
      computation = prev + curr;
      break;
    case '-':
      computation = prev - curr;
      break;
    case '*':
      computation = prev * curr;
      break;
    case '/':
      computation = prev / curr;
      break;
  }
  return computation.toString();
};
