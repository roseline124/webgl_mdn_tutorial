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
  0, 0, 0.4,
  0, 0, 0.5,
  0, 0, 0.5,
  0.2, 0, 0.5,
  0.2, 0, 0.7,
  0.2, 0, 1.0,
  0.2, 0, 0.7,
  0.4, 0, 1.0,
  0.2, 0, 0.7,
  0.2, 0, 1.0,
  0.4, 0, 1.0,
  0.4, 0, 1.0,
  0.5, 0, 0.49,
  1, 0.2, 0.3,
  0.4, 0, 1.0,
  1, 0.2, 0.3,
  0, 0, 0.5,
  0.2, 0, 0.5,
  0, 0, 0.5,
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
  0.4, 0, 1.0,
  0.5, 0, 0.49,
  1, 0, 0.49,
  1, 0, 0.6,
  1, 0, 0.49,
  0, 0, 0.5,
  1, 0, 0.49,
  1, 0, 0.6,
  1, 0, 0.49,
  1, 0, 0.6,
  1, 0, 0.6,
  1, 0, 0.6,
  1, 0, 0.6,
  1, 0, 0.6,
  1, 0, 0.3,
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