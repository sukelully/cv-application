import { useState } from 'react'
import CVPreview from './CVPreview.jsx'
import PersonalInfoForm from './components/Form/PersonalInfoForm.jsx';

export default function App() {
  const [cvData, setCvData] = useState({
    personalInfo: { name: 'John Doe', email: '123@test.com', phone: '0123 456789' }
  });

  // const handleNameChange = (updatedName) => {
  //   setCvData(prev => ({
  //     ...prev,
  //     personalInfo: {
  //       ...prev.personalInfo,
  //       name: updatedName,
  //     },
  //   }));
  // };

  const handlePersonalInfoChange = (updatedInfo) => {
    setCvData(prev => ({
      ...prev,
      personalInfo: updatedInfo
    }));
  }

  return (
    <div className="bg-teal-500 h-screen w-screen grid grid-cols-2">
      <div>
        <h1>This is a div with content</h1>
        <PersonalInfoForm 
          personalInfo={cvData.personalInfo}
          onChange={handlePersonalInfoChange}
        />
      </div>
      <CVPreview cvData={cvData}/>
    </div>
  );
}
