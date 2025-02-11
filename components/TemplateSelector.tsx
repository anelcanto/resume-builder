// components/TemplateSelector.tsx

'use client';

import React, { useContext } from 'react';
import dynamic from 'next/dynamic';
import { ResumeContext } from '../context/ResumeContext';

// Dynamically import react-select with SSR disabled.
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });

interface Template {
    id: string;
    name: string;
    preview?: string; // URL to a preview image
}

const templates: Template[] = [
    {
        id: 'classic',
        name: 'Classic',
        preview: '/templates/classic-preview.png',
    },
    {
        id: 'modern',
        name: 'Modern',
        preview: '/templates/modern-preview.png',
    },
    {
        id: 'custom',
        name: 'Custom',
        preview: '/templates/custom-preview.png',
    },
    // Add more templates as needed
];

const TemplateSelector: React.FC = () => {
    const { setResumeData } = useContext(ResumeContext);

    const handleSelect = (templateId: string) => {
        setResumeData((prev) => ({
            ...prev,
            selectedTemplate: templateId,
        }));
    };

    return (
        <>
            <h2 className="text-2xl font-semibold mb-6">Select a Resume Template</h2>
            <DynamicSelect
                options={templates.map((template) => ({
                    value: template.id,
                    label: template.name,
                }))}
                //eslint-disable-next-line
                onChange={(newValue: any) => newValue && handleSelect(newValue.value)}
                placeholder="Select a template"
            />
            {/* 
      You can also use your grid of template cards here if you prefer.
      */}
        </>
    );
};

export default TemplateSelector;