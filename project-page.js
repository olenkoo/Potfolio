const grid = document.querySelector('#project-grid');
grid.innerHTML = projects.map((project, index) => `
  <article class="project-card ${index === 0 ? 'project-card--wide' : ''}">
    <div class="project-image-wrap"><img class="project-image" src="${project.image}" alt="${project.title}" loading="lazy"><span class="project-number">${String(index + 1).padStart(2, '0')}</span></div>
    <div class="project-content"><p class="project-meta">${project.category}</p><h3>${project.title}</h3><p class="project-location">${project.location}</p><p class="project-description">${project.description}</p>${project.href ? `<a class="text-link" href="${project.href}">View case study <span>→</span></a>` : project.document ? `<a class="text-link" href="${project.document}" target="_blank" rel="noopener">View project PDF <span>↗</span></a>` : `<button class="text-link gallery-trigger" data-project="${index}">View all ${project.gallery.length} images <span>↗</span></button>`}</div>
  </article>`).join('');
document.querySelector('#year').textContent = new Date().getFullYear();
const dialog = document.querySelector('#project-dialog');
document.querySelectorAll('.gallery-trigger').forEach((button) => button.addEventListener('click', () => { const project = projects[Number(button.dataset.project)]; document.querySelector('#dialog-title').textContent = project.title; document.querySelector('#dialog-content').innerHTML = project.gallery.map((image, index) => `<img src="${image}" alt="${project.title}, view ${index + 1}" loading="lazy">`).join(''); dialog.showModal(); }));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
