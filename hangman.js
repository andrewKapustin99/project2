let gAnswer = null;
let gGuessed = null;

const HangMan = (function() {
    return {
        init: function () {

            const words = {
                english: ['one', 'two', 'three', 'four', 'five','six','seven','eight','nine','ten','eleven',],
                russian: ['один','два','три','четыре','пять','шесть','семь','восемь','девять','десять','одиннадцать',]
            }

            const draws = [
                'head',
                'harms',
                'legs'
                ];
            // .....................................CANVAS .............................................
            let canvas = document.getElementById('canvasHangman');
            let context = canvas.getContext('2d');
            let step = 0;

            let answer= '';
            let maxWrong = 3;
            let mistakes = 0;
            let guessed = [];
            let wordStatus = null;

            let rusTrans = '';
            let correctAnswers = 0;
            let vocTries = 0;
            let wrongAnswers = 0;

            let btnNext = document.getElementById('btn-next');
            btnNext.style.display = 'none';

            btnNext.addEventListener('click', function(){
                mistakes = 0;
                guessed = [];
                randomWord();
                guessedWord(answer);
                updateMistakes();
                generateButtons();
                translation();
                clearCanvas()
                createCanvas();
                btnNext.style.display = 'none';
            });

            // createCanvas();

            // randomWord();
            // generateButtons();
            // guessedWord(answer);
            // translation();

            document.getElementById('maxWrong').innerHTML = maxWrong;

            function createCanvas(){
                context.clearRect(0, 0, canvas.width, canvas.height);
                step = 0;
                context.strokeStyle = '#444';
                context.lineWidth = 10;
                context.beginPath();
                context.moveTo(175, 225);
                context.lineTo(5, 225);
                context.moveTo(40, 225);
                context.lineTo(25, 5);
                context.lineTo(100, 5);
                context.lineTo(100, 25);
                context.stroke();
            }

    function Draw (part) {
        switch (part) {

            case 'head':
                context.lineWidth = 5;
                context.beginPath();
                context.arc(100, 50, 25, 0, Math.PI*2, true);
                context.closePath();
                context.stroke();

                context.beginPath();
                context.moveTo(100, 75);
                context.lineTo(100, 140);
                context.stroke();
                break;

            case 'harms':
                context.beginPath();
                context.moveTo(100, 85);
                context.lineTo(60, 100);
                context.stroke();

                context.beginPath();
                context.moveTo(100, 85);
                context.lineTo(140, 100);
                context.stroke();
                break;

            case 'legs':
                context.beginPath();
                context.moveTo(100, 140);
                context.lineTo(80, 190);
                context.stroke();

                context.beginPath();
                context.moveTo(100, 140);
                context.lineTo(125, 190);
                context.stroke();
                break;

            }
        }

        function clearCanvas() {
            context.clearRect(0, 0, canvas.width, canvas.height)
        }

        //,...............................................................................

        //рандомится слово
        function randomWord() {
            answer = words.english[Math.floor(Math.random() * words.english.length)];
            // console.log(words.english.indexOf(answer));
            console.log(answer);
            // console.log(words.russian[words.english.indexOf(answer)])
            generateButtons();
            guessedWord(answer);
            translation();
            // handleGuesses();
            createCanvas();
        }
        handleGuesses();
        // создание кнопок с буквами
        function generateButtons() {
            let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
                `
                <button class="btn-test btn btn-lg btn-primary m-2" id='` + letter + `'>` + letter + `</button>
                `).join('');
        
            document.getElementById('keyboard').innerHTML = buttonsHTML; 
        }

        function guessedWord(answer) {
            wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
            document.getElementById('wordSpotlight').innerHTML = wordStatus;
        }

        
        function translation() {
            let rus = document.getElementById('rusTranslate');
            rus.innerHTML = words.russian[words.english.indexOf(answer)];
        }

        function handleGuesses() {
            document.getElementById('keyboard').addEventListener('click', function(event){
                let target = event.target;
                // console.log(target.textContent)
                guessed.indexOf(target.textContent) === -1 ? guessed.push(target.textContent) : null;
                document.getElementById(target.textContent).setAttribute('disabled', true);
                console.log(guessed)

                if (answer.indexOf(target.textContent) >= 0) {
                    guessedWord(answer);
                    checkIfGameWon();
                    
                } else if (answer.indexOf(target.textContent) === -1) {
                    mistakes++;
                    updateMistakes();
                    checkIfGameLost();
                    Draw(draws[step++]);
                    
                    // if (undefined === draws[step]) this.disabled = true;
                }
            })
        }

        function checkIfGameWon() {
            if (wordStatus == answer) {
                correctAnswers += 1;
                vocTries +=1;
                saveVocData(correctAnswers, vocTries);
                btnNext.style.display = 'inline-block';
            }
            
        }

        function checkIfGameLost() {
            if (mistakes >= maxWrong) {
                document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
                wrongAnswers += 1;
                correctAnswers += 0;
                vocTries +=1;
                saveVocData(correctAnswers, vocTries);
                console.log(wrongAnswers)
                btnNext.style.display = 'inline-block';
            }
            
        }


        function updateMistakes() {
            document.getElementById('mistakes').innerHTML = mistakes;
        }
 
        randomWord();


        /////........................................................................

        // function checkIfGameWon() {
        //     if (wordStatus == answer) {
        //         correctAnswers += 1;
        //         btnNext.style.display = 'inline-block';
        //     }
        // }

        // function checkIfGameLost() {
        //     if (mistakes >= maxWrong) {
        //         document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
        //         wrongAnswers += 1;
        //         console.log(wrongAnswers)
        //         btnNext.style.display = 'inline-block';
        //     }
        // }

        // function updateMistakes() {
        //     return document.getElementById('mistakes').innerHTML = mistakes;
        // }
        

        // console.log(guessed)
        // gAnswer = answer;
        // gGuessed = guessed;
        // console.log(guessed)
        },
        // handleGuess: function(chosenLetter) {
        //     gGuessed.indexOf(chosenLetter) === -1 ? gGuessed.push(chosenLetter) : null;
        //     document.getElementById(chosenLetter).setAttribute('disabled', true);
        //     console.log(gGuessed)

        //     // if (gAnswer.indexOf(chosenLetter) >= 0) {
        //     //     guessedWord(gAnswer);
        //     //     checkIfGameWon();
        //     // } else if (gAnswer.indexOf(chosenLetter) === -1) {
        //     //     mistakes++;
        //     //     updateMistakes();
        //     //     checkIfGameLost();
        //     //     Draw(draws[step++]);
        //     //     // if (undefined === draws[step]) this.disabled = true;
        //     // }

        //     // console.log(chosenLetter)
        // }
    }

})();
