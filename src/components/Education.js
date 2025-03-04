import { Container, Row, Col } from 'react-bootstrap'
export const Education = () => {
    return (
        <section className="education" id="education">
            <Container>
                <Row>
                    <Col>
                        <div className="education-bx">
                            <h2>Education</h2>
                            <div className="education-bx-detail">
                                <div>
                                    <span className="edu-date">
                                        2020.03 ~ 2024.02
                                    </span>
                                    <h3>인덕대학교</h3>
                                    <p>컴퓨터소프트웨어학과 전문학사 졸업</p>
                                    <ul>
                                        <li>자료구조, 운영체제 등 CS 학습</li>
                                        <li>
                                            HTML,CSS,JavaScript 등 프로그래밍
                                            언어 학습
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <span className="edu-date">
                                        2024.03 ~ 2024.10
                                    </span>
                                    <h3>한국정보교육원</h3>
                                    <p>
                                        자바 스프링 리액트로 완성하는 클라우드
                                        활용 풀스택 개발
                                    </p>
                                    <li>
                                        JavaScript, React, Spring Boot, Oracle등
                                        학습
                                    </li>
                                    <li>
                                        솔로 프로젝트 1회, 협업 프로젝트 3회
                                        진행
                                    </li>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
