
export function getUrlKey(name) {
  return (
    decodeURIComponent(
      (new RegExp(`[?|&]${name}=([^&;]+?)(&|#|;|$)`).exec(
        location.href,
      ) || ['', ''])[1].replace(/\+/g, '%20'),
    ) || null
  );
}

/**
 * @desc: 深拷贝
 */
export function deepClone(val) {
  return JSON.parse(JSON.stringify(val));
}
