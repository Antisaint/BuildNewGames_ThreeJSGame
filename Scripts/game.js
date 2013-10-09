var renderer, scene, camera, pointLight, spotLight;

function setup()
{
	
	
	createScene()
	draw();
}
 

function createScene()
{
// set the scene size
	var WIDTH = 640,
		HEIGHT = 360;

	var VIEW_ANGLE = 50,
		ASPECT = WIDTH / HEIGHT,
		NEAR = 0.1,
		FAR = 10000;
 
// create a WebGL renderer, camera
// and a scene
	var renderer = new THREE.WebGLRenderer();
 
// start the renderer
	renderer.setSize(WIDTH, HEIGHT);
 
// attach the render-supplied DOM element (the gameCanvas)
	var c = document.getElementById('gameCanvas');
	c.appendChild(renderer.domElement);
	
	camera = new THREE.PerspectiveCamera(
		VIEW_ANGLE,
		ASPECT,
		NEAR,
		FAR);
		

		
	 
	scene = new THREE.Scene();
	 
// add the camera to the scene
	scene.add(camera);	
	camera.position.z = 320;
	
// set up the sphere vars
// lower 'segment' and 'ring' values will increase performance
	var radius = 5,
	segments = 6,
	rings = 6;
 
// create the sphere's material
	var sphereMaterial =
	new THREE.MeshLambertMaterial(
	{
	color: 0xD43001
	});
 
// Create a ball with sphere geometry
	var ball = new THREE.Mesh(
    new THREE.SphereGeometry(radius,
    segments,
    rings),
    sphereMaterial);
 
// add the sphere to the scene
	scene.add(ball);

}

function draw()
{
 // draw THREE.JS scene
	renderer.render(scene, camera);
	requestAnimationFrame(draw);
}
