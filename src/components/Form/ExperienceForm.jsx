import { useState } from 'react';
import SubmitFormComponent from './FormComponent/SubmitFormComponent';

export default function ExperienceForm({ experience, onChange }) {
  const [editingEntry, setEditingEntry] = useState(null);
  const [dropdownOpenId, setDropdownOpenId] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const expData = {};

    formData.forEach((value, key) => {
      expData[key] = value;
    });

    expData.id = crypto.randomUUID();
    onChange([...experience, expData]);
    event.target.reset();
  };

  const toggleDropdown = (id) => {
    setDropdownOpenId((prevId) => {
      const newId = prevId === id ? null : id;
      if (newId === null) {
        setEditingEntry(null);
      }
      return newId;
    });
  };

  const handleEditEntry = (entry) => {
    setEditingEntry(entry);
  };

  const handleDeleteEntry = (id) => {
    onChange(experience.filter((entry) => entry.id !== id));
    setDropdownOpenId(null);
  };

  return (
    <div className="flex flex-col bg-white rounded-md shadow-md p-6 gap-2">
      <h1 className="font-bold text-3xl">Experience</h1>

      <div id="form-entries" className="flex flex-col gap-2">
        {experience.map((entry) => (
          <ExperienceFormEntry
            key={entry.id}
            entry={entry}
            toggleDropdown={toggleDropdown}
            dropdownOpenId={dropdownOpenId}
            handleEditEntry={handleEditEntry}
            handleDeleteEntry={handleDeleteEntry}
          />
        ))}
      </div>

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
          {editingEntry ? 'Update' : 'Add'} experience
        </button>
      </form>
    </div>
  );
}

function ExperienceFormEntry({
  entry,
  toggleDropdown,
  dropdownOpenId,
  handleEditEntry,
  handleDeleteEntry
}) {
  return (
    <div className="flex gap-2">
      <button
        id={entry.id}
        className="flex items-center w-full cursor-pointer bg-neutral-200 rounded-md p-2"
        onClick={() => toggleDropdown(entry.id)}
      >
        <span className="font-semibold">{entry.company}</span>
        {entry.id === dropdownOpenId ? (
          <i className="fa-solid fa-minus ml-auto mr-4 cursor-pointer"></i>
        ) : (
          <i className="fa-solid fa-ellipsis ml-auto mr-4 cursor-pointer"></i>
        )}
      </button>
      {entry.id === dropdownOpenId && (
        <div className="flex bg-neutral-200 gap-8 px-4 rounded-md">
          <button onClick={() => handleEditEntry(entry)}>
            <i className="fa-solid fa-pen-to-square cursor-pointer"></i>
          </button>
          <button onClick={() => handleDeleteEntry(entry.id)}>
            <i className="fa-solid fa-trash cursor-pointer"></i>
          </button>
        </div>
      )}
    </div>
  );
}
