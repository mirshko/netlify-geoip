const button = document.querySelector('[data-fetch]')
const locale = document.querySelector('[data-locale]')

function fetchLocale () {
  fetch('/locale.json')
    .then(res => res.json())
    .then(data => {
      locale.textContent = data.locale || alert('Needs to be running on Netlify!')
    })
    .catch(err => console.log(err))
}

button.addEventListener('click', fetchLocale)
