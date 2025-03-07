import Buttons from '../atoms/Buttons.js'
// import Landing from '../assets/landing.jpg'
const LandingPage = () => {
    return (
        <div className='bg-[#000022] text-[#ffffff] font-sans-serif'>
            <div className='flex flex-row items-center justify-between py-8 px-20'>
                <h1 className='text-[#00ffff] text-[3rem]'>SUI</h1>
                <Buttons name="Connect Wallet"/>
            </div>

            <div className='flex flex-row items-center justify-center h-[80vh] '>
                <div className='font-sans-serif'>
                <h2 className='text-[8rem] text-[#00ffff]' >Subsui</h2>
                <h1 className='text-[5rem] text-gradient'>Your Ticketing Journey Starts Here</h1>
                <p className='text-3xl mb-20'>create your tickets, log customer tickets and handle event subscription</p>
                <Buttons name="Create Your First Ticket Here!"/>
                </div>
                {/* <img src= {Landing} alt="" /> */}
                
            </div>
            
        </div>
    )
}

export default LandingPage;