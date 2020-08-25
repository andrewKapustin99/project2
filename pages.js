const HomeComponent = {
    id: "main",
    title: "Главная страница примера SPA",
    render: (className = "container", ...rest) => {
      return `
        <section class="${className}">
          <div class="container"> 
            <h1 class="local-main">Главная</h1>
            <p class="local-p">Для того чтобы учить английский вместе с нами нужно выполнить несколько маленьких шагов:</p>
            <ul class="local-list">
                <li>Для начала пройдите регистрацию чтобы отслеживать ваши успехи в изучении;</li>
                <li>В правом верхнем углу нажмите кнопку ВОЙТИ, после чего введите Ваше имя и придумайте пароль;</li>
                <li>Далее нажмите кнопку сохранить. </li>
                <li>Для вашей безопасности и удобства отслеживания результатов, при каждом входе нужно будет вводить ваше имя и пароль;</li>
                <li>Теперь Вы готовы начать изучать английский !!!! Выберете интересующий Вас раздел (Лексика / Грамматика).</li>
                <li><h2 class="local-advice">У Вас все получится !!!</h2></li>
            </ul>
          </div>
        </section>
      `;
    }
  };


const vocabluaryPage = {
    id: "vocabluary",
    title: "Проверка словарного запаса",
    render: (className = "container", ...rest) => {
      return `
        <section class="${className}">
        <div class="container">
            <h1 class="text-center">Hangman</h1>
            <div class="float-right">Wrong Guesses: <span id='mistakes'>0</span> of <span id='maxWrong'></span></div>

            <div class="text-center">
                <!-- <img id='hangmanPic' src="./images/0.jpg" alt=""> -->
                <canvas id="canvasHangman" width="180" height="250"></canvas>
                <p>Переведи слово на английский язык !</p>
                <p class="translate" id="rusTranslate"></p>
                <p id="wordSpotlight">The word to be guessed goes here</p>
                <div id="keyboard" class="keyBoard"></div>
                <!-- <button class="btn btn-info" onClick="reset()">Reset</button> -->
                <button class="btn btn-info" id="btn-next">Next</button>

            </div>
        </div>
        </section>
      `;
    }
};

const grammarPage = {
    id: "grammar",
    title: "Грамматические упражнения",
    render: (className = "container", ...rest) => {
        return `
        <section class="${className}">
            <div class="container">
            <div class="text-center"> 
                <div class="gramm-rus" id="rusTrans"></div>

                <div class="inputWord" id="inputWord"> </div>
                <div id="board"></div>
                <div class="gramma-chech-btn" id="gramma-chech-btn">
                  <button class="gramma-check" id="checkBtn">ПРОВЕРКА</button>
                  <button class="gramma-del" id="del">Удалить</button>
                </div>
            </div>
            </div>
        </section>
        `;
    }
}

const ErrorPage = {
  id: "error",
  title: "Achtung, warning, kujdes, attenzione, pozornost...",
  render: (className = "container", ...rest) => {
    return `
      <section class="${className}">
        <h1>Ошибка 404</h1>
        <p>Страница не найдена, попробуйте вернуться на <a href="#main">главную</a>.</p>
      </section>
    `;
  }
};


const StatisicsPage = {
  id: 'statistics',
  title: 'Статистика',
  render: (className = "container", ...rest) => {
    return `
      <section class="${className}">
        <div class="container stat-wrap-one">
            <div class="wrap-stat">
            
              <div class="stat">
                  <h2>Грамматика</h2>
                  <p class="stat-p-one">Колличесво упражнений: <span id="outPutGrammaTries">0</span></p>
                  
                  <p class="stat-p-two">Колличесво верных: <span id="outPutGrammaCorrect">0</span></p>
                  
                  <p id="adviceOne" class="stat-p-three">Совет</p>
                  
              </div>
            
              <div class="stat" >
                  <h2>Знание слов</h2>
                  <p class="stat-p-one">Колличесво упражнений: <span id="outPutVocTries">0</span></p>
                  
                  <p class="stat-p-two">Колличесво верных: <span id="outPutVocCorrect">0</span></p>
                      
                  <p id="adviceTwo" class="stat-p-three">Совет</p>
              </div>
            </div>
        </div>
      </section>
    `;
  }
}