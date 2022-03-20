<template>
  <div
    class="sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white sidenav-width"
    @mouseenter="$sidebar.onMouseEnter()"
    @mouseleave="$sidebar.onMouseLeave()"
    :data="backgroundColor"
  >
    <div class="scrollbar-inner" ref="sidebarScrollArea">
      <div class="sidenav-header d-flex align-items-center">
        <a class="navbar-brand" href="#">
          <img :src="logo" class="navbar-brand-img" alt="Sidebar logo" />
        </a>
        <div class="ml-auto">
          <!-- Sidenav toggler -->
          <div
            class="sidenav-toggler d-none d-xl-block"
            :class="{ active: !$sidebar.isMinimized }"
            @click="minimizeSidebar"
          >
            <div class="sidenav-toggler-inner">
              <i class="sidenav-toggler-line"></i>
              <i class="sidenav-toggler-line"></i>
              <i class="sidenav-toggler-line"></i>
            </div>
          </div>
        </div>
      </div>
      <slot></slot>
      <div class="navbar-inner">
        <ul class="navbar-nav">
          <slot name="links">
            <sidebar-item
              v-for="(link, index) in sidebarLinks"
              :key="link.name + index"
              :link="link"
            >
            </sidebar-item>
          </slot>
        </ul>
        <slot name="links-after"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "sidebar",
  props: {
    title: {
      type: String,
      default: "Creative Tim",
      description: "Sidebar title",
    },
    shortTitle: {
      type: String,
      default: "CT",
      description: "Sidebar short title",
    },
    logo: {
      type: String,
      default:
        "https://demos.creative-tim.com/nuxt-argon-dashboard-pro/img/brand/green.png",
      description: "Sidebar app logo",
    },
    backgroundColor: {
      type: String,
      default: "vue",
      validator: (value) => {
        let acceptedValues = [
          "",
          "vue",
          "blue",
          "green",
          "orange",
          "red",
          "primary",
        ];
        return acceptedValues.indexOf(value) !== -1;
      },
      description:
        "Sidebar background color (vue|blue|green|orange|red|primary)",
    },
    sidebarLinks: {
      type: Array,
      default: () => [],
      description:
        "List of sidebar links as an array if you don't want to use components for these.",
    },
    autoClose: {
      type: Boolean,
      default: true,
      description:
        "Whether sidebar should autoclose on mobile when clicking an item",
    },
  },
  provide() {
    return {
      autoClose: this.autoClose,
    };
  },
  methods: {
    minimizeSidebar() {
      if (this.$sidebar) {
        this.$sidebar.toggleMinimize();
      }
    },
  },
  mounted() {
    this.$sidebar.isMinimized = this.$sidebar.breakpoint < window.innerWidth;
    this.minimizeSidebar();
  },
  beforeDestroy() {
    if (this.$sidebar.showSidebar) {
      this.$sidebar.showSidebar = false;
    }
  },
};
</script>
<style lang="scss" scoped>
.sidenav-width {
  height: 70% !important;
  margin: auto 0;
  overflow: hidden;
}
.scrollbar-inner {
  flex-direction: column;
  display: flex;
}

.navbar-inner {
  margin: auto 0;
}
.sidenav {
  border-radius: 0 16px 16px 0;
}
</style>
