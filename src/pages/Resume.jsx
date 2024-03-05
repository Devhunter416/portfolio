import React from 'react'
import { BiBookReader, BiCertification } from 'react-icons/bi'
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';


import transition_Web3 from "./certificates/Transition_To_Web3.png";
import metaschool from "./certificates/metaschool.png";
// import hyperledger from "./certificates/hyperledger.png";
// import decentrlized-apps from "./certificates/decentralized-apps.png";
// import blockchain-specialization from "./certificates/blockchain-specialization.png";


const Resume = () => {
    return (
        <div className='main-container container mx-auto font-general-medium'>
        <header className='ml-3 md:mx-auto dark:text-blue-400  font-semibold text-3xl w-[3rem] border-b-[4px] rounded pb-4 border-blue-500 dark:border-blue-400 text-blue-500 mb-5'>
            Resume
        </header>
            <section>
                <div className='flex items-center gap-[1rem] pl-3'>
                    <div className='p-[.5rem] shadow-lg dark:shadow-[none] bg-blue-500 text-white text-2xl rounded-lg'>
                        <BiBookReader />
                    </div>
                    <h3 className='text-2xl text-primary-dark dark:text-ternary-light font-bold font-general-medium'>Education</h3>
                </div>
                <Timeline
                    sx={{
                        [`& .${timelineItemClasses.root}:before`]: {
                            flex: 0,
                            padding: 0,
                        },
                    }}
                    className='mt-5'
                >
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <li className="timeline-item flex flex-col gap-1">

                                <h4 className="h4 timeline-item-title text-lg text-primary-dark font-general-medium dark:text-ternary-light font-semibold">University of Montreal</h4>

                                <span className='text-lg text-blue-500 dark:text-blue-400 font-semibold font-general-medium'>2012/04 – 2016/10</span>

                                <p className="timeline-text  text-primary-dark dark:text-ternary-light font-medium font-general-medium">
                                    Bachelor's Degree in Computer Science
                                </p>

                            </li>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </section>
            <section className='mt-10'>
                <div className='flex items-center gap-[1rem] pl-3'>
                    <div className='p-[.5rem] shadow-lg dark:shadow-[none] bg-blue-500 text-white text-2xl rounded-lg'>
                        <BiBookReader />
                    </div>
                    <h3 className='text-2xl text-primary-dark dark:text-ternary-light font-bold font-general-medium'>Experience</h3>
                </div>
                <Timeline
                    sx={{
                        [`& .${timelineItemClasses.root}:before`]: {
                            flex: 0,
                            padding: 0,
                        },
                    }}
                    className='mt-5'
                >
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <li className="timeline-item flex flex-col gap-1">

                                <h4 className="h4 font-general-medium timeline-item-title text-lg text-primary-dark dark:text-ternary-light font-semibold">Blockchain Developer At Terraform</h4>

                                <span className='text-lg text-blue-500 dark:text-blue-400 font-semibold font-general-medium'>2023/01 – 2024/02</span>
                            </li>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <li className="timeline-item flex flex-col gap-1">

                                <h4 className="h4 font-general-medium timeline-item-title text-lg text-primary-dark dark:text-ternary-light font-semibold">Blockchain Developer At FenceCore</h4>

                                <span className='text-lg text-blue-500 dark:text-blue-400 font-semibold font-general-medium'>2020/07 – 2022/12</span>
                            </li>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <li className="timeline-item flex flex-col gap-1">

                                <h4 className="h4 font-general-medium timeline-item-title text-lg text-primary-dark dark:text-ternary-light font-semibold">JavaScript Full Stack Developer At Roweb Development</h4>

                                <span className='text-lg text-blue-500 dark:text-blue-400 font-semibold font-general-medium'>2018/03 – 2020/07</span>

                            </li>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <li className="timeline-item flex flex-col gap-1">

                                <h4 className="h4 font-general-medium timeline-item-title text-lg text-primary-dark dark:text-ternary-light font-semibold">Freelancer(Self-Employed)</h4>

                                <span className='text-lg text-blue-500 dark:text-blue-400 font-semibold font-general-medium'>2017/05 – 2018/03</span>

                            </li>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <li className="timeline-item flex flex-col gap-1">

                                <h4 className="h4 font-general-medium timeline-item-title text-lg text-primary-dark dark:text-ternary-light font-semibold">Software Developer At DevFortress</h4>

                                <span className='text-lg text-blue-500 dark:text-blue-400 font-semibold font-general-medium'>2016/11 – 2017/03</span>

                            </li>
                            
                            
                            
                        </TimelineContent>
                    </TimelineItem>
                    
                </Timeline>

            </section>
        </div>
    )
}

export default Resume