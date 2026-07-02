const themeToggleBtn = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlElement.classList.add('dark');
    themeToggleBtn.textContent = '☀️ Mode Terang';
} else {
    htmlElement.classList.remove('dark');
    themeToggleBtn.textContent = '🌙 Mode Gelap';
}

themeToggleBtn.addEventListener('click', () => {
    if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        themeToggleBtn.textContent = '🌙 Mode Gelap';
    } else {
        htmlElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.textContent = '☀️ Mode Terang';
    }
});

function parseMarkdownToHTML(text) {
    if (!text) return '';

    let lines = text.split('\n');
    let htmlOutput = [];
    let inList = false;

    lines.forEach(line => {
        let trimmedLine = line.trim();

        if (trimmedLine === '---' || trimmedLine === '***') {
            htmlOutput.push('<hr class="my-4 border-gray-200 dark:border-gray-700" />');
            return;
        }

        if (trimmedLine.startsWith('#')) {
            let headingText = trimmedLine.replace(/^#+\s*/, '');
            headingText = headingText.replace(/\*\*(.*?)\*\*/g, '$1');
            
            htmlOutput.push(`<h4 class="text-base font-bold text-indigo-600 dark:text-indigo-400 mt-4 mb-1.5">${headingText}</h4>`);
            return;
        }

        if (trimmedLine.startsWith('* ') || trimmedLine.startsWith('- ')) {
            let listText = trimmedLine.substring(2).trim();

            listText = listText.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-gray-950 dark:text-white">$1</strong>');
            
            htmlOutput.push(`<li class="list-disc ml-5 pl-1 my-0.5 text-gray-700 dark:text-gray-200">${listText}</li>`);
            return;
        }

        if (trimmedLine.length > 0) {
            let formattedLine = trimmedLine.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-gray-950 dark:text-white">$1</strong>');
            formattedLine = formattedLine.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');
            
            htmlOutput.push(`<p class="text-gray-700 dark:text-gray-200 my-1">${formattedLine}</p>`);
        }
    });

    return htmlOutput.join('');
}

document.getElementById('uploadForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    
    const submitBtn = document.getElementById('submitBtn');
    const loading = document.getElementById('loading');
    const resultContainer = document.getElementById('resultContainer');
    const resultContent = document.getElementById('resultContent');

    loading.classList.remove('hidden');
    resultContainer.classList.add('hidden');
    submitBtn.disabled = true;
    submitBtn.classList.add('opacity-50');

    try {
        const response = await fetch('/generate', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            resultContent.innerHTML = parseMarkdownToHTML(data.result);
            resultContainer.classList.remove('hidden');
        } else {
            alert(data.error || 'Terjadi kesalahan saat memproses data.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Gagal terhubung ke server backend.');
    } finally {
        loading.classList.add('hidden');
        submitBtn.disabled = false;
        submitBtn.classList.remove('opacity-50');
    }
});