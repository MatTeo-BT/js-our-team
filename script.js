const teamList= [
    { nome: "Wayne Barnet", ruolo: "Founder & CEO", foto: "wayne-barnett-founder-ceo.jpg" },
    { nome: "Angela Caroll", ruolo: "Chief Editor", foto: "angela-caroll-chief-editor.jpg" },
    { nome: "Walter Gordon", ruolo: "Office Manager", foto: "walter-gordon-office-manager.jpg" },
    { nome: "Angela Lopez", ruolo: "Social Media Manager", foto: "angela-lopez-social-media-manager.jpg" },
    { nome: "Scott Estrada", ruolo: "Developer", foto: "scott-estrada-developer.jpg" },
    { nome: "Barbara Ramos", ruolo: "Graphic Designer", foto: "barbara-ramos-graphic-designer.jpg" },
];

const containerEl = document.getElementById('container');

for (let i = 0; i < teamList.length; i++) {
    const member = teamList[i];

    const divEl = document.createElement('div');
    divEl.classList.add('card'); 

    
    const imgEl = document.createElement('img');
    imgEl.src = `img/${member.foto}`;

    const textEl = document.createElement('p');
    textEl.textContent = `${member.nome}, ${member.ruolo}`;

    divEl.appendChild(imgEl);
    divEl.appendChild(textEl);

    
    containerEl.appendChild(divEl);
}