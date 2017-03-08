var heroNames = ["Genji", "McCree", "Pharah", "Reaper", "Soldier: 76", "Sombra", "Tracer", "Bastion", "Hanzo", "Junkrat", "Mei", "Torbjorn", "Widowmaker", "D.VA", "Reinhardt", "Roadhog", "Winston", "Zarya", "Ana", "Lucio", "Mercy", "Symmetra", "Zenyatta"];
var heroes = [genji, mccree, pharah, reaper, soldier76, sombra, tracer, bastion, hanzo, junkrat, mei, torbjorn, widowmaker, dva, reinhardt, roadhog, winston, zarya, ana, lucio, mercy, symmetra, zenyatta];

var genji = {
  name: "Genji",
  line: ["Your lackluster deflections will kill many teammates.", "Your accuracy with your shuriken is unmatched.", "Attempting to throw your shuriken will yield no results.", "Deflecting enemy projectiles comes natural to you.", "You will eliminate many enemies with Swift Strike, consistently resetting its cooldown."],
  image: "url('assets/genji.jpg')",
  sound: "assets/genji.ogg",
  color: "#96ee42"
}
var mccree = {
  name: "McCree",
  line: ["Attempting to flash a Genji will ultimately lead to flashing yourself.", "With a quick throw of a flashbang, you will often save teammates from certain demise.", "Your field of view will become a ghost town when you call High Noon.", "Your mastery of Combat Roll results in many enemy tank deaths.", "Your accuracy will be above 50%."],
  image: "url('assets/mccree.jpg')",
  sound: "assets/mccree.ogg",
  color: "#af595c"
}
var pharah = {
  name: "Pharah",
  line: ["Environmental kills are in your future.", "The majority of your rockets will be direct hits.", "You will rule the skies.", "You will be sniped often.", "Your attempts to call Barrage will result in immediate death and unsatisfactory results."],
  image: "url('assets/pharah.jpg')",
  sound: "assets/mccree.ogg",
  color: "#3c7ac5"
}
var reaper = {
  name: "Reaper",
  line: ["Horrible aim is your curse.", "Tanks stand no chance against your shotguns.", "Wraith Form is not enough to protect you from death.", "Wraith Form will often be your saving grace.", "You will be sniped often while using Shadow Step.", "Your excellent use of Death Blossom will turn the tides."],
  image: "url('assets/reaper.jpg')",
  sound: "assets/mccree.ogg",
  color: "#7d3e51"
}
var soldier76 = {
  name: "Soldier: 76",
  line: ["You will receive a gold medal for healing.", "Your damage output will be among the lowest on your team.", "Your accuracy is less than satisfactory.", "Enemy shields will render your Tactical Visor useless.", "Appropriate use of your Helix Rocket will result in many eliminations."],
  image: "url('assets/soldier.jpg')",
  sound: "assets/mccree.ogg",
  color: "#6b7996"
}
var sombra = {
  name: "Sombra",
  line: ["Your team responds unfavorably to this pick.", "A hacked health pack secures victory for your team.", "Hacking Reinhardt allows your team to push to victory.", "You will hack an enemy hero and stop their channeled ultimate.", "Excellent use of your Translocator allows you to easily escape from the fray.", "Your EMP will miss most enemy heroes."],
  image: "url('assets/sombra.jpg')",
  sound: "assets/mccree.ogg",
  color: "#7258b9"
}
var tracer = {
  name: "Tracer",
  line: ["You will use your mobility to your advantage.", "Effective use of your Recall ability saves your life frequently.", "Your use of Recall will put you in a life-threatening situation.", "Pulse Bomb will result in at least a triple kill.", "An enemy Mercy will carry your Pulse Bomb back to her teammate, resulting in a double kill."],
  image: "url('assets/tracer.jpg')",
  sound: "assets/mccree.ogg",
  color: "#d79342"
}
var bastion = {
  name: "Bastion",
  line: ["You will mitigate the damage of most attackers with Self-Repair.", "You will die almost immediately upon entering Tank configuration.", "You will receive play of the game.", "Your foresight allows you to stop shooting before and during a Genji deflection.", "You are trigger-happy, leading to deaths by Genji deflections often."],
  image: "url('assets/bastion.jpg')",
  sound: "assets/mccree.ogg",
  color: "#7d907c"
}
var hanzo = {
  name: "Hanzo",
  line: ["Your accuracy with your Storm Bow produces excessive salty tears.", "Killing enemies with Dragonstrike will prove difficult.", "Scatter Arrow quickly eliminates foes.", "You will hit no one with Scatter Arrow."],
  image: "url('assets/hanzo.jpg')",
  sound: "assets/mccree.ogg",
  color: "#bab28b"
}
var junkrat = {
  name: "Junkrat",
  line: ["You will often capture enemies in your Steel Trap.", "Your Rip-Tire will be destroyed often.", "A multi-kill with your Rip-Tire will be play of the game.", "Excessively lobbing of frag grenades proves to be beneficial."],
  image: "url('assets/junkrat.jpg')",
  sound: "assets/mccree.ogg",
  color: "#e9ba52"
}
var mei = {
  name: "Mei",
  line: ["Perfectly timed walls save your team from certain destruction.", "Your walls prove to only be a nuisance to your team.", "You will successfully freeze any hero you 1v1.", "Your accuracy with your icicles is a-mei-zing.", "A perfectly timed Cryo-Freeze will often save your life.", "Your ultimate is monumental to your team's success."],
  image: "url('assets/mei.jpg')",
  sound: "assets/mccree.ogg",
  color: "#6cacec"
}
var torbjorn = {
  name: "Torbjorn",
  line: ["Your turret will be destroyed just fractions of a second before you enable Molten Core.", "You will use Molten Core primarily as a buff to yourself, and to great benefit.", "High accuracy with your rivet gun leads to many eliminations.", "Your armor packs give your team an edge on the battlefield.", "Your turret proves to be an asset and rightfully an honorary 7th member of the team."],
  image: "url('assets/torbjorn.jpg')",
  sound: "assets/mccree.ogg",
  color: "#c1746e"
}
var widowmaker = {
  name: "Widowmaker",
  line: ["Pinpoint accuracy keeps the skies clear for your team.", "Near constant Infra-Sight keeps your team in the know at all times.", "Your Venom Mine will always alert you in time to defend against a nearby foe.", "You can beat a soldier with your rifle's automatic fire.", "You find it difficult to hit a still target. Choose another hero."],
  image: "url('assets/widowmaker.jpg')",
  sound: "assets/mccree.ogg",
  color: "#9e6aa8"
}
var dva = {
  name: "D.VA",
  line: ["You will frequently absorb key ultimates to save your team.", "You will rarely absorb key ultimates and your team suffers as a result.", "You prove to a formidable foe, even without your Mech.", "Your ultimate will clear the room and net you play of the game."],
  image: "url('assets/dva.jpg')",
  sound: "assets/mccree.ogg",
  color: "#ed93c9"
}
var reinhardt = {
  name: "Reinhardt",
  line: ["Your desire to go Rambo and play Reinhardt offensively prove of little use to the team. Choose another hero.", "You will absorb high amounts of damage with your barrier, giving your team the opportunity to push with success.", "You will successfully kill every enemy you charge.", "You are unable to hit any enemies with your fire strike.", "Your Earthshatter will result in a team wipe."],
  image: "url('assets/reinhardt.jpg')",
  sound: "assets/mccree.ogg",
  color: "#95a0a6"
}
var roadhog = {
  name: "Roadhog",
  line: ["High hook accuracy leaves the enemy team down a player frequently.", "You will find hooking enemies to be an incredibly difficult task. Choose another hero.", "You will die often while you Take a Breather.", "Initiating Whole Hog will often result in being slept and/or another form of incapacitation."],
  image: "url('assets/roadhog.jpg')",
  sound: "assets/mccree.ogg",
  color: "#b3894f"
}
var winston = {
  name: "Winston",
  line: ["Your inability to judge distance will frequently leave you jumping off the map. Choose another hero.", "Your successful use of Primal Rage will drive the enemy off the objective.", "Well-placed barrier projectors will shield your team from critical incoming damage.", "Poorly placed barrier projectors will prove useless in protecting your team."],
  image: "url('assets/winston.jpg')",
  sound: "assets/mccree.ogg",
  color: "#9ea3b9"
}
var zarya = {
  name: "Zarya",
  line: ["Poorly timed barriers will leave your energy levels low.", "Well timed barriers will leave your energy levels high.", "Excellent accuracy with your Particle Cannon's explosive charge will give you an offensive edge.", "You will frequently capture no one with your Graviton Surge. Choose another hero.", "You will frequently capture several members of the enemy team with your Graviton Surge."],
  image: "url('assets/zarya.jpg')",
  sound: "assets/mccree.ogg",
  color: "#e97eb6"
}
var ana = {
  name: "Ana",
  line: ["You will frequently Nano Boost the least capable members of your team. Choose another hero.", "You will find it difficult to successfully heal team members at critical moments. Choose another hero.", "You will primarily use Biotic Grenade to heal yourself over your teammates. Choose another hero.", "You prefer to play Ana offensively, rarely healing your teammates. Choose another hero.", "Your accuracy with your Biotic Rifle is inspiring, healing critically hurt teammates just in time.", "You will shut down key ultimates with your Sleep Dart, including but not limited to Roadhog and Soldier: 76."],
  image: "url('assets/ana.jpg')",
  sound: "assets/mccree.ogg",
  color: "#6f88b1"
}
var lucio = {
  name: "Lucio",
  line: ["You will find it difficult to determine when is best to amplify heals and when is best to amplify speed.", "You primarily amplify speed to get sick wall jumps. Choose another hero.", "Your flawless use of Amp it Up keeps your team safe in the midst of danger.", "Perfectly timed Sound Barriers protect your team from high damage enemy ultimates.", "Your accuracy with Sonic Amplifier is unparalleled. You will receive gold eliminations."],
  image: "url('assets/lucio.jpg')",
  sound: "assets/mccree.ogg",
  color: "#85c952"
}
var mercy = {
  name: "Mercy",
  line: ["You will hold on to your ultimate for the entire match only to never use it.", "Your ultimate will revive your teammates during overtime and result in a win.", "You are unaware Mercy's staff has a secondary fire mode. Choose another hero.", "You will constantly trigger Guardian Angel at inopportune times, resulting in your death.", "You will heal for greater than 25% of the damage your team has received throughout the match."],
  image: "url('assets/mercy.jpg')",
  sound: "assets/mccree.ogg",
  color: "#ece9bc"
}
var symmetra = {
  name: "Symmetra",
  line: ["Your long range sniper beam results in gold damage and eliminations.", "Your little McCrees frequently scream 'it's mid day', melting your enemies into oblivion.", "Poor placement of your ultimate leads to it being destroyed within seconds. Choose another hero.", "You don't play Symmetra offensively. Choose another hero.", "High Teleporter uptime paves the way to victory.", "High Shield Generator uptime gives your team a defensive edge."],
  image: "url('assets/symmetra.jpg')",
  sound: "assets/mccree.ogg",
  color: "#8ebbce"
}
var zenyatta = {
  name: "Zenyatta",
  line: ["Your use of Transcendence will save your team at a crucial moment.", "You will only trigger Transcendence to save yourself. Choose another hero.", "You only ever notice a teammate's cries for heals as they drop to their death. Consider another hero.", "High orb accuracy and excellent Discord Orb placement will leave enemies in the dust.", "You will frequently save teammates from death with perfectly timed Orbs of Harmony."],
  image: "url('assets/zenyatta.jpg')",
  sound: "assets/mccree.ogg",
  color: "#ebe380"
}

