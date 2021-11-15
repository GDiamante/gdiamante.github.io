import React from 'react'
import '../Styles/resume.scss';
import { Button } from 'antd';

export default class Resume extends React.Component {
    render() {
        return (
            <div className='resume'>
                <Button href='/GioDiamanteResume.pdf' target='_blank' type='primary' className='viewResume'>
                    <h3>Open Full Resume</h3>
                </Button>
                <div className="resumeBody">
                    <div className="resumeLeftSide">
                        <div className="resumeWorkExperience">
                            <div className='resumeHeading'>
                                <h3>Work Experience</h3>
                            </div>
                            <div className='resumeWrittenBody'>
                                <h3>Software Engineer</h3>
                                <h4>NCR Corporation</h4>
                                <h5>May 2021-Present</h5>
                                <br/>
                                <h3>Software Developer - Apps</h3>
                                <h4>Tulip Retail</h4>
                                <h5>January 2020-August 2020</h5>
                                <br/>
                                <h3>Junior Developer Co-op</h3>
                                <h4>JOMAR Softcorp International</h4>
                                <h5>May 2018-December 2018,</h5>
                                <h5>May 2019-August 2019</h5>
                                <br/>
                                <h3>Grocery Clerk</h3>
                                <h4>Food Basics</h4>
                                <h5>September 2013-April 2018</h5>
                            </div>
                        </div>
                        <div className="resumeEducation">
                            <div className='resumeHeading'>
                                <h3>Education</h3>
                            </div>
                            <div className='resumeWrittenBody'>
                                <h3>Bachelor of Computer Science</h3>
                                <h4>Major in Computer Science (Co-op)</h4>
                                <h4>Minor in Mathematics</h4>
                                <h4>Certificate in Business</h4>
                                <h5>University of Guelph</h5>
                                <h5>September 2016-April 2021</h5>
                            </div>
                        </div>
                    </div>
                    <div className="resumeRightSide">
                        <div className="resumeSkills">
                            <div className='resumeHeading'>
                                <h3>Skills</h3>
                            </div>
                            <div className='resumeWrittenBody'>
                                <h3>Languages and Frameworks</h3>
                                <h4>C, Java, Python, React Native, Flutter</h4>
                                <br/>
                                <h3>Web</h3>
                                <h4>HTML, CSS/SCSS, JavaScript, TypeScript, React JS, PHP, JQuery</h4>
                                <br/>
                                <h3>Databases</h3>
                                <h4>MySQL, NoSQL, Oracle Database, Microsoft SQL Server</h4>
                                <br/>
                                <h3>Cloud Platforms</h3>
                                <h4>Amazon Web Services, Google Cloud Platform</h4>
                                <br/>
                                <h3>Tools and Technologies</h3>
                                <h4>Node.js, Jest, Git, JUnit, Make, Postman</h4>
                            </div>
                        </div>
                        <div className="resumeContact">
                            <div className='resumeHeading'>
                                <h3>Contact Me</h3>
                            </div>
                            <div className='resumeWrittenBody'>
                                <div className='resumeContactBody'>
                                    <Button href='https://www.linkedin.com/in/gdiamante/' target='_blank'>
                                        Linkedin
                                    </Button>
                                    <Button href='https://github.com/GDiamante' target='_blank'>
                                        Github
                                    </Button>
                                    <Button href='https://forms.gle/wNzLtX64URHfZgyM9' target='_blank'>
                                        Email
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
