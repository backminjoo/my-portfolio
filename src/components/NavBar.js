import { useState, useEffect } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
// import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon1 from '../assets/img/gitlogo.webp'
import navIcon2 from '../assets/img/tistory.png'
// import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)

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
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
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
                            <a href="https://github.com/backminjoo">
                                <img src={navIcon1} alt=""></img>
                            </a>
                            <a href="https://qoralswn1205.tistory.com/">
                                <img src={navIcon2} alt=""></img>
                            </a>
                            {/* <a href="#">
                                <img src={navIcon3} alt=""></img>
                            </a> */}
                        </div>
                        {/* <button
                            className="vvd"
                            onClick={() => console.log('connect')}
                        >
                            <span>Let's Connect</span>
                        </button> */}
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
