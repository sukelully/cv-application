import FormComponent from './FormComponent';

export default function EducationForm({ education, onChange }) {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedEdu = {
      ...education,
      [name]: value,
    };

    onChange(updatedEdu);
  };

  return (
    <div className="flex flex-col bg-white rounded-md shadow-md p-6 gap-2">
      <h1 className="font-bold text-3xl">Education</h1>
      <FormComponent
        label="School"
        name="school"
        value={education.school}
        onChange={handleInputChange}
      />
      <FormComponent
        label="Degree"
        name="degree"
        value={education.degree}
        onChange={handleInputChange}
      />
      <div className="flex flex-wrap justify-between">
        <FormComponent
          label="Start"
          name="start-date"
          value={education['start-date']}
          onChange={handleInputChange}
          // labelClassName='w-100'
        />
        <FormComponent
          label="End"
          name="end-date"
          value={education['end-date']}
          onChange={handleInputChange}
          // labelClassName='w-100'
        />
      </div>
    </div>
  );
}
