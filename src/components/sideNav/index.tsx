import { Link } from "react-router-dom";
import './styles.scss';

const SideNav = () => {
    return (
        <div className="side-nav">
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/blog"><li>Blog</li></Link>
                <Link to="/store"><li>Store</li></Link>
            </ul>
        </div>
    )
}

export default SideNav;