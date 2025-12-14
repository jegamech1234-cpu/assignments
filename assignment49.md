// ```js
// Student Form
// Student Form – Name, Age, Course (select), Gender (radio).
// Show entered data in console
// ```

// import React from "react";
import React from "react";
import { useState } from "react";

const StudentForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const studentDetails = { name, age, course, gender };
    console.log("studentDetails", studentDetails);
  };

  return (
    <div>
      <h2>Student Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Age:</label>
          <input
            type="text"
            value={age}
            onChange={(e) => e.target.value}
            required
          />
        </div>

        <div>
          <label>Course:</label>

          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          >
            <option value="">Select course</option>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>

        <div>
          <label>Gender</label>
          <input
            type="radio"
            value="male"
            checked={gender === "male"}
            onChange={(e) => e.target.value}
          />
          Male
          <input
            type="radio"
            value="female"
            checked={gender === "female"}
            onChange={(e) => e.target.value}
          />
          Female
        </div>

        <button type="submit">Submit </button>
      </form>
    </div>
  );
};
export default StudentForm;
