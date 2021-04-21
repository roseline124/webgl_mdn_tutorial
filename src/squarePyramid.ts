import * as THREE from 'three';

const scene = new THREE.Scene();

// PerspectiveCamera: FOV, 너비 높이 비율, near, far
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 500);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
document.body.appendChild(renderer.domElement);

const points = [
  new THREE.Vector3(- 10, 0, 10),
  new THREE.Vector3(0, 20, 0),
  new THREE.Vector3(10, 0, 10),
  new THREE.Vector3(-10, 0, 10),
  new THREE.Vector3(-10, 0, -10),
  new THREE.Vector3(0, 20, 0),
  new THREE.Vector3(-10, 0, -10),
  new THREE.Vector3(10, 0, -10),
  new THREE.Vector3(0, 20, 0),
  new THREE.Vector3(10, 0, -10),
  new THREE.Vector3(10, 0, 10),
];

const geometry = new THREE.BufferGeometry().setFromPoints(points);
const material = new THREE.LineBasicMaterial({ color: 'blue' });
const line = new THREE.Line(geometry, material);
scene.add(line);

camera.position.z = 100; // => camera.position.set(0, 0, 100);

const animate = function () {
  requestAnimationFrame(animate);

  line.rotation.y += 0.01;
  line.rotation.x += 0.01;

  renderer.render(scene, camera);
};

animate();