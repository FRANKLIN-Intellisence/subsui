import Buttons from '../atoms/Buttons.tsx'
const TicketVerification = () => {
    return (
        <div className='flex flex-col items-center justify-between bg-[#000000] pt-[5rem] pb-[5rem] min-h-full'>
            <div>
                <h2 className='text-[3rem] text-[#00ffff]'>Ticket Verification</h2>
            </div>
            <div className='bg-[#2963c6] text-[#fff] w-[35%] m-auto text-center py-[3rem] rounded-[10px]'>
                <form action="" className='flex flex-col gap-[2rem] w-[80%] m-auto'>
                    <input type="text" placeholder="Enter your full name" className='h-[3rem]'/>
                    <input type="email" placeholder="Enter your email address" className='h-[3rem]'/>
                    <input type="text" placeholder="Ticket number" className='h-[3rem]'/>
                    <Buttons name='Verify Ticket' />
                </form>
            </div>
        </div>
    )
}

export default TicketVerification;