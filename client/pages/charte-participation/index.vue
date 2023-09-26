<script setup lang="ts">
import { Ref } from 'vue'

definePageMeta({
  layout: 'basic',
})

useHead({
  title: 'Agora - Charte de participation',
})

const domainName = useRuntimeConfig().public.domainName
const links: Ref<any[]> = ref([{to: '/', text: 'Accueil'}, {text: 'Charte de participation'}])
</script>

<template>
  <DsfrBreadcrumb :links="links"/>
  <div class="fr-mt-8w">
    <h1>Charte de participation</h1>
    <h2>Charte simplifiée pour les Questions citoyennes</h2>
    <p>
      De façon générale, est interdit tout comportement ou propos contraire aux dispositions législatives ou réglementaires.<br/>
      Seront supprimées par les modérateurs de l’application les propos :
      <ul>
        <li>A caractère injurieux, discriminatoire, raciste, sexiste, xénophobe, obscène ou diffamatoire ;</li>
        <li>Rédigés en langue étrangère ;</li>
        <li>Relayant de fausses informations ;</li>
        <li>Attaquant ad hominem un individu, qu’il soit ou non membre du Gouvernement, ou portant atteinte à sa vie privée ;</li>
        <li>Les spams et les contenus de nature commerciale ou faisant la promotion d'un service ou d'une organisation ;</li>
        <li>N’ayant pas une formulation interrogative (hors « détails supplémentaires ») ;</li>
        <li>Ne portant pas sur l’action du Gouvernement ou relevant manifestement du hors-sujet.</li>
      </ul>
      <br/>
      Lorsque vous posez une question au Gouvernement, il vous est demandé de :
      <ul>
        <li>Respecter la charte de participation ;</li>
        <li>Utiliser un langage correct, concis et compréhensible ;</li>
        <li>Utiliser un prénom dans la case “Votre Prénom” ;</li>
        <li>Ne mentionner aucune donnée à caractère personnel ou élément qui permettrait de vous identifier ou d'identifier une autre
          personne ;
        </li>
        <li>Ne pas communiquer de données sensibles le concernant ou concernant des tiers, notamment les données qui révèlent l'origine
          raciale ou ethnique supposée, les opinions politiques, les convictions religieuses ou philosophiques ou l'appartenance syndicale,
          des données concernant la santé ou des données concernant la vie sexuelle ou l'orientation sexuelle d'une personne physique.
        </li>
      </ul>
      <br/>
      Toute information transmise par l'Utilisateur relève de sa seule responsabilité.
    </p>
    <h2>Charte complète</h2>
    <p>
      Toute personne peut s’exprimer librement dans le cadre de l’application Agora sous réserve de respecter la présente Charte et les
      Dispositions légales relatives aux propos publics.<br/>
      L’application Agora permet à tout Utilisateur de participer à des « Consultations » ou de poser des « Questions citoyennes » au
      Gouvernement. Une mise à jour de son contenu et de son fonctionnement est prévue au cours de son fonctionnement afin de prendre en
      compte les retours d’expériences et les remarques des Utilisateurs, et le cas échéant y intégrer d’autres fonctionnalités
      complémentaires.<br/><br/>
      Agora est développée au sein de l’incubateur des services numériques de la Direction interministérielle du numérique (DINUM) -
      Beta.gouv et mise en œuvre par, et sous la responsabilité, de la délégation interministérielle de la transformation publique
      (DITP).<br/><br/>
      Le téléchargement et l’installation de l’application supposent l’acceptation de la présente Charte de participation (ci-après « la
      Charte »).<br/><br/>
      La présente Charte :
      <ul>
        <li>Explique la manière dont l’équipe de modération d’Agora (“Editeur”) procède à la modération des contenus après leur publication
          ;
        </li>
        <li>Définit les principes qui guident la publication, l'édition ou la suppression d'un contenu, conformément aux obligations légales
          et à la philosophie de l’application.
        </li>
      </ul>
    </p>
    <h3>I – Principes de la modération des Questions citoyennes posées au Gouvernement</h3>
    <p>
      Nous respectons la parole des Utilisateurs et n’altérons pas les questions, y compris critiques, dès lors qu’elles sont formulées avec
      cordialité et dans le respect de la charte ici présente.<br/><br/>
      Chaque Utilisateur peut poser une question au Gouvernement par semaine sur l’application.<br/>
      La question posée par l’Utilisateur n’apparaîtra dans l’application des autres Utilisateurs qu’une fois qu’elle aura été validée par
      l’équipe de modération. Nous nous engageons à ce que cette validation intervienne le plus rapidement possible.<br/><br/>
      Sont supprimés par les modérateurs d’Agora :
      <ul>
        <li>Sans que cette liste soit limitative, les propos à caractère injurieux, discriminatoire, raciste, sexiste, xénophobe, obscène ou
          diffamatoire et dans tous les cas qui méconnaissent les obligations légales et règlementaires ;
        </li>
        <li>Les propos rédigés en langue étrangère ;</li>
        <li>Les propos relayant de fausses informations ;</li>
        <li>Les propos attaquant ad hominem un individu, qu’il soit ou non membre du Gouvernement, ou portant atteinte à sa vie privée ;
        </li>
        <li>Les spams et les contenus de nature commerciale ou faisant la promotion d'un service ou d'une organisation ;</li>
        <li>Les questions posées en des termes identiques ou similaires, notamment celles qui sont assimilables à du spam ou dont la
          répétition vient entacher la bonne navigation du public ;
        </li>
        <li>Les contenus harcelants ;</li>
        <li>Les contributions qui ne sont pas rédigées sous la forme de questions ;</li>
        <li>Les contenus ne portant pas sur l’action du Gouvernement ou relevant manifestement du hors-sujet.</li>
      </ul>
      <br/>
      Si la question posée est refusée par l’équipe de modération, nous notifions l'Utilisateur de la suppression de la question sur
      l’application.<br/><br/>
      Si vous n’êtes pas d’accord avec cette suppression, vous pouvez nous écrire à agora@ beta.gouv.fr.
    </p>
    <h3>II – Principes de la modération des Consultations</h3>
    <p>
      Les Questions au Gouvernement sont publiées sur l’application et visibles par l’ensemble des Utilisateurs.<br/><br/>
      Les résultats des Consultations sont publiés de manière anonyme sur l’application pour les questions fermées. Les résultats des
      questions ouvertes ne sont pas publiés sur l’application et font l’objet d’une analyse ultérieure.
    </p>
    <h3>III – Engagements des Utilisateurs</h3>
    <p>
      Les Utilisateurs s’engagent à n’exprimer, diffuser, ou partager aucun contenu offensant ou contraire à la loi ou au règlement. Ils
      veillent notamment à :
      <ul>
        <li>Respecter les principes de la modération ;</li>
        <li>Respecter la courtoisie nécessaire au bon déroulement des échanges ;</li>
        <li>Utiliser un langage correct et compréhensible ;</li>
        <li>Ne mentionner aucune donnée à caractère personnel dans les champs libres (que ce soit dans les questions citoyennes ou les
          consultations), c’est-à-dire tout élément qui permettrait de l'identifier, directement ou indirectement, ou d’identifier une autre
          personne ;
        </li>
        <li>Ne pas communiquer de données sensibles le concernant ou concernant des tiers, notamment les données qui révèlent l'origine
          raciale ou ethnique supposée, les opinions politiques, les convictions religieuses ou philosophiques ou l'appartenance syndicale,
          des données concernant la santé ou des données concernant la vie sexuelle ou l'orientation sexuelle d'une personne physique.
        </li>
        <li>Ne pas renvoyer vers des sites, médias ou supports dont la teneur ne respecterait pas la présente charte, notamment la diffusion
          de contenus pornographiques
        </li>
        <li>Respecter les autres participants et leurs opinions : sans que cette liste soit limitative, ne pas utiliser des termes
          injurieux, grossiers, insultants, diffamatoires, sexistes, xénophobes, racistes.
        </li>
      </ul>
      <br/>
      Les Utilisateurs s’engagent à participer aux Consultations et aux Questions avec sincérité. Cette disposition invite l’Utilisateur à :
      <ul>
        <li>Utiliser l’application de manière personnelle,</li>
        <li>Proposer des idées concourant à l’intérêt général et ne pas utiliser l’application à des fins de promotion commerciale</li>
      </ul>
      <br/>
      Toute information transmise par l'Utilisateur est de sa seule responsabilité. L'Utilisateur s'engage à ne pas publier des contenus ou
      des informations contraires aux dispositions légales et réglementaires en vigueur. Dans le cas contraire, l’Editeur se réserve le
      droit de supprimer ces contenus.
    </p>
    <h3>IV – Engagements de l'Éditeur d’Agora</h3>
    <h4>Respect de l’anonymat</h4>
    <p>
      Le respect de l'anonymat des personnes permet à l’application d’Agora de publier en toute transparence les « Questions citoyennes » et
      les « Consultations ».<br/><br/>
      Compte-tenu des informations collectées dans l’application, l’Editeur s’engage à mettre en place des mesures permettant de ne pas
      identifier les Utilisateurs de l’application. Il distribue à chaque Utilisateur un UserID. En outre, il s’engage à restituer
      anonymement les restitutions des différentes Consultations. Enfin, le prénom, qui constitue la donnée personnelle permettant
      d’identifier les individus, est supprimé au bout de 15 jours de l’application.<br/><br/>
      Afin de personnaliser les contenus, nous demandons aux Utilisateurs de signer leur Question au Gouvernement d’un « prénom ».
      L’Utilisateur peut néanmoins choisir d’indiquer un autre prénom que le sien s’il le souhaite.
    </p>
    <h4>Protection de la réputation et de l’intégrité d’autrui</h4>
    <p>
      Les propos haineux, insultants ou discriminatoires envers des individus, au-delà du rappel à la loi et des sanctions encourues, font
      l’objet d’une attention particulière de la part de l'Éditeur. Afin de protéger l’intégrité de tous les participants, le non-respect de
      ces règles, et plus généralement des principes de la modération, expose les Utilisateurs aux sanctions graduées suivantes :
      <ul>
        <li>Niveau 1 : Notification de modération et suppression des propos non conformes à la charte,</li>
        <li>Niveau 2 : Bannissement temporaire,</li>
        <li>Niveau 3 : Bannissement définitif.</li>
      </ul>
    </p>
    <h4>Liberté d’expression et proportionnalité de la modération</h4>
    <p>
      Les Utilisateurs de l’application concourent librement aux différentes Consultations et sans vérification de leurs contributions. Les
      Questions citoyennes, quant à elles, sont publiées après une vérification de leur adéquation avec la charte de participation par
      l’équipe Agora.<br/><br/>
      L’équipe Agora s’engage à ne modérer que les Questions qui contreviennent aux principes de la modération énumérés dans ce document.
      Les contributions critiques et toutes les opinions sont accueillies dans l’application.
    </p>
    <h4>Redevabilité et transparence des résultats</h4>
    <p>
      Toutes les contributions publiées sur l’application citoyenne sont prises en compte et font l’objet d’une analyse par
      l'Éditeur.<br/><br/>
      Celui-ci s’engage à répondre aux propositions issues des Consultations du Gouvernement, et à répondre régulièrement, idéalement chaque
      semaine, aux questions les plus soutenues.<br/><br/>
      Les résultats des questions fermées et anonymisées de chaque consultation sont publiés sur l’application citoyenne et accessibles à
      l’ensemble des Utilisateurs.<br/><br/>
      Pour toute question ou remarque relative à cette charte, nous vous invitons à envoyer un courriel à agora@beta.gouv.fr.
    </p>

  </div>
</template>
