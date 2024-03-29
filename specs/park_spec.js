const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('velociraptus', 'carnivore', 45);
    dinosaur3 = new Dinosaur('abrosaurus', 'herbivore', 30);

    park = new Park ('Jurassic Park', 20, [dinosaur1, dinosaur2])

  })

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 20)
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2]);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addADinosaur(dinosaur3);

    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2, dinosaur3]);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.removeADinosaur(dinosaur2);

    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1]);
  });

  // it('should be able to find the dinosaur that attracts the most visitors');
  //   const actual = park.findBestSellingDinosaur;
  //   assert.strictEqual(actual, dinosaur1);
  // });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day', function() {
    const actual = park.numberOfVisitorsPerDay;
    assert.strictEqual(actual, 95)
  );

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
