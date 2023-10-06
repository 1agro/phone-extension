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
{ name: 'MATRIZ - KELLEN CASAGRANDE', number: '6546' },
{ name: 'MATRIZ - JOSE EUDES', number: '6547' },
{ name: 'MATRIZ - YANKA MARA', number: '6548' },
{ name: 'MATRIZ - JESSICA SILVA', number: '6549' },
{ name: 'MATRIZ - DOUGLAS PEREIRA', number: '6550' },
{ name: 'MATRIZ - DANIELA LIMA', number: '6551' },
{ name: 'MATRIZ - FRANCISLAINE', number: '6552' },
{ name: 'MATRIZ - FLAVIA CAMPOS', number: '6554' },
{ name: 'MATRIZ - LEONARDO PEREIRA', number: '6518' },
{ name: 'MATRIZ - MATHEUS XAVIER', number: '6521' },
{ name: 'MATRIZ - HENRIQUE BARBOSA', number: '6540' },
{ name: 'MATRIZ - GABRIEL MARQUES', number: '6541' },
{ name: 'MATRIZ - SUPORTE', number: '6543' },
{ name: 'MATRIZ - MAIKON LARA', number: '6544' },
{ name: 'MATRIZ - JUZZENE BARCELOS', number: '6516' },
{ name: 'MATRIZ - KATIA MOSQUEM', number: '6522' },
{ name: 'MATRIZ - AMINADABES', number: '6561' },
{ name: 'MATRIZ - EDUARDO CARDOSO', number: '6562' },
{ name: 'MATRIZ - LUCAS ZEFERINO', number: '6565' },
{ name: 'MATRIZ - EDILAINE ALVES', number: '6566' },
{ name: 'MATRIZ - KARYNE XAVIER', number: '6567' },
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
{ name: 'MATRIZ - ALESANDRO OLIVEIRA', number: '6574' },
{ name: 'MATRIZ - MARCOS COLOMBO', number: '6519' },
{ name: 'MATRIZ - EDILAINE CASSIA', number: '6555' },
{ name: 'MATRIZ - JACKSON FRANÇA', number: '6556' },
{ name: 'MATRIZ - ALESSANDRA GALDINO', number: '6580' },
{ name: 'MATRIZ - CLAUDIO ZANCHIN', number: '6520' },
{ name: 'MATRIZ - SUENI ASSIS', number: '6557' },
{ name: 'MATRIZ - PAULO BARONE', number: '6521' },
{ name: 'MATRIZ - TABATA VASCONCELOS', number: '6527' },
{ name: 'MATRIZ - MARIA HELENA', number: '6528' },
{ name: 'MATRIZ - YASMIN SANTOS', number: '6513' },
{ name: 'MATRIZ - DANILLO CESAR', number: '6523' },
{ name: 'MATRIZ - EDILSON', number: '6568' },
{ name: 'MATRIZ - JOYCE MORAES', number: '6569' },
{ name: 'MATRIZ - EDIANA OLIVEIRA', number: '6570' },
{ name: 'MATRIZ - MARICELY TEIXEIRA', number: '6571' },
{ name: 'MATRIZ - MARIANA RIBEIRO', number: '6572' },
{ name: 'MATRIZ - LUCIA SOUZA', number: '6575' },
{ name: 'MATRIZ - ANGELA', number: '6579' },
{ name: 'MATRIZ - BRUNO OLIVEIRA', number: '6524' },
{ name: 'MATRIZ - DANNA FARES', number: '6538' },
{ name: 'MATRIZ - VITORIA SOUZA', number: '6539' },
{ name: 'MATRIZ - NATHALIA BENEVIDES', number: '6553' },
{ name: 'MATRIZ - RAFAEL SETUBAL', number: '6542' },
{ name: 'MATRIZ - JOÃO PARRA', number: '6577' },
{ name: 'MATRIZ - SALA DE ATENDIMENTO', number: '6558' },
{ name: 'MATRIZ - SALA DE REUNIAO 01', number: '6560' },
{ name: 'MATRIZ - SALA DE REUNIAO 02', number: '6559' },
{ name: 'MATRIZ - BHEATRIZ KELLY', number: '6581' },
{ name: 'MATRIZ - MAIKON LARA', number: '6544' },
{ name: 'MATRIZ - MATHEUS XAVIER', number: '6525' },

