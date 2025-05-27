export default function PersonalInfoForm({ personalInfo, onChange }) {
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log(name, value);

        const updatedInfo = {
            ...personalInfo,
            [name]: value
        }
        onChange(updatedInfo);
    }

    return (
        <form className="flex flex-col">
            <h1>test</h1>
            <label>
                Name:
                <input
                    className="bg-white border"
                    type="text"
                    name="name"
                    value={personalInfo.name}
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Email:
                <input
                    className="bg-white border"
                    type="text"
                    name="email"
                    value={personalInfo.email}
                    onChange={handleInputChange}
                />
            </label>
        </form>
    );
}
