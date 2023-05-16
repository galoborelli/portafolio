/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const ProjectItem = ({img,title,framework}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e] cursor-pointer'>
      <img  src={img} alt="" className="rounded-xl group-hover:opacity-10 w-full h-full  object-cover   "/>
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
       <h3 className="text-2xl font-bold text-center text-white tracking-wider ">{title}</h3>
       <p className="pb-4 pt-2 text-white text-center ">{framework}</p>
       <a href="https://github.com/galoborelli?tab=repositories" target="_blank"  rel="noreferrer">
       <p className="text-center rounded-ld text-white font-bold text-lg">Ir al código</p>
       </a>
      </div>
    </div>
  )
}

export default ProjectItem
