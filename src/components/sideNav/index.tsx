import { Link } from "react-router-dom";


const SideNav = () => {
    return (
        <div className="side-nav">
            <h1>This is the Side Nav</h1>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/blog"><li>Blog</li></Link>
                <Link to="/store"><li>Store</li></Link>
            </ul>
        </div>
    )
}

export default SideNav;