import WorkItem from "./WorkItem"


const data = [
  {
      year:'2017-presente',
      title:'Mantenimiento General de interiores y exteriores',
      details:'Responsable de venta,pintura y limpieza',
  },
  {
      year:'2017-presente',
      title:'Mantenimiento General de piletas',
      details:'Responsable de venta,pintura y limpieza general',
  },
  {
      year:'2019-presente',
      title:'Operador logístico en H2O piletas de construcción',
      details:'Responsable de pagos a proveedores y traslado de materiales',
  },
  {
      year:'2020-presente',
      title:'Proyectista de poliuretáno en Proyectados La Plata',
      details:'Responsable de proyectar sobre superficies',
  },
]


const Work = () => {

  return (
    <>
      <div id="resumen" className="max-w-[1040px] m-auto md:pl-28 p-4 py-16 ">
        <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-10">Experiencia</h1>
            <ol className="flex flex-col ml-6 md:flex-row relative border-l border-stone-200">
            {
              <>
              <WorkItem year={data[0].year} title={data[0].title} details={data[0].details} />
              <WorkItem year={data[1].year} title={data[1].title} details={data[1].details} />
              <WorkItem year={data[2].year} title={data[2].title} details={data[2].details} />
              <WorkItem year={data[3].year} title={data[3].title} details={data[3].details} />
              </>
            }
           </ol>
      </div>
    </>
  )
}


export default Work
