import React from "react";

const Appointment = ({ appointment, index, toggleStatus }) => {
  const { patient, doctor, date, status } = appointment;

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{patient}</td>
      <td>{doctor}</td>
      <td>{status === "Scheduled" ? date : "N/A"}</td>
      <td>{status}</td>
      <td>
        <button onClick={toggleStatus}>Toggle Status</button>
      </td>
    </tr>
  );
};

export default Appointment;
