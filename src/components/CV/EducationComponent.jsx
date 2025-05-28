export default function EducationComponent({ education }) {
  return (
    <div className="flex items-center mt-4">
      <div className="mr-12">
        <span>{education['start-date']}</span>
        &mdash;
        <span>{education['end-date']}</span>
      </div>

      <div className="flex flex-col">
        <p className="font-bold">{education.school}</p>
        <p>{education.degree}</p>
      </div>
    </div>
  );
}
