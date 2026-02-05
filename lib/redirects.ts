type RedirectEntry = {
  source: string;
  destination: string;
  permanent: boolean;
};

export const redirects: RedirectEntry[] = [
  {
    source: '/services/garage-door-repair/garage-door-not-opening',
    destination: '/services/garage-door-repair/garage-door-not-opening-or-stuck',
    permanent: true
  },
  {
    source: '/services/residential-locksmith-services/lockout',
    destination: '/services/residential-locksmith-services/home-and-apartment-lockouts',
    permanent: true
  }
];
