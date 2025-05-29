import { useState } from 'react';
import FormComponent from './FormComponent';
import SubmitFormComponent from './SubmitFormComponent';

export default function EducationForm({ education, onChange }) {
  const [dropdownOpenId, setDropdownOpenId] = useState(null);
  const [editingEntry, setEditingEntry] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const educationData = {};
    formData.forEach((value, key) => {
      educationData[key] = value;
    });

    if (editingEntry) {
      onChange(
        education.map((e) =>
          e.id === editingEntry.id ? { ...educationData, id: e.id } : e
        )
      );
      setEditingEntry(null);
      setDropdownOpenId(null);
    } else {
      educationData.id = crypto.randomUUID();
      onChange([...education, educationData]);
    }
    event.target.reset();
  };

  const toggleDropdown = (id) => {
    setDropdownOpenId(dropdownOpenId === id ? null : id);
  };

  const handleEditEntry = (entry) => {
    setEditingEntry(entry);
  };

  return (
    <div className="flex flex-col gap-4 bg-white rounded-md shadow-md p-6">
      <button className="flex items-center gap-4 w-full cursor-pointer">
        <i className="fa-solid fa-user-graduate text-2xl"></i>
        <h1 className="font-bold text-3xl">Education</h1>
        <i className="fa-solid fa-chevron-down ml-auto"></i>
      </button>

      <div id="form-entries" className="flex flex-col gap-2">
        {education.map((entry) => (
          <EducationFormEntry
            key={entry.id}
            entry={entry}
            toggleDropdown={toggleDropdown}
            dropdownOpenId={dropdownOpenId}
            handleEditEntry={handleEditEntry}
          />
        ))}
      </div>

      <div id="education-form" className="">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <SubmitFormComponent
            label="School"
            name="school"
            defaultValue={editingEntry?.school || ''}
          />
          <SubmitFormComponent
            label="Degree"
            name="degree"
            defaultValue={editingEntry?.degree || ''}
          />
          <div className="flex flex-wrap justify-between">
            <SubmitFormComponent
              label="Start"
              name="start-date"
              defaultValue={editingEntry?.['start-date'] || ''}
            />
            <SubmitFormComponent
              label="End"
              name="end-date"
              defaultValue={editingEntry?.['end-date'] || ''}
            />
          </div>
          <button
            className="cursor-pointer bg-sky-900 text-white font-semibold w-fit px-4 py-2 rounded-md ml-auto mr-4 mt-4"
            type="submit"
          >
            {editingEntry ? 'Update education' : 'Add education'}
          </button>
        </form>
      </div>
    </div>
  );
}

function EducationFormEntry({
  entry,
  toggleDropdown,
  dropdownOpenId,
  handleEditEntry,
}) {
  return (
    <div className="flex flex-col gap-2">
      <button
        id={entry.id}
        className="flex items-center w-full cursor-pointer bg-neutral-200 rounded-md p-2"
        onClick={() => toggleDropdown(entry.id)}
      >
        <span className="font-semibold">{entry.school}</span>
        <i className="fa-solid fa-chevron-down ml-auto mr-4"></i>
      </button>
      {entry.id === dropdownOpenId && (
        <div className="flex justify-evenly">
          <button onClick={() => handleEditEntry(entry)}>
            <i className="fa-solid fa-pen-to-square bg-neutral-200 py-2 px-4 rounded-md cursor-pointer"></i>
          </button>
          <button>
            <i className="fa-solid fa-trash bg-neutral-200 py-2 px-4 rounded-md cursor-pointer"></i>
          </button>
        </div>
      )}
    </div>
  );
}
