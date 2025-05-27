import { useState } from 'react';
import CVPreview from './components/CV/CVPreview.jsx';
import PersonalInfoForm from './components/Form/PersonalInfoForm.jsx';
import EducationForm from './components/Form/EducationForm.jsx';

export default function App() {
  const [cvData, setCvData] = useState({
    personalInfo: {
      name: 'John Doe',
      email: '123@test.com',
      phone: '0123 456789',
      location: 'New York City, NY',
    },
    education: {
      school: 'Old Dominion University',
    },
  });

  const handlePersonalInfoChange = (updatedInfo) => {
    setCvData(prev => ({
      ...prev,
      personalInfo: updatedInfo
    }));
  };

  const handleEducationChange = (updatedEdu) => {
    setCvData(prev => ({
      ...prev,
      education: updatedEdu
    }));
  };

  return (
    <div className="bg-stone-100 h-screen w-screen grid grid-cols-2">
      <div className="m-6 shadow-xl rounded-md">
        <PersonalInfoForm
          personalInfo={cvData.personalInfo}
          onChange={handlePersonalInfoChange}
        />
        <EducationForm 
          education={cvData.education}
          onChange={handleEducationChange}/>
      </div>
      <CVPreview cvData={cvData} />
    </div>
  );
}
