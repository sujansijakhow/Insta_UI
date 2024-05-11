function MenuBar() {

    return (
        <>
            <div className="bg-white flex flex-col  pl-6 p=2 w-[200px] h-[100vh]">
                <div className='flex flex-col flex-1 gap-[16px]'>

                    <h1 className=" mt-5 font-bold text-[20px]">Instagram </h1>
                    <div className="flex flex-row gap-[10px] mt-1 font-bold items-center">
                        <i class="fa-solid fa-house text-[13px]"></i>
                        <span className=" text-[13px] font-bold">Home</span>
                    </div>
                    <div className="flex flex-row gap-[10px] items-center">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <span className=" text-[13px] ">Search</span>
                    </div>
                    <div className="flex flex-row gap-[10px] items-center">
                        <i class="fa-brands fa-wpexplorer"></i>
                        <span className=" text-[13px] ">Explore</span>
                    </div>
                    <div className="flex flex-row gap-[10px] items-center">
                        <i class="fa-brands fa-facebook-messenger"></i>
                        <span className=" text-[13px] ">Message</span>
                    </div>
                    <div className="flex flex-row gap-[10px] items-center">
                        <i class="fa-regular fa-heart"></i>
                        <span className=" text-[13px] ">Notification</span>
                    </div>
                    <div className="flex flex-row gap-[10px] items-center">
                        <i class="fa-solid fa-plus"></i>
                        <span className=" text-[13px] ">Create</span>
                    </div>
                    <div className="flex flex-row gap-[10px] items-center">
                        <i class="fa-solid fa-user"></i>
                        <span className=" text-[13px] ">Profile</span>
                    </div>
                </div>
                <div className="flex flex-col flex-1 justify-end ">
                    <div className='flex flex-row gap-[10px]'>

                        <i class="fa-solid fa-bars"></i>
                        <span className=" text-[13px] ">More</span>
                    </div>
                </div>

            </div>
        </>
    );
}

export default MenuBar;