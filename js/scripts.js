function PlacesVisited() {
  this.placesVisited = [];
  this.currentId = 0;
}

PlacesVisited.prototype.addPlacesVisited = function(id) {
  placesVisited.id = this.assignId();
  this.placesVisited.push(placesVisited);
}

PlacesVisited.prototype.deletePlacesVisited = function(id) {
  for (let i=0; i< this.placesVisited.length; i ++) {
    if (this.placesVisited[i]) {
      if (this.placesVisited[i].id == id) {
        delete this.placesVisited[i];
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

PlacesVisited.prototype.findPlacesVisited = function(id) {
  for (let i=0; i<this.placesVisited.length; i++) {
    if (this.placesVisited[i]) {
      if (this.placesVisited[i].id == id) {
        return this.placesVisited[i];
      }
    }
  };
  return false;
}

function PlacesVisited(location, favoriteLandmark, season) {
  this.location = location;
  this.favoriteLandmark = favoriteLandmark;
  this.season = season;
}

PlacesVisited.myFavoritePlaces = function() {
  return "I visited" + " " + this.location  + " " + "and saw" + " " + this.favoriteLandmark + " " + "during the" + " " + this.season;
}
