import initAtivarLink from './modules/ativarLinks.js';
import initAtivarOrcamento from './modules/ativarOrcamento.js';
import initPerguntasFrequentes from './modules/perguntasFrequentes.js';
import initGaleriaBicicleta from './modules/galeriaBicicleta.js';

initAtivarLink();
initAtivarOrcamento();
initPerguntasFrequentes();
initGaleriaBicicleta();

//Animação do site Bikcraft
if (window.SimpleAnime) {
    new SimpleAnime();
}