




chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.action === "startAutoClick") {
        // 檢查當前分頁的 URL 是否包含 "18comic"
        if (window.location.href.includes("18comic")) {
          // 在這裡實現點擊按鈕的邏輯
          clickButton();
        } else {
          console.log('當前頁面不是 18comic，不執行操作');
        }
      }
    }
  );
  


  function clickButton() {
    // 在這裡實現點擊按鈕的邏輯
    // 使用 document.querySelector 或其他方式選取並點擊按鈕
    var url = window.location.href;
    var match = url.match(/\/album\/(\d+)\/?/);
    var albumNumber = match ? match[1] : null;
    var button = document.querySelector(`div.p-t-5.p-b-5.read-block a.btn.btn-primary[href="/photo/${albumNumber}"]`);
   var buttons = document.querySelectorAll('div.p-t-5.p-b-5.read-block a.btn.btn-primary');

    if (button) {
      button.click();
    } else {
      console.log('找不到按鈕');
    }
  }
  

  function containsText(element, text) {
    return element.innerText.includes(text);
  }
  
 