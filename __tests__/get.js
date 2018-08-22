import kQuery from '../src/main'

test('Get()', function() {

    document.body.innerHTML =
    '<div class="item">Some</div>' +
    '<div class="item">Item</div>' +
    '<span class="itemReplacement">Hello</span>' +
    '<span class="itemReplacement">World!</span>'

    expect(kQuery('.item').get()).toHaveLength(2)
});