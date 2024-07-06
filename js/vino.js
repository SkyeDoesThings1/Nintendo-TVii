// Vino emulation for desktop/mobile users\
let emulation = true;
if (typeof vino === 'undefined' && emulation === true) {
  console.log('Begining Vino emulation');
  window.vino = {
    memo_open: function () {
      console.log('Memo open');
    },
    memo_isFinish: function () {
      console.log('Memo is finished');
      return true;
    },
    memo_getImagePng: function () {
      console.log('got png!');
      return 'https://i.ibb.co/rwr9J38/descarga.png';
    },
    memo_reset: function () {
      console.log('Memo has been reset!');
    },
  };
  // changes the image size depending on device
  (document.getElementById('main-body').style.backgroundSize = 'cover'),
    (document.getElementById('main-body').style.backgroundRepeat = 'no-repeat'),
    (document.getElementById('main-body').style.width = '854'),
    (document.getElementById('main-body').style.height = '480');
}

// Disables Vino emulation
function noEmulation() {
  emulation = false;
  if (typeof vino !== 'undefined') {
    console.log('Vino emulation disabled');
    delete window.vino;
    (document.getElementById('main-body').style.backgroundSize = ''),
      (document.getElementById('main-body').style.backgroundRepeat = ''),
      (document.getElementById('main-body').style.width = ''),
      (document.getElementById('main-body').style.height = '');
  }
}

function beginDrawing() {
  vino.memo_open();
  if (vino.memo_isFinish) {
    (document.getElementById('memoText').style.display = 'inline'),
      (document.getElementById('resetButton').style.display = 'inline'),
      (document.getElementById('memo').style.display = 'inline'),
      (document.getElementById('memoView').style.display = 'inline'),
      (document.getElementById('memo').src = vino.memo_getImagePng());
  }
}

function resetDrawing() {
  vino.memo_reset(),
    (document.getElementById('memoText').style.display = 'none'),
    (document.getElementById('resetButton').style.display = 'none'),
    (document.getElementById('memo').style.display = 'none'),
    (document.getElementById('memoView').style.display = 'none'),
    (document.getElementById('memo').src = '');
}
