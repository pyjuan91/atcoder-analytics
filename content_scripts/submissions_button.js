(function() {
  const m = location.pathname.match(/^\/users\/([^\/]+)$/);
  if (!m) return;
  const user = m[1];

  const tabs = document.querySelector('ul.nav.nav-tabs');
  if (!tabs) return;

  const li = document.createElement('li');
  const a  = document.createElement('a');

  const icon = document.createElement('span');
  icon.classList.add('glyphicon', 'glyphicon-film');

  icon.style.marginRight = '4px';
  a.appendChild(icon);

  a.appendChild(document.createTextNode('Submissions'));

  a.href   = `https://kenkoooo.com/atcoder/atcoder-api/v3/user/submissions?user=${user}&from_second=0`;
  a.target = '_blank';
  li.appendChild(a);

  tabs.appendChild(li);
})();
