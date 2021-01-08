import React from 'react'
import './menu.scss'
import { Row, Col, Button, Divider } from 'antd';
import { UserOutlined, CodeOutlined, FileTextOutlined } from '@ant-design/icons'

const HOME_ROUTE = '/'
const ABOUT_ROUTE = '/about'
const PROJECTS_ROUTE = '/projects'
const RESUME_ROUTE = '/resume'

export default function Base(props) {
    return (
        <div className='menu'>
            <Row>
                <Col className='menuItem'>
                    <h1>Gio Diamante</h1>
                </Col>
            </Row>
            <Row>
                <Col className='menuItem'>
                    <h2>Software Developer</h2>
                    <Divider className='menuDivider'/>
                </Col>
            </Row>
            <Row wrap={false} >
                <Col className='menuItem'>
                    <div className='buttonGroup'>
                        <Button type='primary' size='large' block='true' className='aboutButton' onClick={() => {
                            if (props.history.location.pathname === ABOUT_ROUTE) {
                                props.history.push(HOME_ROUTE);
                            } else {
                                props.history.push(ABOUT_ROUTE);
                            }
                        }}>
                            <UserOutlined />
                            About
                        </Button>

                        <Button type='primary' size='large' block='true' className='projectsButton' onClick={() => {
                            if (props.history.location.pathname === PROJECTS_ROUTE) {
                                props.history.push(HOME_ROUTE);
                            } else {
                                props.history.push(PROJECTS_ROUTE);
                            }
                        }}>
                            <CodeOutlined />
                            Projects
                        </Button>
                        
                        <Button type='primary' size='large' block='true' className='resumeButton' onClick={() => {
                            if (props.history.location.pathname === RESUME_ROUTE) {
                                props.history.push(HOME_ROUTE);
                            } else {
                                props.history.push(RESUME_ROUTE);
                            }
                        }}>
                            <FileTextOutlined />
                            Resume
                        </Button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
