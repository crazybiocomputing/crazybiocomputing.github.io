var dialog = {
'html'       :
'__people__<p>Bonjour, je m\'appelle Jason, je suis étudiant en bioinformatique...</p>__break__'+
'<p>A partir de l\'échantillon A, on va chercher de quel animal, cette séquence du gène COI provient...</p>__break__'+
'<p>... Pour cela, on va consulter les banques de données nucléiques qui stockent toutes les séquences publiées par les laboratoires de recherche du monde entier...</p>__break__'+
'<p>... On utilise un outil bioinformatique BLAST qui découpe la séquence inconnue en mots de 11 caractères de long puis qui recherche ces mots dans chacune des séquences de la banque de la même façon qu\'on recherche dans un dictionnaire...</p>__break__'+
'<p>... Si un grand nombre de mots est présent dans une séquence de la banque, alors on a de fortes chances que les deux séquences se ressemblent...  </p>__break__'+
'<p>... Comme on connait l\'animal d\'où est extrait la séquence de la banque, on pourra conclure que la séquence inconnue est du même animal.</p>__break__'+
'<p>... Ici, on a remplacé les mots par des couleurs (rouge,bleu,violet) pour représenter la séquence inconnue de l\'échantillon A...</p>__break__'=
'<p>...Recherche dans la micro-banque de données ci-dessous (à l\'aide des flèches haut et bas), la séquence qui contient les mêmes mots dans le même ordre...</p>__break__'+
'<p>... Une fois que tu as trouvé la bonne séquence, tu peux lire le nom scientifique de l\'animal. Appelle-moi au téléphone...Tu as 60 secondes pour trouver... Bonne chance.</p><br></br>__button__',
    'widgets': [
      {
        'event'   : 'onclick',
        'type'    : 'button',
        'title'   : 'Go!!'
      }
    ],
  },

  '107' : {
    'ID'         : '107',
    'element'    : 'chat',
    'people'     : 'boy',
    'html'     :
'__people__<p>... J\'ai reçu les trois autres séquences de Clara et j\'ai lancé un BLAST pour en trouver l\'origine: (B) <b>Panthera pardus</b>, (C) <b>Oryctolagus cuniculus</b>, (D) <b>Mus musculus</b></p> __break__'+
'<p>... Cherche sur Internet et dis-moi...quel est le nom commun de <b>Balaenoptera physalus</b> ?</p>',
'__player__le nom commun de <b>Balaenoptera physalus</b> est __select__'
    'widgets': [
      {
        'event'   : 'onchange',
        'type'    : 'select',
        'options' : ['???','abeille','baleine', 'dauphin', 'homme','lapin','léopard', 'panthère','poulet','python','rat','rorqual commun', 'sanglier', 'souris', 'tigre' ],
        'title'   : '',
      }
    ],
    'goto'       : {
      '???':'back','abeille':'back','baleine':'back', 'dauphin':'back', 'homme':'back','lapin':'back','léopard':'back', 
      'panthère':'back','poulet':'back','python':'back','rat':'back','rorqual commun':'118', 'sanglier':'back', 'souris':'back', 'tigre':'back' 
    },
  },
  '118' : {
    'ID'         : '118',
    'element'    : 'chat',
    'people'     : 'boy',
    'html'     :
    '<p>... de <b>Balaenoptera physalus</b> est "Rorqual Commmun", celui de <b>Panthera pardus</b> est __select__, </p> ',
    'widgets': [
      {
        'event'   : 'onchange',
        'type'    : 'select',
        'options' : ['???','abeille','baleine', 'dauphin', 'homme','lapin','léopard', 'panthère','poulet','python','rat','rorqual commun', 'sanglier', 'souris', 'tigre' ],
        'title'   : '',
      }
    ],
    'goto'       : {
      '???':'back','abeille':'back','baleine':'back', 'dauphin':'back', 'homme':'back','lapin':'back','léopard':'128', 
      'panthère':'back','poulet':'back','python':'back','rat':'back','rorqual commun':'back', 'sanglier':'back', 'souris':'back', 'tigre':'back' 
    },

  },
  '128' : {
    'ID'         : '128',
    'element'    : 'chat',
    'people'     : 'boy',
    'html'     :
    '<p>... celui de <b>Panthera pardus</b> est "Léopard", celui de <b>Oryctolagus cuniculus</b> est __select__ </p> ',
    'widgets': [
      {
        'event'   : 'onchange',
        'type'    : 'select',
        'options' : ['???','abeille','baleine', 'dauphin', 'homme','lapin','léopard', 'panthère','poulet','python','rat','rorqual commun', 'sanglier', 'souris', 'tigre' ],
        'title'   : '',
      }
    ],
    'goto'       : {
      '???':'back','abeille':'back','baleine':'back', 'dauphin':'back', 'homme':'back','lapin':'138','léopard':'back', 
      'panthère':'back','poulet':'back','python':'back','rat':'back','rorqual commun':'back', 'sanglier':'back', 'souris':'back', 'tigre':'back' 
    },

  },
  '138' : {
    'ID'         : '138',
    'element'    : 'chat',
    'people'     : 'boy',
    'html'     :
    '<p>... celui de <b>Oryctolagus cuniculus</b> est "Lapin", et de <b>Mus musculus</b> est __select__ </p>',
    'widgets': [
      {
        'event'   : 'onchange',
        'type'    : 'select',
        'options' : ['???','abeille','baleine', 'dauphin', 'homme','lapin','léopard', 'panthère','poulet','python','rat','rorqual commun', 'sanglier', 'souris', 'tigre' ],
        'title'   : '',
      }
    ],
    'goto'       : {
      '???':'back','abeille':'back','baleine':'back', 'dauphin':'back', 'homme':'back','lapin':'back','léopard':'back', 
      'panthère':'back','poulet':'back','python':'back','rat':'back','rorqual commun':'back', 'sanglier':'back', 'souris':'109', 'tigre':'back' 
    },
  },
  '109' : {
    'ID'         : '109',
    'element'    : 'chat',
    'people'     : 'boy',
    'html'     :
    '<p>... est "Souris".<br></br>BRAVO!!! Maintenant, retourne sur les lieux du crime dans le manoir de Lord Black et trouve le coupable. Il est forcement en contact avec un de ces animaux. Clique <a href="whale.php">ICI</a> </p>',
    'widgets': [
      {
        'event'   : 'onclick',
        'type'    : 'button',
        'title'   : 'Next'
      }
    ],
  },

  '106' : {
    'ID'         : '106',
    'element'    : 'chat',
    'people'     : 'boy',
    'html'     :
    '<p>... Allô... Hmm ... Non... je ne crois pas que ce soit la bonne réponse car les couleurs ne sont pas dans le bon ordre ... Allez, recommence et bon courage!!</p><br></br>__button__',
    'widgets': [
      {
        'event'   : 'onclick',
        'type'    : 'button',
        'title'   : 'Go!!'
      }
    ],
  },
