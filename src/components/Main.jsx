import {TypeAnimation} from 'react-type-animation'
import {FaInstagram,FaLinkedinIn,FaGithub} from 'react-icons/fa'

const Main = () => {
  return (
    <>
    <div id='main'>
      <img className="w-full h-screen object-fit-cover object-left scale-x-[-1]" src="https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1425&q=80" alt="" />
    </div>
    <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
     <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center '>
        <h1 className='sm:text-5xl text-4xl font-bold text-black-500 '>Borelli Galo</h1>
        <h2  className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
        <TypeAnimation
      sequence={[
        'Desarrollador web full stack. . .', 
        1500, // Waits 1s
        'Entusiasta de la tecnología. . .', 
        1500, 
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1em', display: 'inline-block', paddingLeft:'5px' }}
    />
  </h2>
  <div className='flex justify-between pt-6 max-w-[200px] w-full'>
      <FaInstagram className='cursor-pointer' size={20}/>
      <FaLinkedinIn className='cursor-pointer' size={20}/>
      <FaGithub className='cursor-pointer' size={20}/>
  </div>
 </div>
</div>
    </>
  )
}

export default Main
