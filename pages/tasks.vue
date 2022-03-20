<template>
  <div>
    <base-header class="pb-6">
      <div class="row align-items-center py-4">
        <div class="col-lg-6 col-7">
          <h6 class="h2 text-white d-inline-block mb-0">
            Tasks and Organization
          </h6>
          <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
            <route-breadcrumb></route-breadcrumb>
          </nav>
        </div>
      </div>
    </base-header>
    <div>
      <kanban />
    </div>
  </div>
</template>

<script>
import RouteBreadCrumb from "@/components/argon-core/Breadcrumb/RouteBreadcrumb";
import kanban from "@/components/custom/Kanban";
export default {
  layout: "DashboardLayout",
  components: {
    RouteBreadCrumb,
    kanban,
  },
};
</script>

<style lang="scss" scoped></style>
