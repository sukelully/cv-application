export default function Education({ education }) {
    return (
        <div className="my-10 flex flex-col px-12">
            <h2 className="bg-neutral-200 text-sky-900 text-center font-semibold py-2">Education</h2>
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
        </div>
    );
}
