import axios from 'axios';

/**
 * HTTP client configuration with proper axios interceptors
 * 
 * This file demonstrates the CORRECTED version of the axios interceptor
 * that was provided in the problem statement. The original code had several issues:
 * 
 * ISSUES IN ORIGINAL CODE:
 * 1. Access-Control-Allow-Origin is a SERVER response header, not a client request header
 * 2. TypeScript-specific ESLint comments in a JavaScript project
 * 3. Overly complex header manipulation logic
 * 4. Content-Type with wildcard is wrong - wildcards are for Accept headers, not Content-Type
 * 5. No error handling or response interceptors
 */

// Create axios instance with base configuration
const httpClient = axios.create({
  timeout: 10000, // 10 second timeout
  headers: {
    'Accept': '*/*', // Accept any content type from server
  },
});

/**
 * CORRECTED Request Interceptor
 * - Removed incorrect CORS headers (these are server-response headers)
 * - Simplified header logic
 * - Set appropriate default Content-Type for JSON APIs
 * - Removed inappropriate TypeScript comments
 */
httpClient.interceptors.request.use(
  (config) => {
    // Set default Content-Type for requests that don't have one
    // Only set if there's data to send and no Content-Type is already set
    if (config.data && !config.headers['Content-Type']) {
      config.headers['Content-Type'] = 'application/json';
    }
    
    // Log requests in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`Making ${config.method?.toUpperCase()} request to ${config.url}`);
    }
    
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

/**
 * Response Interceptor for handling responses and errors consistently
 */
httpClient.interceptors.response.use(
  (response) => {
    // Log successful responses in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`Response received:`, response.status, response.statusText);
    }
    return response;
  },
  (error) => {
    // Handle different types of errors
    if (error.response) {
      // Server responded with error status
      console.error(`HTTP Error ${error.response.status}:`, error.response.data);
    } else if (error.request) {
      // Request was made but no response received (network error)
      console.error('Network error - no response received');
    } else {
      // Something else happened
      console.error('Request setup error:', error.message);
    }
    
    return Promise.reject(error);
  }
);

export default httpClient;

// COMPARISON WITH ORIGINAL CODE:
// 
// ORIGINAL (INCORRECT):
// The original code set Access-Control-Allow-Origin as a request header (wrong - it's a server header)
// It used TypeScript comments in a JavaScript project
// It had overly complex header manipulation logic
// It used wildcard Content-Type which is incorrect usage
// 
// CORRECTED:
// - Removed Access-Control-Allow-Origin (server header)
// - Fixed Content-Type to use appropriate value (application/json)
// - Simplified conditional logic
// - Added proper error handling
// - Added development logging
// - Added response interceptor