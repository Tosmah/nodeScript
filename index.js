#!/usr/bin/env node
const program = require('commander')
const inquirer = require('inquirer')
const http = require('http')
const qs = require('querystring')
const db = require('sqlite')

db.open('quizz.db').then(() => {
	return db.run("CREATE TABLE IF NOT EXISTS quizz (titre, username, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, score, date)") 
})

 program
 .version('1.0.0')
 .option('-q, --QI', 'Faire le Test de QI')
 .option('-g, --Culture', 'Faire le Test de Culture Général')
 .option('-c, --Capitale', 'Faire le Test des Capitales')

program.parse(process.argv)

function runQuizzes(program){
	if(program.Culture){
		QuizzCultureG()
	}
	else if(program.QI){
		QuizzQI()
	}
	else if(program.Capitale){
		QuizzCapitale()
	}
	else {
		program.help()
	}
}

function QuizzCultureG() {
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
			var titre = 'QuizzCultureG';
			var score = 0;
			if (answers.Q1 == 'Dynamite')
				score++;
			if(answers.Q2 == 'Orange')
				score++;
			if(answers.Q3 == 'Copenhague')
				score++;
			if (answers.Q4 == 'Un philosophe et membre de l\'académie française')
				score++;
			if(answers.Q5 == 'Espagne')
				score++;
			if(answers.Q6 == 'Italie')
				score++;
			if (answers.Q7 == 'Vincent Van Gogh')
				score++;
			if(answers.Q8 == 'A la recherche du temps perdu')
				score++;
			if(answers.Q9 == 'Tokyo')
				score++;
			if(answers.Q10 == '1 novembre 1993')
				score++;

			if(score<=4){
				console.log("Bof "+answers.username+" ! Tu n'as que "+score+"/10")
			}
			else if (score<=7){
				console.log("Pas mal "+answers.username+" ! Tu as "+score+"/10")
			}
			else {
				console.log("Excellent "+answers.username+" ! Tu as "+score+"/10")
			}
			answers.titre = titre;
			answers.score = score;
			insert(answers);
	})
} 


function QuizzQI () {
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
 			message: '6+4=210\n9+2=711\n8+5=313\n5+2=37\n7+6=???',
 			name: 'Q2',
 			choices: [
 				'713',
 				'113',
 				'136',
 				'736'
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
 				'fauteuil',
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
	]).then((answers) => {
			var titre = 'QuizzQI'
			var score = 0;
			if (answers.Q1 == 'Raler')
				score++;
			if(answers.Q2 == '113')
				score++;
			if(answers.Q3 == '5')
				score++;
			if (answers.Q4 == 'Nuit - Déjeuner')
				score++;
			if(answers.Q5 == '40 euros')
				score++;
			if(answers.Q6 == 'Bois - Verre')
				score++;
			if (answers.Q7 == 'Ra')
				score++;
			if(answers.Q8 == '80 km/heure')
				score++;
			if(answers.Q9 == 'faussaire')
				score++;
			if (answers.Q10 == '4')
				score++;

			if(score<=4){
				console.log("Bof "+answers.username+" ! Tu n'as que "+score+"/10")
			}
			else if (score<=7){
				console.log("Pas mal "+answers.username+" ! Tu as "+score+"/10")
			}
			else {
				console.log("Excellent "+answers.username+" ! Tu as "+score+"/10")
			}
			answers.titre = titre;
			answers.score = score;
			insert(answers);
	})
}


