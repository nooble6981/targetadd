(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 728,
	height: 90,
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


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8CF09").s().p("AgQBSIAAgjIAiAAIAAAjgAgPAfIgEhwIAnAAIgDBwg");
	this.shape.setTransform(144,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8CF09").s().p("AgeBOQgJgEgHgIQgIgJgDgLQgEgLAAgOQAAgOAEgKQAEgLAHgIQAHgIAKgFQAKgEAMAAQAHAAAHACQAKACAFAGIAAAAIAAgGIAAgvIAoAAIAACiIglAAIAAgIIAAgGQgGAIgJAFQgJAEgJAAQgMAAgKgFgAgHgEQgEACgDACIgFAJQgCAFAAAHQAAAGACAGQABAFADAEQADAEAFACQAEACADAAQAFAAAEgCQAEgBADgEQAEgEABgFQACgGAAgHQAAgGgBgEQgCgGgCgEQgDgCgFgCQgEgCgGAAQgDAAgEABg");
	this.shape_1.setTransform(132.9,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8CF09").s().p("AAABRQgHgCgFgEQgHgFgDgJQgEgJAAgOIAAh3IAmAAIAABxQAAAJACADQACADAHAAIAEAAIAAAjIgLAAIgQgBg");
	this.shape_2.setTransform(122.6,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8CF09").s().p("AgZA5QgMgEgJgJIgIgJIgGgKIgEgMQgCgGAAgHQAAgFACgGIAEgNQADgIALgMQAJgIAMgEQAIgDARgCQAJABARAEQAMAEAJAIQALAMAEAIQACAGABAHQACAGAAAFQAAAHgCAGIgDAMIgHAKIgIAJQgJAJgMAEQgNAEgNAAQgMAAgNgEgAgJgaQgFACgDAFQgEADgCAGQgCAFAAAFQAAAGACAFQACAGAEADQADAEAFACQAFACAEAAQAFAAAFgCQAFgCAEgEQADgDACgGQACgFAAgGQAAgFgCgFQgCgGgDgDQgEgFgFgCQgFgBgFAAQgEAAgFABg");
	this.shape_3.setTransform(111.2,1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8CF09").s().p("AgZA5QgPgIgHgFIARgaQAHAFAIADQAJAEAGAAQAGAAACgCQADgBAAgDQAAgFgJgDIgRgHQgNgFgGgFQgEgFgCgEQgDgGAAgHQAAgJAFgHQADgHAHgFQAHgFAJgDQAIgCAJAAQAMAAAKAEQALADAJAHIgOAcQgEgFgKgDQgIgCgHAAQgFAAgCACQgBAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQAAAEAHAEIATAHQANAFAHAEQADAFACAFQADAFAAAIQAAAHgEAHQgDAIgGAFQgHAFgJAEQgIACgLAAQgMAAgNgEg");
	this.shape_4.setTransform(98.3,1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8CF09").s().p("AgDBEQgKgFgFgJQgDgEgBgGQgCgGAAgHIAAgoIgPAAIAAgfIAQAAIAAgiIAlAAIAAAiIAZAAIAAAfIgZAAIAAAiQAAAFACADQACADADACQAGACAIAAIAFAAIAAAjIgLAAQgXgBgJgGg");
	this.shape_5.setTransform(82.4,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8CF09").s().p("AgGA8IgOgEIgLgGIgJgIQgIgIgEgMQgFgLAAgLQAAgMAFgLQAEgMAIgIQAIgIALgFIAMgEIAMgBQANAAAKAFQAKADAIAIQAHAIADAKQAEALAAANIgBAKIhJAAQABAFADAEQACAEAEADQAGAFAKAAQAIAAAJgDQAHgDAIgGIAPAcIgLAIIgMAFQgOAEgNAAQgHAAgGgBgAASgOQAAgIgEgFQgEgEgIgBQgGAAgFAGQgEAFgCAHIAhAAIAAAAg");
	this.shape_6.setTransform(71.3,1.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F8CF09").s().p("AAPBSIgXguIgMAAIAAAuIgoAAIAAijIAoAAIAABTIALAAIAWglIArAAIgjA0IAAABIAoBAg");
	this.shape_7.setTransform(58.7,-0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F8CF09").s().p("AgGA8IgNgEIgLgGIgJgHQgJgJgFgLQgEgMAAgLQAAgLAEgLQAFgLAIgJIAKgIIALgFIANgFIANgBQANAAANAFQAGACAFADIAKAIIgRAbQgFgGgHgDQgHgCgJAAQgGgBgDADQgGACgDAFQgEAEgCAFQgBAEgBAFIACAJQACAFAEAEQADAFAGADQAEACAHAAQAIAAAJgEQAIgEAHgGIAPAcIgKAIIgNAGIgNAEIgPABIgNgBg");
	this.shape_8.setTransform(45.1,1.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F8CF09").s().p("AgSBSIAAh1IAlAAIAAB1gAgSgyIAAgfIAlAAIAAAfg");
	this.shape_9.setTransform(35.3,-0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F8CF09").s().p("AgDBEQgKgFgFgJQgDgEgBgGQgCgGAAgHIAAgoIgPAAIAAgfIAQAAIAAgiIAlAAIAAAiIAZAAIAAAfIgZAAIAAAiQAAAFACADQACADADACQAGACAIAAIAFAAIAAAjIgLAAQgXgBgJgGg");
	this.shape_10.setTransform(27.1,0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F8CF09").s().p("AATBSIAAhGQAAgIgDgEQgEgBgGAAQgGAAgEABQgEABgEAFQgDAEgBAGQgCAGAAAGIAAA2IgoAAIAAijIAoAAIAAA0IAAAKIAAAAQAFgIAKgFQAHgFANAAQAIAAAIACQAIACAFAFQAGAGAEAIQACAJAAAKIAABNg");
	this.shape_11.setTransform(9.7,-0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F8CF09").s().p("AgGA8IgNgEIgMgGIgJgHQgIgJgEgLQgFgMAAgLQAAgLAFgLQAEgLAIgJIAJgIIAMgFIANgFIANgBQAOAAAMAFQAGACAGADIAJAIIgRAbQgFgGgHgDQgHgCgJAAQgGgBgDADQgGACgDAFQgEAEgCAFQgCAEABAFQgBAEACAFQACAFAEAEQAEAFAFADQAEACAHAAQAIAAAJgEQAJgEAHgGIAOAcIgKAIIgMAGIgOAEIgPABIgNgBg");
	this.shape_12.setTransform(-3.7,1.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F8CF09").s().p("AgeA7QgHgDgGgFQgFgFgDgGQgDgHAAgIQABgGABgEIAFgJQAGgGAKgFQAKgEALgCQAKgCAMgBIADAAIAAgCQAAgGgFgEQgEgCgGAAQgIgBgJAEQgIACgIAGIgNgcQAHgGAOgFQAJgDASgCQAMAAAKAEQAJADAIAGQAGAHAEAIQAEAKgBALIAABHIgkAAIAAgHIABgIIgBAAQgFAIgKAFQgIAEgKAAQgIAAgHgCgAgFAKQgEACgCADQgDACAAAFQAAAEADACQADAEAFAAQAHgBAFgGQAHgHgBgIIAAgCIgDAAQgLAAgGACg");
	this.shape_13.setTransform(-16.9,1.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F8CF09").s().p("AgGA8IgOgEIgLgGIgJgIQgIgIgEgMQgFgLAAgLQAAgMAFgLQAEgMAIgIQAIgIALgFIAMgEIAMgBQANAAAKAFQAKADAIAIQAHAIADAKQAEALAAANIgBAKIhJAAQABAFADAEQACAEAEADQAGAFAKAAQAIAAAJgDQAHgDAIgGIAPAcIgLAIIgMAFQgOAEgNAAQgHAAgGgBgAASgOQAAgIgEgFQgEgEgIgBQgGAAgFAGQgEAFgCAHIAhAAIAAAAg");
	this.shape_14.setTransform(-29.4,1.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F8CF09").s().p("AATA8IAAhEQAAgIgEgEQgDgDgGAAQgGAAgDACQgGADgCAFQgEADgCAHQgBADAAAGIAAA2IgnAAIAAh1IAlAAIAAALIAAAHIAAAAQAFgJAIgFIAJgEQAHgCAHAAQAKAAAHACQAIADAGAFQAFAFAEAIQADAJAAAMIAABLg");
	this.shape_15.setTransform(-48.7,1.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F8CF09").s().p("AgZA5QgMgEgJgJIgIgJIgGgKIgEgMQgCgGAAgHQAAgFACgGIAEgNQADgIALgMQAJgIAMgEQAIgDARgCQAJABARAEQAMAEAJAIQALAMAEAIQACAGABAHQACAGAAAFQAAAHgCAGIgDAMIgHAKIgIAJQgJAJgMAEQgNAEgNAAQgMAAgNgEgAgJgaQgFACgDAFQgEADgCAGQgCAFAAAFQAAAGACAFQACAGAEADQADAEAFACQAFACAEAAQAFAAAFgCQAFgCAEgEQADgDACgGQACgFAAgGQAAgFgCgFQgCgGgDgDQgEgFgFgCQgFgBgFAAQgEAAgFABg");
	this.shape_16.setTransform(-63.4,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.7,-15.8,222.5,31.6);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8CF09").s().p("AATA8IAAhEQAAgIgEgEQgDgDgGAAQgGAAgDACQgFADgDAFQgDADgDAHQgBADAAAGIAAA2IgnAAIAAh1IAlAAIAAALIAAAHIAAAAQAFgJAJgFIAIgEQAHgCAHAAQAJAAAIACQAIADAGAFQAFAFAEAIQADAJAAAMIAABLg");
	this.shape.setTransform(126.9,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8CF09").s().p("AgSBSIAAh1IAlAAIAAB1gAgSgyIAAgfIAlAAIAAAfg");
	this.shape_1.setTransform(116.3,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8CF09").s().p("AgeA7QgHgDgGgFQgFgFgDgGQgDgHAAgIQABgGABgEIAFgJQAGgGAKgFQAKgEAMgCQAJgCALgBIAEAAIAAgCQAAgGgFgEQgFgCgFAAQgIgBgJAEQgIACgIAGIgNgcQAHgGAOgFQAJgDASgCQAMAAAKAEQAJADAIAGQAGAHAEAIQAEAKgBALIAABHIgkAAIAAgHIABgIIgBAAQgFAIgKAFQgHAEgLAAQgIAAgHgCgAgFAKQgEACgCADQgDACAAAFQAAAEADACQADAEAFAAQAHgBAFgGQAHgHAAgIIAAgCIgFAAQgKAAgGACg");
	this.shape_2.setTransform(106.3,1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8CF09").s().p("AgcBRQgMgDgJgFIALgeIAQAGIASACIAIgBQAFgBAEgDQAEgDACgEQACgEAAgHIAAgEIAAgEIAAAAQgGAGgGADQgHADgIAAIgOgBIgKgEQgKgEgHgJQgHgIgDgJQgDgLAAgLQAAgMADgKQADgLAHgIQAHgIAJgFIALgDIANgBQAHAAAIACQAJADAGAGIABAAIgBgDIAAgGIAmAAIAABqQAAAIgCAHQgBAHgDAFIgHALIgJAIQgJAGgMAEQgLADgLAAQgLAAgNgDgAgIgwQgEABgDADQgFAHAAAKIABALQACAFADAEQACAEAFACQAEABAEAAQAJAAAFgEQADgDACgFQACgFAAgIQAAgHgCgGQgCgEgDgDQgGgFgJAAQgEAAgEACg");
	this.shape_3.setTransform(92.9,4.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8CF09").s().p("AgZA5QgPgIgHgFIARgaQAGAFAJADQAIAEAHAAQAGAAACgCQADgBAAgDQAAgFgJgDIgRgHQgNgFgGgFQgEgFgCgEQgCgGgBgHQAAgJAFgHQADgHAHgFQAHgFAIgDQAKgCAIAAQALAAALAEQALADAJAHIgNAcQgGgFgJgDQgIgCgIAAQgEAAgCACQgBAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQAAAEAHAEIATAHQANAFAGAEQAFAFABAFQADAFAAAIQAAAHgEAHQgCAIgHAFQgGAFgKAEQgIACgLAAQgMAAgNgEg");
	this.shape_4.setTransform(74.7,1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8CF09").s().p("AgnA8IAAh1IAmAAIAAAUIAAAIIAAAAQABgGADgGQADgFAFgEQAGgEAFgCQAHgDAGAAIAFABIAAAnIgIgBQgJAAgGADQgGACgEAFQgEAEgCAGQgBAGAAAIIAAAug");
	this.shape_5.setTransform(65,1.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8CF09").s().p("AgGA8IgOgEIgLgGIgJgIQgIgIgEgMQgFgLAAgLQAAgMAFgLQAEgMAIgIQAIgIALgFIAMgEIAMgBQANAAAKAFQAKADAIAIQAHAIADAKQAEALAAANIgBAKIhJAAQABAFADAEQACAEAEADQAGAFAKAAQAIAAAJgDQAHgDAIgGIAPAcIgLAIIgMAFQgOAEgNAAQgHAAgGgBgAASgOQAAgIgEgFQgEgEgIgBQgGAAgFAGQgEAFgCAHIAhAAIAAAAg");
	this.shape_6.setTransform(53.1,1.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F8CF09").s().p("AgeBOQgJgEgHgIQgIgJgDgLQgEgLAAgOQAAgOAEgKQAEgLAHgIQAHgIAKgFQAKgEAMAAQAHAAAHACQAKACAFAGIAAAAIAAgGIAAgvIAoAAIAACiIglAAIAAgIIAAgGQgGAIgJAFQgJAEgJAAQgMAAgKgFgAgHgEQgEACgDACIgFAJQgCAFAAAHQAAAGACAGQABAFADAEQADAEAFACQAEACADAAQAFAAAEgCQAEgBADgEQAEgEABgFQACgGAAgHQAAgGgBgEQgCgGgCgEQgDgCgFgCQgEgCgGAAQgDAAgEABg");
	this.shape_7.setTransform(39.1,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F8CF09").s().p("AAABRQgHgCgFgEQgHgFgDgJQgEgJAAgOIAAh3IAmAAIAABxQAAAJACADQACADAHAAIAEAAIAAAjIgLAAIgQgBg");
	this.shape_8.setTransform(28.8,-0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F8CF09").s().p("AgZA5QgMgEgJgJIgIgJIgGgKIgEgMQgCgGAAgHQAAgFACgGIAEgNQADgIALgMQAJgIAMgEQAIgDARgCQAJABARAEQAMAEAJAIQALAMAEAIQACAGABAHQACAGAAAFQAAAHgCAGIgDAMIgHAKIgIAJQgJAJgMAEQgNAEgNAAQgMAAgNgEgAgJgaQgFACgDAFQgEADgCAGQgCAFAAAFQAAAGACAFQACAGAEADQADAEAFACQAFACAEAAQAFAAAFgCQAFgCAEgEQADgDACgGQACgFAAgGQAAgFgCgFQgCgGgDgDQgEgFgFgCQgFgBgFAAQgEAAgFABg");
	this.shape_9.setTransform(17.3,1.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F8CF09").s().p("AATBSIAAhGQAAgIgEgEQgDgBgGAAQgGAAgEABQgEABgEAFQgCAEgCAGQgCAGAAAGIAAA2IgoAAIAAijIAoAAIAAA0IgBAKIABAAQAFgIAKgFQAHgFANAAQAIAAAIACQAIACAGAFQAFAGAEAIQACAJAAAKIAABNg");
	this.shape_10.setTransform(2.9,-0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F8CF09").s().p("AATA8IAAhEQAAgIgEgEQgDgDgGAAQgGAAgDACQgGADgCAFQgEADgCAHQgBADAAAGIAAA2IgnAAIAAh1IAlAAIAAALIAAAHIAAAAQAFgJAIgFIAJgEQAHgCAHAAQAKAAAHACQAIADAGAFQAFAFAEAIQADAJAAAMIAABLg");
	this.shape_11.setTransform(-17.2,1.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F8CF09").s().p("AgGA8IgOgEIgLgGIgJgIQgIgIgEgMQgFgLAAgLQAAgMAFgLQAEgMAIgIQAIgIALgFIAMgEIAMgBQANAAAKAFQAKADAIAIQAHAIADAKQAEALAAANIgBAKIhJAAQABAFADAEQACAEAEADQAGAFAKAAQAIAAAJgDQAHgDAIgGIAPAcIgLAIIgMAFQgOAEgNAAQgHAAgGgBgAASgOQAAgIgEgFQgEgEgIgBQgGAAgFAGQgEAFgCAHIAhAAIAAAAg");
	this.shape_12.setTransform(-31,1.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F8CF09").s().p("AAPBSIgXguIgMAAIAAAuIgoAAIAAijIAoAAIAABTIALAAIAWglIArAAIgjA0IAAABIAoBAg");
	this.shape_13.setTransform(-43.6,-0.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F8CF09").s().p("AgZA5QgMgEgJgJIgIgJIgGgKIgEgMQgCgGAAgHQAAgFACgGIAEgNQADgIALgMQAJgIAMgEQAIgDARgCQAJABARAEQAMAEAJAIQALAMAEAIQACAGABAHQACAGAAAFQAAAHgCAGIgDAMIgHAKIgIAJQgJAJgMAEQgNAEgNAAQgMAAgNgEgAgJgaQgFACgDAFQgEADgCAGQgCAFAAAFQAAAGACAFQACAGAEADQADAEAFACQAFACAEAAQAFAAAFgCQAFgCAEgEQADgDACgGQACgFAAgGQAAgFgCgFQgCgGgDgDQgEgFgFgCQgFgBgFAAQgEAAgFABg");
	this.shape_14.setTransform(-58.4,1.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F8CF09").s().p("AgTBSIAAiAIgxAAIAAgjICJAAIAAAjIgxAAIAACAg");
	this.shape_15.setTransform(-73,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.3,-15.8,218.5,31.6);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8CF09").s().p("AghBLQgPgGgMgLIgLgLIgIgOQgEgIgBgIQgCgIAAgJQAAgHACgIQABgJAEgHQAEgKAPgQQALgLAQgFQALgEAWgCQAMAAAWAGQAQAFAMALQAOAQAEAKQAEAHABAJQACAIAAAHQAAAJgCAIQgBAIgEAIIgIAOIgKALQgMALgQAGQgQAFgSAAQgRAAgQgFgAgMghQgGACgFAFQgFAFgDAHQgDAHAAAHQAAAIADAIQADAGAFAFQAFAFAGADQAGACAGAAQAHAAAGgCQAGgDAFgFQAFgFADgGQADgIAAgIQAAgHgDgHQgDgHgFgFQgFgFgGgCQgGgDgHAAQgGAAgGADg");
	this.shape.setTransform(344.5,-20.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8CF09").s().p("AgIBPIgRgFIgPgIIgMgKQgLgLgGgPQgGgOAAgQQAAgOAGgPQAGgOALgMIAMgKIAPgIIARgFQAIgBAKAAQARAAAQAFIAPAHIANALIgWAjQgHgHgJgEQgKgEgKAAQgJAAgFADQgHADgFAFQgEAGgDAGQgCAHAAAGQAAAGACAGQADAHAFAGQAFAGAHADQAFADAKAAQAKAAAMgGQALgEAJgIIATAkQgGAGgHAEQgIAFgIADIgSAGIgTABQgKAAgIgBg");
	this.shape_1.setTransform(326.8,-20.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8CF09").s().p("AgZBrIAAiZIAzAAIAACZgAgYhBIAAgpIAxAAIAAApg");
	this.shape_2.setTransform(314,-23.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8CF09").s().p("AguAWIAAgrIBdAAIAAArg");
	this.shape_3.setTransform(303.2,-21.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8CF09").s().p("AgJBPIgRgFQgIgEgHgEIgLgLQgLgLgGgPQgFgOgBgPQABgQAFgOQAGgPAKgLQALgLAOgGIAQgFIAQgBQARAAAOAFQANAGAJAKQAJAKAFAOQAEANAAAQIgBAPIhfAAQACAGADAGQADAFAFADQAIAHANAAQAKAAAMgEQAKgEALgHIASAkQgFAFgJAEIgQAIQgRAFgSAAQgJAAgJgBgAAYgSQAAgKgFgGQgHgHgJAAQgJAAgGAHQgGAGgCAKIAsAAIAAAAg");
	this.shape_4.setTransform(288.2,-20.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8CF09").s().p("AgzBOIAAiZIAyAAIAAAaIgBAKIABAAQABgHAEgIQAFgGAGgGQAHgGAHgCQAJgDAIAAIAGABIAAAzIgKgCQgLABgJADQgIADgFAGQgFAGgDAIQgBAIAAAKIAAA8g");
	this.shape_5.setTransform(274,-20.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8CF09").s().p("AhQBsIAAjUIAvAAIAAAIIgBAKIABAAQAIgLAMgFQAMgGANAAQAPAAANAHQANAFAJALQAJAKAFAQQAFAPAAARQAAATgFANQgFAOgLALQgJAKgNAHQgOAFgPAAQgJAAgKgDQgKgFgIgGIgBAAIABAMIAAA6gAgLg+QgGADgEAEQgEAFgCAHQgCAIgBAJQABAIABAGQACAHAEAEQAEAEAGADQAFADAHAAQAFAAAFgCQAGgDAEgEQAEgEADgGQACgHAAgJQAAgIgCgHQgDgHgDgGQgEgEgGgDQgGgDgFAAQgGAAgFACg");
	this.shape_6.setTransform(257.9,-17.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F8CF09").s().p("AgnBmQgNgFgJgLQgJgLgFgPQgFgPAAgRQAAgTAFgNQAFgPAKgKQAJgLANgGQANgFAQAAQAKAAAJACQAMADAHAHIABAAIgBgHIAAg+IA0AAIAADVIgwAAIAAgLIAAgIIgBAAQgHALgMAGQgLAGgMAAQgQgBgNgGgAgJgFQgGADgEADQgEAEgCAHQgDAHAAAJQAAAIACAHQADAHAEAGQAEAEAFADQAGACAFABQAGAAAFgCQAFgDAFgEQAEgFACgHQADgIAAgJQAAgIgCgGQgCgGgEgGQgEgDgFgDQgGgDgHAAQgFAAgFACg");
	this.shape_7.setTransform(230.6,-23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F8CF09").s().p("AgJBPIgRgFQgIgEgGgEIgMgLQgLgLgGgPQgFgOgBgPQABgQAFgOQAGgPAKgLQALgLAOgGIAQgFIAQgBQARAAAOAFQANAGAJAKQAJAKAFAOQAEANAAAQIgBAPIhfAAQACAGADAGQADAFAFADQAIAHANAAQAKAAAMgEQAKgEALgHIATAkQgGAFgJAEIgQAIQgRAFgSAAQgJAAgJgBgAAYgSQAAgKgFgGQgHgHgJAAQgJAAgGAHQgGAGgCAKIAsAAIAAAAg");
	this.shape_8.setTransform(213,-20.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F8CF09").s().p("AggBLQgVgKgJgHIAWgiQAJAHALAEQAMAEAJAAQAHAAADgCQADgCAAgEQABgFgMgFIgXgJQgQgHgIgGQgGgGgCgHQgEgHAAgJQAAgMAFgJQAFgJAJgHQAJgGAMgDQALgDAMAAQAPAAAOAEQAPAEALAJIgSAkQgHgFgLgEQgLgDgKAAQgGAAgEACQgCACAAADQAAAFAJAFIAZAJQAQAGAJAHQAFAGACAGQAEAIAAAJQAAAKgFAKQgEAJgIAHQgIAHgMADQgNAEgNAAQgQAAgQgFg");
	this.shape_9.setTransform(197.4,-20.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F8CF09").s().p("AghBLQgPgGgMgLIgLgLIgIgOQgEgIgBgIQgCgIAAgJQAAgHACgIQABgJAEgHQAEgKAPgQQALgLAQgFQALgEAWgCQAMAAAWAGQAQAFAMALQAOAQAEAKQAEAHABAJQACAIAAAHQAAAJgCAIQgBAIgEAIIgIAOIgKALQgMALgQAGQgQAFgSAAQgRAAgQgFgAgMghQgGACgFAFQgFAFgDAHQgDAHAAAHQAAAIADAIQADAGAFAFQAFAFAGADQAGACAGAAQAHAAAGgCQAGgDAFgFQAFgFADgGQADgIAAgIQAAgHgDgHQgDgHgFgFQgFgFgGgCQgGgDgHAAQgGAAgGADg");
	this.shape_10.setTransform(180.8,-20.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F8CF09").s().p("AAABpQgJgBgHgHQgJgGgFgLQgFgMAAgTIAAicIAyAAIAACVQAAAMADAEQADAEAJAAIAGgBIAAAtIgQABQgMAAgIgCg");
	this.shape_11.setTransform(166.9,-23.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F8CF09").s().p("AgIBPIgRgFIgPgIIgMgKQgLgLgGgPQgGgOAAgQQAAgOAGgPQAGgOALgMIAMgKIAPgIIARgFQAIgBAKAAQARAAAQAFIAPAHIANALIgWAjQgHgHgJgEQgKgEgKAAQgJAAgFADQgHADgFAFQgEAGgDAGQgCAHAAAGQAAAGACAGQADAHAFAGQAFAGAHADQAFADAKAAQAKAAAMgGQALgEAJgIIATAkQgGAGgHAEQgIAFgIADIgSAGIgTABQgKAAgIgBg");
	this.shape_12.setTransform(153.5,-20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(134.7,-43,229.8,40);


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
	this.shape.graphics.f("#F8CF09").s().p("AgWBrIAAgtIAuAAIAAAtgAgUAoIgGiSIA0AAIgECSg");
	this.shape.setTransform(227.5,-38.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8CF09").s().p("AggBLQgWgKgIgHIAXgiQAIAHALAEQALAEAJAAQAIAAADgCQAEgCAAgEQAAgFgMgFIgWgJQgRgHgIgGQgGgGgDgHQgDgHAAgJQAAgMAFgJQAFgJAJgHQAIgGAMgDQAMgDAMAAQAPAAANAEQAPAEALAJIgRAkQgHgFgLgEQgLgDgKAAQgGAAgEACQgDACAAADQAAAFAKAFIAYAJQARAGAJAHQAFAGADAGQADAIAAAJQAAAKgEAKQgFAJgIAHQgJAHgLADQgMAEgOAAQgQAAgQgFg");
	this.shape_1.setTransform(215.7,-35.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8CF09").s().p("AgzBOIAAiYIAxAAIAAAaIAAAJIAAAAQACgHAEgIQAEgGAHgGQAHgFAIgDQAHgDAJAAIAGABIAAAyIgLgBQgLAAgIAEQgHADgFAGQgGAHgCAHQgCAHAAALIAAA8g");
	this.shape_2.setTransform(203,-35.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8CF09").s().p("AgJBPIgRgFQgIgEgHgEIgLgLQgLgLgGgPQgGgOAAgPQAAgQAGgOQAGgPAKgLQALgLAPgGIAPgFIAQgBQARAAAOAFQANAGAJAKQAJAKAFAOQAEANAAAQIgBAPIhfAAQACAGADAGQADAFAFADQAIAHANAAQALAAALgEQAJgEAMgHIASAkQgFAFgIAEIgRAIQgSAFgRAAQgJAAgJgBgAAYgSQAAgKgFgGQgHgHgJAAQgJAAgGAHQgGAGgCAKIAsAAIAAAAg");
	this.shape_3.setTransform(187.5,-35.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8CF09").s().p("AhOBhIARgmQAIAGAIAAQAHAAAGgDQAIgEAEgJIACgHIhBiVIA7AAIAWBHQACAIACAQIABAAIAFgXIAThIIA5AAIg/CpQgFAMgHAKQgHAIgHAGQgIAFgKADQgJACgKAAQgUAAgQgLg");
	this.shape_4.setTransform(170.4,-32);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8CF09").s().p("AgoBNQgJgEgIgGQgGgHgEgIQgDgJAAgKQAAgHACgHQACgGAEgGQAIgHANgHQAMgFAQgDQANgCAPAAIAFAAIAAgDQAAgJgHgFQgGgDgIAAQgKAAgMAEQgKAEgKAGIgSgkQALgIARgGQALgEAZgCQAPAAANAEQANAEAJAIQAJAJAEALQAFAMABAPIAABdIgwAAIAAgJIAAgKIAAAAQgIAKgMAHQgKAFgOAAQgLAAgJgDgAgHAOQgFACgDAEQgEADAAAFQAAAGAEAEQADAEAIAAQAIAAAJgJQAHgJAAgKIAAgEIgFAAQgOAAgIAEg");
	this.shape_5.setTransform(153.5,-35.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8CF09").s().p("AAABpQgJgBgHgHQgJgGgFgLQgFgMAAgTIAAicIAyAAIAACVQAAALADAFQADAEAJAAIAGgBIAAAtIgQABQgMAAgIgCg");
	this.shape_6.setTransform(141.3,-38);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F8CF09").s().p("AhQBsIAAjUIAvAAIAAAIIgBAJIABAAQAIgJAMgGQAMgGANAAQAPAAANAHQANAFAJALQAJALAFAOQAFAPAAASQAAASgFAOQgFAOgLALQgJALgNAFQgOAGgPAAQgJAAgKgDQgKgFgIgHIgBAAIABAOIAAA5gAgLg+QgGADgEAEQgEAFgCAHQgCAHgBAKQABAIABAGQACAHAEAFQAEADAGADQAFADAHAAQAFAAAFgCQAGgDAEgEQAEgDADgHQACgHAAgJQAAgJgCgHQgDgHgDgFQgEgEgGgDQgGgDgFAAQgGAAgFACg");
	this.shape_7.setTransform(127,-32.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(109.1,-57.6,131,40);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8CF09").s().p("AAZBPIAAhZQAAgLgFgFQgEgEgIgBQgIAAgFAEQgHADgEAGQgEAGgCAHQgCAFAAAJIAABGIg0AAIAAiZIAyAAIAAANIgBAKIABAAQAHgLAKgHQAGgEAGgCQAIgCAKgBQAMAAAKAEQAKADAIAGQAHAHAEALQAFALAAARIAABig");
	this.shape.setTransform(-121.6,49.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8CF09").s().p("AgoBNQgKgEgGgGQgHgHgDgIQgFgJAAgKQABgHACgHQACgGAEgGQAHgHAOgHQAMgFAQgDQANgCAPAAIAEAAIAAgDQAAgJgGgFQgGgDgIAAQgKAAgMAEQgKAEgKAGIgSgkQALgIARgGQAMgEAYgCQAPAAANAEQANAEAJAIQAJAJAFALQAEAMAAAPIAABdIgvAAIAAgJIAAgKIAAAAQgHAKgNAHQgLAFgNAAQgLAAgJgDgAgHAOQgFACgEAEQgDADAAAFQAAAGADAEQAFAEAHAAQAIAAAJgJQAHgJAAgKIAAgEIgFAAQgOAAgIAEg");
	this.shape_1.setTransform(-139.7,49.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8CF09").s().p("AAZBrIAAhbQAAgKgFgFQgEgDgIAAQgIAAgFACQgGACgFAGQgEAFgCAIQgCAHAAAJIAABGIg0AAIAAjVIA0AAIAABEIgBANIABAAQAHgLAMgHQALgGAPAAQAMAAAKADQAKADAIAGQAHAHAEALQAFAMAAAOIAABkg");
	this.shape_2.setTransform(-156.9,46.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8CF09").s().p("AgFBYQgMgGgHgLQgEgGgCgIQgCgIAAgJIAAg1IgUAAIAAgoIAWAAIAAgsIAwAAIAAAsIAgAAIAAAoIggAAIAAAuQAAAGADAEQADAEAEACQAHAEALAAIAHgBIAAAtIgPABQgegBgNgJg");
	this.shape_3.setTransform(-172.7,47.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8CF09").s().p("AgJBPIgRgFQgIgEgHgEIgLgLQgLgLgGgPQgFgOgBgPQABgQAFgOQAGgPAKgLQALgLAOgGIAQgFIAQgBQARAAAOAFQANAGAJAKQAJAKAFAOQAEANAAAQIgBAPIhfAAQACAGADAGQADAFAFADQAIAHANAAQAKAAAMgEQAKgEALgHIASAkQgFAFgJAEIgQAIQgRAFgSAAQgJAAgJgBgAAYgSQAAgKgFgGQgHgHgJAAQgJAAgGAHQgGAGgCAKIAsAAIAAAAg");
	this.shape_4.setTransform(-194.7,49.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8CF09").s().p("AgzBOIAAiZIAyAAIAAAaIgBAKIABAAQABgHAEgIQAFgGAGgGQAHgGAHgCQAJgDAIAAIAGABIAAAzIgKgCQgLABgJADQgIADgFAGQgFAGgDAIQgBAIAAAKIAAA8g");
	this.shape_5.setTransform(-208.9,49.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8CF09").s().p("AghBLQgPgGgMgLIgLgLIgIgOQgEgIgBgIQgCgIAAgJQAAgHACgIQABgJAEgHQAEgKAPgQQALgLAQgFQALgEAWgCQAMAAAWAGQAQAFAMALQAOAQAEAKQAEAHABAJQACAIAAAHQAAAJgCAIQgBAIgEAIIgIAOIgKALQgMALgQAGQgQAFgSAAQgRAAgQgFgAgMghQgGACgFAFQgFAFgDAHQgDAHAAAHQAAAIADAIQADAGAFAFQAFAFAGADQAGACAGAAQAHAAAGgCQAGgDAFgFQAFgFADgGQADgIAAgIQAAgHgDgHQgDgHgFgFQgFgFgGgCQgGgDgHAAQgGAAgGADg");
	this.shape_6.setTransform(-225.5,49.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F8CF09").s().p("ABDBPIAAhaQAAgKgCgEQgDgGgHAAQgIABgGAEQgGADgDAHQgDAFgCAJIgBAPIAABCIgyAAIAAhaQgBgKgCgEQgCgGgIAAQgIABgGAEQgFAEgEAGQgDAHgCAIIgBAOIAABCIg0AAIAAiZIAyAAIAAANIgBAKIABAAQAHgKAKgIQAFgEAHgCQAIgCAIgBQAPABAKAGIAJAIIAIALIABAAQAGgKAMgIQAHgDAIgDQAHgCAJAAQALAAAJAEQAJACAGAIQAIAGADAMQAEALAAAQIAABig");
	this.shape_7.setTransform(-248.7,49.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-270.3,26.8,166,40);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8CF09").s().p("AhOBhIARgmQAIAGAIAAQAHAAAGgDQAIgEAEgJIACgHIhBiVIA7AAIAWBHQACAIACAQIABAAIAFgXIAThIIA5AAIg/CpQgFAMgHAKQgHAIgHAGQgIAFgKADQgJACgKAAQgUAAgQgLg");
	this.shape.setTransform(387.8,-26.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8CF09").s().p("AgzBOIAAiYIAxAAIAAAaIAAAJIAAAAQACgHAEgIQAFgGAGgGQAHgFAIgDQAHgDAJAAIAGABIAAAyIgLgBQgKAAgJADQgIAEgEAGQgGAGgCAIQgCAHAAALIAAA8g");
	this.shape_1.setTransform(373.9,-29.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8CF09").s().p("AgJBPIgRgFQgIgEgHgEIgLgLQgLgLgGgPQgFgOgBgPQABgQAFgOQAGgPAKgLQALgLAOgGIAQgFIAQgBQARAAAOAFQANAGAJAKQAJAKAFAOQAEANAAAQIgBAPIhfAAQACAGADAGQADAFAFADQAIAHANAAQAKAAAMgEQAKgEALgHIATAkQgGAFgJAEIgQAIQgRAFgSAAQgJAAgJgBgAAYgSQAAgKgFgGQgHgHgJAAQgJAAgGAHQgGAGgCAKIAsAAIAAAAg");
	this.shape_2.setTransform(358.4,-29.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8CF09").s().p("AgFBYQgMgGgHgLQgEgGgCgIQgCgIAAgJIAAg1IgUAAIAAgoIAWAAIAAgsIAwAAIAAAsIAgAAIAAAoIggAAIAAAuQAAAGADAEQADAEAEACQAHAEALAAIAHgBIAAAtIgPABQgegBgNgJg");
	this.shape_3.setTransform(343.6,-31.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8CF09").s().p("AgFBYQgMgGgHgLQgEgGgCgIQgCgIAAgJIAAg1IgUAAIAAgoIAWAAIAAgsIAwAAIAAAsIAgAAIAAAoIggAAIAAAuQAAAGADAEQADAEAEACQAHAEALAAIAHgBIAAAtIgPABQgegBgNgJg");
	this.shape_4.setTransform(331.3,-31.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8CF09").s().p("AghBLQgPgGgMgLIgLgLIgIgOQgEgIgBgIQgCgIAAgJQAAgHACgIQABgJAEgHQAEgKAPgQQALgLAQgFQALgEAWgCQAMAAAWAGQAQAFAMALQAOAQAEAKQAEAHABAJQACAIAAAHQAAAJgCAIQgBAIgEAIIgIAOIgKALQgMALgQAGQgQAFgSAAQgRAAgQgFgAgMghQgGACgFAFQgFAFgDAHQgDAHAAAHQAAAIADAIQADAGAFAFQAFAFAGADQAGACAGAAQAHAAAGgCQAGgDAFgFQAFgFADgGQADgIAAgIQAAgHgDgHQgDgHgFgFQgFgFgGgCQgGgDgHAAQgGAAgGADg");
	this.shape_5.setTransform(315.7,-29.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8CF09").s().p("AAABqQgJgDgHgGQgJgGgFgLQgFgNAAgSIAAicIAyAAIAACVQAAALADAFQADAEAJAAIAGgBIAAAtIgQABQgMAAgIgBg");
	this.shape_6.setTransform(301.7,-32.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F8CF09").s().p("AAZBOIAAhYQAAgLgFgEQgEgGgIAAQgIABgFADQgHADgEAGQgEAFgCAIQgCAFAAAJIAABFIg0AAIAAiYIAyAAIAAAOIgBAJIABAAQAHgLAKgHQAGgEAGgCQAIgDAKABQAMAAAKACQAKADAIAHQAHAHAEALQAFAMAAAPIAABig");
	this.shape_7.setTransform(279.6,-30);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F8CF09").s().p("AgZBrIAAiZIAzAAIAACZgAgYhBIAAgpIAxAAIAAApg");
	this.shape_8.setTransform(265.9,-32.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F8CF09").s().p("AgpBNQgIgEgIgGQgGgHgEgIQgDgJAAgKQgBgHADgHQACgGAEgGQAIgHANgHQAMgFAQgDQANgCAPAAIAEAAIAAgDQABgJgIgFQgFgDgHAAQgLAAgMAEQgKAEgKAGIgSgkQAKgIASgGQALgEAYgCQAQAAANAEQANAEAJAIQAJAJAEALQAGAMAAAPIAABdIgwAAIAAgJIABgKIgBAAQgHAKgNAHQgKAFgOAAQgLAAgKgDgAgHAOQgGACgCAEQgEADAAAFQAAAGAEAEQAEAEAGAAQAKAAAHgJQAIgJAAgKIAAgEIgFAAQgOAAgIAEg");
	this.shape_9.setTransform(252.8,-29.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F8CF09").s().p("AAZBrIAAhbQAAgKgFgFQgEgDgIAAQgIAAgFACQgGACgFAGQgEAFgCAIQgCAHAAAJIAABGIg0AAIAAjVIA0AAIAABEIgBANIABAAQAHgLAMgHQALgGAPAAQAMAAAKADQAKADAIAGQAHAHAEALQAFAMAAAOIAABkg");
	this.shape_10.setTransform(235.7,-32.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F8CF09").s().p("AgIBPIgRgFIgPgIIgMgKQgLgLgGgPQgGgOAAgQQAAgOAGgPQAGgOALgMIAMgKIAPgIIARgFQAIgBAKAAQARAAAQAFIAPAHIANALIgWAjQgHgHgJgEQgKgEgKAAQgJAAgFADQgHADgFAFQgEAGgDAGQgCAHAAAGQAAAGACAGQADAHAFAGQAFAGAHADQAFADAKAAQAKAAAMgGQALgEAJgIIATAkQgGAGgHAEQgIAFgIADIgSAGIgTABQgKAAgIgBg");
	this.shape_11.setTransform(218.1,-29.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F8CF09").s().p("AAUBrIgeg8IgQAAIAAA8Ig0AAIAAjVIA0AAIAABtIAOAAIAdgxIA4AAIgtBFIAAAAIAzBUg");
	this.shape_12.setTransform(201.7,-32.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F8CF09").s().p("AgIBPIgRgFIgPgIIgMgKQgLgLgGgPQgGgOAAgQQAAgOAGgPQAGgOALgMIAMgKIAPgIIARgFQAIgBAKAAQARAAAQAFIAPAHIANALIgWAjQgHgHgJgEQgKgEgKAAQgJAAgFADQgHADgFAFQgEAGgDAGQgCAHAAAGQAAAGACAGQADAHAFAGQAFAGAHADQAFADAKAAQAKAAAMgGQALgEAJgIIATAkQgGAGgHAEQgIAFgIADIgSAGIgTABQgKAAgIgBg");
	this.shape_13.setTransform(183.9,-29.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F8CF09").s().p("AghBLQgPgGgMgLIgLgLIgIgOQgEgIgBgIQgCgIAAgJQAAgHACgIQABgJAEgHQAEgKAPgQQALgLAQgFQALgEAWgCQAMAAAWAGQAQAFAMALQAOAQAEAKQAEAHABAJQACAIAAAHQAAAJgCAIQgBAIgEAIIgIAOIgKALQgMALgQAGQgQAFgSAAQgRAAgQgFgAgMghQgGACgFAFQgFAFgDAHQgDAHAAAHQAAAIADAIQADAGAFAFQAFAFAGADQAGACAGAAQAHAAAGgCQAGgDAFgFQAFgFADgGQADgIAAgIQAAgHgDgHQgDgHgFgFQgFgFgGgCQgGgDgHAAQgGAAgGADg");
	this.shape_14.setTransform(165.8,-29.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F8CF09").s().p("AAABqQgJgDgHgGQgJgGgFgLQgFgNAAgSIAAicIAyAAIAACVQAAALADAFQADAEAJAAIAGgBIAAAtIgQABQgMAAgIgBg");
	this.shape_15.setTransform(151.8,-32.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F8CF09").s().p("AgMBoQgMgEgIgKIgBAAIAAAJIAAAGIgvAAIAAjVIA0AAIAAA8IgBANIABAAQAHgHALgEQAKgFAMAAQAPAAANAGQANAFAJAMQAJAKAFAPQAFANAAASQAAASgFAPQgGAPgJALQgKAKgNAGQgOAGgPgBQgLABgKgFgAgLgFQgFACgEADQgFAFgCAHQgDAHABAKQgBAHACAGQACAHAEAFQADAFAHADQAFADAHABQAEgBAGgCQAFgCAFgFQAEgFACgHQADgGAAgJQAAgJgDgHQgBgHgEgFQgFgDgFgCQgGgEgFAAQgFABgGACg");
	this.shape_16.setTransform(137.5,-32.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(125.6,-52.3,276.3,40);


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
	this.shape.graphics.f("#F8CF09").s().p("AAABqQgJgDgHgFQgJgHgFgLQgFgNAAgSIAAibIAyAAIAACUQAAAMADADQADAFAJAAIAGAAIAAAtIgQABQgMAAgIgCg");
	this.shape.setTransform(-130.3,32.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8CF09").s().p("AgpBNQgJgEgHgGQgGgHgEgIQgDgJAAgKQAAgHACgHQACgGAEgGQAIgHANgHQAMgFAQgDQANgCAPAAIAFAAIAAgDQAAgJgIgFQgFgDgIAAQgKAAgMAEQgKAEgKAGIgSgkQALgIARgGQALgEAYgCQAQAAANAEQANAEAJAIQAJAJAEALQAFAMABAPIAABdIgwAAIAAgJIAAgKIAAAAQgIAKgMAHQgKAFgOAAQgLAAgKgDgAgHAOQgFACgDAEQgEADAAAFQAAAGAEAEQADAEAHAAQAKAAAHgJQAIgJAAgKIAAgEIgFAAQgOAAgIAEg");
	this.shape_1.setTransform(-144.3,35.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8CF09").s().p("AgJBPIgRgFQgIgEgGgEIgNgLQgKgLgGgPQgFgOgBgPQABgQAFgOQAGgPAKgLQALgLAOgGIAQgFIAQgBQARAAANAFQAOAGAJAKQAJAKAEAOQAGANAAAQIgCAPIhfAAQACAGADAGQADAFAFADQAIAHANAAQAKAAAMgEQAKgEALgHIATAkQgHAFgIAEIgQAIQgRAFgTAAQgIAAgJgBgAAYgSQAAgKgFgGQgHgHgJAAQgIAAgHAHQgGAGgCAKIAsAAIAAAAg");
	this.shape_2.setTransform(-160.7,35.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8CF09").s().p("AAcBrIgkhJIgZAAIAABJIg0AAIAAjVIBLAAIAXABIAQAEQAJAEAIAGQAHAGAFAHQAFAIADAKQADAKAAAMQAAAIgCAJQgCAJgEAIQgEAGgGAGQgHAGgHAEIAAABIAIANIApBLgAghgJIAXAAQALAAAHgGQAHgHAAgNQAAgJgCgFQgDgGgHgDQgFgDgNAAIgSAAg");
	this.shape_3.setTransform(-177.9,32.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206.4,12.7,98,40);


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

	// Layer 2
	this.instance = new lib.Symbol31();
	this.instance.setTransform(-9.6,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(5).to({_off:false,x:60.4,alpha:0},0).to({x:-19.6,alpha:1},9,cjs.Ease.get(1)).to({x:-9.6},4).wait(10).to({x:-169.6,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(6));

	// Layer 1
	this.instance_1 = new lib.Symbol30();
	this.instance_1.setTransform(0,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:70,alpha:0},1).to({x:-10,alpha:1},9,cjs.Ease.get(1)).to({x:0},4).wait(10).to({x:-180,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.3,-40.8,222.5,81.7);


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
p.nominalBounds = new cjs.Rectangle(-153.4,-48.7,517.4,49.6);


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
p.nominalBounds = new cjs.Rectangle(-204.4,-31.4,607.8,40.6);


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
	this.instance.setTransform(-233.6,6.6,0.673,0.674,0,0,0,-1.8,-3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(9).to({_off:false,regX:-1.9,regY:-3.7,scaleX:0.08,scaleY:0.08,x:7.4,y:18.3},0).to({regY:-3.6,scaleX:1.09,scaleY:1.09,x:116.8,y:8.4},9,cjs.Ease.get(1)).to({scaleX:1.02,scaleY:1.02,x:110.3,y:9.3},4).wait(16).to({regX:-1.8,scaleX:0.67,scaleY:0.67,x:-233.6,y:6.6},10,cjs.Ease.get(1)).wait(1));

	// Layer 7
	this.instance_1 = new lib.Symbol7();
	this.instance_1.setTransform(-252.4,-4.6,0.673,0.674,0,0,0,-3.6,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(6).to({_off:false,regX:-3.8,scaleX:0.08,scaleY:0.08,x:5.1,y:17},0).to({regX:-3.7,scaleX:1.09,scaleY:1.09,x:86.4,y:-9.7},9,cjs.Ease.get(1)).to({regX:-3.6,scaleX:1.02,scaleY:1.02,x:81.7,y:-7.7},4).wait(19).to({scaleX:0.67,scaleY:0.67,x:-252.4,y:-4.6},10,cjs.Ease.get(1)).wait(1));

	// Layer 6
	this.instance_2 = new lib.Symbol6();
	this.instance_2.setTransform(-265.1,-0.3,0.673,0.674,0,0,0,-3.9,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(3).to({_off:false,regX:-3.8,scaleX:0.08,scaleY:0.08,x:3.6,y:17.5},0).to({regX:-3.7,scaleX:1.09,scaleY:1.09,x:66.1,y:-2.8},9,cjs.Ease.get(1)).to({regX:-3.6,scaleX:1.02,scaleY:1.02,x:62.8,y:-1.2},4).wait(22).to({regX:-3.9,scaleX:0.67,scaleY:0.67,x:-265.1,y:-0.3},10,cjs.Ease.get(1)).wait(1));

	// Layer 5
	this.instance_3 = new lib.Symbol5();
	this.instance_3.setTransform(-271.8,-5.5,0.673,0.674,0,0,0,-3.4,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:-3.1,scaleX:0.08,scaleY:0.08,x:2.8,y:16.9},1,cjs.Ease.get(-1)).to({scaleX:1.09,scaleY:1.09,x:55.4,y:-11.2},9,cjs.Ease.get(1)).to({scaleX:1.02,scaleY:1.02,x:52.6,y:-9.1},4).wait(25).to({regX:-3.4,scaleX:0.67,scaleY:0.67,x:-271.8,y:-5.5},10,cjs.Ease.get(1)).wait(1));

	// Layer 4
	this.instance_4 = new lib.Symbol4();
	this.instance_4.setTransform(-307.4,1,0.673,0.674,0,0,0,-1.7,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:-1.2,scaleX:0.08,scaleY:0.08,x:-1.4,y:17.7},1,cjs.Ease.get(-1)).to({regX:-1.3,scaleX:1.09,scaleY:1.09,x:-2.3,y:-0.6},9,cjs.Ease.get(1)).to({scaleX:1.02,scaleY:1.02,x:-1.6,y:0.8},4).wait(25).to({regX:-1.7,scaleX:0.67,scaleY:0.67,x:-307.4,y:1},10,cjs.Ease.get(1)).wait(1));

	// Layer 3
	this.instance_5 = new lib.Symbol3();
	this.instance_5.setTransform(-333.1,1,0.673,0.674,0,0,0,-1.7,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},1).wait(3).to({_off:false,regX:-1.2,scaleX:0.08,scaleY:0.08,x:-4.4,y:17.7},0).to({regX:-1.3,scaleX:1.09,scaleY:1.09,x:-43.7,y:-0.6},9,cjs.Ease.get(1)).to({regY:-2.4,scaleX:1.02,scaleY:1.02,x:-40.5,y:0.9},4).wait(22).to({regX:-1.7,regY:-2.5,scaleX:0.67,scaleY:0.67,x:-333.1,y:1},10,cjs.Ease.get(1)).wait(1));

	// Layer 2
	this.instance_6 = new lib.Symbol2();
	this.instance_6.setTransform(-356.7,1,0.673,0.674,0,0,0,-2.3,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},1).wait(6).to({_off:false,regX:-1.9,scaleX:0.08,scaleY:0.08,x:-7.3,y:17.7},0).to({scaleX:1.09,scaleY:1.09,x:-81.9,y:-0.6},9,cjs.Ease.get(1)).to({regY:-2.4,scaleX:1.02,scaleY:1.02,x:-76.3,y:0.9},4).wait(19).to({regX:-2.3,regY:-2.5,scaleX:0.67,scaleY:0.67,x:-356.7,y:1},10,cjs.Ease.get(1)).wait(1));

	// Layer 1
	this.instance_7 = new lib.Symbol1();
	this.instance_7.setTransform(-374.3,-5.3,0.673,0.674,0,0,0,-1.6,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},1).wait(9).to({_off:false,regX:-1.2,regY:-1.2,scaleX:0.08,scaleY:0.08,x:-9.4,y:17},0).to({regX:-1.3,regY:-1.3,scaleX:1.09,scaleY:1.09,x:-110.4,y:-10.8},9,cjs.Ease.get(1)).to({scaleX:1.02,scaleY:1.02,x:-103.1,y:-8.7},4).wait(16).to({regX:-1.6,regY:-1.4,scaleX:0.67,scaleY:0.67,x:-374.3,y:-5.3},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-389.5,-22.8,168.4,50);


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
p.nominalBounds = new cjs.Rectangle(-272.3,-31.9,506.9,70);


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
	this.frame_35 = function() {
		this.delay(4);
	}
	this.frame_39 = function() {
		this.txt1.play();
	}
	this.frame_49 = function() {
		this.txt2.play();
	}
	this.frame_60 = function() {
		this.delay(4);
	}
	this.frame_63 = function() {
		this.txt3.play();
	}
	this.frame_75 = function() {
		this.delay(4);
	}
	this.frame_79 = function() {
		this.txt4.play();
	}
	this.frame_111 = function() {
		this.delay(1);
	}
	this.frame_114 = function() {
		this.dolphin.mc.play();
	}
	this.frame_129 = function() {
		this.money.play();
	}
	this.frame_139 = function() {
		this.dolphin.mc.play();
	}
	this.frame_154 = function() {
		this.money.play();
	}
	this.frame_164 = function() {
		this.dolphin.mc.play();
	}
	this.frame_179 = function() {
		this.money.play();
	}
	this.frame_189 = function() {
		this.dolphin.mc.play();
	}
	this.frame_204 = function() {
		this.money.play();
	}
	this.frame_214 = function() {
		this.dolphin.mc.play();
	}
	this.frame_229 = function() {
		this.money.play();
	}
	this.frame_240 = function() {
		this.dolphin.mc.play();
	}
	this.frame_267 = function() {
		this.delay(10);
	}
	this.frame_299 = function() {
		this.gotoAndPlay(10);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(20).call(this.frame_35).wait(4).call(this.frame_39).wait(10).call(this.frame_49).wait(11).call(this.frame_60).wait(3).call(this.frame_63).wait(12).call(this.frame_75).wait(4).call(this.frame_79).wait(32).call(this.frame_111).wait(3).call(this.frame_114).wait(15).call(this.frame_129).wait(10).call(this.frame_139).wait(15).call(this.frame_154).wait(10).call(this.frame_164).wait(15).call(this.frame_179).wait(10).call(this.frame_189).wait(15).call(this.frame_204).wait(10).call(this.frame_214).wait(15).call(this.frame_229).wait(11).call(this.frame_240).wait(27).call(this.frame_267).wait(32).call(this.frame_299).wait(2));

	// delayer
	this.delayer = new lib.delayer();
	this.delayer.setTransform(15,16,1,1,0,0,0,15,16);

	this.timeline.addTween(cjs.Tween.get(this.delayer).wait(301));

	// bg
	this.instance = new lib.bg_1();
	this.instance.setTransform(507.1,104.1,1,1,0,0,0,0.1,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(289).to({_off:false},0).to({_off:true},11).wait(1));

	// dolphin
	this.dolphin = new lib.dolphin_1();
	this.dolphin.setTransform(884.9,70.1,0.625,0.625,0,0,0,-24.2,0.1);

	this.dolphin_1 = new lib.dolphin2();
	this.dolphin_1.setTransform(884.9,70.1,0.625,0.625,0,0,0,-24.2,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.dolphin}]},109).to({state:[{t:this.dolphin_1}]},157).to({state:[]},34).wait(1));

	// butt
	this.butt = new lib.butt_1();
	this.butt.setTransform(750.2,90.2,0.782,0.783,0,0,0,0.2,0.2);
	this.butt._off = true;

	this.timeline.addTween(cjs.Tween.get(this.butt).wait(260).to({_off:false},0).to({_off:true},40).wait(1));

	// money
	this.money = new lib.money();
	this.money.setTransform(738.4,83.2,1.068,1.067,0,0,0,3.2,6.7);
	this.money._off = true;

	this.timeline.addTween(cjs.Tween.get(this.money).wait(125).to({_off:false},0).to({_off:true},175).wait(1));

	// txt5
	this.txt5 = new lib.txt5();
	this.txt5.setTransform(398.4,83.8,1.595,1.595,0,0,0,0.2,1.3);
	this.txt5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.txt5).wait(95).to({_off:false},0).to({_off:true},205).wait(1));

	// txt4
	this.txt4 = new lib.txt4();
	this.txt4.setTransform(433.2,92.9,1.21,1.21,0,0,0,0.2,1.3);
	this.txt4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.txt4).wait(74).to({_off:false},0).to({_off:true},226).wait(1));

	// txt3
	this.txt3 = new lib.txt3();
	this.txt3.setTransform(612.8,56.6,1.286,1.285,0,0,0,0.2,1.4);
	this.txt3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.txt3).wait(59).to({_off:false},0).to({_off:true},241).wait(1));

	// txt2
	this.txt2 = new lib.txt2();
	this.txt2.setTransform(439.4,89.5,0.896,0.896,0,0,0,0.3,1.2);
	this.txt2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.txt2).wait(34).to({_off:false},0).to({_off:true},266).wait(1));

	// txt1
	this.txt1 = new lib.txt1();
	this.txt1.setTransform(379.2,41.3,0.831,0.83,0,0,0,0.3,1.4);
	this.txt1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.txt1).wait(24).to({_off:false},0).to({_off:true},276).wait(1));

	// logo
	this.instance_1 = new lib.logo();
	this.instance_1.setTransform(502.5,-18.7,1.189,1.187,0,0,0,2.5,-66);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({_off:true},286).wait(1));

	// bg
	this.instance_2 = new lib.bg_1();
	this.instance_2.setTransform(507.1,104.1,1,1,0,0,0,0.1,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({_off:true},296).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:



(lib.trueflip_728x90 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(25));

	// main
	this.instance = new lib.main();
	this.instance.setTransform(-4,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_1.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(363,44,730,92);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;