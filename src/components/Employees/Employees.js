import React from "react";
import TableRow from "./TableRow";

const Employees = ({ data }) => {
  return (
    <table>
      <tbody>
        {data.map((employe, i) => (
          <TableRow key={`employe-${i}`} employe={employe} i={i} />
        ))}
      </tbody>
    </table>
  );
};

export default Employees;
