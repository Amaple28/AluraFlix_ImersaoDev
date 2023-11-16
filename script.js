//Lista Filmes
var listaFilmes = [ "https://cinepop.com.br/wp-content/uploads/2017/07/homemaranha-2.jpg",
                    "https://www.cineplayers.com/sites/default/files/styles/poster/public/posters/28358_poster.jpg?itok=oAIArat_",
                    "https://img.elo7.com.br/product/zoom/2677A3D/big-poster-filme-homem-aranha-de-volta-ao-lar-lo06-90x60-cm-homem-aranha-de-volta-ao-lar.jpg"
                ];

var nomeFilmes = ["Homem Aranha 2", "Homem Aranha 3", "Homem Aranha de Volta ao Lar"];

//percorre filmes e exibe na tela
for (var i = 0; i < listaFilmes.length; i++) {
    document.write("<img src=" + listaFilmes[i] + ">");
    document.write('<p class="text-white text-center">' + nomeFilmes[i] + "</p>");
}

