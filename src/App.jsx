// import { useState } from 'react'
import CVPreview from './CVPreview.jsx'
import PersonalInfo from './components/CV/PersonalInfo.jsx';

// const [cvData, setCvData] = useState({
//   personalInfo: { name: 'John Doe', email: '123@test.com', phone: '0123 456789' }
// });

const cvData = {
  personalInfo: { name: 'John Doe', email: '123@test.com', phone: '0123 456789' }
};

export default function App() {
  return (
    <div className="bg-teal-500 h-screen w-screen grid grid-cols-2">
      <div>
        <h1>This is a div with content</h1>
      </div>
      <CVPreview cvData={cvData}/>
    </div>
  );
}
