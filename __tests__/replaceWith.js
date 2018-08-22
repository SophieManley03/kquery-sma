import kQuery from '../src/main'

test('replaceWith()', function() {

  document.body.innerHTML =
    '<div class="item">Some</div>' +
    '<div class="item">Item</div>' +
    '<span class="itemReplacement">Hello</span>' +
    '<span class="itemReplacement">World!</span>'

  const result = kQuery('.item').replaceWith(kQuery('.itemReplacement')).values.map(_ => _.outerHTML)
  const expected = ["<span class=\"itemReplacement\">Hello</span>", "<span class=\"itemReplacement\">World!</span>"]

  expect(result)
    .toEqual(expected)
});
