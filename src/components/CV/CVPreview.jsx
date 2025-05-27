import PersonalInfo from './PersonalInfo.jsx';
import Education from './Education.jsx';

export default function CVPreview({ cvData }) {
    return (
        <div className="flex flex-col m-6 shadow-xl">
            <PersonalInfo personalInfo={cvData.personalInfo}/>
            <Education education={cvData.education} />
        </div>
    );
}
