import { Container, Row, Col, Nav, Tab } from 'react-bootstrap'
import { ProjectCards } from './ProjectCards'
import colorSharp2 from '../assets/img/color-sharp2.png'

import projImg1 from '../assets/img/1proJ.png'
import projImg2 from '../assets/img/2proJ.png'
import projImg3 from '../assets/img/3proJ.png'
import projImg4 from '../assets/img/4proJ.png'
import projImg5 from '../assets/img/5proJ.png'
import projImg6 from '../assets/img/6proJ.png'
import projImg7 from '../assets/img/7proJ.png'
import projImg8 from '../assets/img/8proJ.png'
import projImg9 from '../assets/img/9proJ.png'
export const Project = () => {
    const projects = [
        {
            title: '게임&커뮤니티',
            description: (
                <span>
                    Java, JavaScript, HTML/CSS 기반 <br></br>웹 게임 제작 및
                    게임 커뮤니티 사이트
                </span>
            ),
            imgUrl: projImg1,
            githubUrl: 'https://github.com/backminjoo/RetroStars',
        },
        {
            title: '기업전산관리시스템',
            description: (
                <span>
                    JSP, Spring Legacy 기반<br></br>일정 관리, 전자 결재 기능 등
                    그룹웨어 플랫폼 개발
                </span>
            ),
            imgUrl: projImg2,
            githubUrl: 'https://github.com/backminjoo/WIT',
        },
        {
            title: '티켓판매시스템',
            description: (
                <span>
                    React, Spring Boot 기반 <br></br>
                    콘서트, 뮤지컬, 스포츠 경기 <br></br> 이벤트 티켓 판매
                    시스템 개발
                </span>
            ),
            imgUrl: projImg3,
            githubUrl: 'https://github.com/backminjoo/TAP',
        },
        {
            title: '사용자 & 관리자 FAQ',
            description: (
                <span>TypeScript와 Nest.js를 활용한 FAQ 풀스택 개발</span>
            ),
            imgUrl: projImg4,
            tistoryUrl: 'https://qoralswn1205.tistory.com/95',
        },
        {
            title: 'Tattoo Shop',
            description: 'HTML & CSS로 제작한 반응형 웹 사이트',
            imgUrl: projImg5,
            githubUrl: 'https://github.com/backminjoo/Tattoo-Shop',
        },
        {
            title: 'Chat-MBTI',
            description: (
                <span>
                    인공지능 채팅 기능과 MBTI 테스트가가 <br></br> 통합된 웹
                    애플리케이션 시스템 개발
                </span>
            ),
            imgUrl: projImg6,
            githubUrl: 'https://github.com/backminjoo/MBTI_test',
        },
        {
            title: '모터디',
            description: (
                <span>
                    모두 + 스터디의 합성어로, 혼자 하지 말고 모두 모여 <br></br>{' '}
                    스터지하자는 의미의 스터디 구인 서비스
                </span>
            ),
            imgUrl: projImg7,
            githubUrl: 'https://github.com/backminjoo/Motudy',
        },
        {
            title: '식물 갤러리',
            description: (
                <span>
                    HTML & CSS 기반 <br></br> 식물 갤러리 사이트를 제작
                </span>
            ),
            imgUrl: projImg8,
            githubUrl: 'https://github.com/backminjoo/plant_gallery',
        },
        {
            title: 'Trip Trek',
            description: (
                <span>
                    Adobe Photoshop, Adobe Illustrator,<br></br> Adobe
                    Dreamweaver 으로 제작한 여행 앱 제작
                </span>
            ),
            imgUrl: projImg9,
            // githubUrl: 'https://github.com/backminjoo/plant_gallery',
        },
    ]
    const projects2 = [
        {
            title: '게임&커뮤니티',
            description: (
                <span>
                    Java, JavaScript, HTML/CSS 기반 <br></br>웹 게임 제작 및
                    게임 커뮤니티 사이트
                </span>
            ),
            imgUrl: projImg1,
            githubUrl: 'https://github.com/backminjoo/RetroStars',
        },
        {
            title: '기업전산관리시스템',
            description: (
                <span>
                    JSP, Spring Legacy 기반<br></br>일정 관리, 전자 결재 기능 등
                    그룹웨어 플랫폼 개발
                </span>
            ),
            imgUrl: projImg2,
            githubUrl: 'https://github.com/backminjoo/WIT',
        },
        {
            title: '티켓판매시스템',
            description: (
                <span>
                    React, Spring Boot 기반 <br></br>
                    콘서트, 뮤지컬, 스포츠 경기 <br></br> 이벤트 티켓 판매
                    시스템 개발
                </span>
            ),
            imgUrl: projImg3,
            githubUrl: 'https://github.com/backminjoo/TAP',
        },

        {
            title: 'Chat-MBTI',
            description: (
                <span>
                    인공지능 채팅 기능과 MBTI 테스트가가 <br></br> 통합된 웹
                    애플리케이션 시스템 개발
                </span>
            ),
            imgUrl: projImg6,
            githubUrl: 'https://github.com/backminjoo/MBTI_test',
        },
        {
            title: '모터디',
            description: (
                <span>
                    모두 + 스터디의 합성어로, 혼자 하지 말고 모두 모여 <br></br>{' '}
                    스터지하자는 의미의 스터디 구인 서비스
                </span>
            ),
            imgUrl: projImg7,
            githubUrl: 'https://github.com/backminjoo/Motudy',
        },
    ]
    const projects3 = [
        {
            title: '사용자 & 관리자 FAQ',
            description: (
                <span>TypeScript와 Nest.js를 활용한 FAQ 풀스택 개발</span>
            ),
            imgUrl: projImg4,
            tistoryUrl: 'https://qoralswn1205.tistory.com/95',
        },
        {
            title: 'Tattoo Shop',
            description: 'HTML & CSS로 제작한 반응형 웹 사이트',
            imgUrl: projImg5,
            githubUrl: 'https://github.com/backminjoo/Tattoo-Shop',
        },

        {
            title: '식물 갤러리',
            description: (
                <span>
                    HTML & CSS 기반반 <br></br> 식물 갤러리 사이트를 제작
                </span>
            ),
            imgUrl: projImg8,
            githubUrl: 'https://github.com/backminjoo/plant_gallery',
        },
        {
            title: 'Trip Trek',
            description: (
                <span>
                    Adobe Photoshop, Adobe Illustrator,<br></br> Adobe
                    Dreamweaver 으로 제작한 여행 앱 제작
                </span>
            ),
            imgUrl: projImg9,
            // githubUrl: 'https://github.com/backminjoo/plant_gallery',
        },
    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>2020~2024에 제작한 웹 개발 프로젝트입니다.</p>
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
                                    <Row>
                                        {projects2.map((project, index) => {
                                            return (
                                                <ProjectCards
                                                    key={index}
                                                    {...project}
                                                ></ProjectCards>
                                            )
                                        })}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {projects3.map((project, index) => {
                                            return (
                                                <ProjectCards
                                                    key={index}
                                                    {...project}
                                                ></ProjectCards>
                                            )
                                        })}
                                    </Row>
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
