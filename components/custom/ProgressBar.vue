<template>
  <div class="card">
    <!-- Card header -->
    <div class="card-header">
      <!-- Title -->
      <h4 class="h3 mb-0">You are doing great!</h4>
    </div>
    <!-- Card search -->

    <!-- Card body -->
    <div class="card-body">
      <!-- List group -->
      <h5>Health Score</h5>
      <div class="progress" style="height: 20px">
        <div
          class="progress-bar bg-success"
          role="progressbar"
          style="width: 63%"
          aria-valuenow="4"
          aria-valuemin="1"
          aria-valuemax="5"
        >
          63%
        </div>
      </div>
      <h5>Emotional Score</h5>
      <div class="progress" style="height: 20px">
        <div
          class="progress-bar bg-info"
          role="progressbar"
          style="width: 50%"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          50%
        </div>
      </div>
      <h5>Job Score</h5>
      <div class="progress" style="height: 20px">
        <div
          class="progress-bar bg-warning"
          role="progressbar"
          style="width: 75%"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          75%
        </div>
      </div>
      <h5>Social Score</h5>
      <div class="progress" style="height: 20px">
        <div
          class="progress-bar bg-danger"
          role="progressbar"
          style="width: 100%"
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          100%
        </div>
      </div>

      <div class="background-color">
        <h5 class="title">Average Score</h5>
        <div class="progress" style="height: 25px">
          <div
            class="progress-bar bg-primary"
            role="progressbar"
            style="width: 80%"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            75%
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "members-card",
  props: {
    showSearch: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      membersSearch: "",
      members: [
        {
          name: "John Michael",
          status: "Online",
          statusType: "success",
          image: "img/theme/team-1.jpg",
        },
        {
          name: "Alex Smith",
          status: "In a meeting",
          statusType: "danger",
          image: "img/theme/team-2.jpg",
        },
        {
          name: "Samantha Ivy",
          status: "Offline",
          statusType: "danger",
          image: "img/theme/team-3.jpg",
        },
        {
          name: "John Michael",
          status: "Online",
          statusType: "success",
          image: "img/theme/team-4.jpg",
        },
        {
          name: "John Snow",
          status: "Online",
          statusType: "success",
          image: "img/theme/team-5.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.background-color {
  background-color: #f6f9fc;
  padding: 16px 8px;
  border-radius: 8px;
  margin: 0 -8px;
}
.card {
  height: 100%;
}
</style>
