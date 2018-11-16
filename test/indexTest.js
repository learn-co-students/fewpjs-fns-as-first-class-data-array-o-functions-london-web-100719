describe("index.js", () => {
  it("has a function wakeDog", () => {
    expect(wakeDog()).to.equal('Wake Byron the poodle')
  })
  it("has a function leashDog", () => {
    expect(leashDog()).to.equal()
  })
  it("has a function walkToPark", () => {
    expect(walkToPark()).to.equal()
  })
  it("has a function throwFrisbee", () => {
    expect(throwFrisbee()).to.equal()
  })
  it("has a function walkHome", () => {
    expect(walkHome()).to.equal()
  })
  it("has a function unleashDog", () => {
    expect(unleashDog()).to.equal()
  })
  it("has variables for each activity", () => {
    expect(wakeDog).to.exist
    expect(leashDog).to.exist
    expect(walkToPark).to.exist
    expect(throwFrisbee).to.exist
    expect(walkHome).to.exist
    expect(unleashDog).to.exist
  })
  it("has an array called 'routine' that contains each activity", () => {
    expect(functionsArray).to.be.a('array');
    expect(functionsArray).to.include(wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog);
  })
  it("has a function exerciseDog that returns the full day's dog exercise routine", () => {
    expect(functionsArray).to.have.members([monday,tuesday,wednesday,thursday,friday]);
  })
})
