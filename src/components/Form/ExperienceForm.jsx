import SubmitFormComponent from './FormComponent/SubmitFormComponent';

export default function ExperienceForm({ experience, onChange }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const expData = {};

    formData.forEach((value, key) => {
      expData[key] = value;
    });

    expData.id = crypto.randomUUID();
    console.log(expData);
    onChange([...experience, expData]);
    event.target.reset();
  };

  return (
    <div className="flex flex-col bg-white rounded-md shadow-md p-6 gap-2">
      <h1 className="font-bold text-3xl">Experience</h1>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <SubmitFormComponent
          label="Company"
          name="company"
          defaultValue={experience.company || ''}
        />
        <SubmitFormComponent
          label="Role"
          name="role"
          defaultValue={experience.role || ''}
        />
        <label htmlFor="description" className="flex flex-col font-semibold">
          Description
          <textarea
            name="description"
            id="description"
            className="bg-neutral-200 p-1 rounded-md font-normal"
            required
          ></textarea>
        </label>
        <SubmitFormComponent
          label="Start date"
          name="start-date"
          defaultValue={experience['start-date'] || ''}
        />
        <SubmitFormComponent
          label="End date"
          name="end-date"
          defaultValue={experience['end-date'] || ''}
        />
        <button
          className="cursor-pointer bg-sky-900 text-white font-semibold w-fit px-4 py-2 rounded-md ml-auto mr-4 mt-4"
          type="submit"
        >
          Add experience
        </button>
      </form>
    </div>
  );
}
