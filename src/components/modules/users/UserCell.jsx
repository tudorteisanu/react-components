export const UserCell = ({ value, property }) => {
  if (property === "avatar") {
    return <img width={50} height={50} src={value} alt={""} />;
  }

  if (property === "createdAt") {
    return new Date(value).toISOString().substring(0, 10);
  }

  return <div>{value}</div>;
};
