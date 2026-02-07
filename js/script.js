/* ---------------- CONFIG ---------------- */

const CONFIG = {
  tela: {
    min: 600,
    max: 1080,
    larguraBase: 1366,
  },
  animacao: {
    duracao: 350,
  },
};

/* ---------------- POSIÇÕES ---------------- */

const POSICOES = {
  flex: {
    ettore: { top: 0.1335, left: 0.33, height: 0.85 },
    grodnar: { top: 0.3, left: 0.194, height: 0.684 },
    konrad: { top: 0.13, left: 0.08, height: 0.85 },
    jehan: { top: 0.21, left: 0.39, height: 0.87 },
    helbert: { top: 0.12, left: 0.455, height: 0.9 },
    sarah: { top: 0.31, left: 0.524, height: 0.75 },
    solacruz: { top: 0.245, left: 0.634, height: 0.8 },
    rocco: { top: 0.154, left: 0.703, height: 0.85 },
  },

  pixel: {
    ettore: { top: 80, left: 440, minHeight: 510 },
    grodnar: { top: 180, left: 265, minHeight: 410 },
    konrad: { top: 78, left: 109, minHeight: 510 },
    jehan: { top: 126, left: 532, minHeight: 522 },
    helbert: { top: 72, left: 621, minHeight: 540 },
    sarah: { top: 186, left: 715, minHeight: 450 },
    solacruz: { top: 147, left: 866, minHeight: 480 },
    rocco: { top: 92, left: 960, minHeight: 510 },
  },

  charPosition: {
    konrad: "direito",
    grodnar: "esquerdo",
    ettore: "direito",
    jehan: "esquerdo",
    helbert: "direito",
    sarah: "esquerdo",
    solacruz: "direito",
    rocco: "esquerdo",
  },
};

/* ---------------- DOM ---------------- */

const DOM = {
  box: document.getElementById("box"),
  thumbs: document.querySelectorAll(".thumb"),
  monteDireito: document.getElementById("monte-direito"),
  monteEsquerdo: document.getElementById("monte-esquerdo"),
  voltar: document.getElementById("voltar"),
  infoThumb: document.getElementById("info-thumb"),
  title: document.getElementById("title"),
  infoChar: document.getElementById("info-char"),
  menu: document.getElementById("menu"),
  foundy: document.getElementById("foundry"),
  blog: document.getElementById("blog"),
};

