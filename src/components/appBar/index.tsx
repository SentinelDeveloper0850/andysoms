import { APPNAME } from '../../constants';
import './styles.scss';

const AppBar = () => {
    return (
      <div className='app-bar'>
        <h3 style={{ margin: '0' }}>{APPNAME}</h3>
      </div>
    );
}

export default AppBar;