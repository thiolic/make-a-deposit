import httpClient from './http-client.js';

/**
 * API service for deposit-related operations
 * Demonstrates proper usage of the corrected axios interceptor
 */

/**
 * Process a deposit request
 * @param {Object} depositData - Deposit information
 * @param {string} depositData.paymentMethod - Payment method type
 * @param {number} depositData.amount - Amount to deposit
 * @param {string} depositData.currency - Currency code
 * @param {string} [depositData.promoCode] - Optional promo code
 * @returns {Promise<Object>} Deposit result
 */
export const processDeposit = async (depositData) => {
  try {
    const response = await httpClient.post('/api/deposits', depositData);
    return response.data;
  } catch (error) {
    // Error handling is already done in the interceptor
    throw error;
  }
};

/**
 * Get user balance
 * @returns {Promise<Object>} User balance information
 */
export const getUserBalance = async () => {
  try {
    const response = await httpClient.get('/api/user/balance');
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Get transaction history
 * @param {Object} options - Query options
 * @param {number} [options.limit=10] - Number of transactions to fetch
 * @param {number} [options.offset=0] - Offset for pagination
 * @returns {Promise<Object>} Transaction history
 */
export const getTransactionHistory = async (options = {}) => {
  try {
    const { limit = 10, offset = 0 } = options;
    const response = await httpClient.get(`/api/transactions?limit=${limit}&offset=${offset}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Validate promo code
 * @param {string} promoCode - Promo code to validate
 * @returns {Promise<Object>} Promo code validation result
 */
export const validatePromoCode = async (promoCode) => {
  try {
    const response = await httpClient.post('/api/promo/validate', { code: promoCode });
    return response.data;
  } catch (error) {
    throw error;
  }
};