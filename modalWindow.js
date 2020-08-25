let englishLessonUser = {
    grammaTries: 0,
    grammaCorrect: 0,
    vocTries : 0,
    vocCorrect : 0,
};
let newLoginName = null;
let newUser = null;
let oldUser = null;

function showModalWindow() {   
    document.getElementById('closeModal').addEventListener('click', function(){
        document.getElementById('overlay').style.display="none";
    });

    document.getElementById('signIn').addEventListener('click', function(){
        document.getElementById('overlay').style.display="block";
    });

    document.getElementById('signOut').addEventListener('click', function(){
        document.getElementById('signIn').style.display="inline-block";
        document.getElementById('signOut').style.display="none";
        newLoginName = null;
    })

    let LoginName = document.getElementById('yourNameInput');
    let password = document.getElementById('passwordInput');
    let save = document.getElementById('modalSave');


    save.addEventListener('click', function(){
        console.log(LoginName.value);
        if(LoginName.value == "" || password.value == "") {
            LoginName.value = '';
            password.value = '';
            console.log('Введите данные заново')
        } else {
            newLoginName = LoginName.value
            console.log(LoginName.value)
            document.getElementById('overlay').style.display="none";
            document.getElementById('signIn').style.display="none";
            document.getElementById('signOut').style.display="inline-block";
            document.getElementById('user-name').innerHTML =  'Привет '+LoginName.value;
            checkUser();
            LoginName.value = '';
            password.value = '';

        }

    })

    function checkStorage() {
        if (sessionStorage.getItem('englishLessonUser') != null) {
            checkUser();
        } else if(sessionStorage.getItem('englishLessonUser') == null) {
            createUser();
        }
    }


 
    function checkUser() {
        if(JSON.parse(window.sessionStorage.getItem('englishLessonUser'+newLoginName)) == null) {
            createUser()
        } else{
            oldUser = newLoginName;
            console.log(oldUser)
        }
    }

    function createUser() {
        englishLessonUser.name = LoginName.value

        sessionStorage.setItem('englishLessonUser'+LoginName.value, JSON.stringify(englishLessonUser));
        
    }
}

function saveGrammaData(correct, tries) {
    let cor = JSON.parse(sessionStorage.getItem('englishLessonUser'+newLoginName));
    cor.grammaCorrect += correct;
    cor.grammaTries += tries;

    sessionStorage.setItem("englishLessonUser"+englishLessonUser.name, JSON.stringify(cor));
    // showStatistics();
}

function saveVocData(correct, tries) {
    console.log(correct, tries)
    let cor = JSON.parse(sessionStorage.getItem('englishLessonUser'+newLoginName));
    cor.vocCorrect = correct;
    cor.vocTries = tries;

    sessionStorage.setItem("englishLessonUser"+englishLessonUser.name, JSON.stringify(cor));
    // showStatistics();
}


// function showStatistics() {
//     let outPutGrammaTries = document.getElementById('outPutGrammaTries');
//     let outPutGrammaCorrect = document.getElementById('outPutGrammaCorrect');
//     let adviceOne = document.getElementById('adviceOne');

//     let outPutVocTries = document.getElementById('outPutVocTries');
//     let outPutVocCorrect = document.getElementById('outPutVocCorrect');
//     let adviceTwo = document.getElementById('adviceTwo');
    
//     let myStorage = JSON.parse(sessionStorage.getItem('englishLessonUser'+englishLessonUser.name));
//     console.log(document.getElementById('outPutGrammaTries'))

//     document.getElementById('outPutGrammaTries').innerHTML = myStorage.grammaTries;
//     document.getElementById('outPutGrammaCorrect').innerHTML = myStorage.grammaCorrect;

//     outPutVocTries.innerHTML = myStorage.vocTries;
//     outPutVocCorrect.innerHTML = myStorage.vocCorrect;
// }
// JSON.parse(window.localStorage.getItem("englishLessonUserAndrew")) распарсить элементы 