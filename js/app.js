heroes = ['Genji', 'McCree'];

selectedHero = '';

for (var i = 0; i < heroes.length; i++) {
  var heroMenu = document.getElementById('heroMenu');
  var hero = document.createElement('option');
  heroMenu.appendChild(hero);
  hero.value, hero.text = heroes[i];
}

heroMenu.addEventListener('change', updateHero);

function updateHero() {
  selectedHero = heroMenu.value;
  console.log(selectedHero);
  yourResults();
}

function yourResults() {
  switch (selectedHero) {
    case 'McCree':
    if (selectedHero === 'McCree') {
      alert("It's high noon somewhere in the world.");
    }
    break;
  }
}
