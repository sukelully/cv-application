import PersonalInfo from './components/CV/PersonalInfo.jsx';

export default function CVPreview({ cvData }) {
    return (
        <div className="flex flex-col m-6 shadow-xl">
            <PersonalInfo personalInfo={cvData.personalInfo}/>
        </div>
    );
}
