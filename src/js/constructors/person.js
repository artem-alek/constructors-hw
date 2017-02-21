function Person (people) {
  people = people || {};
  this.cool = (people.cool == undefined ? false : true);
}

Person.prototype.pet = function (petted) {
  petted.status = "happy";
};

Person.prototype.feed = function (feeding) {
  feeding.hungry = false;
}

export { Person };
