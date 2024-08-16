import wqms from './assets/wqms.png';
import './Navbar.css';

function Navbar() {
    return(
        <div className="Navbar">
            <img src={wqms} alt="wqms_logo" className="Navbar-logo"/>
            <ul clasName="Navbar-menu">
                <li><a href="demo.com">Home</a></li>
                <li><a href="demo.com">Documentation</a></li>
                <li><a href="demo.com">Connect</a></li>
                <li><a href="demo.com">Water Quality Chart</a></li>
                <li><a href="demo.com">More</a></li>
                <li><a href="demo.com">About Sense WQ+</a></li>
            </ul>
            <div clasName="Navbar-dashboard-menu">
            <a
                    href="demo.com"
                    target="_blank">
                    Login
                </a>
                <button clasName="Dashboard-btn">
                    DASHBOARD
                </button>
                <span class="material-symbols-outlined">local_mall</span>
            </div>
        </div>
    );
}

export default Navbar;