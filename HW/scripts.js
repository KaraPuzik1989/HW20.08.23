//Задание1

/* const buttons = document.querySelectorAll('button');
const tabContents = document.querySelectorAll('.tabcontent');

buttons.forEach(button => {
  button.addEventListener('click', event => {
    const clickedButtonId = event.target.id;

    openTab(event, clickedButtonId);
  });
});


function openTab(event, tabId) {
  tabContents.forEach(tabContent => {
    tabContent.style.display = 'none';
  });

  buttons.forEach(button => {
    button.classList.remove('active');
  });

  const selectedTabContent = document.getElementById(tabId + '-content');
  selectedTabContent.style.display = 'block';

  const clickedButton = event.target;
  clickedButton.classList.add('active');
} */


//Задание2

/* const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  
  if (body.classList.contains('dark-theme')) {
    themeToggle.textContent = 'Светлая тема';
  } else {
    themeToggle.textContent = 'Тёмная тема';
  }
}); */
