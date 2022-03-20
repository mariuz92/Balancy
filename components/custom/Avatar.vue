<template>
  <div class="card">
    <div class="card-header">
      <!-- Title -->
      <h4 class="h3 mb-0">Customize your Avatar</h4>
    </div>
    <div class="card-body">
      <div class="row flex-xl-row flex-md-column justify-content-lg-between">
        <div
          class="col-xl-8 d-flex justify-content-lg-end justify-content-md-center"
        >
          <img src="img/avatar/avatar-male.png" alt="Avatar Image" />
        </div>

        <div class="col-xl-2">
          <base-button type="info" class="btn-icon-only rounded-circle mt-2">
            <span class="btn-inner--icon"><i class="fa fa-gears"></i></span>
          </base-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card {
  height: 100%;
}
</style>
