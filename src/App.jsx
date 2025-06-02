import { useState } from 'react';
import CVPreview from './components/CV/CVPreview.jsx';
import PersonalInfoForm from './components/Form/PersonalInfoForm.jsx';
import EducationForm from './components/Form/EducationForm.jsx';
import ExperienceForm from './components/Form/ExperienceForm.jsx';
import { exampleData } from './data.js';

export default function App() {
  const [cvData, setCvData] = useState(exampleData);

  const handlePersonalInfoChange = (updatedInfo) => {
    setCvData((prev) => ({
      ...prev,
      personalInfo: updatedInfo,
    }));
  };

  const handleEducationChange = (updatedEdu) => {
    setCvData((prev) => ({
      ...prev,
      education: updatedEdu,
    }));
  };

  const handleExperienceChange = (updatedExp) => {
    setCvData((prev) => ({
      ...prev,
      experience: updatedExp,
    }));
  };

  return (
    <div className="bg-stone-100 h-screen w-screen grid grid-cols-[2fr_3fr]">
      <div className="flex flex-col mx-6 shadow-xl rounded-md gap-6 overflow-y-auto h-screen">
        <PersonalInfoForm
          personalInfo={cvData.personalInfo}
          onChange={handlePersonalInfoChange}
        />
        <EducationForm
          education={cvData.education}
          onChange={handleEducationChange}
        />
        <ExperienceForm
          experience={cvData.experience}
          onChange={handleExperienceChange}
        />
      </div>
      <CVPreview cvData={cvData} />
    </div>
  );
}
