# 🌍 KawanEkspor - Platform Analisis Produk Ekspor UMKM Berbasis AI

KawanEkspor adalah sebuah aplikasi web *Minimum Viable Product* (MVP) inovatif yang dirancang khusus sebagai solusi digital bagi para pelaku Usaha Mikro, Kecil, dan Menengah (UMKM) di Indonesia. Banyak pelaku UMKM lokal yang memiliki produk berkualitas tinggi namun menghadapi tembok besar ketika ingin menembus pasar internasional—mulai dari ketidaktahuan regulasi, kesulitan memetakan negara tujuan yang tepat, hingga kurangnya persiapan mitigasi risiko logistik.

Aplikasi ini hadir untuk menjembatani jurang tersebut. Dengan memanfaatkan kecerdasan buatan (*Generative AI*) berbasis multimodal, KawanEkspor bertindak sebagai konsultan ekspor virtual pintar yang mampu melakukan validasi instan, menganalisis kesiapan produk, dan merumuskan strategi pemasaran global hanya melalui modal foto produk dan input sederhana dari pengguna.

---

## 🎯 Latar Belakang & Solusi Inovatif

Proses kurasi ekspor konvensional biasanya membutuhkan waktu lama, biaya konsultan yang mahal, dan pemahaman dokumen yang rumit. KawanEkspor mendemokratisasi proses tersebut menjadi lebih inklusif dan cepat. 

Melalui integrasi kecerdasan buatan, platform ini memberikan solusi tiga pilar utama bagi UMKM:
1.  **Validasi Visual Otomatis:** Menilai apakah kemasan dan tampilan fisik produk sudah memenuhi standar estetika dan segmentasi pasar internasional.
2.  **Intelijen Pasar Terarah:** Menghilangkan proses riset manual yang melelahkan dengan langsung menembak target negara potensial yang memiliki kecocokan tinggi dengan jenis produk.
3.  **Strategi Pemasaran & Keamanan:** Membantu produk langsung *go digital* di kancah global lewat rekomendasi tagar tren sekaligus mengamankan jalur distribusi lewat pemetaan risiko logistik sejak dini.

---

## 🚀 Penjelasan Detail Fitur Utama Website

KawanEkspor dilengkapi dengan empat fitur analisis komprehensif yang bekerja secara simultan untuk menghasilkan dokumen *Export Readiness Report*:

### 1. Analisis Visual & Kesiapan Produk Berbasis AI
Fitur ini memanfaatkan kemampuan *Computer Vision* dari AI untuk membedah foto produk yang diunggah pengguna. AI akan memindai estetika kemasan, keterbacaan label, higienitas visual, serta daya tarik produk di mata konsumen global. Output-nya memberikan penilaian objektif apakah produk siap dikirim sekarang atau memerlukan peningkatan pada sisi desain kemasan.

### 2. Rekomendasi Negara Tujuan Ekspor Strategis
Bukan sekadar menebak, AI akan menganalisis kecocokan budaya, tren konsumsi, dan daya beli masyarakat di berbagai negara untuk produk spesifik tersebut. Fitur ini akan memunculkan rekomendasi negara target (misalnya negara-negara di Eropa atau Asia Tenggara) lengkap dengan alasan logis mengapa produk tersebut memiliki peluang cuan besar di sana.

### 3. Kesiapsiagaan & Mitigasi Risiko Logistik Bisnis
Pengiriman lintas negara penuh dengan ketidakpastian, mulai dari regulasi bea cukai yang ketat, isu pembusukan produk di laut, hingga disrupsi rantai pasok global. Fitur ini memetakan potensi hambatan spesifik untuk negara tujuan terpilih dan memberikan langkah mitigasi taktis yang harus dipersiapkan oleh pelaku UMKM agar terhindar dari kerugian besar.

### 4. Generator Hashtag Global untuk Pemasaran Digital
Untuk membantu UMKM memasarkan produknya secara digital, fitur ini menghasilkan 5 hashtag global yang paling relevan dan memiliki volume pencarian tinggi di media sosial internasional. Setiap hashtag dilengkapi dengan penjelasan strategisnya, memudahkan produk UMKM ditemukan oleh calon pembeli (*buyer*) luar negeri saat promosi digital dijalankan.

---

## 💻 Pengalaman Pengguna (UI/UX) & Optimasi Antarmuka

Selain kecerdasan fiturnya, KawanEkspor dirancang dengan fokus tinggi pada kenyamanan pengguna (*User Experience*):
*   **Tailwind CSS Responsive Engine:** Antarmuka web dijamin sangat adaptif dan proporsional saat diakses, baik melalui laptop, tablet, hingga layar *smartphone* berukuran kecil.
*   **Sistem Parser Teks Dinamis:** Format keluaran (*output*) dari AI yang biasanya berantakan telah dioptimalkan menggunakan fungsi penataan berbasis JavaScript. Teks Markdown diubah menjadi elemen HTML yang bersih, rapat, presisi, dan bebas dari spasi berlebih.
*   **Dual Theme Support:** Menyediakan mode terang (*Light Mode*) dan mode gelap (*Dark Mode*) yang nyaman di mata untuk penggunaan durasi lama.
*   **Custom Dropdown Navigation:** Menu interaktif yang mulus untuk mempermudah pemilihan opsi tanpa merusak tata letak visual halaman web.

---

## 🛠️ Spesifikasi Teknologi Backend & AI

Secara teknis, efisiensi KawanEkspor disokong oleh ekosistem teknologi backend yang ramping namun bertenaga:
*   **Core Engine:** Python Flask sebagai penggerak utama rute server dan manajemen *request-response* API.
*   **AI Model:** Integrasi Gemini API (`gemini-2.5-flash`) yang mendukung *Multimodal Input* untuk memproses kombinasi gambar dan teks secara bersamaan dengan waktu latensi yang sangat rendah.
*   **Security Best Practice:** Pemisahan kredensial menggunakan *Environment Variables* (`.env`) yang diisolasi ketat dari pelacakan repositori publik demi keamanan tingkat tinggi.
