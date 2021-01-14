describe('test Delivery',()=>{
  before(function () {
    router.push({
      name:'Delivery',
    })
  })
  it('test page title',() => {
    expect(window.document.title).to.be.equal('DeliveryTitle');
  })
  it('route name',() => {
    expect(route.name).to.be.equal('Delivery');
  })
  it('test FormItem label',() => {
    let FormItem = page.findVueNode('FormItem')
    expect(FormItem.label).to.be.equal('item label');
  })
})

