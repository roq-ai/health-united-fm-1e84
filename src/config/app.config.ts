interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Hospital Administrator'],
  customerRoles: ['Customer'],
  tenantRoles: ['Patient', 'Hospital Administrator', 'Medical Staff', 'Data Analyst', 'System Administrator'],
  tenantName: 'Hospital',
  applicationName: 'Health United FMS',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
