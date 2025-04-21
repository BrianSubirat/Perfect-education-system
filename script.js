document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation
    const navLinks = document.querySelector('.nav-links');

    // Close mobile nav when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                document.querySelector('.overlay').classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Populate restricted sites
    const restrictedSites = document.getElementById('restricted-sites');
    const sites = [
        {
            category: "Academic Dishonesty & AI Abuse",
            items: ["Chegg", "CourseHero", "Brainly", "Socratic", "Quillbot", "Caktus AI", "ChatGPT Mirrors", "Gradesaver", "Studocu", "PaperHelp", "EssayTyper", "Grammarly (premium)"]
        },
        {
            category: "Unblocked Game Sites",
            items: ["TBG95", "UnblockedGames66EZ", "123unblocked.com", "Tyrone's Games", "Google Sites-hosted games", "CoolMathGames", "Shellshock.io", "Slope", "Drift Hunters", "AmongUs.io", "1v1.lol"]
        },
        {
            category: "Social Media & Messaging",
            items: ["Instagram", "Snapchat", "Facebook", "Twitter (X)", "Discord", "TikTok", "Reddit", "Pinterest", "Omegle", "Chatroulette"]
        },
        {
            category: "VPNs & Proxies",
            items: ["ProtonVPN", "Psiphon", "HolaVPN", "UrbanVPN", "KProxy", "FilterBypass", "HideMyAss", "CroxyProxy", "TouchVPN", "Webproxy.to"]
        }
    ];

    sites.forEach(category => {
        const div = document.createElement('div');
        div.innerHTML = `
            <h3>❌ ${category.category}</h3>
            <ul>
                ${category.items.map(item => `<li>${item}</li>`).join('')}
            </ul>
        `;
        restrictedSites.appendChild(div);
    });

    // Populate apps
    const coreApps = ["Google Docs, Slides, Sheets, Drive", "Notion", "Padlet", "Flip", "Canva", "TypingClub", "Duolingo", "Khan Academy"];
    const techApps = ["Blender", "CapCut", "Scratch", "Unity Hub", "VS Code", "Tinkercad", "Figma", "Adobe Express & Photoshop (lab only)"];
    const vrApps = ["CoSpaces Edu", "ClassVR", "Google Earth VR", "Apollo 11 VR", "The Body VR", "zSpace", "Anne Frank House VR"];

    document.getElementById('core-apps').innerHTML = coreApps.map(app => `<li>${app}</li>`).join('');
    document.getElementById('tech-apps').innerHTML = techApps.map(app => `<li>${app}</li>`).join('');
    document.getElementById('vr-apps').innerHTML = vrApps.map(app => `<li>${app}</li>`).join('');

    // Populate rules
    const rules = [
        "Respect all staff, peers, and property",
        "No food or drink near school devices",
        "No sharing or tampering with devices",
        "Follow dress code and classroom norms",
        "No gaming or unrelated videos during class"
    ];

    document.getElementById('rules-list').innerHTML = rules.map(rule => `<li>${rule}</li>`).join('');

    // Populate policy table
    const policies = [
        { offense: "1st", consequence: "Verbal Warning", support: "Logged in system; counselor checks in" },
        { offense: "2nd", consequence: "Phone call home", support: "Student attends empathy reflection session" },
        { offense: "3rd", consequence: "2-Day ISS", support: "Bullying prevention workshop required" },
        { offense: "4th", consequence: "1-Week OSS", support: "Family meeting + re-entry behavior contract" }
    ];

    const table = document.createElement('table');
    table.innerHTML = `
        <tr>
            <th>Offense</th>
            <th>Consequence</th>
            <th>Support Measures</th>
        </tr>
        ${policies.map(policy => `
            <tr>
                <td>${policy.offense}</td>
                <td>${policy.consequence}</td>
                <td>${policy.support}</td>
            </tr>
        `).join('')}
    `;
    document.getElementById('policy-table').appendChild(table);

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});