'back' : {
  'ID'         : 'back',
  'element'    : 'chat',
  'people'     : 'previous',
  'html'       : '<p>__html__ __back__ </p>',
  'widgets'    : [
    {
    'type'  : 'back',
    'event' : 'onclick',
    'title' : 'Back'
    },
    {
    'type'  : 'html',
    'event' : '',
    'title' : ['Hmmm....Il faut chercher sur Internet avec Google, par exemple...<br></br>']
    }
  ],
  'goto'       : {},
},
  '100' : {
    'ID'         : '100',
    'element'    : 'chat',
    'people'     : 'boy',
    'html'     :
    '<p>... Holà !!, tu n\'as pas été assez rapide... Recommence... </p><br></br>__button__',
    'widgets': [
      {
        'event'   : 'onclick',
        'type'    : 'button',
        'title'   : 'Go!!'
      }
    ],
  },
  '105' : {
    'ID'         : '105',
    'element'    : 'chat',
    'people'     : 'boy',
    'html'     :
'<p>... Allô... Félicitations!!!! tu as trouvé la séquence ayant les mêmes mots que la séquence inconnue. <p>On peut donc déduire que l\'échantillon A provient de <b>Balaenoptera physalus</b> </p><br></br>__button__',
    'widgets': [
      {
        'event'   : 'onclick',
        'type'    : 'button',
        'title'   : 'Next',
        'trigger' : 'set 107'
      }
    ],
  },

};
