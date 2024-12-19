<template>
  <q-card-section>
    <h3>Independent</h3>
    <div>
      Child X: {{ childX }}
    </div>
    <div>
      Child Y: {{ childY }}
    </div>
    {{ logRender() }}
    <q-card-actions>
      <q-btn @click="addX">Child add X</q-btn>
      <q-btn @click="addY">Child add Y</q-btn>
    </q-card-actions>
  </q-card-section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

defineOptions({
  name: 'DemoIndependentChild'
})

const props = defineProps({
  prefix: {
    type: String,
    required: true
  }
})

const childX = ref(0)
const childY = ref(0)

function addX () {
  childX.value = childX.value + 1
}

function addY () {
  childY.value = childY.value + 1
}

function logRender () {
  console.log(`[${props.prefix}][Ind Child] render`)
}

watch(childX, () => {
  console.log(`[${props.prefix}][Ind Child] childX changed`)
})

watch(childY, () => {
  console.log(`[${props.prefix}][Ind Child] childY changed`)
})
</script>
