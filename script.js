// Dummy data (replace with your data)
const people = [
// Matriz
{ name: 'MATRIZ - RECEPÇÃO', number: '6500' },
{ name: 'MATRIZ - SAMUEL LOCKS', number: '6511' },
{ name: 'MATRIZ - ORLANDO POLATO', number: '6512' },
{ name: 'MATRIZ - GERSON TRENHAGO', number: '6529' },
{ name: 'MATRIZ - CRISTIANO CAMARGO', number: '6526' },
{ name: 'MATRIZ - AILTON TAVARES', number: '6514' },
{ name: 'MATRIZ - DANIELLE FLAVIA', number: '6515' },
{ name: 'MATRIZ - CARMEN SERPA', number: '6545' },
{ name: 'MATRIZ - VIRLAINEY', number: '6584' },
{ name: 'MATRIZ - JOSE EUDES', number: '6547' },
{ name: 'MATRIZ - YANKA MARA', number: '6548' },
{ name: 'MATRIZ - JESSICA SILVA', number: '6549' },
{ name: 'MATRIZ - DOUGLAS PEREIRA', number: '6550' },
{ name: 'MATRIZ - ANA SILVA', number: '6551' },
{ name: 'MATRIZ - FRANCISLAINE', number: '6552' },
{ name: 'MATRIZ - FLAVIA CAMPOS', number: '6554' },
{ name: 'MATRIZ - LEONARDO PEREIRA', number: '6518' },
{ name: 'MATRIZ - HENRIQUE BARBOSA', number: '6540' },
{ name: 'MATRIZ - GABRIEL MARQUES', number: '6541' },
{ name: 'MATRIZ - RODRIGO SILVA', number: '6543' },
{ name: 'MATRIZ - MAIKON LARA', number: '6544' },
{ name: 'MATRIZ - JUZZENE BARCELOS', number: '6516' },
{ name: 'MATRIZ - KATIA MOSQUEM', number: '6522' },
{ name: 'MATRIZ - AMINADABES', number: '6561' },
{ name: 'MATRIZ - EDUARDO CARDOSO', number: '6562' },
{ name: 'MATRIZ - PORTA HALL', number: '6564' },
{ name: 'MATRIZ - LUCAS ZEFERINO', number: '6565' },
{ name: 'MATRIZ - EDILAINE ALVES', number: '6566' },
{ name: 'MATRIZ - KARINE QUEIROZ', number: '6567' },
{ name: 'MATRIZ - RONNY FIXINA', number: '6578' },
{ name: 'MATRIZ - LEANDRO MATOS', number: '6517' },
{ name: 'MATRIZ - VICTOR JESUS', number: '6530' },
{ name: 'MATRIZ - JOELLITON BOAS', number: '6531' },
{ name: 'MATRIZ - EMERSON OLIVEIRA', number: '6532' },
{ name: 'MATRIZ - MAICON LEIZ', number: '6533' },
{ name: 'MATRIZ - ERNANDES', number: '6534' },
{ name: 'MATRIZ - KAROLINE MATOS', number: '6535' },
{ name: 'MATRIZ - GEAN HENRIQUE', number: '6563' },
{ name: 'MATRIZ - GISLAYNE CRUZ', number: '6536' },
{ name: 'MATRIZ - CARLOS VITOR', number: '6537' },
{ name: 'MATRIZ - ALESANDRO LIMA', number: '6574' },
{ name: 'MATRIZ - MARCOS COLOMBO', number: '6519' },
{ name: 'MATRIZ - EDILAINE CASSIA', number: '6555' },
{ name: 'MATRIZ - NATIELE VINHAL', number: '6556' },
{ name: 'MATRIZ - ALESSANDRA GALDINO', number: '6580' },
{ name: 'MATRIZ - CLAUDIO ZANCHIN', number: '6520' },
{ name: 'MATRIZ - SUENI ASSIS', number: '6557' },
{ name: 'MATRIZ - PAULO BARONE', number: '6521' },
{ name: 'MATRIZ - TABATA VASCONCELOS', number: '6527' },
{ name: 'MATRIZ - MARIA HELENA', number: '6528' },
{ name: 'MATRIZ - YASMIN SANTOS', number: '6513' },
{ name: 'MATRIZ - DANILLO CESAR', number: '6523' },
{ name: 'MATRIZ - AMANDA', number: '6568' },
{ name: 'MATRIZ - JOYCE MORAES', number: '6569' },
{ name: 'MATRIZ - EDIANA OLIVEIRA', number: '6570' },
{ name: 'MATRIZ - MARICELY TEIXEIRA', number: '6571' },
{ name: 'MATRIZ - MARIA SANTO', number: '6572' },
{ name: 'MATRIZ - LUCIA SOUZA', number: '6575' },
{ name: 'MATRIZ - LIDIANE', number: '6579' },
{ name: 'MATRIZ - BRUNO OLIVEIRA', number: '6524' },
{ name: 'MATRIZ - DANNA FARES', number: '6538' },
{ name: 'MATRIZ - VITORIA SOUZA', number: '6539' },
{ name: 'MATRIZ - NATHALIA BENEVIDES', number: '6553' },
{ name: 'MATRIZ - RAFAEL SETUBAL', number: '6542' },
{ name: 'MATRIZ - VINICIUS LIBERALI', number: '6577' },
{ name: 'MATRIZ - SALA DE ATENDIMENTO', number: '6558' },
{ name: 'MATRIZ - SALA DE REUNIAO 01', number: '6560' },
{ name: 'MATRIZ - SALA DE REUNIAO 02', number: '6559' },
{ name: 'MATRIZ - BEATRIZ VACILIO', number: '6581' },
{ name: 'MATRIZ - MAIKON LARA', number: '6544' },
{ name: 'MATRIZ - MATHEUS XAVIER', number: '6525' },
{ name: 'MATRIZ - COPA', number: '6573' },
{ name: 'MATRIZ - MONITOR TEMP', number: '6576' },
{ name: 'MATRIZ - GLADSON', number: '6582' },
{ name: 'MATRIZ - FLAVIO SUPRI', number: '6583' },
{ name: 'MATRIZ - FERNANDO', number: '6585' },
{ name: 'MATRIZ - THIAGO BORGES', number: '6586' },
{ name: 'MATRIZ - THYFANI', number: '6587' },    
{ name: 'MATRIZ - ELTON', number: '6588' },    
    
    
//Complexo
{ name: 'COMPLEXO - DEBORA', number: '4750' },
{ name: 'COMPLEXO - BALANÇA', number: '4761' },
{ name: 'COMPLEXO - BALANÇA', number: '4762' },
{ name: 'COMPLEXO - RH', number: '4763' },
{ name: 'COMPLEXO - ELISANGELA', number: '4764' },
{ name: 'COMPLEXO - CASTELAR', number: '4765' },
{ name: 'COMPLEXO - AGRICULTURA DIGITAL', number: '4767' },
{ name: 'COMPLEXO - NEI PICCO', number: '4768' },
{ name: 'COMPLEXO - NAYARA FREITAS', number: '4769' },
{ name: 'COMPLEXO - MARCO DORNELES', number: '4770' },
{ name: 'COMPLEXO - SALA DE REUNIAO', number: '4771' },
{ name: 'COMPLEXO - PROCESSOS AGRICOLAS', number: '4772' },
{ name: 'COMPLEXO - ALMOXARIFADO', number: '4774' },
{ name: 'COMPLEXO - STAFF', number: '4775' },

//Globo
{ name: 'Globo - Recep', number: '4800' },
{ name: 'Globo - Joseane', number: '4801' },
{ name: 'Globo - PCM', number: '4802' },
{ name: 'Globo - Joao Victor', number: '4803' },
{ name: 'Globo - Balanca', number: '4804' },
{ name: 'Globo - COA', number: '4805' },
{ name: 'Globo - Coord Oficina', number: '4806' },
{ name: 'Globo - Fiscal', number: '4807' },
{ name: 'Globo - Cantina', number: '4808' },
{ name: 'Globo - TST Jeferson', number: '4809' },
{ name: 'Globo - Gerente', number: '4810' },
{ name: 'Globo - Almox', number: '4811' },
{ name: 'Globo - SL Tecnica', number: '4812' },
{ name: '4813', number: '4813' },
{ name: 'Globo - Pcm Ana', number: '4814' },
{ name: 'Globo - Roberto', number: '4815' },


    

//SM3
{ name: 'SM3 - RECEPCAO', number: '6900' },    
{ name: 'SM3 - FINANCEIRO', number: '6901' },
{ name: 'SM3 - Alex Coord Adm', number: '6902' },
{ name: 'SM3 - COA', number: '6903' },
{ name: 'SM3 - Dayane Agric Digital', number: '6904' },
{ name: 'SM3 - Joao Gerencia', number: '6905' },
{ name: 'SM3 - Agronomo', number: '6906' },
{ name: 'SM3 - Sala Tecnica', number: '6907' },
{ name: 'SM3 - Agronomo', number: '6908' },
{ name: 'SM3 - SSO', number: '6909' },
{ name: 'SM3 - Guarita', number: '6910' },
{ name: 'SM3 - Guarita 2', number: '6911' },
{ name: 'SM3 - Defensivo', number: '6912' },
{ name: 'SM3 - Ambulatorio', number: '6913' },
{ name: 'SM3 - ALMOXARIFADO', number: '6914' },    
{ name: 'SM3 - Jose Almox', number: '6915' },
{ name: 'SM3 - Gabrielly Almox', number: '6916' },
{ name: 'SM3 - PCM', number: '6917' },
{ name: 'SM3 - Coord Manutencao', number: '6918' },
{ name: 'SM3 - RH', number: '6919' },

    
    
//Bacaba
{ name: 'BACABA - RECEPÇÃO', number: '6600' },
{ name: 'BACABA - RAQUILES', number: '6601' },
{ name: 'BACABA - FISCAL', number: '6602' },
{ name: 'BACABA - PCP', number: '6603' },
{ name: 'BACABA - ELVES SILVA', number: '6604' },
{ name: 'BACABA - PCM', number: '6605' },
{ name: 'BACABA - THIAGO', number: '6607' },
{ name: 'BACABA - ENEIAS', number: '6608' },
{ name: 'BACABA - ALMOXARIFADO', number: '6609' },
{ name: 'BACABA - ALMOXARIFADO', number: '6610' },
{ name: 'BACABA - ALMOXARIFADO', number: '6611' },
{ name: 'BACABA - CANTINA', number: '6612' },
{ name: 'BACABA - GUARITA', number: '6613' },
{ name: 'BACABA - FERNANDO BARROS', number: '6614' },
{ name: 'BACABA - RH', number: '6615' },
{ name: 'BACABA - SALA DE REUNIAO', number: '6616' },
{ name: 'BACABA - WANDERLEI', number: '6617' },
{ name: 'BACABA - ALINE', number: '6619' },
{ name: 'BACABA - ROBERIO', number: '6620' },
{ name: 'BACABA - BCB', number: '6621' },
{ name: 'BACABA - AGRICULTURA DIGITAL', number: '6622' },
{ name: 'BACABA - CASA SEDE', number: '6623' },

//Globo
{ name: 'GLOBO - FERNANDA', number: '4800' },
{ name: 'GLOBO - ELISANGELA', number: '4801' },
{ name: 'GLOBO - STAFF', number: '4802' },
{ name: 'GLOBO - JOAO VICTOR', number: '4803' },
{ name: 'GLOBO - PECUARIA', number: '4804' },
{ name: 'GLOBO - JOSEANE', number: '4805' },
{ name: 'GLOBO - FISCAL', number: '4807' },
{ name: 'GLOBO - AGRICULTURA DIGITAL', number: '4808' },
{ name: 'GLOBO - LAERCIO', number: '4810' },
{ name: 'GLOBO - OFICINA', number: '4813' },
{ name: 'GLOBO - OFICINA', number: '4814' },
{ name: 'GLOBO - CANTINA', number: '4812' },

//Siriema
{ name: 'SIR - WESLANE', number: '4900' },
{ name: 'SIR - NAYARA TEC-SEG', number: '4901' },
{ name: 'RH - MARIA EDUARDA', number: '4902' },
{ name: 'SIR - FLAVIA', number: '4903' },
{ name: 'SIR - PCM COORDENADOR', number: '4904' },
{ name: 'SIR - PCM', number: '4905' },
{ name: 'SIR - SALA DE REUNIAO', number: '4906' },
{ name: 'SIR - ALMOXARIFADO', number: '4907' },
{ name: 'SIR - ALMOXARIFADO', number: '4908' },
{ name: 'SAO MIGUEL', number: '4909' },

    
//Três Flechas
{ name: 'TRÊS FLECHAS - SSO', number: '6700' },
{ name: 'TRÊS FLECHAS - PCP', number: '6701' },
{ name: 'TRÊS FLECHAS - ALMOXARIFADO', number: '6702' },
{ name: 'TRÊS FLECHAS - PCM- OFICINA', number: '6703' },
{ name: 'TRÊS FLECHAS - DP RH 3F', number: '6704' },
{ name: 'TRÊS FLECHAS - JULIAN', number: '6705' },
{ name: 'TRÊS FLECHAS - COORD ADM', number: '6706' },
{ name: 'TRÊS FLECHAS - COORD MECANIZAÇÃO', number: '6707' },
{ name: 'TRÊS FLECHAS - COORD AGRO INDUSTRIAL', number: '6708' },
{ name: 'TRÊS FLECHAS - SALA DE REUNIAO ESC', number: '6709' },
{ name: 'TRÊS FLECHAS - DEFENSIVOS ESCRITORIO', number: '6710' },
{ name: 'TRÊS FLECHAS - CANTINA', number: '6711' },
{ name: 'TRÊS FLECHAS - SALA TECNICA', number: '6712' },
{ name: 'TRÊS FLECHAS - CASA SEDE', number: '6713' },
{ name: 'TRÊS FLECHAS - FISCAL ESCRITORIO', number: '6714' },
{ name: 'TRÊS FLECHAS - BALANCA', number: '6715' },
{ name: 'TRÊS FLECHAS - ALMOXARIFADO PEÇAS', number: '6716' },

//Guapirama
{ name: 'GUAPI - RECEPCAO', number: '5000' },
{ name: 'GUAPI - TEC SEGURANCA', number: '5001' },
{ name: 'GUAPI - COA KAMILA', number: '5002' },
{ name: 'GUAPI - LUCAS', number: '5003' },
{ name: 'GUAPI - COORD MANUTENCAO', number: '5004' },
{ name: 'GUAPI - COORD ADM', number: '5005' },
{ name: 'GUAPI - MESA DE REUNIAO', number: '5006' },
{ name: 'GUAPI - ALMOXARIFADO', number: '5007' },
{ name: 'GUAPI - ALMOXARIFADO', number: '5008' },
{ name: 'GUAPI - NOMEAR', number: '5009' },
{ name: 'GUAPI - GERENTE MATHEUS', number: '5010' },
{ name: 'GUAPI - COORD ADM', number: '5011' },
{ name: 'GUAPI - BALANCA', number: '5012' },
{ name: 'GUAPI - NOMEAR', number: '5013' },
{ name: 'GUAPI - NOMEAR', number: '5014' },
{ name: 'GUAPI - RH', number: '5015' },
{ name: 'GUAPI - NOMEAR', number: '5016' },

//São Miguel
{ name: 'SÃO MIGUEL', number: '4909' },

//Dourado
{ name: 'DOURADO - RH', number: '6800' },
{ name: 'DOURADO - JEFFERSON', number: '6801' },
{ name: 'DOURADO - RONY', number: '6807' },
{ name: 'DOURADO - ALLAN', number: '6809' },
{ name: 'DOURADO - ROBERIO LOPES', number: '6810' },
{ name: 'DOURADO - DANIEL', number: '6811' },
{ name: 'DOURADO - ALMOXARIFADO', number: '6812' },    
{ name: 'DOURADO - PCM', number: '6813' },
{ name: 'DOURADO - BALANÇA', number: '6814' },
{ name: 'DOURADO - FISCAL', number: '6815' },
{ name: 'DOURADO - ALEF', number: '6818' },
{ name: 'DOURADO - SUEDI', number: '6816' },
{ name: 'DOURADO - SALA DE REUNIAO', number: '6817' },
{ name: 'DOURADO - GUARITA', number: '6825' },
];

function searchPerson() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const resultDiv = document.getElementById('result');

    // Reset the result
    resultDiv.innerHTML = ''; // Clear the existing content

    // Find all people whose names match the search input
    const matchingPeople = people.filter(item => item.name.toLowerCase().includes(searchInput));

    // Display the results if any matches are found
    if (matchingPeople.length > 0) {
        resultDiv.classList.remove('hidden');
        
        matchingPeople.forEach((person, index) => {
            if (index > 0) {
                // Add a horizontal line to separate records
                resultDiv.appendChild(document.createElement('hr'));
            }

            // Create a div element for each person's details
            const personDiv = document.createElement('div');

            const nameParagraph = document.createElement('p');
            nameParagraph.innerHTML = `<strong>Nome:</strong> ${person.name}`;
            personDiv.appendChild(nameParagraph);

            const numberParagraph = document.createElement('p');
            numberParagraph.innerHTML = `<strong>Ramal:</strong> ${person.number}`;
            personDiv.appendChild(numberParagraph);

            // Append the person's div to the resultDiv
            resultDiv.appendChild(personDiv);
        });
    } else {
        // If no matches are found, display a message
        resultDiv.classList.add('hidden');
        resultDiv.textContent = 'No matching records found.';
    }
}
