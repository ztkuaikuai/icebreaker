const CACHE_NAME = 'icebreaker-cache-v1';

// 预缓存的资源列表
const urlsToCache = [
  '/',
  '/manifest.json',
  '/icebreaker_icon_192px.png',
  '/icebreaker_icon_512px.png',
  '/window.svg',
  '/next.svg',
  '/vercel.svg',
  '/file.svg',
  '/globe.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache.map(url => new Request(url, {mode: 'no-cors'})));
      })
      .catch((error) => {
        console.error('Cache addAll error:', error);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // 如果找到缓存的响应，则返回缓存
        if (response) {
          return response;
        }

        // 克隆请求，因为请求是一个流，只能使用一次
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest)
          .then((response) => {
            // 检查是否是有效的响应
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // 克隆响应，因为响应是一个流，只能使用一次
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          });
      })
  );
}); 