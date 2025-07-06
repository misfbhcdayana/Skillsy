function showRoadmap(path) {
  const roadmapSection = document.getElementById("roadmap");
  let content = "";
  if (path === "backend") {
    content = `
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
  } else if (path === "frontend") {
    content = `
     <h3>Frontend Developer Roadmap 🎨</h3>
      <ul>
        <li>📌 Learn HTML & CSS (structure + style)</li>
        <li>📌 Dive into JavaScript (make things move!)</li>
        <li>📌 Learn a framework: React, Vue, or Svelte</li>
        <li>📌 Explore design basics & accessibility</li>
        <li>📌 Build beautiful, responsive projects</li>
      </ul>
      <p class="quote">"Frontend is where logic meets beauty. And where centering divs builds character."</p>
    `;
  } else if (path === "dataSc") {
  content = `
    <h3>Data Scientist Roadmap 📊</h3>
    <ul>
      <li>📌 Master Python (your new best friend)</li>
      <li>📌 Learn data libraries: NumPy, Pandas, Matplotlib</li>
      <li>📌 Understand statistics & data analysis basics</li>
      <li>📌 Explore Machine Learning with Scikit-learn</li>
      <li>📌 Build projects: data dashboards, predictions, etc.</li>
    </ul>
    <p class="quote">"Data tells stories. Your job is to translate."</p>
  `;
}
  roadmapSection.innerHTML = content;
  roadmapSection.classList.remove("hidden");
}
