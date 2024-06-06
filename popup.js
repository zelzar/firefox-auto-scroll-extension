document.getElementById('startScroll').addEventListener('click', () => {
  const scrollTime = document.getElementById('scrollTime').value;
  browser.runtime.sendMessage({action: 'startScroll', time: scrollTime});
});

document.getElementById('stopScroll').addEventListener('click', () => {
  browser.runtime.sendMessage({action: 'stopScroll'});
});

