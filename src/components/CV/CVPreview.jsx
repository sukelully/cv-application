import PersonalInfo from './PersonalInfo.jsx';
import Education from './Education.jsx';
import Experience from './Experience.jsx';

export default function CVPreview({ cvData }) {
    return (
        <div className="sticky top-0 h-screen overflow-hidden shadow-xl min-w-fit">
            <PersonalInfo personalInfo={cvData.personalInfo}/>
            <Education education={cvData.education} />
            <Experience experience={cvData.experience} />
        </div>
    );
}
