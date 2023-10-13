// before everything, api emulation
if (typeof vino === 'undefined') {
    console.log('Initialize API emulation');
    window.vino = {
        lyt_setIsEnableClientLoadingIcon: function (show) {
            console.log((show ? 'Show' : 'Hide') + ' blue loading icon');
        },
        lyt_setIsEnableWhiteMask: function (withmask) {
            console.log((withmask ? 'With' : 'Without') + ' white mask');
        },
        lyt_startTouchEffect: function () {
            console.log('Show touch effect');
        },
        lyt_startTouchNodeEffect: function(one, two, three, four) {
            console.log('Show touch mouse effect at ' + one, two, three, four);
        },
        emulate_touch: function(one, two, three) {
          console.log('Emulate touch at ' + one, two, three);
       },
        emulate_inputDelay: function(one) {
        console.log('Input delay of ' + one + ' seconds');
       },
        exit: function () {
            console.log('Exit app');
            window.location.href = "https://google.com"
        },
        exitForce: function () {
            console.log('Forcing exit app');
            window.location.href = "https://google.com"
        },
        isReturnedFromOtherApplication: function () {
            console.log('App was not returned from other application');
            return false;
        },
        runOliveErrorDialog: function (errorCode) {
            alert('115-' + errorCode + '\n\n' + 'An Miiverse error occurred.');
        },
        runErrorDialog: function (errorCode) {
            alert('119-9' + errorCode + '\n\n' + 'An Vino error occurred.');
        },
        olv_getErrorCodeOnInitialize: function () {
            alert('115-5004' + '\n\n' + 'The Miiverse service has ended.');
        },
        runSingleButtonDialog: function (msg, btnStr) {
            alert(msg + "\n\n[ " + btnStr + " ]");
        },
        runTwoButtonDialog: function (msg, lBtnStr, rBtnStr) {
            return confirm(msg + "\n\n[ " + lBtnStr + " (Cancel) ]  [ " + rBtnStr + " (OK) ]");
        },
        info_getCountry: function () {
            return 'US';
        },
        info_getLanguage: function () {
            return 'en';
        },
        loading_setIconRect: function (one, two, three, four) {
            console.log('Set loading icon position at ' + one, two, three, four);
        },
        loading_setIconAppear: function (show) {
            console.log((show ? 'Show' : 'Hide') + ' loading icon.');
        },
        loading_setIconVisibility: function (show) {
            console.log((show ? 'Instantly show' : 'Instantly hide') + ' loading icon.');
        },
        navi_reset: function () {
            console.log('Reset navi position');
        },
        soundPlay: function (soundLabel) {
            console.log('Played sound effect ' + soundLabel);
        },
        ir_enableCodeset: function(one) {
            console.log('Enabled IR codeset ' + one);
        },
        ir_send: function(one, two) {
            console.log('Sent IR code ' + one);
        },
        navi_setMoveMethod: function(one) {
            console.log('Set move method ' + one);
        },
        act_getCurrentSlotNo: function() {
            console.log('Returned account slot "1"');
            return 1;
        },
        act_getMiiImage: function(slot) {
            console.log('Returned Mii image from ' + slot);
            return 'http://mii-images.account.nintendo.net/wt2v2fiu6ldf_normal_face.png';
        },
        act_getMiiImageEx: function(slot, expression) {
            console.log('Returned Mii image from ' + slot + ' with expression ' + expression);
            if (expression === 7) {
            return 'http://mii-images.account.nintendo.net/wt2v2fiu6ldf_whole_body.png'; 
          } 
            else if (expression === 2){
            return 'http://mii-images.account.nintendo.net/wt2v2fiu6ldf_happy_face.png';
          }
            else if (expression === 3){
            return 'http://mii-images.account.nintendo.net/wt2v2fiu6ldf_like_face.png';
          }
            else if (expression === 4){
            return 'http://mii-images.account.nintendo.net/wt2v2fiu6ldf_surprised_face.png';
          }
            else if (expression === 5){
            return 'http://mii-images.account.nintendo.net/wt2v2fiu6ldf_frustrated_face.png';
          }
            else if (expression === 6){
            return 'http://mii-images.account.nintendo.net/wt2v2fiu6ldf_puzzled_face.png';
          }
            else {
            return 'http://mii-images.account.nintendo.net/wt2v2fiu6ldf_normal_face.png';
          };
        },
        act_getMiiData: function(slot) {
            console.log('Returned Mii data from ' + slot);
            return 'AwAAQBs8xqsHR9PC3Oe15oXEaBemLwAAAQxTAGEAcgBhAGgAAAAAAAAAAAAAAEpACBCAD3ppRBgzFEYYhhIWSA4AACkAUkhQAABpAG4AdABlAG4AZABvAAAAAAAAANL3';
        },
        act_getNum: function() {
            console.log('Returned number of accounts');
            return 1;
        },
        act_getName: function(slot) {
            console.log('Returned Mii name from ' + slot);
            return 'Sarah';
        },
        act_getPid: function(slot) {
            console.log('Returned account PID from ' + slot);
            return 1738258923;
        },
        act_getAgeDivision: function(slot) {
            console.log('Returned account age division from ' + slot);
            return 1;
        },
        apd_isEnabled: function() {
            console.log('APD is enabled on console');
            return true;
        },
        apd_enable: function() {
            console.log('APD has been enabled');
            return true;
        },
        apd_disable: function() {
            console.log('APD has been disabled');
            return false;
        },
        memo_open: function(state) {
            console.log((state ? 'Open with reset' : 'Open without reset') + ' memo UI');
            return true;
        },
        memo_isFinish: function() {
            console.log('Memo UI finished');
            return true;
        },
        memo_getImagePng: function() {
            console.log('Return memo UI image');
            return 'https://i.ibb.co/rwr9J38/descarga.png';
        },
        memo_getImageTgaRaw: function() {
            console.log('Return memo UI raw image');
            return '';
        },
        memo_getImageTgaCompressed: function() {
            console.log('Return memo UI compressed image');
            return '';
        },
        fp_getFriendList: function() {
            console.log('Return friend list');
            return '1739044112, 1738830554, 1741588700, 1738406070';
        },
        fp_getFriendName: function(PID) {
            console.log('Get friend name of ' + PID);
            return 'David Joaq';
        },
        jumpToTitle: function(TID, bool) {
            console.log('Jump to app ' + TID);
        },
        jumpToMiiverse: function(bool) {
            console.log('Jump to Miiverse is ' + bool);
        },
        jumpToMiiversePostId: function(postid, bool) {
            console.log('Jump to post ' + postid + ' on Miiverse is ' + bool);
        },
        jumpToEShop: function(TID, bool) {
            console.log('Jump to eShop page of TID ' + TID + ' is ' + bool);
        },
        jumpToVod: function(url, TID, bool) {
            console.log('Jump to VOD app of TID ' + TID + ' with URL ' + url + ' is ' + bool);
            window.location.href = url;
        },
        jumpToBrowser: function(url, bool) {
            console.log((bool ? 'Jump' : 'Did not jump') + ' to URL ' + url);
            window.location.href = url;
        },
        jumpToSettingsTvRemote: function(bool) {
            console.log((bool ? 'Jump' : 'Did not jump') + ' to TV Remote Settings');
        },
        olv_isEnabled: function() {
            console.log('Miiverse is enabled');
            return true;
        },
        olv_getPostingResult: function() {
            console.log('Post was successful');
            return 1;
        },
        olv_getHostName: function() {
            console.log('Miiverse host name ' + 'api-us.olv.nintendo.net');
            return 'api-us.olv.nintendo.net';
        },
        olv_getUserAgent: function() {
            console.log('Miiverse user agent ' + 'WiiU/POLV-5.0.3/353');
            return 'WiiU/POLV-5.0.3/305';
        },
        olv_getServiceToken: function() {
            console.log('Return service token');
            return '837vCg+l8rgFmGSHhZXRH22xr7YUxPhQ95FvhWr3JmoYBsWxUfIYZHFF+J6NYy9eUVnEhv8y3YFw2BrZZ3UEunQfHf7omFk0t4kWywIZYQcaZUDx367u7uSwW+34xF4+/IPQFGLtCh6moWe97yHcOMR374iAmzb1uTDM2cRgDco=';
        },
        olv_getParameterPack: function() {
            console.log('Return param pack');
            return 'XHRpdGxlX2lkXDE0MDc1ODEzMTA0OTcwMzRcYWNjZXNzX2tleVwzNDczXHBsYXRmb3JtX2lkXDFc cmVnaW9uX2lkXDJcbGFuZ3VhZ2VfaWRcMVxjb3VudHJ5X2lkXDQ5XGFyZWFfaWRcMzZcbmV0d29y a19yZXN0cmljdGlvblwwXGZyaWVuZF9yZXN0cmljdGlvblwwXHJhdGluZ19yZXN0cmljdGlvblwx N1xyYXRpbmdfb3JnYW5pemF0aW9uXDFcdHJhbnNmZXJhYmxlX2lkXDExMDU5OTY0MDc3OTU4MjI1 MzQ3XHR6X25hbWVcQW1lcmljYS9OZXdfWW9ya1x1dGNfb2Zmc2V0XC0xNDQwMFw=';
        },
        olv_postText: function(body, topicTag, communityID, spoiler, searchkey1, searchkey2, searchkey3, searchkey4, searchkey5) {
            console.log('Post to Miiverse with message ' + '"' + body +  '"' + ' with topic ' + topicTag + ' to community ID ' + communityID + ' with spoilers ' + spoiler + ' with search key ' + searchkey1 + ' with search key ' + searchkey2 + ' with search key ' + searchkey3 + ' with search key ' + searchkey4 + ' with search key ' + searchkey5);
        },
        olv_postTextFixedPhrase: function(body, topicTag, communityID, spoiler, searchkey1, searchkey2, searchkey3, searchkey4, searchkey5) {
            console.log('Post to Miiverse fixed phrase with message ' + '"' + body +  '"' + ' with topic ' + topicTag + ' to community ID ' + communityID + ' with spoilers ' + spoiler + ' with search key ' + searchkey1 + ' with search key ' + searchkey2 + ' with search key ' + searchkey3 + ' with search key ' + searchkey4 + ' with search key ' + searchkey5);
        },
        olv_postImage: function(painting, topicTag, communityID, spoiler, searchkey1, searchkey2, searchkey3, searchkey4, searchkey5) {
            console.log('Post to Miiverse with drawing ' + '"' + painting +  '"' + ' with topic ' + topicTag + ' to community ID ' + communityID + ' with spoilers ' + spoiler + ' with search key ' + searchkey1 + ' with search key ' + searchkey2 + ' with search key ' + searchkey3 + ' with search key ' + searchkey4 + ' with search key ' + searchkey5);
        },
        olv_postImageFixedPhrase: function(body, topicTag, communityID, spoiler, searchkey1, searchkey2, searchkey3, searchkey4, searchkey5) {
            console.log('Post to Miiverse fixed phrase with drawing ' + '"' + painting +  '"' + ' with topic ' + topicTag + ' to community ID ' + communityID + ' with spoilers ' + spoiler + ' with search key ' + searchkey1 + ' with search key ' + searchkey2 + ' with search key ' + searchkey3 + ' with search key ' + searchkey4 + ' with search key ' + searchkey5);
        },
        suggest_isOpening: function() {
            console.log('Suggest is opening');
            return true;
        },
        suggest_set: function(sug1, sug2, sug3, sug4, sug5, sug6, sug7, sug8, sug9, sug10) {
            console.log('Set suggestion strings ' + '"' + sug1 +  '", ' +  '"' + sug2 +  '", ' + '"' + sug3 +  '", ' + '"' + sug4 +  '", ' + '"' + sug5 +  '", ' + '"' + sug6 +  '", ' + '"' + sug7 +  '", ' + '"' + sug8 +  '", ' + '"' + sug9 +  '", ' + '"' + sug10 +  '"' );
            return true;
        },
        suggest_reset: function() {
            console.log('Reset suggestion strings');
            return true;
        },
        suggest_getString: function() {
            console.log('Get string ' + '"Hello"');
            return 'Hello';
        }

    };
}
if (typeof wiiu === 'undefined') {window.wiiu = {},window.wiiu.gamepad = {update: function() {}};}


