import * as THREE from 'three';

export const points = [
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


// rgb btw 0 and 1
export const colors = new Float32Array([
  0, 0, 0.8, // strong blue
  0.2, 0.6, 1, // blue
  1, 0, 0.49, // strong pink
  1, 0.69, 0.74, // pink
  0.6, 0.22, 1.0, // purple
  0.6, 0.22, 1.0, // purple
  0, 0, 0.8, // strong blue
  0.6, 0.22, 1.0, // purple
  0.6, 0.22, 1.0, // purple
  1, 0.69, 0.74, // pink
  1, 0, 0.49, // strong pink
  0.2, 0.6, 1, // blue
  0, 0, 0.8, // strong blue
]);