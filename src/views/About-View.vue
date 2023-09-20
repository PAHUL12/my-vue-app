<template>
  <div class="about-container">
    <header class="about-header">
      <h1>About Our Application</h1>
      <p>Learn more about our mission, vision, and the dedicated team behind it.</p>
    </header>

    <section class="mission-section">
      <h2>Our Mission</h2>
      <p>
        Our mission is to provide a platform that empowers individuals to achieve their goals, share their stories, and connect with the global community.
      </p>
    </section>

    <section class="vision-section">
      <h2>Our Vision</h2>
      <p>
        We envision a world where technology bridges gaps, fosters understanding, and enables people to pursue their passions with ease and joy.
      </p>
    </section>

    <section class="team-section">
      <h2>Meet the Team</h2>
      <ul class="team-list">
        <li>
          <strong>Jane Doe:</strong> Co-founder and CEO
        </li>
        <li>
          <strong>John Smith:</strong> Chief Technology Officer
        </li>

      </ul>
    </section>

    <footer>
      <p>Interested in joining us? <router-link to="/contact">Contact us</router-link> for opportunities.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'About-page',
  data() {
    return {
      // any reactive data properties required for About.vue
    };
  },
  methods: {
    getCurrentYear() {
      return new Date().getFullYear();
  },
  computed: {
    yearsOfOperation() {
      return this.getCurrentYear() - this.launchYear;
    }
  }
}
}
</script>

<style scoped>
.about-container {
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

.about-header {
  background-color: #f5f5f5;
  padding: 20px 0;
  text-align: center;
}

.mission-section,
.vision-section {
  margin-top: 20px;
}

.team-section {
  margin-top: 40px;
}

.team-list {
  list-style-type: none;
  padding: 0;
}

footer {
  margin-top: 50px;
  text-align: center;
  background-color: #f9f9f9;
  padding: 10px 0;
}
</style>