//enable the IR features and codeset
vino.ir_enableCodeset(1);

function changeChannelDemo(ir1, ir2, ir3) {
setTimeout(function(){vino.ir_send(ir1, 0);}, 500);
setTimeout(function(){vino.ir_send(ir2, 0);}, 1000);
setTimeout(function(){vino.ir_send(ir3, 0);}, 1500);
}

//functions from onclick and else
function showLoad() {
  vino.loading_setIconVisibility(true);
  }
  
  function hideLoad() {
  vino.loading_setIconVisibility(false);
  }
  
  function ridOfLoad() {
  vino.loading_setIconVisibility(false);
  }
  
  function hover(x) {
      x.classList.add('hover');
  }
  
  function uhover(x) {
      x.classList.remove('hover');
  }
  
  function exit() {
  vino.exit();
  }
  
  function back() {
  history.back();
  }
  
  function searchY() {
    vino.emulate_touch(360, 480, 1);
    vino.emulate_inputDelay(2);
  }

//literally an auto power down api is the last thing i expected
if (vino.apd_isEnabled()) {
  vino.apd_enable();
} else {
  vino.apd_disable();
}

//actual JS starts here, first, show load icon
vino.loading_setIconRect(360, 160, 120, 120);
vino.loading_setIconAppear(true);

