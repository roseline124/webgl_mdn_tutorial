import './style.css';

import * as THREE from 'three';
import { points, colors } from './gradientHeart/baseLine';
import { points2, colors2 } from './gradientHeart/front';
import { points3 } from './gradientHeart/back';

const scene = new THREE.Scene();

// PerspectiveCamera: FOV, 너비 높이 비율, near, far
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 500);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BufferGeometry().setFromPoints(points);
geometry.addAttribute('color', new THREE.BufferAttribute(colors, 3));

const material = new THREE.LineBasicMaterial({ vertexColors: THREE.VertexColors, });
const line = new THREE.Line(geometry, material);


const geometryFront = new THREE.BufferGeometry().setFromPoints(points2);
geometryFront.addAttribute('color', new THREE.BufferAttribute(colors2, 3));
const materialFront = new THREE.LineBasicMaterial({ vertexColors: THREE.VertexColors, });
const line2 = new THREE.Line(geometryFront, materialFront);

const geometryBack = new THREE.BufferGeometry().setFromPoints(points3);
geometryBack.addAttribute('color', new THREE.BufferAttribute(colors2, 3));
const materialBack = new THREE.LineBasicMaterial({ vertexColors: THREE.VertexColors });
const line3 = new THREE.Line(geometryBack, materialBack);

scene.add(line);
scene.add(line2);
scene.add(line3);

camera.position.z = 100; // => camera.position.set(0, 0, 100);

const animate = function () {
  requestAnimationFrame(animate);

  line.rotation.y += 0.01;
  line2.rotation.y += 0.01;
  line3.rotation.y += 0.01;

  renderer.render(scene, camera);
};

animate();