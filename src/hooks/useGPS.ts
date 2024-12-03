import { useEffect, useState } from 'react';

import { calculateDistance } from '@/lib/utils';

const TARGET_LOCATION = {
  latitude: -26.8072702,
  longitude: -65.3210582,
};

const RADIUS_IN_KM = 1.5;

const useGPS = (disabled = false) => {
  const [isNear, setIsNear] = useState<boolean | null>(null);
  const [hasAccepted, setHasAccepted] = useState<boolean>(false);
  const [hasRejected, setHasRejected] = useState<boolean>(false);

  useEffect(() => {
    // Check if user has accepted location permissions
    if (!navigator.geolocation) {
      console.error('Geolocation is not supported');
      return;
    }

    navigator.permissions
      .query({ name: 'geolocation' })
      .then((permissionStatus) => {
        setHasAccepted(permissionStatus.state === 'granted');
      });

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLatitude = position.coords.latitude;
        const userLongitude = position.coords.longitude;

        const distance = calculateDistance(
          userLatitude,
          userLongitude,
          TARGET_LOCATION.latitude,
          TARGET_LOCATION.longitude
        );

        setHasAccepted(true);
        setIsNear(distance <= RADIUS_IN_KM);
      },
      (error) => {
        if (error.message === 'User denied Geolocation') {
          setHasRejected(true);
        }
        console.error('Error getting location:', error);
        setIsNear(null); // Handle error case
      }
    );
  }, []);

  if (disabled) {
    return { isNear: true, hasAccepted: true, hasRejected: false };
  }

  return { hasAccepted, isNear, hasRejected };
};
export default useGPS;
