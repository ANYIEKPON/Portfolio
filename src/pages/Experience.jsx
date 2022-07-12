import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { School } from '@mui/icons-material';


function Experience() {
  return (
    <div className='experience'>
        <VerticalTimeline lineColor='#3e497a'>
            <VerticalTimelineElement 
            className='vertical-timeline-element--education'
            date='2012-2017'
            iconStyle={{background: '#3e497a', color:'#fff'}}
            icon={<School />} >
                <h3 className='vertical-timeline-element-title'>University Of Uyo</h3>
                <p>Bachelor of Science</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
            className='vertical-timeline-element--education'
            date='2012-2017'
            iconStyle={{background: '#3e497a', color:'#fff'}}
            icon={<School />} >
                <h3 className='vertical-timeline-element-title'>University Of Uyo</h3>
                <p>Bachelor of Science</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
            className='vertical-timeline-element--education'
            date='2012-2017'
            iconStyle={{background: '#3e497a', color:'#fff'}}
            icon={<School />} >
                <h3 className='vertical-timeline-element-title'>University Of Uyo</h3>
                <p>Bachelor of Science</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
            className='vertical-timeline-element--education'
            date='2012-2017'
            iconStyle={{background: '#3e497a', color:'#fff'}}
            icon={<School />} >
                <h3 className='vertical-timeline-element-title'>University Of Uyo</h3>
                <p>Bachelor of Science</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
            className='vertical-timeline-element--education'
            date='2012-2017'
            iconStyle={{background: '#3e497a', color:'#fff'}}
            icon={<School />} >
                <h3 className='vertical-timeline-element-title'>University Of Uyo</h3>
                <p>Bachelor of Science</p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  )
}

export default Experience;