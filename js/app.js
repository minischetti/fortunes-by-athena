var heroNames = ["Genji", "McCree", "Pharah", "Reaper"];
var heroes = [genji, mccree, pharah, reaper];

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
var pharah = {
  name: "Pharah",
  line: ["A team wipe is in your future.", "Environmental kills are your friend."],
  image: "url('assets/pharah.jpg')",
  sound: "assets/mccree.ogg",
  color: "#3c7ac5"
}
var reaper = {
  name: "Reaper",
  line: ["Horrible aim is your curse.", "Tanks stand no chance against your shotguns."],
  image: "url('assets/reaper.jpg')",
  sound: "assets/mccree.ogg",
  color: "#7d3e51"
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
  page = document.getElementById('heroPage');
  view.yourResults();
}

function randomHero() {
  selectedHero = heroNames[Math.floor(Math.random() * heroNames.length)];
  console.log(selectedHero);
  page = document.getElementById('heroPage');
  view.yourResults();
}

//make first div selected, if one exists edit hidden one, not visible then move visible one out
var view = {
  createBackground: function(hero) {
    var image = document.getElementById('image');
    var tint = document.getElementById('tint');
    if (image.classList.contains('animate')) {
      image.classList.remove('animate');
      tint.classList.remove('animate');
    }
    setTimeout(function() {
      image.classList.add('animate');
      tint.classList.add('animate');
      image.style.backgroundImage = hero.image;
      tint.style.backgroundColor = hero.color;
    }, 1000);
  },
  heroResult: function(hero) {
    var result = document.getElementById('heroResult');
    var randomResult = hero.line[Math.floor(Math.random() * hero.line.length)];
    if (result.classList.contains('animate')) {
      result.classList.remove('animate');
    }
    setTimeout(function() {
      result.classList.add('animate');
      result.innerHTML = randomResult;
    }, 1000);
  },
  heroName: function(hero) {
    var heroName = document.getElementById('heroName');
    if (heroName.classList.contains('animate')) {
      heroName.classList.remove('animate');
    }
    setTimeout(function() {
      heroName.classList.add('animate');
      heroName.innerHTML = hero.name;
    }, 1000);
  },
  playSound: function(hero) {
    setTimeout(function() {
      var playSound = new Audio(hero.sound);
      playSound.play();
    }, 1000);
  },
  generateHeroPage: function(hero) {
    view.createBackground(hero);
    //view.playSound(hero);
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
      case 'Pharah':
      if (selectedHero === 'Pharah') {
        view.generateHeroPage(pharah);
      }
      break;
      case 'Reaper':
      if (selectedHero === 'Reaper') {
        view.generateHeroPage(reaper);
      }
      break;
    }
  }
}
