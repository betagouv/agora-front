<script setup lang="ts">
import { Ref } from 'vue'

definePageMeta({
  layout: 'basic',
})

useHead({
  title: 'Agora - Politique de confidentialité',
})

const domainName = useRuntimeConfig().public.domainName
const links: Ref<any[]> = ref([{to: '/', text: 'Accueil'}, {text: 'Politique de confidentialité'}])
</script>

<template>
  <DsfrBreadcrumb :links="links"/>
  <div class="fr-mt-8w">
    <h1>Politique de confidentialité Provisoire - en attente validation</h1>
    <h2>Qui est responsable d’Agora ?</h2>
    <p>
      Agora est une application gouvernementale visant à faire dialoguer les citoyens avec le Gouvernement. Concrètement, elle permet aux
      citoyens de participer à des consultations initiées par les ministères et de poser des questions au Gouvernement sur des sujets
      d’actualité.<br/>
      Agora est développée au sein de l’incubateur Beta.gouv de la Direction interministérielle du numérique. Le responsable de traitement
      est Thierry Lambert, Délégué interministériel à la transformation publique (DITP).
      <br/><br/>
      Le responsable de traitement s’engage à ce que la collecte et le traitement des données à caractère personnel, effectués à partir de
      la plateforme Agora soient conformes au règlement européen n° 2016/679 général sur la protection des données du 27 avril 2016 dit «
      RGPD » et à la loi n° 78-17 relative à l’informatique, aux fichiers et aux libertés dite « LIL ».
    </p>
    <h2>Pourquoi traitons-nous ces données ?</h2>
    <p>
      Agora traite des données à caractère personnel pour les raisons suivantes :
      <ul>
        <li>Demander l’opinion des utilisateurs concernant la mise en œuvre des politiques publiques du Gouvernement ;</li>
        <li>Permettre de répondre aux questions posées et aux propositions publiées ;</li>
        <li>Analyser les résultats des consultations ;</li>
        <li>Evaluer et améliorer l’application Agora.</li>
      </ul>
      Cette collecte d’information se limite au nécessaire, conformément au principe de minimisation des données.
    </p>
    <h2>Quelles sont les données que nous traitons ?</h2>
    <p>
      Agora traite les catégories de données à caractère personnel suivantes des Utilisateurs, renseignées à titre facultatif :
      <ul>
        <li><b>Données d’état-civil</b> : prénom, genre, année de naissance, département ou territoire d’outre mer de résidence, cadre de
          vie
          (milieu
          urbain, milieu rural, autre / je ne sais pas)] ;
        </li>
        <li><b>Données relatives à la catégorie socio-professionnelle</b> ;</li>
        <li><b>Données relatives à l’engagement citoyen</b> (fréquence de vote, engagement sur le terrain, engagement en ligne) ;</li>
        <li><b>Données techniques</b> (User ID) ;</li>
        <li><b>Données relatives aux consultations et questions posées au Gouvernement.</b></li>
      </ul>
      Toutes les données (sauf les questions posées au Gouvernement) sont collectées par les personnes autorisées à traiter les données
      (développées ci-dessous) mais elles ne sont pas publiées et partagées aux autres Utilisateurs.
    </p>
    <h2>Qu’est-ce qui nous autorise à traiter ces données ?</h2>
    <p>
      Agora traite des données personnelles en se basant sur l’exécution d’une mission d’intérêt public ou relevant de l’exercice de
      l’autorité publique dont est investi le responsable de traitement au sens de l’article 6-e du RPGD.
      <br/><br/>
      La DITP notamment concourt sur le fondement de l’article 4 du décret n° 2015-1165 du 21 septembre 2015 à l'adaptation de
      l'organisation des administrations de l'Etat pour tenir compte de l'évolution de leurs missions et de leurs modes de gestion. Elle est
      aussi chargée de l'animation et de la coordination des travaux d'audit et d'évaluation des politiques publiques.
    </p>
    <h2>Pendant combien de temps conservons-nous ces données ?</h2>
    <p>
      Les données sont conservées pendant toute la durée de l’inscription et jusqu’à ce que vous supprimiez l’application ou que
      l’application ne soit plus en ligne.
      <br/><br/>
      En tout état de cause, les durées de conservation ne sauraient excéder :
    </p>
    <div class="fr-table">
      <table class="simple-table">
        <thead>
        <tr>
          <th>
            Catégories de données
          </th>
          <th>
            Durée de la conservation
          </th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            Données d’état civil
          </td>
          <td rowspan="5">
            24 mois à compter de la dernière utilisation de l’application puis effacement
          </td>
        </tr>
        <tr>
          <td>
            Données socio-professionnelles
          </td>
        </tr>
        <tr>
          <td>
            Données d’engagement citoyen
          </td>
        </tr>
        <tr>
          <td>
            Données relatives aux questions posées au Gouvernement
          </td>
        </tr>
        <tr>
          <td>
            Données techniques
          </td>
        </tr>
        <tr>
          <td>
            Données relatives aux consultations
          </td>
          <td>
            Suppression à la clôture de la consultation, puis archivage intermédiaire pendant 24 mois et effacement
          </td>
        </tr>
        <tr>
          <td>
            Cookies
          </td>
          <td>
            13 mois
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <h2>Quels droits avez-vous ?</h2>
    <p>
      Vous disposez d’un :
      <ul>
        <li>droit d’information et d’un droit d’accès à vos données ;</li>
        <li>droit de rectification, et le cas échéant de suppression des données ;</li>
        <li>droit d’opposition.</li>
      </ul>
      Pour les exercer, contactez-nous par voie électronique à : <a class="fr-link"
                                                                    title="equipe@agora.beta.gouv.fr"
                                                                    href="equipe@agora.beta.gouv.fr">
      equipe@agora.beta.gouv.fr
    </a>.
      <br/>
      Ou par voie postale : Direction interministérielle de la transformation publique - TSA 70732 - 75334 Paris Cedex 07
      <br/><br/>
      Puisque ce sont des droits personnels, nous ne traiterons votre demande que si nous sommes en mesure de vous identifier. Pour
      l’exercice de vos droits, veuillez vous munir du code suivant [User ID] (disponible dans “Votre Profil - Supprimer mon compte”). Dans
      le cas où nous ne parvenons pas à vous identifier, nous pourrions être amenés à vous demander une preuve de votre identité.
      <br/><br/>
      Nous nous engageons à vous répondre dans un délai raisonnable qui ne saurait dépasser 1 mois à compter de la réception de votre
      demande.
      <br/><br/>
      Si vous ne jugez pas suffisante la prise en compte de vos droits, vous pouvez contacter la CNIL : <a href="https://www.cnil.fr"
                                                                                                           target="_blank" rel="external">https://www.cnil.fr</a>
    </p>
    <h2>Qui va avoir accès à ces données ?</h2>
    <p>
      Les données ne sont ni cédées, ni transmises ni divulguées à des tiers non autorisés.

      Les accès aux données sont strictement encadrées : les personnes suivantes sont susceptibles d’avoir accès aux données :
      <ul>
        <li>Les membres d’Agora qui ont besoin des données dans leurs missions, notamment les modérateurs, les équipes techniques, les
          personnes
          chargées de l’analyse des données ;
        </li>
        <li>Les agents publics dans l’exercice de leurs fonctions, notamment les agents des administrations concernées par les consultations
          ;
        </li>
        <li>Les sous-traitants intervenant dans le processus de traitement de données, listés ci-dessous.</li>
      </ul>
      Les données et informations sont anonymisées dès que les durées de conservation indiquées sont échues.
    </p>
    <h2>Quelles mesures de sécurité mettons-nous en place ?</h2>
    <p>
      Nous mettons en place plusieurs mesures pour sécuriser les données :
      <ul>
        <li>Stockage des données en base de données en France ;</li>
        <li>Cloisonnement des données ;</li>
        <li>Surveillance technique et sécurisation de l’application (journaux de connexion) ;</li>
        <li>Protection contre les virus, malwares et logiciels espions ;</li>
        <li>Protection des réseaux ;</li>
        <li>Sauvegarde ;</li>
        <li>Mesures restrictives limitant l’accès physique aux données à caractère personnel.</li>
      </ul>
      Nous nous engageons conformément à la réglementation en vigueur, à mettre en œuvre toutes les mesures techniques et organisationnelles
      appropriées grâce à des moyens de sécurisation physiques et logistiques permettant de garantir un niveau de sécurité adapté au regard
      des risques d'accès accidentels, non autorisés ou illégaux, de divulgation, d'altération, de perte ou encore de destruction des
      données personnelles vous concernant.
    </p>
    <h2>Qui nous aide à traiter les données ?</h2>
    <p>
      Certaines des données sont envoyées à d’autres acteurs, appelés « sous-traitants de données », pour qu’ils nous aident à les traiter..
      Nous nous assurons qu’ils respectent strictement le RGPD et qu’ils apportent des garanties suffisantes en matière de sécurité.

      <div class="fr-table">
        <table class="simple-table">
          <thead>
          <tr>
            <th>
              Sous-traitant
            </th>
            <th>
              Pays destinataire
            </th>
            <th>
              Traitement réalisé
            </th>
            <th>
              Garanties
            </th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              Empreinte Digital 
            </td>
            <td>
              France
            </td>
            <td>
              Cookie mesure d’audience
            </td>
            <td>
              <a href="https://empreintedigitale.fr/"
                 target="_blank" rel="external">
                https://empreintedigitale.fr/
              </a><br/>
              Solution Matomo installée et opérée par Empreinte Digital pour le compte de la Direction interministérielle du numérique
            </td>
          </tr>
          <tr>
            <td>
              Scalingo
            </td>
            <td>
              France
            </td>
            <td>
              Infogérance
            </td>
            <td>
              <a href="https://scalingo.com/fr/contrat-gestion-traitements-donnees-personnelles"
                 target="_blank" rel="external">
                https://scalingo.com/fr/contrat-gestion-traitements-donnees-personnelles
              </a>
            </td>
          </tr>
          <tr>
            <td>
              Outscale
            </td>
            <td>
              France
            </td>
            <td>
              Hébergement du site web
            </td>
            <td>
              <a href="https://fr.outscale.com/contact-donnees-personnelles/"
                 target="_blank" rel="external">
                https://fr.outscale.com/contact-donnees-personnelles/
              </a>
            </td>
          </tr>
          <tr>
            <td>
              Tally
            </td>
            <td>
              Belgique
            </td>
            <td>
              Formulaire expérience utilisateur
            </td>
            <td>
              <a href="https://tally.so/help/gdpr"
                 target="_blank" rel="external">
                https://tally.so/help/gdpr
              </a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </p>
    <h2>Cookies</h2>
    <p>
      Un cookie est un fichier déposé sur votre terminal lors de la visite d’un site. Il a pour but de collecter des informations relatives
      à votre navigation et de vous adresser des services adaptés à votre terminal (ordinateur, mobile ou tablette)
      <br/><br/>
      En application de l’article 5(3) de la directive 2002/58/CE modifiée concernant le traitement des données à caractère personnel et la
      protection de la vie privée dans le secteur des communications électroniques, transposée à l’article 82 de la loi n°78-17 du 6 janvier
      1978 relative à l’informatique, aux fichiers et aux libertés, les traceurs ou cookies suivent deux régimes distincts :
      <ul>
        <li>Les cookies strictement nécessaires au service ou ayant pour finalité exclusive de faciliter la communication par voie
          électronique sont dispensés de consentement préalable au titre de l’article 82 de la LIL.
        </li>
        <li>Les cookies n’étant pas strictement nécessaires au service ou n’ayant pas pour finalité exclusive de faciliter la communication
          par voie électronique doivent être consentis par l’utilisateur. Ce consentement de la personne concernée pour une ou plusieurs
          finalités spécifiques constitue une base légale au sens du RGPD et doit être entendu au sens de l’article 6-a du RGPD.
        </li>
      </ul>
      Cookies recensés sur Agora :
      <div class="fr-table">
        <table class="simple-table">
          <thead>
          <tr>
            <th>
              Cookies
            </th>
            <th>
              Pays destinataire
            </th>
            <th>
              Base juridique
            </th>
            <th>
              Utilisation
            </th>
            <th>
              Garanties
            </th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              Matomo
            </td>
            <td>
              France
            </td>
            <td>
              Exemption de consentement
            </td>
            <td>
              Mesure d’audience
            </td>
            <td>
              <a href="https://fr.matomo.org/privacy-policy/"
                 target="_blank" rel="external">
                https://fr.matomo.org/privacy-policy/
              </a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      Pour aller plus loin, vous avez la possibilité de consulter les fiches proposées par la CNIL grâce aux liens suivants :<br/>
      <a href="https://www.cnil.fr/fr/cookies-et-traceurs-que-dit-la-loi"
         target="_blank" rel="external">
        Cookies & traceurs : que dit la loi ?
      </a><br/>
      <a href="https://www.cnil.fr/fr/les-conseils-de-la-cnil-pour-maitriser-votre-navigateur"
         target="_blank" rel="external">
        Cookies : les outils pour les maîtriser
      </a>
    </p>
  </div>
</template>
