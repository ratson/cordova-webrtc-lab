export function onHash(m) {
  window.addEventListener(
    "hashchange",
    async () => {
      const { hash } = location;
      const f = m[hash.slice(1)];
      if (f) {
        await f({ hash });
      }
      location.hash = "";
    },
    false,
  );
}
