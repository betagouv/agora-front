<script setup lang="ts">
import { Ref } from 'vue'

definePageMeta({
  layout: 'basic',
})

useHead({
  title: 'Accessibilité - Agora',
})

const domainName = useRuntimeConfig().public.domainName
const links: Ref<any[]> = ref([{to: '/', text: 'Accueil'}, {text: 'Accessibilité'}])
</script>

<template>
  <DsfrBreadcrumb :links="links"/>
  <div class="fr-mt-8w">
    <h1>Déclaration d’accessibilité</h1>

    <p>
      <strong>La Direction interministérielle de la transformation publique (DITP)</strong>
      s’engage à rendre ses sites internet, intranet, extranet et ses progiciels
      accessibles (et ses applications mobiles et mobilier urbain numérique)
      conformément à l’article 47 de la loi n°2005-102 du 11 février 2005. 
      Pour élaborer le service, elle a mobilisé des équipes de développement formées à l’accessibilité numérique et au cadre du RGAA.
  </p>

    <p>Cette déclaration d’accessibilité s’applique :</p>

    <ul>
      <li>au site vitrine Agora <strong>https://www.agora.gouv.fr/</strong></li>
      <li>
        à l’application mobile Agora :
        <ul>
          <li>
            <a target="_blank" href="https://apps.apple.com/us/app/agora-citoyens-gouv/id6449599025">application mobile iOS</a>
          </li>
          <li>
            et <a target="_blank" href="https://play.google.com/store/apps/details?id=fr.gouv.agora">application mobile Android</a>
          </li>
        </ul>
      </li>
    </ul>

    <h2>État de conformité</h2>

    <h3>Site vitrine Agora</h3>

    <p>
      <strong>Le site de présentation de l'application Agora
        <a target="_blank" href="https://www.agora.gouv.fr/">https://www.agora.gouv.fr/</a>
      </strong>
      est <strong>partiellement</strong> conforme avec le référentiel général
      d’amélioration de l’accessibilité (RGAA) version 4 en raison des
      non-conformités et des dérogations énumérées ci-dessous.
    </p>

    <h3>Application mobile Agora</h3>

    <p>
      <strong>L’application mobile Agora</strong> est
      <strong>non conforme</strong> avec le référentiel général d’amélioration de
      l’accessibilité (RGAA) version 4 car les applications n’ont pas encore été
      auditées.
    </p>
    <p>
      Les 2 versions de l’application ont cependant été réalisées en tenant compte
      de l’accessibilité dès leur conception :
    </p>
    <ul>
      <li>
        un design épuré et une structure claire correctement restituée aux
        technologies d’assistance
      </li>
      <li>
        des images d’illustration correctement ignorées par les technologies
        d’assistance
      </li>
      <li>
        des textes ajoutés spécialement pour les lecteurs d’écran qui permettent de
        mieux comprendre le contexte
      </li>
      <li>
        Les couleurs sont suffisamment contrastées
      </li>
      <li>
        Le contenu est consultable en mode portrait et en mode paysage
      </li>
    </ul>
    <br/>

    <h2>Résultats des tests</h2>

    <h3>Site vitrine Agora</h3>

    <p>
      L’audit de conformité réalisé par
      <strong>La Direction interministérielle de la transformation publique (DITP)</strong>
      révèle que <strong>84%</strong> des critères du RGAA version 4 sont respectés.
    </p>

    <h3>Application mobile Agora</h3>

    <p>
      Un audit RGAA est planifié au mois de décembre pour une restitution le 20
      décembre 2023.
    </p>
    <br/>

    <h2>Contenus non accessibles du site vitrine</h2>

    <h3>Non-conformités</h3>

    <div>
      <ul>
        <li>
          la page "Retours sur l’application" présente quelques défauts
          d’accessibilité&nbsp;:
          <ul>
            <li>un design qui s’adapte mal aux petits écrans</li>

            <li>pas de titre sur le cadre englobant le formulaire</li>

            <li>
              quelques défauts mineurs liés à l’outil de génération de formulaire
              <a href="https://www.lesphinx-developpement.fr/">Le Sphinx</a><br />Un
              e-mail de contact situé au dessus du formulaire constitue une
              alternative pour les usagers possédant un e-mail
            </li>
          </ul>
        </li>

        <li>
          certaines images d’illustration sont décrites par les lecteurs d’écran
          alors qu’elles ne devraient pas (mineur)
        </li>

        <li>
          le lien "GOUVERNEMENT" en bas de chaque page amène l’usager vers l’accueil
          du site Agora. Ce texte ne devrait pas être un texte de lien mais
          simplement le logo du gouvernement pour rappeler le caractère officiel du
          site (mineur)
        </li>

        <li>
          les liens vers les sites externes n’indiquent pas qu’une nouvelle page va
          s’ouvrir (mineur)
        </li>
      </ul>
    </div>
    <br/>

    <h2>Établissement de cette déclaration d’accessibilité</h2>

    <p>
      Cette déclaration a été établie le <strong>22 novembre 2023</strong>. Elle a
      été mise à jour le <strong>22 novembre 2023</strong>.
    </p>

    <h3>Technologies utilisées pour la réalisation du site vitrine</h3>

    <ul>
      <li>Nuxt (Vue.js)</li>
      <li>Matomo Analytics</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>TypeScript</li>
      <li>JavaScript</li>
      <li>SVG</li>
    </ul>

    <h3>Technologies utilisées pour la réalisation des applications mobiles</h3>

    <ul>
      <li>Flutter</li>
      <li>Dart</li>
      <li>Matomo Analytics</li>
      <li>SVG</li>
    </ul>

    <h3>Environnements de test</h3>

    <p>
      Les vérifications de restitution de contenus ont été réalisées sur la base de
      la combinaison fournie par la base de référence du RGAA, avec les versions
      suivantes :
    </p>

    <ul>
      <li>
        Sur ordinateur MacOS 11.7.10 avec Safari Version 16.6.1 (16615.3.12.11.5,
        16615) et VoiceOver Version 10 (767.29)
      </li>
      <li>Sur ordinateur Windows avec Firefox et NVDA</li>
      <li>Sur ordinateur Windows avec Firefox et JAWS</li>
      <li>Sur mobile iOS avec Safari et VoiceOver</li>
      <li>Sur mobile Android avec Google Chrome et Talkback</li>
    </ul>

    <h3>Outils pour évaluer l’accessibilité du site vitrine</h3>

    <ul>
      <li>Web Developer Toolbar</li>
      <li>Colour Contrast Analyser</li>
      <li>HeadingsMap</li>
      <li>Inspecteur de composants</li>
      <li>Assistant RGAA</li>
      <li>Validateur HTML du W3C</li>
      <li>VoiceOver</li>
    </ul>

    <h3>Pages du site ayant fait l’objet de la vérification de conformité</h3>

    <ul>
      <li>Accueil <strong>https://www.agora.gouv.fr/</strong></li>
      <li>
        Mentions légales
        <strong>https://www.agora.gouv.fr/mentions-legales/</strong>
      </li>
      <li>
        Accessibilité <strong>https://www.agora.gouv.fr/accessibilite/</strong>
      </li>
      <li>
        Politique de confidentialité
        <strong>https://www.agora.gouv.fr/politique-confidentialite/</strong>
      </li>
      <li>
        Retours sur l'application
        <strong>https://www.agora.gouv.fr/retours-application/</strong>
      </li>
    </ul>
    <br/>

    <h2>Retour d’information et contact</h2>

    <p>
      Si vous n’arrivez pas à accéder à un contenu ou à un service, vous pouvez
      contacter le responsable du site de présentation de l'application Agora
      pour être orienté vers une alternative accessible ou obtenir le contenu sous
      une autre forme.
    </p>

    <ul>
      <li>
        Contacter
        <strong>La Direction interministérielle de la transformation publique (DITP) : contact@agora.gouv.fr</strong>
      </li>
    </ul>

    <h2>Voies de recours</h2>

    <p>
      Si vous constatez un défaut d’accessibilité vous empêchant d’accéder à un
      contenu ou une fonctionnalité du site, que vous nous le signalez et que vous
      ne parvenez pas à obtenir une réponse de notre part, vous êtes en droit de
      faire parvenir vos doléances ou une demande de saisine au Défenseur des
      droits.
    </p>

    <p>Plusieurs moyens sont à votre disposition :</p>

    <ul>
      <li>Écrire un message au Défenseur des droits</li>
      <li>Contacter le délégué du Défenseur des droits dans votre région</li>
    </ul>

    <p>
      Envoyer un courrier par la poste (gratuit, ne pas mettre de timbre) Défenseur
      des droits Libre réponse 71120 75342 Paris CEDEX 07
    </p>
  </div>
</template>
