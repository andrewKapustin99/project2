const Words = {
    english: ['one','two','three','four','five','six','seven','eight','nine','ten','eleven',],
    russian: ['один','два','три','четыре','пять','шесть','семь','восемь','девять','десять','одинадцать',]
}

window.addEventListener('load', function(){
    document.getElementById('word').innerHTML = Words.english[0];
    document.getElementById('translation').innerHTML = Words.russian[0];
})

const btnNext = document.getElementById('next'),
    btnBack = document.getElementById('back');

let i = 0;


function makeTest() {
    document.getElementById('learnWords').classList.add('hide');
    document.getElementById('checkWords').classList.remove('hide');
}

function closeTest() {
    document.getElementById('checkWords').classList.add('hide');
    document.getElementById('learnWords').classList.remove('hide');
    
}

btnNext.addEventListener('click', function(){
    document.getElementById('word').innerHTML = Words.english[++i];
    document.getElementById('translation').innerHTML = Words.russian[i];

    if(i == 4){
        makeTest();
    }

    

    if(i ==5){
        closeTest();
    }
});


btnBack.addEventListener('click', function(){
    document.getElementById('word').innerHTML = Words.english[--i];
    document.getElementById('translation').innerHTML = Words.russian[i];
});




    


