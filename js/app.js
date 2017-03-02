var heroNames = ["Genji", "McCree"];
var heroes = [genji, mccree];

var genji = {
  name: "Genji",
  line: "Mada mada."
}
var mccree = {
  name: "McCree",
  line: "It's high noon somewhere in the world.",
  image: "url('assets/mccree.jpg')",
  sound: "assets/mccree.ogg"
}

selectedHero = '';
var heroMenu = document.getElementById('heroMenu');

for (var i = 0; i < heroes.length; i++) {
  var hero = document.createElement('option');
  heroMenu.appendChild(hero);
  hero.value, hero.text = heroNames[i];
}

heroMenu.addEventListener('change', updateHero);

function updateHero() {
  selectedHero = heroMenu.value;
  console.log(selectedHero);
  yourResults();
}

function createBackground(hero) {
  var background = document.createElement('div');
  document.body.appendChild(background);
  background.id = 'image';
  var image = document.getElementById('image');
  image.style.backgroundImage = hero.image;
}

function playSound(hero) {
  var playSound = new Audio(hero.sound);
  playSound.play();
}

function yourResults() {
  switch (selectedHero) {
    case 'McCree':
    if (selectedHero === 'McCree') {
      alert(mccree.line);
      createBackground(mccree);
      playSound(mccree);
    }
    break;
  }
}
