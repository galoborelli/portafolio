import imgStock from '../assets/img-appstock.png'
import imgRick from '../assets/rick1.png'
import imgBuscador from '../assets/img-buscadorNoti.jpg'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    
    <div id='projects' className='max-w-[1040] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Proyectos</h1>
      <p className='py-8 text-center '></p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={imgBuscador} title='App Buscador de noticias' framework='Angular'/>
        <ProjectItem img={imgStock} title='App Stock de productos' framework='Angular'/>
        <ProjectItem img={imgRick} title='App Rick and Morty' framework='Vite JS'/>
      </div>
    </div>
    
  )
}

export default Projects
