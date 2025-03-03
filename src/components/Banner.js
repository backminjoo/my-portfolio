import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0) // 현재 몇번째 단어를 타이핑 중인지 저장
    const [isDeleting, setIsDeleting] = useState(false) // 글자를 추가하는 중인지 삭제하는 중인지
    const toRotate = ['Web Developer', 'Web Designer', 'UI/UX Designer'] // 번갈아가면서 출력할 문자열 배열
    const [text, setText] = useState('') // 현재 화면에 출력되는 텍스트 상태
    const [delta, setDelta] = useState(300 - Math.random() * 100) // 다음 글자가 나타날 시간 간격
    const period = 2000 // 한 단어를 다 입력하고 대기하는 시간

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta) // tick() 실행하여 텍스트를 한 글자씩 추가/삭제

        return () => {
            clearInterval(ticker)
        }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length // 현재 선택된 단어 인덱스 (0~2)
        let fullText = toRotate[i] // 현재 타이핑 중인 전체 단어
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1) // 삭제 중이면 한 글자 줄이기
            : fullText.substring(0, text.length + 1) // 추가 중이면 한 글자 늘리기

        setText(updatedText) // 화면에 표시되는 텍스트 업데이트트

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2) // 삭제할 때는 속도를 빠ㅡㄹ게게
        }
        if (!isDeleting && updatedText === fullText) {
            // 단어 입력 완료
            setIsDeleting(true) // 삭제 모드로 변경
            setDelta(period) // 2초 대기후 삭제 시작작
        } else if (isDeleting && updatedText === '') {
            // 단어 삭제 완료료
            setIsDeleting(false) // 다시 입력모드로 변경
            setLoopNum(loopNum + 1) // 다음 단어로 이동
            setDelta(500) // 다음 단어 입력 전 0.5초 대기
        }
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>
                            {`Hi I'm a webdecoded`}{' '}
                            <span className="wrap">web developer</span>
                        </h1>
                        <p>{text}</p>
                        <button onClick={() => console.log('connect')}>
                            Let's connect{' '}
                            <ArrowRightCircle size={25}></ArrowRightCircle>
                        </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={''} alt="header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
