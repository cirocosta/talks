var filepath = '/home/ciro/Development/Javascript/talks/nodebr-streams-and-tests/casperjs/page.html';

casper.test.begin('The heading exists', 3, function (test) {
	casper.start(filepath, function () {
		test.assertExists('h1.page-title');
		test.assertSelectorHasText('h1.page-title', 'Hello');
		test.assertVisible('footer');
	}).run(function () {
		test.done();
	});
});
