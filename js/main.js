/* global Vue, _, Sortable */

const originalData = {
  version: '0.0.1',
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
    {name: 'Squritle (Glasses)', owned: false, dex: '7', shiny: true, alolan: false},
    {name: 'Wartortle (Glasses)', owned: false, dex: '8', shiny: true, alolan: false},
    {name: 'Blastoise (Glasses)', owned: false, dex: '9', shiny: true, alolan: false},
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
    {name: 'Shellder', owned: false, dex: '', shiny: true, alolan: false},
    {name: 'Cloyster', owned: false, dex: '', shiny: true, alolan: false},
    {name: 'Exeggutor', owned: false, dex: '103', alolan: true},
    {name: 'Magby', owned: false, dex: '', shiny: true, alolan: false},
    {name: 'Magmar', owned: false, dex: '', shiny: true, alolan: false},
    {name: 'Magikarp', owned: false, dex: '', shiny: true, alolan: false},
    {name: 'Gyarados', owned: false, dex: '', shiny: true, alolan: false},
    {name: 'Omanyte', owned: false, dex: '', shiny: true, alolan: false},
    {name: 'Omastar', owned: false, dex: '', shiny: true, alolan: false},
    {name: 'Kabuto', owned: false, dex: '', shiny: true, alolan: false},
    {name: 'Kabutops', owned: false, dex: '', shiny: true, alolan: false},
    {name: 'Aerodactyl', owned: false, dex: '', shiny: true, alolan: false},
    {name: 'Articuno', owned: false, dex: '', shiny: true, alolan: false},
    {name: 'Dratini', owned: false, dex: '', shiny: true, alolan: false},
    {name: 'Dragonair', owned: false, dex: '', shiny: true, alolan: false},
    {name: 'Dragonite', owned: false, dex: '', shiny: true, alolan: false},
    {name: 'Togepi', owned: false, dex: '', shiny: true, alolan: false},
    {name: 'Togetic', owned: false, dex: '', shiny: true, alolan: false},
    {name: 'Pichu', owned: false, dex: '', shiny: true, alolan: false},
    {name: 'Pichu (Party Hat)', owned: false, dex: '', shiny: true, alolan: false},
    {name: 'Mareep', owned: false, dex: '', shiny: true, alolan: false},
    {name: 'Flaafy', owned: false, dex: '', shiny: true, alolan: false},
    {name: 'Ampharos', owned: false, dex: '', shiny: true, alolan: false},
  ],
  gamemasterData : []
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
