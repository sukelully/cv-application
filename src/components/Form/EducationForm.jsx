import FormComponent from './FormComponent';

export default function EducationForm({ education, onChange }) {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedEdu = {
      ...education,
      [name]: value
    };

    onChange(updatedEdu);
  }

  return (
    <div className="flex flex-col bg-white rounded-md shadow-md p-6 gap-2">
      <h1 className="font-bold text-3xl">Education</h1>
      <FormComponent
        label="School"
        name="school"
        value={education.school}
        onChange={handleInputChange}
      />
    </div>
  );
}
