import * as THREE from 'three';

const scene = new THREE.Scene();

// PerspectiveCamera: FOV, 너비 높이 비율, near, far
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 500);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BufferGeometry();
// create line end points and add to geometry
const vertices = new Float32Array([
  0, 0, 0,
  50, 0, 0
]);
geometry.addAttribute('position', new THREE.BufferAttribute(vertices, 3));

// create colors of each end point (vertex) and add to geometry
const colors = new Float32Array([
  1.0, 0, 0.0,  // rgb(1,0,0) red (normalized)
  0.0, 1.0, 0.0   // green (normalized)
]);

geometry.addAttribute('color', new THREE.BufferAttribute(colors, 3));
// create material
const material = new THREE.LineBasicMaterial({
  vertexColors: THREE.VertexColors, // inform material that geometry 
  linewidth: 4 // works with safari

});
const line = new THREE.Line(geometry, material);
line.computeLineDistances();
scene.add(line);

camera.position.z = 100; // => camera.position.set(0, 0, 100);

renderer.render(scene, camera);
