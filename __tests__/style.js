import kQuery from '../src/main'

test('style', function() {
  document.body.innerHTML =
    '<div class="item">Some</div>' +
    '<div class="item">Item</div>' +
    '<span class="itemReplacement">Hello</span>' +
    '<span class="itemReplacement">World!</span>'

  const result = kQuery('.itemReplacement').style({ color: 'red' }).values.map(_ => _.outerHTML)
  const expected = ["<span class=\"itemReplacement\" style=\"color:red\">Hello</span>", "<span class=\"itemReplacement\" style=\"color:red\">World!</span>"]

  expect(result)
    .toEqual(expected)
});