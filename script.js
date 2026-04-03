const projetos = [
  {
    titulo: "Portfólio Profissional",
    descricao: "Portfólio desenvolvido com HTML, CSS e JavaScript responsivo.",
    link: "https://github.com/alineelite11-byte/portfolio-mvp",
  },
  {
    titulo: "Página de Login",
    descricao: "Interface moderna de login com validação.",
    link: "#",
  },
  {
    titulo: "Lista de Tarefas",
    descricao: "Aplicação JavaScript para organização de tarefas.",
    link: "#",
  },
];

const container = document.getElementById("lista-projetos");

projetos.forEach((projeto, index) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.style.animation = `fade .5s ease forwards ${index * 0.2}s`;
  card.style.opacity = "0";

  card.innerHTML = `
<h3>${projeto.titulo}</h3>
<p>${projeto.descricao}</p>
<a href="${projeto.link}" target="_blank">Ver projeto →</a>
`;

  container.appendChild(card);
});

const elements = document.querySelectorAll("section, .card, .exp");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

elements.forEach((el) => {
  el.classList.add("hidden");
  observer.observe(el);
});
