import * as THREE from 'three';

const scene = new THREE.Scene();

// PerspectiveCamera: FOV, 너비 높이 비율, near, far
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 500);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const curve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(-20, 0, 20),
  new THREE.Vector3(-10, 0, 10),
  new THREE.Vector3(-5, 5, 5),
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(5, -5, 5),
  new THREE.Vector3(10, 0, 10),
  new THREE.Vector3(20, 0, 20)
]);

const points = curve.getPoints(50);
var geometry = new THREE.BufferGeometry().setFromPoints(points);
const material = new THREE.LineBasicMaterial({ color: 'red' });
const curveObject = new THREE.Line(geometry, material);
scene.add(curveObject);

camera.position.z = 100; // => camera.position.set(0, 0, 100);

var clock = new THREE.Clock();
var time = 0;


const animate = function () {
  requestAnimationFrame(animate);

  time += clock.getDelta();

  curve.points[1].y = Math.sin(time) * 2.5;
  curve.points[2].y = Math.sin(time) * -2.5;
  curve.points[3].y = Math.sin(time) * 5;
  curve.points[4].y = Math.sin(time) * 2.5;
  curve.points[5].y = Math.sin(time) * 5;

  geometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(50));

  curveObject.geometry.dispose();
  curveObject.geometry = geometry;

  renderer.render(scene, camera);
};

animate();