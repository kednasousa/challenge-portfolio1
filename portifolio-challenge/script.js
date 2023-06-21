const contatoInput = document.querySelectorAll('.contato__input');

contatoInput.forEach((input) => {
	input.addEventListener('focus', function () {
		this.previousElementSibling.classList.add('active');
	});

	input.addEventListener('blur', function () {
		if (this.value === '') {
			this.previousElementSibling.classList.remove('active');
		}
	});
});
