// Vino emulation for desktop/mobile users
let emulation = true;

if (typeof vino === 'undefined' && emulation === true) {
  console.log('Beginning Vino emulation');
  window.vino = {
    memo_open: function () {
      console.log('Memo open');
    },
    memo_isFinish: function () {
      console.log('Memo is finished');
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
      console.log('Got Mii Image!');
    },
    act_getName: function () {
      const name = 'Sarah';
      console.log('Got name:', name);
      document.getElementById('nnid-name').textContent = name;
      return name;
    },
  };
  window.wiiuKeyboard = {
    openInPasswordMode: function () {
      console.log('Keyboard opened in password mode!');
    },
  };

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

  const avatar = document.getElementById('avatar');
  if (avatar) {
    avatar.src =
      'https://pretendo-cdn.b-cdn.net/mii/1112166243/normal_face.png?lm=202405120222050000';
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

// Opens memo and show the user their drawing
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

function getMii() {
  const mii = vino.act_getMiiImage();
  const avatar = document.getElementById('avatar');
  if (avatar) avatar.src = mii;
}

function getName() {
  const name = vino.act_getName();
  const display = document.getElementById('nnid-name');
  display.textContent = name;
}
