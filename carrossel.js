onload = () => {
    //---------- dados fakes ----------
    var imagens = [
      {
        id: 0,
        nomeInst: "Instituição de Caridade",
        categoria: 0,
        imagem: "logo2.png",
      },
  
      {
        id: 1,
        nomeInst: "Instituição de Roupas",
        categoria: 1,
        imagem: "logo4.png",
      },
  
      {
        id: 2,
        nomeInst: "Instituição de Livros",
        categoria: 0,
        imagem: "logo3.png",
      },
  
      {
        id: 3,
        nomeInst: "Instituição de Brinquedos",
        categoria: 3,
        imagem: "logo4.png",
      },
    ];
  
    localStorage.setItem("fakes", JSON.stringify(imagens));

    let carrossel = document.getElementById('img_carrossel');

    let imgs = '';

    let fakes = imagens;

    for (let i = 0; i < fakes.lenght; i++)
    {
        let src = fakes[i];

        if (i == 0) 
        {
            imgs += `<div class="carousel-item active">`;
        }
        else 
        {
            imgs += `<div class="carousel-item">`;
        }

        imgs += `<img src="${src.imagem}" alt="Imagem ${i}" >`;
    };

    carrossel.innerHTML = imgs;

  };
  