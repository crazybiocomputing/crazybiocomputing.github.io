var dialog = {
  '000' : {
    'ID'         : '000',
    'element'    : 'chat',
    'people'     : 'boy',
    'html'       :  '<p>Bonjour, je m\'appelle Jason, je suis étudiant en bioinformatique...</p>__button__',
    'widgets'     : [
      {
        'event'   : 'onclick',
        'type'    : 'button',
        'title'   : 'Next',
        'trigger' : 'set 00A'
      }
    ],
  },
  '00A' : {
    'ID'         : '00A',
    'element'    : 'chat',
    'people'     : 'boy',
    'html'     :
    'A partir des trois séquences nucléiques précédentes, on va chercher de quel animal, elles proviennent...</p>__button__',
    'widgets': [
      {
        'event'   : 'onclick',
        'type'    : 'button',
        'title'   : 'Next',
        'trigger' : 'set 00B'
      },
    ],
  },
  '00B' : {
    'ID'         : '00B',
    'element'    : 'chat',
    'people'     : 'boy',
    'html'     :
    '<p>... Pour cela, on va consulter les banques de données nucléiques qui stockent toutes les séquences publiées par les laboratoires de recherche du monde entier...</p>__button__',
    'widgets': [
      {
        'event'   : 'onclick',
        'type'    : 'button',
        'title'   : 'Next',
        'trigger' : 'set 00C'
      }
    ],
  },
  '00C' : {
    'ID'         : '00C',
    'element'    : 'chat',
    'people'     : 'boy',
    'html'     :
    '<p>... On utilise un outil bioinformatique BLAST qui découpe la séquence inconnue en mots de 28 caractères de long puis qui recherche ces mots dans chacune des séquences de la banque de la même façon qu\'on recherche dans un dictionnaire...</p>__button__',
    'widgets': [
      {
        'event'   : 'onclick',
        'type'    : 'button',
        'title'   : 'Next',
        'trigger' : 'set 00D'
      }
    ],
  },
  '00D' : {
    'ID'         : '00D',
    'element'    : 'chat',
    'people'     : 'boy',
    'html'     :
    '<p>... Si un grand nombre de mots est présent dans une séquence de la banque, alors on a de fortes chances que les deux séquences se ressemblent...  </p>__button__',
    'widgets': [
      {
        'event'   : 'onclick',
        'type'    : 'button',
        'title'   : 'Next',
        'trigger' : 'set 01E'

      }
    ],
  },
  '01E' : {
    'ID'         : '01E',
    'element'    : 'chat',
    'people'     : 'boy',
    'html'     :
    '<p>... Comme on connait l\'animal d\'où est extrait la séquence de la banque, on pourra conclure que la séquence inconnue est du même animal.</p>__button__',
    'widgets': [
      {
        'event'   : 'onclick',
        'type'    : 'button',
        'title'   : 'Next',
        'trigger' : 'set 00E'
      }
    ],
  },
  '00E' : {
    'ID'         : '00E',
    'element'    : 'chat',
    'people'     : 'boy',
    'html'     :
    '<p>... Ici, on a remplacé les mots par des couleurs (rouge,bleu,violet) pour représenter la séquence inconnue de l\'échantillon A...</p>__button__',
    'widgets': [
      {
        'event'   : 'onclick',
        'type'    : 'button',
        'title'   : 'Next',
        'trigger' : 'set 01F'
      }
    ],
  },
  '01F' : {
    'ID'         : '01F',
    'element'    : 'chat',
    'people'     : 'boy',
    'html'     :
    '<p>...Recherche dans la micro-banque de données ci-dessous (à l\'aide des flèches haut et bas), la séquence qui contient les mêmes mots dans le même ordre...</p>__button__',
    'widgets': [
      {
        'event'   : 'onclick',
        'type'    : 'button',
        'title'   : 'Next',
        'trigger' : 'set 00F'
      }
    ],
  },
  '00F' : {
    'ID'         : '00F',
    'element'    : 'chat',
    'people'     : 'boy',
    'html'     :
    '<p>... Une fois que tu as trouvé la bonne séquence, tu peux lire le nom scientifique de l\'animal. Appelle-moi au téléphone...Tu as 60 secondes pour trouver... Bonne chance.</p><br></br>__button__',
    'widgets': [
      {
        'event'   : 'onclick',
        'type'    : 'button',
        'title'   : 'Go!!'
      }
    ],
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
    '<p>... Allô... Félicitations!!!! tu as trouvé la séquence ayant les mêmes mots que la séquence inconnue. <br></br>On peut donc déduire que la séquence inconnue provient de <b>Balaenoptera physalus</b> </p><br></br>__button__',
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

};
