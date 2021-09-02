'use strict';
const React = require('react');
const {useState, useEffect} = require('react');
const {render,Text,Box} = require('ink');

// const App = ({name = 'Stranger'}) => (
// 	<Text>
// 		Hello, <Text color="green">{name}</Text>
// 	</Text>
// );
const Typing = (()=>{
	let phrases = [
	  'The Moon is a barren, rocky world without air and water. It has dark lava plain on its surface. The Moon is filled wit craters. It has no light of its own. It gets its light from the Sun. The Moo keeps changing its shape as it moves round the Earth. It spins on its axis in 27.3 days stars were named after the Edwin Aldrin were the first ones to set their foot on the Moon on 21 July 1969 They reached the Moon in their space craft named Apollo II.',
	  'The sun is a huge ball of gases. It has a diameter of 1,392,000 km. It is so huge that it can hold millions of planets inside it. The Sun is mainly made up of hydrogen and helium gas. The surface of the Sun is known as the photosphere. The photosphere is surrounded by a thin layer of gas known as the chromospheres. Without the Sun, there would be no life on Earth. There would be no plants, no animals and no human beings. As, all the living things on Earth get their energy from the Sun for their survival.',
	  'The Solar System consists of the Sun Moon and Planets. It also consists of comets, meteoroids and asteroids. The Sun is the largest member of the Solar System. In order of distance from the Sun, the planets are Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune and Pluto; the dwarf planet. The Sun is at the centre of the Solar System and the planets, asteroids, comets and meteoroids revolve around it.',
	  'The Mahabharata is a story about a great battle between the Kauravas and the Pandavas. The battle was fought in Kurukshetra near Delhi. Many kings and princes took part in the battle. The Pandavas defeated the Kauravas. The Bhagvad Gita is a holy book of the Hindus. It is a part of the Mahabharata. Then, Lord Rama, with the help of It is a book of collection of teachings of Lord Krishna to Arjuna in the battlefield. It is the longest epic in the world.',
	  'The Ramayana is a story of Lord Rama written by the SageValmiki. Lord Rama, the prince of Ayodhya, in order to help his father Dasharatha went to exile for fourteen years. His wife, Sita and his younger brother Lakshmana also went with him. He went through many difficulties in the forest. One day Ravana, the king of Lanka carried away Sita with him. Then, Lord Rama, with the help of Hanumana, defeated and killed Ravana; Sita, Rama and Lakshmana returned to Ayod hya after their exile.',
	  'The Taj Mahal is a beautiful monument built in 1631 by an Emperor named Shah Jahan in memory of his wife Mumtaz Mahal. It is situated on the banks of river Yamuna at Agra. It looks beautiful in the moonlight. The Taj Mahal is made up of white marble. In front of the monument, there is a beautiful garden known as the Charbagh. Inside the monument, there are two tombs. These tombs are of Shah Jahan and his wife Mumtaz Mahal. The Taj Mahal is considered as one of the Seven Wonders of the World. Many tourists come to see this beautiful structure from different parts of the world.'
	]
	
	
	const [state,setState]=useState({
		phrase: '',
		input: ''
	})
	const randomPhrase=()=>{
		setState({...state, phrase: phrases[Math.floor(Math.random()*phrases.length)]})
	  }
	useEffect(()=>{
	  randomPhrase(); 
	  return 'Welcome to Typing Masters!'}, [])
	// const [input, setInput] = useState('');
	const words = state.input.length()/5;
	const total = state.phrase.length()/5;
	const correct = 0;
	const incorrect = 0;
	for (var i=0; i<total; i++){
		if (state.input[i]===state.phrase[i]){
		  correct+=1
		}
		else{
		  incorrect+=1
		}
	  
	}
	
	const wpm=(words-incorrect);
	const accuracy=((correct/5)/total)*100;
	
  
	const handleChange = (event) => {
	  setState({...state, input: event.target.value});
	};
  
	const handleSubmit = () =>{
	  return(
		{
		  phrase: state.phrase,
		  input: state.input,
		  wordsTyped: words,
		  correctWords: correct,
		  incorrectWords: incorrect,
		  wpm: wpm,
		  accuracy: accuracy
		}
	  )
	}
	return (
	<Box>
	  <Text>{state.phrase}</Text>
	  <TextInput type="text" onChange={handleChange}/>
	  <button onSubmit={handleSubmit}>Submit</button>
	</Box>)
  })
  
  render(<Typing/>)

module.exports = Typing;
