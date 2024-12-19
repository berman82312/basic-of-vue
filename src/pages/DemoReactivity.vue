<template>
  <q-page class="flex flex-center">
    <q-card>
      <h2>Parent</h2>
      <q-card-actions>
        <q-btn @click="addX">Add X</q-btn>
        <q-btn @click="addY">Add Y</q-btn>
      </q-card-actions>
      <q-card-section>
        <div>
          X: {{ parentX }}
        </div>
        <div>
          Y: {{ parentY }}
        </div>
        <div>
          Parent add value: {{ parentAddValue }}
        </div>
        <div>
          Parent add ref: {{ parentAddRef }}
        </div>
      </q-card-section>
      <DemoReactivityChild
        :parent-x="parentX"
        :parent-y="parentY"
        :parent-add-value="parentAddValue"
        :parent-add-ref="parentAddRef"
      />
      <DemoIndependentChild prefix="parent" />
      <div>
        {{ logRender() }}
      </div>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import DemoIndependentChild from 'src/components/DemoIndependentChild.vue';
import DemoReactivityChild from 'src/components/DemoReactivityChild.vue';
import { add } from 'src/utils/numberUtils';
import { computed, ref, watch } from 'vue';

defineOptions({
  name: 'DemoReactivity'
})

const parentX = ref(0)
const parentY = ref(0)

const parentAddValue = computed(() => {
  console.log("[Parent] Calculate add value")
  return add(parentX.value, parentY.value)
})

const parentAddRef = computed(() => {
  console.log("[Parent] Calculate add ref")
  return add(() => parentX.value, () => parentY.value)
})

function addX () {
  parentX.value = parentX.value + 1
}

function addY () {
  parentY.value = parentY.value + 1
}

function logRender () {
  console.log("[Parent] render")
}

watch(parentX, () => {
  console.log("[Parent] parentX changed 1")
})

watch(parentY, () => {
  console.log("[Parent] parentY changed 1")
})

watch(parentAddValue, () => {
  console.log("[Parent] parent add value changed")
})

watch(parentAddRef, () => {
  console.log("[Parent] parent add ref changed")
})

watch(parentX, () => {
  console.log("[Parent] parentX changed 2")
})

watch(parentY, () => {
  console.log("[Parent] parentY changed 2")
})

</script>
