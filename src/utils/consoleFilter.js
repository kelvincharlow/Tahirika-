// Suppress known external errors that are not related to our application
const originalConsoleError = console.error;

console.error = (...args) => {
  // Filter out known external errors
  const message = args[0];
  
  if (typeof message === 'string') {
    // Suppress CORS errors from browser extensions
    if (message.includes('extensions.aitopia.ai') || 
        message.includes('Access to fetch') ||
        message.includes('Failed to load resource')) {
      return;
    }
    
    // Suppress browser extension related errors
    if (message.includes('enable_copy.js') ||
        message.includes('enable copy content js')) {
      return;
    }
  }
  
  // Log all other errors normally
  originalConsoleError.apply(console, args);
};

// Export for cleanup if needed
export { originalConsoleError };