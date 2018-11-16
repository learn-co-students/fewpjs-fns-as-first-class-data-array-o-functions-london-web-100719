var dogName = "Byron"
var dogBreed = "poodle"

describe("index.js", () => {
  it("has a function wakeDog", () => {
    expect(wakeDog()).to.equal(`Wake ${dogName} the ${dogBreed}`)
  })
  it("has a function leashDog", () => {
    expect(leashDog()).to.equal(`Leash ${dogName} the ${dogBreed}`)
  })
  it("has a function walkToPark", () => {
    expect(walkToPark()).to.equal(`Walk to the park with ${dogName} the ${dogBreed}`)
  })
  it("has a function throwFrisbee", () => {
    expect(throwFrisbee()).to.equal(`Throw the frisbee for ${dogName} the ${dogBreed}`)
  })
  it("has a function walkHome", () => {
    expect(walkHome()).to.equal(`Walk home with ${dogName} the ${dogBreed}`)
  })
  it("has a function unleashDog", () => {
    expect(unleashDog()).to.equal(`Unleash ${dogName} the ${dogBreed}`)
  })
  it("accepts 2 parameters for dogName and dogBreed", () => {
    expect(wakeDog("Skippy", "Welsh Corgi")).to.equal(`Wake Skippy the Welsh Corgi`)
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
    expect(routine).to.be.a('array');
    expect(routine).to.include(wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog);
  })
  it("has a function exerciseDog that returns the full day's dog exercise routine", () => {
    expect(routine).to.have.members([wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]);
  })
})
