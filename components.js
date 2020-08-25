const Header = {
  render: () => {
    return `
    <header class="header">
      <div class="logo">LOGO</div>
      <button class="menu-btn" id="menu-btn">
          меню
      </button>
      <div class="sign-wrap">
          <div class="user-name" id="user-name"></div>
          <button class="sign-in" id="signIn">Войти</button>
          <button class="sign-out" id="signOut">Выйти</button>
      </div>
    </header>
    `
  }
}

const NavBar ={
    render: () => {
      return `
      <section class="main">
        <div class="main-wrap">
            <nav class="nav" id="mainmenu">
                <ul class="mainmenu__list">
                    <li><a class="mainmenu__link" href="#main">Главная</a></li>
                    <li><a class="mainmenu__link" href="#vocabluary">Лексика</a></li>
                    <li><a class="mainmenu__link" href="#grammar">Грамматика</a></li>
                    <li><a class="mainmenu__link" href="#statistics" id="satatic">Статистика</a></li>
                </ul>
            </nav>
    
            <div class="content" id="content">
                
            </div>
        </div>
      </section>  `;
  }
}



const ModalWindow = {
  render: () => {
    return ` 
    <div class="overlay" id="overlay">
        <div class="modal-window" id="modal-window">
            <div class="form">
                <h2>Регестрация</h2>
                <button class="closeModal" id="closeModal">X</button>
                <div class="nameInput">
                    <h3>Name</h3>
                    <input type="text" id="yourNameInput" placeholder ="Имя">
                </div>
    
                <div class="passwardInput">
                    <h3>Passward</h3>
                    <input type="password" name="password" id="passwordInput" placeholder ="Пароль">
                </div>

                <button class="modalSave" id="modalSave">Готово</button>
            </div>
        </div>
    </div>`;
  }
};


const Footer = {
  render: () => {
    return `
      <footer class="footer"> </footer>
    `
  }
}