//set layout auto loading icon
vino.lyt_setIsEnableClientLoadingIcon(true);
vino.lyt_setIsEnableWhiteMask(true);

document.addEventListener("DOMContentLoaded", function() {
// Button code
const navItems = document.querySelectorAll("[navi_scroll]");
var currentIndex = 0;

// Function to handle scrolling left
function scrollLeft() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = 0;
  }
  scrollToCurrentItem();
}

// Function to handle scrolling right
function scrollRight() {
  currentIndex++;
  if (currentIndex >= navItems.length) {
    currentIndex = navItems.length - 1;
  }
  scrollToCurrentItem();
}

// Function to scroll to the currently focused item
function scrollToCurrentItem() {
  // Remove active class from all items
  for (var i = 0; i < navItems.length; i++) {
    navItems[i].classList.remove('navi-selected');
  }

  // Add active class to the currently focused item
  navItems[currentIndex].classList.add('navi-selected');

  // Scroll to the focused item using scrollIntoView
  navItems[currentIndex].scrollIntoView();
}

function executeOrNavigate(href) {
  const focusedItem = navItems[currentIndex].querySelector('a');
  vino.soundPlay('SE_COMMON_SELECT');
  // Navigate to the href
  if (focusedItem.href) {
    window.location.href = focusedItem.href;
  }
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
    scrollLeft();
  } else if (event.key === 'ArrowRight') {
    scrollRight();
  } else if (event.key === 'b') {
    history.back();
  } else if (event.key === 'Enter') {
    // Trigger navigation when Enter is pressed on the focused item
    const focusedItem = navItems[currentIndex].querySelector('a');
    if (focusedItem) {
      executeOrNavigate(focusedItem.getAttribute('href'));
    }
  }
});

