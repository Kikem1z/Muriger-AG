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
    '<a href="articles/muriger_article019.html">Bandages/Venum',
    '<a href="articles/muriger_article020.html">Bandages/MikeTyson',
    '<a href="articles/muriger_article021.html">Bandages/Everlast',
    '<a href="articles/muriger_article022.html">Bandages/Oracle',
    '<a href="articles/muriger_article023.html">Bandages/Oracle',
    '<a href="articles/muriger_article024.html">Bandages/Winner',
    '<a href="articles/muriger_article009.html">Shin Guards/8 Weapons Full Black',
    '<a href="articles/muriger_article011.html">Shin Guards/Twins SGS7 White',
    '<a href="articles/muriger_article012.html">Shin Guards/8 Weapons Black/White',
    '<a href="articles/muriger_article010.html">Shin Guards/Phantom MT-PRO',
    '<a href="articles/muriger_article013.html">Shin Guards/Twins SGS7 Black',
    '<a href="articles/muriger_article014.html">Shin Guards/Ciel Blue1',
    '<a href="articles/muriger_article016.html">Headguard/Venom Challenger',
    '<a href="articles/muriger_article017.html">Headguard/Yokkao Pro',
    '<a href="articles/muriger_article018.html">Headguard/Everlast Headguard',
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