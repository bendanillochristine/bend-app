import React, { useState } from "react";
import Appointment from "./Appointment";
const generateRandomDate = () => {
  const today = new Date();
  const randomOffset = Math.floor(Math.random() * 30);
  const randomDate = new Date(today);
  randomDate.setDate(today.getDate() + randomOffset);
  return randomDate.toISOString().split("T")[0];
};

const Appointments = () => {
  const [appointments, setAppointments] = useState([
    {
      patient: "John Doe",
      doctor: "Dr. Smith",
      date: generateRandomDate(),
      status: "Scheduled",
    },
    {
      patient: "Jane Doe",
      doctor: "Dr. Johnson",
      date: generateRandomDate(),
      status: "Scheduled",
    },
    {
      patient: "Alice Brown",
      doctor: "Dr. Lee",
      date: generateRandomDate(),
      status: "Scheduled",
    },
    {
      patient: "Bob White",
      doctor: "Dr. Patel",
      date: generateRandomDate(),
      status: "Scheduled",
    },
    {
      patient: "Charlie Green",
      doctor: "Dr. Smith",
      date: generateRandomDate(),
      status: "Scheduled",
    },
    {
      patient: "David Black",
      doctor: "Dr. Johnson",
      date: "",
      status: "Completed",
    },
    { patient: "Eva Grey", doctor: "Dr. Lee", date: "", status: "Completed" },
    {
      patient: "Frank Brown",
      doctor: "Dr. Patel",
      date: "",
      status: "Completed",
    },
    {
      patient: "Grace Yellow",
      doctor: "Dr. Smith",
      date: "",
      status: "Completed",
    },
    {
      patient: "Hank Blue",
      doctor: "Dr. Johnson",
      date: "",
      status: "Completed",
    },
  ]);

  const toggleStatus = (index) => {
    const updatedAppointments = appointments.map((appointment, i) =>
      i === index
        ? {
            ...appointment,
            status:
              appointment.status === "Scheduled" ? "Completed" : "Scheduled",
            date:
              appointment.status === "Scheduled" ? "" : generateRandomDate(),
          }
        : appointment
    );
    setAppointments(updatedAppointments);
  };

  return (
    <div className="appointments-container">
      <table className="appointments-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <Appointment
              key={index}
              index={index}
              appointment={appointment}
              toggleStatus={() => toggleStatus(index)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Appointments;
