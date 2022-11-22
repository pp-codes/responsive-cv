import React, { useEffect, useState } from 'react';
import ContactDetails from './components/ContactDetails';
import WorkExperience from './components/WorkExperience';
import { NameHeader } from './components/NameHeader';
import './Page.css';
import Projects from './components/Projects';
import Education from './components/Education';
import TechSkills from './components/TechSkills';

const jsyaml = require('js-yaml');
const config_url = 'https://gist.githubusercontent.com/pritamprasd/dc5f7deeccc69a21ef288e6903d833c7/raw/987a7bacb0576dd3f8748b5587c86b2f6c4b2de4/cv.yaml'

export default function Page() {
  const [data, setdata] = useState({
    'contact': {
      'name': ""
    }
  });
  useEffect(() => {
    fetch(config_url)
      .then(res => res.text())
      .then(yaml => {
        const json = jsyaml.load(yaml);
        setdata(json);
        // console.log(json);
      }).catch(e => console.error(e));
  }, []);

  return (
    <div className="page">
      <NameHeader name={data['contact']['name'] || ""} introduction={data['introduction'] || []} />
      <ContactDetails details={data['contact'] || {}}/>
      <TechSkills skills={data['tech_stack'] || []} />
      <WorkExperience companies={data['work_experience'] || []} />
      <Projects projects={data['projects'] || []} />
      <Education schools={data['education'] || []} />
    </div>
  );
}


