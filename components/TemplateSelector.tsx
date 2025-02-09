// components/TemplateSelector.tsx

'use client';

import React, { useContext } from 'react';
// import Image from 'next/image';
import { ResumeContext } from '../context/ResumeContext';
import Select from 'react-select';

interface Option {
    value: string;
    label: string;
}

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
            <h2 className="text-2xl font-semibold mb-6">
                Select a Resume Template
            </h2>

            <Select<Option>
                options={templates.map(template => ({ value: template.id, label: template.name }))}
                onChange={(option) => option && handleSelect(option.value)}
                placeholder="Select a template"
            ></Select>



            {/*    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

             {templates.map((template) => (
                    <div
                        key={template.id}
                        className="border rounded-md p-4 cursor-pointer hover:shadow-lg transition"
                        onClick={() => handleSelect(template.id)}
                    >
                        <Image
                            src={template.preview}
                            alt={`${template.name} Preview`}
                            width={400}
                            height={160}
                            className="w-full h-40 object-cover mb-4 rounded"
                        />
                        <h3 className="text-xl font-medium">{template.name}</h3>
                    </div>
                ))} 
            </div>*/}
        </>
    );
};


export default TemplateSelector;