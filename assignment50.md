```js

Table Task

Create a JSX component that shows a student details table.
Columns: Roll No, Name, Grade.
Add at least 3 rows with sample data.
Use className="student-table" for the table.
```;
import React from "react";

const StudentTable = () => {
  return (
    <div>
      <h2>Student table here!</h2>
      <table
        className="student-table"
        border="1"
        cellPadding="5"
        cellSpacing="0"
      >
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Alice</td>
            <td>A</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Bob</td>

            <td>B</td>
          </tr>
          <tr>   
            <td>3</td>
            <td>Charlie</td>
            <td>C</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
