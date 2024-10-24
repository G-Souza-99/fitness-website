// src/data/services.ts

import onlineTrainingImage from '../assets/images/online-training.jpg';
import onsiteRiseupImage from '../assets/images/onsite-riseup.jpg';
import outdoorTrainingImage from '../assets/images/outdoor-training.jpg';
import atClientsHousesImage from '../assets/images/at-client-houses.jpg';
import groupTrainingImage from '../assets/images/group-training.jpg'

export interface Service {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  {
    id: 1,
    name: 'Online Training',
    slug: 'online-training',
    description: 'Personalized online training sessions tailored to your goals and schedule.',
    image: onlineTrainingImage,
  },
  {
    id: 2,
    name: 'Onsite at RiseUp',
    slug: 'onsite-at-riseup',
    description: 'One-on-one training sessions at RiseUp gym with professional equipment.',
    image: onsiteRiseupImage,
  },
  {
    id: 3,
    name: 'Outdoor Training',
    slug: 'outdoor-training',
    description: 'Engaging outdoor workouts in various locations to keep you motivated.',
    image: outdoorTrainingImage,
  },
  {
    id: 4,
    name: "At Clients' Houses",
    slug: 'at-clients-houses',
    description: 'Convenient training sessions at your home to fit your lifestyle.',
    image: atClientsHousesImage,
  },
  {
    id: 5,
    name: "Group Sessions",
    slug: 'group-sessions',
    description: 'Have a friend group - Start training together now!',
    image: groupTrainingImage,
  },
];
