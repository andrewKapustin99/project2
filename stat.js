
// // const showStatistics = (function() {
// //     return {
// //         init: () => {
// //             // console.log(document.getElementById('outPutGrammaTries'))
// //             let outPutGrammaTries = document.getElementById('outPutGrammaTries');
// //             let outPutGrammaCorrect = document.getElementById('outPutGrammaCorrect');
// //             // let adviceOne = document.getElementById('adviceOne');

// //             let outPutVocTries = document.getElementById('outPutVocTries');
// //             let outPutVocCorrect = document.getElementById('outPutVocCorrect');
// //             // let adviceTwo = document.getElementById('adviceTwo');
            
// //             let myStorage = JSON.parse(sessionStorage.getItem('englishLessonUser'+englishLessonUser.name));
            
            
// //             console.log(document.getElementById('outPutGrammaTries'))

            
// //             outPutGrammaTries.innerHTML = myStorage.grammaTries;
// //             outPutGrammaCorrect.innerHTML = myStorage.grammaCorrect;

// //             outPutVocTries.innerHTML = myStorage.vocTries;
// //             outPutVocCorrect.innerHTML = myStorage.vocCorrect;

// //             // console.log(document.getElementById('reloadStatistics'))
// //         }
// //     }
// // })();
// console.log(document.getElementById('outPutGrammaCorrect'))
function cleanUser() {
    document.getElementById('outPutGrammaTries').innerHTML = '';
    document.getElementById('outPutGrammaCorrect').innerHTML = '';
    document.getElementById('adviceOne').innerHTML = '';

    document.getElementById('outPutVocTries').innerHTML = '';
    document.getElementById('outPutVocCorrect').innerHTML = '';
    document.getElementById('adviceTwo').innerHTML = '';
}

function showStatistics() {
    let outPutGrammaTries = document.getElementById('outPutGrammaTries');
    let outPutGrammaCorrect = document.getElementById('outPutGrammaCorrect');
    // let adviceOne = document.getElementById('adviceOne');

    let outPutVocTries = document.getElementById('outPutVocTries');
    let outPutVocCorrect = document.getElementById('outPutVocCorrect');
    // let adviceTwo = document.getElementById('adviceTwo');
    
    let myStorage = JSON.parse(sessionStorage.getItem('englishLessonUser'+englishLessonUser.name));
    
    
    // console.log(JSON.parse(sessionStorage.getItem('englishLessonUser'+englishLessonUser.name)))
    // console.log(document.getElementById('outPutGrammaCorrect'))

    let goodJob = 'Ты уже почти все знаешь!';
    let normal = 'Осталось совсем немного, попробуй еще !';
    let bad = 'Давай попробуем еще раз решить';

    outPutGrammaTries.innerHTML = myStorage.grammaTries;
    outPutGrammaCorrect.innerHTML = myStorage.grammaCorrect;
    
    if(myStorage.grammaCorrect / myStorage.grammaTries *100 > 90) {
        document.getElementById('adviceOne').innerHTML = goodJob;
    } else if (myStorage.grammaCorrect / myStorage.grammaTries *100 > 50 && myStorage.grammaCorrect / myStorage.grammaTries *100 < 90) {
        document.getElementById('adviceOne').innerHTML = normal;
    } else if (myStorage.grammaCorrect / myStorage.grammaTries *100 < 50 || myStorage.grammaCorrect / myStorage.grammaTries *100 == 50) {
        document.getElementById('adviceOne').innerHTML = bad;
    }

    outPutVocTries.innerHTML = myStorage.vocTries;
    outPutVocCorrect.innerHTML = myStorage.vocCorrect;

    if(myStorage.vocCorrect / myStorage.vocTries *100 > 90) {
        document.getElementById('adviceTwo').innerHTML = goodJob;
    } else if (myStorage.vocCorrect / myStorage.vocTries *100 > 50 && myStorage.vocCorrect / myStorage.vocTries *100 < 90) {
        document.getElementById('adviceTwo').innerHTML = normal;
    } else if (myStorage.vocCorrect / myStorage.vocTries *100 < 50 || myStorage.vocCorrect / myStorage.vocTries *100 == 50) {
        document.getElementById('adviceTwo').innerHTML = bad;
    }

    console.log(document.getElementById('satatic'))


}

// document.getElementById('yourNameInput').addEventListener('click', function() {
//     console.log('asdasdasdasdasdasdasd')
// })

