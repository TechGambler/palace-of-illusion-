
document.addEventListener("DOMContentLoaded", function () {
  const root = document.getElementById("root");

  const content = [
    {
      title: "Overview",
      text: "The Palace of Illusions is a retelling of the Mahabharata from Draupadi’s point of view.",
    },
    {
      title: "Themes",
      text: "Explores power, gender, destiny, and love in Indian mythology.",
    },
    {
      title: "Key Events",
      text: "Swayamvar, dice game, humiliation in court, and the Kurukshetra war.",
    },
  ];

  let html = '<h1>Palace of Illusions</h1>';
  content.forEach((item) => {
    html += '<div class="card">';
    html += `<h2>${item.title}</h2>`;
    html += `<p>${item.text}</p>`;
    html += '</div>';
  });

  root.innerHTML = html;
});
