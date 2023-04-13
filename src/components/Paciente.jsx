const Paciente = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre: {""}
          <span className="font-normal normal-case">Hook</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Propietario: {""}
          <span className="font-normal normal-case">Jimmy</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email: {""}
          <span className="font-normal normal-case">correo@correo.com</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha Alta: {""}
          <span className="font-normal normal-case">10 de Diciembre 2023</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Sintomas: {""}
          <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur adipiscing elit non eget, erat facilisi viverra sagittis integer leo urna nibh consequat, donec facilisis semper habitasse molestie diam iaculis sollicitudin posuere, congue nam himenaeos placerat dictum vitae lectus nunc.</span>
        </p>

      </div>
  )
}

export default Paciente