// components/templates/ModernTemplate.tsx

import React from 'react';
import SkillsTable, { Skill } from '../SkillsTable';
import { ResumeData } from '@/types/resume';

interface ModernTemplateProps {
  data: ResumeData;
}

// Utility function to simplify the URL
const simplifyUrl = (url: string) => {
  return url.replace(/^https?:\/\//, '').replace(/^www\./, '');
};

const ModernTemplate: React.FC<ModernTemplateProps> = ({ data }) => {
  const skills: Skill[] = (data.skills || []).map((skill) =>
    typeof skill === 'string' ? { technology: skill, is_relevant: true } : (skill as Skill)
  );
  return (
    <>
      {/* // The container class here enforces a consistent max-width (if you have container sizes defined)
      // You can adjust the container’s max-width in your Tailwind config or add a specific max-w-* class. */}
      {/* Header Section */}
      < header className="w-full flex items-center justify-between print:visible" >
        <div className="w-1/2 flex-shrink-0">
          <h1 className="text-4xl font-bold">{data.candidate_name}</h1>
          <p className="text-md font-semibold text-gray-600">{data.candidate_title}</p>
        </div>
        <div className="w-1/2 flex-shrink-0 text-right">
          {data.linkedin && (
            <a href={data.linkedin} className="text-blue-500 underline">
              {simplifyUrl(data.linkedin)}
            </a>
          )}
          <p className="text-sm text-gray-600">{data.email}</p>
          <p className="text-sm text-gray-600">{data.phone}</p>
          <p className="text-sm text-gray-600">{data.location}</p>
        </div>
      </header >

      {/* Skills and Job Listing */}
      <div className="flex w-full print:visible">
        <section className="mb-3 print:visible w-full">
          <SkillsTable skills={skills} bulletType="solid" />
        </section>
      </div>

      {/* Work Experience */}
      < section className="mb-6 print:visible" >
        <h2 className="text-xl font-semibold mb-2">Work Experience</h2>
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
      < section className="mb-6 print:visible" >
        <h2 className="text-xl font-semibold mb-2">Education and Certifications</h2>
        {
          data.education_certifications.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <p>
                <strong>{edu.degree}</strong> - {edu.school_name}
              </p>
              {edu.notable_achievements && (
                <ul className="list-disc list-inside mt-2">
                  {edu.notable_achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              )}
            </div>
          ))
        }
        <div>
          <strong>Certifications:</strong>
          <ul className="list-disc list-inside mt-2">
            {data.education_certifications.certifications.map((cert, index) => (
              <li key={index}>
                {cert.certification_name} - {cert.issuing_organization}
              </li>
            ))}
          </ul>
        </div>
      </section >
    </>
  );
};

export default ModernTemplate;