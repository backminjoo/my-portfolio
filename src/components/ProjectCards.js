import { Col, Button } from 'react-bootstrap'

export const ProjectCards = ({
    title,
    description,
    imgUrl,
    githubUrl,
    tistoryUrl,
}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl}></img>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <br></br>
                    {githubUrl ? (
                        <a
                            className="custom-github-button"
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Github 바로가기
                        </a>
                    ) : tistoryUrl ? (
                        <a
                            className="custom-github-button"
                            href={tistoryUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            자세히보기
                        </a>
                    ) : null}
                </div>
            </div>
        </Col>
    )
}
