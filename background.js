let scrollInterval;

browser.runtime.onMessage.addListener((message) => {
  if (message.action === 'startScroll') {
    if (scrollInterval) {
      clearInterval(scrollInterval);
    }
    const time = parseInt(message.time);
    scrollInterval = setInterval(() => {
      browser.tabs.executeScript({
        code: 'window.scrollBy(0, 1);'
      });
    }, time);
  } else if (message.action === 'stopScroll') {
    clearInterval(scrollInterval);
  }
});

