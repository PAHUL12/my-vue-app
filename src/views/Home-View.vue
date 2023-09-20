<template>
  <div class="home-container">
    <header class="hero-section">
      <h1>Welcome to Our Application</h1>
      <p>Your journey to greatness begins here.</p>
    </header>

    <section class="features-section">
      <h2>Key Features</h2>
      <ul>
        <li>
          <strong>Responsive Design:</strong> Access our app on any device.
        </li>
        <li>
          <strong>User-Friendly Interface:</strong> Easy navigation and intuitive controls.
        </li>
        <li>
          <strong>Real-Time Updates:</strong> Get the latest updates without any delays.
        </li>
        <!-- Add more features as required -->
      </ul>
    </section>

    <section class="get-started-section">
      <h2>Get Started</h2>
      <p>To explore more, <router-link to="/about">learn about us</router-link> or <router-link to="/dashboard">head to your dashboard</router-link>.</p>
    </section>

    <footer>
      <p>&copy; 2023 YourApp. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Home-page',
  data() {
    return {
      // any reactive data properties required for Home.vue
    };
  },
  methods: {
    // any methods required for Home.vue
  },
  computed: {
    // any computed properties required for Home.vue
  }
};
</script>

<style scoped>
.home-container {
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

.hero-section {
  background-color: #f5f5f5;
  padding: 20px 0;
  text-align: center;
}

.features-section {
  margin-top: 20px;
}

.get-started-section {
  margin-top: 40px;
  background-color: #f9f9f9;
  padding: 10px 0;
}

footer {
  margin-top: 50px;
  text-align: center;
  color: #888;
}
</style>
