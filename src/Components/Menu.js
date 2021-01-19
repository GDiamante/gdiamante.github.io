import React from 'react'
import '../Styles/menu.scss'
import { Row, Col, Button, Divider } from 'antd';
import { UserOutlined, CodeOutlined, FileTextOutlined } from '@ant-design/icons'

const HOME_PAGE = 'home'
const ABOUT_PAGE = 'about'
const PROJECTS_PAGE = 'projects'
const RESUME_PAGE = 'resume'

const BACKGROUND_COLOR = '#303030'
const ABOUT_COLOR = '#A32E21'
const PROJECTS_COLOR = '#2D4B9E'
const RESUME_COLOR = '#04776F'

export default class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            aboutColor: BACKGROUND_COLOR,
            projectsColor: BACKGROUND_COLOR,
            resumeColor: BACKGROUND_COLOR
        }
    }

    changeScreen = location => {
        if (this.props.currentPage === location) {
            this.props.changePage(HOME_PAGE);
            this.setState({
                aboutColor: BACKGROUND_COLOR,
                projectsColor: BACKGROUND_COLOR,
                resumeColor: BACKGROUND_COLOR
            });
        } else {
            this.props.changePage(location);
            this.setState({
                aboutColor: (location === ABOUT_PAGE) ? ABOUT_COLOR : BACKGROUND_COLOR,
                projectsColor: (location === PROJECTS_PAGE) ? PROJECTS_COLOR : BACKGROUND_COLOR,
                resumeColor: (location === RESUME_PAGE) ? RESUME_COLOR : BACKGROUND_COLOR
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
                                this.changeScreen(ABOUT_PAGE)
                            }}>
                                <UserOutlined />
                                About
                            </Button>

                            <Button type='primary' size='large' block='true' className='projectsButton' style={{backgroundColor: this.state.projectsColor}} onClick={() => {
                                this.changeScreen(PROJECTS_PAGE)
                            }}>
                                <CodeOutlined />
                                Projects
                            </Button>
                            
                            <Button type='primary' size='large' block='true' className='resumeButton' style={{backgroundColor: this.state.resumeColor}} onClick={() => {
                                this.changeScreen(RESUME_PAGE)
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
