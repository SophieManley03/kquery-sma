import kQuery from '../src/main'

test('Find()', function() {

  document.body.innerHTML =
    '<div class="item">World! <span>Hello</span></div>' +
    '<div class="item">Hello <span>World!</span></div>'
  
  const result = kQuery('div').find('span').values.map(_ => _.outerHTML)
  const expected = ["<span>Hello</span>", "<span>World!</span>"]

  expect(result).toEqual(expected)
});

test('Find() #2', function() {

  document.body.innerHTML =
    '<div class="item">World! <p>Hello</p></div>' +
    '<div class="item">Hello <p>World!</p></div>'
  
  const result = kQuery('.item').find('span').values.map(_ => _.outerHTML)

  expect(result).toEqual([])
});