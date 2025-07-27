fetch('data.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('name').textContent = data.name;
        document.getElementById('title').textContent = data.title;
        document.getElementById('about').textContent = data.about;

        document.getElementById('technologies').innerHTML =
            data.technologies.map(t => `<li>${t}</li>`).join('');

        document.getElementById('experience').innerHTML =
            data.experience.map(e => `<li><strong>${e.role}</strong> en ${e.company} (${e.period}): ${e.description}</li>`).join('');

        document.getElementById('projects').innerHTML =
            data.projects.map(p => `<li><strong>${p.name}</strong>: ${p.description} <em>(${p.technologies.join(', ')})</em></li>`).join('');

        document.getElementById('education').innerHTML =
            data.education.map(ed => `<li>${ed.degree} en ${ed.institution} (${ed.year})</li>`).join('');

        document.getElementById('contact').innerHTML = `
            <li>Email: <a href="mailto:${data.contact.email}">${data.contact.email}</a></li>
            <li>LinkedIn: <a href="${data.contact.linkedin}" target="_blank">${data.contact.linkedin}</a></li>
            <li>GitHub: <a href="${data.contact.github}" target="_blank">${data.contact.github}</a></li>
            <li>Ubicación: ${data.contact.location}</li>
        `;
    })
    .catch(error => {
        document.querySelector('.container').innerHTML = '<p>Error al cargar el perfil.</p>';
        console.error(error);
    });