const teamMember = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg'
    },
]
const btnSend = document.querySelector('.btn.btn-success'); // Correzione del selettore
btnSend.addEventListener('click', (e) => {
    e.preventDefault();
    const nameVal = document.getElementById('name').value;
    const roleVal = document.getElementById('role').value;
    const photoVal = document.getElementById('photo').value;
    const newMember = {
        nome: nameVal,
        role: roleVal,
        photo: photoVal,
    }
    teamMember.push(newMember);
    
});


consolePrintTeamMember()

createListOfTeamMemberWithImage()

printInDomWithCard()



function consolePrintTeamMember() {
    for (let val of teamMember) {
        console.log(`
        Nome: ${val.name};
        Ruolo:${val.role};
        Nome foto:${val.photo};
        `);
    }
}

/*function createListOfTeamMember(){
    const bodyEl = document.querySelector('body');
    const ulEl = document.createElement('ul');
    bodyEl.appendChild(ulEl);
    for(let i=0; i<teamMember.length; i++){
        const liEl = document.createElement('li');
        liEl.innerHTML = `Nome: ${teamMember[i].name}; &nbsp Ruolo:${teamMember[i].role}; &nbsp Nome foto:${teamMember[i].photo};`
        ulEl.appendChild(liEl);
    }
}*/

function createListOfTeamMemberWithImage() {
    const containerEl = document.querySelector('.container-fluid');
    const divListEl = document.createElement('div');
    divListEl.setAttribute('id', 'list');
    containerEl.appendChild(divListEl);
    const ulEl = document.createElement('ul');
    divListEl.appendChild(ulEl);
    for (let i = 0; i < teamMember.length; i++) {
        const liEl = document.createElement('li');
        liEl.innerHTML = `Nome: ${teamMember[i].name}; &nbsp Ruolo:${teamMember[i].role}; &nbsp <img src="img/${teamMember[i].photo}" class="w-25 p-4" <img src="img/${teamMember[i].photo}>">`
        // liEl.innerHTML +=`<img src="img/${teamMember[i].photo}>"`;
        ulEl.appendChild(liEl);
    }
}

function printInDomWithCard() {
    const containerEl = document.querySelector('.container-fluid');
    const cardIdEl = document.createElement('div');
    cardIdEl.setAttribute('id', 'cards');
    containerEl.appendChild(cardIdEl);
    const rowEl = document.createElement('div');
    rowEl.setAttribute('class', 'my-row');
    // rowEl.classList.add('')
    const colEl = document.createElement('div');
    colEl.setAttribute('class', 'col');
    cardIdEl.appendChild(rowEl);


    for (let i = 0; i < teamMember.length; i++) {
        const colEl = document.createElement('div');
        // colEl.setAttribute('class', 'cards');
        colEl.classList.add('my-card');
        rowEl.appendChild(colEl);
        colEl.innerHTML = `
        <img src="img/${teamMember[i].photo}">`;
        colEl.innerHTML += `<h3 class="text-center">${teamMember[i].name}</h3>`;
        colEl.innerHTML += `<p class="text-center">${teamMember[i].role}<p>`;
    }
}


