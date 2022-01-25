chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "primary-enable",
    type:"normal",
    title:"Enable Spellcheck",
    contexts:["page"]
  })
})

const findAndEnable = () => {
  console.log(document);
  document.querySelectorAll('[spellcheck="false"]').forEach(e => e.spellcheck = true);
}

chrome.contextMenus.onClicked.addListener((item, tab) => {
  if (item.menuItemId === 'primary-enable') {
    chrome.scripting.executeScript({
      target: { allFrames: true, tabId: tab.id },
      func: findAndEnable
    })
  }
})
