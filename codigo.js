// através dessa classe vamos alterar cada item do menu 
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
//   método para configuração a animação dos links 
    animateLinks() {
        //usando o Foreach para acessar cada menu e criar a animação sobre eles 
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
        //   nesta linha pega-se o index de cada linha e transforma em ms
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
//   Toda a vez que esse método é chamado, ele cria a anaimação de surgimento da direta para esquerda 
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
    //  toda a vezes que o menu de harburguer é ativo essse método é chamado para criar a animação do x
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
//   Metodo que adiciona um evento de clique no botão de menu
    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }
//   Se mobilemenu existir no documento , essa função é iniciada 
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
//   inicializando a classe 
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();

// Estilização do arquivo agenda.html
function agendarHorario() {
    // Obter os valores dos campos do formulário através dos seus IDs
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var servico = document.getElementById("servico").value;
    var data = document.getElementById("data").value;
    var horario = document.getElementById("horario").value;

    // Preencher o elemento div com os dados do agendamento
    var agendamento = document.getElementById("agendamento");
    // Vamos imprimir o valor de cada variável através de suas IDs, e concatenamos e mostramos na tela
    agendamento.innerHTML = "<p>Horário agendado com sucesso!</p><p>Nome: " + nome + "</p><p>Telefone: " + telefone + "</p><p>Serviço: " + servico + "</p><p>Data: " + data + "</p><p>Horário: " + horario + "</p>";
}