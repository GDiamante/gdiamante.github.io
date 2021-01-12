import React from 'react'
import '../Styles/about.scss';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons'

export default class About extends React.Component {
    render () {
        return (
            <>
            <div className='about'>
                    <div className='aboutHeading'>
                        <h3>About Me</h3>
                    </div>
                    <div className='aboutBody'>
                        <p>
                        <img src='PersonalPhoto.jpg' className='personalPhoto' alt="Me"/>
                            Welcome to my website!  I am a Bachelor of Computing Co-op student in my final year at the University of Guelph.  I am completing a major in
                            Computer Science along with a minor in Mathematics and a certificate in Business.  I've completed five Co-op work terms with JOMAR Softcorp
                            and Tulip Retail.

                            When I'm not studying or writing code, I enjoy lifting weights, hiking, reading, and researching new topics.
                        </p>
                    </div>
                    {/* <GithubOutlined />
                    <LinkedinOutlined /> */}
                </div>
            </>
        );
    }
}
