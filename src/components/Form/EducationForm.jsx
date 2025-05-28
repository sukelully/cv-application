import FormComponent from './FormComponent';

export default function EducationForm({ education, onChange }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const educationData = {};
    formData.forEach((value, key) => {
      educationData[key] = value;
    });
    educationData.id = crypto.randomUUID();
    
    onChange([...education, educationData]);
  };

  return (
    <form className="flex flex-col bg-white rounded-md shadow-md p-6 gap-2" onSubmit={handleSubmit}>
      <h1 className="font-bold text-3xl">Education</h1>
      <FormComponent
        label="School"
        name="school"
      />
      <FormComponent
        label="Degree"
        name="degree"
        // value={education[0].degree}
        // onChange={handleInputChange}
      />
      <div className="flex flex-wrap justify-between">
        <FormComponent
          label="Start"
          name="start-date"
        />
        <FormComponent
          label="End"
          name="end-date"
        />
      </div>
      <button className="cursor-pointer bg-sky-900 text-white font-semibold w-fit px-4 py-2 rounded-md ml-auto mr-4 mt-2" type="submit">
        Add education
      </button>
    </form>
  );
}
