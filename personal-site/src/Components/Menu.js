import React, { useState, useEffect } from 'react'
import '../Styles/menu.scss'
import { Row, Col, Button, Divider } from 'antd';
import { UserOutlined, CodeOutlined, FileTextOutlined } from '@ant-design/icons'

const HOME_ROUTE = '/'
const ABOUT_ROUTE = '/about'
const PROJECTS_ROUTE = '/projects'
const RESUME_ROUTE = '/resume'

export default class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            aboutColor: '#303030',
            projectsColor: '#303030',
            resumeColor: '#303030'
        }
    }

    changeScreen(location) {
        if (this.props.history.location.pathname === location) {
            this.props.history.push(HOME_ROUTE);
            this.setState({
                aboutColor: '#303030',
                projectsColor: '#303030',
                resumeColor: '#303030'
            });
        } else {
            this.props.history.push(location);
            this.setState({
                aboutColor: (location === ABOUT_ROUTE) ? '#B03D30' : '#303030',
                projectsColor: (location === PROJECTS_ROUTE) ? '#CA5310' : '#303030',
                resumeColor: (location === RESUME_ROUTE) ? '#04776F' : '#303030'
            });
            
        }
    }

    render () {
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
                            <Button type='primary' size='large' block='true' className='aboutButton' style={{backgroundColor: this.state.aboutColor}}  onClick={() => {
                                this.changeScreen(ABOUT_ROUTE)
                            }}>
                                <UserOutlined />
                                About
                            </Button>

                            <Button type='primary' size='large' block='true' className='projectsButton' style={{backgroundColor: this.state.projectsColor}} onClick={() => {
                                this.changeScreen(PROJECTS_ROUTE)
                            }}>
                                <CodeOutlined />
                                Projects
                            </Button>
                            
                            <Button type='primary' size='large' block='true' className='resumeButton' style={{backgroundColor: this.state.resumeColor}} onClick={() => {
                                this.changeScreen(RESUME_ROUTE)
                            }}>
                                <FileTextOutlined />
                                Resume
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
