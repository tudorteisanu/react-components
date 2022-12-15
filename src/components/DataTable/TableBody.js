import { AddProps } from "../../services/add-props";
import { ConditionalWrapping } from "../common/ConditionalWrapping";

export const TableBody = ({ headers, items, cell, actions }) => {
  return (
    <tbody>
      {items.map((item, itemIndex) => (
        <tr key={itemIndex} className={"TableRow"}>
          {headers.map(({ value }, headerIndex) => (
            <td key={headerIndex} className={"TableCell"}>
              <ConditionalWrapping condition={value !== "actions"}>
                <AddProps props={{ property: value, value: item[value] }}>
                  {cell ?? item[value]}
                </AddProps>
              </ConditionalWrapping>
            </td>
          ))}
          <td>
            <AddProps props={{ item }}>{actions}</AddProps>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
