import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
// import { School } from '@material-ui/icons'
import { Work } from '@material-ui/icons'
import '../styles/Experience.css'

function Experience() {
  return (
    <div className='experience'>
        <VerticalTimeline lineColor='#3e497a'>       
      
        <VerticalTimelineElement 
            className='vertical-timeline-element--work' 
            date = "2023 June - Date" 
            iconStyle={{ background: "lightgreen", color: "black"}} icon={<Work />} >
                <h3 className='vertical-timeline-element--education'>
                    Turnkey Africa, Nairobi-Kenya
                </h3>
                <p>Business Analyst</p>
            </VerticalTimelineElement>

        <VerticalTimelineElement 
            className='vertical-timeline-element--work' 
            date = "2023 April" 
            iconStyle={{ background: "#3e497a", color: "orange"}} icon={<Work />} >
                <h3 className='vertical-timeline-element--education'>
                    Higher Education Loans Board, Nairobi-Kenya
                </h3>
                <p>ICT Assistant</p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement 
            className='vertical-timeline-element--work' 
            date = "2022 Dec- 2023 April" 
            iconStyle={{ background: "#3e497a", color: "orange"}} icon={<Work />} >
                <h3 className='vertical-timeline-element--education'>
                    Higher Education Loans Board, Nairobi-Kenya
                </h3>
                <p>HR Business Applications Assistant</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement 
            className='vertical-timeline-element--work' 
            date = "2022 Jul - Sep" 
            iconStyle={{ background: "lightgreen", color: "black"}} icon={<Work />} >
                <h3 className='vertical-timeline-element--education'>
                    Independent Electoral and Boundaries Commision, Nairobi-Kenya
                </h3>
                <p>ICT Clerk</p>
            </VerticalTimelineElement>
            

            <VerticalTimelineElement 
            className='vertical-timeline-element--work' 
            date = "2023 Jan" 
            iconStyle={{ background: "green", color: "white"}} icon={<Work />} >
                <h3 className='vertical-timeline-element--education'>
                    Kenya National Examinationations Council, Nairobi-Kenya
                </h3>
                <p>Data Capturer</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement 
            className='vertical-timeline-element--work' 
            date = "2022 Jan - Dec" 
            iconStyle={{ background: "red", color: "black"}} icon={<Work />} >
                <h3 className='vertical-timeline-element--education'>
                    Kenya Revenue Authoriy, Nairobi-Kenya
                </h3>
                <p>ICT Assistant</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement 
            className='vertical-timeline-element--work' 
            date = "2021 Sep - Dec" 
            iconStyle={{ background: "#3e497a", color: "orange"}} icon={<Work />} >
                <h3 className='vertical-timeline-element--education'>
                    Icons Hub, Kisii-Kenya
                </h3>
                <p>Software Engineer</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement 
            className='vertical-timeline-element--work' 
            date = "2021 June - Sep" 
            iconStyle={{ background: "#3e497a", color: "orange"}} icon={<Work />} >
                <h3 className='vertical-timeline-element--education'>
                    Kisii County Government, Kisii-Kenya
                </h3>
                <p>ICT Intern</p>
            </VerticalTimelineElement>

            

            <VerticalTimelineElement 
            className='vertical-timeline-element--work' 
            date = "2019 June - Sep" 
            iconStyle={{ background: "white", color: "#E59921"}} icon={<Work />} >
                <h3 className='vertical-timeline-element--education'>
                    Kenya National Bureau of Statistics, Nairobi-Kenya
                </h3>
                <p>HR and ICT Supervisor</p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  )
}

export default Experience
