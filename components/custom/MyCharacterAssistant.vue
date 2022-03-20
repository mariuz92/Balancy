<template>
  <div class="card">
    <div class="card-header">
      <!-- Title -->
      <h4 class="h3 mb-0">I'm your personal assistant!</h4>
    </div>
    <div class="card-body">
      <img
        slot="image"
        class="card-img-top mb-4"
        src="/img/assistant/assistant_Rizal.png"
        alt="Card image cap"
      />

      <p class="card-text">
        Let me ask you some question so we can know each other better. Don't you
        worry about anything, be yourself! Everything will be evaluated under
        the professional secrecy!
      </p>
      <button class="btn-block btn btn-primary">Let's go!</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card-img-top {
  width: 40%;
  display: flex;
  margin: auto;
}
.card {
  height: 100%;
}
</style>
