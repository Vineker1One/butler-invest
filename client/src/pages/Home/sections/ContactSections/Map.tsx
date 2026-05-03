import { useEffect, useRef, memo } from 'react';

// Типизация для window.ymaps
declare global {
  interface Window {
    ymaps: any;
  }
}

const SERVICE_COORDINATES = [47.237224221885505, 39.74008750793388];

// Глобальная переменная для отслеживания экземпляра карты
let globalMapInstance: any = null;

const MapComponent = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;
    let map: any = null;

    // Функция инициализации карты
    const initMap = () => {
      if (!isMounted || !mapRef.current || globalMapInstance) return;

      window.ymaps.ready(() => {
        if (!isMounted || globalMapInstance) return;

        map = new window.ymaps.Map(mapRef.current, {
          center: SERVICE_COORDINATES,
          zoom: 17,
          controls: ['zoomControl'],
        });

        const placemark = new window.ymaps.Placemark(
          SERVICE_COORDINATES,
          {
            balloonContent: `
              <div style="padding: 10px; font-family: sans-serif;">
                <strong style="display: block; margin-bottom: 8px;">Мы здесь</strong>
                <p style="margin: 0; font-size: 14px; line-height: 1.4;">
                  Ростов-на-Дону,<br>
                  пер. Энергетиков 1а/5,<br>
                  ТК «Рубин», павильон 21/2
                </p>
              </div>
            `,
            hintContent: "Мы здесь",
          },
          {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#8a9a6d',
          }
        );

        map.geoObjects.add(placemark);
        globalMapInstance = map;
      });
    };

    // Если скрипт уже загружен
    if (window.ymaps) {
      initMap();
    } else {
      // Загружаем скрипт
      const script = document.createElement('script');
      script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
      script.async = true;
      script.onload = initMap;
      document.head.appendChild(script);
    }

    // Cleanup - ВАЖНО!
    return () => {
      isMounted = false;
      if (map) {
        map.destroy();
        map = null;
      }
      // Не очищаем globalMapInstance сразу, даем время на cleanup
      setTimeout(() => {
        if (globalMapInstance) {
          globalMapInstance.destroy();
          globalMapInstance = null;
        }
      }, 100);
    };
  }, []);

  return (
    <div 
      ref={mapRef}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '400px',
        borderRadius: '1rem',
        overflow: 'hidden',
      }}
    />
  );
};

// Оборачиваем в React.memo
export default memo(MapComponent);