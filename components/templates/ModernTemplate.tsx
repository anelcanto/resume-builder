// components/templates/ModernTemplate.tsx

import React from 'react';
import { ResumeData } from '../../types/resume';

interface ModernTemplateProps {
  data: ResumeData;
}

const ModernTemplate: React.FC<ModernTemplateProps> = ({ data }) => {
  return (
    <>
      {/* // The container class here enforces a consistent max-width (if you have container sizes defined)
      // You can adjust the container’s max-width in your Tailwind config or add a specific max-w-* class. */}
      {/* Header Section */}
      < header className="w-full flex items-center justify-between mb-6 print:visible" >
        <div className="w-1/2 flex-shrink-0">
          <h1 className="text-3xl font-bold">{data.candidate_name}</h1>
          <p className="text-sm text-gray-600">{data.candidate_title}</p>
        </div>
        <div className="w-1/2 flex-shrink-0 text-right">
          <p className="text-sm text-gray-600">{data.email}</p>
          <p className="text-sm text-gray-600">{data.phone}</p>
          <p className="text-sm text-gray-600">{data.location}</p>
          <a href={data.linkedin} className="text-blue-500 underline text-sm">
            LinkedIn
          </a>
        </div>
      </header >

      {/* Skills and Job Listing */}
      < div className="flex flex-col md:flex-row mb-6 print:visible" >
        <section className="md:w-1/2 mb-4 md:mb-0">
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <ul className="list-disc list-inside">
            {data.skills.map((skill, index) => (
              <li key={index} className={skill.is_relevant ? 'font-bold' : ''}>
                {skill.technology}
              </li>
            ))}
          </ul>
        </section>
        <section className="md:w-1/2">
          <h2 className="text-xl font-semibold mb-2">Job Applying For</h2>
          <p className="font-semibold">{data.job_listing?.job_title}</p>
          <p className="text-sm text-gray-600">{data.job_listing?.company_name}</p>
          <p className="text-sm text-gray-600 mt-2">
            {data.job_listing?.job_description}
          </p>
        </section>
      </div >

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