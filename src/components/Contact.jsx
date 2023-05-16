
const Contact = () => {
  return (
    <div id="contact" className="max-w-[1040] m-auto md:pl-20 px-4 py-16 ">
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Contacto</h1>
      <form action="https://getform.io/f/53aa1034-ff08-4caa-8961-7a96ecd159c6" method="POST" encType="multipart/form-data">
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
            <div>
                <label className="uppercase font-bold text-sm py-2">Nombre</label>
                <input type="text" name="nombre" className="border-2 rounded-lg p-3 flex border-gray-300" />
            </div>
        </div>
        <div className="flex flex-col py-2">
            <label className="uppercase font-bold text-sm py-2">Email</label>
            <input className="border-2 rounded-lg p-3 flex border-gray-300" type="email" name="email" id="" />
        </div>
        <div className="flex flex-col py-2">
            <label className="uppercase font-bold text-sm py-2">Mensaje</label>
            <textarea className="border-2 rounded-lg border-gray-300" name="mensaje" rows='10'></textarea>
        </div>
        <button className="bg-[#001b5e] text-gray-100 font-bold  rounded-lg mt-4 p-4 w-full" type="submit">
            Enviar mensaje
        </button>
      </form>
    </div>
  )
}

export default Contact