//Complexo
{ name: 'COMPLEXO - DEBORA', number: '4750' },
{ name: 'COMPLEXO - BALANÇA', number: '4761' },
{ name: 'COMPLEXO - BALANÇA', number: '4762' },
{ name: 'COMPLEXO - RH', number: '4763' },
{ name: 'COMPLEXO - JOICE', number: '4764' },
{ name: 'COMPLEXO - CASTELAR', number: '4765' },
{ name: 'COMPLEXO - AGRICULTURA DIGITAL', number: '4767' },
{ name: 'COMPLEXO - SUELANI OLIVEIRA', number: '4768' },
{ name: 'COMPLEXO - NAYARA FREITAS', number: '4769' },
{ name: 'COMPLEXO - MARCO DORNELES', number: '4770' },
{ name: 'COMPLEXO - SALA DE REUNIAO', number: '4771' },
{ name: 'COMPLEXO - PROCESSOS AGRICOLAS', number: '4772' },
{ name: 'COMPLEXO - ALMOXARIFADO', number: '4774' },
{ name: 'COMPLEXO - STAFF', number: '4775' },

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
{ name: 'SIRIEMA - ALINE', number: '4900' },
{ name: 'SIRIEMA - NAYARA', number: '4901' },
{ name: 'SIRIEMA - AMANDA', number: '4902' },
{ name: 'SIRIEMA - FLAVIA', number: '4903' },
{ name: 'SIRIEMA - PCM-COORDENADOR', number: '4904' },
{ name: 'SIRIEMA - PCM', number: '4905' },
{ name: 'SIRIEMA - ALMOXARIFADO', number: '4907' },
{ name: 'SIRIEMA - ALMOXARIFADO', number: '4908' },

//Três Flechas
{ name: 'TRÊS FLECHAS - SSO', number: '6700' },
{ name: 'TRÊS FLECHAS - PCP', number: '6701' },
{ name: 'TRÊS FLECHAS - ALMOXARIFADO', number: '6702' },
{ name: 'TRÊS FLECHAS - PCM- OFICINA', number: '6703' },
{ name: 'TRÊS FLECHAS - DP RH 3F', number: '6704' },
{ name: 'TRÊS FLECHAS - JULIAN', number: '6705' },
{ name: 'TRÊS FLECHAS - RANGEL', number: '6706' },
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
{ name: 'GUAPIRAMA - RH', number: '5000' },
{ name: 'GUAPIRAMA - TEC SEGURANÇA', number: '5001' },
{ name: 'GUAPIRAMA - GUAP', number: '5002' },
{ name: 'GUAPIRAMA - RENAN', number: '5003' },
{ name: 'GUAPIRAMA - KAMILA', number: '5004' },
{ name: 'GUAPIRAMA - RAFAEL PORTO', number: '5005' },
{ name: 'GUAPIRAMA - ALMOXARIFADO', number: '5007' },
{ name: 'GUAPIRAMA - ALMOXARIFADO', number: '5008' },
{ name: 'GUAPIRAMA - GUAP', number: '5009' },
{ name: 'GUAPIRAMA - GER MATHEUS', number: '5010' },
{ name: 'GUAPIRAMA - GUAP', number: '5011' },
{ name: 'GUAPIRAMA - BALANÇA', number: '5012' },

//São Miguel
{ name: 'SÃO MIGUEL', number: '4909' },

//Dourado
{ name: 'DOURADO - RH', number: '6800' },
{ name: 'DOURADO - DENEMARCIO', number: '6801' },
{ name: 'DOURADO - KENIA', number: '6807' },
{ name: 'DOURADO - ALLAN', number: '6809' },
{ name: 'DOURADO - GEDIELSON', number: '6810' },
{ name: 'DOURADO - DANIEL', number: '6811' },
{ name: 'DOURADO - PCM', number: '6813' },
{ name: 'DOURADO - BALANÇA', number: '6814' },
{ name: 'DOURADO - PRODUÇÃO', number: '6815' },
{ name: 'DOURADO - COSME', number: '6818' },
{ name: 'DOURADO - IGOR', number: '6816' },
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
