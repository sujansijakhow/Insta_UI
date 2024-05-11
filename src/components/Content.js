
import imageSrc from '../images/sing.avif';
import pic from '../images/p1.jpg'// 
import pic1 from '../images/p6.jpg'// 
import pic2 from '../images/p2.jpg'// 
import pic3 from '../images/p3.jpg'// 
import pic4 from '../images/p4.jpg'// 
import pic5 from '../images/p5.jpg'// 
function Content() {

    return (
        <>

            <div className='p-4'>
                <div className='w-[300px] h-[70px] bg-white rounded-[2px] flex flex-row justify-evenly items-center p-3'>
                    <div className='flex flex-col'>
                        <img src={pic} alt='profile' className='w-[30px] h-[30px] rounded-full bg-rose-900 ring-2 ring-rose-400 ring-offset-1 ring-offset-white'></img>
                        <span className="text-[9px]">Jonathan</span>
                    </div>
                    <div className='flex flex-col'>
                        <img src={pic1} alt='profile' className='w-[30px] h-[30px] rounded-full bg-rose-900 ring-2 ring-rose-400 ring-offset-1 ring-offset-white'></img>
                        <span className="text-[9px]">Johnny...</span>
                    </div>
                    <div className='flex flex-col'>
                        <img src={pic3} alt='profile' className='w-[30px] h-[30px] rounded-full bg-rose-900 ring-2 ring-rose-400 ring-offset-1 ring-offset-white'></img>
                        <span className="text-[9px]">Calvary..</span>
                    </div>
                    <div className='flex flex-col'>
                        <img src={pic4} alt='profile' className='w-[30px] h-[30px] rounded-full bg-rose-900 ring-2 ring-rose-400 ring-offset-1 ring-offset-white'></img>
                        <span className="text-[9px]">theorigna</span>
                    </div>
                    <div className='flex flex-col'>
                        <img src={pic5} alt='profile' className='w-[30px] h-[30px] rounded-full bg-rose-900 ring-2 ring-rose-400 ring-offset-1 ring-offset-white'></img>
                        <span className="text-[9px]">thejakema</span>
                    </div>
                    <div className='flex flex-col'>
                        <img src={pic2} alt='profile' className='w-[30px] h-[30px] rounded-full bg-rose-900 ring-2 ring-rose-400 ring-offset-1 ring-offset-white'></img>
                        <span className="text-[9px]">thejakema</span>
                    </div>
                </div>

                {/* post container */}
                <div>

                    <div className='w-[300px] h-auto bg-white rounded-[2px] flex flex-col mt-3'>

                        <div className='flex flex-row justify-between w-[100%] item-center h-[50px] p-3'>

                            <div className='flex flex-row items-center gap-2'>
                                <img src={pic1} alt='profile' className='w-[30px] h-[30px] rounded-full bg-rose-900 ring-2 ring-rose-400 ring-offset-1 ring-offset-white'></img>
                                <span className="text-[12px] font-bold">Johnathan</span>
                            </div>
                            <div className=' flex flex-row items-center'>

                                <i class="fa-solid fa-ellipsis"></i>
                            </div>
                        </div>


                        <div className=''>
                            <img src={imageSrc} alt="sing" />

                        </div>

                        <div className='flex flex-row p-2 mt-[] justify-between'>
                            <div className='flex flex-row gap-4'>
                                <i class="fa-regular fa-heart"></i>
                                <i class="fa-regular fa-comment"></i>
                                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                            </div>
                            <div>
                                <i class="fa-regular fa-bookmark"></i>
                            </div>
                        </div>




                        <div className='pt-2 pl-2'>
                            <div className='flex flex-row relative'>
                                <img src={pic2} alt='pic' className='w-[15px] h-[15px] rounded-full bg-slate-900 z-2'></img>
                                <img src={pic3} alt='pic' className="w-[15px] h-[15px] rounded-full bg-slate-900 z-1 ring-2 ring-white absolute translate-x-2"></img>
                                <span className='text-[8px] ml-4'> Liked by <b>Calvary</b> and <b>others</b></span>
                            </div>

                        </div>
                        <div className='pl-2 pt-1 pb-1 border-b border-gray'>
                            <div className='flex flex-col '>
                                <span className='text-[10px] text-black'><b className='text-[10px]'>Carly</b> Every step you take, every challenge you overcome, is a testament to your growth. Keep pushing forward, and you'll surprise yourself with how far you can...<span className='text-gray-500 font-bold'>more</span>.</span>
                                <span className='text-gray-500  text-[9px] pt-1'>View All Comment</span>
                                <span className=' text-gray-500 text-[9px] pt-1'>3 days ago</span>
                            </div>
                        </div>

                        <div className='flex flex-row justify-between text-[10px] p-2'>
                            <div className='flex flex-row gap-2 items-center'>
                                <i class="fa-regular fa-face-smile"></i>
                                <span>Add a Comment...</span>


                            </div>
                            <div>
                                <span className='text-sky-300 text-[10px]'>Post</span>

                            </div>
                        </div>



                    </div>
                    <div className='w-[300px] h-auto bg-white rounded-[2px] flex flex-col mt-3'>

                        <div className='flex flex-row justify-between w-[100%] item-center h-[50px] p-3'>

                            <div className='flex flex-row items-center gap-2'>
                                <img src={pic1} alt='profile' className='w-[30px] h-[30px] rounded-full bg-rose-900 ring-2 ring-rose-400 ring-offset-1 ring-offset-white'></img>
                                <span className="text-[12px] font-bold">Johnathan</span>
                            </div>
                            <div className=' flex flex-row items-center'>

                                <i class="fa-solid fa-ellipsis"></i>
                            </div>
                        </div>


                        <div className=''>
                            <img src={imageSrc} alt="sing" />

                        </div>

                        <div className='flex flex-row p-2 mt-[] justify-between'>
                            <div className='flex flex-row gap-4'>
                                <i class="fa-regular fa-heart"></i>
                                <i class="fa-regular fa-comment"></i>
                                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                            </div>
                            <div>
                                <i class="fa-regular fa-bookmark"></i>
                            </div>
                        </div>




                        <div className='pt-2 pl-2'>
                            <div className='flex flex-row relative'>
                                <img src={pic2} alt='pic' className='w-[15px] h-[15px] rounded-full bg-slate-900 z-2'></img>
                                <img src={pic3} alt='pic' className="w-[15px] h-[15px] rounded-full bg-slate-900 z-1 ring-2 ring-white absolute translate-x-2"></img>
                                <span className='text-[8px] ml-4'> Liked by <b>Calvary</b> and <b>others</b></span>
                            </div>

                        </div>
                        <div className='pl-2 pt-1 pb-1 border-b border-gray'>
                            <div className='flex flex-col '>
                                <span className='text-[10px] text-black'><b className='text-[10px]'>Carly</b> Every step you take, every challenge you overcome, is a testament to your growth. Keep pushing forward, and you'll surprise yourself with how far you can...<span className='text-gray-500 font-bold'>more</span>.</span>
                                <span className='text-gray-500  text-[9px] pt-1'>View All Comment</span>
                                <span className=' text-gray-500 text-[9px] pt-1'>3 days ago</span>
                            </div>
                        </div>

                        <div className='flex flex-row justify-between text-[10px] p-2'>
                            <div className='flex flex-row gap-2 items-center'>
                                <i class="fa-regular fa-face-smile"></i>
                                <span>Add a Comment...</span>


                            </div>
                            <div>
                                <span className='text-sky-300 text-[10px]'>Post</span>

                            </div>
                        </div>



                    </div>


                </div>


                {/* end container */}




            </div>
        </>
    );
}

export default Content;