document.addEventListener("DOMContentLoaded", function() {
  const filmes = [
    {
      titulo: "À Meia-Noite Levarei Sua Alma",
      ano: 1964,
      duracao: "1h32m",
      diretor: "José Mojica Marins",
      imagem: "../images/ameianoite.jpg",
      link: "../html/ameianoite.html"
    },
    {
      titulo: "Esta Noite Encarnarei no teu Cadáver",
      ano: 1966,
      duracao: "1h48m",
      diretor: "José Mojica Marins",
      imagem: "../images/estanoite.jpg",
      link: "../html/estanoite.html"
    },
    {
      titulo: "As Fábulas Negras",
      ano: 2015,
      duracao: "1h45m",
      diretor: "Rodrigo Aragão, José Mojica Marins, Petter Baiestorf",
      imagem: "../images/asfabulasnegras.jpg",
      link: "../html/asfabulasnegras.html"
    },
    {
      titulo: "O Lobo Atrás da Porta",
      ano: 2014,
      duracao: "1h41m",
      diretor: "Fernando Coimbra",
      imagem: "../images/loboatrasdaporta.jpg",
      link: "../html/loboatrasdaporta.html"
    },
    {
      titulo: "Mate-me Por Favor",
      ano: 2016,
      duracao: "1h44m",
      diretor: "Anita Rocha da Silveira",
      imagem: "../images/matemeporfavor.jpg",
      link: "../html/matemeporfavor.html"
    },
    {
      titulo: "As Boas Maneiras",
      ano: 2018,
      duracao: "2h16m",
      diretor: "Juliana Rojas",
      imagem: "../images/asboasmaneiras.jpg",
      link: "../html/asboasmaneiras.html"
    },
    {
      titulo: "O Animal Cordial",
      ano: 2018,
      duracao: "1h38m",
      diretor: "Gabriela Amaral Almeida",
      imagem: "../images/animalcordial.jpeg",
      link: "../html/animalcordial.html"
    },
    {
      titulo: "O Nó do Diabo",
      ano: 2018,
      duracao: "2h08m",
      diretor: "Ramon Porto Mota, Gabriel Martins, Ian Abé",
      imagem: "../images/nododiabo.png",
      link: "../html/nododiabo.html"
    },
    {
      titulo: "A Mata Negra",
      ano: 2018,
      duracao: "1h38m",
      diretor: "Rodrigo Aragão",
      imagem: "../images/matanegra.jpeg",
      link: "../html/matanegra.html"
    },
    {
      titulo: "Morto Não Fala",
      ano: 2019,
      duracao: "1h50m",
      diretor: "Dennison Ramalho",
      imagem: "../images/mortonaofala.png",
      link: "../html/mortonaofala.html"
    },
    {
      titulo: "Mal Nosso",
      ano: 2019,
      duracao: "1h32m",
      diretor: "Samuel Galli",
      imagem: "../images/malnosso.jpg",
      link: "../html/malnosso.html"
    },
    {
      titulo: "O Clube dos Canibais",
      ano: 2019,
      duracao: "1h22m",
      diretor: "Guto Parente",
      imagem: "../images/clube.jpg",
      link: "../html/clube.html"
    }
  ];

  const searchInput = document.querySelector('.search-bar input');
  const mainContent = document.querySelector('.main-content');

  function exibirFilmes(filmesExibidos) {
    mainContent.innerHTML = "";
    filmesExibidos.forEach(filme => {
      const artigo = document.createElement('div');
      artigo.classList.add('article');

      artigo.innerHTML = `
        <img src="${filme.imagem}" alt="${filme.titulo}">
        <div class="text-overlay">
          <h2><a href="${filme.link}" class="no-underline">${filme.titulo}</a></h2>
          <p>${filme.ano}</p>
          <p>${filme.duracao}</p>
          <p>${filme.diretor}</p>
        </div>
      `;

      mainContent.appendChild(artigo);
    });
  }

  function filtrarFilmes() {
    const termoBusca = searchInput.value.toLowerCase();
    const filmesFiltrados = filmes.filter(filme => filme.titulo.toLowerCase().includes(termoBusca));
    exibirFilmes(filmesFiltrados);
  }

  searchInput.addEventListener('input', filtrarFilmes);

  exibirFilmes(filmes);
});
