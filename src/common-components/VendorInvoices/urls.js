const domain = 'http://api.liber.local:3002'; // eslint-disable-line
export const wsDomain = WS_DOMAIN; // eslint-disable-line

export const INVOICES_URL = `${domain}/api/v1/fornecedor/titulos`;
export const INVOICES_QUOTE_ALL_URL = `${domain}/api/v1/fornecedor/titulos/quote_all`;
export const INVOICES_QUOTE_URL = `${domain}/api/v1/fornecedor/titulos/quote`;
export const INVOICES_BANK_ACCOUNTS_URL = `${domain}/api/v1/fornecedor/contas_bancarias`;
export const INVOICES_REQUEST_ANTICIPATION_URL = `${domain}/api/v1/fornecedor/titulos/anticipate_invoices`;
export const INVOICES_REQUEST_DOWNLOAD_URL = `${domain}/api/v1/fornecedor/reports/invoices_simulation`;
export const INVOICES_NEGOTIATIONS_URL = `${domain}/api/v1/fornecedor/titulos/negotiations`;
export const INVOICES_ACTION_CABLE_URL = `${wsDomain}/cable`;
export const INVOICES_ACTION_CABLE_CHANNEL = 'FornecedorScheduleBatchInvoicesChannel';
export const INVOICES_ACTION_CABLE_ROOM = 'fornecedor_schedule_batch_invoices_channel_';
export const ADMIN_INVOICES_URL = `${domain}/api/v1/admin/vendors/:id/invoices`;
export const VENDOR_ANTICIPATION_LIMITS_URL = `${domain}/api/v1/fornecedor/anticipation_limits`;
