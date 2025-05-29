export default function Education({ education }) {
  return (
    <div className="my-10 flex flex-col px-12">
      <h2 className="bg-neutral-200 text-sky-900 text-center font-semibold py-2">
        Education
      </h2>
      {education.map((entry) => (
        <EducationEntry key={entry.id} entry={entry} />
      ))}
    </div>
  );
}

function EducationEntry({ entry }) {
  return (
    <div className="grid grid-cols-[3fr_8fr] mt-4">
      <div className="">
        <span>{entry['start-date']}</span>
        &mdash;
        <span>{entry['end-date']}</span>
      </div>

      <div className="flex flex-col">
        <p className="font-bold">{entry.school}</p>
        <p>{entry.degree}</p>
      </div>
    </div>
  );
}
