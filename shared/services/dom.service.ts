export function prepareRoot() {
  const root = document.getElementById("root")!;

  root.style.setProperty(
    "background-color",
    "var(--react-lavka-color-background)"
  );

  return Promise.resolve(root);
}

export function addLoaderToElement(element: Element) {
  const loader = document.createElement("div");
  loader.innerHTML = `<div class="spinner"></div>`;
  loader.style.cssText = `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
  const style = document.createElement("style");
  style.innerHTML = `
.spinner {
  border: 6px solid #e0e0e0;
  border-top: 6px solid #000000;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`;
  document.head.appendChild(style);
  element.appendChild(loader);
  return loader;
}

export function getImageUrl(url: string, size: number) {
  return url.replace("{w}", `${size}`).replace("{h}", `${size}`);
}
