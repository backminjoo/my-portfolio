import { useState, useEffect } from 'react'
import {
    Navbar,
    Container,
    Nav,
    OverlayTrigger,
    Tooltip,
} from 'react-bootstrap'
// import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon1 from '../assets/img/gitlogo.webp'
import navIcon2 from '../assets/img/tistory.png'
// import navIcon2 from '../assets/img/nav-icon2.svg'
// import navIcon3 from '../assets/img/nav-icon3.svg'

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(!isOpen)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const onUpdateActiveLink = value => {
        setActiveLink(value)
    }
    return (
        <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
            <Container>
                {/* <Navbar.Brand href="#home">PortFolio</Navbar.Brand> */}
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    onClick={toggleMenu}
                >
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" in={isOpen}>
                    <Nav className="me-auto">
                        <Nav.Link
                            href="#home"
                            className={
                                activeLink === 'home'
                                    ? 'active navbar-link'
                                    : 'navbar-link'
                            }
                            onClick={() => onUpdateActiveLink('home')}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href="#skills"
                            className={
                                activeLink === 'skills'
                                    ? 'active navbar-link'
                                    : 'navbar-link'
                            }
                            onClick={() => onUpdateActiveLink('skills')}
                        >
                            Skills
                        </Nav.Link>
                        <Nav.Link
                            href="#project"
                            className={
                                activeLink === 'project'
                                    ? 'active navbar-link'
                                    : 'navbar-link'
                            }
                            onClick={() => onUpdateActiveLink('project')}
                        >
                            Project
                        </Nav.Link>
                        <Nav.Link
                            href="#education"
                            className={
                                activeLink === 'education'
                                    ? 'active navbar-link'
                                    : 'navbar-link'
                            }
                            onClick={() => onUpdateActiveLink('education')}
                        >
                            education
                        </Nav.Link>
                        {/* <Nav.Link
                            href="#activities"
                            className={
                                activeLink === 'activities'
                                    ? 'active navbar-link'
                                    : 'navbar-link'
                            }
                            onClick={() => onUpdateActiveLink('activities')}
                        >
                            activities
                        </Nav.Link> */}
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a
                                href="https://github.com/backminjoo"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="github-tooltip">
                                            Github로 이동
                                        </Tooltip>
                                    }
                                >
                                    <img src={navIcon1} alt="GitHub 아이콘" />
                                </OverlayTrigger>
                            </a>
                            <a
                                href="https://qoralswn1205.tistory.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tistory-tooltip">
                                            Tistory 이동
                                        </Tooltip>
                                    }
                                >
                                    <img src={navIcon2} alt="Tistory 아이콘" />
                                </OverlayTrigger>
                            </a>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
