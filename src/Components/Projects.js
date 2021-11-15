import React from 'react'
import '../Styles/projects.scss';
import { Button, Row, Col } from 'antd';

export default class Projects extends React.Component {
    render() {
        return (
        <>
            <div className='projects'>
                <div className='projectsBox'>
                    <div className='projectsHeading'>
                        <h3>Pomodoro</h3>
                    </div>
                    <div className='projectsBody'>
                        <Row>
                            <p>Gamified Pomodoro timer for Android using Flutter</p>
                        </Row>
                        <Row className='projectInfo'>
                            <Col>
                                2021
                            </Col>
                            <Col>
                                <Button href='https://github.com/GDiamante/Pomodoro-Android' target='_blank'>
                                    Explore
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className='projectsBox'>
                    <div className='projectsHeading'>
                        <h3>Notify Me</h3>
                    </div>
                    <div className='projectsBody'>
                        <Row>
                            <p>IOS app to create push notifications with custom text</p>
                        </Row>
                        <Row className='projectInfo'>
                            <Col>
                                In Progress
                            </Col>
                            <Col>
                                <Button href='https://github.com/GDiamante/Notify-Me' target='_blank'>
                                    Explore
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className='projectsBox'>
                    <div className='projectsHeading'>
                        <h3>This Website</h3>
                    </div>
                    <div className='projectsBody'>
                        <Row>
                            <p>React app created for fun outlining my portfolio</p>
                        </Row>
                        <Row className='projectInfo'>
                            <Col>
                                2021
                            </Col>
                            <Col>
                                <Button href='https://github.com/GDiamante/gdiamante.github.io' target='_blank'>
                                    Explore
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </>
        )
    }
}
