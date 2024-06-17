<script setup lang="ts">
import { ConsultationUpdate } from '~/client/types/consultation/consultation';

defineProps<{
  update: ConsultationUpdate
}>()
</script>

<template>
  <div :class="{'current-update': update.status ==='current', 'next-update' : update.status ==='incoming\''}">
    <div class="step"></div>
    <VIcon
      name="ri-check-line"
      class="icon"
      v-if="update.status==='done'"
    />

    <VIcon
      name="ri-check-line"
      class="icon"
      v-else-if="update.status==='current'"
    />

    <VIcon
      name="ri-calendar-2-line"
      class="icon"
      v-else-if="update.status==='incoming\''"
    />
    
  <div class="content">
   <div class="content-title">
     {{update.title }}
   </div>
    <div class="content-date">
      {{ update.date ? new Date(update.date).toLocaleDateString() : 'Prochainement'}}
    </div>
  </div>
    
  </div>
</template>

<style>
.current-update{
  .icon{
    outline: 2px dashed #e1010e;
    outline-offset: 3px;
  }
  .content{
    font-weight: bold;
  }
}

.content-date{
  font-style: italic;
}

.next-update{
  opacity: .50;
}
</style>