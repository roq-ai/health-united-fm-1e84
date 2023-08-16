const mapping: Record<string, string> = {
  customers: 'customer',
  'data-analysts': 'data_analyst',
  hospitals: 'hospital',
  'medical-staffs': 'medical_staff',
  patients: 'patient',
  'system-administrators': 'system_administrator',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
