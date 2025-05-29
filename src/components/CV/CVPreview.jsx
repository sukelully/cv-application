import PersonalInfo from './PersonalInfo.jsx';
import Education from './Education.jsx';

export default function CVPreview({ cvData }) {
    return (
        <div className="sticky top-0 h-screen overflow-hidden shadow-xl min-w-fit">
            <PersonalInfo personalInfo={cvData.personalInfo}/>
            <Education education={cvData.education} />
        </div>
    );
}
