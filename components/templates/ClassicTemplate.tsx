// components/templates/ClassicTemplate.tsx

import React from 'react';
import { ResumeData } from '../../types/resume';
import SkillsTable from '../SkillsTable';

interface ClassicTemplateProps {
  data: ResumeData;
}

const ClassicTemplate: React.FC<ClassicTemplateProps> = ({ data }) => {
  return (
    <>
      {/* Header Section */}
      < header className="text-center print:visible" >
        <h1 className="text-3xl font-bold">{data.candidate_name}</h1>
        <p className="text-md text-gray-600">
          {data.email} &middot; {data.phone} &middot; {data.location} &middot;{' '}
          <a href={data.linkedin} className="text-blue-500 underline">
            LinkedIn
          </a>
        </p>
      </header >

      {/* Skills Section */}
      < section className="mb-3 print:visible" >
        <h2 className="text-l uppercase font-semibold">Skills</h2>
        <hr className="mb-2" />
        <SkillsTable skills={data.skills} bulletType="solid" />
      </section >

      {/* Work Experience */}
      < section className="mb-6 print:visible" >
        <h2 className="text-l uppercase font-semibold">Work Experience</h2>
        <hr className="mb-2" />
        {
          data.work_experience.map((job, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold">{job.job_title}</h3>
              <p className="text-sm text-gray-600">
                {job.company_name} | {job.start_year} - {job.end_year}
              </p>
              <ul className="list-disc list-inside mt-2">
                {job.bullet_points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <p className="text-sm text-gray-600 mt-2">
                <strong>Stack:</strong>{' '}
                {job.stack.map((tech, idx) => (
                  <span key={idx} className={tech.is_relevant ? 'font-bold' : ''}>
                    {tech.technology}
                    {idx < job.stack.length - 1 && ', '}
                  </span>
                ))}
              </p>
            </div>
          ))
        }
      </section >

      {/* Education and Certifications */}
      < section className="print:visible" >
        <h2 className="text-l uppercase font-semibold">Education and Certifications</h2>
        <hr className="mb-2" />
        {
          data.education_certifications.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <p>
                <strong>{edu.degree}</strong> - {edu.school_name}
              </p>
            </div>
          ))
        }
      </section >
    </>
  );
};

export default ClassicTemplate;