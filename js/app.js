var heroNames = ["Choose", "Genji", "McCree"];
var heroes = [choose, genji, mccree];

var choose = {
  name: "Choose a Hero"
}

var genji = {
  name: "Genji",
  line: ["You will outsmart every Bastion you attempt to deflect.", "You won't deflect a single projectile for the duration of the match."],
  image: "url('assets/genji.jpg')",
  sound: "assets/genji.ogg",
  color: "#96ee42"
}
var mccree = {
  name: "McCree",
  line: ["You won't see a soul for the entire duration of your High Noon.", "You will score a triple kill with High Noon."],
  image: "url('assets/mccree.jpg')",
  sound: "assets/mccree.ogg",
  color: "#af595c"
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
  view.yourResults();
}

//make first div selected, if one exists edit hidden one, not visible then move visible one out

var view = {
  createBackground: function(hero) {
    var image = document.getElementById('image');
    var tint = document.getElementById('tint');
    image.style.backgroundImage = hero.image;
    tint.style.backgroundColor = hero.color;
  },
  heroResult: function(hero) {
    var result = document.getElementById('heroResult');
    var randomResult = hero.line[Math.floor(Math.random() * hero.line.length)];
    result.innerHTML = randomResult;
  },
  heroName: function(hero) {
    var heroName = document.getElementById('heroName');
    heroName.innerHTML = hero.name;
  },
  playSound: function(hero) {
    var playSound = new Audio(hero.sound);
    playSound.play();
  },
  generateHeroPage: function(hero) {
    view.createBackground(hero);
    view.playSound(hero);
    view.heroResult(hero);
    view.heroName(hero);
  },
  yourResults: function() {
    switch (selectedHero) {
      case 'Genji':
      if (selectedHero === 'Genji') {
        view.generateHeroPage(genji);
      }
      break;
      case 'McCree':
      if (selectedHero === 'McCree') {
        view.generateHeroPage(mccree);
      }
      break;
    }
  }
}
