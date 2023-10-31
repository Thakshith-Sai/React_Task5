import React, { useState } from "react";

function AgeFinder() {
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthDate = new Date(birthdate);
    const currentDate = new Date();

    const ageInMilliseconds = currentDate - birthDate;
    const ageInYears = Math.floor(
      ageInMilliseconds / (365 * 24 * 60 * 60 * 1000)
    );

    setAge(ageInYears);
  };

  return (
    <div className="container-fluid mt-5 p-3 " style={{ width: '40rem', border: "1px solid black" }} >
      <h1 className="text-center">Age Calculator</h1>
      <div className="text-center justify-content-center mt-3">
        <h5>Enter your Date of Birth</h5> 

        <div className="input" >
          <input
            type="date"
            className="form-control mt-3"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            
          />

          <button id="btn"
            onClick={calculateAge}
            className="btn btn-primary form-control mt-3 mb-3"
          >
            Calculate Age
          </button>
        </div>

        {age !== null && <h3>Your age is {age} years.</h3>}
      </div>
    </div>
  );
}

export default AgeFinder;
