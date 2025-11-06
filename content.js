document.title = "Britannica school"

let link = document.querySelector("link~=[rel='icon']");

if (!link) {
  link = document.createElement("link");
  link.rel = "icon";
  document.getElementsByTagName("head").appendChild(link);

link.href = "
