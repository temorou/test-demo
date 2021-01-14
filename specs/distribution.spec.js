describe('test Distribution',()=>{
  before(function () {
    router.push({
      name:'Distribution',
    })
  })
  it('test page title',() => {
    expect(window.document.title).to.be.equal('DistributionTitle');
  })
  it('test route name',() => {
    expect(route.name).to.be.equal('Distribution');
  })
})

