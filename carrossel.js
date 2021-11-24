onload = () => {
  //---------- dados fakes ----------
  var imagens = [
    {
      id: 0,
      nomeInst: "Instituição de Caridade",
      categoria: 0,
      imagem: "imgs/logoo.png",
    },

    {
      id: 1,
      nomeInst: "Instituição de Roupas",
      categoria: 1,
      imagem: "imgs/logo4.png",
    },

    {
      id: 2,
      nomeInst: "Instituição de Livros",
      categoria: 0,
      imagem: "imgs/logo3.png",
    },

    {
      id: 3,
      nomeInst: "Instituição de Brinquedos",
      categoria: 3,
      imagem: "imgs/logo4.png",
    },
  ];
  //---------------------------------

  //------- guardando os dados fakes no localStorage -------
  localStorage.setItem("fakes", JSON.stringify(imagens));

  //------- apresentar as imagens do localStorage -------
  var divImagens = document.getElementById("carrossel_img"); //pega a div que será colocada o código das imagens
  var olIndicadores = document.getElementById("indicadores"); //pega a div que será colocada o código dos indicadores

  var imgs = JSON.parse(localStorage.getItem("fakes")); //pega, em forma de objeto, o JSON salvo no localStorage

  let colocarIMG = ""; //variável na qual o código da imagem será inserido
  let colocarIndicador = ""; //variável na qual o código do indicador será inserido

  //for para inserir todas as imagens salvas no localStorage
  for (let i = 0; i < imgs.length; i++) {
    let imgInfo = imgs[i];

    if (i == 0) {
      //--- adicionando a div com a ativação do carrossel ---
      // += para ir adicionando de acordo com a quantidade de itens no localStorage
      colocarIMG += `<div class="carousel-item active">`;

      //--- adicionando o indicador no carrossel ---
      colocarIndicador += `<li data-target="#carouselExampleIndicators" data-slide-to="${i}" class="active" ></li>`;
    } else {
      //--- adicionando a div do carrossel ---
      colocarIMG += `<div class="carousel-item">`;

      //--- adicionando o indicador no carrossel ---
      colocarIndicador += `<li data-target="#carouselExampleIndicators" data-slide-to="${i}" ></li>`;
    }

    colocarIMG += `<img class="img_car" src="${imgInfo.imagem}" alt="ID ${imgInfo.id}" width="100%" height="400">
      </div>`;
  }

  divImagens.innerHTML = colocarIMG; //adicionar o código novo no HTML
  olIndicadores.innerHTML = colocarIndicador; //adicionar o código novo no HTML

  //------- alerta para quando os botões ilustrativos forem acionados -------
  add.onclick = () => {
    alerta();
  };

  excluir.onclick = () => {
    alerta();
  };

  alterar.onclick = () => {
    alerta();
  };

  //------- função de alerta -------
  function alerta() {
    alert(
      "Função não disponível! Botão ilustrativo!\nAguarde a sprint 4. Obrigada!"
    );
  }
};
