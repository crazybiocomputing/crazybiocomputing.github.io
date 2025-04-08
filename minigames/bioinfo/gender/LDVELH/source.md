



## 0

You didn't analyze the tooth found in the crime scene and it is human. You have to determine if it belongs to a man or a woman... to see if this tooth belongs to the arrested suspect or of an accomplice.

Rendez-vous au [LINK,1].

## 1

Avant de se lancer dans des expériences qui peuvent s'avérer coûteuses alors que vous avez un budget (et un temps) limité, vous décidez de faire un peu de bibliographie.
Vous cherchez donc sur Wikipedia (version anglaise) un constituant majeur de la dent qui pourrait être présent sur les chromosomes sexuels et ainsi discriminer le sexe du propriétaire de la dent. Après une heure de recherches [TIME,-1], vous avez essayé divers mots-clés, navigué sur plusieurs pages et finalement vous avez trouvé 5 constituants potentiellement intéressants...

Sachant que votre temps est compté, par lequel allez-vous commencer?

- Collagène (rendez-vous au [LINK,15]).
- Amélogénine (rendez-vous au [LINK,27]).
- Améloblastine (rendez-vous au [LINK,43]).
- Enaméline (rendez-vous au [LINK,67]).
- Tuftéline (rendez-vous au [LINK,89]).


## 2

Maintenant que vous avez les deux séquences, il va falloir amplifier les gènes `AMELX` et `AMELY` à partir de la dent. Pour cela, la technique PCR (see Principle in Help) sera utilisée. Comme vous le savez, il faut synthétiser des amorces, I got these <strong title="See the video in help">primers</strong>. N'ayant aucune idée comment faire le design de ces amorces, vous décidez d'aller voir un collègue bio-informatique.


Rendez-vous au [LINK,3].

## 3

- Bonjour, en quoi puis-je t'être utile?
- Je souhaiterais ?????????
- Avant de voir le design, prenons un exemple simple d'amorces (_primers_) et voyons comment utiliser des outils bio-informatiques pour voir.

- Si on prend ces amorces, peux-tu me dire les longueurs des amplicons sur les gènes `AMELX` et `AMELY`. Please, give me the lengths of the X and Y amplimers (amplified products) using this primer (Forward and Reverse, respectively)

```
5'-GCCATAATGGCAAAGA-3'
5'-CACCACTGGGATGTGG-3'
```

Just to remind you, the simplest way is to locally align these two short sequences with the gene sequence. Thus, the Forward has a perfect match with X gene at location <input type="text" size=10 name="item9" value="<?php echo $id9; ?>"></input>and the Reverse at <input type="text" size=10 name="item10" value="<?php echo $id10; ?>"></input>.

The Forward has a perfect match with Y gene at location and the Reverse at <input type="text" size=10 name="item12" value="<?php echo $id12; ?>"></input>.

Je dois utiliser un outil du package `EMBOSS` pour cela...

- Si vous souhaitez utilser `NEEDLE`, rendez-vous au [LINK,11]
- Si vous souhaitez utiliser `WATER`, rendez-vous au [LINK,20]
- Si vous souhaitez utiliser `PRIMERSEARCH`, rendez-vous au [LINK,25]


## 4

Suite aux deux alignements de `AMELX` avec la paire d'amorces, vous avez:

- Pour l'amorce sens: les positions **10051** et **10066** 
- Pour l'amorce anti-sens: les positions **4095** et **4110**

To compute the lengths of the amplimers for the X and Y genes, you need the total length of your gene sequence. Then, the formula is <code>length = (L-R+1) - F +1</code>.

On a donc une longueur d'amplicon = (14349 - 4095 + 1) - 10051 + 1 = 205 bp

Refaites le même calcul avec `AMELY`, rendez-vous au paragraphe correspondant à la longueur en paires de base de l'amplicon pour `AMELY` [GOTO,205].

## 5

En discutant avec l'équipe de biologie moléculaire et des collègues bio-informatiques [TIME,-1], vous sélectionnez une liste de primers potentiellement intéressants. Quelle paire sera la plus adaptée à votre problématique....

```
A
5'-TATTTGGACTCTCTCTGAGGA-3'
5'-TTCTACTACAAGGGTGTTGCA-3'

B
5'-CTGGAGAGCCACAAGCTGAC-3'
5'-TTGCTGTGGACTGCCAAGAG-3'

C
5'-ATAAGTATCGACCTCGTCGGAAG-3'
5'-GCACTTCGCTGCAGAGTACCGAAG-3'

D
5'-CCCTGGGCTCTGTAAAGAATAGTG-3'
5'-ATCAGAGCTTAAACTGGGAAGCTG-3'

E
5'-ATGATAGAAACGGAAATATG-3'
5'-AGTAGAATGCAAAGGGCTC-3'
```

Il faut trouver un outil qui rapidement vous donnera les amplicons. Pour cela, il faut utiliser un outil du package `EMBOSS` pour cela...

- Si vous souhaitez utilser `NEEDLE`, rendez-vous au [LINK,12]
- Si vous souhaitez utiliser `WATER`, rendez-vous au [LINK,14]
- Si vous souhaitez utiliser `PRIMERSEARCH`, rendez-vous au [LINK,16]



## 6

<img src="gel.jpg"></img>

I chose the primer you selected, did the PCR and I get this elecrophoresis gel. Is it a male or female tooth?<br>

- Si vous pensez que la dent est d'origine masculine, rendez-vous au [LINK,102].
- Si vous pensez que la dent est d'origine féminine, rendez-vous au [LINK,30].

## 7

Congratulations!! The code for the mini-game is 'enamel.php'

## 8

## 9

Faites la somme des deux codes trouvés avec les séquences et rendez-vous à ce paragraphe.

[GOTO,49]

## 10

## 11

Le programme `NEEDLE` utilise l'algorithme de Needleman et Wunsch qui est un algorithme global. Vous perdez inutilement du temps [TIME,-1].

Cherchez un autre programme du package EMBOSS [LINK,3].

## 12

Le programme `NEEDLE` utilise l'algorithme de Needleman et Wunsch qui est un algorithme global. Vous perdez inutilement du temps [TIME,-1].

Cherchez un autre programme du package EMBOSS [LINK,5].

## 13

Pour `AMELX`, la meilleure amorce (<em>primer</em>) est le `A`. "C'est le premier, c'est sûrement le bon!!!..." pensez-vous. Et non!!! 

Il est trop tard pour faire d'autres expériences, la nuit est tombée et tout le monde est parti. Une autre fois, peut-être...

[GAMEOVER,999]

## 14

Le programme `WATER` est utilisable mais comme nous devons tester plusieurs amorces simultanément, cet outil n'est pas très adapté. On préferera `PRIMERSEARCH`. Rendez-vous au [LINK,16].

## 15

