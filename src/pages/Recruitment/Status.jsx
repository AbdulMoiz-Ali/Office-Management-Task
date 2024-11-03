import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Status from "../../components/button/Status";
import recruitingManagerImage from "../../assets/Image-1.png";
import requestedByImage from "../../assets/Avatar.png";
import teslaLogo from "../../assets/tesla-Logo.png";
import arrowDown from "../../assets/arrow-down.png";
import arrowLeft from "../../assets/arrow-left.png";
import editButtonImgae from "../../assets/edit-2.png";
import moreImage from "../../assets/more.png";
import fileTypeImage from "../../assets/File-type-icon.png";
import Ongoingbar from "../../components/cards/ongoingbar";
// import Jobstutus from "../../components/cards/bar";

const RequisitionDetails = () => {
    const { jobTitle } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Retrieve user data from sessionStorage
        const storedUser = sessionStorage.getItem("selectedUser");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, [jobTitle]);

    return (
        <div className="flex flex-col py-3 w-full">
            <div className="bg-white rounded-lg shadow p-1">
                <div className="bg-[#EFEFF1] rounded-lg p-1 w-fit mb-4">
                    <Link to="/requisitions">
                        <img src={arrowLeft} alt="left-arrow" className="w-8" />
                    </Link>
                </div>
                {/* Header Section */}
                <div className="flex justify-between items-center mb-4">
                    <div className="w-full">
                        <div className="w-full flex justify-between items-center">
                            <h2 className="flex items-center justify-between text-xl h-8 font-semibold text-gray-700 gap-x-2">
                                <div className="flex gap-x-2">
                                    {jobTitle ? jobTitle : "Job Not Found"}
                                    <div className="text-base flex h-7">
                                        {/* Check if user is available before accessing status */}
                                        {user ? (
                                            <Status status={user.status} />
                                        ) : (
                                            <span className="text-gray-500">Loading...</span>
                                        )}
                                    </div>
                                </div>
                            </h2>
                            <div className="flex items-center">
                                <button className="flex justify-center items-center text-md font-medium border px-4 py-1 rounded-full gap-x-2">
                                    <img
                                        src={editButtonImgae}
                                        alt="edit-button"
                                        className="w-5"
                                    />{" "}
                                    Edit
                                </button>
                                <button className="flex justify-center items-center text-md font-medium px-4 py-1 rounded-full gap-x-2">
                                    <img src={moreImage} alt="more-items" className="w-5" />
                                </button>
                            </div>
                        </div>
                        <p className="text-gray-500">
                            Department:{" "}
                            {user ? (
                                user.department
                            ) : (
                                <span className="text-gray-500">Loading...</span>
                            )}
                        </p>
                    </div>
                </div>
                {user ? (
                    <Ongoingbar status={user.status} />
                ) : (
                    <span className="text-gray-500">Loading...</span>
                )}

                {/* <Jobstutus status={user?.status} /> */}
                {/* Tabs Section */}
                <div className="flex space-x-5 border-b pb-4 mt-5 mb-8">
                    {[
                        "Planning & Onboarding",
                        "Sourcing & Screening",
                        "Interviewing & Selection",
                        "Hired",
                        "Onboarding",
                    ].map((tab) => (
                        <button
                            key={tab}
                            className="text-gray-600 font-medium hover:text-blue-600"
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="bg-[#FBFBFB] shadow-sm rounded-lg p-6 w-full mx-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center sm:text-left">
                        <div>
                            <p className="text-gray-500 text-sm">Recruiting Manager</p>
                            <div className="flex items-center justify-center sm:justify-start">
                                {user && user.managerImage && (
                                    <img
                                        src={user.managerImage}
                                        alt="Manager"
                                        className="rounded-full w-6 h-6 mr-2"
                                    />
                                )}
                                <p className="text-lg font-medium">
                                    {user ? (
                                        user.manager
                                    ) : (
                                        <span className="text-gray-500">Loading...</span>
                                    )}
                                </p>
                            </div>
                        </div>

                        <div>
                            <p className="text-gray-500 text-sm">Date Posted</p>
                            <p className="text-lg font-medium">11 Sep, 2024</p>
                        </div>

                        <div>
                            <p className="text-gray-500 text-sm">Required By</p>
                            <p className="text-lg font-medium">30 Sep, 2024</p>
                        </div>

                        <div>
                            <p className="text-gray-500 text-sm">Employment type</p>
                            <p className="text-lg font-medium">Full-time</p>
                        </div>

                        <div>
                            <p className="text-gray-500 text-sm">Requested by</p>
                            <div className="flex items-center justify-center sm:justify-start">
                                <img
                                    src={requestedByImage}
                                    alt="Requester"
                                    className="rounded-full w-6 h-6 mr-2"
                                />
                                <p className="text-lg font-medium">Jounal</p>
                            </div>
                        </div>

                        <div>
                            <p className="text-gray-500 text-sm">Request ID</p>
                            <p className="text-lg font-medium">345678</p>
                        </div>

                        <div>
                            <p className="text-gray-500 text-sm">Vacancy</p>
                            <p className="text-lg font-medium">2</p>
                        </div>

                        <div>
                            <p className="text-gray-500 text-sm">Experience</p>
                            <p className="text-lg font-medium">3 years</p>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="gap-6 mb-8">
                    {/* Left Column */}
                    <div className="col-span-2 space-y-6">
                        <div>
                            <h4 className="text-lg font-semibold text-[#7E819E]">
                                Reason for Recruitment
                            </h4>
                            <p className="text-black">Increased workload</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-[#7E819E]">
                                Business need
                            </h4>
                            <ul className="text-black list-disc pl-5 space-y-2">
                                <li>
                                    Integrate accessibility best practices throughout the design
                                    process.
                                </li>
                                <li>
                                    Support designers through partnership, documentation, and
                                    resources to help them refine work that balances design
                                    fidelity, technical feasibility, and accessibility.
                                </li>
                                <li>
                                    Review and evaluate audits and designs of other members of the
                                    team to ensure accuracy.
                                </li>
                                <li>
                                    Partner closely with our user experience research team to
                                    identify opportunities to improve product offerings or create
                                    new ones that are accessible and meet the needs of all users.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-[#7E819E]">
                                Reported to
                            </h4>
                            <p className="text-gray-500">
                                {" "}
                                <div className="flex items-center justify-center sm:justify-start">
                                    <img
                                        src={requestedByImage}
                                        alt="Requester"
                                        className="rounded-full w-6 h-6 mr-2"
                                    />
                                    <p className="text-lg font-medium">Jounal</p>
                                </div>
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-[#7E819E]">
                                Justification
                            </h4>
                            <p className="text-black">
                                <div className="flex items-center justify-center sm:justify-start">
                                    <p>
                                        As a Senior Product Designer on the Accessibility team, you
                                        will have the opportunity to establish accessibility
                                        principles, evolve scalable practices, and inspire inclusive
                                        user experiences. Collaboration with designers, engineers,
                                        and accessibility specialists will be a key part of this
                                        role...see more
                                    </p>
                                </div>
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-[#7E819E]">
                                Responsibilities
                            </h4>
                            <ul className="text-black list-disc pl-5 space-y-2">
                                <li>
                                    Integrate accessibility best practices throughout the design
                                    process.
                                </li>
                                <li>
                                    Support designers through partnership, documentation, and
                                    resources to help them refine work that balances design
                                    fidelity, technical feasibility, and accessibility
                                </li>
                                <li>
                                    Review and evaluate audits and designs of other members of the
                                    team to ensure accuracy.
                                </li>
                                <li>
                                    Partner closely with our user experience research team to
                                    identify opportunities to improve product offerings or create
                                    new ones that are accessible and meet the needs of all
                                    users....see more
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-[#7E819E]">
                                Work experience
                            </h4>
                            <ul className="list-disc pl-5 text-black">
                                <li>
                                    Integrate accessibility best practices throughout the design
                                    process.
                                </li>
                                <li>
                                    Support designers through partnership, documentation, and
                                    resources
                                </li>
                                <li>
                                    Review and evaluate audits and designs of other members of the
                                    team to ensure
                                </li>
                                <li>Partner closely with our user experience research</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-[#7E819E]">Skills</h4>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Product Design",
                                    "UI/UX Design",
                                    "Prototyping",
                                    "Wireframe",
                                    "PRD",
                                    "R&D",
                                    "Interaction Design",
                                    "Animation",
                                    "Pitch Deck",
                                ].map((skill) => (
                                    <span
                                        key={skill}
                                        className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-[#7E819E]">
                                Education
                            </h4>
                            <p className="text-black">
                                <div className="flex items-center justify-center sm:justify-start">
                                    <p>B.sc in Computer Science or any engineering subjects</p>
                                </div>
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-[#7E819E]">
                                Skills & Qualifictions
                            </h4>
                            <p className="text-gray-500">
                                <div className="flex items-center justify-center sm:justify-start">
                                    <ul className="list-disc pl-5 text-black">
                                        <li>
                                            Integrate accessibility best practices throughout the
                                            design process.
                                        </li>
                                        <li>
                                            Support designers through partnership, documentation, and
                                            resources
                                        </li>
                                        <li>
                                            Review and evaluate audits and designs of other members of
                                            the team to ensure
                                        </li>
                                        <li>Partner closely with our user experience research</li>
                                    </ul>
                                </div>
                            </p>
                        </div>
                        {/* Salary Breakdown Table */}
                        <div className="mt-4">
                            <h4 className="text-lg py-2 font-semibold text-[#7E819E]">
                                Budgetary impact
                            </h4>
                            <div className="bg-[#FBFBFB] p-4 w-1/2 border rounded-lg">
                                <div className="flex items-center justify-between border mb-6 rounded-lg text-right p-4">
                                    <img src={teslaLogo} alt="Logo" className="h-12" />
                                    <div className="font-medium text-gray-700">
                                        <p>Salary slip of Employee</p>
                                        <p className="text-[#7E819E]">2024-2025</p>
                                        <p>
                                            <span className="text-[#7E819E]">Designation:</span> Head
                                            of Product & Design
                                        </p>
                                    </div>
                                </div>
                                <table className="w-full text-left border rounded-lg">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="px-4 py-2 font-medium text-gray-700">
                                                No
                                            </th>
                                            <th className="px-4 py-2 font-medium text-gray-700">
                                                Salary Head
                                            </th>
                                            <th className="px-4 py-2 font-medium text-gray-700">
                                                Amount
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-t">
                                            <td className="px-4 py-2">1</td>
                                            <td className="px-4 py-2">Basic Pay</td>
                                            <td className="px-4 py-2">2000 USD</td>
                                        </tr>
                                        <tr className="border-t">
                                            <td className="px-4 py-2">2</td>
                                            <td className="px-4 py-2">Benefits</td>
                                            <td className="px-4 py-2">600 USD</td>
                                        </tr>
                                        <tr className="border-t">
                                            <td className="px-4 py-2">3</td>
                                            <td className="px-4 py-2">Allowances</td>
                                            <td className="px-4 py-2">1400 USD</td>
                                        </tr>
                                        <tr className="border-t font-semibold">
                                            <td className="px-4 py-2"></td>
                                            <td className="px-4 py-2">Total</td>
                                            <td className="px-4 py-2">4000 USD</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-[#7E819E]">
                                Recommended requirement approach
                            </h4>
                            <p className="text-black">
                                <div className="flex items-center justify-center sm:justify-start">
                                    <p>Head Hunting</p>
                                </div>
                            </p>
                        </div>
                        <div className="w-1/2">
                            <h4 className="text-lg font-semibold text-[#7E819E]">
                                Supporting Documents (Optional)
                            </h4>
                            <div className="flex items-center justify-between mt-2 p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
                                <div className="flex items-center">
                                    <div className="flex items-center mr-3">
                                        <img src={fileTypeImage} alt="file-type" className="w-10" />
                                    </div>
                                    <div>
                                        <p className="text-gray-800 font-medium">
                                            Senior Product Designer.pdf
                                        </p>
                                        <p className="text-sm text-gray-500">280KB</p>
                                    </div>
                                </div>
                                <img src={arrowDown} alt="arrow-down" className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Approval Section */}
                <div className="w-1/2">
                    <h4 className="text-lg font-semibold text-[#7E819E]">
                        Approval History
                    </h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-gray-500 grid grid-cols-3 text-sm">
                            <div>
                                <p>Requested by:</p>
                                <h4 className="text-black text-xl">Jon Doe</h4>
                                <p className="text-[#545670] text-md font-medium">
                                    Principal Product Designer
                                </p>
                                <p>12 Sep, 2024</p>
                            </div>
                            <div>
                                <p>Requested by:</p>
                                <h4 className="text-black text-xl">Jonaton Zain</h4>
                                <p className="text-[#545670] text-md font-medium">
                                    Senior HR Manager
                                </p>
                                <p>12 Sep, 2024</p>
                            </div>
                            <div>
                                <p>Requested by:</p>
                                <h4 className="text-black text-xl">Christian Jon</h4>
                                <p className="text-[#545670] text-md font-medium">
                                    Head of HR Management
                                </p>
                                <p>12 Sep, 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequisitionDetails;
