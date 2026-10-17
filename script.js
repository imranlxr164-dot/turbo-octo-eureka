const urlInput = document.getElementById('videoUrl');
const checkBtn = document.getElementById('checkBtn');
const message = document.getElementById('message');
const result = document.getElementById('result');
const videoType = document.getElementById('videoType');
const videoIdText = document.getElementById('videoId');
const preview = document.getElementById('preview');
const openLink = document.getElementById('openLink');
const shortsLink = document.getElementById('shortsLink');
const copyBtn = document.getElementById('copyBtn');

function parseYouTubeUrl(raw) {
  let url;
  try { url = new URL(raw.trim()); } catch { return null; }
  const host = url.hostname.toLowerCase().replace(/^www\./, '').replace(/^m\./, '');
  if (!['youtube.com', 'youtube-nocookie.com', 'youtu.be'].includes(host)) return null;

  let id = '';
  let isShort = false;
  if (host === 'youtu.be') {
    id = url.pathname.split('/').filter(Boolean)[0] || '';
  } else {
    const parts = url.pathname.split('/').filter(Boolean);
    if (parts[0] === 'watch') id = url.searchParams.get('v') || '';
    else if (['shorts', 'embed', 'live', 'v'].includes(parts[0])) {
      id = parts[1] || '';
      isShort = parts[0] === 'shorts';
    }
  }
  if (!/^[A-Za-z0-9_-]{11}$/.test(id)) return null;
  return { id, isShort, canonical: `https://www.youtube.com/watch?v=${id}` };
}

function checkLink() {
  const parsed = parseYouTubeUrl(urlInput.value);
  if (!parsed) {
    result.classList.add('hidden');
    message.textContent = 'सही YouTube Long Video या Shorts लिंक डालें।';
    return;
  }
  message.textContent = '';
  result.classList.remove('hidden');
  videoType.textContent = parsed.isShort ? 'YouTube Short' : 'YouTube Video';
  videoIdText.textContent = `Video ID: ${parsed.id}`;
  preview.src = `https://www.youtube-nocookie.com/embed/${parsed.id}`;
  openLink.href = parsed.canonical;
  shortsLink.href = parsed.isShort
    ? `https://www.youtube.com/shorts/${parsed.id}`
    : parsed.canonical;
  shortsLink.textContent = parsed.isShort ? 'Shorts लिंक खोलें ↗' : 'वीडियो लिंक खोलें ↗';
  result.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

checkBtn.addEventListener('click', checkLink);
urlInput.addEventListener('keydown', e => { if (e.key === 'Enter') checkLink(); });
copyBtn.addEventListener('click', async () => {
  if (!openLink.href || openLink.href.endsWith('#')) return;
  try {
    await navigator.clipboard.writeText(openLink.href);
    copyBtn.textContent = 'कॉपी हो गया ✓';
    setTimeout(() => copyBtn.textContent = 'लिंक कॉपी करें', 1600);
  } catch {
    message.textContent = 'कॉपी नहीं हो पाया—लिंक को YouTube पर खोलकर कॉपी करें।';
  }
});
