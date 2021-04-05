const domain = 'http://api.liber.local:3002'; // eslint-disable-line

const VENDORS = '/api/v1/admin/vendors';

export const VENDOR_BORDERO_SHOW_URL = `${domain}/api/v1/fornecedor/adiantamentos`;
export const VENDOR_BORDERO_INVOICES_URL = `${domain}/api/v1/fornecedor/adiantamentos/:id/titulos`;
export const CANCEL_PAGE_URL = `/fornecedor/antecipacoes/cancel`;
export const ADMIN_VENDOR_BORDERO_SHOW_URL = `${domain}${VENDORS}/:id/anticipations/:bordero_id`;
export const ADMIN_VENDOR_BORDERO_INVOICES_URL = `${domain}${VENDORS}/:id/anticipations/:bordero_id/invoices`;
