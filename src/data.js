export const exampleData = {
    personalInfo: {
        name: 'John Doe',
        email: '123@test.com',
        phone: '0123 456789',
        location: 'New York City, NY',
        profile:
            'A motivated and detail-oriented professional with a strong foundation in technology and problem-solving. Experienced in working collaboratively across teams to deliver high-quality results on time. Adaptable, quick to learn new skills, and committed to continuous personal and professional development. Currently seeking a role that will leverage existing experience while offering opportunities to grow and contribute meaningfully to organisational goals.',
    },
    education: [
        {
            school: 'Old Dominion University',
            degree: 'Computer Science',
            'start-date': 'Sep 2018',
            'end-date': 'present',
            id: crypto.randomUUID(),
        },
    ],
    experience: [
        {
            company: 'Apple',
            role: 'Junior Developer',
            description:
                'As a Junior Software Developer, I worked as part of an agile team to develop and maintain client-facing web applications using React and Node.js. I was responsible for writing clean, maintainable code and took part in regular peer code reviews to ensure quality and consistency. My role involved participating in daily stand-ups, sprint planning sessions, and retrospectives, contributing to the team\'s overall productivity. I implemented RESTful APIs and worked with MongoDB to manage data storage and retrieval. Additionally, I supported testing efforts by assisting with unit and integration tests to maintain application stability. I also contributed to the deployment process using Git and CI/CD pipelines via GitHub Actions.',
            'start-date': 'Jan 2024',
            'end-date': 'present',
            id: crypto.randomUUID(),
        },
    ],
}
