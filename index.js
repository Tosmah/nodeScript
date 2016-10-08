#!/usr/bin/env node
const program = require('commander')
const inquirer = require('inquirer')

 program
 .version('1.0.0')
 .option('-q, --QI', 'Show Test QI')
 .option('-g, --Culture', 'Show Test Culture Général')

program.parse(process.argv)

function QuizzCultureG() {
	if (program.Culture) {
 	inquirer.prompt([
 		{
 			type: 'input',
 			message: 'Entrez votre nom d\'utilisateur',
 			name: 'username'
 		}, {
 			type: 'checkbox',
 			message: 'Laquelle de ces inventions a été créé en premier ?',
 			name: 'Q1',
 			choices: [
 				'Dynamite',
 				'Electricite',
 				'Ma bite'
 			]
 		}, {
 			type: 'checkbox',
 			message: 'Parmi ces reponses, laquelle n\'est pas une couleur primaire ?',
 			name: 'Q2',
 			choices: [
 				'Jaune',
 				'Orange',
 				'Bleu'
 			]
 		}, {
 			type: 'checkbox',
 			message: 'Quelle est la capitale du Danemark ?',
 			name: 'Q3',
 			choices: [
 				'Copenhague',
 				'Helsinki',
 				'Stockholm'
 			]
 		}, {
 			type: 'checkbox',
 			message: 'Qui était Claude Lévi-Strauss ?',
 			name: 'Q4',
 			choices: [
 				'Un fabriquant de pantalon pour mineurs américains',
 				'Un philosophe et membre de l\'académie française',
 				'Un prestigieux joaillier'
 			]
 		}, {
 			type: 'checkbox',
 			message: 'Quelle pays ne possède pas d\'armes nucléaires ?',
 			name: 'Q5',
 			choices: [
 				'Inde',
 				'Espagne',
 				'France'
 			]
 		}, {
 			type: 'checkbox',
 			message: 'Quelle équipe a remporté la Coupe du Monde de football en Allemagne 2006 ?',
 			name: 'Q6',
 			choices: [
 				'Espagne',
 				'Brésil',
 				'Italie'
 			]
 		}, {
 			type: 'checkbox',
 			message: 'Qui est le peintre de "La nuit étoilée" ?',
 			name: 'Q7',
 			choices: [
 				'Edvard Munch',
 				'Vincent Van Gogh',
 				'Leonardo da Vinci'
 			]
 		}, {
 			type: 'checkbox',
 			message: 'Quel est le roman le plus célèbre de Marcel Proust ?',
 			name: 'Q8',
 			choices: [
 				'A la recherche du temps perdu',
 				'Bonjour tristesse',
 				'La dame aux camélias'
 			]
 		}, {
 			type: 'checkbox',
 			message: 'Quelle est la ville la plus peuplée du monde ?',
 			name: 'Q9',
 			choices: [
 				'Buenos Aires',
 				'New York',
 				'Tokyo'
 			]
 		}, {
 			type: 'checkbox',
 			message: 'Quelle est la date de la création de l\'Union européenne ?',
 			name: 'Q10',
 			choices: [
 				'08 mai 1945',
 				'1 novembre 1993',
 				'1 janvier 1999'
 			]
 		}
	]).then((answers) => {
		score = 0;
		If (answers.Q1 == 'Dynamite') {
			score = 1;
		} else {
			score = 0
		}
		console.log(score);
	})
 } else {
 	program.help()
 }
}


function QuizzQI () {
	if (program.QI) {
 	inquirer.prompt([
 		{
 			type: 'input',
 			message: 'Entrez votre nom d\'utilisateur',
 			name: 'username'
 		}, {
 			type: 'checkbox',
 			message: 'Trouvez le synonyme de RECHIGNER :',
 			name: 'Q1',
 			choices: [
 				'Réparer',
 				'Raler',
 				'Travailler'
 			]
 		}, {
 			type: 'checkbox',
 			message: 'Comment s\'appelle la fille ainée des Simpsons ?',
 			name: 'Q2',
 			choices: [
 				'Maggie',
 				'Lisa',
 				'Rachel'
 			]
 		}, {
 			type: 'checkbox',
 			message: 'Quel numéro complète cette série : 6, 1, 8, 3, 10 ?',
 			name: 'Q3',
 			choices: [
 				'4',
 				'5',
 				'12',
 				'7'
 			]
 		}, {
 			type: 'checkbox',
 			message: 'Complétez la phrase avec les deux mots qui manquent dans les points : \n ... est à DINER comme MATIN est à ... ',
 			name: 'Q4',
 			choices: [
 				'Dejeuner - Diner',
 				'Nuit - Déjeuner',
 				'Diner - Dejeuner'
 			]
 		}, {
 			type: 'checkbox',
 			message: 'Un parcours de golf de 10.000m2 est vendu pour un total de 400.000euros \n Combien le m2 a t-il couté ?',
 			name: 'Q5',
 			choices: [
 				'400 euros',
 				'40 euros',
 				'4 euros',
 				'0.4euros'
 			]
 		}, {
 			type: 'checkbox',
 			message: 'Complétez la phrase avec les deux mots qui manquent dans les points : \n ... est à CHAISE comme BOUTEILLE est à ... ',
 			name: 'Q6',
 			choices: [
 				'Bois - Verre',
 				'Plastique - Fer',
 				'Carton - Bois'
 			]
 		}, {
 			type: 'checkbox',
 			message: 'Dans la mythologie égyptienne, qui est le Dieu Soleil ?',
 			name: 'Q7',
 			choices: [
 				'Ra',
 				'Osiris',
 				'Anubis'
 			]
 		}, {
 			type: 'checkbox',
 			message: 'Un camion a mis 8h pour faire 640km. \n A quelle vitesse est-il allé ?',
 			name: 'Q8',
 			choices: [
 				'100 km/heure',
 				'200 km/heure',
 				'80 km/heure',
 				'Aucune des 3 réponses'
 			]
 		}, {
 			type: 'checkbox',
 			message: 'FAUSSEFOURRURE est au n°12344516377375 comme le n°123442875 est au mot :',
 			name: 'Q9',
 			choices: [
 				'fauteil',
 				'fantaisie',
 				'faussaire',
 				'arnaque'
 			]
 		}, {
 			type: 'checkbox',
 			message: 'Chacun des trois frères a une soeur. \n Combien sont-ils au total',
 			name: 'Q10',
 			choices: [
 				'3',
 				'4',
 				'6',
 				'9'
 			]
 		}
	]).then((answers2) => {
		console.log(answers2)
	})
 } else {
 	program.help()
 }
}


QuizzCultureG();
QuizzQI();