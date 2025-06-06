import FormComponent from './FormComponent/FormComponent';

export default function PersonalInfoForm({ personalInfo, onChange }) {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedInfo = {
      ...personalInfo,
      [name]: value,
    };

    onChange(updatedInfo);
  };

  return (
    <div className="flex flex-col bg-white rounded-md shadow-md p-6 gap-2">
      <h1 className="font-bold text-3xl">Personal details</h1>
      <FormComponent
        label="Name"
        name="name"
        value={personalInfo.name}
        onChange={handleInputChange}
      />
      <FormComponent
        label="Email"
        name="email"
        value={personalInfo.email}
        onChange={handleInputChange}
      />
      <FormComponent
        label="Phone"
        name="phone"
        value={personalInfo.phone}
        onChange={handleInputChange}
      />
      <FormComponent
        label="Location"
        name="location"
        value={personalInfo.location}
        onChange={handleInputChange}
      />
      <label htmlFor="profile" className='flex flex-col font-semibold'>
        Profile
        <textarea
          name="profile"
          id="profile"
          className="bg-neutral-200 rounded-md px-2 py-1 font-normal"
          value={personalInfo.profile}
          onChange={handleInputChange}
          required
        ></textarea>
      </label>
    </div>
  );
}
