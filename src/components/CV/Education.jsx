import EducationComponent from './EducationComponent.jsx';

export default function Education({ education }) {
  return (
    <div className="my-10 flex flex-col px-12">
      <h2 className="bg-neutral-200 text-sky-900 text-center font-semibold py-2">
        Education
      </h2>
      {/* <EducationComponent education={education} /> */}
      {education.map((entry) => (
        <EducationComponent education={entry} key={entry.id}/>
      ))}
    </div>
  );
}
