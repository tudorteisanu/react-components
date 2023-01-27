const ErrorMessage = ({ error }) => {
  if (!error?.message) {
    return <></>;
  }

  return (
    <div
      style={{
        padding: "8px",
        color: "red",
        fontSize: '14px'
      }}
    >
      {error.message}
    </div>
  );
};

export default ErrorMessage;
