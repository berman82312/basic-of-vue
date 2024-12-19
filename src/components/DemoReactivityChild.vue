<template>
  <q-card-section>
    <h3>Child</h3>
    <div>
      Parent X: {{ parentX }}
      Child X: {{ childX }}
    </div>
    <div>
      Parent Y: {{ parentY }}
      Child Y: {{ childY }}
    </div>
    <div>
      Parent add value: {{ parentAddValue }}
      Child add value: {{ childAddValue }}
    </div>
    <div>
      Parent add ref: {{ parentAddRef }}
      Child add ref: {{ childAddRef }}
    </div>
    <DemoIndependentChild prefix="Grand" />
    {{ logRender() }}
    <q-card-actions>
      <q-btn @click="addX">Child add X</q-btn>
      <q-btn @click="addY">Child add Y</q-btn>
    </q-card-actions>
  </q-card-section>
</template>

<script setup lang="ts">
import { add } from 'src/utils/numberUtils';
import { computed, ref, watch } from 'vue';
import DemoIndependentChild from './DemoIndependentChild.vue';

defineOptions({
  name: 'DemoReactivityChild'
})

const props = defineProps({
  parentX: {
    type: Number,
    required: true
  },
  parentY: {
    type: Number,
    required: true
  },
  parentAddValue: {
    type: Number,
    required: true
  },
  parentAddRef: {
    type: Number,
    required: true
  }
})

const childX = ref(0)
const childY = ref(0)

const childAddValue = computed(() => {
  console.log("[Child] Calculate add value")
  return add(props.parentX, props.parentY)
})

const childAddRef = computed(() => {
  console.log("[Child] Calculate add ref")
  return add(() => props.parentX, () => props.parentY)
})

function addX () {
  childX.value = childX.value + 1
}

function addY () {
  childY.value = childY.value + 1
}

function logRender () {
  console.log("[Child] render")
}

watch(childX, () => {
  console.log("[Child] childX changed")
})

watch(childY, () => {
  console.log("[Child] childY changed")
})

watch(() => props.parentX, () => {
  console.log("[Child] parentX changed 1")
})

watch(() => props.parentY, () => {
  console.log("[Child] parentY changed 1")
})

watch(childAddValue, () => {
  console.log("[Child] childAddValue changed")
})

watch(childAddRef, () => {
  console.log("[Child] childAddRef changed")
})

watch(() => props.parentX, () => {
  console.log("[Child] parentX changed 2")
})

watch(() => props.parentY, () => {
  console.log("[Child] parentY changed 2")
})

</script>
