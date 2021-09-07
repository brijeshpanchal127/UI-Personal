import React, { useEffect, useState } from "react";
const fetchData = async () => {
  const res = await fetch("https://swapi.dev/api/people/");
  const json = await res.json();
  return json.result;
};

const TodoList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchData().then((employees) => {
      setEmployees(employees);
    });
  }, []);

  return (
    <div>
      {employees.map((employee) => (
        <div key={employee.id}>{employee.name}</div>
      ))}
    </div>
  );
};
export default TodoList;
