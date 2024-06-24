<script setup lang="ts">
import type Link from '~/client/types/dsfr/link';
import type Qag from '~/client/types/qag/qag';
import {FetchError} from "ofetch";
import {AsyncData} from "nuxt/app";

definePageMeta({
  layout: 'basic'
})

const route = useRoute()
const runtimeConfig = useRuntimeConfig()

const qagId = route.params.id

const apiBaseUrl = runtimeConfig.public.apiBaseUrl
const routeUrl = `${apiBaseUrl}/api/public/qags/${qagId}`

const { data: qag, error } = await useFetch(routeUrl) as AsyncData<Qag, FetchError>

if (error.value) {
  throw createError({ statusCode: error.value!.statusCode})
}

const links: Link[] = [{ to: '/', text: 'Accueil' }, { text: 'Questions citoyennes' }]

</script>

<template>
  <DsfrBreadcrumb :links="links" />
  <div class="fr-mt-10w">
    <h1>Questions citoyennes</h1>

    <p class="fr-text--lead" v-if="qag.username">
      {{ `${qag.username} a posé une question au Gouvernement :` }}
    </p>
  
    <div class="question fr-p-2w fr-mx-1w">
          <p class="fr-text--lead">
            {{ qag.thematique.picto + " " + qag.thematique.label }}
          </p>
          <DsfrBadge v-if="qag.status=='selectedForResponse'" type="info" label="Réponse à venir"/>
          <DsfrBadge v-else-if="qag.status=='responseAvailable'" type="success" label="Réponse reçue"/>
          <DsfrBadge v-else-if="qag.status=='openForSupport'" type="new" label="À soutenir"/>
        <h2 class="fr-mt-4w question-text">{{ qag.title }}</h2>
      <div class="fr-mt-6w">
        <p>{{ qag.description }}</p>
      </div>
    </div>



    <div class="video-response fr-mt-2w" v-if="qag.response">
      <p class="fr-text--lead">
        Réponse du gouvernement
      </p>
      
      <div class="fr-px-1w">
        Par <b>{{ qag.response.author }}</b>, le {{ new Date(qag.response.responseDate).toLocaleDateString() }}
        <p class="fr-text--xs"> {{ qag.response.authorDescription}}</p>

        <DsfrVideo
          :src="qag.response.videoUrl"
          :transcription-content="qag.response.transcription"
        />
        
        <div v-if="qag.response.additionalInfo" class="additionnal-info">
          <span class="fr-text--lead fr-mb-4w">{{ qag.response.additionalInfo.title }}</span>
          <p class="fr-mt-2w" v-html="qag.response.additionalInfo.description"></p>
        </div>
        
        
      </div>

    </div>

    <div class="text-response fr-mt-2w" v-if="qag.textResponse">
      <p class="fr-text--lead">{{ qag.textResponse.responseLabel }}</p>
      <p class="fr-px-1w" v-html="qag.textResponse.responseText"></p>
    </div>
      <BandeauTelechargement class="fr-mt-2w">
          <div v-if="!qag.response && !qag.textResponse">
            Sa question est actuellement soutenue par
            
              <VIcon
                name="ri-heart-line"
                class="fr-mr-1v heart-icon"
              /> 
            <b>{{ qag.supportCount }} Agoranautes</b>.
            Pour obtenir une réponse, elle devra être en tête des soutiens sur Agora <b>lundi à 14h</b>.
            <p class="fr-mt-2w">Soutenez la question de Jordan ! Télécharger l'application :</p>
          </div>
          <div v-else-if="qag.response">
            <b>{{ qag.response.feedbackQuestion }}</b>
            <p>Donnez votre avis en téléchargeant l’application Agora :</p>
          </div>
          <div v-else-if="qag.textResponse">
            <b>{{ qag.textResponse.feedbackQuestion }}</b>
            <p>Répondez à cette question en télechargeant l'application :</p>
          </div>
      </BandeauTelechargement>
  </div>
</template>

<style lang="scss">
  .heart-icon {
    color: var(--red-marianne-main-472);
  }
  .question{
    background-color: var(--blue-france-975-75);
    position: relative;

    .status-container {
      text-align: end;
    }
  }
  .question-text{
    color: var(--blue-france-sun-113-625)
  }
</style>