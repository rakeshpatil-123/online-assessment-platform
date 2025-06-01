import React from 'react'
const Userdashboard = () => {
    return (
        <>
            <div className=' bg-gray-900 p-20'>
                <div className='flex items-center justify-between m-10 text-white'>
                    <h1>✨ <span className='font-semibold'>Online Assessment Platform</span> </h1>
                    <button className="bg-blue-500 font-semibold py-2 px-4 rounded-md hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300" >Logout</button>
                </div>
                <div className='flex flex-wrap mt-10 gap-5 justify-evenly items-center text-white'>
                    <div className=' bg-gray-700 h-44 w-[80vh] p-10 rounded-2xl'>Completed</div>
                    <div className=' bg-gray-700 h-44 w-[80vh] p-10 rounded-2xl' >Pending</div>
                    <div className=' bg-gray-700 h-44 w-[80vh] p-10 rounded-2xl' >Failed</div>
                    <div className=' bg-gray-700 h-44 w-[80vh] p-10 rounded-2xl' >New Task</div>
                </div>
                <div className='p-10  mt-10'>
                    <div className='tasks h-[45vh] w-full  overflow-x-auto  flex flex-nowrap gap-5'>
                        <div className='h-full w-[35vh] bg-gray-800 flex-shrink-0 p-6 text-white rounded-lg gap-y-5 '>
                            <div className='flex gap-16 mb-8'>
                                <h1>High</h1>
                                <h6 className='text-sm'>20, feb 2024</h6>
                            </div>
                            <strong >This is the Task</strong>
                            <p className='mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, iste!</p>
                        </div>
                        <div className='h-full w-[35vh] bg-gray-800 flex-shrink-0 rounded-lg'> </div>
                        <div className='h-full w-[35vh] bg-gray-800 flex-shrink-0 rounded-lg'> </div>
                        <div className='h-full w-[35vh] bg-gray-800 flex-shrink-0 rounded-lg'> </div>
                        <div className='h-full w-[35vh] bg-gray-800 flex-shrink-0 rounded-lg'> </div>
                        <div className='h-full w-[35vh] bg-gray-800 flex-shrink-0 rounded-lg'> </div>
                        <div className='h-full w-[35vh] bg-gray-800 flex-shrink-0 rounded-lg'> </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Userdashboard