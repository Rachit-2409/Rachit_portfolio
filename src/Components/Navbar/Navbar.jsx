import React, { useEffect, useRef } from 'react';
import propTypes from 'prop-types';

const Navbar = ({ navOpen }) => {
    const lastActiveLink = useRef(null);
    const activeBox = useRef(null);

    // Function to position the active box
    const initActiveBox = () => {
        if (!lastActiveLink.current || !activeBox.current) return;

        const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = lastActiveLink.current;

        activeBox.current.style.top = `${offsetTop}px`;
        activeBox.current.style.left = `${offsetLeft}px`;
        activeBox.current.style.width = `${offsetWidth}px`;
        activeBox.current.style.height = `${offsetHeight}px`;
    };

    // Handle link activation
    const activeCurrentLink = (event) => {
        lastActiveLink.current?.classList.remove('active'); // Remove previous active class
        event.target.classList.add('active'); // Add active class to clicked link
        lastActiveLink.current = event.target; // Update last active link ref
        initActiveBox();
    };

    // Initialize the active box and handle resize events
    useEffect(() => {
        const firstActiveLink = document.querySelector('.nav-link.active');
        if (firstActiveLink) {
            lastActiveLink.current = firstActiveLink;
            initActiveBox();
        }

        window.addEventListener('resize', initActiveBox);
        return () => window.removeEventListener('resize', initActiveBox); // Cleanup
    }, []);

    const navItems = [
        { label: 'Home', link: '#home', className: 'nav-link active' },
        { label: 'About', link: '#about', className: 'nav-link' },
        { label: 'Portfolio', link: '#portfolio', className: 'nav-link' },
        { label: 'Figma', link: '#figma', className: 'nav-link' },
        { label: 'Contact', link: '#contact', className: 'nav-link md:hidden' },
    ];

    return (
        <nav className={`navbar ${navOpen ? 'active' : ''}`}>
            {navItems.map(({ label, link, className }, key) => (
                <a
                    href={link}
                    className={className}
                    key={key}
                    onClick={activeCurrentLink}
                >
                    {label}
                </a>
            ))}
            <div className="active-box" ref={activeBox} style={{ position: 'absolute', transition: 'all 0.3s ease' }}></div>
        </nav>
    );
};

Navbar.propTypes = {
    navOpen: propTypes.bool.isRequired,
};

export default Navbar;
