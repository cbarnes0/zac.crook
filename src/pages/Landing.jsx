import zaccrook from '../assets/zaccrook.PNG'

const Landing = () => {
    return (
        <div className='flex flex-col align-center justify-center mt-10'>
            <img src={zaccrook} alt='zac crook' className='md:max-w-[500px] max-w-[300px] mt-20 md:mt-0 h-auto' />
            <h1 className='flex justify-center mt-5 font-bold'>zac crook</h1>
        </div>
    )
}

export default Landing;