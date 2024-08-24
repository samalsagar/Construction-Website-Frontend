import React, { useCallback } from 'react';
import plan from "../../assets/plan.jpeg";
import consruction from "../../assets/Construction.jpeg";
// import plan_const from "../../assets/plan_const.jpeg";
import planningConstruction from "../../assets/planningConstruction.jpeg";
import { Link } from 'react-router-dom';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
function Services() {
    const hanldeSubmit = (params) => {
       <Link to="/serviceDetails">
       </Link>
    }
    return (
        <div className='flex gap-x-12 mt-10 mb-10'>
            <div className="max-w-sm bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div>
                    <img className="rounded-t-lg" src={plan} alt="plan img" />
                </div>
                <div className="p-5">
                    <div>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Construction Planning</h5>
                    </div>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Effective planning is the cornerstone of successful construction projects. It transforms abstract ideas and architectural blueprints into tangible realities by laying out a clear path from inception to completion. Here’s why meticulous planning is crucial:</p>
                    <Link to="/serviceDetails/planning" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </Link>
                </div>
            </div>

            <div className="max-w-sm bg-white  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src={consruction} alt="plan img" />
                </a>
                <div className="p-5">
                    <div>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Construction</h5>
                    </div>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Construction is a multifaceted industry that plays a critical role in shaping the world around us. It encompasses the creation, renovation, and maintenance of buildings, infrastructure, and various other structures.</p>
                    <Link to="/serviceDetails/construction" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </Link>
                </div>
            </div>

            <div className="max-w-sm bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div>
                    <img className="rounded-t-lg" src={planningConstruction} alt="plan img" />
                </div>
                <div className="p-5">
                    <div>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Renovation & Construction</h5>
                    </div>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">In construction, effective planning is essential for project success. It provides a solid foundation that guides the project from start to finish, ensuring that objectives are met. Here’s why planning is so important.</p>
                    <Link to="/serviceDetails/planningAndconstruction" className="mt-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Services;
