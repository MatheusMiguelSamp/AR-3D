import * as THREE from 'three';

// Cena
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 3;

// Objeto
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({ color: '#468585', emissive: '#468585'})  // se não colocar o emissive, a cor não terá efeito sobre a luz

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Luz
const light = new THREE.DirectionalLight(0x9CDBA6, 10); // cor, intensidade
light.position.set(1, 1, 1);
scene.add(light);

// Renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Animação
function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();
