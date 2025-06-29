export function getImageUrl(url: string, size: number) {
  return url.replace("{w}", `${size}`).replace("{h}", `${size}`);
}
