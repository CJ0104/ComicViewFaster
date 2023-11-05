
document.getElementById('startButton').addEventListener('click', function() {
  chrome.windows.getAll({ populate: true }, function(windows) {
    windows.forEach(function(window) {
      window.tabs.forEach(function(tab) {
        chrome.tabs.sendMessage(
          tab.id,
          { action: 'startAutoClick' },
          function(response) {
            if (chrome.runtime.lastError) {
              console.error(chrome.runtime.lastError);
            } else {
              console.log(response);
            }
          }
        );
      });
    });
  });
});