selectedHero = '';

// if (!selectedHero.length) {
//   page = document.getElementById('homePage');
//   page.style.visibility = "hidden";
// }

var handlers = {
  heroList: document.getElementById('heroList'),
  homePage: document.getElementById('homePage'),
  toggleMenu: function() {
    heroList.classList.toggle('open');
  },
  selectHero: function() {
    heroList.addEventListener('click', function(event) {
      var elementClicked = event.target;
      selectedHero = elementClicked.innerHTML;
      homePage.classList.add('hide');
      view.yourResults();
    });
  },
  mysteryHero: function() {
    selectedHero = heroNames[Math.floor(Math.random() * heroNames.length)];
    mysteryKey = document.getElementById('mysteryKey');
    homePage.classList.add('hide');
    mysteryKey.classList.remove('animate');
    setTimeout(function() {
      mysteryKey.classList.add('animate');
    }, 1);
    view.yourResults();
  }
}



var view = {
  setUpEventListeners: function() {
    window.addEventListener("keydown", view.checkKeyPressed, false);
  },
  checkKeyPressed: function(i) {
    var listKey = document.getElementById('listKey');
      if (i.keyCode == "72") {
          handlers.toggleMenu();
          listKey.classList.toggle('active');
      }
      if (i.keyCode == "77") {
          handlers.mysteryHero();
      }
  },
  createHeroList: function() {
    heroNames.sort();
    for (var i = 0; i < heroes.length; i++) {
      var hero = document.createElement('li');
      heroList.appendChild(hero);
      hero.innerHTML = heroNames[i];
    }
  },
  createBackground: function(hero) {
    var image = document.getElementById('image');
    var tint = document.getElementById('tint');
    image.classList.remove('animate');
    tint.classList.remove('animate');
    setTimeout(function() {
      image.classList.add('animate');
      tint.classList.add('animate');
      image.style.backgroundImage = hero.image;
      tint.style.backgroundColor = hero.color;
    }, 1000);
  },
  heroFortune: function(hero) {
    var result = document.getElementById('heroFortune');
    var randomResult = hero.line[Math.floor(Math.random() * hero.line.length)];
    result.classList.remove('animate');
    setTimeout(function() {
      result.classList.add('animate');
      result.innerHTML = randomResult;
    }, 1000);
  },
  heroName: function(hero) {
    var heroName = document.getElementById('heroName');
    heroName.classList.remove('animate');
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
    view.heroFortune(hero);
    view.heroName(hero);
  },
  yourResults: function() {
    switch (selectedHero) {
      case 'Genji':
        view.generateHeroPage(genji);
      break;
      case 'McCree':
        view.generateHeroPage(mccree);
      break;
      case 'Pharah':
        view.generateHeroPage(pharah);
      break;
      case 'Reaper':
        view.generateHeroPage(reaper);
      break;
      case 'Soldier: 76':
        view.generateHeroPage(soldier76);
      break;
      case 'Sombra':
        view.generateHeroPage(sombra);
      break;
      case 'Tracer':
        view.generateHeroPage(tracer);
      break;
      case 'Bastion':
        view.generateHeroPage(bastion);
      break;
      case 'Hanzo':
        view.generateHeroPage(hanzo);
      break;
      case 'Junkrat':
        view.generateHeroPage(junkrat);
      break;
      case 'Mei':
        view.generateHeroPage(mei);
      break;
      case 'Torbjorn':
        view.generateHeroPage(torbjorn);
      break;
      case 'Widowmaker':
        view.generateHeroPage(widowmaker);
      break;
      case 'D.VA':
        view.generateHeroPage(dva);
      break;
      case 'Reinhardt':
        view.generateHeroPage(reinhardt);
      break;
      case 'Roadhog':
        view.generateHeroPage(roadhog);
      break;
      case 'Winston':
        view.generateHeroPage(winston);
      break;
      case 'Zarya':
        view.generateHeroPage(zarya);
      break;
      case 'Ana':
        view.generateHeroPage(ana);
      break;
      case 'Lucio':
        view.generateHeroPage(lucio);
      break;
      case 'Mercy':
        view.generateHeroPage(mercy);
      break;
      case 'Symmetra':
        view.generateHeroPage(symmetra);
      break;
      case 'Zenyatta':
        view.generateHeroPage(zenyatta);
      break;
    }
  }
}
view.setUpEventListeners();
view.createHeroList();
handlers.selectHero();
