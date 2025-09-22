import * as THREE from 'three';
import {OrbitControls} from "three/addons/controls/OrbitControls.js";

const canvas = document.getElementById('canvas1');

// Scene
const scene1 = new THREE.Scene();
scene1.background = new THREE.Color('#F0F0F0');

// Camera
const camera1 = new THREE.PerspectiveCamera(75, 400 / 200, 0.1, 1000);
camera1.position.z = 5;

// Object
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshLambertMaterial( { color: '#468585', emissive: '#468585'} );
const dodecahedron = new THREE.Mesh(geometry, material);

const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2);
const boxMaterial = new THREE.MeshStandardMaterial( { color: '#B4B4B3', emissive: '#B4B4B3' } );
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.y = -1.5;

scene1.add(dodecahedron);
scene1.add(box);

// Light
const light1 = new THREE.SpotLight(0x006769, 100);
light1.position.set(1, 1, 1);
scene1.add(light1);

// Renderer
const renderer1 = new THREE.WebGLRenderer({canvas: canvas1});
renderer1.setSize(600, 300);
renderer1.setPixelRatio(window.devicePixelRatio);


// Add orbit controls
const controls1 = new OrbitControls(camera1, renderer1.domElement)
controls1.enableDamping = true;
controls1.dampingFactor = 0.05;
controls1.enableZoom = true;
controls1.enablePan = true;         /*Pan makes possible to move objects with two fingers, or right-click in desktops*/

// Resize
/*
window.addEventListener('resize', () => {
    controls1.setSize(window.innerWidth, window.innerHeight);
    controls2.setSize(window.innerWidth, window.innerHeight);
    camera1.updateProjectionMatrix();
    camera2.updateProjectionMatrix();
    renderer1.setSize(window.innerWidth, window.innerHeight);
    renderer2.setSize(window.innerWidth, window.innerHeight);
})*/

// Scene2
const scene2 = new THREE.Scene();
scene2.background = new THREE.Color('#F0F0F0');

// Camera2
const camera2 = new THREE.PerspectiveCamera(40, 400 / 200, 0.1, 1000);
camera2.position.z = 5;
/*window.addEventListener('wheel', (event) => {
    if (event.deltaY < 0) {
        camera2.fov = Math.max(40, camera2.fov - 1); // zoom in
    } else {
        camera2.fov = Math.min(80, camera2.fov + 1); // zoom out
    }
    camera2.updateProjectionMatrix();
});*/

// Object - Doesn't need

// Loader
const loader = new THREE.TextureLoader();
const texture = loader.load("/public/Aldara_parks.jpg")

// Geometry
const domeGeometry = new THREE.SphereGeometry(500, 60, 60);
const domeMaterial = new THREE.MeshBasicMaterial({
    map: texture,
    side: THREE.BackSide
});
const dome = new THREE.Mesh(domeGeometry, domeMaterial);
scene2.add(dome);

// Light2
const light2 = new THREE.SpotLight(0x006769, 100);
light2.position.set(1, 1, 1);
scene2.add(light2);

// Renderer2
const renderer2 = new THREE.WebGLRenderer({canvas: canvas2});
renderer2.setSize(600, 400);
renderer2.setPixelRatio(window.devicePixelRatio);

// Add orbit controls2
const controls2 = new OrbitControls(camera2, renderer2.domElement);
controls2.rotateSpeed = 0.5;
controls2.enableDamping = true;
controls2.dampingFactor = 0.05;
controls2.enableZoom = true;
controls2.zoomSpeed = 5;
controls2.enablePan = false;

// Add animations
function animate() {
    requestAnimationFrame(animate);

    /*dodecahedron.rotation.x += 0.01;
    dodecahedron.rotation.y += 0.01;

    box.rotation.y += 0.005;*/

    controls1.update();
    controls2.update();

    renderer1.render(scene1, camera1);
    renderer2.render(scene2, camera2);
}

animate();
