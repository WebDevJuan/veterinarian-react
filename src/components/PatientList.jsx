import { useEffect, useState } from "react";

import Patient from "./Patient";

function PatientList({ patients, changePatient, removePatient }) {
  const [patiensList, setPatiensList] = useState([]);

  useEffect(() => {
    setPatiensList(patients);
  }, [patients]);

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-auto">
      {patiensList.length > 0 ? (
        <>
          <h2 id="lista" className="font-black text-3xl text-center">
            Listado de pacientes
          </h2>
          <p className="text-lg mt-5 text-center mb-10">
            Administra tus pacientes y {""}
            <span className="font-bold text-indigo-600 text-">citas</span>
          </p>
        </>
      ) : (
        <>
          <h2 id="lista" className="font-black text-3xl text-center">
            No hay pacientes
          </h2>
          <p className="text-lg mt-5 text-center mb-10">
            Comienza agregando pacientes y {""}
            <span className="font-bold text-indigo-600 text-">aparecerán aquí</span>
          </p>
        </>
      )}

      <div className="md:h-screen overflow-y-scroll">
        {patiensList.length > 0 &&
          patiensList.map((pt) => (
            // FIXME: Añadir clave key única
            <Patient
              key={pt.id}
              patient={pt}
              changePatient={changePatient}
              removePatient={removePatient}
            />
          ))}
      </div>
    </div>
  );
}

export default PatientList;
