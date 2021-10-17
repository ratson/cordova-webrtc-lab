export const mediaUrls = [
  "https://demo.twilio.com/docs/classic.mp3",
  "https://github.com/crossle/AppRTCMobile/raw/master/webrtc/ios/resources/mozart.mp3",
];

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
