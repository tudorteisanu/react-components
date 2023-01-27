export const ConditionalWrapping = ({ condition, children }) => {
  if (condition) {
    return children;
  }

  return <></>;
};
