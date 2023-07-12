let clearNotificationsButtons = document.getElementById('clear-notifications');

clearNotificationsButtons.addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setBorderColor,
  });
});

function setBorderColor() {
  document.querySelector('div.Toastify').remove();
}
