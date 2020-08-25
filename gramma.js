let grammarCorrect = 0;
let grammarTries = 0;
const Grammar = (function() {

return {
    init: () => {
        let grammRusTrans = document.getElementById('rusTrans');
        let answer = null;
        let indexOfSentense = 0;
        let inputWord = document.getElementById('inputWord');
        inputWord.addEventListener('input', function(){
            if (inputWord.textContent != true){
                del.style.display="block";
            }
        });

        let checkBtn = document.getElementById('checkBtn');
        checkBtn.addEventListener('click', checking);

        let del = document.getElementById('del');
        del.addEventListener('click', function() {
            inputWord.removeChild(inputWord.lastChild);
            document.getElementsByTagName('button').disabled = false;
            let boardLength = document.getElementById('board').childNodes.length;
            for(let i = 0; i < boardLength; i++){
                document.getElementById('board').childNodes[i].disabled = false;
            }
        });

        let sentense = {
            rus:['я иду гулять', 'погода замечательная','я рисую картинку'],
            eng:[
                {
                    correct:['I go for a walk'],
                    words:['I,go,for,a,walk']
                },
                {
                    correct:['The weather is wonderful'],
                    words:['The,weather,is,wonderful']
                },
                {
                    correct:['I draw a picture'],
                    words:['I,draw,a,picture']
                }
            ]
        }

        chooseSentence();

        function chooseSentence() {
            answer = sentense.rus[Math.floor(Math.random()*sentense.rus.length)]; // выбирается рандомное предложение на русском языке

            grammRusTrans.innerHTML = answer;
            indexOfSentense = sentense.rus.indexOf(answer);
            createWordsButtons();
        }

        function createWordsButtons(){
            let indexOfEnglishSentense = sentense.eng[indexOfSentense];
            // console.log(indexOfEnglishSentense);

            let wordButtons = indexOfEnglishSentense.words[0].split(',').map(word =>
                `<button class="btn btn-lg btn-primary m-2" id='` + word + `' onClick="Grammar.handleGuess('` + word + `')"> ` + word + ` </button>`).join('');
                document.getElementById('board').innerHTML = wordButtons;
        }

        function checking () {
            // console.log(indexOfSentense)
            if(inputWord.innerText == sentense.eng[indexOfSentense].correct){
                alert('Good job');
                grammarCorrect=1;
                grammarTries=1;
                saveGrammaData(grammarCorrect, grammarTries)
            }   else {
                alert('You are wrong');
                grammarTries=1;
                grammarCorrect=0;
                saveGrammaData(grammarCorrect, grammarTries)
                
            }

            while (inputWord.firstChild){
                inputWord.removeChild(inputWord.firstChild)
            }
            chooseSentence();
        }
    },

    handleGuess: function handleGuess(choosenWord) {
        let tagretWord = document.getElementById(choosenWord);
        tagretWord.disabled = true;
        document.getElementById('inputWord').innerHTML += choosenWord + ' ';
    }
}
})();
