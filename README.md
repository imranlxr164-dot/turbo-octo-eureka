# YouTube Link Toolkit

एक mobile-friendly HTML/CSS/JavaScript starter website, जिसे GitHub Pages पर मुफ्त में host किया जा सकता है।

## Features
- YouTube Long Video और Shorts URL पहचानता है।
- वीडियो का embedded preview दिखाता है।
- Original YouTube link खोलने और कॉपी करने का विकल्प।
- Hindi में अपने अपलोड किए वीडियो को डाउनलोड करने के आधिकारिक तरीकों की जानकारी।
- Mobile responsive dark UI.

## जरूरी बात
यह प्रोजेक्ट किसी भी YouTube वीडियो की फ़ाइल डाउनलोड करने वाला downloader नहीं है। YouTube वीडियो को सीधे डाउनलोड करना प्लेटफ़ॉर्म की शर्तों या कॉपीराइट से टकरा सकता है। अपने अपलोड किए वीडियो के लिए YouTube Studio या Google Takeout का उपयोग करें। यह वेबसाइट किसी भी वीडियो की उपलब्धता/preview की गारंटी नहीं देती।

## GitHub Pages पर चलाने के चरण (मोबाइल से भी)
1. GitHub पर sign in करें और **New repository** चुनें।
2. Repository का नाम रखें, जैसे `youtube-link-toolkit`, और Public चुनें।
3. इस ZIP की files extract करें।
4. `index.html`, `style.css`, `script.js`, और `README.md` को repository में upload करें।
5. Repository में **Settings → Pages** खोलें।
6. **Deploy from a branch** चुनें, branch `main` और folder `/ (root)` चुनें, फिर Save करें।
7. GitHub कुछ मिनट में वेबसाइट का URL दिखाएगा, आम तौर पर `https://USERNAME.github.io/REPOSITORY/` जैसा।

## Files
- `index.html` — page structure
- `style.css` — design and responsive layout
- `script.js` — YouTube URL parsing and preview
- `README.md` — setup guide

## Privacy
यह starter कोई URL server पर भेजता नहीं है। वीडियो preview YouTube embed से आता है।
