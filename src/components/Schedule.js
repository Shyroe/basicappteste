import React, { useEffect, useState } from "react";
import axios from "axios";

// const url = `http://localhost:5000/addresses`; //get schedules and users(relationship)
// const url = `http://localhost:5000/schedules?_expand=users`; //get schedules and users(relationship)
// const url = `http://localhost:5000/schedules?_expand=users&_embed=addresses`; //get schedules and users(relationship)
// const url = `http://localhost:5000/schedules?_expand=users&_expand=services`; //get schedules and users and services(relationship)
// const url = `http://localhost:5000/users?_expand=addresses`; //get Users and Addresses(relationship)
// const url = `http://localhost:5000/users?_expand=addresses&_embed=schedules`; //get Users and Addresses and Schedules(relationship) - notWorking
// const url = `http://localhost:5000/users?_expand=schedules&_expand=addresses`; //get Users and Addresses and Schedules(relationship) - notWorking
// const url = `http://localhost:5000/users?_expand=addresses&_expand=schedules`; //get Users and Addresses and Schedules(relationship)
const url = `http://localhost:5000/addresses?_embed=schedules`; //get Addresses and Users(relationship)

// const url = `http://localhost:5000/users?_expand=addresses&_embed=services`; // get empty array
const Schedule = () => {
  async function getSchedules() {
    const data = await axios.get(url);
    console.log(data);
  }

  useEffect(() => {
    getSchedules();
  });
  return (
    <div>
      <h3>Schedule App</h3>
    </div>
  );
};

export default Schedule;
