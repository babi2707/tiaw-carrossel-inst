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

  //------- guardando os dados fakes no localStorage -------
  localStorage.setItem("fakes", JSON.stringify(imagens));

  //------- apresentar as imagens do localStorage -------
  var divImagens = document.getElementById("carrossel_img");
  var imgs = JSON.parse(localStorage.getItem("fakes"));

  let colocar = "";

  for (let i = 0; i < imgs.lenght; i++) {
    let imgInfo = imgs[i];

    if (i == 0) {
      colocar += `<div class="carousel-item active">`;
    } else {
      colocar += `<div class="carousel-item">`;
    }

    colocar += `<img class="img_car" src="${imgInfo.imagem}" alt="ID ${imgInfo.id}" width="100" height="100">
      </div>`;
  }

  divImagens.innerHTML = colocar;
};
