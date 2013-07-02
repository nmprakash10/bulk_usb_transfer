chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('mb_usb_device.html', {
    bounds: {
      width: 400,
      height: 400
    }
  });
});
