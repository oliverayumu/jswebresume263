const pages = {
    profile: `
        <h2>Profile</h2>
         <ul>
            <li>Software Engineering/Developing</li>
            <li>DevOps Engineering</li>
            <li>Machine Learning</li>
            <li>AWS Solutions Architect</li>
            <li>CSC, RIBO</li>
            <li>Financial Data Analysis (BMC)</li>
            <li>Microsoft Office, Analytical, Team Player, Punctual</li>
        </ul>
    `,
    education: `
        <h2>Education</h2>
        <ul>
            <li>Machine Learning Certification (2024)</li>
            <li>AWS Solutions Architect Certification (2024)</li>
            <li>Python Development (2024)</li>
            <li>Web Development Bootcamp (2023)</li>
            <li>Certificate in DevOps(2023)</li>
            <li>Bachelor of Commerce, Finance (2018)</li>
        </ul>
    `,
    work: `
        <h2>Work Experience</h2>
        <ul>
            <li>Outlier</li>
            <li>Commercial Insurance Broker</li>
            <li>Technical Sales Representative</li>
            <li>Customer Service Representative</li>
            <li>Sales Representative at Coca-Cola </li>
        </ul>
    `
};

const contentDiv = document.getElementById("content");

document.querySelectorAll("#nav-links a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault(); 

        const page = e.target.dataset.page; 
        contentDiv.innerHTML = pages[page]; 

        history.pushState({ page }, page, `${page}.html`);
    });
});

window.addEventListener("popstate", e => {
    if (e.state) {
        contentDiv.innerHTML = pages[e.state.page];
    } else {
        contentDiv.innerHTML = pages["profile"]; 
    }
});
