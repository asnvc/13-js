console.clear();
/*
SWITCH (panasus i if)
*/

const diena = 1

switch (diena) {
    case 1:
        console.log('pirmadienis');
        break;
    case 2:
        console.log('antradienis');
            break;
    case 3:
        console.log('treciadienis');
            break;
    case 4:
        console.log('ketvirtadienis');
            break;
    case 5:
            console.log('penktadienis');
            break;
    case 6:
        console.log('sestadienis');
        break;
    case 7:
        console.log('sekmadienis');
        break;
        
    default:
        console.log('tokios dienos savaiteje nera');
        break
}

const day = 1

switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('darbo diena');
        break;
    
    case 6:
    case 7:
        console.log('savaitgalis');
        break;
        
    default:
        console.log('tokios dienos savaiteje nera');
        break
}

console.log('------------');

const gamybosEtapas = 1;

switch (gamybosEtapas) {
    case 1:
        console.log('pasiimti puodeli');
        
    case 2:
        console.log('isideti arbatos (pakelis/arbatzoles)');
       
    case 3:
        console.log('isideti cukru/saldikli/nieko');
        
    case 4:
        console.log('isipilti vandens');
        
    case 5:
        console.log('gerti');
        break;

    default:
        console.log('tokio etapo nera');
        break;
}

console.log('---------');

const stotele = 'Parko';

switch (stotele) {
    case 'Parko':
    console.log('Parko stotele');

    case 'Geniu':
    console.log('Geniu stotele');

    case 'Tremtiniu':
    console.log('Tremtiniu stotele');
 
    case 'Rudens':
    console.log('Rudens stotele');

    case 'Karaliaus Mindaugo':
    console.log('Karaliaus Mindaugo stotele');

    case 'Zaliasis Tiltas':
    console.log('Zaliasis Tiltas stotele');

    case 'Lvovo':
    console.log('Lvovo stotele');

    case 'Vasaros':
    console.log('Vasaros stotele');

    case 'Rudens 2':
    console.log('Rudens2 stotele');

    case 'Tremtiniu2':
    console.log('Tremtiniu2 stotele');

    case 'Geniu2':
    console.log('Geniu2 stotele');

    case 'Naujos Vilnios Ziedas':
    console.log('Naujosios Vilnios Ziedas stotele');
    break;

    default:
        console.log('Tokios stoteles nera');
        break;
}