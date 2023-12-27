import { useEffect, useState } from "react";
// components
import Error from "./Error";
// utils
import { generateId, scrollToElement } from "../utils/utils";

const initialForm = {
  name: "",
  owner: "",
  email: "",
  discharge: "",
  symptoms: "",
  id: null,
};

function Form({ patients, setPatients, setPatient, patient }) {
  const [error, setError] = useState(false);

  const [client, setClient] = useState(patient || initialForm);

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setClient(patient);
    }
  }, [patient]);


  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación del formulario
    const { name, owner, email, discharge, symptoms } = client;
    if ([name, owner, email, discharge, symptoms].includes("")) {
      setError(true);
    } else {
      setError(false);
      if (client.id) {
        const modifyObj = {
          name: client.name,
          owner: client.owner,
          email: client.email,
          discharge: client.discharge,
          symptoms: client.symptoms,
          id: client.id,
        };
        const newPatiens = patients.map((p) =>
          p.id === client.id ? modifyObj : p
        );

        setPatients(newPatiens);
        setClient(initialForm);
        scrollToElement("lista")

      } else {
        const newObj = {
          name: client.name,
          owner: client.owner,
          email: client.email,
          discharge: client.discharge,
          symptoms: client.symptoms,
          id: generateId(),
        };
        setPatients([...patients, newObj]);
        setClient(initialForm);
        scrollToElement("lista")
      }
    }
    console.log("Enviando formulario...");
    // console.table(client);
  };

  const handleChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-auto">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y {""}
        <span className="font-bold text-indigo-600">administralos</span>
      </p>
      <form
        action=""
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        id="formulario"
      >
        {error && (
          <Error>
            <div>Todos los campos son obligatorios</div>
          </Error>
        )}
        <div className="mb-5">
          <label
            htmlFor="petsName"
            className="block text-gray-700 font-bold uppercase"
          >
            Nombre mascota <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            id="petsName"
            placeholder="Bobby"
            value={client.name}
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="petsOwner"
            className="block text-gray-700 font-bold uppercase"
          >
            Nombre propietario <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="owner"
            id="petsOwner"
            placeholder="Paco"
            value={client.owner}
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="petsEmail"
            className="block text-gray-700 font-bold uppercase"
          >
            Email del propietario <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="petsEmail"
            placeholder="paco@email.com"
            value={client.email}
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-5 max-h-full">
          <label
            htmlFor="petsDischarge"
            className="block text-gray-700 font-bold uppercase"
          >
            Alta de la mascota <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="discharge"
            id="petsDischarge"
            value={client.discharge}
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="petsSymptoms"
            className="block text-gray-700 font-bold uppercase"
          >
            Síntomas <span className="text-red-500">*</span>
          </label>
          <textarea
            name="symptoms"
            id="petsSymptoms"
            placeholder="Describe los síntomas"
            value={client.symptoms}
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            onChange={(e) => handleChange(e)}
          ></textarea>
        </div>
        <div className="mb-5">
          <input
            type="submit"
            className="bg-indigo-600 p-3 w-full text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer mb-3"
            value={client.id ? "Actualizar paciente" : "Agregar paciente"}
          />
          {client.id && (
            <button
              type="button"
              onClick={() => {
                setClient(initialForm);
                setPatient({});
              }}
              className="bg-red-600 p-3 w-full text-white uppercase font-bold hover:bg-red-700 cursor-pointer"
            >
            Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default Form;
