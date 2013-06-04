
function Tile(scene) {
	this.scene = scene;
	Tile.side = 24;
	Tile.speed = 3.5;
	Tile.slow = 2;
	Tile.fast = 5;
	this.geometry = new THREE.CubeGeometry(Tile.side,Tile.side,Tile.side,1,1,1);
	//this.material = new THREE.MeshNormalMaterial();
	this.material = new THREE.MeshBasicMaterial({color:0x00BB00});
	this.mesh = new THREE.Mesh(this.geometry,this.material);
}

Tile.prototype.init = function(x, y, z){
	var random = Math.random();
	if ( random < 0.9 ){
		var yy = 19;
	}
	else{
		var yy = 45;
	}
	this.mesh.position.x = x || 0;
	this.mesh.position.y = yy || 0;
	this.mesh.position.z = z || 0;
	
	scene.add(this.mesh);
}

Tile.prototype.update = function(){
	this.mesh.position.x -= Tile.speed;
}


/*Entity.prototype.outsideScreen = function() {
    return (this.x > this.game.halfSurfaceWidth || this.x < -(this.game.halfSurfaceWidth) ||
        this.y > this.game.halfSurfaceHeight || this.y < -(this.game.halfSurfaceHeight));
}*/

