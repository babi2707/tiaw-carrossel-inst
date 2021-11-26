onload = () => {
  //---------- dados fakes ----------
  var imagens = [
    {
      id: 0,
      nomeInst: "Instituição de Caridade",
      categoria: 0,
      imagem:
        "https://i2.wp.com/www.sabra.org.br/site/wp-content/uploads/2021/01/entenda-como-doar-e-quais-sao-as-formas-de-doacao-para-ajudar-a-associacao-20210104131921.jpg.jpg?fit=800%2C429&ssl=1",
    },

    {
      id: 1,
      nomeInst: "Instituição de Roupas",
      categoria: 1,
      imagem:
      "https://thumbs.dreamstime.com/b/ilustra%C3%A7%C3%A3o-feita-%C3%A0-m%C3%A3o-do-conceito-de-caridade-doa%C3%A7%C3%A3o-roupas-elementos-estilo-desenho-rabisco-da-caixa-para-o-%C3%ADcone-banner-172184835.jpg",
    },

    {
      id: 2,
      nomeInst: "Instituição de Livros",
      categoria: 0,
      imagem:
        "https://www.prorim.org.br/wp-content/uploads/sites/4/2019/08/QUERO-DOAR-1.png",
    },

    {
      id: 3,
      nomeInst: "Instituição de Brinquedos",
      categoria: 3,
      imagem:
        "https://lh3.googleusercontent.com/proxy/14iepgMChkHj2yujRaG8kFahSj_YyS9ZI9nPSwAphP3_w9smdPC-WM39Z7gRQd-MkwUBI9ma0hrUlnPDzG0OV4XHFXoMa1FiPSbnPcTvC-ZoYQPbOy2EaX05syhOY8QCWKDIS89NE7EaS5w8wCvmoax-AXqMUzc-dfvGYgLw8OS-C8UQ7w0WS8BUw92_qovnWkOeq7tW_WuEtjATvXh5JG9kCQ",
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
      colocarIMG += `<div class="carousel-item active" data-bs-interval="400">`;

      //--- adicionando o indicador no carrossel ---
      colocarIndicador += `<li data-target="#carouselExampleIndicators" data-slide-to="${i}" class="active" ></li>`;
    } else {
      //--- adicionando a div do carrossel ---
      colocarIMG += `<div class="carousel-item" data-bs-interval="400">`;

      //--- adicionando o indicador no carrossel ---
      colocarIndicador += `<li data-target="#carouselExampleIndicators" data-slide-to="${i}" ></li>`;
    }

    colocarIMG += `<img class="img_car" src="${imgInfo.imagem}" alt="ID ${imgInfo.id}" width="100%" height="450">
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
