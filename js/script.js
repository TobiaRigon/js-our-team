
const teamDiv = document.getElementById("team_div");

// Creare l’array di oggetti con le informazioni fornite.
let team = [
  {
      nome: "Wayne Barnett",
      ruolo: "Founder & CEO",
      immagine: "img/wayne-barnett-founder-ceo.jpg"
  },
  {
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    immagine: "img/angela-caroll-chief-editor.jpg"
  },
  {
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    immagine: "img/walter-gordon-office-manager.jpg"
  },
  {
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    immagine: "img/angela-lopez-social-media-manager.jpg"
  },
  {
    nome: "Scott Estrada",
    ruolo: "Developer",
    immagine: "img/scott-estrada-developer.jpg"
  },
  {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    immagine: "img/barbara-ramos-graphic-designer.jpg"
  }
  
];

// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < team.length; i++) {
  console.log("Nome: " + team[i].nome);
  console.log("Ruolo: " + team[i].ruolo);
  console.log("Immagine: " + team[i].immagine);
  // riga vuota
  console.log("\n");
};

// Stampare le stesse informazioni su DOM sotto forma di stringhe
for (let i = 0; i < team.length; i++) {
  teamDiv.innerHTML += ("Nome: " + team[i].nome + "</br>");
  teamDiv.innerHTML += ("Ruolo: " + team[i].ruolo + "</br>");
  teamDiv.innerHTML += ('<img src="' + team[i].immagine +  '" alt=""></img>'
     + "</br>");
  // riga vuota
  teamDiv.innerHTML += ("</br>");
};