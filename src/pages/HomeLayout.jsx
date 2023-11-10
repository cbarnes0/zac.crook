import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomeLayout = () => {
    return (
        <div className='min-h-screen flex flex-col relative'>
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