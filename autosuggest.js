document.addEventListener('DOMContentLoaded', () => {
  const summary = document.getElementById('summary');
  summary.addEventListener('focus', () => {
    if (!summary.value) {
      summary.value = "Results-driven professional with a strong background in...";
    }
  });

  const form = document.getElementById('resumeForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const summary = document.getElementById('summary').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;

    const output = `
      <h2>${name}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Summary:</strong><br>${summary}</p>
      <p><strong>Experience:</strong><br>${experience}</p>
      <p><strong>Education:</strong><br>${education}</p>
      <button onclick="window.print()">Download PDF</button>
    `;
    document.getElementById('resumeOutput').innerHTML = output;
  });
});
