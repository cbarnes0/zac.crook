import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomeLayout = () => {
    return (
        <div className='min-h-screen flex flex-col relative bg-gradient-to-b from-white from-10% via-yellow-100 via-30% to-purple-200 to-90%'>
            <div className='flex-grow flex flex-col bg-fixed bg-cover bg-center'>
                <div className='relative min-h-screen flex flex-col items-center text-black'>
                    <Navbar />
                    <Outlet />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default HomeLayout;