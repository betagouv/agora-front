<script setup lang="ts">
import { Ref } from 'vue'

definePageMeta({
  layout: 'basic',
})

useHead({
  title: 'Agora - CGU',
})

const domainName = useRuntimeConfig().public.domainName
const links: Ref<any[]> = ref([{to: '/', text: 'Accueil'}, {text: 'Conditions générales d\'utilisation'}])
</script>

<template>
  <DsfrBreadcrumb :links="links"/>
  <div class="fr-mt-8w">
    <h1>Conditions générales d'utilisation</h1>
    <p>
      Les présentes conditions générales d’utilisation (dites « CGU ») fixent le cadre d’utilisation de l’application « Agora ». Elles
      définissent notamment les conditions d’accès et d’utilisation du Service par l’Utilisateur.<br/><br/>
      Le téléchargement et l’installation de l’application supposent l’acceptation des présentes CGU.<br/>
      L’utilisation du Service est libre, facultative et gratuite.<br/>
      L’usage de la langue française y est obligatoire.<br/>
    </p>
    <h2>Article 1 – Présentation de l’application Agora</h2>
    <p>
      Agora est une application gratuite qui permet aux citoyens :
      <ul>
        <li>de participer à des consultations initiées par un ministère, de suivre les résultats, engagements et mises en œuvre suite aux
          consultations ;
        </li>
        <li>de poser une question sur l’action gouvernementale à laquelle peut répondre le ministre concerné ou le porte-parole du
          Gouvernement. Les Utilisateurs peuvent ainsi partager leurs contributions et idées sur des politiques publiques menées par le
          Gouvernement (consultations) mais aussi poser des questions au Gouvernement et soutenir les questions posées par d’autres citoyens
          (questions citoyennes)
        </li>
      </ul>
    </p>
    <h2>Article 2 – Définitions</h2>
    <p>
      « L'Utilisateur » est toute personne utilisant l’application Agora.<br/><br/>
      « L’Editeur » de la plateforme Agora est la Direction interministérielle de la transformation publique (DITP). Agora est développée au
      sein de l’incubateur de services numériques de la Direction interministérielle du numérique - Beta.gouv et mise en œuvre par, et sous
      la responsabilité, de la délégation interministérielle de la transformation publique (DITP).<br/><br/>
      Une « Consultation » est une question posée par un ministère sur la conception, l’élaboration et la mise en œuvre d’une politique
      publique ministérielle ou interministérielle.<br/><br/>
      Une « Question citoyenne » est toute question que l’Utilisateur pose au Gouvernement.<br/><br/>
      Le « Service » correspond aux fonctionnalités offertes par la plateforme Agora pour répondre à ses finalités.
    </p>
    <h2>Article 3 - Fonctionnalités</h2>
    <h3>3.1 Participer à une Consultation</h3>
    <p>
      L’Utilisateur peut participer aux Consultations proposées dans la page dédiée. Pour chaque Consultation, il accède aux différentes
      informations correspondantes (l’objet, la date limite de réponse, le nombre de questions, le temps nécessaire, le nombre de
      participants).<br/><br/>
      L’Utilisateur est amené à répondre :
      <ul>
        <li>Soit à des questions fermées parmi un panel de réponses proposées ;</li>
        <li>Soit à compléter un ou plusieurs champs libres (recommandations, idées, commentaires, remarques).</li>
      </ul>
      <br/>
      L'Utilisateur veille notamment à :
      <ul>
        <li>Ne mentionner dans les champs libres aucune donnée à caractère personnel, c’est-à-dire ne mentionner aucune donnée qui
          permettrait d’identifier une personne physique ;
        </li>
        <li>Respecter le cadre légal qui encadre la liberté d’expression. En conséquence, ne pas utiliser l’application à des fins de
          prosélytisme, de promotion commerciale ou de propos diffamatoires.
        </li>
      </ul>
      <br/>
      Les Consultations sont classées par thématiques :
      <ul>
        <li>Agriculture & alimentation 🌾</li>
        <li>Autonomie 👵</li>
        <li>Culture 🎭</li>
        <li>Démocratie 🗳</li>
        <li>Economie 📈</li>
        <li>Education & jeunesse 🎓</li>
        <li>Egalité 👥</li>
        <li>Energie ⚡️</li>
        <li>Enfance 👶</li>
        <li>Etudes sup. & recherche 🧬</li>
        <li>Europe & international 🌏</li>
        <li>Handicap 👩‍🦽</li>
        <li>Justice ⚖️</li>
        <li>Logement 🏡</li>
        <li>Outre-mer 🌍</li>
        <li>Santé 🏥</li>
        <li>Sécurité & défense 🛡</li>
        <li>Services publics 🏛</li>
        <li>Solidarités 🤝</li>
        <li>Sport 🏀</li>
        <li>Transition écologique 🌱</li>
        <li>Transports 🚊</li>
        <li>Travail 💼</li>
      </ul>
      <br/>
      L’Utilisateur peut modifier ses réponses aux Consultations tant qu’il n’a pas validé ses réponses.<br/><br/>
      L’Utilisateur peut accéder aux résultats et à l’historique des consultations auxquelles il a participé.
    </p>
    <h3>3.2 Poser une Question citoyenne</h3>
    <p>
      L’Utilisateur peut poser une « Question citoyenne » une fois par semaine : la formulation de la question est libre, il est possible de
      mentionner des détails supplémentaires.<br/><br/>
      Chaque Utilisateur peut poser une question au Gouvernement sur l’application, sous réserve de respecter la charte de participation. Il
      pourra la partager à son entourage, par message ou sur les réseaux sociaux par exemple, pour l’inciter à la soutenir.<br/><br/>
      La question posée par l’Utilisateur n’apparaîtra dans l’application des autres Utilisateurs qu’une fois validée par l’équipe de
      modération. L’Editeur s’engage à ce que cette validation intervienne le plus rapidement possible.<br/><br/>
      L'Utilisateur veille notamment à :
      <ul>
        <li>Ne mentionner dans les champs libres aucun élément qui permettrait d'identifier, directement ou indirectement une personne
          physique ;
        </li>
        <li>A respecter les termes de la Charte de participation.</li>
      </ul>
      <br/>
      Les Questions posées au Gouvernement sont réparties en thématiques (menu déroulant) :
      <ul>
        <li>Agriculture & alimentation 🌾</li>
        <li>Autonomie 👵</li>
        <li>Culture 🎭</li>
        <li>Démocratie 🗳</li>
        <li>Economie 📈</li>
        <li>Education & jeunesse 🎓</li>
        <li>Egalité 👥</li>
        <li>Energie ⚡️</li>
        <li>Enfance 👶</li>
        <li>Etudes sup. & recherche 🧬</li>
        <li>Europe & international 🌏</li>
        <li>Handicap 👩‍🦽</li>
        <li>Justice ⚖️</li>
        <li>Logement 🏡</li>
        <li>Outre-mer 🌍</li>
        <li>Santé 🏥</li>
        <li>Sécurité & défense 🛡</li>
        <li>Services publics 🏛</li>
        <li>Solidarités 🤝</li>
        <li>Sport 🏀</li>
        <li>Transition écologique 🌱</li>
        <li>Transports 🚊</li>
        <li>Travail 💼</li>
        <li>Autre / Je ne sais pas 📦</li>
      </ul>
      <br/>
      Le ministre concerné ou le porte-parole du gouvernement peut répondre à la question sous la forme d’un texte ou d’une vidéo. Les
      Utilisateurs peuvent indiquer de façon anonyme si la réponse est pertinente en cliquant sur « oui » ou « non ».
    </p>
    <h3>3.3. Soutenir une Question citoyenne d’un autre Utilisateur</h3>
    <p>
      L’Utilisateur a accès aux différentes questions posées par d’autres Utilisateurs dès qu’elles sont validées par l’équipe de
      modération. Il peut les filtrer par catégories : « Populaires », « Récentes », « Suivies ».<br/><br/>
      L’Utilisateur peut soutenir de façon anonyme autant de questions citoyennes posées par les autres Utilisateurs qu’il le souhaite en
      appuyant sur le bouton “Coeur” ou le bouton “Soutenir la question”.
    </p>
    <h3>3.4. Renseignement des données socio-démographiques</h3>
    <p>
      L’Utilisateur peut remplir des informations sur son profil. Cette fonctionnalité est proposée d’office après l’envoi de ses réponses à
      une 2ème Consultation. Ces informations facultatives permettent de réaliser une analyse anonyme des différentes démarches en fonction
      du profil des Utilisateurs.<br/><br/>
      L’Utilisateur qui le souhaite peut indiquer :
      <ul>
        <li>Son genre ;</li>
        <li>Son année de naissance ;</li>
        <li>Son département ou territoire d’outre-mer de résidence ;</li>
        <li>Son cadre de vie ;</li>
        <li>Sa catégorie socio-professionnelle ;</li>
        <li>Certaines modalités de son engagement citoyen.</li>
      </ul>
      <br/>
      Ces informations peuvent être consultées, modifiées ou supprimées par l’Utilisateur au sein de l’onglet « Vos informations » dans la
      page « Mon profil ».
    </p>
    <h3>3.5. Contribution à un formulaire en ligne pour améliorer l’application</h3>
    <p>
      L’Utilisateur peut de manière facultative contribuer à l’amélioration de l’application Agora en répondant à un formulaire en ligne sur
      un site dédié.
    </p>
    <h2>Article 4 - Responsabilités</h2>
    <h3>4.1 L'Éditeur (DITP)</h3>
    <p>
      Les informations diffusées sur le Service sont réputées fiables mais l’Editeur ne garantit pas qu’elles soient exemptes de défauts,
      d’erreurs ou d’omissions.<br/><br/>
      L’Editeur s’engage à ne pas modifier ou altérer le contenu des propos tenus par l’Utilisateur dès lors qu’ils respectent les termes de
      la Charte de participation de l’application.<br/><br/>
      L'Éditeur assure la modération de l’application. A ce titre, il se réserve le droit de supprimer les propos notamment : xénophobes,
      prosélytes, diffamatoires, irrespectueux, injurieux, sexistes, racistes, harcelants, pornographiques, de nature à troubler l’ordre
      public, les fausses informations ou encore toutes formes de publicité commerciale.<br/><br/>
      L’Editeur s’engage à la sécurisation de la plateforme, notamment en prenant toutes les mesures nécessaires permettant de garantir la
      sécurité et la confidentialité des informations fournies.<br/><br/>
      L'Éditeur fournit les moyens nécessaires et raisonnables pour assurer un accès continu à l’application. Il se réserve la liberté de
      faire évoluer, de modifier ou de suspendre, sans préavis, l’application pour des raisons de maintenance ou pour tout autre motif jugé
      nécessaire.
    </p>
    <h3>4.2 L’Utilisateur</h3>
    <p>
      L’Utilisateur s’engage à respecter les termes de la Charte de participation.<br/><br/>
      A cet égard, il veille notamment à ne mentionner aucun élément qui permettrait d'identifier, directement ou indirectement une personne
      physique.<br/><br/>
      L’Utilisateur s’assure de ne pas communiquer de données à caractère personnel ou sensibles le concernant ou concernant des tiers,
      notamment les données qui révèlent l'origine raciale ou ethnique supposée, les opinions politiques, les convictions religieuses ou
      philosophiques ou l'appartenance syndicale, des données concernant la santé ou des données concernant la vie sexuelle ou l'orientation
      sexuelle d'une personne physique.<br/><br/>
      Toute information transmise par l'Utilisateur est de sa seule responsabilité. L'Utilisateur s'engage à ne pas publier des contenus ou
      des informations contraires aux dispositions légales et réglementaires en vigueur. Dans le cas contraire, l’Editeur se réserve le
      droit
      de supprimer ces contenus.<br/><br/>
      Il est notamment rappelé que :
      <ul>
        <li>toute personne procédant à une fausse déclaration pour elle-même ou pour autrui s’expose, notamment, aux sanctions prévues à
          l’article
          441-1 du code pénal, prévoyant des peines pouvant aller jusqu’à trois ans d’emprisonnement et 45 000 euros d’amende ;
        </li>
        <li>tout propos injurieux ou diffamatoire est susceptible d’être sanctionné au titre du code pénal et de la loi du 29 juillet 1881
          sur
          la
          liberté de la presse.
        </li>
      </ul>
      <br/>
      L’Utilisateur s’engage à ne pas commercialiser les éléments reçus dans le cadre de cette application.<br/>
      L'Éditeur s’autorise à supprimer, sans préavis ni indemnité d’aucune sorte, les contenus faisant l’objet d’une utilisation
      contrevenante
      aux présentes CGU ou à la Charte de participation.
    </p>
    <h2>Article 5 - Mise à jour des conditions d’utilisation</h2>
    <p>
      Les termes des présentes conditions d’utilisation peuvent être amendés à tout moment, en fonction des modifications apportées au
      Service, de l’évolution de la législation ou pour tout autre motif jugé nécessaire.
    </p>
  </div>
</template>
