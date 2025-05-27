export default function PersonalInfo({ personalInfo }) {
  return (
    <div>
      <h1>{personalInfo.name}</h1>
      <p>{personalInfo.email}</p>
      <p>{personalInfo.phone}</p>
    </div>
  );
}
