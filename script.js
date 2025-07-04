function showRoadmap(path) {
  const roadmapSection = document.getElementById("roadmap");

  if (path === "backend") {
    roadmapSection.innerHTML = `
      <h3>Backend Developer Roadmap 🚀</h3>
      <ul>
        <li>📌 Learn Git & GitHub (look who already did this!)</li>
        <li>📌 Learn a backend language (Python, Node.js, Java, etc.)</li>
        <li>📌 Understand how servers and APIs work</li>
        <li>📌 Learn databases (start with SQL)</li>
        <li>📌 Build projects and host them (like this one!)</li>
      </ul>
      <p class="quote">"There are many solutions, but none of them is yours… <strong>yet</strong>."</p>
    `;
    roadmapSection.classList.remove("hidden");
  }
}