Vous perdez du temps [TIME, -1] sur le web avec le collagène et finalement sur la page web anglaise de Wikipedia (https://en.wikipedia.org/wiki/Tooth_enamel), vous trouvez la phrase "[...]Enamel does not contain collagen, as found in other hard tissues such as dentin and bone, [...]". Le collagène **n'est pas présent**!! 

Si vous souhaitez vous renseigner sur une autre protéine, rendez-vous au [LINK,1].

## 16

Maintenant que vous avez trouvé le bon outil EMBOSS, mettez en forme le fichier contenant les diverses amorces. 

Si vous n'avez jamais utilisé `PRIMERSEARCH`, rendez-vous au [LINK,19] sinon rendez-vous au [LINK,40].

## 17

"C'est le premier, c'est sûrement le bon!!!..." pense-vous. Et non!!! 

Il est trop tard pour faire d'autres expériences, la nuit est tombée et tout le monde est parti. Une autre fois, peut-être...

[GAMEOVER,999]

## 18

Sur EMBOSS, la première chose est de créer avec un éditeur de texte le fichier contenant les deux amorces avec la syntaxe suivante. Pour chaque paire d'amorces, on doit créer une ligne avec un nom suivi de la paire d'amorces sur la même ligne séparée par un espace. Par exemple,

```
MyPrimer001 primerForward1 primerReverse1
MyPrimer002 primerForward2 primerReverse2
MyPrimer003 primerForward3 primerReverse3
MyPrimer004 primerForward4 primerReverse4

```

Ici, on va donc créer un fichier `primer.txt` avec une seule ligne:

```
MyPrimer GCCATAATGGCAAAGA CACCACTGGGATGTGG
```
Ensuite sur la page de PrimerSearch, copiez la séquence pour laquelle on cherche l'amplicon puis à `Primer pairs file:` sélectionnez le fichier `primer.txt`.

- Si vous avez collé la séquence de `AMELX`, cliquez sur le bouton `Run primersearch` et rendez-vous au [LINK,86].
- Si vous avez collé la séquence de `AMELY`, cliquez sur le bouton `Run primersearch` et rendez-vous au [LINK,48].

## 19

Pour `PRIMERSEARCH` de EMBOSS, la première chose est de créer avec un éditeur de texte le fichier contenant les amorces selon la syntaxe suivante. Pour chaque paire d'amorces, on doit créer une ligne avec un nom suivi de la paire d'amorces sur la même ligne séparée par un espace. Par exemple,

```
MyPrimer001 primerForward1 primerReverse1
MyPrimer002 primerForward2 primerReverse2
MyPrimer003 primerForward3 primerReverse3
MyPrimer004 primerForward4 primerReverse4

```

Ensuite sur la page de `PRIMERSEARCH`, copiez la séquence pour laquelle on cherche l'amplicon puis à `Primer pairs file:` sélectionnez le fichier contenant vos amorces et exécutez le programme.

Retournez au paragraphe précédent [BACK].

## 20

Vous collez la séquence de `AMELX` et l'amorce sens `GCCATAATGGCAAAGA` dans le deuxième champ texte et vous obtenez l'alignement suivant.

```
########################################
# Program: water
# Rundate: Fri 28 Apr 2023 16:58:26
# Commandline: water
#    -auto
#    -asequence /var/lib/emboss-explorer/output/977726/.asequence
#    -bsequence /var/lib/emboss-explorer/output/977726/.bsequence
#    -brief
#    -outfile outfile
#    -aformat3 srspair
# Align_format: srspair
# Report_file: outfile
########################################

#=======================================
#
# Aligned_sequences: 2
# 1: NG_012040.1
# 2: 
# Matrix: EDNAFULL
# Gap_penalty: 10.0
# Extend_penalty: 0.5
#
# Length: 16
# Identity:      16/16 (100.0%)
# Similarity:    16/16 (100.0%)
# Gaps:           0/16 ( 0.0%)
# Score: 80.0
# 
#
#=======================================

NG_012040.1    10051 GCCATAATGGCAAAGA  10066
                     ||||||||||||||||
                   1 GCCATAATGGCAAAGA     16

```
Vous avez un <em>match</em> parfait entre les positions **10051** et **10066** de `AMELX`.

Refaites la même chose avec l'amorce anti-sens. Rendez-vous au [LINK,39].

## 21

Vu qu'il y a deux gènes AMELX et AMELY qui sont sur les chromosomes X et Y, respectivement, on peut en fonction du gène trouvé dans l'émail de la dent en déduire le sexe du suspect ayant perdu la dent.

- Si vous voulez faire une étude bio-informatique (dite <em>in silico</em>) sur `AMELX`, rendez-vous au [LINK,33].
- Si vous voulez faire une étude bio-informatique (dite <em>in silico</em>) sur `AMELY`, rendez-vous au [LINK,45].
- Si vous avez déjà les séquences de `AMELX`[LINK.IF,AMELX_FASTA,#AMX,#NO] et de `AMELY`[LINK#AMX.IF,AMELY_FASTA,#AMXY,#NO], rendez-vous au [LINK#AMXY,9].

## 22

## 23

"Arrêtez de cliquer sur n'importe quoi!!!" vocifère votre supérieur hiérarchique. Il est évident que la suite de votre stage au centre de police scientifique va être compliqué...

[GAMEOVER,999]

## 24

## 25

Oh la la!!! 
`PRIMERSEARCH` semble compliquer à utiliser, il faut créer un fichier texte avec NotePad++ ou un éditeur de texte équivalent en suivant une syntaxe

- Si vous insistez et acceptez de perdre du temps sur la documentation, rendez-vous au [LINK,18].
- Cet outil n'est vraiment pas pour vous, vous essayez d'en trouver un autre [LINK,???].
## 26

Vous êtes en retard et choisissez l'amorce `B` pour `AMELY` que vous avez aussitôt envoyée au laboratoire de biologie moléculaire. Soudain, le téléphone sonne. C'est le labo! Vous décrochez et vous vous faites incendier par son directeur car l'expérience n'a pas marché du tout et... "elle coûte cher!!! même très cher, vous m'entendez!?!" vocifère le chef. En fait, vous n'entendez plus rien, vos oreilles sonnent, votre coeur bat fort et vous vous voyez déjà en train de recopier des lignes de Python toute votre vie. Quel destin...

[GAMEOVER,999]


## 27 

En cherchant sur Wikipedia, vous trouvez quelques renseignements sur l'amélogénine.


<em>"[..]Amelogenins are type of extracellular matrix protein, which, together with ameloblastins, enamelins and tuftelins, direct the mineralization of enamel to form a highly organized matrix of rods, interrod crystal and proteins.[..]"</em>

<em>"[..]Amelogenins are a group of protein isoforms produced by alternative splicing or proteolysis from the AMELX gene, on the X chromosome, and also the AMELY gene in males, on the Y chromosome. They are involved in amelogenesis, the development of enamel [..]"</em> 

<em>"[..]Although the precise role of amelogenin(s) in regulating the mineralization process is unknown, it is known that amelogenins are abundant during amelogenesis. Developing human enamel contains about 70% protein, 90% of which are amelogenins. [..]"</em>

- Si vous souhaitez vous renseigner sur une autre protéine, rendez-vous au [LINK,1].
- Si vous pensez que c'est un bon candidat pour votre étude, rendez-vous au [LINK,21].

## 28

## 29

## 30

[GAMEOVER,999]

## 31

## 32

## 33

Vous allez sur NCBI Entrez, et vous devez choisir la banque de données...

- Si vous choisissez `Gene`, rendez-vous au [LINK,50].
- Si vous choisissez `Nucleotide`, rendez-vous au [LINK,64].
- Si vous choisissez `Protein`, rendez-vous au [LINK,77].

## 34

La meilleure amorce (<em>primer</em>) est le `C`

## 35

On peut alors lancer le programme `WATER` et on obtient un <em>match</em> parfait!!!

```
NG_012040.1     4095 CACCACTGGGATGTGG   4110
                     ||||||||||||||||
                   1 CACCACTGGGATGTGG     16
```

Les positions sont entre **4095** et **4110**. C'est excellent mais on perd du temps[TIME,-1]. Il faut maintenant calculer la 
longueur de l'amplicon. Rendez-vous au [LINK,4].

## 36

## 37

AMELY amorce C


## 38

## 39

Ici, c'est un peu plus compliqué. Il faut calculer le brin complémentaire de `AMELX`. On fait cela avec le programme `REVSEQ` ce qui nous donne 
la séquence complémentaire.  

Puis on lance l'alignement local deux à deux entre la séquence complémentaire et l'amorce anti-sens `CACCACTGGGATGTGG` avec `WATER`[LINK,35].

## 40

```
A
5'-TATTTGGACTCTCTCTGAGGA-3'
5'-TTCTACTACAAGGGTGTTGCA-3'

B
5'-CTGGAGAGCCACAAGCTGAC-3'
5'-TTGCTGTGGACTGCCAAGAG-3'

C
5'-ATAAGTATCGACCTCGTCGGAAG-3'
5'-GCACTTCGCTGCAGAGTACCGAAG-3'

D
5'-CCCTGGGCTCTGTAAAGAATAGTG-3'
5'-ATCAGAGCTTAAACTGGGAAGCTG-3'

E
5'-ATGATAGAAACGGAAATATG-3'
5'-AGTAGAATGCAAAGGGCTC-3'
```

- Si vous pensez que la meilleure amorce (<em>primer</em>) est le `A`, rendez-vous au [LINK,13].
- Si vous pensez que la meilleure amorce (<em>primer</em>) est le `B`, rendez-vous au [LINK,23].
- Si vous pensez que la meilleure amorce (<em>primer</em>) est le `C`, rendez-vous au [LINK,34].
- Si vous pensez que la meilleure amorce (<em>primer</em>) est le `D`, rendez-vous au [LINK,42].
- Si vous pensez que la meilleure amorce (<em>primer</em>) est le `E`, rendez-vous au [LINK,53].
- Si vous pensez qu'aucune de ces amorces n'est utile pour votre étude, rendez-vous au [LINK,63].

## 41

## 42

`PRIMERSEARCH` retourne un résultat pour l'amorce (<em>primer</em>) `D`.

```
Primer name D
Amplimer 1
	Sequence: NG_012040.1  
	Homo sapiens amelogenin X-linked (AMELX), RefSeqGene on chromosome X
	CCCTGGGCTCTGTAAAGAATAGTG hits forward strand at 8462 with 0 mismatches
	ATCAGAGCTTAAACTGGGAAGCTG hits reverse strand at [5783] with 0 mismatches
```

Il est temps de recommencer pour `AMELY`, rendez-vous au paragraphe correspondant à la longueur de cet amplicon.

[GOTO,106]

## 43

Sur la page Wikipedia de l'améloblastine, vous trouvez en 1ère phrase "[..]Ameloblastin is an enamel matrix protein that in humans is encoded by the AMBN gene.[..]". Super, c'est bien un constituant de la dent.

- Si vous souhaitez vous renseigner sur le gène AMBN, rendez-vous au [LINK,58].
- Si vous souhaitez vous renseigner sur une autre protéine, rendez-vous au [LINK,1].

## 44

Vous ouvrez un nouvel onglet dans votre navigateur, allez directement sur NCBI Entrez, sélectionnez la banque de données Gene puis saisissez `Homo sapiens ENAM`. La première réponse vous indique que ce gène se trouve sur le chromosome 4... qui n'est pas un des chromosomes sexuels. Ce n'est pas cela. Encore du temps de perdu[TIME,-1].

- Si vous souhaitez continuer votre exploration de l'énameline, rendez-vous au [LINK,44].
- Si vous souhaitez vous renseigner sur une autre protéine, rendez-vous au [LINK,1].

## 45

Vous allez sur NCBI Entrez, et vous devez choisir la banque de données...

- Si vous choisissez `Gene`, rendez-vous au [LINK,???].
- Si vous choisissez `Nucleotide`, rendez-vous au [LINK,72].
- Si vous choisissez `Protein`, rendez-vous au [LINK,83].


## 46

Avec la séquence `AMELX` au format FASTA, vous décidez de faire une étude bio-informatique. Rendez-vous au [LINK,40]
 
## 47

Vous avez une réponse pour l'amorce `D`!! Bonne nouvelle!!

```
Primer name D
Amplimer 1
	Sequence: NG_008011.1  
	Homo sapiens amelogenin Y-linked (AMELY), RefSeqGene on chromosome Y
	CCCTGGGCTCTGTAAAGAATAGTG hits forward strand at 9070 with 0 mismatches
	ATCAGAGCTTAAACTGGGAAGCTG hits reverse strand at [5930] with 0 mismatches
```
Rendez-vous au paragraphe correspondant à la longueur de l'amplicon soustrait de `53` [GOTO,59].

## 48

```
Primer name MyPrimer
Amplimer 1
	Sequence: NG_008011.1  
	Homo sapiens amelogenin Y-linked (AMELY), RefSeqGene on chromosome Y
	GCCATAATGGCAAAGA hits forward strand at 10481 with 0 mismatches
	CACCACTGGGATGTGG hits reverse strand at [4426] with 0 mismatches
	Amplimer length: 205 bp
```

Recommencez la même opération avec la séquence de `AMELX`, cliquez sur le bouton `Run primersearch` et rendez-vous au [LINK,86].


## 49

Vous avez maintenant les deux séquences `AMELX` et `AMELY`. L'heure tourne... toutes ces recherches vous ont fait perdre du temps. 

L'équipe de biologie moléculaire voudrait savoir quelles amorces (<em>primer</em>)sont les plus pertinentes pour produire `AMELX` et `AMELY`.

## 50

Vous choisissez la banque de données `Gene` et saisissez le mot clé `AMELX`, vous obtenez le résultat suivant:

```
SUMMARY
-------------------------------------------------------------------------------------------------

Official Symbol: AMELX (provided by HGNC)
Official full name: amelogenin X-linked (provided by HGNC)
Primary source: HGNC:HGNC:461
See related: Ensembl:ENSG00000125363; MIM:300391; AllianceGenome:HGNC:461
Gene type: protein coding
RefSeq status: REVIEWED
Organism: Homo sapiens

Lineage: Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi; Mammalia;
Eutheria; Euarchontoglires; Primates; Haplorrhini; Catarrhini; Hominidae; Homo

Also known as: AMG; AI1E; AIH1; ALGN; AMGL; AMGX

Summary: This gene encodes a member of the amelogenin family of extracellular matrix
proteins. Amelogenins are involved in biomineralization during tooth enamel
development. Mutations in this gene cause X-linked amelogenesis imperfecta.
Alternative splicing results in multiple transcript variants encoding different
isoforms. [provided by RefSeq, Jul 2008]

```

- Si vous voulez plus de détails et voir la cartographie du gène, rendez-vous au [LINK,101].
- Si vous voulez choisir une autre banque de données, rendez-vous au [LINK,33].
- Si vous voulez choisir une autre protéine de l'émail, rendez-vous au [LINK,1].


## 51

## 52

## 53

AMELX, la meilleure amorce (<em>primer</em>) est le `E`.

## 54

## 55

## 56

## 57

AMELY amorce 'E'

## 58

En allant fouiller dans les banques de données de NCBI Entrez comme Nucleotide our Gene, vous trouvez que c'est localisé sur... Zut!, c'est sur le chromosome 4!!! ce n'est pas un chromosome sexuel. Vous perdez du temps[TIME,-1].

- Si vous voulez choisir une autre protéine de l'émail, rendez-vous au [LINK,1].

## 59

Parfait!! Vous avez trouvé l'amorce pour produire vos gènes et les différencier. Rendez-vous au [LINK,68].

## 60

## 61

## 62

## 63

aucune amorce (<em>primer</em>) est le `A`

[GAMEOVER,999]

## 64

Vous choisissez la banque de données `Nucleotide` et saisissez le mot clé `AMELX`. Vous filtrez ensuite les résultats en cochant `Homo sapiens` dans `Top Organisms` et restreignez l'affichage à la banque `UniProtKB / Swiss-Prot` dans `Source databases`. Vous obtenez le résultat suivant:

```
LOCUS       NG_012040              14349 bp    DNA     linear   PRI 17-SEP-2022
DEFINITION  Homo sapiens amelogenin X-linked (AMELX), RefSeqGene on chromosome
            X.
ACCESSION   NG_012040
VERSION     NG_012040.1
KEYWORDS    RefSeq; RefSeqGene.
SOURCE      Homo sapiens (human)
  ORGANISM  Homo sapiens
            Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi;
            Mammalia; Eutheria; Euarchontoglires; Primates; Haplorrhini;
            Catarrhini; Hominidae; Homo.
COMMENT     REVIEWED REFSEQ: This record has been curated by NCBI staff. The
            reference sequence was derived from AC002366.1.
            This sequence is a reference standard in the RefSeqGene project.
            
            [WARNING] On Sep 27, 2022 this sequence was replaced by
            NG_012040.2.
            
            Summary: This gene encodes a member of the amelogenin family of
            extracellular matrix proteins. Amelogenins are involved in
            biomineralization during tooth enamel development. Mutations in
            this gene cause X-linked amelogenesis imperfecta. Alternative
            splicing results in multiple transcript variants encoding different
            isoforms. [provided by RefSeq, Jul 2008].
PRIMARY     REFSEQ_SPAN         PRIMARY_IDENTIFIER PRIMARY_SPAN        COMP
            1-14349             AC002366.1         63497-77845
FEATURES             Location/Qualifiers
     source          1..14349
                     /organism="Homo sapiens"
                     /mol_type="genomic DNA"
                     /db_xref="taxon:9606"
                     /chromosome="X"
                     /map="Xp22.2"
     gene            complement(<1..>14349)
                     /gene="ARHGAP6"
                     /gene_synonym="RHOGAP6; RHOGAPX-1"
                     /note="Rho GTPase activating protein 6"
                     /db_xref="GeneID:395"
                     /db_xref="HGNC:HGNC:676"
                     /db_xref="MIM:300118"
     misc_RNA        complement(<1971..>2066)
                     /gene="ARHGAP6"
                     /gene_synonym="RHOGAP6; RHOGAPX-1"
                     /product="Rho GTPase activating protein 6, transcript
                     variant 7"
                     /inference="similar to RNA sequence (same
                     species):RefSeq:NR_109776.2"
                     /exception="annotated by transcript or proteomic data"
                     /transcript_id="NR_109776.2"
                     /db_xref="GeneID:395"
                     /db_xref="HGNC:HGNC:676"
                     /db_xref="MIM:300118"
     gene            5001..12349
                     /gene="AMELX"
                     /gene_synonym="AI1E; AIH1; ALGN; AMG; AMGL; AMGX"
                     /note="amelogenin X-linked"
                     /db_xref="GeneID:265"
                     /db_xref="HGNC:HGNC:461"
                     /db_xref="MIM:300391"
     mRNA            join(5001..5056,6365..6430,8367..8414,9824..9865,
                     10136..10561,12195..12349)
                     /gene="AMELX"
                     /gene_synonym="AI1E; AIH1; ALGN; AMG; AMGL; AMGX"
                     /product="amelogenin X-linked, transcript variant 1"
                     /transcript_id="NM_001142.2"
                     /db_xref="GeneID:265"
                     /db_xref="HGNC:HGNC:461"
                     /db_xref="MIM:300391"
     exon            5001..5056
                     /gene="AMELX"
                     /gene_synonym="AI1E; AIH1; ALGN; AMG; AMGL; AMGX"
                     /inference="alignment:Splign:2.1.0"
                     /number=1
     exon            6365..6430
                     /gene="AMELX"
                     /gene_synonym="AI1E; AIH1; ALGN; AMG; AMGL; AMGX"
                     /inference="alignment:Splign:2.1.0"
                     /number=2
     CDS             join(6377..6430,8367..8414,9824..9865,10136..10561,
                     12195..12200)
                     /gene="AMELX"
                     /gene_synonym="AI1E; AIH1; ALGN; AMG; AMGL; AMGX"
                     /note="isoform 1 precursor is encoded by transcript
                     variant 1; amelogenin (X chromosome, amelogenesis
                     imperfecta 1); amelogenin (amelogenesis imperfecta 1,
                     X-linked)"
                     /codon_start=1
                     /product="amelogenin, X isoform isoform 1 precursor"
                     /protein_id="NP_001133.1"
                     /db_xref="CCDS:CCDS14144.1"
                     /db_xref="GeneID:265"
                     /db_xref="HGNC:HGNC:461"
                     /db_xref="MIM:300391"
                     /translation="MGTWILFACLLGAAFAMPLPPHPGHPGYINFSYEVLTPLKWYQS
                     IRPPYPSYGYEPMGGWLHHQIIPVLSQQHPPTHTLQPHHHIPVVPAQQPVIPQQPMMP
                     VPGQHSMTPIQHHQPNLPPPAQQPYQPQPVQPQPHQPMQPQPPVHPMQPLPPQPPLPP
                     MFPMQPLPPMLPDLTLEAWPSTDKTKREEVD"
     sig_peptide     6377..6424
                     /gene="AMELX"
                     /gene_synonym="AI1E; AIH1; ALGN; AMG; AMGL; AMGX"
                     /note="/evidence=ECO:0000269|PubMed:2509010; propagated
                     from UniProtKB/Swiss-Prot (Q99217.1)"
     mat_peptide     join(6425..6430,8367..8414,9824..9865,10136..10561,
                     12195..12197)
                     /gene="AMELX"
                     /gene_synonym="AI1E; AIH1; ALGN; AMG; AMGL; AMGX"
                     /product="Amelogenin, X isoform. /id=PRO_0000001199"
                     /note="propagated from UniProtKB/Swiss-Prot (Q99217.1)"
     misc_feature    8406..8408
                     /gene="AMELX"
                     /gene_synonym="AI1E; AIH1; ALGN; AMG; AMGL; AMGX"
                     /note="Phosphoserine.
                     /evidence=ECO:0000250|UniProtKB:P02817; propagated from
                     UniProtKB/Swiss-Prot (Q99217.1); phosphorylation site"
     misc_feature    join(10274..10561,12195..12197)
                     /gene="AMELX"
                     /gene_synonym="AI1E; AIH1; ALGN; AMG; AMGL; AMGX"
                     /note="propagated from UniProtKB/Swiss-Prot (Q99217.1);
                     Region: Disordered. /evidence=ECO:0000256|SAM:MobiDB-lite"
     exon            8367..8414
                     /gene="AMELX"
                     /gene_synonym="AI1E; AIH1; ALGN; AMG; AMGL; AMGX"
                     /inference="alignment:Splign:2.1.0"
                     /number=3
     exon            9824..9865
                     /gene="AMELX"
                     /gene_synonym="AI1E; AIH1; ALGN; AMG; AMGL; AMGX"
                     /inference="alignment:Splign:2.1.0"
                     /number=4
     exon            10136..10561
                     /gene="AMELX"
                     /gene_synonym="AI1E; AIH1; ALGN; AMG; AMGL; AMGX"
                     /inference="alignment:Splign:2.1.0"
                     /number=5
     exon            12195..12349
                     /gene="AMELX"
                     /gene_synonym="AI1E; AIH1; ALGN; AMG; AMGL; AMGX"
                     /inference="alignment:Splign:2.1.0"
                     /number=6
[...]
```

- Si vous voulez la séquence au format FASTA, rendez-vous au [LINK,100].
- Si vous voulez choisir une autre banque de données, rendez-vous au [LINK,33].
- Si vous voulez choisir une autre protéine de l'émail, rendez-vous au [LINK,1].

## 65

## 66

Les amplicons sont de même longueur ce qui fait que les peptides amplifiés ne pourront pas être séparés par une méthode biochimique. Ce ne sont donc pas de bons candidats pour la PCR. 

L'heure tourne[TIME,-1], rendez-vous au [LINK,70].

## 67

Comme le dit la page Wikipedia de l'énaméline, "[..]Enamelin is an enamel matrix protein (EMPs), that in humans is encoded by the ENAM gene[..]". C'est bien un constituant de la dent. Excellent!! peut-être un bon candidat pour votre étude.

- Si vous souhaitez vous renseigner sur le gène ENAM, rendez-vous au [LINK,44].
- Si vous souhaitez vous renseigner sur une autre protéine, rendez-vous au [LINK,1].

## 68

Rendez-vous au [LINK,6].

## 69

## 70

Vous avez maintenant vos deux résultats avec AMELX et AMELY. Est-ce que ces amorces sont utiles pour la production 
d'amplicons permettant de différencier AMELX de AMELY ? 

Si vous pensez que Oui, rendez-vous au [LINK,66] sinon, rendez-vous au [LINK,74].

## 71

## 72

- Si vous voulez la séquence au format FASTA, rendez-vous au [LINK,105].
- Si vous voulez choisir une autre banque de données, rendez-vous au [LINK,33].
- Si vous voulez choisir une autre protéine de l'émail, rendez-vous au [LINK,1].

## 73

## 74

Effectivement, la longueur des deux amplicons sera la même avec cette paire d'amorces et ne permettra pas de différencier `AMELX` de `AMELY`.

Il faut donc trouver d'autres paires d'amorces plus adaptées, rendez-vous au [LINK,5]

## 75

## 76

## 77

Vous choisissez la banque de données `Protein` et saisissez le mot clé `AMELX`. Vous filtrez ensuite les résultats en cochant `Homo sapiens` dans `Top Organisms` et restreignez l'affichage à la banque `UniProtKB / Swiss-Prot` dans `Source databases`.

Un des résultats affichés semble correspondre à vos attentes. Ici, seuls quelques extraits ont été affichés.


```
LOCUS       AMELX_HUMAN              191 aa            linear   PRI 22-FEB-2023
DEFINITION  RecName: Full=Amelogenin, X isoform; Flags: Precursor.
ACCESSION   Q99217
VERSION     Q99217.1
[...]
KEYWORDS    Alternative splicing; Amelogenesis imperfecta; Biomineralization;
            Direct protein sequencing; Disease variant; Extracellular matrix;
            Phosphoprotein; Reference proteome; Repeat; Secreted; Signal.
SOURCE      Homo sapiens (human)
  ORGANISM  Homo sapiens
            Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi;
            Mammalia; Eutheria; Euarchontoglires; Primates; Haplorrhini;
            Catarrhini; Hominidae; Homo.
[...]
FEATURES             Location/Qualifiers
     source          1..191
                     /organism="Homo sapiens"
                     /db_xref="taxon:9606"
     gene            1..191
                     /gene="AMELX"
                     /gene_synonym="AMG"
                     /gene_synonym="AMGX"
     Protein         1..191
                     /product="Amelogenin, X isoform"
                     /UniProtKB_evidence="Evidence at protein level"
     Region          1..16
                     /region_name="Signal"
                     /note="/evidence=ECO:0000269|PubMed:2509010."
     Region          4
                     /region_name="Variant"
                     /note="W -> S (in AI1E; dbSNP:rs104894738).
                     /evidence=ECO:0000269|PubMed:15111628. /id=VAR_037581."
     Region          5..8
                     /region_name="Variant"
                     /note="ILFA -> T (in AI1E).
                     /evidence=ECO:0000269|PubMed:7782077. /id=VAR_000559."
     Region          17..191
                     /region_name="Mature chain"
                     /note="Amelogenin, X isoform. /id=PRO_0000001199."
     Region          19..34
                     /region_name="Splicing variant"
                     /note="Missing (in isoform 2). /evidence=ECO:0000305.
                     /id=VSP_000228."
     Region          28..191
                     /region_name="Amelogenin"
                     /note="Amelogenins, cell adhesion proteins, play a role in
                     the biomineralisation of teeth; smart00818"
                     /db_xref="CDD:197891"
     Site            32
                     /site_type="phosphorylation"
                     /note="Phosphoserine.
                     /evidence=ECO:0000250|UniProtKB:P02817."
     Region          34
                     /region_name="Splicing variant"
                     /note="E -> ENSHSQAINVDRTAL (in isoform 3).
                     /evidence=ECO:0000303|PubMed:11922868. /id=VSP_000229."
     Region          37
                     /region_name="Variant"
                     /note="T -> I (in AI1E; dbSNP:rs104894733).
                     /evidence=ECO:0000269|PubMed:7599636. /id=VAR_037582."
     Region          50..51
                     /region_name="Conflict"
                     /note="PS -> SP (in Ref. 5; AA sequence).
                     /evidence=ECO:0000305."
     Region          56
                     /region_name="Variant"
                     /note="P -> T (in AI1E; dbSNP:rs104894736).
                     /evidence=ECO:0000269|PubMed:10669095,
                     ECO:0000269|PubMed:9188994. /id=VAR_037583."
     Region          95..191
                     /region_name="Region of interest in the sequence"
                     /note="Disordered. /evidence=ECO:0000256|SAM:MobiDB-lite."
     Region          115..170
                     /region_name="Compositionally biased region"
                     /note="Pro residues.
                     /evidence=ECO:0000256|SAM:MobiDB-lite."
     Region          173
                     /region_name="Conflict"
                     /note="D -> H (in Ref. 8; AA sequence).
                     /evidence=ECO:0000305."
     Region          191
                     /region_name="Conflict"
                     /note="D -> VSIF (in Ref. 7; AAA62826/CAA32613).
                     /evidence=ECO:0000305."
ORIGIN      
        1 mgtwilfacl lgaafamplp phpghpgyin fsyevltplk wyqsirppyp sygyepmggw
       61 lhhqiipvls qqhppthtlq phhhipvvpa qqpvipqqpm mpvpgqhsmt piqhhqpnlp
      121 ppaqqpyqpq pvqpqphqpm qpqppvhpmq plppqpplpp mfpmqplppm lpdltleawp
      181 stdktkreev d
//
```

- Si vous voulez la séquence au format FASTA, rendez-vous au [LINK,111].
- Si vous voulez choisir une autre banque de données, rendez-vous au [LINK,33].
- Si vous voulez choisir une autre protéine de l'émail, rendez-vous au [LINK,1].

## 78

## 79

## 80

## 81

## 82

## 83

Vous choisissez la banque de données `Protein` et saisissez le mot clé `AMELY`. Vous filtrez ensuite les résultats en cochant `Homo sapiens` dans `Top Organisms` et restreignez l'affichage à la banque `UniProtKB / Swiss-Prot` dans `Source databases`.

Un des résultats affichés semble correspondre à vos attentes. Ici, seuls quelques extraits ont été affichés.

```
LOCUS       AMELY_HUMAN              206 aa            linear   PRI 22-FEB-2023
DEFINITION  RecName: Full=Amelogenin, Y isoform; Flags: Precursor.
ACCESSION   Q99218
VERSION     Q99218.2
DBSOURCE    UniProtKB: locus AMELY_HUMAN, accession Q99218;
            class: standard.
            extra accessions:Q6RWT1
            created: Nov 1, 1995.
            sequence updated: Jan 24, 2006.
            annotation updated: Feb 22, 2023.
            xrefs: M86933.1, AAA51718.1, AY487421.1, AAR39431.1, BC069138.1,
            AAH69138.1, BC074976.1, AAH74976.1, BC074977.1, AAH74977.1,
            M55419.1, AAA62827.1, X14439.1, CAA32612.1, F41816, NP_001134.1,
            XP_016885531.1
            xrefs (non-sequence databases): CCDS:CCDS14778.1, CCDS:CCDS94708.1,
            AlphaFoldDB:Q99218, BioGRID:106763, IntAct:Q99218, BioMuta:AMELY,
            DMDM:85681286, PeptideAtlas:Q99218, Antibodypedia:5353, DNASU:266,
            Ensembl:ENST00000383036.1, Ensembl:ENSP00000372505.1,
            Ensembl:ENSG00000099721.16, Ensembl:ENST00000651267.2,
            Ensembl:ENSP00000498344.1, GeneID:266, KEGG:hsa:266,
            MANE-Select:ENST00000651267.2, UCSC:uc004fqz.3, AGR:HGNC:462,
            CTD:266, DisGeNET:266, GeneCards:AMELY, HGNC:462,
            HPA:ENSG00000099721, MIM 410000, neXtProt:NX_Q99218,
            OpenTargets:ENSG00000099721, PharmGKB:PA24767,
            VEuPathDB:HostDB:ENSG00000099721, GeneTree:ENSGT01040000241139,
            HOGENOM:CLU_120753_0_0_1, InParanoid:Q99218, OMA:NMLRYPY,
            OrthoDB:4520512at2759, PhylomeDB:Q99218, TreeFam:TF337092,
            PathwayCommons:Q99218, SignaLink:Q99218, BioGRID-ORCS:266,
            GeneWiki:AMELY, GenomeRNAi:266, Pharos:Q99218, PRO:PR:Q99218,
            Proteomes:UP000005640, RNAct:Q99218, Bgee:ENSG00000099721,
            Genevisible:Q99218, GO:0062023, GO:0005576, GO:0030345, GO:0070166,
            InterPro:IPR004116, PANTHER:PTHR46794, PANTHER:PTHR46794:SF2,
            Pfam:PF02948, PRINTS:PR01757, SMART:SM00818
KEYWORDS    Alternative splicing; Biomineralization; Extracellular matrix;
            Reference proteome; Repeat; Secreted; Signal.
SOURCE      Homo sapiens (human)
  ORGANISM  Homo sapiens
            Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi;
            Mammalia; Eutheria; Euarchontoglires; Primates; Haplorrhini;
            Catarrhini; Hominidae; Homo.
REFERENCE   1  (residues 1 to 206)
  AUTHORS   Salido,E.C., Yen,P.H., Koprivnikar,K., Yu,L.C. and Shapiro,L.J.
  TITLE     The human enamel protein gene amelogenin is expressed from both the
            X and the Y chromosomes
  JOURNAL   Am J Hum Genet 50 (2), 303-316 (1992)
   PUBMED   1734713
  REMARK    NUCLEOTIDE SEQUENCE [MRNA] (ISOFORM 1).;
            TISSUE=Tooth bud
REFERENCE   2  (residues 1 to 206)
  AUTHORS   Lin,L., Zhong,G., Li,H., Ke,R., Shen,C., Zhou,G. and Yang,S.
  TITLE     Direct Submission
  JOURNAL   Submitted (??-NOV-2003) to the EMBL/GenBank/DDBJ databases
  REMARK    NUCLEOTIDE SEQUENCE [MRNA] (ISOFORM 2).
REFERENCE   3  (residues 1 to 206)
  AUTHORS   Gerhard,D.S., Wagner,L., Feingold,E.A., Shenmen,C.M., Grouse,L.H.,
            Schuler,G., Klein,S.L., Old,S., Rasooly,R., Good,P., Guyer,M.,
            Peck,A.M., Derge,J.G., Lipman,D., Collins,F.S., Jang,W., Sherry,S.,
            Feolo,M., Misquitta,L., Lee,E., Rotmistrovsky,K., Greenhut,S.F.,
            Schaefer,C.F., Buetow,K., Bonner,T.I., Haussler,D., Kent,J.,
            Kiekhaus,M., Furey,T., Brent,M., Prange,C., Schreiber,K.,
            Shapiro,N., Bhat,N.K., Hopkins,R.F., Hsie,F., Driscoll,T.,
            Soares,M.B., Casavant,T.L., Scheetz,T.E., Brown-stein,M.J.,
            Usdin,T.B., Toshiyuki,S., Carninci,P., Piao,Y., Dudekula,D.B.,
            Ko,M.S., Kawakami,K., Suzuki,Y., Sugano,S., Gruber,C.E.,
            Smith,M.R., Simmons,B., Moore,T., Waterman,R., Johnson,S.L.,
            Ruan,Y., Wei,C.L., Mathavan,S., Gunaratne,P.H., Wu,J., Garcia,A.M.,
            Hulyk,S.W., Fuh,E., Yuan,Y., Sneed,A., Kowis,C., Hodgson,A.,
            Muzny,D.M., McPherson,J., Gibbs,R.A., Fahey,J., Helton,E.,
            Ketteman,M., Madan,A., Rodrigues,S., Sanchez,A., Whiting,M.,
            Madari,A., Young,A.C., Wetherby,K.D., Granite,S.J., Kwong,P.N.,
            Brinkley,C.P., Pearson,R.L., Bouffard,G.G., Blakesly,R.W.,
            Green,E.D., Dickson,M.C., Rodriguez,A.C., Grimwood,J., Schmutz,J.,
            Myers,R.M., Butterfield,Y.S., Griffith,M., Griffith,O.L.,
            Krzywinski,M.I., Liao,N., Morin,R., Palmquist,D., Petrescu,A.S.,
            Skalska,U., Smailus,D.E., Stott,J.M., Schnerch,A., Schein,J.E.,
            Jones,S.J., Holt,R.A., Baross,A., Marra,M.A., Clifton,S.,
            Makowski,K.A., Bosak,S. and Malek,J.
  CONSRTM   MGC Project Team
  TITLE     The status, quality, and expansion of the NIH full-length cDNA
            project: the Mammalian Gene Collection (MGC)
  JOURNAL   Genome Res 14 (10B), 2121-2127 (2004)
   PUBMED   15489334
  REMARK    NUCLEOTIDE SEQUENCE [LARGE SCALE MRNA] (ISOFORM 1).
            Erratum:[Genome Res. 2006 Jun;16(6):804. Morrin, Ryan [corrected to
            Morin, Ryan]]
REFERENCE   4  (residues 1 to 206)
  AUTHORS   Nakahori,Y., Takenaka,O. and Nakagome,Y.
  TITLE     A human X-Y homologous region encodes 'amelogenin'
  JOURNAL   Genomics 9 (2), 264-269 (1991)
   PUBMED   2004775
  REMARK    NUCLEOTIDE SEQUENCE [GENOMIC DNA] OF 19-206 (ISOFORM 2).
COMMENT     On or before Jan 24, 2006 this sequence version replaced
            gi:74710140, gi:1168432.
            [FUNCTION] Plays a role in biomineralization. Seems to regulate the
            formation of crystallites during the secretory stage of tooth
            enamel development. Thought to play a major role in the structural
            organization and mineralization of developing enamel.
            [INTERACTION] Q99218-1; P31937: HIBADH; NbExp=3;
            IntAct=EBI-17435683, EBI-11427100.
            [SUBCELLULAR LOCATION] Secreted, extracellular space, extracellular
            matrix.
            [ALTERNATIVE PRODUCTS] Event=Alternative splicing; Named
            isoforms=2; Name=2; IsoId=Q99218-2; Sequence=Displayed; Name=1;
            IsoId=Q99218-1; Sequence=VSP_017077.
            [DEVELOPMENTAL STAGE] Transiently but abundantly expressed by
            ameloblasts during tooth development. Amelogenin is the predominant
            protein in developing dental enamel.
            [SIMILARITY] Belongs to the amelogenin family. {ECO:0000305}.
FEATURES             Location/Qualifiers
     source          1..206
                     /organism="Homo sapiens"
                     /db_xref="taxon:9606"
     gene            1..206
                     /gene="AMELY"
                     /gene_synonym="AMGL"
                     /gene_synonym="AMGY"
     Protein         1..206
                     /product="Amelogenin, Y isoform"
                     /UniProtKB_evidence="Evidence at protein level"
     Region          1..16
                     /region_name="Signal"
                     /note="/evidence=ECO:0000250."
     Region          17..206
                     /region_name="Mature chain"
                     /note="Amelogenin, Y isoform. /id=PRO_0000001200."
     Region          28..206
                     /region_name="Amelogenin"
                     /note="Amelogenins, cell adhesion proteins, play a role in
                     the biomineralisation of teeth; smart00818"
                     /db_xref="CDD:197891"
     Region          31
                     /region_name="Conflict"
                     /note="F -> L (in Ref. 2; AAR39431).
                     /evidence=ECO:0000305."
     Region          35..48
                     /region_name="Splicing variant"
                     /note="Missing (in isoform 1).
                     /evidence=ECO:0000303|PubMed:15489334,
                     ECO:0000303|PubMed:1734713. /id=VSP_017077."
     Region          118..180
                     /region_name="Region of interest in the sequence"
                     /note="Disordered. /evidence=ECO:0000256|SAM:MobiDB-lite."
     Region          118..136
                     /region_name="Compositionally biased region"
                     /note="Polar residues.
                     /evidence=ECO:0000256|SAM:MobiDB-lite."
     Region          137..180
                     /region_name="Compositionally biased region"
                     /note="Pro residues.
                     /evidence=ECO:0000256|SAM:MobiDB-lite."
     Region          206
                     /region_name="Conflict"
                     /note="D -> VSTP (in Ref. 4; AAA62827/CAA32612).
                     /evidence=ECO:0000305."
ORIGIN      
        1 mgtwilfacl vgaafamplp phpghpgyin fsyenshsqa invdrialvl tplkwyqsmi
       61 rppyssygye pmggwlhhqi ipvvsqqhpl thtlqshhhi pvvpaqqprv rqqalmpvpg
      121 qqsmtptqhh qpnlplpaqq pfqpqpvqpq phqpmqpqpp vqpmqpllpq pplppmfplr
      181 plppilpdlh leawpatdkt kqeevd
//
```

- Si vous voulez la séquence au format FASTA, rendez-vous au [LINK,104].
- Si vous voulez choisir une autre banque de données, rendez-vous au [LINK,33].
- Si vous voulez choisir une autre protéine de l'émail, rendez-vous au [LINK,1].

## 84

## 85

## 86

Le résultat de `PRIMERSEARCH` s'affiche dans votre fenêtre.

```
Primer name MyPrimer
Amplimer 1
	Sequence: NG_012040.1  
	Homo sapiens amelogenin X-linked (AMELX), RefSeqGene on chromosome X
	GCCATAATGGCAAAGA hits forward strand at 10051 with 0 mismatches
	CACCACTGGGATGTGG hits reverse strand at [4095] with 0 mismatches
	Amplimer length: 205 bp
```

Recommencez la même opération avec la séquence de `AMELX`, cliquez sur le bouton `Run primersearch` et rendez-vous au [LINK,48].

Si vous avez lancé `PRIMERSEARCH` sur les deux séquences, rendez-vous au [LINK,70].

## 87

## 88

## 89

Tuftéline

Si vous souhaitez vous renseigner sur une autre protéine, rendez-vous au [LINK,1].

## 100


Sauvegardez ce fichier sous le nom de `amelx.fasta` qui vous servira par la suite. 
De plus, notez le code <strong>17</strong>, il vous servira plus tard dans ce jeu.


```
>NG_012040.1 Homo sapiens amelogenin X-linked (AMELX), RefSeqGene on chromosome X
AATCTATATTTTACATAATGTATAAAGGCTGTACATTTTTTGAGGGCCGATATCATACCATATATAATAT
GTGTCCTTTTAAAAATTAAGATATAATTCACATACCATAAGATTCACCACTTTAAAGTGTACAATTGAGT
GGCTTTTAGTATATTCACAAGATTGTGCAACCATCACCACTGTCTAACTCCAGAACATTTCTATCATCAC
AAAAAGAAACCTGGGGCTCATTAGCAGTAACTCCCCATTTCCCCCTTCCCTCAACCCCTGGCAACCATGA
ATCTACTTTCTGTTTCTATGGATTTTGCCTATTCTTGGCATTTCCTATACAGTCATACAGTATATGGTAT
TTTATGACTGGCTTCCTTCACTGAATGTAATGTTTTCAAGGTTCATCCATGTTGCTGTATGGATCAGTGC
TTCATTCCATTTTATGGCTGAACAATATTTTAAAAAACTACTAATCTATGTATGTCTCCACTGAACCTCA
GCAGGAAAGTTGAACTTACTTTGGTATATTTTACCCAATAAACAGGAATAAAAATGCTTGTTTTTACATT
ACTGTCCTACCTCTTTTAACACAGATGTACCATTTTCACTCCTGACAGTTACCAGTTAATTATAATCCAA
ACAACACACTCTTCAACTGCATATAATTTCCCTTGTTGAAAATTGTTCCACCTGATATTTAGCAAATGCC
TACGGACTTTTCAAATTACAAGCTGTATGAACTCTTGCTGTGAATGTTTATATTATTAAAATATTTCCTA
CTCATGATTTAAAAGGGCTCTCTCACTTTAAAAAATCGTGTGTTTTTTTTTGTCTTGGATTTTATGTTGA
ACCTTTTTTCCCCCTAAGAATGAACATTGGATATACCCAGGGCCTATGCAAGTAGCACTATCACTTACTC
ATCTCTCTTGCTGAACATGAGTGAGAAATATCATACTCCAAACTTCTCGTATTTCCCCTGCATTTGTTGC
ATTCACAGATTATTTAAAAGAAATAAATTTAAACCTCGGCTACCCAGAGATTTTCAAGGAGTCCCTAGAT
AACTACTGTGTTTTGGCGAATATCTCCCCAAATGGAGAGAAGGGAGAGCAGGGAGGGAGGGAGAAAAAAA
TTAGAGAAGGGGACTTTAAAAAATCTATTTTTCCACTTAACAATGTATCACCAACATCTTTTTATGTTGA
CAAACGCAGAGTGACATCCTCATCTTGAATGCTATTTGTGCCATAATCGATTTGAACCAGCCCCGCTATT
GGTAGACATTTTGTTTTAAATGTTACTTCATAGGCCAGGCGCAGTGGCTCATGCCTGTAATCCCAGCACT
TTGGGAGGCCGAGGCAGGCAGATCATGAGGTCAGGAGATGGAGACCATCCTGGACAACATGGTGAAACCC
CGTCTCTACTAAAAATATAAAAATAAGCTGGGCATGGTGGCATGTGCCTGTAATCCCAGCTACTTGGGAG
GCTGAGGCAGGAGAGTCACTTAAACCCGGGAGGCAGAGATTGCAGCGAGCCGAGACTGTACCACTTCACT
CCAGCCTGGGCGACAGAGCGAGACTCTGTCTCAAAAACAACAACAAAAAATTATCTATCATAGTGTATTT
GTTTGGAGTATATTATAATTTGAACTAAGAGGTCAGAGCCAAATGTAATGAGACTGTTAGGATAATAGAT
TCTAGCGCTTTTACAGCATCTCCCTTTTCAGATACTTATCAGAGGTCATTTGCACAGAAGTCCACAGGAG
CAGTTGAGAGCAATGCTGAATTATCCATCTTAGCTATTGAAAAGGTCCATCTAAATCACTGTAGGATTTC
TTTCAGAATCCACATTTTCTATGTTTACAATGTCATGGAAAACTTTTCTACATTTTCATTAATTCATCAA
CACATTTATCTAGCACCTACTTTGTATAAGAGCTTTTTCTAGGTACCAAGGAGCTCCCAAGAAAGTATAA
GACACAATACCTGATTTCTAAGGGTTGCGGTGGGGTCAAAGTTACGATGTGTATCGGAATTCATCGGTGG
TTTTGTGCCTAAGATCTGAAGATCATACAACTCCAACTCTACCCCAGCAAAAAAAAAAAAAAAAAAGCTA
TCCTAGAGAATGATGTTTTCTTGTAAGTAAACATCTACAGAGAAAATATTTAAAAGCCAGCTTTGGCTCC
AGCTACTTAAGAAGACTCACTGTTGAAATTATTCCAGAATATTGGATAACCCTGGGGATGCTTTAAAAGA
AGGCTCAAGAGTTGAACTCTTACAGATGATAGGAAAGGCTTTGCAAACTCATAATACCTGACTTATCCAA
AGGCCACCCTCATACCCCGAGTGCTGTTGAAACCCAGGCAGTAAGCCAGTGGAGAGGAACCCCAAAACAA
ACCAAACACCCTCCCAGCAGTCAAAAATAAGTGTCACAAAACCGAAATTCATTTGCTTTTCTCACAGGCG
AGGCCCTCCCAGGCCAGCCCCACTTAGAGTGTTCCTTTACTTTCAGTTCACGCATACTTTTAACAAGCTT
GGGCATATGATTTTCTAGCATACTGTAAATTAGAAGCAGCAAATTAGAAGTGGGGAAGTTGCTAACATAA
GCATTGTGAGAACAGCAAAACGTACTGGGCTGCAAGTCAAGAAAAAGAATACCTACTACAAAAAAATGAG
CAAAAGAACTATTTTATGCAGTCAATTTATTCATAAATAAAATAATTGCTTATAGGAAAAATATTTCAAT
TGAAATTTCATTTTCCTCAAAACATTTACCAATTTTTAAGCTGTGTAAGTGGGGCCTAAATTAGTGGAAG
AGATTTCAAACAGAGATCCATATTTTAATGTCCTATGATTCAGGATATGCAGTAGGGGAAAATCAATTAT
TTCTATGGAATCGGCCATCAAAGCTTGTTCAACTGTCCATGGTGAATTAGCGGTAACTCACTATCCAGTG
GTCCAGAGGAATTAATGCCACATTAAGGCAGCATCCTGTTGATCATTATGGCCAAATATATCATCCTCTC
ATTCTTAGAAGGTGAGAAAAAGTATAAGATCAATCTTTCTAAAACTACAAGGCTACTAGTAATTCATCAT
TGACTTCATTAGTAGAGATTACCCACAACTTTGTAGAAAAAAAAAATATCCTGAATCCTTTCAGACACTC
CAATATATGTAATTATATAAAATGGGGGAAAAAGATTGAAAGTGAATAAAATGTGATCCACATTTTCCTT
CCTCTCCCTTACCACCTTGCTGTACACCCCTGCCAATCCTCCTAAGGTCCATTTTCCAACTTCCTTCAAA
GGGAATCCTTCTTGTCTCTGCTATAAAATTCACCAATAAATATATTCATAAATAAAGCCAAATCCTGGGG
ACATTTGGCTTTTAGAATCATATTCTATGTTTCTTTTCATGCATACATTTTACCTGTTATAATCTTCTAC
TTCCTTCTTTGCAATCTCTCTCTCCCTGATTGGAAGGTCTTACCTTTCTTTGCAATATTCATCCCTACTG
ATTTATCCCCAAAGATCATCTTGGAATCTTGTTTATTAGCATTCTTTAAACATTTACTGTATGCCAGCTG
ACAGGGTTGGGGAGAGTAATAAATAGACTTCCATTTCCCCAGAGATGTCACTCATCTACTTTTCACATGA
ATTCCCTGAGCTAGGTTCTGTTATTATTTCCATTCTACATATCAGGAAATTGAGGCTCAGACAGGCTAAG
TAATTTGTATATATACGTATAAACATATGTATATATACAAACTTTATAAGTATTACTTGTGTATTCAAAG
AGATCCAAGTATAACATCAACTGTATCTGGGTAGATATTCAGTATCTCCTTTATTGATCTAATATTGATG
GACGACTCGTCAGTTAGCTCCTGCCACTAATTACAACTTTGCTCAATTAGATCAATCTAATCAAATTCCA
GAATGAAAGAAAAAGCCCATGTGTTATACCAAGGTAGAGGGGTAAAACACACATGAATTTAATAGGTAGA
TGATCAGAGGTTCTTTTAGAAAGTGAATAGCTTTGGTCATTGCTTAGGGAAAGGGGAGGCTGCTGAGAAC
ATGGAAACAAAGTAGCTAGCCAGACAGTTAAGAGACTCTGAAAAATAGAGAGGAATTTGGGTTTGCCTGT
ATGAGAAAGTGGGATTGGGCCAGAAGGATATGGGCAAAGAAGGGCCGCCATACTGAGAGGCCAAGCTGCT
CTGTGAGATGGGAGGCAAAGGACAACATCCCCTGTGACATGAGTTTGCTTGTAAAAAACAAAATTTACTT
TAAAATGTGCTGTCTGGTGTGCACTCCTTGCCTTGTAGTATAGATCATCAGTAAAAGCTTTGCTACTGCA
AGAACCTTAAGTTCCTGATTGTTTTTACGGTAGATGGGTTTCAGCATGGGGCCGAGAAGGGGCTTTGTCC
CCTGTTTTGGTGGACACCAGAGGGGTGATAAAGGAGTAGCCAAGGGGAACAGAGAAAAAATACCTTCAAT
GGAAGCAGATAATAGAGCAGTGGTGATCCCAAAATTATAATTCCTCAGAGAGAAACTAGAGAGAGCTTTG
GGGTTTTACCCAAATGGGAATTTGAATCAATTTCTCCTGATCTGAAAGGGCTGGAAAAATCCTGGAGGAT
ATCCAGATTACACTAGAGAATCTCAACCACCTACCTTGATTTTTGTAAAGAACAACGTTGTTTGCTAGAA
CTGAGGAAAAGGCGATGGCAGAGAAGCTTTTTAAAAATAAATCTGAATATATCAACATGTACAGTCAACT
AATTTGCTGACTTCAAAATAGCGTGATGAAACTCTTTGCCTGTTAAACCTATTATTGCCCATAATGAAAG
ATTCCATATGCACTAATCACAACATACAGCCTTATGTCTGATCATAGCTTCTAAAAAATCATGATACAGG
GATTTTTAGTTATACTCAACACATTTTTCCTTTAGAAACTGGATTGGTTGTTACAGATGCCATGAATGAT
ATAAATTGAGCTTATAGTTGGAAGAAATCTAAAGGATCAAGCATCCCTGAGTTTCAAACAGAAACTTGCA
CTGAATACATTCAAAGGTATGTGGATTTTATTTATAATTTGATATCCTTTTTATTGTGCTTATTTCTTTC
TCTGCATTTCTTTTAAAAGATATAAATGTATTCTACATTTCTAATACTATATGCCATCAATAGTTACTTT
TTAGTTGGCCCATAATTAAATTAGACTCTGATTACTGAAATGATTTTTAACTTTATAATGCAACAAAGTG
CTTGTCTAATTCCAAAGGTCTTTCTTGGCCACATTTCACAGTAAAATATTTATTTTAATTAATTATCGAT
TAAAGTAAAAATAATACATTCACAGGCTGTGATCTACTACTTTGAAAAGCTTTTTATTTAATTACATAAA
ATAGAACCATCCATGAAGTGTTTTTTCTCATTAACCCAAACAAACAAACAAACAAAAAACAAATTTAGGA
GTTAGAAAACTTTAGTGTACTTTTCATAGACAGCATTATCACATGTAATATTCACTTCTTATACAAAATT
TAAGGTCTTTCTTCTGACAGTTTTCCCAGTAATTTGTGCCACAAATCAATGTGCACATTTTAGGAGGACC
TGTTTTGCTTAATGTCCCAAGGGTCTTATTTATAGAATAATTACAGTGCAACATCAAACAAAATGAAGAT
TCCATTGAAAGAAAATGAAACCTCTTAGGGAGAAAGTATTCAAAATTCATTGAAGAATCACATAAAATTC
GTACCATCCTCTCCTGTTGGTTCAGCCACATCTTTTGCTCCACAATCTGGAGCTCAGAGATGTTACTGGA
GGGTCTTGCCTGAAGTTCTGTAGATAGGAATTTCTGGAACTAAAATCTATCTTGGCAAATTAATATATTT
TCTCAAATGATTAGTCCTTGTTTTTAACAGTAGCAATGTCCAGGTAGACTGTGCACGAGACATTTCTGTG
CCTCCTTGTTCTAAAATTATAAAATACTGTGCACTTTGATGATCTTCCCAACCTTTAGAGCCAACTTTAT
TCCTTTAATCATTAATTATAAATACAATTTAGCTTCTATGACTAAGGGCTGTATAGGCATAGGAAAATGG
CATGCAAAGTCATATGAAGATAGATCATTCATGTCCCTGTAACTTGTTTAGCCCTCAACCTAAATTAAAT
GCATCTTTATCACTACTGTGACTCCAGAAACAATGAAATAGGCTGAGAGCTGGAAATCACATATGACTGA
AGTAAATTCACAAACAATGGCTCCATCCTTCTTACTAGCAATAGACTAATGTAGATTATGTGTGTTTTAT
GGAGCATTCATTACATCCATGTTTCAGAAGAGATAAGAAAAGTGGATGTTGACTTACATTTCAGAACCAT
CAAGAAATGGGGACCTGGATTTTATTTGCCTGCCTCCTGGGAGCAGCTTTTGCCATGCCTGTGAGTAAAA
CACCCCTTGCATAAGTCAGTGTCCAATTTCACAAACTTGGACATAAAAATCTGCTCATAGTTGGTGAAAT
TAGGGTTTAAAACAGTATGAGATCAGATGTCTTCATATGTCTCTGGGTTGAAGAAACACTTCAGGAGCTT
GTTTTAAAAAGGTATATTCTCAAATGCCGCTACCAAAAATTCTGATTTGGTACAGCTGGGGCGGGGCCCA
GGACTCTGCATTTTTATAAGCACCCCAGGAGATTCTGTTGGAACTGTTAGCTTGTAAATATCACCACCCA
TCTCTAGATGGAGGAAGCTTTTGGAAGGGACCCTTGAAAGGTCTCCAGAGAAAGTGCTTAACCAGCTTTG
GACAAATATTACAGAGATGCCAGTTTTGTCTAAAACCCAATTCCTCTCAAGATTCCAAATCTCTTCCTGC
CCTCCACATATTGCTGCTCTTACCCCTCAGGGGGTAAGATTTTTGTGTTAGGAATCCACTTTTTGAGCCA
CATTCCTGTTCTCAGAGGCCCCACCCCTTTGGGTACATCTGATGAGTACGTGACTTTTTTGTGGTTGCCC
GGGATCCTGCCTACACCCAATACATAGTGATATATTTTATATTCAAATGTATTAAAGATCAGGACATTAG
ACCCACTCTGTCTGGACACAGGTGCATAAGGGCAGAGAACTTAGATCACATGCATGCCAAGCAGGCTGCA
TCTGCTTTTTGGTGGAATAAAGAGCAGTTGATACAACCAGAAGCCAGCAAGCTTGCACCCTTGCCTCCTC
TCTTCCTCTCTCACCCACAAAACCAAGATTCTGTGCTCTGACTTCCTGAAATCCTGCATTGCAGCGATTC
CTAGTTTCCTCAGGGGTCCCTGCCTTACAAATTCAGCCCTTTTCCCACTCTCTAAGATGGTATTGTTCAA
GAGGGTATAGGACCTGACTAAAACCATTCACATCCAGATGAGAGAGAATAAACCTTCCCATGAAATGTGA
GCATTTTTAAAGAATATAATAGAGCCAATCCTAAATGAGGCCAATGTCTGAGGGAGATTTTCTGCATGAC
CGTCTCTCCTCCCTGGACCCCAGGCACAACCAGAGTTCCACAATACAGGCACCAGACACTTGGGCCCCAC
TTTTGAGAGGACAGACAGTCCTGATTCAGATCATCATTCAGGTGGCCTTTTATTTTTAACTTGAAAATTT
TTCTGCCATAAAACCGTTGGCAGAATAATAAAAAAAGATCGGCCTAAACGTCATAAATCAACTCTTTCAT
TTTCCATGGGATTTATAATGTTTCCACTTTGCTCCACCCATCTTGTTCTGGCATTCATCAATAATTCCCA
CCTTGTGGTTTCTTTTGTGGCTTCTTTTGTTGTATGGAAGTGTTGTTTACTTTGCATGTCAATTATGAGA
AATCCCTTTGATACTTAAAAGTACTTGACCACCTCCTGATCTACAAGGGAACATTCGTGAGACAATTCTC
TCCTTGTTGATATTTCTTTATTGTGAAAGAGAAACACACTTCTCTCCCCATTATGGGGTGAGTTTTATCA
GCAAGTAAACTGTTGGGCAGGATAGGGTAGGATTCATTGAAAACACTGGGCGTGGGGGTGGGATGCTGTC
CAAAGATCACTGGAGAATAAATGTGTGCTGGTTTCTGCTTCCAGGTCTCCAGCCATAAGGCTATAACCCC
AGGAACAGTCATTTAGCTGTTCTGAACCTCTTTAAAATAAAAGGTCTCCTCTTCTATACAGCACATTTGT
TCAAACTAAAAACAGACCTCAAGTATATTCTGCACTATATAGATTTTTTTAAAGTAGCTTCAGTCTCCTT
TAATGTGAACAATTGCATACTGACTTAATCTCTTCCTCTCTCTTCTCTTCCTTCACTCTCTCCCTTCCTC
TCTCTTTCTATTCTCCTCCCCTCCTCCCTGTAAAAGCTACCACCTCATCCTGGGCACCCTGGTTATATCA
ACTTCAGCTATGAGGTAATTTTTCTCTTTACTAATTTTGACCATTGTTTGCGTTAACAATGCCCTGGGCT
CTGTAAAGAATAGTGTGTTGATTCTTTATCCCAGATGTTTCTCAAGTGGTCCTGATTTTACAGTTCCTAC
CACCAGCTTCCCAGTTTAAGCTCTGATGGTTGGCCTCAAGCCTGTGTCGTCCCAGCAGCCTCCCGCCTGG
CCACTCTGACTCAGTCTGTCCTCCTAAATATGGCCGTAAGCTTACCCATCATGAACCACTACTCAGGGAG
GCTCCATGATAGGGCAAAAAGTAAACTCTGACCAGCTTGGTTCTAACCCAGCTAGTAAAATGTAAGGATT
AGGTAAGATGTTATTTAAAACTCTTTCCAGCTCAAAAAACTCCTGATTCTAAGATAGTCACACTCTATGT
GTGTCTCTTGCTTGCCTCTGCTGAAATATTAGTGACTAAGTGGTATAGGAGAGACTCCGCAGAACAGCGG
AATGCATGAGTTTTGGACGTCGGGTTTGAGGTTCTCCTCAACCTCTTACTAACTTTGTGATTTTGGGCAA
ATCATTTCCTCTTTCTGGAACCCTGGTTTCCTCATCTGGAGAAAGGAAATAATTATAATAACCATATTTC
AAAATATTGTTTGGAGAGTAATATAGTTAATGAATATGAAAAGTGCTTTGTCAAGTATAATATGAGCAAG
GTTACTGATTATTTTTTGTATCGATTAAATGCCGTATTACTATATGAAGAATCCTCAAACCTAAGGCTAA
CCAAGTATATATACTGTTCAGAAAGGAATAAGATTCTTACTTCTCTCACAGGTTCAGGTAACAATCTATG
AGTTTATTTACTTATAAAAGCTGAAGACAAATGTTAGTAAGATTTTGAGGCAAGATTTTCTGTTGAACCG
AAAAGATTGACACATCTGATCAGTCAATCTGTGTTTCTAGGATGAGGGACAGTGTTTGCACCTCTCTTTT
TCCCATTGTGACATCAAAGAAAAAAATGAAATTAACATCATGTCATATTATTATGTCATAATTTTGTGTT
TGTTTTGCTCTTACAATGAAAAGAAGGAACTATGGAATTAAACAGATTTACTCCCTGTGTAACCTCAGTC
AAGTTAATGAATCTCTTTAACTCCCCATAACCTTATCTAAAAAGTGAGAGTAATAATACTTGCCTCCTAG
CATATAAGAAAAGATGAAGAATGTGTGTGATGGATGTAAACACAGTGCCTGTCACACAGGAAGCACCCAA
CAAATTTTTACCTTCTTCTTTCTTTTGTAGAACTCACATTCTCAGGCTATCAATGTTGACAGGACTGCAT
TAGTGAGTCTATATTTCCTACTGCATCAGTGAGTTTCTATATTGGATGAAAGTAAATTAAATCAAATGGG
TTCTAATATCTTTTTCTCTTAAGGTGCTTACCCCTTTGAAGTGGTACCAGAGCATAAGGCCACCGGTATG
TAGACATTTTGTTCCTTATTCCCTGAAAATATTAGGCATGCATTAAAATTCCCATATTAAGTGAAATATC
ATGTCTACTCCACATGCAGACATTAATGGGAAATTTAGTTTGTAAAAAATCATATCTGTGTACACAGTTA
CAAATTTTTGCAAAGGAAAAATGAATAAAATATTCCTATAGCCATAATGGCAAAGAAAACACTGCTGCTT
CTCTGGTTGGAGTCACCTGAGCCAATGGTAAACCTGCCTCTCTGTTTCTCACCAGTACCCTTCCTATGGT
TACGAGCCCATGGGTGGATGGCTGCACCACCAAATCATCCCCGTGCTGTCCCAACAGCACCCCCCGACTC
ACACCCTGCAGCCTCATCACCACATCCCAGTGGTGCCAGCTCAGCAGCCCGTGATCCCCCAGCAACCAAT
GATGCCCGTTCCTGGCCAACACTCCATGACTCCAATCCAACACCACCAGCCAAACCTCCCTCCGCCCGCC
CAGCAGCCCTACCAGCCCCAGCCTGTTCAGCCACAGCCTCACCAGCCCATGCAGCCCCAGCCACCTGTGC
ACCCCATGCAGCCCCTGCCGCCACAGCCACCTCTGCCTCCGATGTTCCCCATGCAGCCCCTGCCTCCCAT
GCTTCCTGATCTGACTCTGGAAGCTTGGCCATCAACAGACAAGACCAAGCGGGAGGAAGTGGTGAGTATA
TTTTGAAGCCACTACAATGCAAATCCTGTGAAAATGGTGCAGCAAAATAGGCCCCAGAGTTCTAAGGTCT
CCGACAACCAAGGATCTAGAGTTGTAGTAGTTACAGGTCTATGATTCTATTAGTCCAAGCAATATGCTAT
ACCTTTATGTTAAAGACAAATTCCTCTAAATGGCTTGGTAATTAAGACCACAGTTTTTATGGTAGGTTTC
AATTTTACTATTACTGAATTTCTACCAGAATATGTATTACCAAAACCCATTAATAGAAATATATATTACT
AAACCCCATGAATTTTAAGGGCAACAGTATAAGGGAATATCAGTTCTCCTTATATTTCAAAGGTTTGACT
AGCAAGAATAGGCTAGAGTTGCACTGAAGGCTTAAGACAAGAGGGAGCGGATAATTTTGAGAGTGCAAAT
ATCTGAACAGGCTACAAAAGGTAGACGGGAAATCTCTTCAAAAACCTACAGGAAGATTCCCCATTTCCAG
TAGTTTTCAATCTAACTTGGAGGCGGCTAAACTAAACATACTGTTAGATTCCTTTTCTGTACTGGGGTTC
TATAGATGATTAAGCTTTTAGCAAGAAGTTACTGCAATTTAGCACTAAATCTTCCATTACAGGTAGCTCT
TACAAATGAATGGGAATAGTCAACAAAACAAACTTAATCTACATCCATAAAGTCTTACTTCTATGTATAC
GAGATTATGTGATCCTATCATGTATATGTATCCAACTGTAATTCCAATTTATACATGTTATTGATGATTT
GCTACTGAGAAGAAGAGAGAAGTGAGGTGGAAATGACCAGGATAAGAAGCCAGGACACAAAGGTTCCAAT
TCTGGCTTTGCCCTCAAAGACGAGGCAGTATTGTAAAAGTTACTTCAAATGTATCGGTGTTTTATTTTCT
TTTAAATGGGGGAAAATGACGAAATCAGATTATTTTCAAGTCTCTGTCCAATTATAAATACCATAGTTTC
TGAATTTAAAAAAATCATAATATATGTCATAAATGGCTTCATAATTGTGAGCATGTTTACGGAAAATATG
GGGCAGAATTTTTTGAAAATTGATTGAATCCCAAGTAATCGGTGCCTATCATTGGCTATTCTAGTCCAAG
GCACATGTTCTCTCTGTACATAGAAAATGCATTTACTTCTTTATGAATAATTAATACCATGAACTTTATA
ATGTGCTCACATCTTGACAAAGCTATTTATGGAAAGGTGACTTTGGGCAGATAGTTTGAACTCTTTAAAA
CTCAGTTTCTTTTTGTGTAAAATTTGAGTATAAACATTGATAGTTTCTTAGAGTTGTTTTATGGAAAACA
AAATAGCGTGATAAGCTTGGAGCCTGACATGCAAGACGTACCCCCCAAAAAGGTAGCAATTGTTATTTTA
TTATAAAATAATAGGCTTTAAGTGTCCTGAAGGTGGAAGCAGTCCTCATGGACACCTAATATCTAATGAC
AACGAAATAACAAAGAAACTTCAGAAATTATAGAGTTCAACTTAAATGGTTGTACATTGTTTTGACAAAA
CTGAAGCCAGACATGTTATTGTAAATGGTACTCACTAGGAACATTTGTAAATTATTTTAACTGTTCTTTT
GCAATTTTTTTCAGGATTAAAAGATCAGAAGATGAGAGGGGAATGAATACTTCAGATGCTTTCAGGAGTG
ACACAAGAACACAATGATTTTTGCTTATAATCACTTTACTTAGCAAATTCTGTAACTAAAAAAGTACCAT
TAGCAGACAATAAAATGCATTAAAAATCATTCATGTCTTTGTGTTGAATGAAACTTAAATTTTCCTATCA
TTTGAGATGATATATTATGAATGAGTATTCTTGAATCAGGTAGGAACTGCTCATTTAGTCATACAAATTC
ACCATTTGGCAAGCAAATAAGGAATATATTTCTTTTTAGAGAAAATTTAAATTATACTGTCTCAAATCTT
TTTTAAAAAACAAAGTTTATACATCAGTTAAAACAGTTGATAAAATGAAAATTTATGAATATGTACAATA
ACTAAAACCTGAACCAAATGAAGGGAAGTTTATATGAAAAATTCTTTACATTAAGAAAGATAAACTTTTG
AAGAATGTTTATATTATGAAACAAAATAGGACATGGAACACTGGCTTTACACTTCACACCACACTGGCAA
TCAAAATCTGGTCTTTTGATCTCATTCTATGGAAAAAAGATTTTTAAATGAAATTATGTGATATGCATAA
TAATGTACTGAATTTAAAGTTATTCAAGTAATTTGTTTTCCTCAAAAAATGTTATCAATGGAGCTTCAAA
TAGAGAATTGCAGTGATTTTAAACACAAGTCATTTCTTTCACCTCATAACTTTAAGATAAATTGTACTGT
ATAGTCTTCAAAATGTTAACAAATGCATAAAATGGACTCAAAACAAGTTTTCTTTCTCACTCATATTTAT
ATTTGAATCCTTTTTTCTTCCTACACCCACACAGAATTGTAAACAGTCTTTGCAGGGTTTATATTACACA
AACCCATGGTAACTTTATTCCAGTACCTTTATGATTAAGGCCCCTTAATCATTTTCTGGAATGAATAAAC
ATAACTTTATTGGGAGGGTGTCAATATTCAAACAAATAACTTGATTTTAAAGAATTTAGATTCAATTTTT
TAAAGGTAGAAAAGCTTTTAATCAATTGGCATGGACCAATTCTAATCAATTGAGTCAATATTTATTAAGC
ACACTCTAGGGCAAGGCACTATTCCATGTGCTGGTGAAAAGAGCAAGGCCCCATCCTTAAGGAATCTAGA
ATCTACCAAAGGGGTAAAATAAGCCCACAAATAACAATTAAAAAGGCCAAATGGTATTAATACTATGACA
GAAGTACAGTCAAAACACTCTGGCAAATATGGCAAATATCCTTGGCTAGCTGTCCAACAGCTTTCCTCAC
CACTCCTTTCCTGTTGGCAGAGCTGGAATCAATCCCAGCATTCAGCCACGGTTTCCAAATCAAAATTCAG
ATACGTAGTGTGATAATACAGAGGAATGTTTCAAACCAGAGACATACATTAACTGGTAATTATACTCTAA
TACTTGCACTGTCAAATATGGTAGTCCTGTCCTATGTGGCTATTTAAATGTAAATAAATTAAAATTAAAT
AAAACTTAAAATTCAATTCCTCCGTCATAGTAGACACATTTTAAGCGCTAAATAGCCACATGGGGCTAGT
GGCTACCATTCTGGACAACACAGATACAGAATATTTCCATCACCATTCAGTTTTATCAGACAGCATTGCT
CTATGTACTACTTCTTGAAGTTGAAAAATAATTCTTATTAATTCAAATATTTTAAACAAAAGATGAAACA
AAACAGATTTGCTGGTTGAAACTGAAAATCTCAGCTACCCACAGCAAGTTGTTCCCCAAGCATGCCAGTA
ATCCTGATCCTCTATGAGAATTTTCTAAGAACTGTAGAAGTGCCATTCTCTTCCTCAGGCCAAACTTTAC
ATACTAAAATGGTTTCCCCTCTAGCTTTCATTTAGAACAGATAAATCCAGAGTTCAGAAGATATTTACAT
TCTTTTCTATTTTGTGGTTCAAACTAATAGTGCAACATAACATAGAGGGAGGCACACATTCACGTTACAC
ACACTCACACACCCATAACCACGCATGCTTTCTGGGTTTACCTGTAGTAAAAAGACACATGTGGAGACAT
GTGCCATTTGAGTAACTTGAAATTTTAAATAAAACTTCTTTCCATTACAATCATTTAGAGAATGATTAT
```

- Maintenant que vous avez la séquence de `AMELX` au format FASTA[ITEM,AMELX_FASTA,0,1], il serait bon 
de récupérer la séquence de `AMELY` au format FASTA. Rendez-vous au [LINK.IF,AMELX_FASTA,45].
- Si vous en avez terminé avec les amélogénines, rendez-vous au [LINK.IF,AMELXY,21].
- Si vous voulez choisir une autre banque de données, rendez-vous au [LINK,33].
- Si vous voulez choisir une autre protéine de l'émail, rendez-vous au [LINK,1].
- Retournez au paragraphe précédent [BACK].

## 101

Voici la cartographie du gène...

```
AMELX amelogenin X-linked[Homo sapiens]
Gene ID: 265, updated on 29-Mar-2023


Reference GRCh38.p14 Primary Assembly NC_000023.11  from: 11293413 to: 11309588
mRNA transcript variant 3 NM_182680.1, 7 exons,  total annotated spliced exon length: 835
protein isoform 3 NP_872621.1 (CCDS14145.1), 6 coding  exons,  annotated AA length: 205

Exon table for  mRNA  NM_182680.1 and protein NP_872621.1
Genomic Interval Exon		Genomic Interval Coding		Gene Interval Exon		Gene Interval Coding		Exon Length	Coding Length	Intron Length
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
11293413-11293468		1-56		56		1308
11294777-11294842		11294789-11294842		1365-1430		1377-1430		66		54		1936
11296779-11296826		11296779-11296826		3367-3414		3367-3414		48		48		1276
11298103-11298144		11298103-11298144		4691-4732		4691-4732		42		42		91
11298236-11298277		11298236-11298277		4824-4865		4824-4865		42		42		270
11298548-11298973		11298548-11298973		5136-5561		5136-5561		426		426		1633
11300607-11300761		11300607-11300612		7195-7349		7195-7200		155		6

mRNA transcript variant 1 NM_001142.2, 6 exons,  total annotated spliced exon length: 793
protein isoform 1 precursor NP_001133.1 (CCDS14144.1), 5 coding  exons,  annotated AA length: 191

Exon table for  mRNA  NM_001142.2 and protein NP_001133.1
Genomic Interval Exon		Genomic Interval Coding		Gene Interval Exon		Gene Interval Coding		Exon Length	Coding Length	Intron Length
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
11293413-11293468		1-56		56		1308
11294777-11294842		11294789-11294842		1365-1430		1377-1430		66		54		1936
11296779-11296826		11296779-11296826		3367-3414		3367-3414		48		48		1409
11298236-11298277		11298236-11298277		4824-4865		4824-4865		42		42		270
11298548-11298973		11298548-11298973		5136-5561		5136-5561		426		426		1633
11300607-11300761		11300607-11300612		7195-7349		7195-7200		155		6

mRNA transcript variant 2 NM_182681.1, 5 exons,  total annotated spliced exon length: 745
protein isoform 2 NP_872622.1 (CCDS14146.1), 4 coding  exons,  annotated AA length: 175

Exon table for  mRNA  NM_182681.1 and protein NP_872622.1
Genomic Interval Exon		Genomic Interval Coding		Gene Interval Exon		Gene Interval Coding		Exon Length	Coding Length	Intron Length
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
11293413-11293468		1-56		56		1308
11294777-11294842		11294789-11294842		1365-1430		1377-1430		66		54		3393
11298236-11298277		11298236-11298277		4824-4865		4824-4865		42		42		270
11298548-11298973		11298548-11298973		5136-5561		5136-5561		426		426		1633
11300607-11300761		11300607-11300612		7195-7349		7195-7200		155		6

mRNA transcript variant X1 XM_017029404.3, 5 exons,  total annotated spliced exon length: 1035
protein isoform X1 XP_016884893.2, 5 coding  exons,  annotated AA length: 344

Exon table for  mRNA  XM_017029404.3 and protein XP_016884893.2
Genomic Interval Exon		Genomic Interval Coding		Gene Interval Exon		Gene Interval Coding		Exon Length	Coding Length	Intron Length
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
11294789-11294842		11294789-11294842		1377-1430		1377-1430		54		54		1936
11296779-11296826		11296779-11296826		3367-3414		3367-3414		48		48		1409
11298236-11298277		11298236-11298277		4824-4865		4824-4865		42		42		270
11298548-11298973		11298548-11298973		5136-5561		5136-5561		426		426		10150
11309124-11309588		11309124-11309588		15712-16176		15712-16176		465		465

```

Retournez au paragraphe précédent [BACK].

## 102

Congratulations!! The code for the mini-game is 'enamel.php'

## 103


Retournez au paragraphe précédent [BACK].

## 104

```
>sp|Q99218.2|AMELY_HUMAN RecName: Full=Amelogenin, Y isoform; Flags: Precursor
MGTWILFACLVGAAFAMPLPPHPGHPGYINFSYENSHSQAINVDRIALVLTPLKWYQSMIRPPYSSYGYE
PMGGWLHHQIIPVVSQQHPLTHTLQSHHHIPVVPAQQPRVRQQALMPVPGQQSMTPTQHHQPNLPLPAQQ
PFQPQPVQPQPHQPMQPQPPVQPMQPLLPQPPLPPMFPLRPLPPILPDLHLEAWPATDKTKQEEVD
```

Retournez au paragraphe précédent [BACK].

## 105

Félicitations!!, vous venez de trouver la séquence de `AMELY` au format FASTA[ITEM,AMELY_FASTA,0,1].

- Si vous voulez la sauvegarder sous le nom de `amely.fasta` ce qui vous servira par la suite, rendez-vous au [LINK,110].
- Si vous avez déjà la séquence `AMELX`[LINK.IF,AMELX_FASTA,#YES,#NO], vous en avez terminé avec les amélogénines, rendez-vous alors au [LINK#YES,21].
- Si vous n'avez pas la séquence `AMELX` au format FASTA, il serait bon de la chercher dans la banque de données. Rendez-vous au [LINK#NO,33].
- Si vous voulez choisir une autre banque de données, rendez-vous au [LINK,45].
- Si vous voulez choisir une autre protéine de l'émail, rendez-vous au [LINK,1].


## 106

```
A
5'-TATTTGGACTCTCTCTGAGGA-3'
5'-TTCTACTACAAGGGTGTTGCA-3'

B
5'-CTGGAGAGCCACAAGCTGAC-3'
5'-TTGCTGTGGACTGCCAAGAG-3'

C
5'-ATAAGTATCGACCTCGTCGGAAG-3'
5'-GCACTTCGCTGCAGAGTACCGAAG-3'

D
5'-CCCTGGGCTCTGTAAAGAATAGTG-3'
5'-ATCAGAGCTTAAACTGGGAAGCTG-3'

E
5'-ATGATAGAAACGGAAATATG-3'
5'-AGTAGAATGCAAAGGGCTC-3'
```

- Si vous pensez que la meilleure amorce (<em>primer</em>) pour `AMELY` est le `A`, rendez-vous au [LINK,17].
- Si vous pensez que la meilleure amorce (<em>primer</em>) pour `AMELY`  est le `B`, rendez-vous au [LINK,26].
- Si vous pensez que la meilleure amorce (<em>primer</em>) pour `AMELY`  est le `C`, rendez-vous au [LINK,37].
- Si vous pensez que la meilleure amorce (<em>primer</em>) pour `AMELY`  est le `D`, rendez-vous au [LINK,47].
- Si vous pensez que la meilleure amorce (<em>primer</em>) pour `AMELY`  est le `E`, rendez-vous au [LINK,57].
- Si vous pensez qu'aucune de ces amorces n'est utile pour votre étude, rendez-vous au [LINK,63].

## 107

## 108

## 109

## 110


Notez le code `32`, il vous servira plus tard.

```
>NG_008011.1 Homo sapiens amelogenin Y-linked (AMELY), RefSeqGene on chromosome Y
TATTATAAATCATGCTGCTATAAAGACACATGCATATGTATGTTTATTGCAGCACTATTCACAATAGCAA
AGACTTGGAAGCAACCCAAATGTCCAACAATGATAGACTGGATTAAGCAAATGATAGACTGGATTAAGCC
TTATCATAACCTCATTTTAATGCAAAATTACATTTCTACCAGCGATACAACAGGTGACTAATCACCCATG
CAATGACTAGAACCAATCACAAGTGAGGCAAAACTACAGTTCTGAGAAGTTTAAAGCCCACTTTCTGAAA
AGACATGATGTTCTTCTCCTTACTTTTAATGTCAGTCCTTTCATTAGAGAAATAATGTATTTTAACCCCC
TTCTGTTCACTAGTAGAGAATTTCATTTGTGAACCATGCTCTCATTTCTCAATTTCCTGGCTATAAAGCC
TGAAATACTTGACACTCATTTTTTATTTCTTGTATTGGCTTCATGACAAGAACAGGGAAAGACCCATCTT
TTTTAGGGGACAGGCTTTGACAGTAGCAGAACTGGCAACCCAGATAGGATCCCGGACAAGATAATCCACG
TCTCTTTTTGGGAAGTCATGTTACTTCCCTAGAGATCCAGCACTGCCATCTGAAAGTTTCAGCGAACAAA
GAAGGTAAATTGATTCTAACTCTAGGTGCCAGAAATCAGCTTCAGGGAAGGTAATGTATCATTGTTGTGT
GGTCATAAACAGGCAGACAAAGGGTTATACAGCTGTACTGGGAAGGACACCCTGAGCTAAGGATGGCAGG
AATGCTCACCCAAAATGAAGGTTGTGCATGGGAAACCTGACACCATGTCATAATCTTATCCTCAGTAAAA
AGTCCCTGTGGAAATCCTTGAAAGGGGAAAAGAGGACTTGTTGCTGGATAATTATTGTGGTCCTTTGGTG
ATGTCATATTTTCTTACTTTTTCTTGTTTTGGTGTCCTTATGTTAGGATCTACACATCTGCCATAACAGA
TGCTTCTTACAAGTTTTTGAAATTGCTCTGATAGGGGAGAATTTTTTCCTGAAGGTACACACACACACAC
ACACACACACACAATTGTTTGAGACATTTGGCTTTGATTTTGGGTACCTGCAGTTGTGTAATCTCTGTAT
GATTTCTTCAGTACTAAACAAGTTCAGTGGTGTCTCTGATTTGCTCAGTGGCTTAAGGTATGGTTATTAG
TTGACGTTATGGTGAAGTTTTTCTGGGGACTGTGATACCAGGTAGGTTAATGCCCCCAGTAGCAGTGGTA
CATCAAGCATCCCTGTTCATAGCCATCAATGCAGCTTAAACAGGCACCAATGTTACTGGGTCCTGGAAAG
TCAATTCTTGGACCACTGGACGGCTTGTTTAGACACTGGTAGTGAGAGCAATGATCTGGGTGGCTAGGTG
GATTCTCAGGTCCCCGTCCAGCTGGTATGATATATGTTATAGCAGTACCAGTGGTGGAGGAACACATAGG
GAACCAGAAGCCCATGTTGGTGTTGCTGGTAGCTGTGATGTATTGGTTAGGATAGTTCTCTAGCTTGCTG
GTGGCATGAATGGATGGGTGTCATCTGTGGCAATATCAATAGATTGGCTCCGTCTGACTACAGACCCTGG
CAGAAGTGATCAGATGTGATTGGTGATGGGCTGGGCCAGGATATTTCCGGGCTCCTGGATAACATATTAG
AGCCCTGGGTCTGGGGCTTCTCTTTAGGGCCCTGGTAGTATCTTCGCACACTGGCTGTGACAGACAGGCA
TTACTGGAGGAATGCTCTAGTGTGGGATGATATGGTTGGTGCATTGTGAGCCTACCACCAGGGAGAGGGG
CCTCTCAGGTGGAACAGCATGGGTAAGAAGCTAAAGAAGCTGTGGGGAGTTAAGACTTTTCATGCCCTAG
TCTCACAGTAGCCCACAGCAGAGTGGTGGGAATTGTCTTATGTTTGTCTAACAGTCTGGTCTCACCTGTC
CTTTCTTGGTCACATGGTAGCTGCAGCCATGTCTGTTTGGACTCAGCCCCAGTGTGGAGCACATCCTAAC
CTTAAATTCTCAAGATGGTGCCATGAACCCATGAGTAGAAAGGGCAGGGTTTCTCTCTGGCGAGTTGCAT
GAGTAAGAAGTTGTGAGGACTGTTGACTTATCACACCCTGGTCCTACAGTATGCTGTAGCAATAGGGTAA
GGATTGTCCTAGTGGTCTGTGGGAGTGTCCCTTCTCTCCTCTCCCTTTTTGGCCCAGTGGCAGCAGCCAT
TTCAGTTCTGGCCTCTGGGCAGGAGTAGATCCCAGCATGTAGATTCTTAGAATCGTGCCAAGCTGTAGCT
GCTCTGGGCTCATGTCTGTGGGATTCTAGATGTGTTCCCTTTCTGGAGCAATGTCTCTGTGCAATGTCTA
GGTCTCTCCCTATGTTAGGCCTGAGGCTTACATGGATCAAGGGTATCTCCCATAGTCAATAACACTCTTG
CAGAAGAGTGGAACCCTGGGGATTTCTCTTTTACTCTTTTTCCATATTTAGGAGCTTCTCTTAATCTCTG
GCTGGGCAAGCTACCTTAAGCCCTTTTATTATGTGCTTTCAGTTATTCTTATCACTTGTCTGTTCAACCC
TAGGATTCTCTCTTAGACAATGTGTTTAAAGTGTGAATATCACTGGCTATTGGGTTTTCTCTCCATGGAA
GTTGTACATATTAGCAATATCTAATCAGCTATTTTGATCCTCTTCCTCAGGAAGTAGTCAATACAATAAC
ATATTTTCTTTTTAAAATTCAACTTATTCATAAATGAAATTTTTGTTTATATAAAAAATTTTCTACTGAA
ATTTTGTCCTCTCTTCCAAAACAGCTGATAATTTTTAAATGTTTAAGGCAGACCTAAATGGAGAGATTTC
AAGCAGAGTTATCCATATGTTAAGACTGTATGAATTAGGATATTCAGTTGGGAAAAACAAATAGAATCAT
ACTGTTTTTGTGATACTGGTCATCAAACTCTGGATAATTCTCGACAGTGAATCAGAAACAAGAATTCTGT
TGTTTACATTGAACAAATATATAATTTCTTATCATTCAAAAATATGAGACAACATAAAAAAATACATTGT
TAAAGCCAAAGACCTCTACTTTTTGTTTTCAATCATTTCTTTAGTAGAGCTCACCCATAATTTTGTAGAA
AAATTTCTTAATCCTTTTAGGAACTTCAATAAACATAAATAAAATGAAATAAAAATAAAATAAAATAAAA
TAAATTGAAGGAGAATATGTATTATACTTCCCTTCTCTCTCCTTTTACTCCCTCACTCTCTCACCTCTTC
TCTACAAATACGCTAAAGCCTGTTTTCTTAAAACTTAGTGTTACAATTTCCTTCAAAGCGTATTCTTGCC
TTCAATATACAATTCACCAATAAATATATTCATAAATACAAATACACCCTGGGTACTGCTGGCATTTAGA
ACTATATTCTATCTTGGGTACAGCTGGCATTTAGAACTATATTCTACGTTCACTTTAACTCATCTGTGTT
GCCCTTTATAATCTTCTACATCTTTCTGTATAGCAAGAAGTAGAAGGTGATAGGTTTACCTTTCTTCCTT
TTAGCTTGAAAGATTTACCTTTCTTCATAAAAATTATTCATTTCTTGCTAATATCCCCACATCATCCTAG
AATCTTATTTTCATCTTTAAAAAATTTCTAAGTGCCATGTGGTGAATTAGGACAGGTAATAACTTTCCAT
TTACTAAGGATGTCTCTCTCTAATTTTCATGCTAATTCTATTAAAAGGGTTTTATTACTGTTCCCAGTTT
ATATATGAAGAAACTGTGGCTCAGACAGGCTAAATAACTTGAAGGTTGTCCCTTGGTGAAACTTGGGTAA
GGTGAACCCACATGCATTTATATCATAGCATTAACTATTATACACATGATTTTCATACATATTTTGTCCT
TGAATTTAATTCTTCAAATTTGGCTCATGTATATGGTATAATATTCATATGCAAAAAGTTTATAAATATT
AGCTAAGTATTCAAAGAGATTCAGCTATAATATTAGTTGTATCTGGGTATTACTATTTCCTTTATTAATT
TAATATTGATAGACATCATTCATTATCTCTCGATGCTAGATTTTTAATTGATCAGATATAAAATAAAATC
ATAAATGTTTGTGGTTCACTAAGATGAAAGTGTTATAAAAAAGCATGCGTTTAATAGATCACAGTCCTCA
GAGACGGACAGACTTTTCTTGTTTTTGCTTAGGCAAAGTAGAGCTTATTAAAAATATGAAAACAATGCAA
CTAAAGAGACACTAAAGAAAAAGAAAATCTGTTTCATGCATGAAAGAAAGCAGAAATGGGCTAGAAGTAC
ACGGGCAAAGAAGGCCATCATACTTAGAAAGGTTGATACGCTATGTAGGATGAAGTAGCCAGGGCAATAT
GCCTTATGATAGGTGTTCCTAAGTATTTAAATATATTTTGATGTGTGCTGACCAATGTGTAAAATCCCTC
TTGTCTTGCCTTTTAGATCATGCATAAAAGTTTTGCTACTATGATAACCTTGAATTTGTTTAGATAATAA
ATAGTTGCAGATCACACCAGAGAGACTTTTGGCGCTTTTCTGAACACCAGAGTGGTGACAAATGAGTAGC
AACAGGGAACAAAGGACATACCTTTAAGGAAAGCAAAAAATACAGTTGTAGTGATTTTAAAATTTTAATC
GATCACAGGCAATGACATAAGATCCTCTTAAACATAAGTCTGAATGTTTTGGCATGTGCAAGCTACAAAT
TTGCTGACTTAAAAACAGTGCAATGAAGTTCCTTTTGCCTGTTAAACATATTATTGACTATAATGAAGAA
CTATATGGACTAATCACAATATACTACCTTATATTTAGCCATGGTTGCAAAAAAATTATGATGATACAGG
AATTTTTAGTCATATTCAACACATTTTTTCTTCACAAATCTGATTGGTTGTTGTAGATACCTTGAAGGAT
ATAAATTGAGCTCATAGTTAAAGAAAATCTAGAGGACCAAGCCTCCCTGTGTAGCACAAAGAAAGTTTCT
CTGAATATATTTAAAGGTATGTGGATTTTACATATTATTTTGTGTCCTTTTTATTCTGCTTCTTTTCTGT
AATTCATATTTAATAGATGCAAATAAATTCCATGTTTCTAATACTTTATGCTGTTAAGAATCAGTTACTT
CTGTTGGATTATAATTAAATTTGACTCTCATTATGTAATTTTTTTTTTTACTTTATAATGCTTCAAAGCA
TTTGTCTATATGTGTATTTAAATTTTAATTTTAGAAACCAAAAGGAGTTCCTGGAAGCCAAACTCACTTG
TAAACTAAATTGAAATAATACTTTAAGGCTATCTTTATTACTTTTAACACTTTTTTTGTTAAATACATCA
AATAATACCTTATTTCATACTAAAACCATCATCTAAAACTTTATCTCTTTTTAAAAATTATTTCAAGTTT
AATAACACACATTTAGGATACAACATCAATGTAGTACTCATATCAGCATTACTACATATTATATTCACTG
TCTTTACCAAAATTAATGTCTTTTTACTTAAAGATTTTTAAAGTTAGTCAATAATTTGAGCCATGAAGCA
TTGTGCATGTGTTTAAGTGAACAAGTTTTAATTCATATCTCACATCTCTAATTTGTAGAGTAATTAAATT
AGAACATATATCAAAGGGAAGATACCATGAAATAAAATAGAATCTTTGAGATATAAATAATCCAAAACTT
ACTGAAGAATCAATAAATTCACAGATTATTGTTTTCTTTGCCTTTCTGTTTAACCTCATCTTTTGCTATG
CAGACCCCCTGAGCTCAGACATTTTACCTGCCTGAAGCTCTATAAGGCTAGAAATCCCTGTCATTTCTTA
ATCTGTTTTGGCAAATAACTTAGATTTTTTTCCCTCAAATCATCAGTCTTTGTTTTTAACAATATCAATA
CCTAGATGGATAATATAAGAAATATTTCTCAGCTCCTCATTTTAAAATAATAAAATGCTATGTAGTAATG
GGTAAATACCTACCTTGACGGGCTCTTGAACCTTAAGAGCCAAATTTGTTCCTTTGATTATTAATTAAAA
ATTATACTTAGCTTATATGGCTTTACAGGACCATGCAGACAGACAGGAATATGGCATTCCAAATTACATA
ACAACATGATTTATTTTCCTCAACTTGTTCAGTTTCCAACCTAAATGAAAAATGATTTTATGCTAACTAC
TGTGACTCCAAAACAATAAAATGGACTGAGAACTTGAAATCAAATAAGAAAAATTAACCTTGCAAAGAAT
ATCCTACTTGCTACCCACAGACAAATGCAGATTATGTTTTTTAAGGCACTTTATGGTGCACATGTTTGAG
AAGAGATGAGAAAAGCACTTGCTGATTTTCATTTCAGAACCATCAAGAAATGGGGACCTGGATTTTGTTT
GCCTGCCTTGTGGGAGCAGCTTTTGCCATGCCTGTGAGTAAAACATTCTTTGCATAAGTTGTGTCCAATT
TACAAACGTGGAAATAAGAATTTGTCCCCCAGCTGGGAAACTTTAAGGTTTAAAACAGTTTGAGCTAAGA
GGCCCCAAAACATCTGTGCTGAAGAAACACTTTGGGGAATGAAAAAATAGATTATCTCTTCCTAGCTTAT
TTTGCTTAGTATAATGTCTTTCATGCTCATTCGCATCTTTGTAAATGTCAAGATTTTATTCCTTTTTAAG
GCTGAATAGTGTTCCATTGATTAGCCTCATTTAATCTTTCCACCCTGTAAATATATATCAAAACATCATA
TTGTACACCATGAATATATATAACTATTATGCACCCACAAAAATTTAAAAATAAATCTATTAATTAAATA
AATAAAATAGCTTCTGAGATGCCTCCACTAGAGGTTCTGATTTGGTACAGCTGGGGTTGGGCCCAGGACT
CTATTTTCACAAGCACCCCAGGAGATTCAGTTGATACCATTAGCCTGGAAATATCACCACCCATTTCTAC
ATGGAGGAAGTTTTTGGTTTTTGTAGGTTTTTTTGTTGTTGTTGTTGTTGTTGTTGTTGTTGTTGTTTTG
AGATGGAGTCTTGCTCTGTCGCCCAGGCTGGAGTGCAGTGGCACAATCTCAGCTCACTGCAACCTCTGCC
TCCCAGGTTCAAGCGATTCTCCTGCCTCAGCCTCCTGAGTAGCTGGGACTACAGGAATGTGCCAGCATGC
CGCGCTAATTTTTTGTATTTTTAGTAGAGACGGTGTTTCACCATGTTAGCCAGGATGGTCTCGATCTCCT
GACCTCATGATCCACCCGCCTCGGCCTCCCAAAGTGCTGAGATTACAGGCATGACCCACGGCACCTGGCC
TGGAGGAAGCTTTTGAAAGGGACTCTTGAAAGGTCTCCAGAGAAAGTGCTTAATCAGCCTTATAAAAATA
TTACCAAAATGCCCGTTTGGTCTAAAACCTAATTCCTCTCAAGTTTCCAGATATCTTCTTGCCCTCCACA
TATTACTGCTGTTACCACTTGAAGGGTAAGATTTCTGTGTTAGGAATCCACTTCTAGAAACATCTTGACT
ATTCTCAGAAGTCCTACCCCTTTGGGTGCATCTGATAAGTATGTGGCTTTCTTGTGGTTGTCCAGGATCC
CACCTACACCCAATATATAGTGATGTATTTTGTATTTAAATGTATTAAACACCAGGGTGTCACTCTCACT
CTGTCTGGACACAGGTGCATAAAGGCAGAGAACTTAGATCATATGCATGCCAAGCAGCCTGCATATACTT
TTTGGTGGCATAAAGAGCAGTTGATACAACCAGAAGCCAGCAAGCTTCCACACCTACCTCCTCTCTTCCT
CTCTCACCCACAAAACCAAGATTCTGTGCTCTGCCTTCCTGAAATCCTGCACTGTGGCAATCCCTAGTCT
TCTCAGGAGTCCCGGCATTACGAATTCAGCCCTTTTCCTGCTCTCTAAGATGGTATCGATCAAAAGGGTA
TAGGACCTGAATAAAACCATTCACATGCAGATGAGAGTGAATAAACCCCTCCTATGAAATGTGAGAATTT
TGAAATAATATAATATAGCCAGTCCTAAATGAGGTCAATATCTGAGGGAGATTTTCTTCATGATTGTCTC
TCTTCTTCACGTGGACCCCGGGTGCAACCAGAGTTCCACAAGGCAGGCGCCAAACACTTGGCTTCCACTT
TTGAGAGGATAGACAGTCCTGATTCAGATTATCATTCATGTGGCCTTTTATTTTTAACTTAAAAATTTTT
TTCTGCCATAAAAACACTGGGAGAATCATAAAAAAGATTGGCCTAAATAAACTCTTTCATTTTTCCATTG
GATTTATAATGTTTCTACTTTCTCCACCCATCTTGTTCTGGCATTCATTAATTTCCACCTTGTGGTTTCT
TTTGTGGCTTCTTTTGTTGTATGGATGTGTTGTTTACTTTGCCTGTCAATTATGAGAAATCCCTTAGATA
CTTACAGTACTTGACCACCTCCTGATCTACAAGGGAACATTTGTGAGACAACTGCTTGTTGATATTTCTT
TACCGTGTAAAAGAAACATACTTCACTCCCCAACATGGGATGAGTTTTATCAGCAAGTAAACTGTTAGAC
AGGATAAGGTAGAATTCATTGACAGCACTGGGGTGGGAGAAGGATGTTGTTTGATCACTGGAGAATAAAT
GTGTCCTGGTTTCTGCTTCCAGGTCTCCAACTTTAAGACTATAACCCCAGGGACAATCATTTAGCTATTC
TAGACCTCTTTAAAATAAGAAGTCTCCTCTCCTACATAGCACACTTGTTTTAACGAAAAACAGACCTCAA
ATATATTCTGTACTATATAGATTTTTTAAAAGTAATTTTAGTCTCTCTTAATGTTAACAATTGCATATTG
ACTTAATCTCTTACTCTCTCTTCCCTTCCTTCACACTCTCCCTTCCTCTCTCTTTCTCTTCTCCTCCCCT
CCTCCCTATAAAAGCTACCACCTCATCCTGGGCACCCTGGTTATATCAACTTCAGCTATGAGGTAATTTT
TCTCTTTACTAATTTTGATCACTGTTTGCATTAGCAGTCCCCTGGGCTCTGTAAAGAATAGTGGGTGGAT
TCTTCATCCCAAATAAAGTGGTTTCTCAAGTGGTCCCAATTTTACAGTTCCTACCATCAGCTTCCCAGTT
TAAGCTCTGATGGTTGGCCTCAAGCCTGTGTTGCTCCAGCACCCTCCTGCCTGACCATTCGGATTGACTC
TTTCCTCCTAAATATGGCTGTAAGTTTATTCATTCATGAACCACTGCTCAGGAAGGTTCCATGAAAGGGC
AAAAAGTCAACTCTGACTGACCAGCTTGGTTCTATCCCATCCGGTAAAATGTAAAGATTAGGTAAAATTA
CTAACTTTGGGCAAATAATTTCCTCTCTTTGGAACCCTGGTTTTCTCATTTGGACAAGGGAAATTACTGT
AATATTCACATTTCAAAATATTGGAGAATAATATAGTTAACAATTATAAAAACTGCTTTGTCAAGTATAA
TATGAGCAAGGTAACTGATTTTTTTTATTGATTACATGCTGTATTACCATATAAAGAATCCCCAAACCTA
AGGTTAACTAAGTGTGTATACTGTTCAGAAAGGAATAAAATTCTTACTTCTCTCATAGGTTCAGGTAACA
ATCTGTGAGTTTATTTACTTACACAAGCTGCTGACAAATGTTAATAAGAATCTGAGGCAAGGTTTTCTGT
TAAACCTAAAAGATTGACAAATTTGATCAGTAAAATCTGTGTTTTTAGGTTGAGGGACAGTGTTTGCACC
GCTTTTTTCCCCATTGTGACATCAAAGGAAAGATGAAATTAACATTATGTCACATTATTGCGGCATAATT
TTATGTTTGCTTTGCTCTTACAATGAAAAGCAGGACCTATGGAAATAAACAGATTTACTCCCTTTGTAAC
TTCAGTCAAGTTAATGAATCTCTTTAACTTCCCATGACCTTATCTAAAAAGTGAGAGTAACAATACTTGC
CTCCTAGCATATAAGGAAAGATGAAGAATGTGTGTGATGGATGTAAACACAGTGCCTGACACACAGGAAG
TACCCAACAAATGTTTTACCTTCTTCTTTCTCTTGTAGAACTCACATTCTCAGGCTATCAATGTTGACAG
GATTGCTTTAGTGAGTCTATATTTCCTACCGCATCAGTGAATTTCTGCATGGGATGAAAGTAAATTAAAT
CAAATGGATTCTAATATATCTTTCTCTTAAGGTGCTCACCCCTTTGAAGTGGTACCAGAGCATGATAAGA
CCACCAGTATGTAGACATTTTGTTCTTTATTCCCTGAAAATATTAGGCATGCATTTAAATTCCCATTTTA
AGAAAATACCATGTGTACTCCACATACAGACACTAATGGGAAATTTAGTTTGTAAAAAATCATGTCTGTG
TACACAGTTACAAATTTTTGCAAAGGAAAGATAAATACAATATTCCTATGGCCATAATGGCAAAGACAAC
ACTGCTGCTTCTCTGGTTGGAGTCACGTGAGCCAATGGTAAACCTGCATCTCTGTTTCTCACCAGTACTC
TTCCTATGGTTACGAGCCCATGGGTGGATGGCTGCACCACCAAATCATCCCCGTGGTGTCCCAACAGCAC
CCCCTGACTCACACCCTGCAGTCTCATCACCACATCCCAGTGGTGCCAGCTCAGCAGCCCAGGGTCCGCC
AGCAAGCACTGATGCCTGTTCCTGGCCAGCAATCCATGACTCCAACCCAACACCATCAGCCAAACCTCCC
TCTGCCTGCCCAGCAGCCCTTCCAGCCCCAGCCTGTTCAGCCACAGCCTCACCAGCCCATGCAGCCCCAG
CCACCTGTGCAACCCATGCAGCCCCTGCTGCCACAGCCACCTCTGCCTCCAATGTTCCCCCTGCGGCCCC
TGCCCCCCATACTTCCTGATCTGCATCTGGAAGCTTGGCCAGCAACAGACAAGACCAAGCAGGAGGAAGT
GGTGAGTACACCTTGAAGCCACTACAATGCAAATCCTGTGAAAATGGTGCAGCAAAGTTGGCCCCAGAGT
TCTAAGGGGTCCAACAACTCAGGGTCTAGAGTTGTAGTAGTTACAGATCTATGATTCTATTAGTCCAAGT
AATATGTTGTATCTTTACATTATAAACAAATTTATCTAAATGGCTTGGTAATTAAGAACACAGTTTTTAT
GATAGGTTTAAATTTTATTATTATTGAATTTCTACCAGACTGTATATTATGACAACCCATTAATAGAAAA
ATATATTATTAAACCCTCTTAATTTTAAGGGCAACAGCAATAAGGGAATATCAGTTCTTTCATTTCAAAG
ATTTGACTCACAAGAAGAGGCTAGAATTGCAGTGAAGGCTTAAGATAAGATGGGGTGGGTAATTTTTAGA
GTGCATATATTTGAACAAGCTATGAAAGGTAGATGGGAAATCTCTTTAAAAAAACCTATACGAAGGTTTC
CCATTTTCAGTAGTTTTCAGTCTAACTTGGAGGAGGCTAAACTAAACATGCTGTTAGAGTCCTTTTTAGT
GCTGAGATTCTATAGATGATTAAGCTTTTAAAAAGAAGTTACCTCAATTTATGACTGAATCTCCCATTAC
AAGAAGCACTTACAAATGAATGGGAATAATCAATAAAAAAACTTTATCCACATCCATAAAATCTTATTTC
TACGTATATAAGATTATGTGATCTATCACTTATATGTATCCAACTGTAATTCCAATTTATACAAGCTATT
GATGATATACTACTGAGAAGCAGAGAAAAGTGAGGTGGAAATGACCAGGATAGACAGCCAGGACAGCTAG
GTTCAAGTTCTGGCTTTGCCCTCAAAAAGGAGGCACTATTGTAAAAGTTACTTCAAATGTGTGAGTATTT
TCGTTTCTTTTAAATGGGGGAAAATGACAAAATCAGATCATTTTCAAGCCTCTGTCCAGGTATAAATGTG
ATAACTTCTGAATTAAAAAATCATAATATATGTTATAAATGGCTTAATAATTGTGAGCATGTTTACAGAG
AATATGGGGCAGAATTTTTGAAAATTGATTGAGGCTGGGTGGGGTGGCTCACACTTGTAATCTCAGCACT
TTGAGAAGCCCAGACAGGTGGATCACCTGAGGTCAGGAGTTTGAGACCAGCCTGGTCAACATGGTGAAAC
CACATCTCTACTAAAAACACGAAGGGAAAAAAAAAAGTTAGTTGGGCGTGGAAGCAGATGCCTGTAATTC
CAATTACAAGGGAGGCTGAGGCAGCAGAATTGTTTCAACCGAGGAAGTGGAGGTTGCAGTGAGCCAAGAT
CGTGCCATTGAGCTACAGCCTGGGTAGCAAGAGTGAAACTCCGCCTCAAAAAAAAAAAAAAAAAAAAAGA
AAGGAAATTGATTGAATCCCAAGTAATCTGACGACTATCATTGGCTATTCTAGTCTAAAGCACATGTTCT
CTCTGTGCATAGAAAATGCATTTATTTATCTCCTTATTAAGAATTAACACCGTGGATTTATAATGTGCTC
ACACCTTGACAAAGCTATTTATGGAAAGGTGACTTTGGGCAGATAGTTTGAACTCTTTAAAACTCAGTTT
CTTTTCGTATAAAATTTGAGTATAAATAATAGTTTCTTAGAGTTGTTTTAAGAAAAATAAAATAGCATGG
TGAGCTTGGAACCTGGCATGCAAGAATTACTCAAAGAAAGGTAGCAATTGTTATTTTGTTATAAAATAAT
AGGCTTTAAGTGTTCCAAAGGTAGAAGAAGGCTTCATGGACACCTAATATCTAATGACAACGAATGAACA
AAGAAACTTTGGAAATTATAGAGTTCAACTTAAGTGGTTGTACATTGGTTTGACAAAACCGAAGGCATAC
ATGTATTGTAAATGGTACTCACTGGAAACAATTAAATTATTTAATTGTTCCTTTTGCTATTTTTTTCAGG
ATTAAAAGACCAGAATATGAGACAGGAACTGAAGTAAACACTTTAGTTGCTTTCAGGGATGACACAAGCA
CACAATGATTTTTGCTTACAATCACTTAACTTAGCAAATTCTGTAACTAAAAATGTACCAATAGTAGACA
ATAAAATGTTTTAAAAATCATTCATGTCTTTGTGTTGAATGAAACTTAAATTTTCCTATCATTTGAGACA
ACATATTATGAATGAGTATTCTTGAATAAGGTAAGAACTGCTCATTTACTCATACAAATTCACCATTTGG
CAAGCAAATAGGGACTATATTTCTTTTTAGAGAAAACTGAAATTATACTACGTCAAATCTTTTTAAAAAA
TGAAGTTTACACATCAGTTAAAATCGTTGATAAAATAAAAATGTATGAACATATACAATCACTGAAACCT
GAACCAAATGAAGGGAAGTTTATATGACAATTTCTTTGCATTTAAAAAGATAAACTTTTGAAGACTGTAT
TACAAAACAAATTAGGATATGGAATACTGGTTGTGTACTTCACACCACATCAGCAATCAAAATCTGGTTT
TTTGATCTCATTCTATAGAAAATGATTTTTAAATAAAATTATGTGATATGCATAATAATATACTGAATTG
AAAATTATTTAAGTAATTTGTTTTCTTAAGAGATGTTATTAATGGAACTTCAAATAGGGAATTGCAGTTA
TGTTATATACAAGTCATTTATTTCACTTCATAAACTTTAAGATGATAAATTGTATTGCACAGCCTTCAAA
ATGTTAACAGATGCATAAAATGGACTCCAAACAGGTTTTCTGTGCCACTCATATTTACATTTGAATCCCT
TTTTTTTTTGCCTACACCCACACGGAATTGTAAACAGTCTTTGCGGGGTTTATATTACATGCACCCATGG
TAACTTTATTTCAGTACCCTTATGATTAAGACCCCTTAATCATTTTCTGGAATGGATAAACACAACTTTA
CTGGAAGGGTGTCAATATTCAAGCAAATAACTTCATTTTAAAGAACTTAGATTCAATTTTTTAAAGGTAG
AAATTTTTTAAAGGTAGAAAAACTTTTAATCAATTGGCCTGGACCAATTCTAATCAATTGAGTCCACATA
AGCACAGTCTAGGGCAGGGCACTACTCTATGTGCTGTTGAAAATAGTTAGGTCCACATCCTTAAGGAATC
TAGAAATTACGAAAGGGATAAAAGAAGCCTACAAATAACAACTAAAAATGCCAAATGGCCTTTTCTGTCA
TAGTAATAATACTATGACAGAAGTACAGTCAAAATGTTCTGGCTTTTCTCAGCACTCCTTCCTTGCTGGC
AGGACTGGAATCAATCCCAGCATTCAGCCTTCCATGAGCTCAGGAGCGAGGAGTTCCCTTGCTACCCCGG
GGAGCCCCCACCCCACAGCCAAGGGAGGTGGTGAGTGAGCTTGATACCCAGCCTGGGAAACCATGTCCCA
CAGAACAGTGCAATCCACAGATTGAAAAGTGCCATTCATGAACTCATGCCACTGGGGCCTAGGGTCCCAA
TTCTGGAGCCCTGAAGATTCTTAAAAGCCTCTCAGCTAGAATCTGCTTAAGCCTGTTGAGTTCCTTGGGG
GAGGGCTGACCAGCACCACAGCTGCAGCTGCCTACTGCCTAAGCAGTTTGTAGTCTGTGAGGGAGGGGCA
GCAGCAAGCACTGAGACTGATGGCTGCGTAACACGCTAAGCTCCGCAAGTTGGGGAAGGGTGGCATCCAT
CTCTATGCCCCAGGCTATGCTTTTCCCCTGCTGGAGCCAGGGAGGCTGGACAGCTGGACAGCTTGGTCCC
AAGAGGTGTCCCACACAATCTAACTGTGGCAGACTGCAGACAGGGCACCTCTTCAGGCCTGGTCAACCCA
TTCTTCCTCAATGAGTGGGCCTCCCTGGAGGAATCCAGCAACTCCAGCCAGAGGCTCAGTTGTTGGAGAT
ATCAGAACCCTCGTCTCCCTGGCTCTGAGCCCCTAGAGGTGTGGTCACAGTCTCTGGGGACAAGCAGACT
TAGCCTTTCCTCCTGGCAGATCTGAAGAATCCAGGCAGCCCAGATGAGTGATTTTCCCTCCAGCAAAGCA
TACCCCTACACCAAGAGACAGTCAAAGTGCTTCATTAAATGGGTCCTGTTCCCTGTGCTA
```

Retournez au paragraphe précédent [BACK].

## 111

```
>sp|Q99217.1|AMELX_HUMAN RecName: Full=Amelogenin, X isoform; Flags: Precursor
MGTWILFACLLGAAFAMPLPPHPGHPGYINFSYEVLTPLKWYQSIRPPYPSYGYEPMGGWLHHQIIPVLS
QQHPPTHTLQPHHHIPVVPAQQPVIPQQPMMPVPGQHSMTPIQHHQPNLPPPAQQPYQPQPVQPQPHQPM
QPQPPVHPMQPLPPQPPLPPMFPMQPLPPMLPDLTLEAWPSTDKTKREEVD
```

Retournez au paragraphe précédent, [BACK].

## 205

Rendez-vous au [LINK,74]

## 555

Votre personnage dispose des caractéristiques suivantes:

- Force [STA.SET,10]
- Nombre d'actions [TIME.SET,10]

## 666 

Votre inventaire:

- [x] Une barre de céréales énergisante [ITEM.SET,CEREAL,1]
- [x] Un pipetman [ITEM.SET,PIPETMAN,1]
- [] La séquence `AMELX` au format FASTA [ITEM,AMELX_FASTA,0]
- [] La séquence `AMELY` au format FASTA [ITEM,AMELY_FASTA,0]
- [] Un bout de papier avec le code 17 [ITEM,CODE_X,0]
- [] Un bout de papier avec le code 32 [ITEM,CODE_Y,0]



## 999

if (isset($_POST['OK']) ) {
  $id1=strtolower($_POST['item1']); // amelogenin
  $id2=strtoupper($_POST['item2']); // AMELX
  $id3=strtolower($_POST['item3']); // p22.31-p22.1
  $id4=strtoupper($_POST['item4']); // AMELY
  $id5=strtolower($_POST['item5']); // p11.2
  $id6=ucfirst(strtolower($_POST['item6']));
  $id7=strtoupper($_POST['item7']);
  $id8=strtoupper($_POST['item8']);
  $id9=strtoupper($_POST['item9']);
  $id10=strtoupper($_POST['item10']);
  $id11=strtoupper($_POST['item11']);
  $id12=strtoupper($_POST['item12']);
  $id13=strtoupper($_POST['item13']);
  $id14=strtoupper($_POST['item14']);
  $id15=strtoupper($_POST['item15']);
  $id16=strtoupper($_POST['item16']);
  $id17=strtoupper($_POST['item17']);
  $sex=strtoupper($_POST['sex']);

NG_012040.1    10240 CCACATCCCAGTGGTG  10255
                     ||||||||||||||||
                   1 CCACATCCCAGTGGTG     16

