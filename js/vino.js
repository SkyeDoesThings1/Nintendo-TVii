// Vino emulation for desktop/mobile users
let emulation = true;

if (typeof vino === 'undefined' && emulation === true) {
  console.log('Beginning Vino emulation');
  window.vino = {
    memo_open: function () {
      console.log('Memo open!');
    },
    memo_isFinish: function () {
      console.log('Memo is finished!');
      return true;
    },
    memo_getImagePng: function () {
      console.log('Got png!');
      return 'https://i.ibb.co/rwr9J38/descarga.png';
    },
    memo_reset: function () {
      console.log('Memo has been reset!');
    },
    exit: function () {
      console.log('Closing!');
      window.location.href = 'https://www.google.com';
    },
    act_getMiiImage: function () {
      const avatarUrl =
        'https://pretendo-cdn.b-cdn.net/mii/1112166243/normal_face.png?lm=202405120222050000';
      console.log('Got Mii Image:', avatarUrl);
      return avatarUrl;
    },
    act_getName: function () {
      const name = 'Sarah';
      console.log('Got name:', name);
      const nameElement = document.getElementById('nnid-name');
      if (nameElement) {
        nameElement.textContent = name;
      }
      return name;
    },
    searchY: function () {
      vino.emulate_touch(360, 480, 1);
      vino.emulate_inputDelay(2);
    },
  };
  if (typeof wiiu === 'undefined') {
    (window.wiiu = {}), (window.wiiu.gamepad = { update: function () {} });
  }

  const zipCodeInput = document.getElementById('zipCodeInput');
  if (zipCodeInput) {
    zipCodeInput.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        window.location.href = '/main';
      }
    });
  }

  const mainBody = document.getElementById('main-body');
  if (mainBody) {
    mainBody.style.backgroundSize = 'cover';
    mainBody.style.backgroundRepeat = 'no-repeat';
  }
}

// Disables Vino emulation
function noEmulation() {
  emulation = false;
  if (typeof vino !== 'undefined') {
    console.log('Vino emulation disabled');
    delete window.vino;

    const mainBody = document.getElementById('main-body');
    if (mainBody) {
      mainBody.style.backgroundSize = '';
      mainBody.style.backgroundRepeat = '';
    }
  }
}

// Opens Drawing UI and show the user their drawing
function beginDrawing() {
  vino.memo_open();
  if (vino.memo_isFinish) {
    const memoText = document.getElementById('memoText');
    const resetButton = document.getElementById('resetButton');
    const memo = document.getElementById('memo');
    const memoView = document.getElementById('memoView');

    if (memoText) memoText.style.display = 'inline';
    if (resetButton) resetButton.style.display = 'inline';
    if (memo) memo.style.display = 'inline';
    if (memoView) memoView.style.display = 'inline';

    if (memo) memo.src = vino.memo_getImagePng();
  }
}

// Resets memo
function resetDrawing() {
  vino.memo_reset();

  const memoText = document.getElementById('memoText');
  const resetButton = document.getElementById('resetButton');
  const memo = document.getElementById('memo');
  const memoView = document.getElementById('memoView');

  if (memoText) memoText.style.display = 'none';
  if (resetButton) resetButton.style.display = 'none';
  if (memo) memo.style.display = 'none';
  if (memoView) memoView.style.display = 'none';

  if (memo) memo.src = '';
}

// Do I need to explain this one
function closeTVii() {
  try {
    vino.exit();
  } catch (error) {
    if (vino.exitForce) vino.exitForce();
  }
}

// Function to get the Mii image and set it to the avatar
function getMii() {
  const mii = vino.act_getMiiImage();
  const avatar = document.getElementById('avatar');
  if (avatar) {
    console.log('Setting avatar src to:', mii);
    avatar.src = mii;
  }
}

// Function to get the name and set it to the display
function getName() {
  const name = vino.act_getName();
  const display = document.getElementById('nnid-name');
  if (display) {
    display.textContent = name;
  }
}