function QuizzCapitale() {
	inquirer.prompt([
		{
			type: 'input',
			message: 'Entrez votre nom d\'utilisateur',
			name: 'username'
		}, {
			type: 'checkbox',
			message: 'Quelle est la capitale de la Thailande ?',
			name: 'Q1',
			choices: [
			'Bangui',
			'Bangkok',
			'Ankara'
			]
		}, {
			type: 'checkbox',
			message: 'Quelle est la capitale de la Colombie ?',
			name: 'Q2',
			choices: [
			'Hanoi',
			'Lima',
			'Bogota'
			]
		}, {
			type: 'checkbox',
			message: 'Quelle est la capitale de la Finlande ?',
			name: 'Q3',
			choices: [
			'Copenhague',
			'Helsinki',
			'Stockholm'
			]
		}, {
			type: 'checkbox',
			message: 'Quelle est la capitale de la Suisse ?',
			name: 'Q4',
			choices: [
			'Berne',
			'Berlin',
			'Vienne'
			]
		}, {
			type: 'checkbox',
			message: 'Quelle est la capitale de la Jamaique ?',
			name: 'Q5',
			choices: [
			'Kingston',
			'Quito',
			'Dakar'
			]
		}, {
			type: 'checkbox',
			message: 'Quelle est la capitale de la Bolivie ?',
			name: 'Q6',
			choices: [
			'La Havane',
			'San José',
			'La Paz'
			]
		}, {
			type: 'checkbox',
			message: 'Quelle est la capitale de la Chine ?',
			name: 'Q7',
			choices: [
			'Tokyo',
			'Pékin',
			'Shanghai'
			]
		}, {
			type: 'checkbox',
			message: 'Quelle est la capitale de l\'Inde ?',
			name: 'Q8',
			choices: [
			'Islamabad',
			'Bombay',
			'New Delhi'
			]
		}, {
			type: 'checkbox',
			message: 'Quelle est la capitale de la Pologne ?',
			name: 'Q9',
			choices: [
			'Varsovie',
			'Kiev',
			'Sofia'
			]
		}, {
			type: 'checkbox',
			message: 'Quelle est la capitale du Syrie ?',
			name: 'Q10',
			choices: [
			'Kaboul',
			'Damas',
			'Jerusalem'
			]
		}
		]).then((answers) => {
			var titre = 'QuizzCapitale';
			var score = 0;
			if (answers.Q1 == 'Bangkok')
				score++;
			if(answers.Q2 == 'Bogota')
				score++;
			if(answers.Q3 == 'Helsinki')
				score++;
			if (answers.Q4 == 'Berne')
				score++;
			if(answers.Q5 == 'Kingston')
				score++;
			if(answers.Q6 == 'La Paz')
				score++;
			if (answers.Q7 == 'Pékin')
				score++;
			if(answers.Q8 == 'New Delhi')
				score++;
			if(answers.Q9 == 'Varsovie')
				score++;
			if(answers.Q10 == 'Damas')
				score++;

			if(score<=4){
				console.log("Bof "+answers.username+" ! Tu n'as que "+score+"/10")
			}
			else if (score<=7){
				console.log("Pas mal "+answers.username+" ! Tu as "+score+"/10")
			}
			else {
				console.log("Excellent "+answers.username+" ! Tu as "+score+"/10")
			}
			answers.titre = titre;
			answers.score = score;
			insert(answers);
	})
}


function insert(answers) {
	today = new Date()
	maDate = today.toISOString().replace(/T/, ' ').replace(/\..+/, '')
	db.run("INSERT INTO quizz VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", answers.titre, answers.username, answers.Q1, answers.Q2, answers.Q3, answers.Q4, answers.Q5, answers.Q6, answers.Q7, answers.Q8, answers.Q9, answers.Q10, answers.score, maDate)
}


http.createServer((req, res) => {

	res.writeHead(200, {'Content-Type': 'text/html'})

	res.write(`
	 <html>
	 	<head>
	        <meta charset="utf-8" />
	        <style>
		 		body 
		 		{
		 			background-image: url('http://cvincent61.free.fr/fond/fond-site.jpg');
		 		}

		 		h1
		 		{
		 			color: red;
		 		}
		 	</style>  
	        <title>Quizz</title>
    	</head>
 		<body>
			 <h1>Score des quizz : </h1>
 	`)

	afficher()

	function afficher() {
		return db.all("SELECT * FROM quizz ORDER BY titre, score DESC").then((result)=>{
			var infotab = ''
			result.forEach(function(index){
				infotab += "<p>" + index.titre + " : " + index.username + " le \'" + index.date + "\' a eu un score de " + index.score + "/10 </p>"
			})
			return infotab
		}).then((infotab)=> {
			res.write(infotab)
			res.write(`</body>
	 </html>`)
			res.end();
		})
	}


}).listen(8080)


runQuizzes(program);