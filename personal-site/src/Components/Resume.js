import React from 'react'
import '../Styles/resume.scss';
import { Button } from 'antd';

export default function Resume(props) {
    return (
        <div className='resume'>
            <Button href='/GioDiamanteResume.pdf' target='_blank' type='primary' className='viewResume'>
                <h3>View Resumee</h3>
            </Button>
            <div className='resumeHeading'>
                <h3>My Resume</h3>
            </div>
            <div className='resumeBody'>
                <p>Here is my resume
                </p>
            </div>
        </div>
    )
}
