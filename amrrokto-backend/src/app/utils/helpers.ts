export const bloodGroups = [
  'A_POS', 'A_NEG',
  'B_POS', 'B_NEG',
  'AB_POS', 'AB_NEG',
  'O_POS', 'O_NEG',
] as const;

export const roles = ['DONOR', 'BLOOD_SEEKER', 'ORGANIZATION', 'ADMIN'] as const;

export const organizationTypes = [
  'HOSPITAL',
  'NGO',
  'BLOOD_BANK',
  'VOLUNTEER_GROUP',
] as const;

export const urgencyLevels = ['NORMAL', 'EMERGENCY', 'CRITICAL'] as const;
export const requestStatuses = ['OPEN', 'FULFILLED', 'EXPIRED', 'CANCELLED'] as const;
export const donationStatuses = ['COMMITTED', 'VERIFIED', 'DECLINED'] as const;