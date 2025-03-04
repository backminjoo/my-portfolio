import { Container, Row, Col } from 'react-bootstrap'
export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col>
                        <div className="footer-bx">
                            <p className="footer-txt">Thank You</p>
                            <h1>봐주셔서 감사합니다 :)</h1>
                            <span>
                                개발자로 성장하기 위해 낯선 기술에도 적극적으로
                                도전하고,
                            </span>
                            <br></br>
                            <span>
                                항상 사용자의 관점에서 생각하며 사용하기 좋은
                                서비스를 만들고 싶습니다.
                            </span>
                            <div className="footer-btns">
                                <button
                                    onClick={() =>
                                        window.open(
                                            'https://github.com/backminjoo',
                                            '_blank'
                                        )
                                    }
                                >
                                    Github
                                </button>
                                {/* <button></button> */}
                                <button
                                    onClick={() => {
                                        window.open(
                                            'https://qoralswn1205.tistory.com/',
                                            '_blank'
                                        )
                                    }}
                                >
                                    Tistory
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
