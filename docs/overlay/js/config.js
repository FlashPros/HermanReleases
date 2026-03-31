const CONFIG = {
    // WebSocket connection settings
    WS_LOCAL_PORTS: [1337, 1338],  // Local development ports
    WS_LOCAL_HOST: 'localhost',     // Local development host
    WS_DEFAULT_TOKEN: 'Hermanapitest',  // Default token
    
    // Display settings
    DISPLAY_DURATION: 8000,    // 8 seconds
    HIDE_DURATION: 1500,       // 1.5 seconds
    COMPLETE_CYCLE_PAUSE: 900000,  // 15 minutes pause between cycles
    
    // Connection settings
    USE_SSL: true,  // Set to true when using HTTPS
    RETRY_INTERVAL: 5000,  // 5 seconds between retries
    MAX_RETRIES: 5  // Maximum number of reconnection attempts
}; 
