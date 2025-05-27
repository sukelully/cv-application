export default function Education({ education }) {
    return (
        <div className="my-10 flex flex-col px-12">
            <h2 className="bg-neutral-200 text-sky-900 text-center font-semibold py-2">{education.school}</h2>
            
            <p>{education.degree}</p>
            <p>{education['start-date']}</p>
            <p>{education['end-date']}</p>
        </div>
    );
}
