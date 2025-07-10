<template>
  <section class="about-wrapper">
    <div class="about-content">
      <h2 class="about-title">Siapa Kami?</h2>
      <p class="about-subtitle">
       Kami adalah tim yang berdedikasi untuk menyediakan ponsel berkualitas dan layanan terbaik bagi pelanggan kami.
      </p>

      <div class="about-grid">
        <div class="about-item">
          <img src="@/assets/icons/verified.png" alt="Terpercaya" class="icon" />
          <h3>Terpercaya Sejak 2025</h3>
          <p>
            Kami telah melayani ribuan pelanggan di seluruh Indonesia dengan pelayanan terbaik dan cepat.
          </p>
        </div>
        <div class="about-item">
          <img src="@/assets/icons/quality.png" alt="Kualitas Produk" class="icon" />
          <h3>Produk Berkualitas</h3>
          <p>
            Semua produk kami telah melewati proses quality control untuk menjamin keaslian dan kualitas.
          </p>
        </div>
        <div class="about-item">
          <img src="@/assets/icons/support.png" alt="Support 24/7" class="icon" />
          <h3>Dukungan Pelanggan</h3>
          <p>
            Tim support kami siap membantu Anda 24/7, karena kepuasan Anda adalah prioritas kami.
          </p>
        </div>
      </div>

      <div class="about-closing">
        <p>
          Terima kasih telah memilih <strong>Kubang Store</strong> sebagai partner belanja smartphone online Anda.  
          Kami akan terus berinovasi untuk memberikan pengalaman belanja terbaik, cepat, aman, dan menyenangkan!
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>

<style scoped>
.about-wrapper {
  background: linear-gradient(to bottom right, #ffffff, #f2f8ff);
  padding: 5rem 2rem;
  display: flex;
  justify-content: center;
  font-family: 'Segoe UI', sans-serif;
}

.about-content {
  max-width: 1000px;
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
  animation: fadeIn 0.6s ease-in-out;
}

.about-title {
  font-size: 2.5rem;
  text-align: center;
  color: #007b8a;
  margin-bottom: 0.5rem;
}

.about-subtitle {
  text-align: center;
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 2rem;
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.about-item {
  background: #f9f9fb;
  padding: 1.5rem;
  border-radius: 14px;
  text-align: center;
  transition: 0.3s ease;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.03);
}

.about-item:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.07);
}

.icon {
  width: 60px;
  height: 60px;
  margin-bottom: 1rem;
}

.about-item h3 {
  color: #007b8a;
  margin-bottom: 0.5rem;
  font-size: 1.15rem;
}

.about-item p {
  color: #555;
  font-size: 0.95rem;
  line-height: 1.6;
}

.about-closing {
  text-align: center;
  font-size: 1.05rem;
  color: #333;
  background: #e8f4ff;
  padding: 1.5rem;
  border-radius: 12px;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