/* ---------------- INFO ---------------- */
const INFO = {
  grodnar: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo nunc, maximus a lacus eu, imperdiet sollicitudin enim. Suspendisse elit purus, hendrerit rutrum imperdiet ut, porta non enim. Etiam eleifend scelerisque dui condimentum euismod. Quisque mattis vitae libero at sollicitudin. Proin sollicitudin semper orci, quis malesuada metus mattis et. <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo nunc, maximus a lacus eu, imperdiet sollicitudin enim. Suspendisse elit purus, hendrerit rutrum imperdiet ut, porta non enim. Etiam eleifend scelerisque dui condimentum euismod. Quisque mattis vitae libero at sollicitudin. Proin sollicitudin semper orci, quis malesuada metus mattis et.`,
  konrad: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo nunc, maximus a lacus eu, imperdiet sollicitudin enim. Suspendisse elit purus, hendrerit rutrum imperdiet ut, porta non enim. Etiam eleifend scelerisque dui condimentum euismod. Quisque mattis vitae libero at sollicitudin. Proin sollicitudin semper orci, quis malesuada metus mattis et. <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo nunc, maximus a lacus eu, imperdiet sollicitudin enim. Suspendisse elit purus, hendrerit rutrum imperdiet ut, porta non enim. Etiam eleifend scelerisque dui condimentum euismod. Quisque mattis vitae libero at sollicitudin. Proin sollicitudin semper orci, quis malesuada metus mattis et.`,
  ettore: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo nunc, maximus a lacus eu, imperdiet sollicitudin enim. Suspendisse elit purus, hendrerit rutrum imperdiet ut, porta non enim. Etiam eleifend scelerisque dui condimentum euismod. Quisque mattis vitae libero at sollicitudin. Proin sollicitudin semper orci, quis malesuada metus mattis et. <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo nunc, maximus a lacus eu, imperdiet sollicitudin enim. Suspendisse elit purus, hendrerit rutrum imperdiet ut, porta non enim. Etiam eleifend scelerisque dui condimentum euismod. Quisque mattis vitae libero at sollicitudin. Proin sollicitudin semper orci, quis malesuada metus mattis et.`,
  jehan: `Sou Jehan Faugrive, Cavaleiro Errante de Bretonnia, filho da Casa Faugrive das colinas ao sul de Carcassonne.<br>
  Minha família não é grande nem poderosa, mas é antiga, e nossa honra sempre foi mantida com devoção à Dama do Lago e firmeza no campo de batalha. Cresci ouvindo histórias de cavaleiros que enfrentaram monstros, salvaram inocentes e buscaram o Graal não pela glória, mas pela pureza de propósito. Essas histórias não eram apenas lendas para mim — eram promessas.
  Sou o filho mais jovem de minha casa. Meus irmãos foram moldados para guerra e política. Eu fui criado entre orações, histórias e o vento que sopra das colinas. Foi minha mãe quem me ensinou que coragem não nasce da força, mas da fé. Foi ela quem me ensinou que a verdadeira honra é aquilo que um cavaleiro mantém mesmo quando ninguém está olhando.
  Meu pai nunca esperou muito de mim. Talvez por isso eu tenha aprendido a esperar muito de mim mesmo.<br>
  Treinei espada e lança como qualquer nobre de Bretonnia, mas nunca lutei por ambição ou poder. Para mim, cada combate é uma prova, cada jornada é um voto silencioso à Dama. Carrego o lema de minha família como guia para cada decisão que tomo: Olhos no Céu, Honra no Coração.
  Parti de Bretonnia montado em minha fiel égua, Litière, buscando feitos dignos da tradição que carrego. O mundo além das fronteiras de minha terra é mais duro, mais sombrio e, muitas vezes, menos nobre do que as histórias que ouvi na infância. Ainda assim, acredito que o dever de um cavaleiro é levar luz onde ela já não existe.
  Viajo agora ao lado de companheiros que não seguem os códigos de Bretonnia, mas que provaram possuir coragem, lealdade e força diante de horrores que poucos cavaleiros enfrentariam sem hesitar. Com eles, aprendi que honra pode assumir formas diferentes… mas continua sendo algo que precisa ser defendido.<br>
  Meu objetivo permanece o mesmo desde o dia em que deixei minha casa: trilhar um caminho digno da Dama, proteger aqueles que não podem se defender e, um dia, provar que minha fé não foi em vão.<br>
  Se cruzar meu caminho, encontrará um cavaleiro que ainda acredita que o mundo pode ser melhor do que é — e que está disposto a lutar para que isso seja verdade.`,
  helbert: `Sou Helverth. Apenas Helverth, para a maioria.<br>
  Nasci em Carroburg, sob os estandartes de Middenland, uma cidade que ensina cedo que honra e ambição caminham lado a lado — e que nem sempre é possível distingui-las. Fui criado entre muralhas antigas, histórias de guerra e o som constante do aço sendo preparado para conflitos que nunca deixam de chegar.<br>
  Não fui criado para a vida que escolhi.
  Fui moldado por ela.<br>
  Desde jovem, encontrei meu lar nos quartéis e campos de treinamento do Império. Foi ali que aprendi que disciplina mantém homens vivos, que formação é mais importante que bravura, e que a verdadeira coragem não está em avançar sem medo, mas em permanecer firme quando o medo é inevitável.<br>
  Luto pelo Império, sim — mas não pelas glórias cantadas em tavernas ou pelos títulos que homens ambiciosos disputam em salões iluminados. Luto pelos soldados que marcham sem nome, pelos civis que jamais empunharão uma lâmina, e por aqueles que acreditam que a ordem ainda pode existir em um mundo que insiste em afundar no caos.<br>
  Carrego comigo lições que não foram aprendidas em livros nem em cerimônias. Aprendi que monstros não habitam apenas florestas e ruínas antigas. Alguns usam selos, mantos e palavras educadas. Contra esses inimigos, a espada sozinha raramente é suficiente. É preciso paciência. É preciso observar. É preciso sobreviver.<br>
  Hoje, sigo meu caminho como soldado do Império, buscando aperfeiçoar minha posição, minha influência e minha compreensão do mundo que juramos proteger. Não sou o homem mais falante, nem o mais celebrado, mas sou alguém que permanece quando outros recuam.<br>
  Meu dever é simples: manter-me de pé, proteger aqueles que não podem se proteger e, quando chegar a hora certa, garantir que certas dívidas antigas sejam cobradas — não por vingança cega, mas por justiça que o tempo não conseguiu enterrar.<br>
  Se lutarmos lado a lado, você terá em mim alguém que não abandona sua formação, sua palavra ou seus companheiros.<br>
  E, enquanto eu respirar, o estandarte sob o qual marcho não cairá sem resistência.`,
  sarah: `Sou Sarah Everstein, serva de Shallya, a Deusa da Misericórdia.<br>
  Minha vida começou com uma ausência. Meu pai desapareceu na Guerra dos Picos Sombrios antes que eu pudesse conhecê-lo de verdade. Minha mãe tentou manter nossa família unida, mas a guerra deixa marcas que nem o tempo consegue curar. Quando a doença a consumiu, ela me deixou aos cuidados do Templo de Shallya, carregando apenas um medalhão… e perguntas que ainda não encontrei coragem para responder.<br>
  Foi entre os muros do templo que encontrei propósito. Aprendi que a dor é inevitável neste mundo, mas o sofrimento não precisa ser enfrentado sozinho. Shallya ensina que cada vida possui valor, mesmo aquelas que o Velho Mundo insiste em esquecer. Desde então, dedico minhas mãos e minha fé para aliviar a dor dos outros, mesmo quando sei que nem todas as feridas podem ser fechadas.<br>
  Nem sempre fui forte. Durante a infância, sobrevivi graças à proteção de uma amiga que ainda caminha ao meu lado, Solacruz. Onde ela é aço e fogo, eu sou prece e cura. Durante anos, nossas vidas seguiram caminhos diferentes… até que o destino nos reuniu novamente através de um jovem aprendiz ferido chamado Rocco. Desde então, seguimos juntos, cada um cumprindo seu papel — proteger, destruir e restaurar o que restar.<br>
  Viajar com mercenários nunca foi o destino que imaginei para mim. Ainda assim, aprendi que misericórdia não pertence apenas aos templos. Ela também precisa existir nas estradas, nos campos de batalha e nos lugares onde a esperança costuma morrer primeiro.
  Carrego minha fé como outros carregam espadas. Não para julgar, mas para lembrar que até mesmo aqueles que caem nas sombras podem merecer compaixão… ou redenção.<br>
  Se encontrar meu caminho, saiba que farei tudo o que estiver ao meu alcance para preservar a vida. Mas também aprendi que, às vezes, misericórdia significa permanecer firme quando o mundo insiste em quebrar aqueles que lutam ao nosso lado.<br>
  Rezo para que a luz de Shallya alcance todos que ainda acreditam que vale a pena continuar.`,
  solacruz: `Podem me chamar de Solacruz. É o meu sobrenome. Eu prefiro assim. Meu primeiro nome não é importante… Não é nada demais, na verdade. Eu trabalho como guarda na vigia da escola. É um lugar espaçoso, silencioso… Combina comigo. Eu não sou muito extrovertida, mas… eu tenho amigos. Dois. Meus melhores amigos, na verdade.
  <br> A Sarah… ela é uma freira de Shallya. Muito gentil, sempre sabe o que dizer, mesmo quando eu não digo nada. Conheço ela desde a infância, e desde essa época, faz meus curativos e limpa minhas feridas. E Rocco… ele estuda na Escola do Fogo. Conheci ele de detenção, por coincidência. Era a mesma sala que eu fui inspecionar. Me ganhou no carisma, acredita? Gosto muito de beber com eles, de apostar com eles.`,
  rocco: `Sou Rocco Niekisch, nascido em Ubersreik, filho de ferreiros que nunca entenderam por que o fogo me acompanhava antes mesmo de eu aprender a temê-lo. Desde criança, chamas surgiam onde havia raiva, medo ou conflito — moedas derretiam em minhas mãos, brigas terminavam em cinzas, e olhares desconfiados me seguiam por onde eu ia. Muitos chamavam de maldição. Eu chamava de sobrevivência. Minha vida mudou numa noite sob Morrslieb, quando uma briga com um oficial corrupto incendiou uma taverna inteira e me deixou diante de uma escolha simples: prisão… ou a Escola Aqshy. Escolhi o fogo disciplinado, não por redenção, mas porque compreendi que, se já carregava uma chama dentro de mim, aprenderia a moldá-la em algo que o mundo fosse obrigado a respeitar.<br>Desde então, caminhei entre estudos arcanos, estradas perigosas e decisões moralmente duvidosas. Viajo com companheiros que se tornaram mais do que aliados: Sarah, que me ensinou que o fogo também pode ser usado para proteger; Grodnar, prova viva de que força bruta, jogatina e boa cerveja ainda resolvem muitos problemas; e Solacruz, minha companheira desde os tempos de detenção na Escola Aqshy, e que já me salvou tantas vezes que, dizer que devo minha vida à ela, ainda é pouco. Não escondo minhas ambições — quero viver a vida ao máximo e ser lembrado como um dos maiores conjuradores de chamas do Império. Já usei meu dom para salvar inocentes e sofri ao queimar corpos de quem não pude salvar, e cada memória ainda arde dentro de mim. O fogo pode aquecer, iluminar e proteger… mas, quando provocado, consome tudo. E contra aqueles que ameaçam os meus, eu não sou apenas um mago — eu sou o incêndio.`,
};

/* ---------------- LAYOUT ---------------- */

const Layout = {
  getTipo(vh) {
    if (vh > CONFIG.tela.max) return "flex";
    if (vh >= CONFIG.tela.min) return "intermediario";
    return "menor";
  },
};

/* ---------------- STYLE ---------------- */

const Style = {
  base(img) {
    Object.assign(img.style, {
      position: "absolute",
      transition: "transform 0.4s ease, opacity 0.3s ease",
      transform: "translate(0,0)",
      width: "auto",
      opacity: "1",
    });
  },

  aplicarFlex(img, p, vw, vh) {
    this.base(img);
    img.style.top = p.top * vh + "px";
    img.style.left = p.left * vw + "px";
    img.style.height = p.height * vh + "px";
  },

  aplicarPixel(img, p, vw, vh, tipo) {
    this.base(img);

    const escalaW = vw / CONFIG.tela.larguraBase;
    let top = p.top;
    let left = p.left * escalaW;

    if (tipo === "intermediario") top += vh - CONFIG.tela.min;
    if (tipo === "menor") top *= vh / CONFIG.tela.min;

    img.style.top = top + "px";
    img.style.left = left + "px";
    img.style.height = p.minHeight + "px";
  },
};

/* ---------------- THUMBS ---------------- */

const Thumbs = {
  ativa() {
    return document.querySelector(".thumb.active");
  },

  esconderOutras(atual) {
    DOM.thumbs.forEach((img) => {
      if (img === atual) return;

      img.style.opacity = "0";
      img.style.pointerEvents = "none";

      setTimeout(() => {
        img.style.display = "none";
      }, CONFIG.animacao.duracao);
    });
  },

  mostrarTodas() {
    DOM.thumbs.forEach((img) => {
      img.style.display = "block";
      img.style.pointerEvents = "auto";
      img.offsetHeight;
      img.style.opacity = "1";
    });
  },

  posicionarAtiva(img, vw, vh) {
    const lado = POSICOES.charPosition[img.id] || "direito";
    const paddingTop = vh * 0.15;
    const paddingLateral = vw * 0.2;

    /* FIRST */
    const first = img.getBoundingClientRect();

    /* FINAL (sem transition) */
    img.style.transition = "none";
    img.style.position = "absolute";
    img.style.top = paddingTop + "px";
    img.style.height = "90vh";
    img.style.width = "auto";
    img.style.pointerEvents = "none";

    img.style.left = "auto";
    img.style.right = "auto";

    if (lado === "direito") {
      img.style.right = paddingLateral + "px";
    } else {
      img.style.left = paddingLateral + "px";
    }

    /* REFLOW */
    img.offsetHeight;

    /* LAST */
    const last = img.getBoundingClientRect();
    const deltaX = first.left - last.left;
    const deltaY = first.top - last.top;

    /* INVERT */
    img.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

    /* PLAY */
    requestAnimationFrame(() => {
      img.style.transition = "transform 0.4s ease";
      img.style.transform = "translate(0,0)";
    });
  },

  animarRetorno(img) {
    if (!img) return;

    /* FIRST */
    const first = img.getBoundingClientRect();

    img.classList.remove("active");
    aplicarPosicoes();

    /* REFLOW */
    img.offsetHeight;

    /* LAST */
    const last = img.getBoundingClientRect();
    const deltaX = first.left - last.left;
    const deltaY = first.top - last.top;

    /* INVERT */
    img.style.transition = "none";
    img.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

    /* PLAY */
    requestAnimationFrame(() => {
      img.style.transition = "transform 0.4s ease";
      img.style.transform = "translate(0,0)";
    });
  },
};

const InfoThumb = {
  trocar(id) {
    const data = INFO[id];
    if (!data) return;

    const ladoChar = POSICOES.charPosition[id] || "direito";
    const ladoInfo = ladoChar === "direito" ? "esquerdo" : "direito";

    DOM.infoThumb.classList.remove("direito", "esquerdo");
    DOM.infoThumb.classList.add(ladoInfo);

    DOM.title.innerHTML = `<img src="assets/titulos/${id}.svg">`;
    DOM.infoChar.innerHTML = data;

    DOM.infoThumb.classList.add("in");
  },

  esconder() {
    DOM.infoThumb.classList.remove("in");
  },
};

/* ---------------- UI ---------------- */

const UI = {
  esconderMontes() {
    DOM.monteDireito.classList.add("out");
    DOM.monteEsquerdo.classList.add("out");
  },

  mostrarMontes() {
    DOM.monteDireito.classList.remove("out");
    DOM.monteEsquerdo.classList.remove("out");
  },

  mostrarVoltar() {
    DOM.voltar.classList.add("in");
  },

  esconderVoltar() {
    DOM.voltar.classList.remove("in");
  },
};

/* ---------------- BACKGROUND ---------------- */

const Background = {
  trocar(bgId) {
    DOM.box.classList.add("fade");

    setTimeout(() => {
      DOM.box.style.backgroundImage = `url('assets/fundos/${bgId}.png')`;
      DOM.box.classList.add("blur");
      DOM.box.classList.remove("fade");
    }, 400);
  },
};

/* ---------------- POSICIONAMENTO ---------------- */

function aplicarPosicoes() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const tipo = Layout.getTipo(vh);
  const ativa = Thumbs.ativa();

  DOM.thumbs.forEach((img) => {
    if (img === ativa) return;

    const id = img.id;

    if (tipo === "flex" && POSICOES.flex[id]) {
      Style.aplicarFlex(img, POSICOES.flex[id], vw, vh);
    } else if (POSICOES.pixel[id]) {
      Style.aplicarPixel(img, POSICOES.pixel[id], vw, vh, tipo);
    }
  });
}

/* ---------------- CONTROLE DE ESTADO ---------------- */

function setThumbAtiva(img) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const ativaAtual = Thumbs.ativa();

  // DESATIVAR
  if (!img || img === ativaAtual) {
    if (!ativaAtual) return;

    Thumbs.mostrarTodas();
    Thumbs.animarRetorno(ativaAtual);
    UI.mostrarMontes();
    UI.esconderVoltar();
    DOM.box.classList.add("fade");
    return;
  }

  // ATIVAR
  DOM.thumbs.forEach((t) => t.classList.remove("active"));
  img.classList.add("active");

  Thumbs.posicionarAtiva(img, vw, vh);
  Thumbs.esconderOutras(img);
  UI.esconderMontes();
  UI.mostrarVoltar();
}

/* ---------------- EVENTOS ---------------- */

window.addEventListener("resize", aplicarPosicoes);
aplicarPosicoes();

DOM.voltar.addEventListener("click", () => {
  setThumbAtiva(null);
  InfoThumb.esconder();
  DOM.menu.classList.remove("up");
});

DOM.thumbs.forEach((img) => {
  img.addEventListener("click", () => {
    const bgId = img.dataset.bg;
    InfoThumb.trocar(img.id);
    setThumbAtiva(img);
    Background.trocar(bgId);
    DOM.menu.classList.add("up");
  });
});

DOM.blog.addEventListener("click", () => {
  window.location.href = "https://blog.1nodado.com.br/"; // URL do blog
});

DOM.foundy.addEventListener("click", () => {
  window.location.href = "https://foundry.1nodado.com.br/join"; // URL da foundry
});
