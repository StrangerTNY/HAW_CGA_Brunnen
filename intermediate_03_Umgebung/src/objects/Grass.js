import * as THREE from 'three';

export default class Grass extends THREE.Group{

  constructor() {
    super();

/*
    const grassGeometry = new THREE.CylinderGeometry(0.4,0.4,8,16);
*/
    const grassGeometry = new THREE.CylinderGeometry(0.2*10,0.4*10,8*10,16*10);
    const grassMaterial = new THREE.MeshLambertMaterial({color:0x478E33});

    const grass = new THREE.Mesh(grassGeometry,grassMaterial);
    const grassTop = new THREE.Mesh(grassGeometry,grassMaterial);

    grassTop.position.set(0,100,0);


    /*const constraint = new CANNON.LockConstraint(grass,grassTop);*/

    /*const connection = new CANNON.Spring(grass,grassTop,{
      localAnchorA: new CANNON.Vec3(-10,10,0),
      localAnchorB: new CANNON.Vec3(0,0,0),
      restLength: 0,
      stiffness: 50,
      damping: 1,
    })*/


/*
    grass.rotation.x = Math.PI/2;
*/
    grass.castShadow = true;
    this.add(grass)
  }

  addPhysics() {
    window.physics.addCylinder(this, 1, 3, 4, 80, 160)
  }
}