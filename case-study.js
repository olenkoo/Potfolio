const article = document.querySelector('#case-study');
article.innerHTML = `
  <header class="case-hero"><p class="eyebrow">${caseStudy.label}</p><h1>${caseStudy.title}</h1><p>${caseStudy.subtitle}</p></header>
  ${caseStudy.sections.map((section, index) => `
    <section class="case-section ${index % 2 ? 'case-section--reverse' : ''}">
      <div class="case-copy"><p class="eyebrow">${String(index + 1).padStart(2, '0')}</p><h2>${section.title}</h2><p>${section.copy}</p></div>
      <div class="case-images">${section.images.map((image, imageIndex) => `<img src="${image}" alt="${section.title}, project photo ${imageIndex + 1}" loading="lazy">`).join('')}</div>
    </section>`).join('')}`;
document.querySelector('#year').textContent = new Date().getFullYear();
