jQuery(function () {
	var $tela = jQuery('.tela input');

	jQuery('.get-result').click(function (e) {
		getResult($tela.val().split('*'));
	});

	function getResult (data) {
		$.ajax({
			type: 'POST',
			dataType: 'json',
			url: '/multiplica',
			data: data
		});
	}
});
