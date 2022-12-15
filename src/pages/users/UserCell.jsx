
export const UserCell = ({ value, property }) => {
    if (property === "avatar") {
        return <img width={50} height={50} src={value} alt={""} />;
    }

    return <div>{value}</div>;
};