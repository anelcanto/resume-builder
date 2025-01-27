
import React from 'react';
import { ResumeData } from '../../types/resume';

interface ClassicTemplateProps {
  data: ResumeData;
}

const ClassicTemplate: React.FC<ClassicTemplateProps> = ({ data }) => {
  return (
    <div className="resume-container">
      {/* Header Section */}
      <header className="header text-center mb-6">
        <h1 className="name text-3xl font-bold">{data.candidate_name}</h1>
        <p className="contact text-sm text-gray-600">
          {data.email} &middot; {data.phone} &middot; {data.location} &middot;{' '}
          <a href={data.linkedin} className="text-blue-500 underline">
            LinkedIn
          </a>
        </p>
      </header>

      {/* Skills Section */}
      <section className="skills mb-6">
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <ul className="list-disc list-inside">
          {data.skills.map((skill, index) => (
            <li key={index} className={skill.is_relevant ? 'font-bold' : ''}>
              {skill.technology}
            </li>
          ))}
        </ul>
      </section>

      {/* Work Experience */}
      <section className="work-experience mb-6">
        <h2 className="text-xl font-semibold mb-2">Work Experience</h2>
        {data.work_experience.map((job, index) => (
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
        ))}
      </section>

      {/* Education and Certifications */}
      <section className="education mb-6">
        <h2 className="text-xl font-semibold mb-2">Education and Certifications</h2>
        {data.education_certifications.education.map((edu, index) => (
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
        ))}
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
      </section>
    </div>
  );
};

export default ClassicTemplate;