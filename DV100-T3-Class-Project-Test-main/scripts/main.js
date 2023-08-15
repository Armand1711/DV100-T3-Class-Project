// When the document loads
$(document).ready(function(){

    console.log("Hello");

    // -----------------------------------------
    // Home Page

    // When the document loads, animate the hero image upwards
    $(".hero-image").animate({top: '-=100px'});

    // -----------------------------------------
    // Browse Page

    // Hide all description text from the plant cards
    $("#descriptionText").hide();

  }); 

  // When the card is clicked
  $(".card").click(function(){

    // Toggle the price & description text
    $("#priceText").toggle();
    $("#descriptionText").toggle();

    // Resize the image to fit the additional content
    $(".card-img-top").toggleClass("small");

  });


 
  const sortByPriceButton = document.getElementById('sort-by-price');
  const sortByNameButton = document.getElementById('sort-by-name');
  const showSaleItemsButton = document.getElementById('show-sale-items');

  const plantListCards = document.querySelectorAll('.plant-card');

  sortByPriceButton.addEventListener('click', () => {
      const plantCardsArray = Array.from(plantListCards);

      plantCardsArray.sort((a, b) => {
          const priceA = parseFloat(a.dataset.price);
          const priceB = parseFloat(b.dataset.price);
          return priceA - priceB;
      });

      const plantList = document.getElementById('plantsList');
      plantList.innerHTML = '';

      plantCardsArray.forEach(card => {
          plantList.appendChild(card);
      });
  });

  sortByNameButton.addEventListener('click', () => {
      const plantCardsArray = Array.from(plantListCards);

      plantCardsArray.sort((a, b) => {
          const nameA = a.dataset.name.toLowerCase();
          const nameB = b.dataset.name.toLowerCase();
          return nameA.localeCompare(nameB);
      });

      const plantList = document.getElementById('plantsList');
      plantList.innerHTML = '';

      plantCardsArray.forEach(card => {
          plantList.appendChild(card);
      });
  });

  showSaleItemsButton.addEventListener('click', () => {
      plantListCards.forEach(card => {
          const isOnSale = card.dataset.sale === 'true';
          card.style.display = isOnSale ? 'block' : 'none';
      });
  });
