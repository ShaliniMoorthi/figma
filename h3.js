
const options = document.querySelectorAll('.option');

options.forEach((option) => {
  option.addEventListener('click', () => {
 
    options.forEach((item) => item.classList.remove('expanded'));

   
    option.classList.add('expanded');
  });
});
