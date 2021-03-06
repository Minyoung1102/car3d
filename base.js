const firstSection = document.getElementById("first");
const secondSection = document.getElementById("second");

const colors = document.querySelectorAll(".color");

function firstDesign() {
  function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    if (color == "white") {
      model.children[0].children[0].material = new THREE.MeshStandardMaterial({
        color: 0x8a8b8e,
      });
    } else if (color == "black") {
      model.children[0].children[0].material = new THREE.MeshStandardMaterial({
        color: 0x111111,
      });
    } else if (color == "gray") {
      model.children[0].children[0].material = new THREE.MeshStandardMaterial({
        color: 0x444040,
      });
    } else if (color == "blue") {
      model.children[0].children[0].material = new THREE.MeshStandardMaterial({
        color: 0x0f2375,
      });
    } else {
      model.children[0].children[0].material = new THREE.MeshStandardMaterial({
        color: 0x770a13,
      });
    }
    model.children[0].children[0].castShadow = true;
  }

  var scene = new THREE.Scene();
  scene.background = new THREE.Color("gray");

  // 카메라 ( 카메라 수직 시야 각도, 가로세로 종횡비율, 시야거리 시작지점, 시야거리 끝지점
  var camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  // 렌더러 정의 및 크기 지정, 문서에 추가하기
  const div = document.createElement("div");
  var renderer = new THREE.WebGLRenderer({
    antialias: true,
    preserveDrawingBuffer: true,
  });
  renderer.setSize(533, 533);
  firstSection.appendChild(renderer.domElement);
  renderer.shadowMapEnabled = true;
  //renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.shadowMap.type = THREE.PCFShadowMap; // <-- 속도가 빠르다
  renderer.gammaInput = true;
  renderer.gammaOutput = true;

  var model;

  var loader = new THREE.TextureLoader();
  var loaderMesh = new THREE.ColladaLoader();
  loaderMesh.load("am7f3psa0agw-Car-Model/Car-Model/Car.dae", function (
    collada
  ) {
    model = collada.scene;
    loader.load(
      "http://dreamplan7.cafe24.com/canvas/img/checkPattern.jpg",
      function (texture) {
        model.children[0].children[0].material = new THREE.MeshStandardMaterial(
          {
            color: 0x111111,
          }
        );
        model.children[0].children[0].castShadow = true;
        Array.from(colors).forEach((color) =>
          color.addEventListener("click", handleColorClick)
        );
      }
    );

    model.rotation.x = -90 * (Math.PI / 180);
    //model.rotation.z = -0 * (Math.PI / 180);
    model.position.set(0, -0.52, 0);
    scene.add(model);
  });

  // 바닥

  // 카메라의 위치 조정
  camera.position.set(5, 5, 7);
  camera.lookAt(0, 0, 0);
  // camera.rotation.set ( -35 * ( Math.PI / 180 ), 35 * ( Math.PI / 180 ), 0 );

  // 카메라가 회전하는
  var controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.update();

  // 전체 조명을 추가합니다.
  var light_base = new THREE.AmbientLight(0xf0f0f0); // soft white light
  scene.add(light_base);

  var light_sun = new THREE.DirectionalLight(0x808080, 1.0);
  light_sun.position.set(200, 200, 300);
  scene.add(light_sun);
  shadowBlur = 15;
  light_sun.castShadow = true;

  // ==========================
  // 초기화 부분 끝
  // ==========================

  var framesPerSecond = 30;

  // 에니메이션 효과를 자동으로 주기 위한 보조 기능입니다.
  var animate = function () {
    // 프레임 처리
    setTimeout(function () {
      requestAnimationFrame(animate);
    }, 1000 / framesPerSecond);

    // 랜더링을 수행합니다.
    renderer.render(scene, camera);
  };

  // animate()함수를 최초에 한번은 수행해주어야 합니다.
  animate();
}

firstDesign();

function firstDesign2() {
  function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    if (color == "white") {
      model.children[0].children[0].material = new THREE.MeshStandardMaterial({
        color: 0x8a8b8e,
      });
    } else if (color == "black") {
      model.children[0].children[0].material = new THREE.MeshStandardMaterial({
        color: 0x111111,
      });
    } else if (color == "gray") {
      model.children[0].children[0].material = new THREE.MeshStandardMaterial({
        color: 0x444040,
      });
    } else if (color == "blue") {
      model.children[0].children[0].material = new THREE.MeshStandardMaterial({
        color: 0x0f2375,
      });
    } else {
      model.children[0].children[0].material = new THREE.MeshStandardMaterial({
        color: 0x770a13,
      });
    }
    model.children[0].children[0].castShadow = true;
  }

  var scene = new THREE.Scene();
  scene.background = new THREE.Color("gray");

  // 카메라 ( 카메라 수직 시야 각도, 가로세로 종횡비율, 시야거리 시작지점, 시야거리 끝지점
  var camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  // 렌더러 정의 및 크기 지정, 문서에 추가하기
  const div = document.createElement("div");
  var renderer = new THREE.WebGLRenderer({
    antialias: true,
    preserveDrawingBuffer: true,
  });
  renderer.setSize(533, 533);
  secondSection.appendChild(renderer.domElement);
  renderer.shadowMapEnabled = true;
  //renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.shadowMap.type = THREE.PCFShadowMap; // <-- 속도가 빠르다
  renderer.gammaInput = true;
  renderer.gammaOutput = true;

  var model;

  var loader = new THREE.TextureLoader();
  var loaderMesh = new THREE.ColladaLoader();
  loaderMesh.load("am7f3psa0agw-Car-Model/Car-Model/Car.dae", function (
    collada
  ) {
    model = collada.scene;
    loader.load(
      "http://dreamplan7.cafe24.com/canvas/img/checkPattern.jpg",
      function (texture) {
        model.children[0].children[0].material = new THREE.MeshStandardMaterial(
          {
            color: 0x111111,
          }
        );
        model.children[0].children[0].castShadow = true;
        Array.from(colors).forEach((color) =>
          color.addEventListener("click", handleColorClick)
        );
      }
    );

    model.rotation.x = -90 * (Math.PI / 180);
    //model.rotation.z = -0 * (Math.PI / 180);
    model.position.set(0, -0.52, 0);
    scene.add(model);
  });

  // 바닥

  // 카메라의 위치 조정
  camera.position.set(5, 5, 7);
  camera.lookAt(0, 0, 0);
  // camera.rotation.set ( -35 * ( Math.PI / 180 ), 35 * ( Math.PI / 180 ), 0 );

  // 카메라가 회전하는
  var controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.update();

  // 전체 조명을 추가합니다.
  var light_base = new THREE.AmbientLight(0xf0f0f0); // soft white light
  scene.add(light_base);

  var light_sun = new THREE.DirectionalLight(0x808080, 1.0);
  light_sun.position.set(200, 200, 300);
  scene.add(light_sun);
  shadowBlur = 15;
  light_sun.castShadow = true;

  // ==========================
  // 초기화 부분 끝
  // ==========================

  var framesPerSecond = 30;

  // 에니메이션 효과를 자동으로 주기 위한 보조 기능입니다.
  var animate = function () {
    // 프레임 처리
    setTimeout(function () {
      requestAnimationFrame(animate);
    }, 1000 / framesPerSecond);

    // 랜더링을 수행합니다.
    renderer.render(scene, camera);
  };

  // animate()함수를 최초에 한번은 수행해주어야 합니다.
  animate();
}

firstDesign2();
