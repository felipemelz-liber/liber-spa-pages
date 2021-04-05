const domain = 'http://api.liber.local:3002'; // eslint-disable-line
export const wsDomain = WS_DOMAIN; // eslint-disable-line

export const NEGOTIATIONS_URL = `${domain}/api/v1/fornecedor/negociacoes`;
export const ADVANCES_URL = `${domain}/api/v1/fornecedor/adiantamentos`;
export const SETUP_DOCUMENTS_URL = `${ADVANCES_URL}/setup_documents`;
export const SIGN_DOCUMENTS_URL = `${ADVANCES_URL}/sign`;
export const CANCEL_PAGE_URL = `/fornecedor/antecipacoes/cancel`;
export const ADVANCES_ACTION_CABLE_CHANNEL = 'LiberSignSignatureChannel';
export const ADVANCES_ACTION_CABLE_ROOM = 'liber_sign_signature_channel_';
export const ADMIN_ADVANCES_URL = `${domain}/api/v1/admin/vendors/:id/anticipations`;
