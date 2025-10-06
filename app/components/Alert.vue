<template>
  <div
    class="card w-full border-x-3"
    :class="alertClass"
  >
    <div class="card-body">
      <h2>Nota:</h2>
      <p>
        <slot
          mdc-unwrap="p"
          class="wrap-break-word"
        />
      </p>
    </div>
  </div>
</template>


<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    required: true,
  }
});


const alertClass = computed(() => {
  return {
    warning: "bg-warning/30 text-warning-content",
    info: 'bg-info/30 text-info-content',
    error: 'bg-error/30 text-error-content',
    success: 'bg-success/30 text-success-content',
  }[props.type]
});
</script>
