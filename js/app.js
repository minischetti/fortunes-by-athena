var heroNames = ["Choose", "Genji", "McCree"];
var heroes = [choose, genji, mccree];

var choose = {
  name: "Choose a Hero"
}

var genji = {
  name: "Genji",
  line: "Mada mada.",
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
  yourResults();
}

//make first div selected, if one exists edit hidden one, not visible then move visible one out

function createBackground(hero) {
  // var background = document.createElement('div');
  // document.body.appendChild(background);
  // background.id = 'image';
  var image = document.getElementById('image');
  image.style.backgroundImage = hero.image;
}

function tint(hero) {
  // var tint = document.createElement('div');
  // document.body.appendChild(tint);
  // tint.id = 'tint';
  var tint = document.getElementById('tint');
  tint.style.backgroundColor = hero.color;
}

function heroResult(hero) {
  // var title = document.createElement('h1');
  // document.body.appendChild(title);
  // title.id = 'line';
  var result = document.getElementById('heroResult');
  var rand = hero.line[Math.floor(Math.random() * hero.line.length)];
  result.innerHTML = rand;
}
function heroName(hero) {
  // var title = document.createElement('h1');
  // document.body.appendChild(title);
  // title.id = 'line';
  var heroName = document.getElementById('heroName');
  heroName.innerHTML = hero.name;
}

function playSound(hero) {
  var playSound = new Audio(hero.sound);
  playSound.play();
}

function yourResults() {
  switch (selectedHero) {
    case 'Genji':
    if (selectedHero === 'Genji') {
      createBackground(genji);
      tint(genji);
      playSound(genji);
      heroResult(genji);
      heroName(genji);
    }
    break;
    case 'McCree':
    if (selectedHero === 'McCree') {
      createBackground(mccree);
      tint(mccree);
      playSound(mccree);
      heroResult(mccree);
      heroName(mccree);
    }
    break;
  }
}
