const test = require('ava');
const slugme = require('../index.js');

test.cb('Init test.', t => {
	t.pass();
	t.end();
});

test('Complex test.', t => {
	const result = slugme('Être en été est à mi-chemin de noël');
	t.is(result, 'etre-en-ete-est-a-mi-chemin-de-noel');
});

const result = slugme('Être en été est à mi-chemin de noël');
console.log(result);
