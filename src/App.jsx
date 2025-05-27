import { useState } from 'react';
import CVPreview from './CVPreview.jsx';
import PersonalInfoForm from './components/Form/PersonalInfoForm.jsx';

export default function App() {
  const [cvData, setCvData] = useState({
    personalInfo: {
      name: 'John Doe',
      email: '123@test.com',
      phone: '0123 456789',
    },
  });

  const handlePersonalInfoChange = (updatedInfo) => {
    setCvData((prev) => ({
      ...prev,
      personalInfo: updatedInfo,
    }));
  };

  return (
    <div className="bg-stone-100 h-screen w-screen grid grid-cols-2">
      <div>
        <PersonalInfoForm
          personalInfo={cvData.personalInfo}
          onChange={handlePersonalInfoChange}
        />
      </div>
      <CVPreview cvData={cvData} />
    </div>
  );
}
