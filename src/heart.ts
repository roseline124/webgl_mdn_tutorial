import * as THREE from 'three';

const scene = new THREE.Scene();

// PerspectiveCamera: FOV, 너비 높이 비율, near, far
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 500);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const points = [
  new THREE.Vector3(0, -20, 0),
  new THREE.Vector3(15, -5, 0),
  new THREE.Vector3(25, 8, 0),
  new THREE.Vector3(24, 18, 0),
  new THREE.Vector3(15, 28, 0),
  new THREE.Vector3(8, 27, 0),
  new THREE.Vector3(0, 20, 0),
  new THREE.Vector3(-8, 27, 0),
  new THREE.Vector3(-15, 28, 0),
  new THREE.Vector3(-24, 18, 0),
  new THREE.Vector3(-25, 8, 0),
  new THREE.Vector3(-15, -5, 0),
  new THREE.Vector3(0, -20, 0),
];

const geometry = new THREE.BufferGeometry().setFromPoints(points);
const material = new THREE.LineBasicMaterial({ color: 'red' });
const line = new THREE.Line(geometry, material);

const points2 = [
  new THREE.Vector3(0, -20, 0),
  new THREE.Vector3(0, -10, 10),
  new THREE.Vector3(15, -5, 0),
  new THREE.Vector3(18, 10, 10),
  new THREE.Vector3(25, 8, 0),
  new THREE.Vector3(24, 18, 0),
  new THREE.Vector3(18, 10, 10),
  new THREE.Vector3(10, 17, 10),
  new THREE.Vector3(24, 18, 0),
  new THREE.Vector3(15, 28, 0),
  new THREE.Vector3(10, 17, 10),
  new THREE.Vector3(8, 27, 0),
  new THREE.Vector3(0, 20, 0),
  new THREE.Vector3(0, 13, 7),
  new THREE.Vector3(10, 17, 10),
  new THREE.Vector3(0, 6, 10),
  new THREE.Vector3(0, -10, 10),
  new THREE.Vector3(18, 10, 10),
  new THREE.Vector3(0, -10, 10),
  new THREE.Vector3(-15, -5, 0),
  new THREE.Vector3(-18, 10, 10),
  new THREE.Vector3(-25, 8, 0),
  new THREE.Vector3(-24, 18, 0),
  new THREE.Vector3(-18, 10, 10),
  new THREE.Vector3(0, -10, 10),
  new THREE.Vector3(0, 6, 10),
  new THREE.Vector3(-10, 17, 10),
  new THREE.Vector3(-18, 10, 10),
  new THREE.Vector3(-24, 18, 0),
  new THREE.Vector3(-10, 17, 10),
  new THREE.Vector3(-15, 28, 0),
  new THREE.Vector3(-8, 27, 0),
  new THREE.Vector3(-10, 17, 10),
  new THREE.Vector3(0, 13, 7),
];
const geometryFront = new THREE.BufferGeometry().setFromPoints(points2);
const materialFront = new THREE.LineBasicMaterial({ color: 'yellow' });
const line2 = new THREE.Line(geometryFront, materialFront);

const points3 = [
  new THREE.Vector3(0, -20, 0),
  new THREE.Vector3(0, -10, -10),
  new THREE.Vector3(15, -5, 0),
  new THREE.Vector3(18, 10, -10),
  new THREE.Vector3(25, 8, 0),
  new THREE.Vector3(24, 18, 0),
  new THREE.Vector3(18, 10, -10),
  new THREE.Vector3(10, 17, -10),
  new THREE.Vector3(24, 18, 0),
  new THREE.Vector3(15, 28, 0),
  new THREE.Vector3(10, 17, -10),
  new THREE.Vector3(8, 27, 0),
  new THREE.Vector3(0, 20, 0),
  new THREE.Vector3(0, 13, -7),
  new THREE.Vector3(10, 17, -10),
  new THREE.Vector3(0, 6, -10),
  new THREE.Vector3(0, -10, -10),
  new THREE.Vector3(18, 10, -10),
  new THREE.Vector3(0, -10, -10),
  new THREE.Vector3(-15, -5, 0),
  new THREE.Vector3(-18, 10, -10),
  new THREE.Vector3(-25, 8, 0),
  new THREE.Vector3(-24, 18, 0),
  new THREE.Vector3(-18, 10, -10),
  new THREE.Vector3(0, -10, -10),
  new THREE.Vector3(0, 6, -10),
  new THREE.Vector3(-10, 17, -10),
  new THREE.Vector3(-18, 10, -10),
  new THREE.Vector3(-24, 18, 0),
  new THREE.Vector3(-10, 17, -10),
  new THREE.Vector3(-15, 28, 0),
  new THREE.Vector3(-8, 27, 0),
  new THREE.Vector3(-10, 17, -10),
  new THREE.Vector3(0, 13, -7),
];
const geometryBack = new THREE.BufferGeometry().setFromPoints(points3);
const materialBack = new THREE.LineBasicMaterial({ color: 'green' });
const line3 = new THREE.Line(geometryBack, materialBack);

scene.add(line);
scene.add(line2);
scene.add(line3);

camera.position.z = 100; // => camera.position.set(0, 0, 100);

const animate = function () {
  requestAnimationFrame(animate);

  line.rotation.y += 0.01;
  line.rotation.x += 0.01;
  line2.rotation.y += 0.01;
  line2.rotation.x += 0.01;
  line3.rotation.y += 0.01;
  line3.rotation.x += 0.01;

  renderer.render(scene, camera);
};

animate();