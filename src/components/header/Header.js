import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./header.css";
import LogoIcon from '../../assets/images/icon.png'
function Header() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
    <div className="logo__icon">
    <img src={LogoIcon} alt="" />
    </div>
			<nav ref={navRef}>
				<form action="">
        <div class="my-3 input-group input-group-sm">
         
            <input type="text" class="form-control" placeholder="Search..." />
            <span class="input-group-text" type="button" id="ieye">  <FontAwesomeIcon icon={faMagnifyingGlass} /></span> 
          </div>
        </form>
				<a href="/#">My Profile <FontAwesomeIcon icon={faUser} /></a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Header;


