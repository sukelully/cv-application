export default function PersonalInfo({ personalInfo }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-1/5 gap-2 text-white bg-sky-900">
      <h1 className="font-bold text-4xl">{personalInfo.name}</h1>
      <div className="flex gap-6">
        <div className="flex gap-2 items-center">
          <i className="fa-solid fa-phone"></i>
          <p>{personalInfo.phone}</p>
        </div>
        <div className="flex gap-2 items-center">
          <i className="fa-solid fa-envelope"></i>
          <p>{personalInfo.email}</p>
        </div>
        <div className="flex gap-2 items-center">
          <i className="fa-solid fa-location-dot"></i>
          <p>{personalInfo.location}</p>
        </div>
      </div>
    </div>
  );
}
