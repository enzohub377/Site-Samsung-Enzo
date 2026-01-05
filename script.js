const trocarNovidade = document.getElementById("mudarImage");

const imgOriginal = "Imagens/Novo Galaxy Watch Samsung.svg";
const imgPrata = "Imagens/Galaxy Watch Prata.svg";
const imgGrafite = "Imagens/Galaxy Watch Grafite.svg";

let imageFixa = null;
let corEscolhidaAtivo = null;

function trocarTransition(Element, src) {
  Element.style.opacity = 0;
  Element.style.transform = "scale(0.95)";

  setTimeout(() => {
    Element.src = src;
    Element.style.opacity = 1;
    Element.style.transform = "scale(1)";
  }, 250);
}

function ativarCorEscolhida(elemento, corFundo) {
  if (corEscolhidaAtivo) {
    corEscolhidaAtivo.classList.remove("Ativo");
  }

  elemento.classList.add("Ativo");
  corEscolhidaAtivo = elemento;

  fundoCor.style.backgroundColor = corFundo;
}

const labelCor = document.createElement("span");
labelCor.classList.add("label-cor");
labelCor.style.position = "absolute";
labelCor.style.fontSize = "22.5px";
labelCor.style.fontWeight = "600";
labelCor.style.top = "-45px";
labelCor.style.left = "50%";
labelCor.style.transform = "translateX(-50%)";
labelCor.style.pointerEvents = "none";
labelCor.style.display = "none";

function mostrarLabel(circulo, texto) {
  labelCor.textContent = texto;
  circulo.appendChild(labelCor);
  labelCor.style.display = "block";
}

function esconderLabel() {
  labelCor.style.display = "none";
}

EscolhaPrata.addEventListener("mouseover", function () {
  if (!imageFixa) trocarTransition(trocarNovidade, imgPrata);
});

EscolhaGrafite.addEventListener("mouseover", function () {
  if (!imageFixa) trocarTransition(trocarNovidade, imgGrafite);
});

EscolhaPrata.addEventListener("mouseout", function () {
  if (!imageFixa) trocarTransition(trocarNovidade, imgOriginal);
});

EscolhaGrafite.addEventListener("mouseout", function () {
  if (!imageFixa) trocarTransition(trocarNovidade, imgOriginal);
});

EscolhaPrata.addEventListener("click", (e) => {
  e.stopPropagation();
  imageFixa = imgPrata;
  trocarTransition(trocarNovidade, imageFixa);
  ativarCorEscolhida(EscolhaPrata, corPrata);
  mostrarLabel(EscolhaPrata, "Prata");
});

EscolhaGrafite.addEventListener("click", (e) => {
  e.stopPropagation();
  imageFixa = imgGrafite;
  trocarTransition(trocarNovidade, imageFixa);
  ativarCorEscolhida(EscolhaGrafite, corGrafite);
  mostrarLabel(EscolhaGrafite, "Grafite");
});

document.addEventListener("click", () => {
  imageFixa = null;
  trocarTransition(trocarNovidade, imgOriginal);

  if (corEscolhidaAtivo) {
    corEscolhidaAtivo.classList.remove("Ativo");
    corEscolhidaAtivo = null;
  }

  esconderLabel();
  fundoCor.style.backgroundColor = fundoOriginal;
});

const fundoCor = document.getElementById("pontualidadeCores");
const fundoPrata = document.getElementById("EscolhaPrata");
const fundoGrafite = document.getElementById("EscolhaGrafite");

const fundoOriginal = "white";
const corPrata = "#c9cccc";
const corGrafite = "#5b6166";

if (fundoCor && fundoPrata && fundoGrafite) {
  fundoPrata.addEventListener("mouseover", function () {
    fundoCor.style.backgroundColor = corPrata;
  });

  fundoPrata.addEventListener("mouseout", function () {
    if (!corEscolhidaAtivo) fundoCor.style.backgroundColor = fundoOriginal;
  });

  fundoGrafite.addEventListener("mouseover", function () {
    fundoCor.style.backgroundColor = corGrafite;
  });

  fundoGrafite.addEventListener("mouseout", function () {
    if (!corEscolhidaAtivo) fundoCor.style.backgroundColor = fundoOriginal;
  });
}

const menuBurger = document.querySelector('.menu-burger')
const nav = document.querySelector('nav')
const containerAtalhos = document.querySelector('#containerAtalhos')

menuBurger.addEventListener('click', () => {
  menuBurger.classList.toggle('active')
  nav.classList.toggle('active')
  containerAtalhos.classList.toggle('active')
})

const atalhos = document.querySelectorAll('.Atalho')

atalhos.forEach(atalho => {
  atalho.addEventListener('click', () => {
    menuBurger.classList.remove('active')
    nav.classList.remove('active')
    containerAtalhos.classList.remove('active')
  })
})
