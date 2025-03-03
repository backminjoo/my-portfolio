import { Container, Row, Col, Nav, Tab } from 'react-bootstrap'
import { ProjectCards } from './ProjectCards'
// import colorSharp2 from ''
export const Project = () => {
    const projects = [
        {
            title: 'project',
            description: 'description',
            imgUrl: 'Img',
        },
        {
            title: 'project',
            description: 'description',
            imgUrl: 'Img',
        },
        {
            title: 'project',
            description: 'description',
            imgUrl: 'Img',
        },
        {
            title: 'project',
            description: 'description',
            imgUrl: 'Img',
        },
        {
            title: 'project',
            description: 'description',
            imgUrl: 'Img',
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
                            id="projects=tabs"
                            defaultActiveKey="first"
                        >
                            <Nav variant="pills" defaultActiveKey="/home">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
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
            <img className="background-image-right"></img>
        </section>
    )
}
