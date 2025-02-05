// /Users/anelcanto/Dev/resume-builder/components/SkillsTable.tsx

import React from 'react';
import { ResumeData } from '../types/resume';

type BulletType = 'none' | 'solid' | 'hollow' | 'custom';

interface SkillsTableProps {
    skills: ResumeData['skills'];
    bulletType?: BulletType;
}

const SkillsTable: React.FC<SkillsTableProps> = ({ skills, bulletType = 'solid' }) => {
    // Divide skills into three columns
    const columns: ResumeData['skills'][] = [[], [], []];
    skills.forEach((skill, index) => {
        columns[index % 3].push(skill);
    });

    // Function to get bullet style based on bulletType
    const getBulletStyle = (type: BulletType) => {
        switch (type) {
            case 'solid':
                return '•'; // Black solid bullet
            case 'hollow':
                return '○'; // Hollow bullet
            case 'custom':
                return '★'; // Example of a custom bullet
            case 'none':
            default:
                return ''; // No bullet
        }
    };

    return (
        <div className="skills-table grid grid-cols-3 gap-4">
            {columns.map((columnSkills, colIndex) => (
                <ul key={colIndex} className="list-none">
                    {columnSkills.map((skill, index) => (
                        <li key={index} className="flex items-start mb-1/2 text-sm">
                            {bulletType !== 'none' && (
                                <span className="mr-2 " style={{ width: '1em', display: 'inline-block' }}>
                                    {getBulletStyle(bulletType)}
                                </span>
                            )}
                            <span className={'' + skill.is_relevant ? 'font-bold' : ''}>{skill.technology}</span>
                        </li>
                    ))}
                </ul>
            ))}
        </div>
    );
};

export default SkillsTable;