import '../Css-Sheets/projects.css';

const projects = [
    { title: 'Going All In', description: 'E-commerce Mobile Application for Android and Ios with Flutter & Shopify Apis' },
    { title: 'Dowidar App', description: 'E-commerce Mobile Application for Android with Flutter' },
    { title: 'Construction Mart', description: 'E-commerce Mobile Application for Android with Flutter & Node.js also with Admin Pannel' },
    { title: 'Krave Mart', description: 'E-commerce Mobile Application for Android Frontend in Flutter' },
];

function Projects() {
    return (
        <section className="projects">
            <h1 className="projects-heading">Projects</h1>
            <div className="projects-list">
                {projects.map((project, index) => (
                    <div key={index} className="project">
                        <h2 className="project-title">{project.title}</h2>
                        <p className="project-description">{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
