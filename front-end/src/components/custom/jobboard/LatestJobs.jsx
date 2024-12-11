import React from 'react';
import { ArrowRight } from 'lucide-react';
import google from "/images/google.png";


const JobCard = ({ logo, title, company, location, tags }) => (
  <div className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-all cursor-pointer group">
    <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
      <img src={google } alt={company} className="w-full rounded-xl h-full object-contain" />
    </div>
    
    <div className="flex-grow">
      <h3 className="font-semibold mb-1 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
        <span>{company}</span>
        <span>•</span>
        <span>{location}</span>
      </div>
      <div className="flex gap-2">
        <span className="px-3 py-1 rounded-full text-sm bg-emerald-50 text-emerald-600">
          Full Time
        </span>
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`px-3 py-1 rounded-full text-sm ${
              tag === 'Marketing' ? 'bg-orange-50 text-orange-600' :
              tag === 'Design' ? 'bg-blue-50 text-blue-600' :
              'bg-gray-50 text-gray-600'
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const LatestJobs = () => {
  const jobs = [
    {
      logo: '/api/placeholder/32/32',
      title: 'Social Media Assistant',
      company: 'Nomad',
      location: 'Paris, France',
      tags: ['Marketing', 'Design']
    },
    {
      logo: '/api/placeholder/32/32',
      title: 'Social Media Assistant',
      company: 'Netlify',
      location: 'Paris, France',
      tags: ['Marketing', 'Design']
    },
    {
      logo: '/api/placeholder/32/32',
      title: 'Brand Designer',
      company: 'Dropbox',
      location: 'San Francisco, USA',
      tags: ['Marketing', 'Design']
    },
    {
      logo: '/api/placeholder/32/32',
      title: 'Brand Designer',
      company: 'Maze',
      location: 'San Francisco, USA',
      tags: ['Marketing', 'Design']
    },
    {
      logo: '/api/placeholder/32/32',
      title: 'Interactive Developer',
      company: 'Terraform',
      location: 'Hamburg, Germany',
      tags: ['Marketing', 'Design']
    },
    {
      logo: '/api/placeholder/32/32',
      title: 'Interactive Developer',
      company: 'Udacity',
      location: 'Hamburg, Germany',
      tags: ['Marketing', 'Design']
    },
    {
      logo: '/api/placeholder/32/32',
      title: 'HR Manager',
      company: 'Packer',
      location: 'Lucern, Switzerland',
      tags: ['Marketing', 'Design']
    },
    {
      logo: '/api/placeholder/32/32',
      title: 'HR Manager',
      company: 'Webflow',
      location: 'Lucern, Switzerland',
      tags: ['Marketing', 'Design']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">
          Latest <span className="text-blue-500">jobs open</span>
        </h2>
        <button className="text-blue-600 hover:text-blue-700 flex items-center gap-2">
          Show all jobs
          <ArrowRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {jobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;