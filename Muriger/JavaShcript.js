let searchable = [
    '<a href="muriger_hands.html#Boxing Gloves">Boxing Gloves</a>',
    '<a href="muriger_legs.html#shinguard">Shin Guards',
    '<a href="muriger_Accessoires.html#Bags">heavy Bags',
    '<a href="muriger_Accessoires.html#Workout Pads">Workout Pads',
    '<a href="muriger_hands.html#Bandages">Bandages',
    '<a href="muriger_legs.html#headguard">Head Gear',
    '<a href="muriger_Accessoires.html#Jump Ropes">Jump Ropes',
    '<a href="muriger_startseite.html#sale">Sale',
  ];
  
  const searchInput = document.getElementById('search');
  const searchWrapper = document.querySelector('.wrapper3');
  const resultsWrapper = document.querySelector('.results');
  
  searchInput.addEventListener('keyup', () => {
    let results = [];
    let input = searchInput.value;
    if (input.length) {
      results = searchable.filter((item) => {
        return item.toLowerCase().includes(input.toLowerCase());
      });
    }
    renderResults(results);
  });
  
  function renderResults(results) {
    if (!results.length) {
      return searchWrapper.classList.remove('show');
    }
  
    const content = results
      .map((item) => {
        return `<li>${item}</li>`;
      })
      .join('');
  
    searchWrapper.classList.add('show');
    resultsWrapper.innerHTML = `<ul>${content}</ul>`;
  }