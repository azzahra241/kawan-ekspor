import os
from flask import Flask, render_template, request, jsonify
import google.generativeai as genai
from PIL import Image
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__, template_folder='.')

GENAI_API_KEY = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=GENAI_API_KEY)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate', methods=['POST'])
def generate_catalog():
    if 'product_image' not in request.files:
        return jsonify({'error': 'Tidak ada file gambar yang diunggah'}), 400
    
    file = request.files['product_image']
    target_country = request.form.get('target_country', 'Amerika Serikat')
    product_name = request.form.get('product_name', 'Produk UMKM')

    if file.filename == '':
        return jsonify({'error': 'File belum dipilih'}), 400

    try:
        image = Image.open(file.stream)

        model = genai.GenerativeModel('gemini-2.5-flash')

        prompt = f"""
        Kamu adalah seorang pakar ekspor internasional dan digital marketer handal. 
        Analisis foto produk berikut yang bernama "{product_name}".
        
        Buatlah laporan komprehensif untuk target pasar negara: {target_country} dengan struktur sebagai berikut:
        
        1. STRATEGI PEMASARAN & KATALOG (LOKALISASI KULTUR)
           - Buat deskripsi katalog promosi yang memikat menggunakan bahasa resmi atau gaya pemasaran yang sangat disukai di {target_country}.
           - Sesuaikan dengan preferensi budaya (cultural nuances) pembeli di sana.
           - Tonjolkan keunikan produk (handmade, bahan alami, atau nilai autentik).
        
        2. KESIAPSIAGAAN & MITIGASI RISIKO BISNIS (LOGISTIK EKSPOR)
           - Berikan analisis singkat mengenai potensi risiko atau disrupsi pengiriman ke {target_country} (misal: regulasi ketat, suhu selama pengapalan, atau ketahanan kemasan).
           - Berikan langkah kesiapsiagaan/mitigasi konkret untuk UMKM ini agar produknya tetap aman dan lolos standar bea cukai negara tujuan.
        
        3. HASHTAG GLOBAL
           - Berikan 5 rekomendasi hashtag global yang relevan.
        """
        
        response = model.generate_content([prompt, image])
        
        return jsonify({'result': response.text})

    except Exception as e:
        return jsonify({'error': f'Terjadi kesalahan server: {str(e)}'}), 500

if __name__ == '__main__':
    app.run(debug=True)