import kQuery from '../src/main'

test('Remove()', function() {

  document.body.innerHTML =
    '<div class="item">Some</div>' +
    '<div class="item">Item</div>'

  expect(kQuery('.item').remove()).toEqual([])
});

