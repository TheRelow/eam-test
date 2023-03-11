let inputSearch = document.querySelector('js-search-input')
let btnSearch = document.querySelector('js-search-btn')


btnSearch.addEventListener('click', function handleClick(event) {
    inputSearch.value = '';
})