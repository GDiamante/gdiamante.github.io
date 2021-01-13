import React from 'react'
import '../Styles/resume.scss';
import { Button } from 'antd';

export default class Resume extends React.Component {
    render() {
        return (
            <div className='resume'>
                <Button href='/GioDiamanteResume.pdf' target='_blank' type='primary' className='viewResume'>
                    <h3>View Resume</h3>
                </Button>
                <div className='resumeHeading'>
                    <h3>Work Experience</h3>
                </div>
                <div className='resumeBody'>
                    <h3>Software Developer - Apps</h3>
                    <h4>Tulip Retail</h4>
                    <h5>January 2020-August 2020</h5>
                    <br/>
                    <h3>Junior Developer Co-op</h3>
                    <h4>JOMAR Softcorp International</h4>
                    <h5>May 2018-December 2018</h5>
                    <h5>May 2019-August 2019</h5>
                    <br/>
                    <h3>Grocery Clerk</h3>
                    <h4>Food Basics</h4>
                    <h5>September 2013-April 2018</h5>
                </div>
            </div>
        )
    }
}
