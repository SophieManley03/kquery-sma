import kQuery from '../src/main'

test('Append()', function() {

  document.body.innerHTML =
    '<div class="item">Some</div>' +
    '<div class="item">Item</div>' +
    '<span class="itemReplacement">Hello</span>' +
    '<span class="itemReplacement">World!</span>'
  
  const result = kQuery('div').append('<span>This is a span</span>').values.map(_ => _.outerHTML)
  const expected = ['<div class="item">Some<span>This is a span</span></div>',
    '<div class="item">Item<span>This is a span</span></div>']

  expect(result).toEqual(expected)
});
