/* global Vue, _, Sortable */

const originalData = {
  version: '0.0.2',
  activeTab: 'shiny',
  pokemon: [
    {name: 'Bulbasaur', owned: false, dex: '1', shiny: true, alolan: false},
    {name: 'Ivysaur', owned: false, dex: '2', shiny: true, alolan: false},
    {name: 'Venusaur', owned: false, dex: '3', shiny: true, alolan: false},
    {name: 'Charmander', owned: false, dex: '4', shiny: true, alolan: false},
    {name: 'Charmeleon', owned: false, dex: '5', shiny: true, alolan: false},
    {name: 'Charizard', owned: false, dex: '6', shiny: true, alolan: false},
    {name: 'Squritle', owned: false, dex: '7', shiny: true, alolan: false},
    {name: 'Wartortle', owned: false, dex: '8', shiny: true, alolan: false},
    {name: 'Blastoise', owned: false, dex: '9', shiny: true, alolan: false},
    {name: 'Squritle (Glasses)', owned: false, dex: '', shiny: true, alolan: false},
    {name: 'Wartortle (Glasses)', owned: false, dex: '', shiny: true, alolan: false},
    {name: 'Blastoise (Glasses)', owned: false, dex: '', shiny: true, alolan: false},
    {name: 'Rattata', owned: false, dex: '19', alolan: true},
    {name: 'Raticate', owned: false, dex: '20', alolan: true},
    {name: 'Pikachu', owned: false, dex: '25', shiny: true, alolan: false},
    {name: 'Raichu', owned: false, dex: '26', shiny: true, alolan: false},
    {name: 'Pikachu (Party Hat)', owned: false, dex: '25', shiny: true, alolan: false},
    {name: 'Raichu (Party Hat)', owned: false, dex: '26', shiny: true, alolan: false},
    {name: 'Sandshrew', owned: false, dex: '27', alolan: true},
    {name: 'Sandslash', owned: false, dex: '28', alolan: true},
    {name: 'Vulpix', owned: false, dex: '37', alolan: true},
    {name: 'Ninetails', owned: false, dex: '38', alolan: true},
    {name: 'Diglett', owned: false, dex: '50', alolan: true},
    {name: 'Dugtrio', owned: false, dex: '51', alolan: true},
    {name: 'Meowth', owned: false, dex: '52', alolan: true},
    {name: 'Persian', owned: false, dex: '53', alolan: true},
    {name: 'Geodude', owned: false, dex: '74', alolan: true},
    {name: 'Graveller', owned: false, dex: '75', alolan: true},
    {name: 'Golem', owned: false, dex: '76', alolan: true},
    {name: 'Grimer', owned: false, dex: '88', alolan: true},
    {name: 'Muk', owned: false, dex: '89', alolan: true},
    {name: 'Shellder', owned: false, dex: '90', shiny: true, alolan: false},
    {name: 'Cloyster', owned: false, dex: '91', shiny: true, alolan: false},
    {name: 'Exeggutor', owned: false, dex: '103', alolan: true},
    {name: 'Magmar', owned: false, dex: '126', shiny: true, alolan: false},
    {name: 'Magikarp', owned: false, dex: '129', shiny: true, alolan: false},
    {name: 'Gyarados', owned: false, dex: '130', shiny: true, alolan: false},
    {name: 'Omanyte', owned: false, dex: '138', shiny: true, alolan: false},
    {name: 'Omastar', owned: false, dex: '139', shiny: true, alolan: false},
    {name: 'Kabuto', owned: false, dex: '140', shiny: true, alolan: false},
    {name: 'Kabutops', owned: false, dex: '141', shiny: true, alolan: false},
    {name: 'Aerodactyl', owned: false, dex: '142', shiny: true, alolan: false},
    {name: 'Articuno', owned: false, dex: '144', shiny: true, alolan: false},
    {name: 'Dratini', owned: false, dex: '147', shiny: true, alolan: false},
    {name: 'Dragonair', owned: false, dex: '148', shiny: true, alolan: false},
    {name: 'Dragonite', owned: false, dex: '149', shiny: true, alolan: false},
    {name: 'Pichu', owned: false, dex: '172', shiny: true, alolan: false},
    {name: 'Pichu (Party Hat)', owned: false, dex: '', shiny: true, alolan: false},
    {name: 'Togepi', owned: false, dex: '175', shiny: true, alolan: false},
    {name: 'Togetic', owned: false, dex: '176', shiny: true, alolan: false},
    {name: 'Mareep', owned: false, dex: '179', shiny: true, alolan: false},
    {name: 'Flaafy', owned: false, dex: '180', shiny: true, alolan: false},
    {name: 'Ampharos', owned: false, dex: '181', shiny: true, alolan: false},
    {name: 'Murkrow', owned: false, dex: '198', shiny: true, alolan: false},
    {name: 'Wobbuffet', owned: false, dex: '202', shiny: true, alolan: false},
    {name: 'Magby', owned: false, dex: '240', shiny: true, alolan: false},
    {name: 'Larvitar', owned: false, dex: '246', shiny: true, alolan: false},
    {name: 'Pupitar', owned: false, dex: '247', shiny: true, alolan: false},
    {name: 'Tyranitar', owned: false, dex: '248', shiny: true, alolan: false},
    {name: 'Lugia', owned: false, dex: '249', shiny: true, alolan: false},
    {name: 'Ho-Oh', owned: false, dex: '250', shiny: true, alolan: false},
    {name: 'Poocheyna', owned: false, dex: '261', shiny: true, alolan: false},
    {name: 'Mightyena', owned: false, dex: '262', shiny: true, alolan: false},
    {name: 'Makuhita', owned: false, dex: '296', shiny: true, alolan: false},
    {name: 'Hariyama', owned: false, dex: '297', shiny: true, alolan: false},
    {name: 'Sableye', owned: false, dex: '302', shiny: true, alolan: false},
    {name: 'Mawile', owned: false, dex: '303', shiny: true, alolan: false},
    {name: 'Aron', owned: false, dex: '304', shiny: true, alolan: false},
    {name: 'Lairon', owned: false, dex: '305', shiny: true, alolan: false},
    {name: 'Aggron', owned: false, dex: '306', shiny: true, alolan: false},
    {name: 'Meditite', owned: false, dex: '307', shiny: true, alolan: false},
    {name: 'Medicham', owned: false, dex: '308', shiny: true, alolan: false},
    {name: 'Roselia', owned: false, dex: '315', shiny: true, alolan: false},
    {name: 'Wailmer', owned: false, dex: '320', shiny: true, alolan: false},
    {name: 'Wailord', owned: false, dex: '321', shiny: true, alolan: false},
    {name: 'Swablu', owned: false, dex: '333', shiny: true, alolan: false},
    {name: 'Altaria', owned: false, dex: '334', shiny: true, alolan: false},
    {name: 'Shuppet', owned: false, dex: '353', shiny: true, alolan: false},
    {name: 'Banette', owned: false, dex: '354', shiny: true, alolan: false},
    {name: 'Duskull', owned: false, dex: '355', shiny: true, alolan: false},
    {name: 'Dusclops', owned: false, dex: '356', shiny: true, alolan: false},
    {name: 'Absol', owned: false, dex: '359', shiny: true, alolan: false},
    {name: 'Wynaut', owned: false, dex: '360', shiny: true, alolan: false},
    {name: 'Snorunt', owned: false, dex: '361', shiny: true, alolan: false},
    {name: 'Glalie', owned: false, dex: '362', shiny: true, alolan: false},
    {name: 'Luvdisc', owned: false, dex: '370', shiny: true, alolan: false},
    {name: 'Kyogre', owned: false, dex: '382', shiny: true, alolan: false},
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

    data = _.cloneDeep(originalData);
  }
} else {
  data = _.cloneDeep(originalData);
}

// data = _.cloneDeep(originalData);

// data.gamemasterData = fetch('https://raw.githubusercontent.com/pokemongo-dev-contrib/pokemongo-json-pokedex/master/output/pokemon.json')
//   .then(function(response) {
//     return response.json();
//   });

const vm = new Vue({
  el: '#app',
  data,

  methods: {
    makeActive(val) {
      this.activeTab = val;
    },
    isActiveTab(val) {
      return this.activeTab === val;
    },
    toggleOwned(pokemon) {
      pokemon.owned = !pokemon.owned;
      localStorage.setItem('data', JSON.stringify(data));
    }
  },
});
