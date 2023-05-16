import {AiOutlineHome, AiOutlineMenu,AiOutlineMail,AiOutlineProject } from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'

import  {useState} from 'react'


const Sidenav = () => {
 const [nav,setNav] = useState(false)
 const handleNav = ()=>{
  setNav(!nav)
}
  return (
    <div>
      <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] h-6 w-6 md:hidden text-black'/>
      {
        nav ? (
          <div className=' fixed w-full h-screen bg-white/99 flex flex-col justify-center items-center z-20'>
            <a
              onClick={handleNav} 
              href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursos-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineHome size={20} />
              <span className='pl-4'>Inicio</span>
            </a>
            <a
              onClick={handleNav}
              href="#resume" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursos-pointer hover:scale-110 ease-in duration-200'>
              <BsPerson size={20} />
              <span className='pl-4'>Resumen</span>
            </a>
            <a
              onClick={handleNav}
              href="#projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursos-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineProject size={20} />
              <span className='pl-4'>Projectos</span>
            </a>

            <a 
              onClick={handleNav}
              href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursos-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineMail size={20} />
              <span className='pl-4'>Contacto</span>
            </a>
          </div>
        )
        : (
          ''
        )
      }
      <div className='md:block hidden fixed top-[25%] z-10'>
        <div className='flex flex-col'>
          <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursos-pointer hover:scale-110 ease-in duration-200'>
            <AiOutlineHome size={20}/>
          </a>
          <a href="#resumen" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursos-pointer hover:scale-110 ease-in duration-200'>
            <BsPerson size={20}/>
          </a>
          <a href="#projects" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursos-pointer hover:scale-110 ease-in duration-200'>
            <AiOutlineProject size={20}/>
          </a>

          <a href="#contact" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursos-pointer hover:scale-110 ease-in duration-200'>
            <AiOutlineMail size={20}/>
          </a>
        </div>
      </div>




    </div>
  )
}

export default Sidenav
