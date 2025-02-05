// components/ResumeDisplay.tsx

'use client';

import React, { useContext } from 'react';
import { ResumeContext } from '../context/ResumeContext';
import { ClassicTemplate, ModernTemplate } from './templates';
import { PrinterIcon } from '@heroicons/react/24/solid';
import SidebarPanel from './SidebarPanel';

const ResumeDisplay: React.FC = () => {
    const { resumeData } = useContext(ResumeContext);

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
        <div className="grid grid-cols-4 p-8">
            {/* Left Panel: Sidebar with selectors */}
            <div className="col-span-1">
                <SidebarPanel />
            </div>
            {/* Right Panel: Resume Preview */}
            <div className="mx-auto p-4 col-span-3 flex justify-center">
                <div className="bg-gray-100 min-h-screen w-[800px] grid">
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
                    <div className="bg-white p-6 rounded-md print:visible print:[&_*]:visible max-w-[a4-width] w-full">
                        <div className="container mx-auto w-full print:absolute print:left-0 print:top-0 print:w-full">
                            {resumeData.selectedTemplate ? (
                                renderTemplate()
                            ) : (
                                <p className="text-center">
                                    Select a template to preview your resume.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumeDisplay;