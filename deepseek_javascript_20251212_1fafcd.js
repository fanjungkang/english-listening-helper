// API 配置檔案
const config = {
    // AssemblyAI 語音辨識 API（免費申請）
    ASSEMBLYAI_API_KEY: '您的_API_金鑰_放這裡',
    
    // Google 翻譯 API（可選）
    GOOGLE_TRANSLATE_API_KEY: '',
    
    // 應用設定
    MAX_FILE_SIZE: 50 * 1024 * 1024, // 50MB
    MAX_AUDIO_LENGTH: 20 * 60, // 20分鐘
    
    // 功能開關
    ENABLE_TRANSLATION: true,
    ENABLE_TIMESTAMPS: true
};

// 免費 API 申請連結
const API_LINKS = {
    AssemblyAI: 'https://www.assemblyai.com/dashboard/signup',
    GoogleCloud: 'https://console.cloud.google.com/apis/credentials'
};

// 顯示配置狀態
console.log('聽力助手配置已加載');
console.log('需要申請免費API金鑰以獲得完整功能');
console.log('申請連結：', API_LINKS);