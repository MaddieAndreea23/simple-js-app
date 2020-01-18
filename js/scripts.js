const pokemonRepository = (function() {
  const repository = [];
  const $modalContainer = document.querySelector('#modal-container');
  const $pokemonList = document.querySelector("ul");
  const apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function loadList() {
    return fetch(apiUrl)
      .then(function(response) {
        if (response.ok) {
          return response.json();
        } else {
          throw 'Something went wrong when loading the list.';
        }
      })
      .then(function(json) {
        json.results.forEach(function(item) {
          add({ name: item.name, detailsUrl: item.url });
        });
      })
      .catch(function(e) {
        console.error(e);
      });
  }

  function addListItem(pokemon) {
    var listItem = document.createElement("li");
    var button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("pokemon-name");
    listItem.appendChild(button);
    $pokemonList.appendChild(listItem);
    button.addEventListener("click", function() {
      showDetails(pokemon);
    });
  }

  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  };

  function add(item) {
    repository.push(item);
  }

  function getAll() {
    return repository;
  }

  function loadDetails(item) {
    const url = item.detailsUrl;
    return fetch(url)
      .then(function(response) {
        if (response.ok) {
          return response.json();
        } else {
          throw 'Something went wrong when loading details.';
        }
      })
      .then(function(details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
      })
      .catch(function(e) {
        console.error(e);
      });
  }

  // handler to close the modal when clicking outside of it
  const clickHandler = e => {
    if (!document.getElementById('modal').contains(e.target)) hideModal();
  }

  // handler to close the modal on escape
  const keydownHandler = e => {
    if (e.key === 'Escape' && $modalContainer.classList.contains('is-visible')) hideModal();
  }

  function showModal(item) {
   $modalContainer.innerHTML = '';

   var modal = document.createElement('div');
   modal.classList.add('modal');
   modal.setAttribute("id", "modal");

   var closeButtonElement = document.createElement('button');
   closeButtonElement.classList.add('modal-close');
   closeButtonElement.innerText = 'Close';
   closeButtonElement.addEventListener('click', hideModal);

   var nameElement = document.createElement('h1');
   nameElement.innerText = item.name.charAt(0).toUpperCase() + item.name.slice(1);

   var imageElement = document.createElement('img');
   imageElement.src = item.imageUrl;
   imageElement.classList.add('modal-img');

   var heightElement = document.createElement('p');
   heightElement.innerText = 'Height: ' + item.height + 'm';

   modal.appendChild(closeButtonElement);
   modal.appendChild(nameElement);
   modal.appendChild(imageElement);
   modal.appendChild(heightElement);
   $modalContainer.appendChild(modal);

    $modalContainer.classList.add('is-visible');

    // Click outside of the modal to close it
    window.addEventListener('click', clickHandler)
    window.addEventListener('keydown', keydownHandler)
  };

  //close the modal
  function hideModal() {
    $modalContainer.classList.remove('is-visible');
    $modalContainer.innerHTML = "";
    window.removeEventListener('click', clickHandler);
    window.removeEventListener('keydown', keydownHandler)
  };


  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal,
    hideModal: hideModal
  };
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
