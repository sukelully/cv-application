export default function Education({ education }) {
    return (
        <div>
            <h1>{education.school}</h1>
            <p>{education.degree}</p>
            <p>{education['start-date']}</p>
            <p>{education['end-date']}</p>
        </div>
    );
}
