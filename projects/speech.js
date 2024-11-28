// Speech to Text

function speak(txt) {
	const msg = new SpeechSynthesisUtterance();
	// const txt = e.target.getAttribute('data-content');
	// var txt = 'Ini adalah';
	const lang = 'id';     
	const langCode = lang.split('-')[0];
	
	function setSpeech() {
		return new Promise(
		function (resolve, reject) {
			let synth = window.speechSynthesis;
			let id;

			id = setInterval(() => {
			if (synth.getVoices().length !== 0) {
				resolve(synth.getVoices());
				clearInterval(id);
			}}, 10);
		})
	}

	let s = setSpeech();
	s.then((voices) => {
		// const voices = window.speechSynthesis.getVoices();   
		// console.log(voices.findIndex(a => a.lang == langCode));
	  
		msg.voice = voices[voices.findIndex(a => a.lang == langCode)];
		msg.text = txt;
		msg.lang = lang;
		msg.volume = 1;
		msg.voiceURI = "native";
		window.speechSynthesis.speak(msg);            
	});
}