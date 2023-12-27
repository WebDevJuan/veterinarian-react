import { useEffect, useState } from "react";
// components
import Header from "./components/Header";
import Form from "./components/Form";
import PatientList from "./components/PatientList";

function App() {
  const [patients, setPatients] = useState(JSON.parse(localStorage.getItem("pacientes")) ?? []);
  console.log(patients);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(patients));
  }, [patients]);

  const changePatients = (patientsData) => {
    setPatients(patientsData);
  };
  const changePatient = (patientData) => {
    setPatient(patientData);
  };
  const removePatient = (id) => {
    const newArray = patients.filter((p) => p.id !== id);
    setPatients(newArray);
  };

  return (
    <div className="container mx-auto mt-20 p-5">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          patients={patients}
          setPatient={setPatient}
          setPatients={changePatients}
          patient={patient}
        />
        <PatientList
          patients={patients.reverse()}
          changePatient={changePatient}
          removePatient={removePatient}
        />
      </div>
    </div>
  );
}

export default App;
