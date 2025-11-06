setTimeout(() => {
  document.title = "Britannica school";
}, 1000)

let link = document.querySelector("link[rel~='icon']");

if (!link) {
  link = document.createElement("link");
  link.rel = "icon";
  document.getElementsByTagName("head")[0].appendChild(link);
}

link.href = chrome.runtime.getURL("output-onlinepngtools.png");
