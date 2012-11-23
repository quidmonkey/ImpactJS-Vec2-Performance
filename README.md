## ImpactJS-Vec2-Performance

This is a performance test for two provided Vec2 plugins for ImpactJS. ```ig.Vec2g``` uses the prototypal method for creating an object, while ```ig.Vec2i``` uses the module method via ```ig.Class.extends()```.

The results are staggering to stay the least. From my testing, ```ig.Vec2g``` is 50 times faster. I'm unable to put the results on jsPerf due to ImpactJS being proprietary, but the method I use in main.js is a standard performance test which I provide for all to replicate.