let searchable = [
    '<a href="https://www.zalando.ch/herren-home/">Boxing Gloves</a>',
    'Shin Guards',
    'heavy Bags',
    'Workout Pads',
    'Bandages',
    'Head Gear',
    'Jump Ropes',
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