//snipet: rafce
import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import hero from '../../assets/hero.png';
import backpack from '../../assets/backpack.png';

const Navbar = () => {
    return (
        <>
            <div className='navbar'>

                <img src={logo} alt="logo" className='logo' />

                <div className='search-box'>
                    <input className="search-box input" type="text" placeholder='Search' />
                    <i className="fa fa-search"></i>
                </div>

                <i className="fa fa-bookmark-o"></i>
                <i className="fa fa-user-o"></i>
                <i className="fa fa-shopping-cart"></i>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Clothing</li>
                    <li>Equipment</li>
                    <li>Shoes and boots</li>
                    <li>Bagpacks and bags</li>
                    <li>Camping & outdour</li>
                    <li>Miscelaneous</li>
                    <li className="sale">SALE</li>
                    <li>Our Brands</li>
                </ul>
            </div>

            <div className="intro">
                <div>
                    <i className="fa fa-globe"></i>
                    <a>WORLDWIDE SHIPPING</a>
                </div>
                <div>
                    <i className="fa fa-ship"></i>
                    <a>31-DAY RETURM POLICY</a>
                </div>
                <div>
                    <i className="fa fa-check-square-o"></i>
                    <a>SECURE PAYMENT OPTIONS</a>
                </div>
            </div>

            <div className="hero-container">
                <img src={hero} alt="hero" className='hero' />
                <div className="hero-text">
                    <h2 className="underline">DISCOVER YOUR PERFECT GEAR!</h2>
                    <p className='hero-text-mission'>JUST FOR YOU - GEAR THAT FITS YOUR MISSION</p>
                    <button className='gear-up-now'>GEAR UP NOW</button>
                </div>
            </div>
            </>
            )
}

            export default Navbar
