<script setup lang="ts">
import { Section } from '~/client/types/consultation/consultation';

defineProps<{
  sections: Section[]
}>()

const expandedSectionId = ref('')

</script>
<template>
  <div class="sections fr-mt-1w" v-if="sections">
    <div class="section" v-for="section in sections">
      <div v-if="section.type=='title'">
        <h2 class="fr-text--lead section-title">{{section.title}}</h2>
      </div>

      <div v-else-if="section.type=='richText'">
        <p v-html="section.description"></p>
      </div>

      <div v-else-if="section.type=='quote'" class="fr-quote">
        <p v-html="section.description"></p>
      </div>

      <div v-else-if="section.type=='focusNumber'" class="fr-callout">
        <h2 class="fr-h3 fr-mb-0">{{ section.title }}</h2>
        <p v-html="section.description"></p>
      </div>

      <div v-else-if="section.type=='video'">
        <div v-if="section.authorInfo">
          Par <b>{{ section.authorInfo.name }}</b>, le {{ new Date(section.authorInfo.date).toLocaleDateString() }}
          <p class="fr-text--xs"> {{ section.authorInfo.message}}</p>
        </div>
        <DsfrVideo
          :src="section.url"
          :transcription-content="section.transcription"
        />
      </div>
      
      <div v-else-if="section.type=='image'">
        <img :src="section.url" :alt="section.description">
      </div>

      <div class="fr-my-6w" v-else-if="section.type=='accordion'">
        <DsfrAccordion :title="section.title" :expanded-id="expandedSectionId"  @expand="id => expandedSectionId = id">
          <Sections :sections="section.sections"/>
        </DsfrAccordion>
      </div>
    </div>
  </div>

</template>