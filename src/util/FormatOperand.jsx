const INT_FORMATTER = new Intl.NumberFormat('en-us', {
  maximumFractionDigits: 0,
});

export const FormatOperand = (operand) => {
  if (operand == null) return;
  const [integer, decimal] = operand.split('.');
  if (decimal == null) return INT_FORMATTER.format(integer);
  return `${INT_FORMATTER.format(integer)}.${decimal}`;
};
