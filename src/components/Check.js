
import pic from '../images/p1.jpg'// 
import pic1 from '../images/p6.jpg'// 
import pic3 from '../images/p3.jpg'// 
import pic4 from '../images/p4.jpg'// 
import pic5 from '../images/p5.jpg'
function Check() {  
    return (
        <>

            <div className='w-[200px] h-[40px] mt-5 flex flex-col gap-3 '>

                <div className=' w-full h-full flex justify-between'>

                    <div className='flex'>

                        <div>
                            <img src={pic3} alt='ig' className='3 w-[35px] h-[35px] rounded-full'></img>
                        </div>
                        <div className='flex flex-col gap-0 ml-2 '>
                            <span className='font-bold text-[10px]'>calvary</span>
                            <span className='text-gray-500 text-[12px]'>A S T H E T I C</span>
                        </div>
                    </div>

                    <div>
                        <span className='text-[11px] text-sky-500 font-bold'>Switch</span>
                    </div>
                </div>

                <div className=' w-full h-full flex justify-between'>

                    <div className='flex'>

                        <div>
                            <span className='text-gray-500 font-bold text-[10px]'>Suggestion For You</span>
                        </div>

                    </div>

                    <div>
                        <span className='text-[11px] font-bold text-slate-900'>See All</span>
                    </div>
                </div>
                <div className=' w-full h-full flex justify-between'>

                    <div className='flex'>

                        <div>
                            <img src={pic} alt='ig' className='3 w-[30px] h-[30px] rounded-full'></img>
                        </div>
                        <div className='flex flex-col gap-0 ml-2 '>
                            <span className='font-bold text-[10px]'>Johnathan</span>
                            <span className='text-gray-500 text-[9px]'>Followed By ALex</span>
                        </div>
                    </div>

                    <div>
                        <span className='text-[11px] font-bold text-sky-500'>Follow</span>
                    </div>
                </div>
                <div className=' w-full h-full flex justify-between'>

                    <div className='flex'>

                        <div>
                            <img src={pic1} alt='ig' className='3 w-[30px] h-[30px] rounded-full'></img>
                        </div>
                        <div className='flex flex-col gap-0 ml-2 '>
                            <span className='font-bold text-[10px]'>Johnny</span>
                            <span className='text-gray-500 text-[9px]'>Followed By James</span>
                        </div>
                    </div>

                    <div>
                        <span className='text-[11px] font-bold text-sky-500'>Follow</span>
                    </div>
                </div>
                <div className=' w-full h-full flex justify-between'>

                    <div className='flex'>

                        <div>
                            <img src={pic4} alt='ig' className='3 w-[30px] h-[30px] rounded-full'></img>
                        </div>
                        <div className='flex flex-col gap-0 ml-2 '>
                            <span className='font-bold text-[10px]'>theorigna</span>
                            <span className='text-gray-500 text-[9px]'>Followed By Hero</span>
                        </div>
                    </div>

                    <div>
                        <span className='text-[11px] font-bold text-sky-500'>Follow</span>
                    </div>
                </div>
                <div className=' w-full h-full flex justify-between'>

                    <div className='flex'>

                        <div>
                            <img src={pic5} alt='ig' className='3 w-[30px] h-[30px] rounded-full'></img>
                        </div>
                        <div className='flex flex-col gap-0 ml-2 '>
                            <span className='font-bold text-[10px]'>thejakema</span>
                            <span className='text-gray-500 text-[9px]'>Followed By Carly</span>
                        </div>
                    </div>

                    <div>
                        <span className='text-[11px] font-bold text-sky-500'>Follow</span>
                    </div>
                </div>


                <span className='text-[9px] text-gray-400'>About Help Press API Jobs- Privacy Teams&nbsp;<span className='text-[9px] text-gray-400'>Location Language</span></span>

                <span className='text-[9px] text-gray-400'>&copy; 2022 Instagram</span>
            </div>
        </>
    )
}

export default Check;