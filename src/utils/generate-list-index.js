export function generateListIndex(pages) {
  console.log(pages);
  let retval = createListOfChildren(pages);
  return retval;
}

function createListOfChildren(arr, dirDelete = "public/", idx = 2) {
  if (!arr.children) return;
  const ul = document.createElement("ul");
  ul.classList.add(`level-${idx - 1}`);
  for (let child of arr.children) {
    if (idx > 2 || child.type === "directory") {
      const li = document.createElement("li");
      li.innerHTML =
        child.type === "file"
          ? `<p>${getRaw(child)} | ${getIframe(child)}</p>`
          : `<h${idx}>${child.path.replace(
              dirDelete,
              ""
            )}</h${idx}>${createListOfChildren(
              child,
              child.path + "/",
              idx + 1
            )}`;
      ul.append(li);
    }
  }

  return ul.outerHTML;
}

function getIframe(graphic) {
  let publicPath = graphic.path.replace("public/", "");
  if (!graphic.extension) publicPath += "/index.html";

  const iframePath = new URL("http://localhost:5000");
  iframePath.searchParams.set("embed", publicPath);
  iframePath.searchParams.set("pageTitle", graphic.name);

  const iframe = document.createElement("a");
  iframe.setAttribute("target", "_blank");
  iframe.setAttribute("rel", "noopener noreferrer");
  iframe.setAttribute("href", iframePath);
  iframe.innerHTML = "iframe";

  return iframe.outerHTML;
}

function getRaw(graphic) {
  let publicPath = graphic.path.replace("public/", "");
  if (!graphic.extension) publicPath += "/index.html";

  const rawPath = new URL(publicPath, "http://localhost:5000");
  const raw = document.createElement("a");
  raw.setAttribute("target", "_blank");
  raw.setAttribute("rel", "noopener noreferrer");
  raw.setAttribute("href", rawPath);
  raw.innerHTML = "raw";
  return raw.outerHTML;
}
