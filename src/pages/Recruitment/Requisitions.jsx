import React, { useState } from 'react';
import { SlBriefcase } from "react-icons/sl";
import AllRequsitions from './AllRequsitions';
import OngoingRequisitions from './OngoingRequisitions';
import ToPublishRequisitions from './ToPublishRequisitions';

import HiredRequisitions from './HiredRequisitions';
import OnBoardingRequisitions from './OnBoardingRequisitions';
import PausedRequisitions from './PausedRequisitions';
import CancelledRequisitions from './CancelledRequisitions';
import InReviewRequisitions from './InReviewRequisitions';
import DeniedRequisitions from './DeniedRequisitions'
import ClosedRequisitions from './ClosedRequisition';

const Requisitions = () => {
    const [Activebar, setActivebar] = useState('All');

    const RenderRequisitions = () => {
        if (Activebar === "All") {
            return <AllRequsitions />;
        } else if (Activebar === "Ongoing") {
            return <OngoingRequisitions />;
        } else if (Activebar === "InReview") {
            // Add corresponding component
            return <InReviewRequisitions/>;
        } else if (Activebar === "ToPublish") {
       
            return <ToPublishRequisitions/>;
        } else if (Activebar === "Denied") {
           
            return <DeniedRequisitions /> ;
        } else if (Activebar === "Hired") {
          
            return <HiredRequisitions/>;
        } else if (Activebar === "OnBoarding") {
          
            return <OnBoardingRequisitions/>;
        } else if (Activebar === "Closed") {
            // Add corresponding component
            return <ClosedRequisitions/>;
        } else if (Activebar === "Paused") {
            // Add corresponding component
            return < PausedRequisitions/>;
        } else if (Activebar === "Cancelled") {
            // Add corresponding component
            return <CancelledRequisitions/>;
        } else {
            return <AllRequsitions />;
        }
    };

    return (
        <div className='m-[2%] '>
            <div className='flex justify-between'>
                <div className='font-bold'>Requisitions</div>
                <div className='bg-[#293773] rounded-lg text-white p-2 flex items-center justify-center gap-2'>
                    <SlBriefcase className='inline-block' /> New Requisition
                </div>
            </div>

            <div className=''>
                <ul className='lg:flex  md:flex gap-4 cursor-pointer border-b font-semibold   text-[#545670]'>
                    <li onClick={() => setActivebar("All")}
                        className={`${Activebar === "All" ? "border-b-2 p-1 border-blue-900" : "p-1"}`}>All</li>
                    <li onClick={() => setActivebar("Ongoing")}
                        className={`${Activebar === "Ongoing" ? "border-b-2 p-1 border-blue-900" : "p-1"}`}>Ongoing</li>
                    <li onClick={() => setActivebar("InReview")}
                        className={`${Activebar === "InReview" ? "border-b-2 p-1 border-blue-900" : "p-1"}`}>In Review</li>
                    <li onClick={() => setActivebar("ToPublish")}
                        className={`${Activebar === "ToPublish" ? "border-b-2 p-1 border-blue-900" : "p-1"}`}>To Publish</li>
                    <li onClick={() => setActivebar("Denied")}
                        className={`${Activebar === "Denied" ? "border-b-2 p-1 border-blue-900" : "p-1"}`}>Denied</li>
                    <li onClick={() => setActivebar("Hired")}
                        className={`${Activebar === "Hired" ? "border-b-2 p-1 border-blue-900" : " p-1"}`}>Hired</li>
                    <li onClick={() => setActivebar("OnBoarding")}
                        className={`${Activebar === "OnBoarding" ? "border-b-2 p-1 border-blue-900" : "p-1"}`}>On Boarding</li>
                    <li onClick={() => setActivebar("Closed")}
                        className={`${Activebar === "Closed" ? "border-b-2 p-1 border-blue-900" : " p-1"}`}>Closed</li>
                    <li onClick={() => setActivebar("Paused")}
                        className={`${Activebar === "Paused" ? "border-b-2 p-1 border-blue-900" : "p-1"}`}>Paused</li>
                    <li onClick={() => setActivebar("Cancelled")}
                        className={`${Activebar==="Cancelled" ?"border-b-2 p-1 border-blue-900": "p-1" }`}>Cancelled</li>
                </ul>
            </div>

            <div className=''>
                <RenderRequisitions />
            </div>
        </div>
    );
}

export default Requisitions;
