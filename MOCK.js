export const RENT_PAYMENT = 'RENT_PAYMENT';
export const RENTER_INSURANCE = 'RENTER_INSURANCE';
export const WASH_DRY_FOLD = 'WASH_DRY_FOLD';
export const EV_CHARGING = 'EV_CHARGING';
export const GUEST_PASSES = 'GUEST_PASSES';

export const MOCK_DATA = [
  {
    type: RENT_PAYMENT,
    title: 'Rent Payments',
    description: 'Set automatic payments',
    values: {},
  },
  {
    type: RENTER_INSURANCE,
    title: 'Renters Insurance',
    description: 'Get a free quote',
    values: {},
  },
  {
    type: WASH_DRY_FOLD,
    title: 'Wash Dry Fold',
    description: 'Schedule a pickup',
    values: {},
  },
  {
    type: EV_CHARGING,
    title: 'EV Charging',
    description: 'Charge vehicle',
    values: {},
  },
  {
    type: GUEST_PASSES,
    title: 'Guest Passes',
    description: 'Grant building access',
    values: {},
  },
];

export const USER_DATA = {
  firstName: 'Jason',
  lastName: 'Jasonson',
  unit: '101',
};

export const ACTIVE_GUEST_PASSES = [
  {
    type: GUEST_PASSES,
    title: 'Guest Passes',
    value: [
      {
        name: 'DoorDash',
        expires: '2025-01-04',
        id: '1111',
      },
    ],
  },
  {
    type: GUEST_PASSES,
    title: 'Guest Passes',
    value: [
      {
        name: 'Mike B.',
        expires: '2024-07-02',
        id: '2222',
      },
    ],
  },
];
