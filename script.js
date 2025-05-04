document.addEventListener('DOMContentLoaded', () => {
  const builderForm = document.getElementById('builderForm');
  const redirectMessage = document.getElementById('redirectMessage');
  const transcript = document.getElementById('transcript');

  builderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(builderForm);
    const data = Object.fromEntries(formData.entries());

    const primaryColorSwatch = `<span class="color-swatch" style="background-color: ${data.primaryColor};"></span>`;
    const secondaryColorSwatch = `<span class="color-swatch" style="background-color: ${data.secondaryColor};"></span>`;

    const transcriptHTML = `
      <p>Primary Color: ${data.primaryColor} ${primaryColorSwatch}</p>
      <p>Secondary Color: ${data.secondaryColor} ${secondaryColorSwatch}</p>
      <p>Website Title: ${data.title}</p>
      <p>Logo URL: ${data.logoUrl}</p>
      <p>Custom Text: ${data.customText}</p>
      <p>Font: ${data.font}</p>
    `;

    transcript.innerHTML = transcriptHTML;

    builderForm.classList.add('hidden');
    redirectMessage.classList.remove('hidden');
  });
});