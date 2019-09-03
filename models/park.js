const Park = function (name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
}


Park.prototype.addADinosaur = function(dinosaur) {
    this.dinosaurs.push(dinosaur)
};






module.exports = Park;
