export default function Experience({ experience }) {
  return (
    <div className="my-10 flex flex-col px-12">
      <h2 className="bg-neutral-200 text-sky-900 text-center font-semibold py-2">
        Experience
      </h2>
      {experience.map((entry) => (
        <ExperienceEntry key={entry.id} entry={entry} />
      ))}
    </div>
  );
}

function ExperienceEntry({ entry }) {
  return (
    <div className="grid grid-cols-[3fr_8fr] mt-4">
      <div className="">
        <span>{entry['start-date']}</span>
        &mdash;
        <span>{entry['end-date']}</span>
      </div>

      <div className="flex flex-col">
        <p className="font-bold">{entry.company}</p>
        <p>{entry.role}</p>
      </div>
    </div>
  );
}
