import React, { useState, useEffect } from 'react';
import './header.css';
import Logo from '../../Assets/Logo.png';
import SearchIcon from '../../Assets/search_icon.svg';
import NotificationIcon from '../../Assets/bell_icon.svg';
import ProfileIcon from '../../Assets/profile_img.png';
import CartIcon from '../../Assets/caret_icon.svg';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className='header_container'>
                <div className='header__left'>
                    <img src={Logo} alt="NetflixLogo" className='logo' />
                    <span>Home</span>
                    <span>Series</span>
                    <span>Films</span>
                    <span>Latest</span>
                    <span>My List</span>
                    <span>Browse by Languages</span>
                </div>
                <div className="header__right">
                    <ul>
                        <li><img src={SearchIcon} alt="Search" /></li>
                        <li><img src={NotificationIcon} alt="Notifications" /></li>
                        <li className='profile__icon'><img src={ProfileIcon} alt="Profile" /></li>
                        <li><img src={CartIcon} alt="Cart" /></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
