import { Container, Row, Col, Nav, Tab } from 'react-bootstrap'
import { ProjectCards } from './ProjectCards'
import colorSharp2 from '../assets/img/color-sharp2.png'
// import projImg1 from '../assets/img/project-img1.png'
// import projImg2 from '../assets/img/project-img2.png'
// import projImg3 from '../assets/img/project-img3.png'
import projImg1 from '../assets/img/1proJ.png'
import projImg2 from '../assets/img/2proJ.png'
import projImg3 from '../assets/img/3proJ.png'
export const Project = () => {
    const projects = [
        {
            title: '게임&커뮤니티',
            description: (
                <span>
                    Java, JavaScript, HTML/CSS 기반 <br></br>웹 게임 제작 및
                    게임 커뮤니티 사이트로 게임 사이트
                </span>
            ),
            imgUrl: projImg1,
        },
        {
            title: 'project',
            description: 'description',
            imgUrl: projImg2,
        },
        {
            title: 'project',
            description: 'description',
            imgUrl: projImg3,
        },
        {
            title: 'project',
            description: 'description',
            imgUrl: projImg1,
        },
        {
            title: 'project',
            description: 'description',
            imgUrl: projImg1,
        },
        {
            title: 'project',
            description: 'description',
            imgUrl: projImg1,
        },
    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Reiciendis minus, praesentium nam impedit
                            maiores nobis sed architecto quam odio provident
                            accusamus repellendus esse unde! Ad atque pariatur
                            eveniet eius officiis?
                        </p>
                        <Tab.Container
                            id="projects-tabs"
                            defaultActiveKey="first"
                        >
                            <Nav variant="pills" defaultActiveKey="/home">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">ALL</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Single</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {projects.map((project, index) => {
                                            return (
                                                <ProjectCards
                                                    key={index}
                                                    {...project}
                                                ></ProjectCards>
                                            )
                                        })}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    Loren Ipsum
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    Loren Ipsum
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}
