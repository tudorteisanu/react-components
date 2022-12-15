import {Children, cloneElement, isValidElement} from "react";

export const AddProps = ({ children, props }) => {
    const childrenWithProps = Children.map(children, (child) => {
        if (isValidElement(child)) {
            return cloneElement(child, { ...props });
        }
        return child;
    });

    return <div>{childrenWithProps}</div>;
};
