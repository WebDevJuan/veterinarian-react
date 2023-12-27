//utils
import { scrollToElement } from "../utils/utils";
function Patient({ patient, changePatient, removePatient }) {
  const { id, name, owner, email, discharge, symptoms } = patient;

  const handleRemove = () => {
    const response = confirm("¿Quieres eliminar el registro?");

    if (response) {
      removePatient(id);
    }
  };

  return (
    <div className="bg-white shadow-md m-3 px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""} <span className="font-normal normal-case">{name}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre propietario: {""}{" "}
        <span className="font-normal normal-case">{owner}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""} <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha de alta: {""}{" "}
        <span className="font-normal normal-case">{discharge}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: {""}{" "}
        <span className="font-normal normal-case">{symptoms}</span>
      </p>
      <div className="sm:flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg mb-3 mx-2 w-full"
          onClick={() => {
            changePatient(patient);
            scrollToElement("formulario");
          }}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg mb-3 mx-2 w-full"
          onClick={handleRemove}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Patient;
