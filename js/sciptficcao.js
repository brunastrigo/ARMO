document.addEventListener("DOMContentLoaded", function() {
  const filmes = [
    {
      titulo: "Acquária",
      ano: 2003,
      duracao: "1h47m",
      diretor: "Flavia Moraes",
      imagem: "../images/acquaria.jpg",
      link: "../html/acquaria.html",
      genero: "ficção científica"
    },
    {
      titulo: "Bacurau",
      ano: 2019,
      duracao: "2h10m",
      diretor: "Kleber Mendonça Filho e Juliano Dornelles",
      imagem: "../images/bacurau.jpg",
      link: "../html/bacurau.html",
      genero: "ficção científica"
    },
    {
      titulo: "Quem é Beta?",
      ano: 1973,
      duracao: "1h25m",
      diretor: "Nelson Pereira dos Santos",
      imagem: "../images/beta.jpg",
      link: "../html/beta.html",
      genero: "ficção científica"
    },
    {
      titulo: "Biônicos",
      ano: 2024,
      duracao: "1h50m",
      diretor: "Afonso Poyart",
      imagem: "../images/bionicos.jpg",
      link: "../html/bionicos.html",
      genero: "ficção científica"
    },
    {
      titulo: "Branco Sai, Preto Fica",
      ano: 2015,
      duracao: "1h33m",
      diretor: "Adirley Queirós",
      imagem: "../images/brancosai.jpeg",
      link: "../html/brancosai.html",
      genero: "ficção científica"
    },
    {
      titulo: "A Ilha do Terrível Rapaterra",
      ano: 2006,
      duracao: "1h20m",
      diretor: "Ariane Porto",
      imagem: "../images/rapaterra.jpg",
      link: "../html/rapaterra.html",
      genero: "ficção científica"
    },
    {
      titulo: "Os Cosmonautas",
      ano: 1962,
      duracao: "1h29m",
      diretor: "Víctor Lima",
      imagem: "../images/cosmonautas.jpg",
      link: "../html/cosmonautas.html",
      genero: "ficção científica"
    },
    {
      titulo: "Divino Amor",
      ano: 2019,
      duracao: "1h41m",
      diretor: "Gabriel Mascaro",
      imagem: "../images/divinoamor.jpg",
      link: "../html/divinoamor.html",
      genero: "ficção científica"
    },
    {
      titulo: "O Jardim das Espumas",
      ano: 1970,
      duracao: "2h00m",
      diretor: "Luiz Rosemberg Filho",
      imagem: "../images/espumas.jpg",
      link: "../html/espumas.html",
      genero: "ficção científica"
    },
    {
      titulo: "O Homem do Futuro",
      ano: 2011,
      duracao: "1h46m",
      diretor: "Cláudio Torres",
      imagem: "../images/futuro.jpg",
      link: "../html/futuro.html",
      genero: "ficção científica"
    },
    {
      titulo: "A Nuvem Rosa",
      ano: 2021,
      duracao: "1h45m",
      diretor: "Iuli Gerbase",
      imagem: "../images/nuvemrosa.jpg",
      link: "../html/nuvemrosa.html",
      genero: "ficção científica"
    },
    {
      titulo: "Um Homem Só",
      ano: 2016,
      duracao: "1h34m",
      diretor: "Cláudia Jouvin",
      imagem: "../images/umhomemso.jpg",
      link: "../html/umhomemso.html",
      genero: "ficção científica"
    }
  ];

  const searchInput = document.querySelector('.search-bar input');
  const filterButton = document.querySelector('#filter-button');
  const mainContent = document.querySelector('.main-content');
  const yearFilter = document.querySelector('#year');
  const ratingFilter = document.querySelector('#rating');
  const genreFilter = document.querySelector('#genre');

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
    const anoFiltro = yearFilter.value;
    const classificacaoFiltro = ratingFilter.value;
    const generoFiltro = genreFilter.value;

    let filmesFiltrados = filmes.filter(filme => filme.genero === generoFiltro);

    if (termoBusca) {
      filmesFiltrados = filmesFiltrados.filter(filme =>
        filme.titulo.toLowerCase().includes(termoBusca)
      );
    }

    if (anoFiltro) {
      const [anoInicio, anoFim] = anoFiltro.split(" - ").map(Number);
      filmesFiltrados = filmesFiltrados.filter(filme => filme.ano >= anoInicio && filme.ano <= anoFim);
    }

    if (classificacaoFiltro) {
      filmesFiltrados = filmesFiltrados.filter(filme => filme.classificacao === classificacaoFiltro);
    }

    exibirFilmes(filmesFiltrados);
  }

  searchInput.addEventListener('input', filtrarFilmes);

  filterButton.addEventListener('click', filtrarFilmes);

  exibirFilmes(filmes);
});
