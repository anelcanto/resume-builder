// components/ResumeDisplay.tsx

'use client';

import React, { useContext } from 'react';
import { ResumeContext } from '../context/ResumeContext';
import { ClassicTemplate, ModernTemplate } from './templates';

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

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-semibold mb-6 text-center">Your Resume</h2>
            <div className="bg-white p-6 rounded-md shadow-md">
                {renderTemplate()}
            </div>
        </div>
    );
};

export default ResumeDisplay;