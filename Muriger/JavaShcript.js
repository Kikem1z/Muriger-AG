let searchable = [
    '<a href="muriger_hands.html#Boxing Gloves">Boxing Gloves</a>',
    '<a href="muriger_legs.html#shinguard">Shin Guards',
    '<a href="muriger_Accessoires.html#Bags">heavy Bags',
    '<a href="muriger_Accessoires.html#Workout Pads">Workout Pads',
    '<a href="muriger_hands.html#Bandages">Bandages',
    '<a href="muriger_legs.html#headguard">Head Gear',
    '<a href="muriger_Accessoires.html#Jump Ropes">Jump Ropes',
    '<a href="muriger_startseite.html#sale">Sale',
    '<a href="articles/muriger_article001.html">Boxing Gloves/Venum Dragon Flight',
    '<a href="articles/muriger_article002.html">Boxing Gloves/Golden Star',
    '<a href="articles/muriger_article006.html">Boxing Gloves/Splashy Gloves',
    '<a href="articles/muriger_article007">Boxing Gloves/Tyson Gloves',
    '<a href="articles/muriger_article005.html">Boxing Gloves/Hayabusa Captain America',
    '<a href="articles/muriger_article004.html">Boxing Gloves/Cleto Reyes 12OZ',
    '<a href="muriger_hands.html#VenumBandages">Bandages/Venum',
    '<a href="muriger_hands.html#TysonBandages">Bandages/MikeTyson',
    '<a href="muriger_hands.html#EverlastBandages">Bandages/Everlast',
    '<a href="muriger_hands.html#OracleWhiteBandages">Bandages/Oracle',
    '<a href="muriger_hands.html#OracleBlackBandages">Bandages/Oracle',
    '<a href="muriger_hands.html#Winnerbandages">Bandages/Winner',
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