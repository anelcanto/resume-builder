// components/SidebarPanel.tsx

'use client';

import React, { useState, useContext } from 'react';
import { ResumeContext } from '../context/ResumeContext';
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid';
import TemplateSelector from './TemplateSelector';

const SidebarPanel: React.FC = () => {
    // Ensure your context provides setResumeData in addition to resumeData.
    const { resumeData, setResumeData } = useContext(ResumeContext);

    // Initialize the text field with the current resumeData JSON string
    const [inputValue, setInputValue] = useState<string>(
        JSON.stringify(resumeData, null, 2)
    );
    const [error, setError] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean>(true);

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        setInputValue(value);

        try {
            // Attempt to parse JSON input
            const parsedData = JSON.parse(value);

            // If successful, update the context and clear error messages
            setResumeData(parsedData);
            setIsValid(true);
            setError('');
            //eslint-disable-next-line
        } catch (err) {
            // If parsing fails, mark as invalid and set an error message
            setIsValid(false);
            setError('Invalid JSON. Please check your syntax.');
        }
    };

    return (
        <>
            <div className="flex flex-col">
                <div className="p-4">
                    <label htmlFor="json-input" className='text-2xl font-semibold mb-6'>Paste JSON Job here</label>
                    <textarea
                        name='json-input'
                        value={inputValue}
                        onChange={handleInputChange}
                        rows={15}
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                    <div className="mt-2 flex items-center">
                        {isValid ? (
                            <div className="text-green-600 flex items-center">
                                <CheckCircleIcon className="h-5 w-5 mr-1" />
                                <span>Valid JSON! Ready to generate resume.</span>
                            </div>
                        ) : (
                            <div className="text-red-600 flex items-center">
                                <ExclamationCircleIcon className="h-5 w-5 mr-1" />
                                <span>{error}</span>
                            </div>
                        )}
                    </div>
                </div>
                <TemplateSelector />
            </div>
        </>

    );
};

export default SidebarPanel;