import React from 'react'
import '../Styles/menu.scss'
import { Row, Col, Button, Divider } from 'antd';
import { UserOutlined, CodeOutlined, FileTextOutlined } from '@ant-design/icons'

const HOME_PAGE = 'home'
const ABOUT_PAGE = 'about'
const PROJECTS_PAGE = 'projects'
const RESUME_PAGE = 'resume'

export default class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            aboutColor: '#303030',
            projectsColor: '#303030',
            resumeColor: '#303030'
        }
    }

    changeScreen = location => {
        if (this.props.currentPage === location) {
            this.props.changePage(HOME_PAGE);
            this.setState({
                aboutColor: '#303030',
                projectsColor: '#303030',
                resumeColor: '#303030'
            });
        } else {
            this.props.changePage(location);
            this.setState({
                aboutColor: (location === ABOUT_PAGE) ? '#B03D30' : '#303030',
                projectsColor: (location === PROJECTS_PAGE) ? '#3C4D7B' : '#303030',
                resumeColor: (location === RESUME_PAGE) ? '#04776F' : '#303030'
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
