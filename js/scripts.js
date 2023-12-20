// MILESTONE 0

const ourTeam = [{
    name: 'Wayne Barnett',
    role: 'Founder & CEO',	        
    image: 'wayne-barnett-founder-ceo.jpg',
},
{
    name: 'Angela Caroll',		        
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
},
{
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
},
{
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
},
{
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
},
{
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
}
];

// MILESTONE 1

for (let i = 0; i < ourTeam.length; i++){
    console.log(ourTeam[i].name, ourTeam[i].role, ourTeam[i].image)
}

// MILESTONE 2

const ourTeamList = document.querySelector('.team-layout');

for (let i = 0; i < ourTeam.length; i++){
    ourTeamList.innerHTML += `
        <h2>
            ${ourTeam[i].name}
        </h2>
        <h4>
            ${ourTeam[i].role}
        </h4>
        <div>
            <img src="img/${ourTeam[i].image}" alt="">
        </div>
    `;
}