import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <header>
                <div>
                    <Link to='/'>
                        My list
                    </Link>
                    <br/>
                    <Link to='/add'>
                        Add item
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default Navbar