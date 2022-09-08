/* eslint-disable no-param-reassign */
function asHtml(quote) {
  const elements = [];
  elements.push('<div class="quote">');
  elements.push(`<blockquote>${quote.quote}</blockquote>`);
  elements.push('</div>');
  return elements.join('');
}

function appendTo(element, quote) {
  element.innerHTML = asHtml(quote);
}

module.exports.appendTo = appendTo;
