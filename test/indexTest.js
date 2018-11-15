describe("index.js", () => {
  it("has a function runFiveMiles", () => {
    expect(runFiveMiles()).to.equal('Go for a five-mile run')
  })
  it("has a function liftWeights", () => {
    expect(liftWeights()).to.equal('Pump iron')
  })
  it("has a function swimFortyLaps", () => {
    expect(swimFortyLaps()).to.equal('Swim 40 laps')
  })
  it("has a function exerciseRoutine", () => {
    expect(exerciseRoutine(liftWeights)).to.equal('Go for a five-mile run Pump iron')
  })
  it("has a functions for each day of the week", () => {
    expect(monday).to.exist
    expect(tuesday).to.exist
    expect(wednesday).to.exist
    expect(thursday).to.exist
    expect(friday).to.exist
  })
  it("has a function functionsArray that contains an array of function values", () => {
    expect(functionsArray).to.be.a('array');
    expect(functionsArray).to.include(monday,tuesday,wednesday,thursday,friday);
  })
  it("has a function printRoutine that returns the full week's exercise routine", () => {
    expect(functionsArray).to.have.members([monday,tuesday,wednesday,thursday,friday]);
  })
})
