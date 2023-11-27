import zaccrook from '../assets/crook_liq.png'

const Landing = () => {
    return (
        <div className='flex flex-col align-center justify-center mt-10'>
            <img src={zaccrook} alt='zac crook' className='md:max-w-[600px] max-w-[375px] mt-32 md:mt-20 h-auto' />
            {/* <h1 className='flex justify-center mt-5 font-bold'>zac crook</h1> */}
        </div>
    )
}

export default Landing;