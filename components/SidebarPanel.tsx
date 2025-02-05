// components/SidebarPanel.tsx

'use client';

import React, { useState } from 'react';
import TemplateSelector from './TemplateSelector';
import JobListingForm from './JobListingForm';
import PersonalProfileForm from './PersonalProfileForm';

const SidebarPanel: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'template' | 'job' | 'profile'>('template');

    return (
        <div className="p-4">
            {/* Tab Buttons */}
            <div className="flex space-x-2 mb-4">
                <button
                    onClick={() => setActiveTab('template')}
                    className={`px-3 py-2 rounded ${activeTab === 'template' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
                        }`}
                >
                    Template
                </button>
                <button
                    onClick={() => setActiveTab('job')}
                    className={`px-3 py-2 rounded ${activeTab === 'job' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
                        }`}
                >
                    Job Listing
                </button>
                <button
                    onClick={() => setActiveTab('profile')}
                    className={`px-3 py-2 rounded ${activeTab === 'profile' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
                        }`}
                >
                    Profile
                </button>
            </div>

            {/* Content */}
            <div className="overflow-y-auto">
                {activeTab === 'template' && (
                    <div>
                        <h3 className="text-lg font-medium mb-2">Select a Template</h3>
                        <TemplateSelector />
                    </div>
                )}
                {activeTab === 'job' && (
                    <div>
                        <h3 className="text-lg font-medium mb-2">Job Listing</h3>
                        <JobListingForm />
                    </div>
                )}
                {activeTab === 'profile' && (
                    <div>
                        <h3 className="text-lg font-medium mb-2">Personal Profile</h3>
                        <PersonalProfileForm />
                    </div>
                )}
            </div>
        </div>
    );
};

export default SidebarPanel;