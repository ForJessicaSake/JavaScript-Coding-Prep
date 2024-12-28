function NurserySchoolDatabase(creche, kindergateen, nurseryOne) {
  this.creche = creche;
  this.kindergateen = kindergateen;
  this.nurseryOne = nurseryOne;
}

NurserySchoolDatabase.prototype.nurseryTwo = 20;

NurserySchoolDatabase.prototype.total = function () {
  const { creche, kindergateen, nurseryOne, nurseryTwo } = this;
  return creche + kindergateen + nurseryOne + nurseryTwo;
};

const StarWorldSchoolsDatabase = new NurserySchoolDatabase(10, 15, 14);

console.log(StarWorldSchoolsDatabase.total());
console.log(StarWorldSchoolsDatabase);
