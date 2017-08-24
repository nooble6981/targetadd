(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 250,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
{src:"https://targead.com/wp-content/uploads/2017/06/bag1.png", id:"bag1"},
{src:"https://targead.com/wp-content/uploads/2017/06/bag2.png", id:"bag2"},
{src:"https://targead.com/wp-content/uploads/2017/06/bg.jpg", id:"bg"},
{src:"https://targead.com/wp-content/uploads/2017/06/btn.png", id:"btn"},
{src:"https://targead.com/wp-content/uploads/2017/06/butt.png", id:"butt"},
{src:"https://targead.com/wp-content/uploads/2017/06/dolphin.png", id:"dolphin"},
{src:"https://targead.com/wp-content/uploads/2017/06/hand.png", id:"hand"}
	]
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.bag1 = function() {
	this.initialize(img.bag1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,76);


(lib.bag2 = function() {
	this.initialize(img.bag2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,68);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1050,400);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,46);


(lib.butt = function() {
	this.initialize(img.butt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,100);


(lib.dolphin = function() {
	this.initialize(img.dolphin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,184,320);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,142);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,0,0)","rgba(255,255,0,0.298)","rgba(255,255,0,0)"],[0,0.345,1],-13.3,0,13.4,0).s().p("AiEEVIAAopIEJAAIAAIpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-27.7,26.8,55.5);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.butt();
	this.instance.setTransform(-115,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115,-50,230,100);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bag1();
	this.instance.setTransform(-45,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-38,90,76);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bag1();
	this.instance.setTransform(45,-38,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-38,90,76);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bag1();
	this.instance.setTransform(-40,-33.7,0.889,0.889);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-33.7,80,67.6);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bag2();
	this.instance.setTransform(-36,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,-34,72,68);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bag1();
	this.instance.setTransform(30,-25.3,0.667,0.666,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-25.3,60,50.7);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8CF09").s().p("AgQBSIAAgjIAiAAIAAAjgAgPAfIgEhwIAnAAIgDBwg");
	this.shape.setTransform(58.9,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8CF09").s().p("AgeBOQgJgEgHgIQgIgJgDgLQgEgLAAgOQAAgOAEgKQAEgLAHgIQAHgIAKgFQAKgEAMAAQAHAAAHACQAKACAFAGIAAAAIAAgGIAAgvIAoAAIAACiIglAAIAAgIIAAgGQgGAIgJAFQgJAEgJAAQgMAAgKgFgAgHgEQgEACgDACIgFAJQgCAFAAAHQAAAGACAGQABAFADAEQADAEAFACQAEACADAAQAFAAAEgCQAEgBADgEQAEgEABgFQACgGAAgHQAAgGgBgEIgEgKQgDgCgFgCQgEgCgGAAQgDAAgEABg");
	this.shape_1.setTransform(47.8,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8CF09").s().p("AAABRQgHgCgFgEQgHgFgDgJQgEgJAAgOIAAh3IAmAAIAABxQAAAJACADQACADAHAAIAEAAIAAAjIgLAAIgQgBg");
	this.shape_2.setTransform(37.5,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8CF09").s().p("AgZA5QgMgEgJgJIgIgJIgGgKIgEgMQgCgGAAgHQAAgFACgGIAEgNQADgIALgMQAJgIAMgEQAIgDARgCQAJABARAEQAMAEAJAIQALAMAEAIQACAGABAHQACAGAAAFQAAAHgCAGIgDAMIgHAKIgIAJQgJAJgMAEQgNAEgNAAQgMAAgNgEgAgJgaQgFACgDAFQgEADgCAGQgCAFAAAFQAAAGACAFQACAGAEADQADAEAFACQAFACAEAAQAFAAAFgCQAFgCAEgEQADgDACgGQACgFAAgGQAAgFgCgFQgCgGgDgDQgEgFgFgCQgFgBgFAAQgEAAgFABg");
	this.shape_3.setTransform(26,1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8CF09").s().p("AgZA5QgPgIgHgFIARgaQAHAFAIADQAIAEAHAAQAGAAACgCQADgBAAgDQAAgFgJgDIgRgHQgNgFgGgFQgEgFgCgEQgCgGgBgHQAAgJAFgHQADgHAHgFQAHgFAJgDQAIgCAJAAQAMAAAKAEQAMADAIAHIgNAcQgFgFgKgDQgIgCgHAAQgFAAgCACQgBAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQAAAEAHAEIATAHQANAFAHAEQADAFACAFQADAFAAAIQAAAHgEAHQgDAIgGAFQgHAFgJAEQgJACgKAAQgMAAgNgEg");
	this.shape_4.setTransform(13.2,1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8CF09").s().p("AgDBEQgKgFgFgJQgDgEgBgGQgCgGAAgHIAAgoIgPAAIAAgfIAQAAIAAgiIAlAAIAAAiIAZAAIAAAfIgZAAIAAAiQAAAFACADQACADADACQAGACAIAAIAFAAIAAAjIgLAAQgXgBgJgGg");
	this.shape_5.setTransform(-2.8,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8CF09").s().p("AgGA8IgOgEIgLgGIgJgIQgIgIgEgMQgFgLAAgLQAAgMAFgLQAEgMAIgIQAIgIALgFIAMgEIAMgBQANAAAKAFQAKADAIAIQAHAIADAKQAEALAAANIgBAKIhJAAQABAFADAEQACAEAEADQAGAFAKAAQAIAAAJgDQAHgDAIgGIAPAcIgLAIIgMAFQgOAEgNAAQgHAAgGgBgAASgOQAAgIgEgFQgEgEgIgBQgGAAgFAGQgEAFgCAHIAhAAIAAAAg");
	this.shape_6.setTransform(-13.9,1.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F8CF09").s().p("AAPBSIgXguIgMAAIAAAuIgoAAIAAijIAoAAIAABTIALAAIAWglIArAAIgjA0IAAABIAoBAg");
	this.shape_7.setTransform(-26.4,-0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F8CF09").s().p("AgGA8IgNgEIgMgGIgJgHQgIgJgFgLQgEgMAAgLQAAgLAEgLQAFgLAIgJIAJgIIAMgFIANgFIANgBQANAAANAFQAGACAFADIAKAIIgRAbQgFgGgHgDQgHgCgJAAQgGgBgDADQgGACgDAFQgEAEgCAFQgBAEgBAFIACAJQACAFAEAEQAEAFAFADQAEACAHAAQAIAAAJgEQAIgEAIgGIAOAcIgKAIIgNAGIgNAEIgPABIgNgBg");
	this.shape_8.setTransform(-40,1.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F8CF09").s().p("AgSBSIAAh1IAlAAIAAB1gAgSgyIAAgfIAlAAIAAAfg");
	this.shape_9.setTransform(-49.8,-0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F8CF09").s().p("AgDBEQgKgFgFgJQgDgEgBgGQgCgGAAgHIAAgoIgPAAIAAgfIAQAAIAAgiIAlAAIAAAiIAZAAIAAAfIgZAAIAAAiQAAAFACADQACADADACQAGACAIAAIAFAAIAAAjIgLAAQgXgBgJgGg");
	this.shape_10.setTransform(-58,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.6,-15.8,129.2,31.6);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8CF09").s().p("AATBSIAAhGQAAgIgDgEQgDgBgHAAQgGAAgEABQgEABgDAFQgEAEgCAGQgBAGAAAGIAAA2IgoAAIAAijIAoAAIAAA0IAAAKIAAAAQAFgIAKgFQAIgFAMAAQAJAAAHACQAIACAFAFQAHAGACAIQADAJABAKIAABNg");
	this.shape.setTransform(63.5,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8CF09").s().p("AgGA8IgNgEIgLgGIgJgHQgJgJgFgLQgEgMAAgLQAAgLAEgLQAFgLAIgJIAKgIIALgFIANgFIANgBQANAAANAFQAGACAFADIAKAIIgRAbQgFgGgHgDQgHgCgJAAQgGgBgDADQgGACgDAFQgEAEgCAFQgBAEgBAFIACAJQACAFAEAEQADAFAGADQAEACAHAAQAIAAAJgEQAIgEAIgGIAOAcIgKAIIgNAGIgNAEIgPABIgNgBg");
	this.shape_1.setTransform(50.1,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8CF09").s().p("AgeA7QgIgDgEgFQgGgFgCgGQgEgHAAgIQAAgGACgEIAFgJQAGgGAKgFQAJgEAMgCQAKgCAMgBIADAAIAAgCQAAgGgFgEQgFgCgFAAQgIgBgJAEQgIACgHAGIgPgcQAJgGAOgFQAIgDASgCQAMAAAKAEQAJADAIAGQAGAHAEAIQAEAKAAALIAABHIgkAAIAAgHIAAgIIAAAAQgHAIgJAFQgHAEgLAAQgIAAgHgCgAgFAKQgEACgDADQgCACAAAFQAAAEADACQADAEAFAAQAGgBAHgGQAFgHAAgIIAAgCIgDAAQgLAAgGACg");
	this.shape_2.setTransform(36.9,1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8CF09").s().p("AgGA8IgOgEIgLgGIgJgIQgIgIgEgMQgFgLAAgLQAAgMAFgLQAEgMAIgIQAIgIALgFIAMgEIAMgBQANAAAKAFQAKADAIAIQAHAIADAKQAEALAAANIgBAKIhJAAQABAFADAEQACAEAEADQAGAFAKAAQAIAAAJgDQAHgDAIgGIAPAcIgLAIIgMAFQgOAEgNAAQgHAAgGgBgAASgOQAAgIgEgFQgEgEgIgBQgGAAgFAGQgEAFgCAHIAhAAIAAAAg");
	this.shape_3.setTransform(24.3,1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8CF09").s().p("AATA8IAAhEQAAgIgEgEQgDgDgGAAQgGAAgEACQgEADgEAFQgCADgCAHQgCADAAAGIAAA2IgoAAIAAh1IAmAAIAAALIAAAHIAAAAQAGgJAIgFIAIgEQAHgCAHAAQAJAAAIACQAIADAGAFQAGAFADAIQACAJAAAMIAABLg");
	this.shape_4.setTransform(5,1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8CF09").s().p("AgZA5QgMgEgJgJIgIgJIgGgKIgEgMQgCgGAAgHQAAgFACgGIAEgNQADgIALgMQAJgIAMgEQAIgDARgCQAJABARAEQAMAEAJAIQALAMAEAIQACAGABAHQACAGAAAFQAAAHgCAGIgDAMIgHAKIgIAJQgJAJgMAEQgNAEgNAAQgMAAgNgEgAgJgaQgFACgDAFQgEADgCAGQgCAFAAAFQAAAGACAFQACAGAEADQADAEAFACQAFACAEAAQAFAAAFgCQAFgCAEgEQADgDACgGQACgFAAgGQAAgFgCgFQgCgGgDgDQgEgFgFgCQgFgBgFAAQgEAAgFABg");
	this.shape_5.setTransform(-9.6,1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8CF09").s().p("AATA8IAAhEQAAgIgEgEQgDgDgGAAQgGAAgDACQgGADgCAFQgEADgCAHQgBADAAAGIAAA2IgnAAIAAh1IAlAAIAAALIAAAHIAAAAQAFgJAIgFIAJgEQAHgCAHAAQAKAAAHACQAIADAGAFQAFAFAEAIQADAJAAAMIAABLg");
	this.shape_6.setTransform(-29.8,1.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F8CF09").s().p("AgSBSIAAh1IAlAAIAAB1gAgSgyIAAgfIAlAAIAAAfg");
	this.shape_7.setTransform(-40.4,-0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F8CF09").s().p("AgfA7QgHgDgFgFQgFgFgDgGQgCgHAAgIQgBgGACgEIAFgJQAGgGAKgFQAKgEAMgCQAJgCALgBIAEAAIAAgCQAAgGgFgEQgFgCgFAAQgIgBgJAEQgIACgIAGIgNgcQAHgGAOgFQAJgDASgCQAMAAAKAEQAJADAIAGQAGAHAEAIQADAKAAALIAABHIgkAAIAAgHIABgIIgBAAQgFAIgKAFQgIAEgKAAQgIAAgIgCgAgFAKQgEACgCADQgDACAAAFQAAAEADACQADAEAFAAQAHgBAFgGQAHgHAAgIIAAgCIgFAAQgKAAgGACg");
	this.shape_8.setTransform(-50.4,1.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F8CF09").s().p("AgcBRQgMgDgJgFIALgeIAQAGIASACIAIgBQAFgBAEgDQAEgDACgEQACgEAAgHIAAgEIAAgEIAAAAQgGAGgGADQgIADgHAAIgOgBIgKgEQgKgEgHgJQgHgIgDgJQgDgLAAgLQAAgMADgKQADgLAHgIQAHgIAJgFIALgDIANgBQAHAAAIACQAJADAGAGIABAAIgBgDIAAgGIAmAAIAABqQAAAIgCAHQgBAHgDAFIgHALIgJAIQgJAGgMAEQgLADgLAAQgLAAgNgDgAgIgwQgEABgDADQgFAHAAAKIABALQACAFADAEQACAEAFACQAEABAEAAQAJAAAFgEQADgDACgFQACgFAAgIQAAgHgCgGQgCgEgDgDQgGgFgJAAQgEAAgEACg");
	this.shape_9.setTransform(-63.8,4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.7,-15.8,145.5,31.6);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8CF09").s().p("AgZA5QgPgIgHgFIARgaQAGAFAJADQAIAEAHAAQAGAAACgCQADgBAAgDQAAgFgJgDIgRgHQgNgFgGgFQgEgFgCgEQgCgGgBgHQAAgJAFgHQADgHAHgFQAHgFAIgDQAKgCAIAAQALAAALAEQALADAJAHIgNAcQgGgFgJgDQgIgCgIAAQgEAAgCACQgBAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQAAAEAHAEIATAHQANAFAGAEQAFAFABAFQADAFAAAIQAAAHgEAHQgCAIgHAFQgGAFgKAEQgIACgLAAQgMAAgNgEg");
	this.shape.setTransform(74.7,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8CF09").s().p("AgnA8IAAh1IAmAAIAAAUIAAAIIAAAAQABgGADgGQADgFAFgEQAGgEAFgCQAHgDAGAAIAFABIAAAnIgIgBQgJAAgGADQgGACgEAFQgEAEgCAGQgBAGAAAIIAAAug");
	this.shape_1.setTransform(65,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8CF09").s().p("AgGA8IgOgEIgLgGIgJgIQgIgIgEgMQgFgLAAgLQAAgMAFgLQAEgMAIgIQAIgIALgFIAMgEIAMgBQANAAAKAFQAKADAIAIQAHAIADAKQAEALAAANIgBAKIhJAAQABAFADAEQACAEAEADQAGAFAKAAQAIAAAJgDQAHgDAIgGIAPAcIgLAIIgMAFQgOAEgNAAQgHAAgGgBgAASgOQAAgIgEgFQgEgEgIgBQgGAAgFAGQgEAFgCAHIAhAAIAAAAg");
	this.shape_2.setTransform(53.1,1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8CF09").s().p("AgeBOQgJgEgHgIQgIgJgDgLQgEgLAAgOQAAgOAEgKQAEgLAHgIQAHgIAKgFQAKgEAMAAQAHAAAHACQAKACAFAGIAAAAIAAgGIAAgvIAoAAIAACiIglAAIAAgIIAAgGQgGAIgJAFQgJAEgJAAQgMAAgKgFgAgHgEQgEACgDACIgFAJQgCAFAAAHQAAAGACAGQABAFADAEQADAEAFACQAEACADAAQAFAAAEgCQAEgBADgEQAEgEABgFQACgGAAgHQAAgGgBgEQgCgGgCgEQgDgCgFgCQgEgCgGAAQgDAAgEABg");
	this.shape_3.setTransform(39.1,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8CF09").s().p("AAABRQgHgCgFgEQgHgFgDgJQgEgJAAgOIAAh3IAmAAIAABxQAAAJACADQACADAHAAIAEAAIAAAjIgLAAIgQgBg");
	this.shape_4.setTransform(28.8,-0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8CF09").s().p("AgZA5QgMgEgJgJIgIgJIgGgKIgEgMQgCgGAAgHQAAgFACgGIAEgNQADgIALgMQAJgIAMgEQAIgDARgCQAJABARAEQAMAEAJAIQALAMAEAIQACAGABAHQACAGAAAFQAAAHgCAGIgDAMIgHAKIgIAJQgJAJgMAEQgNAEgNAAQgMAAgNgEgAgJgaQgFACgDAFQgEADgCAGQgCAFAAAFQAAAGACAFQACAGAEADQADAEAFACQAFACAEAAQAFAAAFgCQAFgCAEgEQADgDACgGQACgFAAgGQAAgFgCgFQgCgGgDgDQgEgFgFgCQgFgBgFAAQgEAAgFABg");
	this.shape_5.setTransform(17.3,1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8CF09").s().p("AATBSIAAhGQAAgIgEgEQgDgBgGAAQgGAAgEABQgEABgEAFQgCAEgCAGQgCAGAAAGIAAA2IgoAAIAAijIAoAAIAAA0IgBAKIABAAQAFgIAKgFQAHgFANAAQAIAAAIACQAIACAGAFQAFAGAEAIQACAJAAAKIAABNg");
	this.shape_6.setTransform(2.9,-0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F8CF09").s().p("AATA8IAAhEQAAgIgEgEQgDgDgGAAQgGAAgDACQgGADgCAFQgEADgCAHQgBADAAAGIAAA2IgnAAIAAh1IAlAAIAAALIAAAHIAAAAQAFgJAIgFIAJgEQAHgCAHAAQAKAAAHACQAIADAGAFQAFAFAEAIQADAJAAAMIAABLg");
	this.shape_7.setTransform(-17.2,1.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F8CF09").s().p("AgGA8IgOgEIgLgGIgJgIQgIgIgEgMQgFgLAAgLQAAgMAFgLQAEgMAIgIQAIgIALgFIAMgEIAMgBQANAAAKAFQAKADAIAIQAHAIADAKQAEALAAANIgBAKIhJAAQABAFADAEQACAEAEADQAGAFAKAAQAIAAAJgDQAHgDAIgGIAPAcIgLAIIgMAFQgOAEgNAAQgHAAgGgBgAASgOQAAgIgEgFQgEgEgIgBQgGAAgFAGQgEAFgCAHIAhAAIAAAAg");
	this.shape_8.setTransform(-31,1.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F8CF09").s().p("AAPBSIgXguIgMAAIAAAuIgoAAIAAijIAoAAIAABTIALAAIAWglIArAAIgjA0IAAABIAoBAg");
	this.shape_9.setTransform(-43.6,-0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F8CF09").s().p("AgZA5QgMgEgJgJIgIgJIgGgKIgEgMQgCgGAAgHQAAgFACgGIAEgNQADgIALgMQAJgIAMgEQAIgDARgCQAJABARAEQAMAEAJAIQALAMAEAIQACAGABAHQACAGAAAFQAAAHgCAGIgDAMIgHAKIgIAJQgJAJgMAEQgNAEgNAAQgMAAgNgEgAgJgaQgFACgDAFQgEADgCAGQgCAFAAAFQAAAGACAFQACAGAEADQADAEAFACQAFACAEAAQAFAAAFgCQAFgCAEgEQADgDACgGQACgFAAgGQAAgFgCgFQgCgGgDgDQgEgFgFgCQgFgBgFAAQgEAAgFABg");
	this.shape_10.setTransform(-58.4,1.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F8CF09").s().p("AgTBSIAAiAIgxAAIAAgjICJAAIAAAjIgxAAIAACAg");
	this.shape_11.setTransform(-73,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.3,-15.8,164.8,31.6);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8CF09").s().p("AghBLQgPgGgMgLIgLgLIgIgOQgEgIgBgIQgCgIAAgJQAAgHACgIQABgJAEgHQAEgKAPgQQALgLAQgFQALgEAWgCQAMAAAWAGQAQAFAMALQAOAQAEAKQAEAHABAJQACAIAAAHQAAAJgCAIQgBAIgEAIIgIAOIgKALQgMALgQAGQgQAFgSAAQgRAAgQgFgAgMghQgGACgFAFQgFAFgDAHQgDAHAAAHQAAAIADAIQADAGAFAFQAFAFAGADQAGACAGAAQAHAAAGgCQAGgDAFgFQAFgFADgGQADgIAAgIQAAgHgDgHQgDgHgFgFQgFgFgGgCQgGgDgHAAQgGAAgGADg");
	this.shape.setTransform(94.9,17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8CF09").s().p("AgIBPIgRgFIgPgIIgMgKQgLgLgGgPQgGgOAAgQQAAgOAGgPQAGgOALgMIAMgKIAPgIIARgFQAIgBAKAAQARAAAQAFIAPAHIANALIgWAjQgHgHgJgEQgKgEgKAAQgJAAgFADQgHADgFAFQgEAGgDAGQgCAHAAAGQAAAGACAGQADAHAFAGQAFAGAHADQAFADAKAAQAKAAAMgGQALgEAJgIIATAkQgGAGgHAEQgIAFgIADIgSAGIgTABQgKAAgIgBg");
	this.shape_1.setTransform(77.2,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8CF09").s().p("AgZBrIAAiZIAyAAIAACZgAgYhBIAAgpIAxAAIAAApg");
	this.shape_2.setTransform(64.5,14.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8CF09").s().p("AguAWIAAgrIBdAAIAAArg");
	this.shape_3.setTransform(53.6,16.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8CF09").s().p("AgJBPIgRgFQgIgEgHgEIgLgLQgLgLgGgPQgGgOAAgPQAAgQAGgOQAGgPAKgLQALgLAPgGIAPgFIAQgBQARAAAOAFQANAGAJAKQAJAKAFAOQAEANAAAQIgBAPIhfAAQABAGAEAGQADAFAFADQAIAHANAAQAKAAAMgEQAJgEALgHIATAkQgGAFgHAEIgRAIQgSAFgRAAQgJAAgJgBgAAYgSQAAgKgGgGQgGgHgJAAQgJAAgGAHQgGAGgCAKIAsAAIAAAAg");
	this.shape_4.setTransform(38.6,17.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8CF09").s().p("AgzBOIAAiZIAyAAIAAAaIgBAKIABAAQABgIAEgGQAEgIAHgFQAHgGAHgCQAIgDAJAAIAGAAIAAA0IgKgBQgMAAgHACQgIAEgGAGQgFAHgDAHQgBAIAAAKIAAA8g");
	this.shape_5.setTransform(24.4,17.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8CF09").s().p("AhQBtIAAjVIAvAAIAAAIIgBAKIABAAQAHgLANgGQAMgEAMgBQAQABANAFQANAGAJALQAJALAFAPQAFAPAAARQAAATgGAMQgFAQgJAKQgKAKgNAHQgOAFgPAAQgJAAgKgEQgKgEgIgGIgBAAIABAMIAAA7gAgLg9QgGACgEAEQgEAFgCAHQgDAIAAAKQAAAGACAHQACAGAEAFQAEAEAFADQAGADAHAAQAEAAAGgCQAFgCAFgFQAEgEADgGQACgHAAgIQAAgKgCgGQgDgHgEgGQgDgFgGgCQgGgDgFAAQgGAAgFADg");
	this.shape_6.setTransform(8.4,20.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F8CF09").s().p("AgnBmQgNgFgJgLQgJgKgFgPQgFgQAAgRQAAgSAFgOQAFgOAKgLQAJgLANgFQANgGAQAAQAKAAAJACQAMADAHAHIABAAIgBgGIAAg+IA0AAIAADUIgwAAIAAgLIAAgIIgBAAQgHALgMAGQgLAFgMABQgQAAgNgHgAgJgFQgGADgEADQgEAEgCAHQgDAHAAAJQAAAIACAIQADAGAEAGQAEAEAFADQAGADAFgBQAGAAAFgBQAFgDAFgFQAEgEACgHQADgHAAgKQAAgIgCgGQgCgHgEgFQgEgEgFgCQgGgEgHABQgFgBgFADg");
	this.shape_7.setTransform(-18.9,14.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F8CF09").s().p("AgJBPIgRgFQgIgEgHgEIgLgLQgLgLgGgPQgGgOAAgPQAAgQAGgOQAGgPAKgLQALgLAPgGIAPgFIAQgBQARAAAOAFQANAGAJAKQAJAKAFAOQAEANAAAQIgBAPIhfAAQABAGAEAGQADAFAFADQAIAHANAAQAKAAAMgEQAJgEALgHIATAkQgGAFgHAEIgRAIQgSAFgRAAQgJAAgJgBgAAYgSQAAgKgGgGQgGgHgJAAQgJAAgGAHQgGAGgCAKIAsAAIAAAAg");
	this.shape_8.setTransform(-36.5,17.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F8CF09").s().p("AggBLQgWgKgIgHIAWgiQAJAHALAEQALAEAJAAQAIAAADgCQAEgCAAgEQAAgFgMgFIgWgJQgRgHgIgGQgGgGgDgHQgDgHAAgJQAAgMAFgJQAFgJAJgHQAJgGALgDQAMgDAMAAQAPAAANAEQAPAEAMAJIgSAkQgHgFgLgEQgLgDgKAAQgGAAgEACQgDACAAADQAAAFAKAFIAYAJQARAGAJAHQAFAGADAGQADAIAAAJQAAAKgEAKQgFAJgIAHQgJAHgLADQgMAEgOAAQgQAAgQgFg");
	this.shape_9.setTransform(-52.2,17.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F8CF09").s().p("AghBLQgPgGgMgLIgLgLIgIgOQgEgIgBgIQgCgIAAgJQAAgHACgIQABgJAEgHQAEgKAPgQQALgLAQgFQALgEAWgCQAMAAAWAGQAQAFAMALQAOAQAEAKQAEAHABAJQACAIAAAHQAAAJgCAIQgBAIgEAIIgIAOIgKALQgMALgQAGQgQAFgSAAQgRAAgQgFgAgMghQgGACgFAFQgFAFgDAHQgDAHAAAHQAAAIADAIQADAGAFAFQAFAFAGADQAGACAGAAQAHAAAGgCQAGgDAFgFQAFgFADgGQADgIAAgIQAAgHgDgHQgDgHgFgFQgFgFgGgCQgGgDgHAAQgGAAgGADg");
	this.shape_10.setTransform(-68.7,17.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F8CF09").s().p("AAABpQgJgCgHgFQgJgHgFgLQgFgNAAgSIAAibIAyAAIAACUQAAAMADADQADAFAJAAIAGAAIAAAtIgQABQgMAAgIgDg");
	this.shape_11.setTransform(-82.7,14.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F8CF09").s().p("AgIBPIgRgFIgPgIIgMgKQgLgLgGgPQgGgOAAgQQAAgOAGgPQAGgOALgMIAMgKIAPgIIARgFQAIgBAKAAQARAAAQAFIAPAHIANALIgWAjQgHgHgJgEQgKgEgKAAQgJAAgFADQgHADgFAFQgEAGgDAGQgCAHAAAGQAAAGACAGQADAHAFAGQAFAGAHADQAFADAKAAQAKAAAMgGQALgEAJgIIATAkQgGAGgHAEQgIAFgIADIgSAGIgTABQgKAAgIgBg");
	this.shape_12.setTransform(-96.1,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.9,-5,229.8,40);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8CF09").s().p("AggCHIAAhvIhZieIBLAAIAfBBQAJASAGAVIAAAAIAQgnIAfhBIBLAAIhZCeIAABvg");
	this.shape.setTransform(117.3,14.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8CF09").s().p("AhXCHIAAkNIBCAAIAADUIBtAAIAAA5g");
	this.shape_1.setTransform(96.2,14.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8CF09").s().p("AhXCHIAAkNIBCAAIAADUIBtAAIAAA5g");
	this.shape_2.setTransform(75.2,14.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8CF09").s().p("AgXCIIgWgGIgTgJIgRgMIgOgQIgJgSIgGgUIgCgWIAAiqIBDAAIAACqQAAAKADAJQADAIAGAGQAHAFAIADQAJADAJAAQAKAAAJgDQAIgDAHgFQAGgGADgIQAEgJAAgKIAAiqIBCAAIAACqIgCAWIgGAUIgJASIgOAQQgWAQgOAFQgdAIgRAAg");
	this.shape_3.setTransform(49.6,14.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8CF09").s().p("AhSCHIAAkNIClAAIAAA5IhiAAIAAA5IBRAAIAAA2IhRAAIAABlg");
	this.shape_4.setTransform(26.5,14.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8CF09").s().p("AgYCJQgOgCgMgFQgNgEgMgIQgLgHgKgKIAjgzQANAMAQAIQAUAJAOAAQANAAAIgFQAHgGAAgIQAAgHgFgGQgEgEgJgFIgogTIgWgMQgLgHgIgGQgJgKgFgMQgFgNAAgPQAAgSAIgPQAGgQAOgLQANgLASgGQASgGAUAAQAPAAAeAIIAVAJQAKAGAIAIIgbA3QgMgLgQgGQgRgIgQABQgMAAgHAFQgHAFAAAIQAAAIAFAFQAFAGAIAEQAKAGAeAMIAWAMQALAGAIAGQAJAKAFAMQAFAMAAAQQAAAQgGAQQgHAPgMALQgNANgRAHQgTAGgWAAQgMAAgNgDg");
	this.shape_5.setTransform(4.2,14.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8CF09").s().p("AhWCHIAAkNICoAAIAAA5IhmAAIAAAxIBRAAIAAA3IhRAAIAAAzIBrAAIAAA5g");
	this.shape_6.setTransform(-16.7,14.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F8CF09").s().p("AgNCJQgPgDgNgFQgNgFgMgHQgLgHgJgKQgJgKgHgLQgIgLgEgNQgGgNgCgNQgDgPAAgOQAAgOADgOQADgOAFgMQAFgNAHgLQAIgLAKgJQAJgKALgHQAMgIANgFQAMgFAPgDQANgDAPAAQAOAAANACQAOADANAEQAOAFAMAHQAMAIAKAJIgfAzQgNgMgSgIQgUgIgRAAQgTAAgOAHQgOAFgKAMQgJALgEAOQgFANAAAPQABAOAEAPQAEAOAKAMQAKAMAOAGQANAIATAAQANAAAagLQASgIAPgPIAiAwQgJAKgLAIQgMAIgNAHQgOAGgPAEQgRADgSAAQgQAAgNgDg");
	this.shape_7.setTransform(-41.4,14.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F8CF09").s().p("AgNCJQgPgDgNgFQgNgFgLgHQgLgHgKgKQgKgKgGgLQgIgLgFgNQgFgNgCgNQgDgPAAgOQAAgOADgOQADgOAFgMQAFgNAIgLQAHgLAKgJQAJgKALgHQALgIAOgFQANgFAOgDQANgDAPAAQAOAAANACQAOADANAEQAOAFAMAHQAMAIAKAJIgfAzQgNgMgSgIQgUgIgRAAQgTAAgOAHQgOAFgKAMQgJALgFAOQgEANAAAPQABAOAEAPQAEAOAKAMQAKAMAOAGQANAIATAAQANAAAbgLQARgIAPgPIAiAwQgJAKgLAIQgMAIgNAHQgOAGgPAEQgRADgSAAQgQAAgNgDg");
	this.shape_8.setTransform(-68.5,14.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F8CF09").s().p("AgXCIIgWgGIgUgJIgQgMIgNgQIgKgSIgGgUIgCgWIAAiqIBCAAIAACqQABAKADAJQADAIAHAGQAFAFAJADQAJADAJAAQAKAAAJgDQAJgDAGgFQAGgGADgIQAEgJAAgKIAAiqIBCAAIAACqIgCAWIgGAUIgKASIgNAQQgWAQgNAFQgeAIgRAAg");
	this.shape_9.setTransform(-96.4,14.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F8CF09").s().p("AgYCJQgOgCgMgFQgOgEgLgIQgLgHgKgKIAjgzQANAMAQAIQAUAJAOAAQANAAAIgFQAHgGAAgIQAAgHgFgGQgEgEgJgFIgogTIgWgMQgMgHgHgGQgJgKgFgMQgFgNAAgPQAAgSAHgPQAIgQANgLQANgLASgGQASgGAUAAQAPAAAeAIIAVAJQAKAGAIAIIgbA3QgMgLgQgGQgRgIgQABQgMAAgHAFQgHAFAAAIQAAAIAFAFQAEAGAJAEQAJAGAfAMIAWAMQAMAGAHAGQAJAKAFAMQAFAMAAAQQAAAQgGAQQgHAPgMALQgNANgRAHQgTAGgWAAQgMAAgNgDg");
	this.shape_10.setTransform(-121.4,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151.9,-10,301,49.6);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8CF09").s().p("AgWBrIAAgtIAtAAIAAAtgAgVAoIgEiSIA0AAIgFCSg");
	this.shape.setTransform(52.9,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8CF09").s().p("AggBLQgVgKgJgHIAWgiQAJAHALAEQAMAEAJAAQAHAAADgCQADgCAAgEQAAgFgLgFIgXgJQgQgHgIgGQgGgGgCgHQgEgHAAgJQAAgMAFgJQAFgJAJgHQAJgGAMgDQALgDALAAQAQAAAOAEQAPAEALAJIgSAkQgHgFgLgEQgLgDgKAAQgGAAgEACQgCACAAADQAAAFAJAFIAZAJQAQAGAIAHQAGAGACAGQAEAIAAAJQAAAKgFAKQgEAJgIAHQgIAHgMADQgNAEgNAAQgQAAgQgFg");
	this.shape_1.setTransform(41.1,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8CF09").s().p("AgzBOIAAiYIAyAAIAAAaIgBAJIABAAQABgHAEgIQAEgGAHgGQAHgGAHgCQAIgDAJAAIAGAAIAAAzIgKgBQgMAAgHADQgIAEgGAGQgFAGgDAIQgBAHAAALIAAA8g");
	this.shape_2.setTransform(28.5,2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8CF09").s().p("AgJBPIgRgFQgIgEgGgEIgNgLQgKgLgGgPQgFgOAAgPQAAgQAFgOQAGgPAKgLQALgLAOgGIARgFIAPgBQARAAANAFQAOAGAJAKQAJAKAEAOQAGANAAAQIgCAPIhfAAQABAGAEAGQADAFAFADQAIAHANAAQALAAALgEQAJgEAMgHIATAkQgGAFgJAEIgQAIQgSAFgSAAQgIAAgJgBgAAYgSQAAgKgGgGQgFgHgKAAQgJAAgGAHQgGAGgCAKIAsAAIAAAAg");
	this.shape_3.setTransform(12.9,2.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8CF09").s().p("AhOBhIARgmQAIAGAIAAQAHAAAGgDQAIgEAEgJIACgHIhBiVIA7AAIAWBHQACAIACAQIABAAIAFgXIAThIIA5AAIg/CpQgFAMgHAKQgHAIgHAGQgIAFgKADQgJACgKAAQgUAAgQgLg");
	this.shape_4.setTransform(-4.2,5.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8CF09").s().p("AgpBNQgIgEgHgGQgHgHgDgIQgFgJAAgKQABgHACgHQACgGAEgGQAHgHAOgHQAMgFAQgDQANgCAPAAIAEAAIAAgDQAAgJgGgFQgGgDgHAAQgLAAgMAEQgKAEgKAGIgSgkQAKgIASgGQAMgEAXgCQAQAAANAEQANAEAJAIQAJAJAFALQAEAMAAAPIAABdIgvAAIAAgJIABgKIgBAAQgHAKgNAHQgLAFgNAAQgLAAgKgDgAgHAOQgGACgDAEQgDADAAAFQAAAGADAEQAFAEAGAAQAJAAAJgJQAHgJAAgKIAAgEIgFAAQgOAAgIAEg");
	this.shape_5.setTransform(-21,2.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8CF09").s().p("AAABqQgJgDgHgFQgJgHgFgLQgFgMAAgTIAAicIAyAAIAACVQAAALADAEQADAFAJAAIAGAAIAAAtIgQAAQgMAAgIgBg");
	this.shape_6.setTransform(-33.2,-0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F8CF09").s().p("AhQBsIAAjUIAuAAIAAAIIAAAJIAAAAQAJgKAMgGQAMgEAMAAQAQAAANAFQANAGAJALQAJALAFAOQAFAPAAATQAAARgFANQgGAQgJAKQgKALgNAFQgNAGgQAAQgJAAgKgEQgKgDgIgIIgBAAIABAOIAAA5gAgLg9QgFACgEAEQgFAFgCAHQgCAHAAALQAAAGABAHQACAGAEAGQADADAHADQAFADAHAAQAEAAAGgCQAGgDAEgEQAEgDACgHQADgHAAgIQAAgJgDgIQgBgGgFgFQgEgFgFgDQgGgDgFAAQgFAAgGADg");
	this.shape_7.setTransform(-47.6,5.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.5,-20,131,40);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8CF09").s().p("AAZBOIAAhYQAAgLgFgEQgEgGgIAAQgIABgFADQgHADgEAGQgEAGgCAHQgCAFAAAJIAABFIg0AAIAAiYIAyAAIAAAOIgBAJIABAAQAHgLAKgHQAGgEAGgCQAIgDAKABQAMAAAKACQAKADAIAHQAHAHAEALQAFAMAAAPIAABig");
	this.shape.setTransform(65.8,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8CF09").s().p("AgpBNQgIgEgIgGQgGgHgEgIQgDgJAAgKQgBgHADgHQACgGAEgGQAIgHANgHQAMgFAQgDQANgCAPAAIAEAAIAAgDQABgJgIgFQgFgDgHAAQgLAAgMAEQgKAEgKAGIgSgkQAKgIASgGQALgEAYgCQAQAAANAEQANAEAJAIQAJAJAEALQAGAMAAAPIAABdIgwAAIAAgJIABgKIgBAAQgHAKgNAHQgLAFgNAAQgLAAgKgDgAgHAOQgGACgDAEQgDADAAAFQAAAGADAEQAFAEAGAAQAKAAAHgJQAIgJAAgKIAAgEIgFAAQgOAAgIAEg");
	this.shape_1.setTransform(47.6,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8CF09").s().p("AAZBrIAAhbQAAgKgFgFQgEgDgIAAQgIAAgFACQgGACgFAGQgEAFgCAIQgCAHAAAJIAABGIg0AAIAAjVIA0AAIAABEIgBANIABAAQAHgLAMgHQALgGAPAAQAMAAAKADQAKADAIAGQAHAHAEALQAFAMAAAOIAABkg");
	this.shape_2.setTransform(30.5,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8CF09").s().p("AgFBYQgMgGgHgLQgEgGgCgIQgCgIAAgJIAAg1IgUAAIAAgoIAWAAIAAgsIAwAAIAAAsIAgAAIAAAoIggAAIAAAuQAAAGADAEQADAEAEACQAHAEALAAIAHgBIAAAtIgPABQgegBgNgJg");
	this.shape_3.setTransform(14.7,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8CF09").s().p("AgJBPIgRgFQgIgEgGgEIgNgLQgKgLgGgPQgFgOAAgPQAAgQAFgOQAGgPAKgLQALgLAOgGIARgFIAPgBQARAAANAFQAOAGAJAKQAJAKAEAOQAGANAAAQIgCAPIhfAAQABAGAEAGQADAFAFADQAIAHANAAQAKAAAMgEQAJgEAMgHIATAkQgHAFgIAEIgQAIQgSAFgSAAQgIAAgJgBgAAYgSQAAgKgGgGQgFgHgKAAQgJAAgGAHQgGAGgCAKIAsAAIAAAAg");
	this.shape_4.setTransform(-7.3,2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8CF09").s().p("AgzBOIAAiYIAxAAIAAAaIAAAJIAAAAQACgHAEgIQAEgGAHgGQAHgGAIgCQAHgDAJAAIAGAAIAAAzIgLgBQgLAAgIADQgHAEgFAGQgGAGgCAIQgCAHAAALIAAA8g");
	this.shape_5.setTransform(-21.5,2.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8CF09").s().p("AghBLQgPgGgMgLIgLgLIgIgOQgEgIgBgIQgCgIAAgJQAAgHACgIQABgJAEgHQAEgKAPgQQALgLAQgFQALgEAWgCQAMAAAWAGQAQAFAMALQAOAQAEAKQAEAHABAJQACAIAAAHQAAAJgCAIQgBAIgEAIIgIAOIgKALQgMALgQAGQgQAFgSAAQgRAAgQgFgAgMghQgGACgFAFQgFAFgDAHQgDAHAAAHQAAAIADAIQADAGAFAFQAFAFAGADQAGACAGAAQAHAAAGgCQAGgDAFgFQAFgFADgGQADgIAAgIQAAgHgDgHQgDgHgFgFQgFgFgGgCQgGgDgHAAQgGAAgGADg");
	this.shape_6.setTransform(-38.2,2.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F8CF09").s().p("ABDBOIAAhZQAAgKgCgEQgDgFgHgBQgIAAgGAEQgFAEgEAHQgEAFgBAJIgCAPIAABBIgyAAIAAhZQAAgKgCgEQgDgFgHgBQgIAAgGAEQgFAFgEAHQgDAFgCAJIgBAOIAABBIg0AAIAAiYIAyAAIAAAOIgBAJIABAAQAHgLAJgGQAHgFAGgCQAIgDAJABQAPAAAJAGIAKAIIAHAMIABAAQAGgLANgHQAGgFAHgCQAJgBAIAAQALAAAIACQAKAEAGAGQAHAHAEALQAEAMAAAPIAABig");
	this.shape_7.setTransform(-61.3,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83,-20,166,40);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8CF09").s().p("AhGBYIAPgjQAIAGAGAAQAIAAAFgDQAGgEAEgHIACgHIg7iGIA1AAIAVBAIADAVIAAAAIAFgUIAShBIAyAAIg5CYQgEALgGAIQgHAIgGAFQgHAFgJACQgIACgIAAQgTAAgOgJg");
	this.shape.setTransform(113.3,5.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8CF09").s().p("AguBGIAAiJIAtAAIAAAYIAAAIIAAAAQABgHAEgGQAEgGAGgFQAGgFAHgCQAHgDAIAAIAFAAIAAAuIgKgBQgJAAgHADQgIADgEAGQgFAFgDAHQgBAHAAAJIAAA2g");
	this.shape_1.setTransform(100.7,2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8CF09").s().p("AgIBHQgIgCgHgDIgOgHIgKgJQgKgKgFgOQgFgNAAgNQAAgOAFgNQAFgOAJgKQAKgKANgEIAOgFIAOgBQAQAAAMAFQAMAEAIAKQAIAJAEAMQAFANAAAOIgBAMIhWAAQABAGADAFQADAFAFADQAHAHALAAQAKgBAKgEQAJgDAKgHIARAhIgNAJIgOAGQgQAFgRAAQgHAAgIgBgAAVgQQAAgJgFgGQgFgGgJAAQgHAAgGAGQgFAFgCAKIAnAAIAAAAg");
	this.shape_2.setTransform(86.8,2.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8CF09").s().p("AgEBQQgLgHgGgKQgEgFgCgGQgCgIAAgJIAAguIgRAAIAAgkIATAAIAAgpIArAAIAAApIAdAAIAAAkIgdAAIAAAoQAAAGADAEIAGAFQAGADAKAAIAGAAIAAApIgMABQgcgCgLgHg");
	this.shape_3.setTransform(73.5,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8CF09").s().p("AgEBQQgLgHgGgKQgEgFgCgGQgCgIAAgJIAAguIgRAAIAAgkIATAAIAAgpIArAAIAAApIAdAAIAAAkIgdAAIAAAoQAAAGADAEIAGAFQAGADAKAAIAGAAIAAApIgMABQgcgCgLgHg");
	this.shape_4.setTransform(62.4,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8CF09").s().p("AgdBDQgPgFgKgJIgKgLIgHgNQgDgGgCgHQgBgIAAgIQAAgHABgHQACgHADgHQAEgJANgOQAKgKAPgFQAJgDAUgCQAKAAAUAFQAOAFALAKQANAOAEAJQADAHACAHQABAHAAAHQAAAIgBAIQgCAHgDAGIgHANIgKALQgLAJgOAFQgOAFgQAAQgPAAgOgFgAgLgeQgFACgFAFQgEAEgDAGQgCAHAAAGQAAAIACAGQADAGAEAFQAFAEAFACQAGACAFABQAGgBAFgCQAGgCAFgEQAEgFADgGQACgGAAgIQAAgGgCgHQgDgGgEgEQgFgFgGgCQgFgCgGgBQgFABgGACg");
	this.shape_5.setTransform(48.4,2.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8CF09").s().p("AAABfQgIgCgGgFQgIgGgFgKQgEgLAAgRIAAiMIAtAAIAACGQgBAKADAEQADAEAHAAIAGgBIAAApIgOABQgLAAgHgCg");
	this.shape_6.setTransform(35.9,-0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F8CF09").s().p("AAWBHIAAhQQAAgJgDgFQgEgEgIAAQgHAAgEADQgGADgEAFQgEAFgCAHQgBAEAAAIIAAA/IgvAAIAAiJIAtAAIAAAMIAAAIIAAAAQAGgKAKgGQAFgDAFgCQAHgDAKAAQALAAAIADQAJADAHAGQAHAGAEAKQADAKAAAPIAABYg");
	this.shape_7.setTransform(15.9,2.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F8CF09").s().p("AgWBgIAAiJIAtAAIAACJgAgWg7IAAgkIAsAAIAAAkg");
	this.shape_8.setTransform(3.5,-0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F8CF09").s().p("AgkBFQgJgDgGgGQgGgGgDgIQgDgHAAgJQAAgHACgGQACgGADgEQAHgHAMgGQALgFAOgDQAMgCANAAIAEAAIAAgCQAAgIgGgEQgFgDgGgBQgKAAgKAFQgKADgJAGIgQghQAJgHAQgFQALgEAVgCQAOAAAMADQALAFAIAHQAIAHAFALQAEAKAAANIAABUIgrAAIAAgIIABgJIgBAAQgGAKgMAFQgJAFgMAAQgKAAgIgDgAgGAMQgFADgDACQgDAEAAAFQAAAEADAEQAEAEAGgBQAIABAHgJQAHgHAAgJIAAgEIgEAAQgNAAgHADg");
	this.shape_9.setTransform(-8.2,2.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F8CF09").s().p("AAWBgIAAhRQAAgKgDgFQgEgCgIAAQgHAAgEACQgGACgEAFQgEAFgCAGQgBAIAAAIIAAA+IgvAAIAAi/IAvAAIAAA9IgBAMIABAAQAGgLALgFQAJgHAPABQALAAAIACQAJADAHAGQAHAHADAJQAEAKAAANIAABag");
	this.shape_10.setTransform(-23.7,-0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F8CF09").s().p("AgHBHQgIgCgIgDIgNgHIgLgJQgKgKgFgNQgFgNAAgOQAAgNAFgNQAFgNAKgKIALgJQAGgEAHgDQAHgDAJgCQAHgBAJAAQAPAAAOAEIAOAHIAMAJIgUAgQgGgGgJgDQgJgFgJAAQgIAAgFAEQgFACgFAFQgEAEgCAHQgCAGAAAFQAAAFACAGQACAGAEAFQAGAFAFADQAGADAIABQAJAAALgGQAKgEAIgHIARAgQgFAFgHAFQgGAEgJADIgPAFQgJABgIAAQgJAAgHgBg");
	this.shape_11.setTransform(-39.4,2.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F8CF09").s().p("AATBgIgcg2IgOAAIAAA2IgvAAIAAi/IAvAAIAABiIAMAAIAagsIAzAAIgpA9IAAAAIAvBMg");
	this.shape_12.setTransform(-54.3,-0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F8CF09").s().p("AgHBHQgJgCgHgDIgNgHIgLgJQgKgKgFgNQgFgNAAgOQAAgNAFgNQAFgNAKgKIALgJQAGgEAHgDQAHgDAJgCQAHgBAJAAQAPAAAOAEIAOAHIALAJIgTAgQgHgGgIgDQgJgFgJAAQgHAAgFAEQgGACgFAFQgEAEgCAHQgCAGAAAFQAAAFACAGQACAGAEAFQAFAFAHADQAEADAJABQAKAAAKgGQAJgEAJgHIARAgQgFAFgHAFQgHAEgHADIgQAFQgJABgIAAQgJAAgHgBg");
	this.shape_13.setTransform(-70.3,2.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F8CF09").s().p("AgdBDQgPgFgKgJIgKgLIgHgNQgDgGgCgHQgBgIAAgIQAAgHABgHQACgHADgHQAEgJANgOQAKgKAPgFQAJgDAUgCQAKAAAUAFQAOAFALAKQANAOAEAJQADAHACAHQABAHAAAHQAAAIgBAIQgCAHgDAGIgHANIgKALQgLAJgOAFQgOAFgQAAQgPAAgOgFgAgLgeQgFACgFAFQgEAEgDAGQgCAHAAAGQAAAIACAGQADAGAEAFQAFAEAFACQAGACAFABQAGgBAFgCQAGgCAFgEQAEgFADgGQACgGAAgIQAAgGgCgHQgDgGgEgEQgFgFgGgCQgFgCgGgBQgFABgGACg");
	this.shape_14.setTransform(-86.6,2.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F8CF09").s().p("AAABfQgIgCgGgFQgIgGgFgKQgEgLAAgRIAAiMIAtAAIAACGQgBAKADAEQADAEAHAAIAGgBIAAApIgOABQgLAAgHgCg");
	this.shape_15.setTransform(-99.1,-0.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F8CF09").s().p("AgLBdQgLgEgHgIIAAAAIAAAIIAAAFIgrAAIAAi/IAvAAIAAA2IgBAMIABAAQAGgHAKgEQAJgEALAAQAOAAALAFQAMAFAIAKQAIAKAEANQAFAMAAAQQAAAQgFAOQgFANgIAKQgJAJgMAFQgMAGgOAAQgJAAgKgFgAgKgFQgEADgEACQgEAEgCAGQgDAHAAAJQAAAGADAGQABAGADAFQAEAEAFADQAFADAGAAQAEAAAFgCQAFgDAEgEQAEgEACgGQACgHAAgHQAAgIgCgGQgCgHgDgEQgEgDgFgCQgFgDgFAAQgFAAgFACg");
	this.shape_16.setTransform(-112.1,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.4,-18.2,259,36.4);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8CF09").s().p("AglBqQgPgEgMgGIAPgnQAKAFALADQALACALAAIAMgBQAGgCAFgEQAFgDADgGQADgFAAgJIAAgFIAAgFIAAAAQgHAIgJAEQgKADgLAAQgJAAgHgBIgOgFQgNgGgJgLQgJgLgEgMQgFgOAAgPQAAgPAFgNQAEgOAIgLQAJgLANgGIAOgFIARgBQAKAAAKAEQAMAEAIAHIAAAAIAAgDIAAgIIAxAAIAACKQAAAKgCAJQgCAJgEAHQgDAIgGAGQgFAGgGAFQgMAJgQAEQgPAEgOAAQgQAAgQgEgAgLhAQgFACgEAFQgGAIAAAOQAAAIABAGQACAGAEAFQADAGAGACQAGACAFAAQAMAAAHgFQAEgFADgGQACgHAAgJQAAgLgCgGQgDgHgEgDQgHgHgNAAQgGAAgFACg");
	this.shape.setTransform(108.5,5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8CF09").s().p("AAZBOIAAhYQAAgLgFgEQgEgGgIAAQgIABgFADQgHADgEAGQgEAGgCAHQgCAFAAAJIAABFIg0AAIAAiYIAyAAIAAAOIgBAJIABAAQAHgLAKgHQAGgEAGgCQAIgDAKABQAMAAAKACQAKADAIAHQAHAHAEALQAFAMAAAPIAABig");
	this.shape_1.setTransform(90.3,2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8CF09").s().p("AgZBrIAAiZIAzAAIAACZgAgYhBIAAgpIAxAAIAAApg");
	this.shape_2.setTransform(76.5,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8CF09").s().p("AAUBrIgeg8IgQAAIAAA8Ig0AAIAAjVIA0AAIAABtIAOAAIAdgxIA4AAIgtBFIAAAAIAzBUg");
	this.shape_3.setTransform(64.2,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8CF09").s().p("AgzBOIAAiYIAyAAIAAAaIgBAJIABAAQABgHAEgIQAEgGAHgGQAHgGAHgCQAIgDAJAAIAGAAIAAAzIgKgBQgMAAgHADQgIAEgGAGQgFAGgDAIQgBAHAAALIAAA8g");
	this.shape_4.setTransform(48.7,2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8CF09").s().p("AghBLQgPgGgMgLIgLgLIgIgOQgEgIgBgIQgCgIAAgJQAAgHACgIQABgJAEgHQAEgKAPgQQALgLAQgFQALgEAWgCQAMAAAWAGQAQAFAMALQAOAQAEAKQAEAHABAJQACAIAAAHQAAAJgCAIQgBAIgEAIIgIAOIgKALQgMALgQAGQgQAFgSAAQgRAAgQgFgAgMghQgGACgFAFQgFAFgDAHQgDAHAAAHQAAAIADAIQADAGAFAFQAFAFAGADQAGACAGAAQAHAAAGgCQAGgDAFgFQAFgFADgGQADgIAAgIQAAgHgDgHQgDgHgFgFQgFgFgGgCQgGgDgHAAQgGAAgGADg");
	this.shape_5.setTransform(32.1,2.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8CF09").s().p("AAVBNIgShIIgDgOIAAAAIgCAOIgRBIIg6AAIgsiZIA3AAIATBZQACAJAAAIIAAAAIADgRIAVhZIArAAIAVBZIADARIABAAQAAgIABgJIAThZIA2AAIgrCZg");
	this.shape_6.setTransform(10,2.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F8CF09").s().p("AhOBhIARgmQAIAGAIAAQAHAAAGgDQAIgEAEgJIACgHIhBiVIA7AAIAWBHQACAIACAQIABAAIAFgXIAThIIA5AAIg/CpQgFAMgHAKQgHAIgHAGQgIAFgKADQgJACgKAAQgUAAgQgLg");
	this.shape_7.setTransform(-18.7,5.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F8CF09").s().p("AgnBnQgNgGgJgLQgJgLgFgOQgFgPAAgTQAAgRAFgNQAFgQAKgKQAJgLANgFQANgGAQAAQAKAAAJADQAMACAHAHIABAAIgBgGIAAg/IA0AAIAADVIgwAAIAAgKIAAgJIgBAAQgHALgMAGQgLAGgMgBQgQAAgNgFgAgJgFQgGADgEACQgEAFgCAHQgDAHAAAIQAAAJACAHQADAHAEAFQAEAFAFADQAGACAFAAQAGAAAFgCQAFgCAFgFQAEgEACgHQADgIAAgKQAAgGgCgHQgCgHgEgFQgEgEgFgCQgGgDgHgBQgFABgFACg");
	this.shape_8.setTransform(-36.8,-0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F8CF09").s().p("AgpBNQgIgEgIgGQgGgHgEgIQgDgJAAgKQgBgHADgHQACgGAEgGQAIgHANgHQAMgFAQgDQANgCAPAAIAEAAIAAgDQABgJgIgFQgFgDgHAAQgLAAgMAEQgKAEgKAGIgSgkQAKgIASgGQALgEAYgCQAQAAANAEQANAEAJAIQAJAJAEALQAGAMAAAPIAABdIgwAAIAAgJIABgKIgBAAQgHAKgNAHQgLAFgNAAQgLAAgKgDgAgHAOQgGACgDAEQgDADAAAFQAAAGADAEQAFAEAGAAQAKAAAHgJQAIgJAAgKIAAgEIgFAAQgOAAgIAEg");
	this.shape_9.setTransform(-54.5,2.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F8CF09").s().p("AgJBPIgRgFQgIgEgHgEIgLgLQgLgLgGgPQgFgOgBgPQABgQAFgOQAGgPAKgLQALgLAOgGIAQgFIAQgBQARAAAOAFQANAGAJAKQAJAKAFAOQAEANAAAQIgBAPIhfAAQACAGADAGQADAFAFADQAIAHANAAQAKAAAMgEQAKgEALgHIASAkQgFAFgJAEIgQAIQgRAFgSAAQgJAAgJgBgAAYgSQAAgKgFgGQgHgHgJAAQgJAAgGAHQgGAGgCAKIAsAAIAAAAg");
	this.shape_10.setTransform(-70.9,2.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F8CF09").s().p("AgzBOIAAiYIAyAAIAAAaIgBAJIABAAQABgHAEgIQAFgGAGgGQAHgGAHgCQAJgDAIAAIAGAAIAAAzIgKgBQgLAAgJADQgIAEgFAGQgFAGgDAIQgBAHAAALIAAA8g");
	this.shape_11.setTransform(-85.1,2.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F8CF09").s().p("AAABqQgJgDgHgFQgJgHgFgLQgFgMAAgTIAAicIAyAAIAACVQAAALADAEQADAFAJAAIAGAAIAAAtIgQAAQgMAAgIgBg");
	this.shape_12.setTransform(-96.5,-0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F8CF09").s().p("AgoBNQgKgEgGgGQgHgHgDgIQgFgJAAgKQABgHACgHQACgGAEgGQAHgHAOgHQAMgFAQgDQANgCAPAAIAEAAIAAgDQAAgJgGgFQgGgDgIAAQgKAAgMAEQgKAEgKAGIgSgkQALgIARgGQAMgEAYgCQAPAAANAEQANAEAJAIQAJAJAFALQAEAMAAAPIAABdIgvAAIAAgJIAAgKIAAAAQgHAKgNAHQgLAFgNAAQgLAAgJgDgAgHAOQgFACgEAEQgDADAAAFQAAAGADAEQAFAEAHAAQAIAAAJgJQAHgJAAgKIAAgEIgFAAQgOAAgIAEg");
	this.shape_13.setTransform(-110.5,2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125,-20,250,40);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8CF09").s().p("AhJByIAAjjIA4AAIAACzIBbAAIAAAwg");
	this.shape.setTransform(31.3,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8CF09").s().p("AAxByIgOgwIhFAAIgOAwIg6AAIBOjjIA5AAIBODjgAAWAVIgNgrQgEgOgFgZIAAAAQgEAZgEAOIgNArIArAAg");
	this.shape_1.setTransform(10.9,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8CF09").s().p("AhIByIAAjjICNAAIAAAwIhVAAIAAAqIBDAAIAAAuIhDAAIAAArIBZAAIAAAwg");
	this.shape_2.setTransform(-8.3,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8CF09").s().p("AAeByIgnhNIgaAAIAABNIg4AAIAAjjIBQAAIAZABIARAEQAKAEAIAGQAHAHAGAIQAFAIADALQAEALAAAMQAAAJgDAJQgCAKgEAIQgFAHgGAGQgGAHgJAEIAAABIAJAOIAsBQgAgjgJIAYAAQAMAAAHgIQAIgHAAgOQAAgJgDgFQgCgHgIgDQgFgDgOAAIgTAAg");
	this.shape_3.setTransform(-27.5,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49,-21.2,98,42.4);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8CF09").s().p("AgaB8IAAg0IA1AAIAAA0gAgYAvIgGirIA9AAIgGCrg");
	this.shape.setTransform(114.7,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8CF09").s().p("AAYBaIgUhTIgEgSIAAAAIgCASIgUBTIhFAAIgyizIA/AAIAXBpQACAKAAAJIABAAQABgJACgKIAZhpIAxAAIAaBpQACAKAAAJIABAAIADgTIAWhpIA/AAIgzCzg");
	this.shape_1.setTransform(94.7,2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8CF09").s().p("AgmBXQgTgGgOgNIgMgOIgKgPQgEgJgCgKQgCgJAAgLQAAgIACgLQACgJAEgJQAFgLARgTQAOgNATgGQAMgFAagCQAOAAAZAHQATAGAOANQARATAFALQAEAJACAJQACALAAAIQAAALgCAJQgCAKgEAJIgKAPIgMAOQgOANgSAGQgTAHgVAAQgTAAgTgHgAgOgnQgIACgFAHQgGAGgDAHQgDAJAAAIQAAAJADAJQADAIAGAGQAFAGAIADQAHACAHAAQAIAAAHgCQAIgDAFgGQAGgGADgIQAEgJAAgJQAAgIgEgJQgDgHgGgGQgFgHgIgCQgHgEgIAAQgHAAgHAEg");
	this.shape_2.setTransform(68.8,2.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8CF09").s().p("AAdBcIAAhoQAAgMgFgGQgFgGgKAAQgJAAgGAEQgHAEgGAHQgEAGgDAJQgCAGAAAKIAABSIg9AAIAAizIA7AAIAAAQIgBALIABAAQAHgNAMgHQAIgFAHgDQAKgDALAAQAOAAALAEQAMADAJAIQAJAIAFANQAEANAAATIAABzg");
	this.shape_3.setTransform(46.8,2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8CF09").s().p("AAdBcIAAhoQAAgMgFgGQgFgGgKAAQgJAAgGAEQgIAEgEAHQgFAGgDAJQgCAGAAAKIAABSIg8AAIAAizIA5AAIAAAQIAAALIAAAAQAIgNANgHQAHgFAGgDQAKgDAMAAQAOAAAMAEQALADAJAIQAJAIAEANQAGANAAATIAABzg");
	this.shape_4.setTransform(16.1,2.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8CF09").s().p("AgmBXQgTgGgOgNIgMgOIgKgPQgEgJgCgKQgCgJAAgLQAAgIACgLQACgJAEgJQAFgLARgTQAOgNATgGQAMgFAagCQAOAAAZAHQATAGAOANQARATAFALQAEAJACAJQACALAAAIQAAALgCAJQgCAKgEAJIgKAPIgMAOQgOANgSAGQgTAHgVAAQgTAAgTgHgAgOgnQgIACgFAHQgGAGgDAHQgDAJAAAIQAAAJADAJQADAIAGAGQAFAGAIADQAHACAHAAQAIAAAHgCQAIgDAFgGQAGgGADgIQAEgJAAgJQAAgIgEgJQgDgHgGgGQgFgHgIgCQgHgEgIAAQgHAAgHAEg");
	this.shape_5.setTransform(-6.2,2.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8CF09").s().p("AgmBXQgZgLgJgJIAagoQAKAJAMAFQANAFALAAQAJAAAFgDQADgCAAgFQAAgFgNgGIgbgLQgUgHgJgJQgHgGgDgJQgDgIAAgLQAAgNAFgMQAGgKAKgIQALgHAOgEQANgDANAAQATAAAQAFQARAFANALIgUAqQgJgHgMgEQgNgEgMAAQgHAAgFACQgDACAAAEQAAAGALAGIAdAKQAUAIAJAIQAHAGADAJQADAIAAAKQABANgGALQgFALgKAIQgJAIgNAEQgPAFgQAAQgTAAgTgHg");
	this.shape_6.setTransform(-34.5,2.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F8CF09").s().p("AgdB8IAAiyIA7AAIAACygAgchMIAAgwIA5AAIAAAwg");
	this.shape_7.setTransform(-47.6,-0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F8CF09").s().p("AgaB+QgNgCgNgFQgMgGgKgHQgLgGgIgJQgJgJgGgLQgHgKgFgLQgFgNgCgNQgCgMgBgMQABgNACgOQACgMAFgLQAFgMAHgKQAGgLAJgIQAIgIALgIQAKgGAMgFQANgFANgDQANgCANAAQAOAAAOACQANADAMAFQAMAFAKAGQAKAIAJAIQAJAIAGALQAHAKAFAMQAEALADAMQACAOAAANQAAAMgCAMQgDANgEANQgFALgHAKQgGALgJAJQgJAJgKAGQgKAHgMAGQgMAFgNACQgOADgOAAQgNAAgNgDgAgahCQgMAFgJAJQgJAKgFANQgFAOAAAPQAAANAFAOQAFAOAJAKQAJAKAMAGQANAGANgBQAOABANgGQAMgGAJgKQAJgKAFgOQAFgOAAgNQAAgPgFgOQgFgNgJgKQgJgJgMgFQgNgGgOAAQgNAAgNAGg");
	this.shape_8.setTransform(-75.8,-0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F8CF09").s().p("AgMB+QgOgDgMgEQgLgFgLgHQgKgHgJgIQgJgJgGgLQgHgKgEgLQgFgNgCgNQgCgNAAgMQAAgNACgNQADgMAEgMQAFgMAHgKQAGgKAJgJQAJgIAKgIQAKgGAMgFQANgFANgDQAMgCANAAQAOAAAMACQANADAMAEQAMAEALAGQAMAIAJAJIgdAtQgNgKgQgIQgRgHgRAAQgRAAgMAGQgNAGgKALQgIAJgEANQgFANABANQgBANAFANQAEAOAJAKQAJALANAGQAMAHARgBQANAAAXgJQASgHANgOIAfAsQgIAKgKAHQgLAIgMAFQgNAHgOACQgQAEgRAAQgOAAgMgDg");
	this.shape_9.setTransform(-102.2,-0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F8CF09").s().p("AgdB8IAAj4IA7AAIAAD4g");
	this.shape_10.setTransform(-120.7,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.4,-23,257,46);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8CF09").s().p("AglDHQgSgEgOgIQgOgIgLgLQgMgLgIgOQgMgSgNgvQgHgjgBgrQABgrAHgjIAKgjQAGgQAJgOQAIgOAMgKQALgLAOgIQAOgIASgEQASgEATAAQAUAAASAEQARAEAOAIQAOAIAMALQALAKAJAOQAJAOAGAQIAKAjQAHAjABArQgBArgHAjQgNAvgMASQgJAOgLALQgMALgOAIQgOAIgRAEQgSAEgUAAQgTAAgSgEgAgWhpQgJAJgHAQQgEAPgDAVIgDAsQADA8AHAVQAHAQAJAJQAKAJAMAAQANAAAKgJQAJgJAGgQQAIgVADg8IgDgsQgCgVgGgPQgGgQgJgJQgKgJgNAAQgMAAgKAJg");
	this.shape.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,-35,39.2,70);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8CF09").s().p("AglDHQgSgEgOgIQgOgIgLgLQgMgLgIgOQgMgSgNgvQgHgjgBgrQABgrAHgjIAKgjQAGgQAJgOQAIgOAMgKQALgLAOgIQAOgIASgEQASgEATAAQAUAAASAEQARAEAOAIQAOAIAMALQALAKAJAOQAJAOAGAQIAKAjQAHAjABArQgBArgHAjQgNAvgMASQgJAOgLALQgMALgOAIQgOAIgRAEQgSAEgUAAQgTAAgSgEgAgWhpQgJAJgHAQQgEAPgDAVIgDAsQADA8AHAVQAHAQAJAJQAKAJAMAAQANAAAKgJQAJgJAGgQQAIgVADg8IgDgsQgCgVgGgPQgGgQgJgJQgKgJgNAAQgMAAgKAJg");
	this.shape.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,-35,39.2,70);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8CF09").s().p("AglDHQgSgEgOgIQgOgIgLgLQgMgLgIgOQgMgSgNgvQgHgjgBgrQABgrAHgjIAKgjQAGgQAJgOQAIgOAMgKQALgLAOgIQAOgIASgEQASgEATAAQAUAAASAEQARAEAOAIQAOAIAMALQALAKAJAOQAJAOAGAQIAKAjQAHAjABArQgBArgHAjQgNAvgMASQgJAOgLALQgMALgOAIQgOAIgRAEQgSAEgUAAQgTAAgSgEgAgWhpQgJAJgHAQQgEAPgDAVIgDAsQADA8AHAVQAHAQAJAJQAKAJAMAAQANAAAKgJQAJgJAGgQQAIgVADg8IgDgsQgCgVgGgPQgGgQgJgJQgKgJgNAAQgMAAgKAJg");
	this.shape.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,-35,39.2,70);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8CF09").s().p("AglDHQgRgEgPgIQgOgIgMgLQgLgLgJgOQgLgSgNgvQgIgjAAgrQAAgrAIgjIAKgjQAGgQAIgOQAJgOALgKQAMgLAOgIQAPgIARgEQARgEAUAAQAUAAARAEQASAEAPAIQAOAIALALQALAKAKAOQAHAOAHAQIAKAjQAIAjgBArQABArgIAjQgNAvgLASQgKAOgLALQgLALgOAIQgPAIgSAEQgRAEgUAAQgTAAgSgEgAgXhpQgIAJgGAQQgGAPgCAVIgDAsQADA8AIAVQAGAQAIAJQALAJAMAAQANAAAKgJQAJgJAGgQQAHgVADg8IgCgsQgDgVgFgPQgGgQgJgJQgKgJgNAAQgMAAgLAJg");
	this.shape.setTransform(-0.1,-1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.6,-35,39.2,70);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8CF09").s().p("AiDDIQgEgZgBgSQAAgaAIgXQAGgVANgTQAQgXAqgjIA5goQANgKAGgJQAHgJABgKQAAgUgOgLQgMgIgPgBQgSAAgRANQgOAMgJARIhIgvQAJgSAMgPQAOgPAQgMQATgMAVgHQAWgGAZgBQAXABAYAGQAYAIATAPQAUAPALAWQAMAiAAAUQAAAWgHAUQgGARgMAQQgKANgQANIgdAXQhPAugDAZICoAAIAABTg");
	this.shape.setTransform(-0.2,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.5,-35,37.1,70);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8CF09").s().p("Ah7DEIAAhTIBTAAIAAihIAAgeIgBAAQgFAKgKALIgYAVIg3g8IBqhjIBRAAIAAE0IBUAAIAABTg");
	this.shape.setTransform(0.3,-0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.3,-35,34.6,70);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dolphin();
	this.instance.setTransform(-92,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92,-160,184,320);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hand();
	this.instance.setTransform(-71,-71);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-71,142,142);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D7D4DE","#FFFFFF"],[0,1],-108.2,-45.9,-108.2,26.8).s().p("AiaDAQAKhgAAhtQAAhvgLhSIgMg8IDEAFQBUAAAgA4QAXAngBBMQAAB7hHAsQg9AmhNgfQAFBpANAvQghgLghAGQgpAIghAcQAFgaAFgxgAgrgNIAAAgIAAAAQAtAEAdgXQAhgcAAg+QAAg6gTgXQgSgWgqAAIgUAAQgJBcABBYg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.8,-26.7,33.6,53.6);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D7D4DE","#FFFFFF"],[0,1],-80.1,-29.3,-80.1,43.4).s().p("AhFEIQAFgNAFgdQAKg7AAhQQAAhQgKg4IgKgqQAfAFAmABIAAAAQAfgBAngFIgKAqQgKA4AABQQAABQAKA6QAEAeAGANQhGgMhFAMgAAAiBIAAAAQgaAAgUgUQgTgTAAgcIAAgBQABgcATgTQAUgUAZABQAcABAUATQATAUAAAcQgBAbgTAUQgUATgaAAIgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-26.5,14,53);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D7D4DE","#FFFFFF"],[0,1],-61.5,-35.6,-61.5,37.1).s().p("AhFDJQAFgQAFggQAKhEAAhZQAAhcgKg9IgKgrQAhAGAjgBIABAAQAfABAngGQgGAMgEAfQgKA+AABbQAABZAKBEQAEAgAGAQQhGgJhFAJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-20.1,14,40.3);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D7D4DE","#FFFFFF"],[0,1],-51.6,-27.9,-51.6,44.8).s().p("AjVEWQAFgUAEguQAKhcAAh7QAAh9gJhXQgFgsgEgTQBzAPBkAAQBPAAAzgDQAqgDAkgFIADAHQgdAXgHAuQgDAWACASQgLgDgZgDQgygIhFAAQg4ABg2AKQgEA7gBBcQAvgCAugRIAAB1QgsgQgwgDQACBbAIBFQAFAhADAQQhGgKhFAKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.4,-27.9,43,55.8);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D7D4DE","#FFFFFF"],[0,1],1.3,-37.6,1.3,35.1).s().p("AADC7QhIAAgxgvQg1gyAAhYQAAhXAyg0QAvgxBKAAIAAAAQBdAAAsA/QAmA4gDBlIjmAAQAHAfAWAUQAWAUAgAAQAfAAAUgHQAVgHAXgTIAcAhQgWAngnAWQglAVgrAAIgEAAgABPgLQAAgZgNgTQgTgdgoAAQgZAAgTAVQgSAUgEAgICKAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.3,-18.7,34.6,37.5);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D7D4DE","#FFFFFF"],[0,1],39.3,-37.7,39.3,35).s().p("AAZCWQgNgZgCgzQgTAqgbAbQgmAlgsAAQgpAAgPgnQgMgfAAhCQADhNgBgnQgBhFgOgmQAfAGAmAAQAiAAAlgGIgIAnQgIA5AABQQAAAsAYAKQAbAJAig8QAChDgBgcQgDg0gKggQAkAGAkAAQAgAAAigGIgKAqQgKA5AABQQAAA+ANASQAQAWAjgkIAUAbQgyBXhJAAQgkAAgQgeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.1,-18,40.2,36.1);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D7D4DE","#FFFFFF"],[0,1],74.5,-37.7,74.5,35).s().p("AhECwQgsABgcADQAFgNAFgdQAKg7AAhPQAAhPgKg5IgKgrQBGAMBGgMQgMAlgDAoQAdhBA1gLIAGgBIABAAIAHAAQAQAAAOAIQAPAIAHAPQAMAWgHAYQgHAYgWALQgWAMgYgHQgYgHgMgWQgrAjgCBuQACA4AJApQADAUAEAJQgigEgiAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.1,-18.1,28.3,36.2);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D7D4DE","#FFFFFF"],[0,1],100.7,-28.3,100.7,44.4).s().p("AAAEOQgjAAghAEQAFgTAEgqQAKhVAAh0QAChcgKhZQheAEhWAWQACgiAAghQAAgggHgfQB3APB7gBQB+ABB0gPQgHAhABAeQAAAkAEAfQhbgXhagDIgBAAQgIBYAABdQAABzAKBWQAFAqAFATQgkgEgiAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.3,-27.4,48.6,54.9);


(lib.delayer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		///////* this.stop()*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1455));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],0,81.8,0,-81.8).s().p("Egh4APnIAA/NMBDxAAAIAAfNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-217,-100,434,200);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.2)","rgba(255,255,255,0)"],[0,0.502,1],0,-72.2,0,72.3).s().p("EgwrAOlIAA9JMBhXAAAIAAdJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-311.6,-93.3,623.3,186.7);


(lib.Symbol1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg();
	this.instance.setTransform(-525,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-525,-200,1050,400);


(lib.txt5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_24 = function() {
		this.stop();
	}
	this.frame_45 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(21).call(this.frame_45).wait(1));

	// Layer 3
	this.instance = new lib.Symbol32();
	this.instance.setTransform(-17.7,25.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(10).to({_off:false,x:52.3,alpha:0},0).to({x:-27.7,alpha:1},9,cjs.Ease.get(1)).to({x:-17.7},4).wait(10).to({x:-157.7,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol31();
	this.instance_1.setTransform(-9.6,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(5).to({_off:false,x:60.4,alpha:0},0).to({x:-19.6,alpha:1},9,cjs.Ease.get(1)).to({x:-9.6},4).wait(10).to({x:-169.6,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(6));

	// Layer 1
	this.instance_2 = new lib.Symbol30();
	this.instance_2.setTransform(0,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:70,alpha:0},1).to({x:-10,alpha:1},9,cjs.Ease.get(1)).to({x:0},4).wait(10).to({x:-180,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.3,-40.8,164.8,81.7);


(lib.txt4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_15 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(9).call(this.frame_24).wait(1));

	// Layer 9
	this.instance = new lib.Symbol28();
	this.instance.setTransform(-0.5,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(5).to({_off:false,y:9.9,alpha:0},0).to({y:-0.1,alpha:1},9,cjs.Ease.get(1)).wait(3).to({y:-10.1,alpha:0},5,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

	// Layer 4
	this.instance_1 = new lib.Symbol27();
	this.instance_1.setTransform(-1.5,-38.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-28.7,alpha:0},1).to({y:-38.7,alpha:1},9,cjs.Ease.get(1)).wait(5).to({y:-48.7,alpha:0},5,cjs.Ease.get(-1)).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-153.4,-48.7,301,83.7);


(lib.txt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_18 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(18).call(this.frame_18).wait(11).call(this.frame_29).wait(1));

	// Layer 6
	this.instance = new lib.Symbol24();
	this.instance.setTransform(1.5,21.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(9).to({_off:false,y:31.3,alpha:0},0).to({y:21.3,alpha:1},8,cjs.Ease.get(1)).wait(5).to({y:11.3,alpha:0},5,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

	// Layer 5
	this.instance_1 = new lib.Symbol23();
	this.instance_1.setTransform(2,-11.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(4).to({_off:false,y:-1.4,alpha:0},0).to({y:-11.4,alpha:1},8,cjs.Ease.get(1)).wait(8).to({y:-21.4,alpha:0},5,cjs.Ease.get(-1)).to({_off:true},1).wait(3));

	// Layer 2
	this.instance_2 = new lib.Symbol22();
	this.instance_2.setTransform(2,-43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-33.5,alpha:0},1).to({y:-43.5,alpha:1},8,cjs.Ease.get(1)).wait(9).to({y:-53.5,alpha:0},5,cjs.Ease.get(-1)).to({_off:true},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.9,-64.7,259,104.2);


(lib.txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_16 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(6).call(this.frame_16).wait(1));

	// Layer 1
	this.instance = new lib.Symbol21();
	this.instance.setTransform(0,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:11.2,alpha:0},1).to({y:1.2,alpha:1},9,cjs.Ease.get(1)).to({y:-8.8,alpha:0},5,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.4,-21.8,257,46);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArADbQhjAAgBhlIAAjrQABhmBjAAIWBAAQBjAAABBmIAADrQgBBlhjAAg");
	mask.setTransform(-0.5,-1);

	// Layer 3
	this.instance = new lib.Symbol44();
	this.instance.setTransform(-105,-1.8,1,1.124,0,27.2,0);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({x:112},30).wait(26));

	// Layer 1
	this.instance_1 = new lib.btn();
	this.instance_1.setTransform(-81,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-23,162,46);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{over:1,out:11});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_10 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(10));

	// Layer 2
	this.instance = new lib.Symbol42();
	this.instance.setTransform(1,0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({alpha:1},9).to({alpha:0},8).to({_off:true},1).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol43();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-23,162,46);


(lib.Symbol33_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol10();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

	// Layer 4
	this.instance_1 = new lib.Symbol9();
	this.instance_1.setTransform(-70,-9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({rotation:15,x:-66,y:-21},3).to({rotation:-39.2,x:-69.9,y:18.1},7,cjs.Ease.get(1)).to({rotation:-24.2,y:5},5).to({rotation:-39.2,y:18.1},5).to({rotation:-24.2,y:5},5).to({rotation:-39.2,y:18.1},5).to({rotation:-24.2,y:5},5).to({rotation:-39.2,y:18.1},5).to({rotation:0,x:-70,y:-9},5).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141,-160,233,320);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

	// Layer 3
	this.instance = new lib.Symbol10();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,skewX:5.6},3).to({scaleY:1.03,skewX:-13.9,x:-20},11,cjs.Ease.get(1)).to({scaleY:1,skewX:0,x:0},5).wait(1));

	// Layer 4
	this.instance_1 = new lib.Symbol9();
	this.instance_1.setTransform(-70,-9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:15,x:-62,y:-19},3).to({rotation:-22,x:-90,y:-8.9},11,cjs.Ease.get(1)).to({rotation:0,x:-70,y:-9},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141,-160,233,320);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.Symbol20();
	this.instance.setTransform(84.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({scaleX:1.14,scaleY:1.14},5).to({scaleX:1,scaleY:1},5).wait(11));

	// Layer 5
	this.instance_1 = new lib.Symbol19();
	this.instance_1.setTransform(49.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({scaleX:1.14,scaleY:1.14},5).to({scaleX:1,scaleY:1},5).wait(16));

	// Layer 4
	this.instance_2 = new lib.Symbol18();
	this.instance_2.setTransform(14.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({scaleX:1.14,scaleY:1.14},5).to({scaleX:1,scaleY:1},5).wait(21));

	// Layer 3
	this.instance_3 = new lib.Symbol17();
	this.instance_3.setTransform(-20.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({regX:-0.1,scaleX:1.14,scaleY:1.14,x:-20.8},5).to({regX:0,scaleX:1,scaleY:1,x:-20.7},5).wait(26));

	// Layer 2
	this.instance_4 = new lib.Symbol16();
	this.instance_4.setTransform(-54.6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({regX:-0.1,scaleX:1.14,scaleY:1.14,x:-54.7},5).to({regX:0,scaleX:1,scaleY:1,x:-54.6},5).wait(31));

	// Layer 1
	this.instance_5 = new lib.Symbol15();
	this.instance_5.setTransform(-86.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({regX:-0.1,scaleX:1.14,scaleY:1.14},5).to({regX:0,scaleX:1,scaleY:1},5).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.5,-35,207.3,70);


(lib.money = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_21 = function() {
		this.stop();
	}
	this.frame_31 = function() {
		this.stop();
	}
	this.frame_41 = function() {
		this.stop();
	}
	this.frame_51 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(10).call(this.frame_11).wait(10).call(this.frame_21).wait(10).call(this.frame_31).wait(10).call(this.frame_41).wait(10).call(this.frame_51).wait(24));

	// Layer 5
	this.instance = new lib.Symbol40();
	this.instance.setTransform(19,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(40).to({_off:false,scaleX:0.5,scaleY:0.5,alpha:0},0).to({scaleX:1.11,scaleY:1.11,alpha:1},7,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},3).wait(1).to({y:19},4).to({y:72},10,cjs.Ease.get(-1)).to({_off:true},1).wait(8));

	// Layer 4
	this.instance_1 = new lib.Symbol39();
	this.instance_1.setTransform(-55,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(30).to({_off:false,scaleX:0.5,scaleY:0.5,alpha:0},0).to({scaleX:1.11,scaleY:1.11,alpha:1},7,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},3).wait(13).to({y:2},4).to({y:72},10,cjs.Ease.get(-1)).to({_off:true},1).wait(6));

	// Layer 3
	this.instance_2 = new lib.Symbol38();
	this.instance_2.setTransform(66,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(20).to({_off:false,scaleX:0.5,scaleY:0.5,alpha:0},0).to({scaleX:1.13,scaleY:1.12,alpha:1},7,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},3).wait(25).to({y:4.8},4).to({y:69.8},10,cjs.Ease.get(-1)).to({_off:true},1).wait(4));

	// Layer 2
	this.instance_3 = new lib.Symbol37();
	this.instance_3.setTransform(6,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(10).to({_off:false,scaleX:0.5,scaleY:0.5,alpha:0},0).to({scaleX:1.11,scaleY:1.11,alpha:1},7,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},3).wait(37).to({y:-9},4).to({y:70},10,cjs.Ease.get(-1)).to({_off:true},1).wait(2));

	// Layer 1
	this.instance_4 = new lib.Symbol36();
	this.instance_4.setTransform(35,-23.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:-0.1,scaleX:0.5,scaleY:0.5,alpha:0},1).to({regY:0,scaleX:1.17,scaleY:1.17,alpha:1},7,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},3).wait(49).to({y:-28.6},4).to({y:60.4},10,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-49,206,111);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(49).call(this.frame_49).wait(1));

	// Layer 8
	this.instance = new lib.Symbol8();
	this.instance.setTransform(60.8,-92.5,0.599,0.599,0,0,0,-1.7,-3.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(9).to({_off:false,regX:-1.9,regY:-3.7,scaleX:0.08,scaleY:0.08,x:7.4,y:18.3},0).to({regY:-3.6,scaleX:1.09,scaleY:1.09,x:116.8,y:8.4},9,cjs.Ease.get(1)).to({scaleX:1.02,scaleY:1.02,x:110.3,y:9.3},4).wait(16).to({regX:-1.7,regY:-3.8,scaleX:0.6,scaleY:0.6,x:60.8,y:-92.5},10,cjs.Ease.get(1)).wait(1));

	// Layer 7
	this.instance_1 = new lib.Symbol7();
	this.instance_1.setTransform(44,-102.5,0.599,0.599,0,0,0,-3.5,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(6).to({_off:false,regX:-3.8,scaleX:0.08,scaleY:0.08,x:5.1,y:17},0).to({regX:-3.7,scaleX:1.09,scaleY:1.09,x:86.4,y:-9.7},9,cjs.Ease.get(1)).to({regX:-3.6,scaleX:1.02,scaleY:1.02,x:81.7,y:-7.7},4).wait(19).to({regX:-3.5,scaleX:0.6,scaleY:0.6,x:44,y:-102.5},10,cjs.Ease.get(1)).wait(1));

	// Layer 6
	this.instance_2 = new lib.Symbol6();
	this.instance_2.setTransform(32.8,-98.7,0.599,0.599,0,0,0,-3.6,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(3).to({_off:false,regX:-3.8,regY:-2.5,scaleX:0.08,scaleY:0.08,x:3.6,y:17.5},0).to({regX:-3.7,scaleX:1.09,scaleY:1.09,x:66.1,y:-2.8},9,cjs.Ease.get(1)).to({regX:-3.6,scaleX:1.02,scaleY:1.02,x:62.8,y:-1.2},4).wait(22).to({regY:-2.6,scaleX:0.6,scaleY:0.6,x:32.8,y:-98.7},10,cjs.Ease.get(1)).wait(1));

	// Layer 5
	this.instance_3 = new lib.Symbol5();
	this.instance_3.setTransform(26.9,-103.3,0.599,0.599,0,0,0,-3.1,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.08,scaleY:0.08,x:2.8,y:16.9},1,cjs.Ease.get(-1)).to({scaleX:1.09,scaleY:1.09,x:55.4,y:-11.2},9,cjs.Ease.get(1)).to({scaleX:1.02,scaleY:1.02,x:52.6,y:-9.1},4).wait(25).to({scaleX:0.6,scaleY:0.6,x:26.9,y:-103.3},10,cjs.Ease.get(1)).wait(1));

	// Layer 4
	this.instance_4 = new lib.Symbol4();
	this.instance_4.setTransform(-4.9,-97.6,0.599,0.599,0,0,0,-1.4,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:-1.2,regY:-1.2,scaleX:0.08,scaleY:0.08,x:-1.4,y:17.7},1,cjs.Ease.get(-1)).to({regX:-1.3,scaleX:1.09,scaleY:1.09,x:-2.3,y:-0.6},9,cjs.Ease.get(1)).to({scaleX:1.02,scaleY:1.02,x:-1.6,y:0.8},4).wait(25).to({regX:-1.4,regY:-1.4,scaleX:0.6,scaleY:0.6,x:-4.9,y:-97.6},10,cjs.Ease.get(1)).wait(1));

	// Layer 3
	this.instance_5 = new lib.Symbol3();
	this.instance_5.setTransform(-27.7,-97.4,0.599,0.599,0,0,0,-1.4,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},1).wait(3).to({_off:false,regX:-1.2,scaleX:0.08,scaleY:0.08,x:-4.4,y:17.7},0).to({regX:-1.3,scaleX:1.09,scaleY:1.09,x:-43.7,y:-0.6},9,cjs.Ease.get(1)).to({regY:-2.4,scaleX:1.02,scaleY:1.02,x:-40.5,y:0.9},4).wait(22).to({regX:-1.4,regY:-2.5,scaleX:0.6,scaleY:0.6,x:-27.7,y:-97.4},10,cjs.Ease.get(1)).wait(1));

	// Layer 2
	this.instance_6 = new lib.Symbol2();
	this.instance_6.setTransform(-48.7,-97.4,0.599,0.599,0,0,0,-2.2,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},1).wait(6).to({_off:false,regX:-1.9,scaleX:0.08,scaleY:0.08,x:-7.3,y:17.7},0).to({scaleX:1.09,scaleY:1.09,x:-81.9,y:-0.6},9,cjs.Ease.get(1)).to({regY:-2.4,scaleX:1.02,scaleY:1.02,x:-76.3,y:0.9},4).wait(19).to({regX:-2.2,regY:-2.5,scaleX:0.6,scaleY:0.6,x:-48.7,y:-97.4},10,cjs.Ease.get(1)).wait(1));

	// Layer 1
	this.instance_7 = new lib.Symbol1();
	this.instance_7.setTransform(-64.4,-103.1,0.599,0.599,0,0,0,-1.5,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},1).wait(9).to({_off:false,regX:-1.2,regY:-1.2,scaleX:0.08,scaleY:0.08,x:-9.4,y:17},0).to({regX:-1.3,regY:-1.3,scaleX:1.09,scaleY:1.09,x:-110.4,y:-10.8},9,cjs.Ease.get(1)).to({scaleX:1.02,scaleY:1.02,x:-103.1,y:-8.7},4).wait(16).to({regX:-1.5,regY:-1.4,scaleX:0.6,scaleY:0.6,x:-64.4,y:-103.1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.1,-118.7,149.9,44.5);


(lib.dolphin2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.mc = new lib.Symbol33_();

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141,-160,233,320);


(lib.dolphin_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// Layer 1
	this.mc = new lib.Symbol33();

	this.timeline.addTween(cjs.Tween.get(this.mc).to({x:230},1).to({x:-10},9,cjs.Ease.get(1)).to({x:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141,-160,233,320);


(lib.butt_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var frequency = 20
		stage.enableMouseOver(frequency);
		
		canvas.addEventListener("mouseover", mouseOverBanner.bind(this));
		canvas.addEventListener("mouseout", mouseOutBanner.bind(this));
		
		function mouseOverBanner() {
			this.butt.gotoAndPlay('over')
		}
		function mouseOutBanner() {
			this.butt.gotoAndPlay('out')
		}
		this.gotoAndPlay(1);
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(10).call(this.frame_24).wait(1));

	// Layer 1
	this.butt = new lib.Symbol41();

	this.timeline.addTween(cjs.Tween.get(this.butt).to({scaleX:0.11,scaleY:0.11},1).to({scaleX:1.09,scaleY:1.09},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4).to({scaleX:0.11,scaleY:0.11},9,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-23,162,46);


(lib.Symbol2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhLDAdRQgagIgRgOQgQgPADgNQADgOAUgDQAVgDAaAIQAaAIARAOQAQAPgDANQgDANgVADIgOACQgPAAgRgGgEgmiAcNQgagEgdgRQgdgRgQgbQgQgbAIgRQAIgQAfABQAeACAcAUQAcAUANAdQAOAdgJAOQgHALgRAAIgLgBgABASqQgWgMgBgTQAAgTAUgIQAUgHAfAAQAfAAAVAKQAUAKgFARQgFASgPAKQgQAKgcABIgFAAQgZAAgVgLgEAtnACgQgPgOAHgTQAHgSAVgXQAWgWAWgOQAXgOAMAPQAMAOgCAUQgCAUgWAXQgWAYgYAKQgKAFgJAAQgLAAgJgHgEg0KgBZQgqgSgLgVQgLgVAJgXQAJgWAlgCQAkgCAfAOQAeAPAOAYQAPAZgJATQgJAUgcAFIgOACQgYAAghgPgA08shQgpgeghhIQgghHAKgyQAKgyAngNQAngNApAeQApAdAgA/QAgA+gHA3QgHA2gpASQgQAHgPAAQgaAAgagTgATE2PQgfgXAGgrQAGgrAjgvQAjgvAYgOQAZgPAfARQAfARgBApQgBApgdAtQgdAtgjAZQgTAMgRAAQgQAAgPgLgEBKhgWSQglgRgcgxQgdgxgBglQgBglAbgSQAagTAnASQAnASAcAxQAdAygBAkQgCAkgaASQgNAJgQAAQgQAAgSgIgEA3FgYjQgLgHgCgSQAAgRALgSQALgSAQgIQAQgIAMAHQAMAGAAARQABASgLASQgLASgRAIQgIAFgIAAQgFAAgGgDgEhKUgbmQgLgJAIgbQAHgbAYgVQAYgUAXgGQAYgFAMALQANALgIAWQgIAXgaAUQgaAUgWAJQgKAEgIAAQgJAAgHgFg");
	mask.setTransform(-2.7,1.3);

	// Layer 3
	this.instance = new lib.Symbol13();
	this.instance.setTransform(-710.4,82.8,2.252,1,60,0,0,-0.1,0.1);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:697.1,y:-109.2},74).wait(26));

	// Layer 1 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EBHtAgBI5m97IHdd7IgUAAIna9rI8CdrIgdAAIcN93MgsSAQVILLNiIgeAAIrCtYIobNYIgZAAIIbtXMgn8AI1IC4EiIgYAAIi4khIihEhIgZAAICgkgMgjDABnIBkC5IgaAAIhVifIiYCfIgeAAICqi0InhjcIAAgUIHhDcIAHgJMABGg4UIouF0IAAgPII7l9Il9kEIAiAAIFdDvIBWjvIASAAIhUDsIPXjsIBAAAIweD9IVyZ8INW95IAWAAItceKIeTsbIgehSIsbwdIAcAAIMOQLIAyAeILYwpIAZAAIrdQ4MAoFgIwIgMgKInEn+IAcAAIG8H0IAZgUIEhngIAZAAIkwH5IAZAUMAixgBjIHtmqIAfAAIoGG/ISgBOIgegoIkmnlIAYAAIEiHgIAyAPIH5nvIAZAAIoIIDIAKAFIIZAXIAAAPIoZgXIgDAoIG3PSIBlgbIAAASIhfAZIBfDSIAAAtIhxj6MgibAJLMAkMAMCIAAAWMgkwgMOIZweGgEhLMAc4MAjSgBnIACgEIsZ8pgEhLLAcYIWx+IIgQgmI1Y5bgEgniAbQIAAAAMAoUgI6MgWNggVgEgz+gBiIMQcXMAR3gopgABPSOMAsdgQZI6E5cgA0vuvIgZAhMAWFAgKMASMgpYgEAt9AB7IAegUIbR5GIyvhPgAUX3bIZdY4II66bgEAvOABZMAiAgJEImmuuIgog3g");

	// Layer 4
	this.instance_1 = new lib.Symbol11();
	this.instance_1.setTransform(-702.7,77.5,1.402,1,62.1);

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:704.8,y:-114.5},74).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-531.8,-204.9,152.5,409.9);


(lib.txt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_18 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(18).call(this.frame_18).wait(11).call(this.frame_29).wait(1));

	// Layer 8
	this.instance = new lib.Symbol26();
	this.instance.setTransform(-5.5,42.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(9).to({_off:false,y:52.1,alpha:0},0).to({y:42.1,alpha:1},8,cjs.Ease.get(1)).wait(5).to({y:32.1,alpha:0},5,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

	// Layer 7
	this.instance_1 = new lib.Symbol14();
	this.instance_1.setTransform(-1.5,3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(4).to({_off:false,y:13.1,alpha:0},0).to({y:3.1,alpha:1},8,cjs.Ease.get(1)).wait(8).to({y:-6.9,alpha:0},5,cjs.Ease.get(-1)).to({_off:true},1).wait(3));

	// Layer 3
	this.instance_2 = new lib.Symbol25();
	this.instance_2.setTransform(-2,-42.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-32.7,alpha:0},1).to({y:-42.7,alpha:1},8,cjs.Ease.get(1)).wait(9).to({y:-52.7,alpha:0},5,cjs.Ease.get(-1)).to({_off:true},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105,-62.7,207.3,124.8);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// Layer 2
	this.instance = new lib.Symbol2_1();
	this.instance.setTransform(-1.2,-2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol1_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},1).to({alpha:1},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-525,-200,1050,400);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.count=1
		
		var self = this
		var delayTime = 0
		this.delay = function (t) {
			self.stop()
			this.delayTime = t
			this.delayer.gotoAndPlay(1)
			this.addEventListener("tick", countDelay.bind(this));
		
		}
			function countDelay(event) {
				if (this.delayer.currentFrame / 24 > this.delayTime) {
					this.removeAllEventListeners("tick")
					self.play()
				}
		
			}
	}
	this.frame_15 = function() {
		this.delay(2,5);
	}
	this.frame_25 = function() {
		this.delay(3);
	}
	this.frame_26 = function() {
		this.txt1.play();
	}
	this.frame_35 = function() {
		this.delay(3);
	}
	this.frame_36 = function() {
		this.txt2.play();
	}
	this.frame_50 = function() {
		this.delay(3);
	}
	this.frame_51 = function() {
		this.txt3.play();
	}
	this.frame_65 = function() {
		this.delay(3);
	}
	this.frame_66 = function() {
		this.txt4.play();
	}
	this.frame_95 = function() {
		this.delay(1);
	}
	this.frame_98 = function() {
		this.dolphin.mc.play();
	}
	this.frame_113 = function() {
		this.money.play();
	}
	this.frame_123 = function() {
		this.dolphin.mc.play();
	}
	this.frame_138 = function() {
		this.money.play();
	}
	this.frame_148 = function() {
		this.dolphin.mc.play();
	}
	this.frame_163 = function() {
		this.money.play();
	}
	this.frame_173 = function() {
		this.dolphin.mc.play();
	}
	this.frame_188 = function() {
		this.money.play();
	}
	this.frame_198 = function() {
		this.dolphin.mc.play();
	}
	this.frame_213 = function() {
		this.money.play();
	}
	this.frame_224 = function() {
		this.dolphin.mc.play();
	}
	this.frame_251 = function() {
		this.delay(10);
	}
	this.frame_284 = function() {
		this.gotoAndPlay(10);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(10).call(this.frame_25).wait(1).call(this.frame_26).wait(9).call(this.frame_35).wait(1).call(this.frame_36).wait(14).call(this.frame_50).wait(1).call(this.frame_51).wait(14).call(this.frame_65).wait(1).call(this.frame_66).wait(29).call(this.frame_95).wait(3).call(this.frame_98).wait(15).call(this.frame_113).wait(10).call(this.frame_123).wait(15).call(this.frame_138).wait(10).call(this.frame_148).wait(15).call(this.frame_163).wait(10).call(this.frame_173).wait(15).call(this.frame_188).wait(10).call(this.frame_198).wait(15).call(this.frame_213).wait(11).call(this.frame_224).wait(27).call(this.frame_251).wait(33).call(this.frame_284).wait(1));

	// delayer
	this.delayer = new lib.delayer();
	this.delayer.setTransform(15,16,1,1,0,0,0,15,16);

	this.timeline.addTween(cjs.Tween.get(this.delayer).wait(285));

	// bg
	this.instance = new lib.bg_1();
	this.instance.setTransform(170,140,0.7,0.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(274).to({_off:false},0).wait(11));

	// dolphin
	this.dolphin = new lib.dolphin_1();
	this.dolphin.setTransform(246.3,200.1,0.562,0.562,0,0,0,-24.4,0.1);

	this.dolphin_1 = new lib.dolphin2();
	this.dolphin_1.setTransform(246.4,200,0.562,0.562,0,0,0,-24.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.dolphin}]},93).to({state:[{t:this.dolphin_1}]},157).wait(35));

	// butt
	this.butt = new lib.butt_1();
	this.butt.setTransform(118,230,0.739,0.739);
	this.butt._off = true;

	this.timeline.addTween(cjs.Tween.get(this.butt).wait(244).to({_off:false},0).wait(41));

	// money
	this.money = new lib.money();
	this.money.setTransform(119.8,241.6,0.874,0.873,0,0,0,3.1,6.7);
	this.money._off = true;

	this.timeline.addTween(cjs.Tween.get(this.money).wait(109).to({_off:false},0).wait(176));

	// txt5
	this.txt5 = new lib.txt5();
	this.txt5.setTransform(124.9,132.6,0.971,0.971,0,0,0,0.2,1.4);
	this.txt5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.txt5).wait(79).to({_off:false},0).wait(206));

	// txt4
	this.txt4 = new lib.txt4();
	this.txt4.setTransform(170,162.6,0.897,0.897,0,0,0,0.1,1.3);
	this.txt4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.txt4).wait(64).to({_off:false},0).wait(221));

	// txt3
	this.txt3 = new lib.txt3();
	this.txt3.setTransform(170,162.8,1.206,1.206,0,0,0,0.1,1.3);
	this.txt3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.txt3).wait(49).to({_off:false},0).wait(236));

	// txt2
	this.txt2 = new lib.txt2();
	this.txt2.setTransform(166,169.2,0.965,0.965,0,0,0,0.1,1.2);
	this.txt2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.txt2).wait(34).to({_off:false},0).wait(251));

	// txt1
	this.txt1 = new lib.txt1();
	this.txt1.setTransform(170,145.9,0.973,0.972,0,0,0,0.1,1.3);
	this.txt1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.txt1).wait(24).to({_off:false},0).wait(261));

	// logo
	this.instance_1 = new lib.logo();
	this.instance_1.setTransform(175.3,78.5,0.859,0.858,0,0,0,2.5,-66);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).wait(271));

	// bg
	this.instance_2 = new lib.bg_1();
	this.instance_2.setTransform(170,140,0.7,0.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).wait(281));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:



(lib.trueflip_250x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//////////////////////////////////////////////////////////////////
		/////////////////////2017 www.creartion.com.ua////////////////////
		//////////////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////////////
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(25));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AzhzhMAnDAAAMAAAAnDMgnDAAAg");
	this.shape.setTransform(125,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(25));

	// main
	this.instance = new lib.main();
	this.instance.setTransform(-25,0,0.893,0.893);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape_1.setTransform(125,125,0.833,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(124,124,252,252);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;