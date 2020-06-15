


// UI Logic

$(document).ready(function() {
  $("form#new-places-visited").submit(function(event) {
    event.preventDefault();
    const inputtedLocation = $("input#new-location").val();
    const inputtedFavoriteLandmark = $("input#new-favoriteLandmark").val();
    const inputtedSeason = $("input#new-season").val();
    let placesVisited = new PlacesVisited();
    let newLocale = new Locale(inputtedLocation, inputtedFavoriteLandmark, inputtedSeason);
    placesVisited.addlocales(newLocale);
    $(".location").text(inputtedLocation);
    $(".favoriteLandmark").text(inputtedFavoriteLandmark);
    $(".season").text(inputtedSeason);
    $("#show-placesVisited").show();
  })
})


//Business Logic
function PlacesVisited(){
  this.locales = [];
  this.currentId = 0;
}

PlacesVisited.prototype.addlocales = function(locale) {
  locale.id = this.assignId();
  this.locales.push(locale);
}

PlacesVisited.prototype.deletelocales = function(id) {
  for (let i=0; i< this.locales.length; i ++) {
    if (this.locales[i]) {
      if (this.locales[i].id == id) {
        delete this.locales[i];
        return true;
      }
    }
  };
  return false;
}

PlacesVisited.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

PlacesVisited.prototype.findlocales = function(id) {
  for (let i=0; i<this.locales.length; i++) {
    if (this.locales[i]) {
      if (this.locales[i].id == id) {
        return this.locales[i];
      }
    }
  };
  return false;
}

function Locale(location, favoriteLandmark, season) {
  this.location = location;
  this.favoriteLandmark = favoriteLandmark;
  this.season = season;
}

Locale.myFavoritePlaces = function() {
  return "I visited" + " " + this.location  + " " + "and saw" + " " + this.favoriteLandmark + " " + "during the" + " " + this.season;
}
