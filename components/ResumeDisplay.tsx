// components/ResumeDisplay.tsx

'use client';

import React, { useContext } from 'react';
import { ResumeContext } from '../context/ResumeContext';
import { ClassicTemplate, ModernTemplate } from './templates';
import { PrinterIcon } from '@heroicons/react/24/solid';


const ResumeDisplay: React.FC = () => {
    const { resumeData } = useContext(ResumeContext);

    if (!resumeData.selectedTemplate) {
        return <p className="text-center">No template selected.</p>;
    }

    const renderTemplate = () => {
        switch (resumeData.selectedTemplate) {
            case 'classic':
                return <ClassicTemplate data={resumeData} />;
            case 'modern':
                return <ModernTemplate data={resumeData} />;
            // Add more cases for additional templates
            default:
                return <p>Template not found.</p>;
        }
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <div className="flex justify-end mb-4">
                <button
                    onClick={handlePrint}
                    className="flex items-center bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                    aria-label="Print Resume"
                >
                    <PrinterIcon className="h-5 w-5 mr-2" />
                    Print Resume
                </button>
            </div>
            <div className="bg-white p-6 rounded-md shadow-md printable-resume">
                {renderTemplate()}
            </div>
        </div>
    );
};

export default ResumeDisplay;