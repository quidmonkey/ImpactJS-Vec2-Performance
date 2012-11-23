ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',

	'plugins.vec2-google',
	'plugins.vec2-impact'
)
.defines(function(){

PerfTest = ig.Game.extend({
	
	update: function() {
		var start, stop, gElapsed, iElapsed;

		// google test
		start = Date.now();

		for (var i = 0, len = 100000; i < len; i++) {
			new ig.Vec2g.random().clone().rotate(Math.PI).sum(ig.Vec2g.One).normalize().magnitude();
		}

		stop = Date.now();
		gElapsed = stop - start;

		console.log('***Google***');
		console.log('start', start);
		console.log('stop', stop);
		console.log('elapsed', gElapsed);

		// impact test
		start = Date.now();

		for (var i = 0, len = 100000; i < len; i++) {
			new ig.Vec2i.random().clone().rotate(Math.PI).sum(ig.Vec2i.One).normalize().magnitude();
		}

		stop = Date.now();
		iElapsed = stop - start;

		console.log('***Impact***');
		console.log('start', start);
		console.log('stop', stop);
		console.log('elapsed', iElapsed);

		console.log('Google is ' + (iElapsed / gElapsed).round(1) + ' times faster!');

		ig.system.stopRunLoop();
	}

});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', PerfTest, 60, 320, 240, 2 );

});
