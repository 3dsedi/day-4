function displayName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function parseCookie(cookie) {
  return cookie
    .split(';')
    .map(c => c.trim())
    .filter(c => c.startsWith('auth.status'))
    .map(kv => kv.split('=')[1])
    .map(v => v.split(':')[1])
    .map(n => displayName(n))[0];
}
function addGreetingTo(selection) {
  const name = parseCookie(document.cookie);

  if (name) {
    const element = document.querySelector(selection);
    element.innerHTML = `Welcome ${name}!`;
  }
}

module.exports.addGreetingTo = addGreetingTo;
