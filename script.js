const activeClass = 'ativo';
//
//
//              DARK MODE
//
//
function handleKeyboard(event) {
  event.key === 'd' ? document.body.classList.toggle('dark-mode') : '';
}
window.addEventListener('keydown', handleKeyboard);

const btn = document.querySelector('a[href="#dark-mode"]');
btn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

//
//
//              NAVEGAÇAO POR TAB
//
//
function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li ');
  const tabContent = document.querySelectorAll('.js-tabcontent section ');

  if (tabMenu.length && tabContent) {
    tabContent[0].classList.add(activeClass);
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove(activeClass);
      });
      tabContent[index].classList.add(activeClass);
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

//
//
//            ACCORDION LIST
//
//
function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
initAccordion();

//
//
//              SCROLL SUAVE
//
//

function InitScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
InitScrollSuave();

//
//
//              ANIMAÇÃO AO SCROLL
//
//
function initScrollAnimation() {
  const sections = document.querySelectorAll('.js-scroll');
  if (sections.length) {
    sections[0].classList.add(activeClass);
    const windowAppear = window.innerHeight * 0.6;
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionViwer = sectionTop - windowAppear < 0;
        sectionViwer ? section.classList.add(activeClass) : '';
      });
    }
    window.addEventListener('scroll', animaScroll);
  }
}
initScrollAnimation();
