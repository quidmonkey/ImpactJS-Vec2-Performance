ig.module(
    'plugins.vec2-google'
)
.requires(
    'impact.entity'
)
.defines(function(){'use strict;'
    
ig.Vec2g = function (x, y) {
    this.x = x;
    this.y = y;
};

ig.Vec2g.prototype.azimuth = function () {
    return Math.atan2(this.y, this.x);
};

ig.Vec2g.prototype.clone = function () {
    return new ig.Vec2g(this.x, this.y);
};

ig.Vec2g.prototype.distance = function (vec2) {
    var dx = this.x - vec2.x,
        dy = this.y - vec2.y;
    return Math.sqrt(dx * dx + dy * dy);
};

//subtract this vector from another vector
ig.Vec2g.prototype.difference = function (vec2) {
    this.x -= vec2.x;
    this.y -= vec2.y;
    return this;
};

//get dot product between this vector
//and passed in vector
ig.Vec2g.prototype.dot = function (vec2) {
    return this.x * vec2.x + this.y * vec2.y;
};

//compares a passed in vector to this vector
//to see if they are equal
ig.Vec2g.prototype.equals = function (vec2) {
    return !(this.x !== vec2.x || this.y !== vec2.y);
};

//invert this vector
ig.Vec2g.prototype.invert = function () {
    this.x = -this.x;
    this.y = -this.y;
    return this;
};

//get interpolated vector between this vector
//and passed in vector
ig.Vec2g.prototype.lerp = function (vec2, proportion) {
    return new ig.Vec2g(
        this.x + proportion * (vec2.x - this.x),
        this.y + proportion * (vec2.y - this.y)
    );
};

//get magnitude of this vector
ig.Vec2g.prototype.magnitude = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
};

//normalize this vector
ig.Vec2g.prototype.normalize = function () {
    return this.scale(1 / this.magnitude());
};

//get vector orthogonal to this vector
ig.Vec2g.prototype.orthogonal = function () {
    return new ig.Vec2g(-this.y, this.x);
};

//dot product of passed in vector
//and perpendicular of this vector
//this is the 2d equivalent of a 3d cross product
ig.Vec2g.prototype.perproduct = function (vec2) {
    return vec2.x * this.y - vec2.y * this.x;
};

//reflect this vector around the passed in vector
ig.Vec2g.prototype.reflect = function (vec2) {
    return this.sum(vec2.clone().normalize().orthogonal().scale(this.dot(vec2) * 2).inverse());
};

//rotate this vector
ig.Vec2g.prototype.rotate = function (angle) {
    var cos = Math.cos(angle),
        sin = Math.sin(angle),
        x = this.x,
        y = this.y;
    this.x = x * cos - y * sin;
    this.y = x * sin + y * cos;
    return this;
};

//rotate this vector around a specified point
ig.Vec2g.prototype.rotateAroundPoint = function (angle, point) {
    return this.difference(point).rotate(angle).sum(point);
};

//scale this vector by passed-in value
ig.Vec2g.prototype.scale = function (scalar) {
    this.x *= scalar;
    this.y *= scalar;
    return this;
};

//sum this vector with another vector
ig.Vec2g.prototype.sum = function (vec2) {
    this.x += vec2.x;
    this.y += vec2.y;
    return this;
};

ig.Vec2g.Zero = new ig.Vec2g(0, 0);
ig.Vec2g.One = new ig.Vec2g(1, 1);
ig.Vec2g.UnitX = new ig.Vec2g(1, 0);
ig.Vec2g.UnitY = new ig.Vec2g(0, 1);
ig.Vec2g.TileOrigin = ig.Vec2g.UnitX.clone().rotate(Math.PI / 4).invert();

//create a random unit vector
ig.Vec2g.random = function () {
    var theta = Math.random() * Math.PI * 2;
    return new ig.Vec2g(Math.cos(theta), Math.sin(theta));
};

});