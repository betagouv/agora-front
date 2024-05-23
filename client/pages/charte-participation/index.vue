<script setup lang="ts">
import type { Ref } from 'vue'
import type Link from '~/client/types/dsfr/link';

definePageMeta({
  layout: 'basic',
})

useHead({
  title: 'Charte de participation - Agora',
})

const links: Ref<Link[]> = ref([{ to: '/', text: 'Accueil' }, { text: 'Charte de participation' }])
</script>

<template>
  <DsfrBreadcrumb :links="links" />
  <div class="fr-mt-8w">
    <h1>Charte de participation</h1>
    <h2>Charte simplifiée pour les Questions citoyennes</h2>
    <div>
      De façon générale, est interdit tout comportement ou propos contraire aux dispositions législatives ou
      réglementaires.<br>
      Seront supprimées par les modérateurs de l’application les propos&nbsp;:
    <ul>
      <li>A caractère injurieux, discriminatoire, raciste, sexiste, xénophobe, obscène ou diffamatoire&nbsp;;</li>
      <li>Rédigés en langue étrangère&nbsp;;</li>
      <li>Relayant de fausses informations&nbsp;;</li>
      <li>Attaquant ad hominem un individu, qu’il soit ou non membre du Gouvernement, ou portant atteinte à sa vie
        privée&nbsp;;</li>
      <li>Les spams et les contenus de nature commerciale ou faisant la promotion d'un service ou d'une
        organisation&nbsp;;</li>
      <li>Contenant un lien vers un site internet&nbsp;;</li>
      <li>N’ayant pas une formulation interrogative (hors «&nbsp;détails supplémentaires&nbsp;»)&nbsp;;</li>
      <li>Ne portant pas sur l’action du Gouvernement ou relevant manifestement du hors-sujet.</li>
    </ul>
    <br>
    <i>Ajout, le 14 novembre 2023</i>, suite aux nombreux signalements d’utilisateurs&nbsp;: Par souci d’équité entre
    les participants, un sujet
    ayant déjà gagné la question la plus populaire n’est pas éligible dans le mois qui suit&nbsp;; les questions posées
    sur ce sujet ne seront donc
    pas acceptées pendant ce laps de temps. Cette nouvelle règle doit permettre d’assurer la variété et la diversité des
    sujets traités sur Agora.
    <br>
    <i>Ajout, le 30 janvier 2024</i>&nbsp;: Par souci de lisibilité et d’efficacité, les questions qui sont des doublons
    de questions déjà posées
    par d’autres utilisateurs pourront être refusées. Cette nouvelle règle doit permettre à chaque question d’avoir plus
    de chances de gagner en
    regroupant les soutiens sur une seule question.
    <br><br>
    Lorsque vous posez une question au Gouvernement, il vous est demandé de&nbsp;:
    <ul>
      <li>Respecter la charte de participation&nbsp;;</li>
      <li>Utiliser un langage correct, concis et compréhensible&nbsp;;</li>
      <li>Utiliser un prénom dans la case “Votre Prénom”&nbsp;;</li>
      <li>Ne mentionner aucune donnée à caractère personnel ou élément qui permettrait de vous identifier ou
        d'identifier une autre
        personne&nbsp;;
      </li>
      <li>Ne pas communiquer de données sensibles le concernant ou concernant des tiers, notamment les données qui
        révèlent l'origine
        raciale ou ethnique supposée, les opinions politiques, les convictions religieuses ou philosophiques ou
        l'appartenance syndicale,
        des données concernant la santé ou des données concernant la vie sexuelle ou l'orientation sexuelle d'une
        personne physique.
      </li>
    </ul>
    <br>
    Toute information transmise par l'Utilisateur relève de sa seule responsabilité.
    </div>
    <h2>Charte complète</h2>
    <div>
      Toute personne peut s’exprimer librement dans le cadre de l’application Agora sous réserve de respecter la
      présente Charte et les
      Dispositions légales relatives aux propos publics.<br>
      L’application Agora permet à tout Utilisateur de participer à des «&nbsp;Consultations&nbsp;» ou de poser des
      «&nbsp;Questions citoyennes&nbsp;» au
      Gouvernement. Une mise à jour de son contenu et de son fonctionnement est prévue au cours de son fonctionnement
      afin de prendre en
      compte les retours d’expériences et les remarques des Utilisateurs, et le cas échéant y intégrer d’autres
      fonctionnalités
      complémentaires.<br><br>
      Agora est développée au sein de l’incubateur des services numériques de la Direction interministérielle du
      numérique (DINUM) -
      Beta.gouv et mise en œuvre par, et sous la responsabilité, de la délégation interministérielle de la
      transformation publique
      (DITP).<br><br>
      Le téléchargement et l’installation de l’application supposent l’acceptation de la présente Charte de
      participation (ci-après «&nbsp;la
      Charte&nbsp;»).<br><br>
      La présente Charte&nbsp;:
    <ul>
      <li>Explique la manière dont l’équipe de modération d’Agora (“Editeur”) procède à la modération des contenus après
        leur publication
        &nbsp;;
      </li>
      <li>Définit les principes qui guident la publication, l'édition ou la suppression d'un contenu, conformément aux
        obligations légales
        et à la philosophie de l’application.
      </li>
    </ul>
    </div>
    <h3>I – Principes de la modération des Questions citoyennes posées au Gouvernement</h3>
    <div>
      Nous respectons la parole des Utilisateurs et n’altérons pas les questions, y compris critiques, dès lors qu’elles
      sont formulées avec
      cordialité et dans le respect de la charte ici présente.<br><br>
      Chaque Utilisateur peut poser une question au Gouvernement par semaine sur l’application.<br>
      La question posée par l’Utilisateur n’apparaîtra dans l’application des autres Utilisateurs qu’une fois qu’elle
      aura été validée par
      l’équipe de modération. Nous nous engageons à ce que cette validation intervienne le plus rapidement
      possible.<br><br>
      Sont supprimés par les modérateurs d’Agora&nbsp;:
    <ul>
      <li>Sans que cette liste soit limitative, les propos à caractère injurieux, discriminatoire, raciste, sexiste,
        xénophobe, obscène ou
        diffamatoire et dans tous les cas qui méconnaissent les obligations légales et règlementaires&nbsp;;
      </li>
      <li>Les propos rédigés en langue étrangère&nbsp;;</li>
      <li>Les propos relayant de fausses informations&nbsp;;</li>
      <li>Les propos attaquant ad hominem un individu, qu’il soit ou non membre du Gouvernement, ou portant atteinte à
        sa vie privée&nbsp;;
      </li>
      <li>Les spams et les contenus de nature commerciale ou faisant la promotion d'un service ou d'une
        organisation&nbsp;;</li>
      <li>Les propos contenants un lien vers un site internet&nbsp;;</li>
      <li>Les questions posées en des termes identiques ou similaires, notamment celles qui sont assimilables à du spam
        ou dont la
        répétition vient entacher la bonne navigation du public&nbsp;;
      </li>
      <li>Les contenus harcelants&nbsp;;</li>
      <li>Les contributions qui ne sont pas rédigées sous la forme de questions&nbsp;;</li>
      <li>Les contenus ne portant pas sur l’action du Gouvernement ou relevant manifestement du hors-sujet.</li>
    </ul>
    <br>
    <i>Ajout, le 14 novembre 2023</i>, suite aux nombreux signalements d’utilisateurs&nbsp;: Par souci d’équité entre
    les participants, un sujet
    ayant déjà gagné la question la plus populaire n’est pas éligible dans le mois qui suit&nbsp;; les questions posées
    sur ce sujet ne seront donc
    pas acceptées pendant ce laps de temps. Cette nouvelle règle doit permettre d’assurer la variété et la diversité des
    sujets traités sur Agora.
    <br>
    <i>Ajout, le 30 janvier 2024</i>&nbsp;: Par souci de lisibilité et d’efficacité, les questions qui sont des doublons
    de questions déjà posées
    par d’autres utilisateurs pourront être refusées. Cette nouvelle règle doit permettre à chaque question d’avoir plus
    de chances de gagner en
    regroupant les soutiens sur une seule question.
    <br><br>
    Si la question posée est refusée par l’équipe de modération, nous notifions l'Utilisateur de la suppression de la
    question sur
    l’application.<br><br>
    Si vous n’êtes pas d’accord avec cette suppression, vous pouvez nous écrire à agora@ beta.gouv.fr.
    </div>
    <h3>II – Principes de la modération des Consultations</h3>
    <p>
      Les Questions au Gouvernement sont publiées sur l’application et visibles par l’ensemble des Utilisateurs.<br><br>
      Les résultats des Consultations sont publiés de manière anonyme sur l’application pour les questions fermées. Les
      résultats des
      questions ouvertes ne sont pas publiés sur l’application et font l’objet d’une analyse ultérieure.
    </p>
    <h3>III – Engagements des Utilisateurs</h3>
    <div>
      Les Utilisateurs s’engagent à n’exprimer, diffuser, ou partager aucun contenu offensant ou contraire à la loi ou
      au règlement. Ils
      veillent notamment à&nbsp;:
    <ul>
      <li>Respecter les principes de la modération&nbsp;;</li>
      <li>Respecter la courtoisie nécessaire au bon déroulement des échanges&nbsp;;</li>
      <li>Utiliser un langage correct et compréhensible&nbsp;;</li>
      <li>Ne mentionner aucune donnée à caractère personnel dans les champs libres (que ce soit dans les questions
        citoyennes ou les
        consultations), c’est-à-dire tout élément qui permettrait de l'identifier, directement ou indirectement, ou
        d’identifier une autre
        personne&nbsp;;
      </li>
      <li>Ne pas communiquer de données sensibles le concernant ou concernant des tiers, notamment les données qui
        révèlent l'origine
        raciale ou ethnique supposée, les opinions politiques, les convictions religieuses ou philosophiques ou
        l'appartenance syndicale,
        des données concernant la santé ou des données concernant la vie sexuelle ou l'orientation sexuelle d'une
        personne physique.
      </li>
      <li>Ne pas renvoyer vers des sites, médias ou supports dont la teneur ne respecterait pas la présente charte,
        notamment la diffusion
        de contenus pornographiques
      </li>
      <li>Respecter les autres participants et leurs opinions&nbsp;: sans que cette liste soit limitative, ne pas
        utiliser des termes
        injurieux, grossiers, insultants, diffamatoires, sexistes, xénophobes, racistes.
      </li>
    </ul>
    <br>
    Les Utilisateurs s’engagent à participer aux Consultations et aux Questions avec sincérité. Cette disposition invite
    l’Utilisateur à&nbsp;:
    <ul>
      <li>Utiliser l’application de manière personnelle,</li>
      <li>Proposer des idées concourant à l’intérêt général et ne pas utiliser l’application à des fins de promotion
        commerciale</li>
    </ul>
    <br>
    Toute information transmise par l'Utilisateur est de sa seule responsabilité. L'Utilisateur s'engage à ne pas
    publier des contenus ou
    des informations contraires aux dispositions légales et réglementaires en vigueur. Dans le cas contraire, l’Editeur
    se réserve le
    droit de supprimer ces contenus.
    </div>
    <h3>IV – Engagements de l'Éditeur d’Agora</h3>
    <h4>Respect de l’anonymat</h4>
    <p>
      Le respect de l'anonymat des personnes permet à l’application d’Agora de publier en toute transparence les
      «&nbsp;Questions citoyennes&nbsp;» et
      les «&nbsp;Consultations&nbsp;».<br><br>
      Compte-tenu des informations collectées dans l’application, l’Editeur s’engage à mettre en place des mesures
      permettant de ne pas
      identifier les Utilisateurs de l’application. Il distribue à chaque Utilisateur un UserID. En outre, il s’engage à
      restituer
      anonymement les restitutions des différentes Consultations. Enfin, le prénom, qui constitue la donnée personnelle
      permettant
      d’identifier les individus, est supprimé au bout de 15 jours de l’application.<br><br>
      Afin de personnaliser les contenus, nous demandons aux Utilisateurs de signer leur Question au Gouvernement d’un
      «&nbsp;prénom&nbsp;».
      L’Utilisateur peut néanmoins choisir d’indiquer un autre prénom que le sien s’il le souhaite.
    </p>
    <h4>Protection de la réputation et de l’intégrité d’autrui</h4>
    <div>
      Les propos haineux, insultants ou discriminatoires envers des individus, au-delà du rappel à la loi et des
      sanctions encourues, font
      l’objet d’une attention particulière de la part de l'Éditeur. Afin de protéger l’intégrité de tous les
      participants, le non-respect de
      ces règles, et plus généralement des principes de la modération, expose les Utilisateurs aux sanctions graduées
      suivantes&nbsp;:
    <ul>
      <li>Niveau 1&nbsp;: Notification de modération et suppression des propos non conformes à la charte,</li>
      <li>Niveau 2&nbsp;: Bannissement temporaire,</li>
      <li>Niveau 3&nbsp;: Bannissement définitif.</li>
    </ul>
    </div>
    <h4>Liberté d’expression et proportionnalité de la modération</h4>
    <p>
      Les Utilisateurs de l’application concourent librement aux différentes Consultations et sans vérification de leurs
      contributions. Les
      Questions citoyennes, quant à elles, sont publiées après une vérification de leur adéquation avec la charte de
      participation par
      l’équipe Agora.<br><br>
      L’équipe Agora s’engage à ne modérer que les Questions qui contreviennent aux principes de la modération énumérés
      dans ce document.
      Les contributions critiques et toutes les opinions sont accueillies dans l’application.
    </p>
    <h4>Redevabilité et transparence des résultats</h4>
    <p>
      Toutes les contributions publiées sur l’application citoyenne sont prises en compte et font l’objet d’une analyse
      par
      l'Éditeur.<br><br>
      Celui-ci s’engage à répondre aux propositions issues des Consultations du Gouvernement, et à répondre
      régulièrement, idéalement chaque
      semaine, aux questions les plus soutenues.<br><br>
      Les résultats des questions fermées et anonymisées de chaque consultation sont publiés sur l’application citoyenne
      et accessibles à
      l’ensemble des Utilisateurs.<br><br>
      Pour toute question ou remarque relative à cette charte, nous vous invitons à envoyer un courriel à
      agora@beta.gouv.fr.
    </p>

  </div>
</template>
