function NurserySchoolDatabase(creche, kindergateen, nurseryOne) {
  this.creche = creche;
  (this.kindergateen = kindergateen), (this.nurseryOne = nurseryOne);
}

NurserySchoolDatabase.prototype.nurseryTwo = 20;

const StarWorldSchoolsDatabase = new NurserySchoolDatabase(10, 15, 14);

console.log(StarWorldSchoolsDatabase);
