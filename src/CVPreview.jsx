import PersonalInfo from './components/CV/PersonalInfo.jsx';

export default function CVPreview({ cvData }) {
    return (
        <div className="flex flex-col border">
            <PersonalInfo personalInfo={cvData.personalInfo}/>
        </div>
    );
}
