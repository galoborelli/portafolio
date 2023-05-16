/* eslint-disable react/prop-types */

const WorkItem = ({year,title,details}) => {
 
  return (
    <>

   
        <li  className='mb-10 ml-4'>
        <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white'/>
        <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
            <span className='inline-block px-2 px-1 font-semibold text-white bg-[#001b5e] rounded-md'>{year}</span>
            <span className="text-lg font-semibold text-[#001b5e]">{title}</span>
        </p>
        <p >{details}</p>
      </li>

      
    </>
  )
}



export default WorkItem
