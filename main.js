// Simple: compute final price = 20% of entered price
document.addEventListener('DOMContentLoaded', function () {
	const price = document.getElementById('price');
	const btn = document.getElementById('calc');
	const out = document.getElementById('result') || document.getElementById('output');

	function show(msg) {
		if (out) out.textContent = msg;
		else alert(msg);
	}

	btn && btn.addEventListener('click', function () {
		const p = parseFloat(price.value);
		if (!p || p <= 0) { show('Enter a positive number.'); return; }
		const finalPrice = p * 0.2; // customer pays 20% of original
		show('Final price (20%): ₱' + finalPrice.toFixed(2));
	});

	// allow Enter key in the input to compute
	price && price.addEventListener('keydown', function (e) { if (e.key === 'Enter') btn && btn.click(); });
});