function resetNavi() {
  for (var i = 0; i < navItems.length; i++) {
      navItems[i].classList.remove('navi-selected');
    }
}

//reset navi LOL!
document.addEventListener("click", resetNavi);

function lerp( a, b, alpha ) {
    return a + alpha * ( b - a )
  }

  var lStickRightCheck = setInterval(function() {
    wiiu.gamepad.update()
    if(wiiu.gamepad.hold === 536870912) {
      document.body.scrollLeft += lerp(-15, 15, (wiiu.gamepad.lStickX));
    }

  }, 10);

  var lStickLeftCheck = setInterval(function() {
    wiiu.gamepad.update()
    if(wiiu.gamepad.hold === 1073741824) {
      document.body.scrollLeft += lerp(-15, -15, (wiiu.gamepad.lStickX));
    }

  }, 10);

  var lStickUpCheck = setInterval(function() {
    wiiu.gamepad.update()
    if(wiiu.gamepad.hold ===  268435456) {
      document.body.scrollTop += lerp(-15, -15, (wiiu.gamepad.lStickY));
    }

  }, 10);

  var lStickDownCheck = setInterval(function() {
    wiiu.gamepad.update()
    if(wiiu.gamepad.hold === 134217728) {
      document.body.scrollTop += lerp(15, 15, (wiiu.gamepad.lStickY));
    }

  }, 10);

var dPadRightCheck = setInterval(function() {
    wiiu.gamepad.update()
    if(wiiu.gamepad.hold === 2048) {
        scrollLeft();
    }
    }, 150);

  var dPadLeftCheck = setInterval(function() {
    wiiu.gamepad.update()
    if(wiiu.gamepad.hold === 1024) {
        scrollRight();
    }
  }, 150);

  var dPadUpCheck = setInterval(function() {
    wiiu.gamepad.update()
    if(wiiu.gamepad.hold === 512) {
        scrollLeft();
    }
    }, 150);

  var dPadDownCheck = setInterval(function() {
    wiiu.gamepad.update()
    if(wiiu.gamepad.hold === 256) {
        scrollRight();
    }
  }, 150);

  var aButtonCheck = setInterval(function() {
    wiiu.gamepad.update()
    if(wiiu.gamepad.hold === 32768) {
    const focusedItem = navItems[currentIndex].querySelector('a');
    if (focusedItem) {
        executeOrNavigate(focusedItem.getAttribute('href'));
      }
}
  }, 150);

var canHistoryB = document.getElementById('back');
if (typeof(canHistoryB) != 'undefined' && canHistoryB != null) {
    var bButtonCheck = setInterval(function() {
        wiiu.gamepad.update()
        if(wiiu.gamepad.hold === 16384) {
         vino.soundPlay('SE_RETURN');
         history.back();
        }  
      }, 150);
}

});