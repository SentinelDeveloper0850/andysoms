import AppBar from "../../components/appBar";
import SideNav from "../../components/sideNav"

interface IProps {
  children: any;
}

const Layout = ({ children }: IProps) => {
    return (
        <div className="layout" style={{ minHeight: '100vh' }}>
            <AppBar />
            <div className="main" style={{ display: 'flex', height: '90vh' }}>
                <div className="sider" style={{ width: '15%', height: '100%', background: '#fff' }}>
                    <SideNav />
                </div>
                <div className="content" style={{ width: '85%', height: '100%', background: '#eee' }}>
                    { children }
                </div>
            </div>
        </div>
    )
}

export default Layout;