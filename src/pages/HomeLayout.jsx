import { Link } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div>
            <h1>HomeLayout</h1>
            <Link to='/music'>Music</Link>
        </div>
    )
}

export default HomeLayout;