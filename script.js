const grid = document.querySelector('#project-grid');

grid.innerHTML = projects.map((project, index) => `
  <article class="project-card ${index === 0 ? 'project-card--wide' : ''}">
    <div class="project-image-wrap">
      ${project.image ? `<img class="project-image" src="${project.image}" alt="${project.title}" loading="lazy" />` : `<div class="project-image project-image--placeholder">New work in progress</div>`}
      <span class="project-number">${String(index + 1).padStart(2, '0')}</span>
    </div>
    <div class="project-content">
      <p class="project-meta">${project.category}</p>
      <h3>${project.title}</h3>
      <p class="project-location">${project.location}</p>
      <p class="project-description">${project.description}</p>
      ${project.href !== '#' ? `<a class="text-link" href="${project.href}">${project.linkLabel} <span aria-hidden="true">→</span></a>` : `<span class="text-link text-link--muted">${project.linkLabel}</span>`}
    </div>
  </article>
`).join('');

document.querySelector('#year').textContent = new Date().getFullYear();
