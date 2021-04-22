import * as THREE from 'three';

const right = [
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
]


const rightColors = [
  0.2, 0.6, 1, // blue
  0.2, 0.6, 1, // blue
  0.2, 0.6, 1, // blue
  1, 0, 0.49, // strong pink
  1, 0, 0.49, // strong pink
  1, 0.69, 0.74, // pink
  1, 0, 0.49, // strong pink

  0.6, 0.22, 1.0, // purple
  1, 0.69, 0.74, // pink
  0.6, 0.22, 1.0, // purple
  0.6, 0.22, 1.0, // purple
  0.6, 0.22, 1.0, // purple

  0, 0, 0.8, // strong blue
  0, 0, 0.8, // strong blue
  0.6, 0.22, 1.0, // purple
  0, 0, 0.8, // strong blue
  0.2, 0.6, 1, // blue
  1, 0, 0.49, // strong pink
  0.2, 0.6, 1, // blue
]

const left = [
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
]

const leftColors = [
  0.2, 0.6, 1, // blue
  1, 0, 0.49, // strong pink
  1, 0, 0.49, // strong pink
  1, 0.69, 0.74, // pink
  1, 0, 0.49, // strong pink
  0.2, 0.6, 1, // blue
  0, 0, 0.8, // strong blue
  0.6, 0.22, 1.0, // purple
  1, 0, 0.49, // strong pink
  1, 0.69, 0.74, // pink
  0.6, 0.22, 1.0, // purple
  0.6, 0.22, 1.0, // purple
  0.6, 0.22, 1.0, // purple
  0.6, 0.22, 1.0, // purple
  0, 0, 0.8, // strong blue
]

export const points2 = [
  ...right,
  ...left
];

// rgb btw 0 and 1
export const colors2 = new Float32Array([
  ...rightColors,
  ...leftColors,
]);