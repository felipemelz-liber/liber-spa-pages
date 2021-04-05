import axios from 'axios';

import { convertToCamelCase } from '../../../../vendor/Utils';
import { VENDOR_ANTICIPATION_LIMITS_URL } from '../../urls';

export async function getAnticipationLimit(token) {
  const response = await axios
    .get(VENDOR_ANTICIPATION_LIMITS_URL, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch(() => null);

  return convertToCamelCase(response?.data)?.anticipationLimit;
}
