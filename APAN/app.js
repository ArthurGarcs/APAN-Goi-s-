const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
        //remove selected from other buttons
        btns.forEach(function (btn) {
            btn.classList.remove("active");
        });
        e.target.classList.add("active");
        //hide other articles
        articles.forEach(function (article) {
            article.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});
//using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question);

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});

// traversing the dom
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;

//     question.classList.toggle("show-text");
//   });
// });

//local reviews data
const reviews = [
  {
    id: 1,
    name: "Caldas Novas ",
    job: "Caldas Novas",
    img:
      "https://www.dmanapolis.com.br/images/noticias/54592/b42ef5ba4506767d560fba0bb642ef4e.jpeg",
    text:
      "Acesse o nosso instagram",
  },
  {
    id: 2,
    name: "Itumbiara",
    job: "Itumbiara",
    img:
      "https://www.gov.br/sudeco/pt-br/municipios/goias/outubro/itumbiara-go/imagem18.jpg/@@images/3ccf5df1-4f7b-4b0d-bcb8-c390380d33b2.jpeg",
    text:
       "acesse o nosso instagram"  },
  {
    id: 3,
    name: "Ratanaba",
    job: "Ratanaba",
    img:
      "https://cdn.msnoticias.com.br/img/c/1200/900/dn_arquivo/2022/08/ratanaba.jpg",
    text:
       "Acesse o nosso instagram"  },
  {
    id: 4,
    name: "Goiania",
    job: "Goiania",
    img:
      "https://s2.static.brasilescola.uol.com.br/be/2023/09/vista-de-uma-regiao-arborea-localizada-na-cidade-considerada-a-capital-mais-verde-do-brasil-um-aspecto-importante-da-historia-de-goiania.jpg",
    text:
        "Acesse o nosso instagram"  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const botaoAnterior = document.querySelector(".prev-btn");
const botaoProximo = document.querySelector(".next-btn");
const botaoAleatorio = document.querySelector(".random-btn");

//Seto qual
let itemCorrente = 0;


//carrego o item inicial
window.addEventListener("DOMContentLoaded", function (){
  const item = reviews[itemCorrente];
img.src - item.img;
author.textContent = item.name;
job.textContent = item.job;
info.textContent = item.text;
});


//função para mostrar pessoa baseada em um item
function mostrarPessoa(pessoa){
  const item = reviews[pessoa];
  img.src = item.img;
  author.textContent = item.author;
  job.textContent = item.job;
  info.textContent = item.text;
}


botaoProximo.addEventListener("click", function (){
  itemCorrente++;
  if(itemCorrente > reviews.length - 1){
    itemCorrente = 0;
  }
  mostrarPessoa(itemCorrente);
});

botaoAnterior.addEventListener("click", function(){
  itemCorrente--;
  if(itemCorrente < 0){
    itemCorrente = reviews.length - 1;
  }
  mostrarPessoa(itemCorrente);
});

botaoAleatorio.addEventListener("click", function (){
  itemCorrente = Math.floor(Math.random() * reviews.length);
  mostrarPessoa(itemCorrente);
});