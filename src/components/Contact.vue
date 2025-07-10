<template>
  <div class="contact-wrapper">
    <div class="contact-header">
      <h2>Hubungi Kami</h2>
      <p>
        Tim <strong>Kubang Store</strong> siap membantu Anda.<br />
        Jangan ragu untuk menghubungi kami kapan saja!
      </p>
    </div>

    <div class="contact-info">
      <div class="info-item">
        <div class="icon-circle">
          <img :src="emailIcon" alt="Email" />
        </div>
        <div>
          <h4>Email</h4>
          <p>kubangstore@gmail.com</p>
        </div>
      </div>

      <div class="info-item">
        <div class="icon-circle">
          <img :src="phoneIcon" alt="Telepon" />
        </div>
        <div>
          <h4>Telepon</h4>
          <p>+62 812-3456-7899</p>
        </div>
      </div>

      <div class="info-item">
        <div class="icon-circle">
          <img :src="locationIcon" alt="Alamat" />
        </div>
        <div>
          <h4>Alamat</h4>
          <p>Jl. Kubang Jaya No. 185, Pekanbaru, Riau</p>
        </div>
      </div>
    </div>
    <div class="thanks">
      Terima kasih telah memilih <strong>Kubang Store</strong> 
    </div>
    <div class="message">
      Kami siap menemani perjalanan digital Anda dengan Smartphone yang terbaik!
    </div>
  </div>
    
</template>

<script setup>
import emailIcon from '@/assets/icons/email.png'
import phoneIcon from '@/assets/icons/phone-call.png'
import locationIcon from '@/assets/icons/location.png'
</script>

<style scoped>

.contact-wrapper {
  max-width: 970px;
  margin: 0 auto;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, #f0f9ff, #e0f7fa);
  border-radius: 20px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  font-family: 'Segoe UI', sans-serif;
  animation: fadeIn 0.7s ease-in-out;
}

.contact-header {
  text-align: center;
  margin-top: 0.2rem;
  margin-bottom: 4.0rem;
}

.contact-header h2 {
  font-size: 2.7rem;
  color: #007b8a;
  margin-bottom: 2.0rem;
}

.contact-header p {
  color: #444;
  font-size: 1.1rem;
  line-height: 1.6;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  background: #ffffff;
  padding: 1.2rem 1.6rem;
  border-radius: 16px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.info-item:hover {
  transform: translateY(-5px);
}

.icon-circle {
  background-color: #e6f7ff;
  padding: 0.8rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-circle img {
  width: 28px;
  height: 28px;
}

.info-item h4 {
  margin: 0;
  font-size: 1.15rem;
  color: #007b8a;
}

.info-item p {
  margin: 0;
  color: #333;
  font-size: 0.98rem;
}

.thanks {
  margin-top: 3rem;
  font-weight: bold;
  font-size: 1.2rem;
  color: #18bc9c;
  text-align: center;
  animation: pulse 2.5s infinite;
}

.message {
  margin-top: 0.5rem;
  font-weight: bold;
  font-size: 1.2rem;
  color: #18bc9c;
  text-align: center;
  animation: pulse 2.5s infinite;
  
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0% { opacity: 1 }
  50% { opacity: 0.6 }
  100% { opacity: 1 }
}

@media (min-width: 768px) {
  .contact-info {
    flex-direction: row;
    justify-content: space-between;
  }

  .info-item {
    flex: 1;
  }
}
</style>
