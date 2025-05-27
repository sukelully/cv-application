export default function PersonalInfoForm({ personalInfo, onChange }) {

    return (
        <form>
            <h1>test</h1>
            <input 
                className="bg-white border"
                type="text"
                value={personalInfo.name}
                onChange={(event) => onChange(event.target.value)}
            />
        </form>
    );
}
