/* global Vue, _, Sortable */

const originalData = {
  version: '0.0.3',
  activeTab: 'all',
  pokemon: [
    {name: 'Bulbasaur', owned: false, dex: '1', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Ivysaur', owned: false, dex: '2', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Venusaur', owned: false, dex: '3', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Charmander', owned: false, dex: '4', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Charmeleon', owned: false, dex: '5', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Charizard', owned: false, dex: '6', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Squritle', owned: false, dex: '7', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Wartortle', owned: false, dex: '8', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Blastoise', owned: false, dex: '9', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Squritle (Glasses)', owned: false, dex: '', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Wartortle (Glasses)', owned: false, dex: '', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Blastoise (Glasses)', owned: false, dex: '', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Rattata', owned: false, dex: '19', shiny: false, shinyOwned: false, alolan: true, alolanOwned: false},
    {name: 'Raticate', owned: false, dex: '20', shiny: false, shinyOwned: false, alolan: true, alolanOwned: false},
    {name: 'Pikachu', owned: false, dex: '25', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Raichu', owned: false, dex: '26', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Pikachu (Party Hat)', owned: false, dex: '', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Raichu (Party Hat)', owned: false, dex: '', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Sandshrew', owned: false, dex: '27', shiny: false, shinyOwned: false, alolan: true, alolanOwned: false},
    {name: 'Sandslash', owned: false, dex: '28', shiny: false, shinyOwned: false, alolan: true, alolanOwned: false},
    {name: 'Vulpix', owned: false, dex: '37', shiny: false, shinyOwned: false, alolan: true, alolanOwned: false},
    {name: 'Ninetails', owned: false, dex: '38', shiny: false, shinyOwned: false, alolan: true, alolanOwned: false},
    {name: 'Diglett', owned: false, dex: '50', shiny: false, shinyOwned: false, alolan: true, alolanOwned: false},
    {name: 'Dugtrio', owned: false, dex: '51', shiny: false, shinyOwned: false, alolan: true, alolanOwned: false},
    {name: 'Meowth', owned: false, dex: '52', shiny: false, shinyOwned: false, alolan: true, alolanOwned: false},
    {name: 'Persian', owned: false, dex: '53', shiny: false, shinyOwned: false, alolan: true, alolanOwned: false},
    {name: 'Geodude', owned: false, dex: '74', shiny: false, shinyOwned: false, alolan: true, alolanOwned: false},
    {name: 'Graveller', owned: false, dex: '75', shiny: false, shinyOwned: false, alolan: true, alolanOwned: false},
    {name: 'Golem', owned: false, dex: '76', shiny: false, shinyOwned: false, alolan: true, alolanOwned: false},
    {name: 'Farfetch\'d', owned: false, dex: '83', shiny: false, shinyOwned: false, alolan: false, alolanOwned: false, regional: true, regionalOwned: false},
    {name: 'Grimer', owned: false, dex: '88', shiny: false, shinyOwned: false, alolan: true, alolanOwned: false},
    {name: 'Muk', owned: false, dex: '89', shiny: false, shinyOwned: false, alolan: true, alolanOwned: false},
    {name: 'Shellder', owned: false, dex: '90', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Cloyster', owned: false, dex: '91', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Exeggutor', owned: false, dex: '103', shiny: false, shinyOwned: false, alolan: true, alolanOwned: false},
    {name: 'Mr. Mine', owned: false, dex: '122', shiny: false, shinyOwned: false, alolan: false, alolanOwned: false, regional: true, regionalOwned: false},
    {name: 'Magmar', owned: false, dex: '126', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Tauros', owned: false, dex: '128', shiny: false, shinyOwned: false, alolan: false, alolanOwned: false, regional: true, regionalOwned: false},
    {name: 'Magikarp', owned: false, dex: '129', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Gyarados', owned: false, dex: '130', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Omanyte', owned: false, dex: '138', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Omastar', owned: false, dex: '139', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Kabuto', owned: false, dex: '140', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Kabutops', owned: false, dex: '141', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Aerodactyl', owned: false, dex: '142', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Articuno', owned: false, dex: '144', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Dratini', owned: false, dex: '147', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Dragonair', owned: false, dex: '148', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Dragonite', owned: false, dex: '149', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Pichu', owned: false, dex: '172', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Pichu (Party Hat)', owned: false, dex: '', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Togepi', owned: false, dex: '175', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Togetic', owned: false, dex: '176', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Mareep', owned: false, dex: '179', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Flaafy', owned: false, dex: '180', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Ampharos', owned: false, dex: '181', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Murkrow', owned: false, dex: '198', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Wobbuffet', owned: false, dex: '202', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Corsola', owned: false, dex: '222', shiny: false, shinyOwned: false, alolan: false, alolanOwned: false, regional: true, regionalOwned: false},
    {name: 'Heracross', owned: false, dex: '214', shiny: false, shinyOwned: false, alolan: false, alolanOwned: false, regional: true, regionalOwned: false},
    {name: 'Magby', owned: false, dex: '240', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Larvitar', owned: false, dex: '246', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Pupitar', owned: false, dex: '247', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Tyranitar', owned: false, dex: '248', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Lugia', owned: false, dex: '249', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Ho-Oh', owned: false, dex: '250', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Poocheyna', owned: false, dex: '261', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Mightyena', owned: false, dex: '262', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Makuhita', owned: false, dex: '296', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Hariyama', owned: false, dex: '297', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Sableye', owned: false, dex: '302', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Mawile', owned: false, dex: '303', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Aron', owned: false, dex: '304', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Lairon', owned: false, dex: '305', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Aggron', owned: false, dex: '306', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Meditite', owned: false, dex: '307', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Medicham', owned: false, dex: '308', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Volbeat', owned: false, dex: '313', shiny: false, shinyOwned: false, alolan: false, alolanOwned: false, regional: true, regionalOwned: false},
    {name: 'Illumise', owned: false, dex: '314', shiny: false, shinyOwned: false, alolan: false, alolanOwned: false, regional: true, regionalOwned: false},
    {name: 'Roselia', owned: false, dex: '315', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Wailmer', owned: false, dex: '320', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Wailord', owned: false, dex: '321', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Torkal', owned: false, dex: '324', shiny: false, shinyOwned: false, alolan: false, alolanOwned: false, regional: true, regionalOwned: false},
    {name: 'Swablu', owned: false, dex: '333', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Altaria', owned: false, dex: '334', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Zangoose', owned: false, dex: '335', shiny: false, shinyOwned: false, alolan: false, alolanOwned: false, regional: true, regionalOwned: false},
    {name: 'Seviper', owned: false, dex: '336', shiny: false, shinyOwned: false, alolan: false, alolanOwned: false, regional: true, regionalOwned: false},
    {name: 'Lunatone', owned: false, dex: '337', shiny: false, shinyOwned: false, alolan: false, alolanOwned: false, regional: true, regionalOwned: false},
    {name: 'Solrock', owned: false, dex: '338', shiny: false, shinyOwned: false, alolan: false, alolanOwned: false, regional: true, regionalOwned: false},
    {name: 'Shuppet', owned: false, dex: '353', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Banette', owned: false, dex: '354', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Duskull', owned: false, dex: '355', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Dusclops', owned: false, dex: '356', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Tropius', owned: false, dex: '357', shiny: false, shinyOwned: false, alolan: false, alolanOwned: false, regional: true, regionalOwned: false},
    {name: 'Absol', owned: false, dex: '359', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Wynaut', owned: false, dex: '360', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Snorunt', owned: false, dex: '361', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Glalie', owned: false, dex: '362', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Relicanth', owned: false, dex: '369', shiny: false, shinyOwned: false, alolan: false, alolanOwned: false, regional: true, regionalOwned: false},
    {name: 'Luvdisc', owned: false, dex: '370', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
    {name: 'Kyogre', owned: false, dex: '382', shiny: true,  shinyOwned: false, alolan: false, alolanOwned: false},
  ],
  gamemasterData: []
}

// Load saved data if it exists
const savedData = JSON.parse(localStorage.getItem('data')) || false;
let data;
if (savedData) {
  if (savedData.version === originalData.version) {
    data = _.cloneDeep(savedData);
  } else {
    data = _.merge(_.cloneDeep(originalData), _.cloneDeep(savedData));
    data.version = originalData.version
    console.log(data)
  }
} else {
  data = _.cloneDeep(originalData);
}

// data.gamemasterData = fetch('https://raw.githubusercontent.com/pokemongo-dev-contrib/pokemongo-json-pokedex/master/output/pokemon.json')
//   .then(function(response) {
//     return response.json();
//   });

const vm = new Vue({
  el: '#app',
  data,
  computed: {
    shinyCount: function () {
      return this.pokemon.filter(function (pokemon) {
        return pokemon.shiny
      })
    },
    shinyCollected: function () {
      return this.pokemon.filter(function (pokemon) {
        return pokemon.shinyOwned
      })
    },
    alolanCount: function () {
      return this.pokemon.filter(function (pokemon) {
        return pokemon.alolan
      })
    },
    alolanCollected: function () {
      return this.pokemon.filter(function (pokemon) {
        return pokemon.alolanOwned
      })
    },
    regionalCount: function () {
      return this.pokemon.filter(function (pokemon) {
        return pokemon.regional
      })
    },
    regionalCollected: function () {
      return this.pokemon.filter(function (pokemon) {
        return pokemon.regionalOwned
      })
    },
  },
  methods: {
    makeActive(val) {
      this.activeTab = val;
      localStorage.setItem('data', JSON.stringify(data));
    },
    isActiveTab(val) {
      return this.activeTab === val;
    },
    toggleOwned(pokemon) {
      pokemon.owned = !pokemon.owned;
      localStorage.setItem('data', JSON.stringify(data));
    },
    toggleShinyOwned(pokemon) {
      pokemon.shinyOwned = !pokemon.shinyOwned;
      localStorage.setItem('data', JSON.stringify(data));
    },
    toggleAlolanOwned(pokemon) {
      pokemon.alolanOwned = !pokemon.alolanOwned;
      localStorage.setItem('data', JSON.stringify(data));
    },
    toggleRegionalOwned(pokemon) {
      pokemon.regionalOwned = !pokemon.regionalOwned;
      localStorage.setItem('data', JSON.stringify(data));
    },
  },
});
