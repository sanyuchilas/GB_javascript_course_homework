'use strict';
import addToCart from './basket.js'

let fitlerPopup = document.querySelector('.filterPopup');
let fitlerLabel = document.querySelector('.filterLabel');
let filterIcon = document.querySelector('.filterIcon');

fitlerLabel.addEventListener('click', function() {
    fitlerPopup.classList.toggle('hidden');
    fitlerLabel.classList.toggle('filterLabelPink');
    filterIcon.classList.toggle('filterIconPink');

    if (filterIcon.getAttribute('src') === 'images/filter.svg') {
        filterIcon.setAttribute('src', 'images/filterHover.svg')
    } else {
        filterIcon.setAttribute('src', 'images/filter.svg')
    }
});

let filterHeaders = document.querySelectorAll('.filterCategoryHeader');
filterHeaders.forEach(function(header) {
    header.addEventListener('click', function(event) {
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});

let filterSizes = document.querySelector('.filterSizes');
let filterSizeWrap = document.querySelector('.filterSizeWrap');
filterSizeWrap.addEventListener('click', function() {
    filterSizes.classList.toggle('hidden');
});

document.querySelector('.featuredItems').addEventListener('click', event => {
    if (
        event.target.parentElement.textContent.trim() === 'Add to cart'
        || event.target.classList.contains('featuredImgDark')
    ) {
        return
    }
    
    const getProductId = element => {
        if (element.dataset.id) {
            return element.dataset.id
        } 
      
        return getProductId(element.parentElement)
    }
    
    const productId = getProductId(event.target)

    addToCart(productId)
})