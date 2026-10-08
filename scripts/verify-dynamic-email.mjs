import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import assert from 'node:assert/strict';

const source = readFileSync(new URL('../src/assets/js/layout.js', import.meta.url), 'utf8');
for (const email of ['ns@stevensventures.com', 'javascript:alert(1)', null]) {
  const link = {
    textContent: '[email protected]',
    href: '/cdn-cgi/l/email-protection#123',
    getAttribute: () => email,
    setAttribute(name, value) { this[name] = value; },
  };
  const element = { innerHTML: '', querySelectorAll: () => [link] };
  runInNewContext(source, {
    document: { getElementById: id => id === 'footer' ? element : null },
    fetch: async () => ({ ok: true, text: async () => '<!-- CDN-obfuscated fragment -->' }),
    console,
  });
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(link.href, email === 'ns@stevensventures.com' ? `mailto:${email}` : '/cdn-cgi/l/email-protection#123');
  assert.equal(link.textContent, email === 'ns@stevensventures.com' ? email : '[email protected]');
}
console.log('Dynamic email restoration passes; invalid and missing addresses are ignored.');
