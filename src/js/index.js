import Splide from "@splidejs/splide";

document.querySelectorAll('.splide').forEach(slider => {
	var splide = new Splide( slider);
	var bar    = splide.root.querySelector( '.splide__progress__bar' );

	// Updates the bar width whenever the carousel moves:
	splide.on( 'mounted move', function () {
		var end  = splide.Components.Controller.getEnd() + 1;
		var rate = Math.min( ( splide.index + 1 ) / end, 1 );
		bar.style.width = String( 100 * rate ) + '%';
	} );

	splide.mount();

})

