import { Container, Col, Row } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'
import colorSharp from '../assets/img/color-sharp.png'

export const Activities = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    }

    return (
        <section className="activities" id="activities">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Activities</h2>
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                className="skill-slider"
                            >
                                <div className="item">
                                    <div>
                                        <span className="edu-date">
                                            2020.03 ~ 2024.02
                                        </span>
                                        <h3>인덕대학교</h3>
                                        <p>
                                            컴퓨터소프트웨어학과 전문학사 졸업
                                        </p>
                                        <ul>
                                            <li>
                                                자료구조, 운영체제 등 CS 학습
                                            </li>
                                            <li>
                                                HTML,CSS,JavaScript 등
                                                프로그래밍 언어 학습
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <span className="edu-date">
                                            2020.03 ~ 2024.02
                                        </span>
                                        <h3>인덕대학교</h3>
                                        <p>
                                            컴퓨터소프트웨어학과 전문학사 졸업
                                        </p>
                                        <ul>
                                            <li>
                                                자료구조, 운영체제 등 CS 학습
                                            </li>
                                            <li>
                                                HTML,CSS,JavaScript 등
                                                프로그래밍 언어 학습
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <span className="edu-date">
                                            2020.03 ~ 2024.02
                                        </span>
                                        <h3>인덕대학교</h3>
                                        <p>
                                            컴퓨터소프트웨어학과 전문학사 졸업
                                        </p>
                                        <ul>
                                            <li>
                                                자료구조, 운영체제 등 CS 학습
                                            </li>
                                            <li>
                                                HTML,CSS,JavaScript 등
                                                프로그래밍 언어 학습
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <span className="edu-date">
                                            2020.03 ~ 2024.02
                                        </span>
                                        <h3>인덕대학교</h3>
                                        <p>
                                            컴퓨터소프트웨어학과 전문학사 졸업
                                        </p>
                                        <ul>
                                            <li>
                                                자료구조, 운영체제 등 CS 학습
                                            </li>
                                            <li>
                                                HTML,CSS,JavaScript 등
                                                프로그래밍 언어 학습
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}></img>
        </section>
    )
}
