import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const MENUS = {
  advisory: {
    label: 'Advisory Services',
    links: [
      { to: '/model-portfolio', label: 'Model Portfolio' },
      { to: '/flexi-cap-advisory-services', label: 'Flexi-Cap Advisory Services' }
    ]
  },
  about: {
    label: 'About',
    links: [
      { to: '/about-us', label: 'About Us' },
      { to: '/our-team', label: 'Our Team' },
      { to: '/client-testimonials', label: 'Client Testimonials' }
    ]
  },
  sebi: {
    label: 'SEBI Compliance',
    align: 'end', // last menu: opens leftwards from its button so it stays on screen
    links: [
      { to: '/investor-charter', label: 'Investor Charter' },
      { to: '/monthly-disclosures', label: 'Monthly Disclosures' },
      { to: '/complaint-redressal', label: 'Complaint Redressal / Grievance Redressal Mechanism' }
    ]
  }
};

const CLOSED = { id: null, path: null };

// Disclosure navigation (WAI-ARIA APG): a button toggles each submenu; mouse hover also opens it
const NavDropdown = ({ id, open, onToggle, onHover, onLeave, onBlur, onNavigate }) => {
  const menu = MENUS[id];
  return (
    <div
      className={`nav-item has-dropdown${open ? ' is-open' : ''}${menu.align === 'end' ? ' align-end' : ''}`}
      onPointerEnter={onHover}
      onPointerLeave={onLeave}
      onBlur={onBlur}
    >
      <button
        type="button"
        className="nav-link nav-trigger"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={`nav-menu-${id}`}
        onClick={onToggle}
      >
        {menu.label} <ChevronDown size={14} className="dropdown-icon" />
      </button>
      <div id={`nav-menu-${id}`} className="dropdown-menu">
        {menu.links.map((link) => (
          <Link key={link.to} to={link.to} className="dropdown-link" onClick={onNavigate}>{link.label}</Link>
        ))}
      </div>
    </div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpenAt, setMobileOpenAt] = useState(null);
  const [clicked, setClicked] = useState(CLOSED);
  const [hover, setHover] = useState({ id: null, dismissed: false });
  const location = useLocation();
  const { pathname } = location;
  const navRef = useRef(null);
  const mobileBtnRef = useRef(null);

  // Menus opened by click or keyboard belong to the page they were opened on, so they close on navigation
  const clickedId = clicked.path === pathname ? clicked.id : null;
  const mobileMenuOpen = mobileOpenAt === pathname;
  const isOpen = (id) => clickedId === id || (hover.id === id && !hover.dismissed);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    window.scrollTo(0, 0);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Escape closes any open dropdown (including one opened by hover); a click outside closes it too
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key !== 'Escape') return;
      const trigger = navRef.current?.querySelector('.nav-trigger[aria-expanded="true"]');
      if (trigger && navRef.current.contains(document.activeElement)) trigger.focus();
      setClicked(CLOSED);
      setHover((h) => (h.id ? { ...h, dismissed: true } : h));
    };
    const handlePointerDown = (e) => {
      if (!navRef.current?.contains(e.target)) setClicked(CLOSED);
    };
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, []);

  const toggleMenu = (id) => {
    if (clickedId === id) {
      setClicked(CLOSED);
      setHover((h) => (h.id === id ? { ...h, dismissed: true } : h));
    } else {
      setClicked({ id, path: pathname });
    }
  };

  const hoverMenu = (id) => (e) => {
    if (e.pointerType !== 'mouse') return;
    setHover({ id, dismissed: false });
    setClicked((c) => (c.id && c.id !== id ? CLOSED : c));
  };

  const leaveMenu = (e) => {
    if (e.pointerType === 'mouse') setHover({ id: null, dismissed: false });
  };

  const blurMenu = (id) => (e) => {
    if (e.relatedTarget && !e.currentTarget.contains(e.relatedTarget)) {
      setClicked((c) => (c.id === id ? CLOSED : c));
    }
  };

  const navigateFromMenu = () => {
    setClicked(CLOSED);
    setHover((h) => ({ ...h, dismissed: true }));
  };

  const closeMobileMenu = () => setMobileOpenAt(null);

  const handleHeaderKeyDown = (e) => {
    if (e.key === 'Escape' && mobileMenuOpen) {
      closeMobileMenu();
      mobileBtnRef.current?.focus();
    }
  };

  // Tabbing past the last mobile link would land on content hidden behind the overlay, so close it
  const handleHeaderBlur = (e) => {
    if (mobileMenuOpen && e.relatedTarget && !e.currentTarget.contains(e.relatedTarget)) closeMobileMenu();
  };

  const dropdown = (id) => (
    <NavDropdown
      id={id}
      open={isOpen(id)}
      onToggle={() => toggleMenu(id)}
      onHover={hoverMenu(id)}
      onLeave={leaveMenu}
      onBlur={blurMenu(id)}
      onNavigate={navigateFromMenu}
    />
  );

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} onKeyDown={handleHeaderKeyDown} onBlur={handleHeaderBlur}>
      <div className="nav-container">
        <Link to="/" className="logo" aria-label="Smart Sync Services home">
          <img
            src="/favicon.png"
            alt=""
            className="logo-image"
            style={{ height: '72px', width: 'auto', display: 'block' }}
          />
        </Link>

        <nav ref={navRef} className="desktop-nav" aria-label="Main">
          {dropdown('advisory')}

          <a href="https://missionsmile.smartsyncservices.com/learn" className="nav-link" target="_blank" rel="noopener noreferrer">MissioN S.M.I.L.E</a>
          <Link to="/blog" className="nav-link">Blog</Link>

          {dropdown('about')}
          {dropdown('sebi')}

          <Link to="/contact-us" className="nav-link">Contact Us</Link>
        </nav>

        <button
          ref={mobileBtnRef}
          type="button"
          className="mobile-menu-btn"
          aria-label="Menu"
          aria-haspopup="true"
          aria-expanded={mobileMenuOpen}
          aria-controls={mobileMenuOpen ? 'mobile-menu' : undefined}
          onClick={() => setMobileOpenAt(mobileMenuOpen ? null : pathname)}
        >
          <AnimatePresence mode="wait">
            {mobileMenuOpen ? (
              <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.2 }}>
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }} transition={{ duration: 0.2 }}>
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Main"
            className="mobile-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="mobile-nav-content">
              <Link to="/" onClick={closeMobileMenu}>Home</Link>

              <div className="mobile-nav-group">
                <span className="mobile-nav-title">Advisory Services</span>
                <Link to="/model-portfolio" onClick={closeMobileMenu}>Model Portfolio</Link>
                <Link to="/flexi-cap-advisory-services" onClick={closeMobileMenu}>Flexi-Cap Advisory Services</Link>
              </div>

              <a href="https://missionsmile.smartsyncservices.com/learn" className="mobile-nav-link" onClick={closeMobileMenu} target="_blank" rel="noopener noreferrer">MissioN S.M.I.L.E</a>
              <Link to="/blog" onClick={closeMobileMenu}>Blog</Link>

              <div className="mobile-nav-group">
                <span className="mobile-nav-title">About</span>
                <Link to="/about-us" onClick={closeMobileMenu}>About Us</Link>
                <Link to="/our-team" onClick={closeMobileMenu}>Our Team</Link>
                <Link to="/client-testimonials" onClick={closeMobileMenu}>Client Testimonials</Link>
              </div>

              <div className="mobile-nav-group">
                <span className="mobile-nav-title">SEBI Compliance</span>
                <Link to="/investor-charter" onClick={closeMobileMenu}>Investor Charter</Link>
                <Link to="/monthly-disclosures" onClick={closeMobileMenu}>Monthly Disclosures</Link>
                <Link to="/complaint-redressal" onClick={closeMobileMenu}>Complaint Redressal / Grievance Redressal Mechanism</Link>
              </div>

              <Link to="/contact-us" onClick={closeMobileMenu}>Contact Us</Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
