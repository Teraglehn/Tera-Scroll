Tera-Scroll
===========

Un plugin de scrollbar en Jquery, développé par Teraglehn, simple, rapide à utliser, configurable et surtout ergonomique, ce plugin répond aux attentes des plus pressés comme des plus exigeants.

Compatible avec tout les navigateur dernière génération

[Présentation](http://terazaky.fr/TeraScroll/)


Versions
--------

- 2.1, le 26/07/2012.
- 2.0, le 18/07/2012.
- 1.0, le 17/07/2012.


Historique
----------

### V2.1 -
- Débloquage du scroll naturel de la page en fin de course.
- Possibilité de changer la vitesse de scroll à la molette.

### V2.0 -
- Sémantique conforme aux plugins Jquery.
- Elargissement du selecteur, scrollbar théoriquement infini.
- Closure pour les fonction interne.

### V1.0 -
- Selection par id en chaine de caractère.
- Classe de la scrollbar modifiable (par defaut "scrollbar").
- Classe du conteneur modifiable (par defaut "scrollable").


Fonctionnement
--------------

Commencez par intégrer les différente bibliothèques à votre page (Jquery, Jquery UI, mousewheel by [Brandon](http://brandonaaron.net)) et le plugin TeraScroll :

	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script>
	<script type="text/javascript" src="chemin/vers/jquery.mousewheel.min.js"></script>
	<script type="text/javascript" src="chemin/vers/jquery.scroll.min.js"></script>

Assurez vous d'avoir mit :
- Jquery en premier.
- jquery.scroll en dernier.

Puis choisissez les bloc qui aurons une scrollbar automatique :

	$("#un, #deux, #trois, .mes_div").scrollable();

Ici, les bloc dont les id sont "un", "deux" et "trois", ainsi que les bloc avec la classe "mes_div" seront automatiquement équipés de scrollbar au cas ou le contenu dépasse le conteneur

### Options :

- scrollclass : classe de la scrollbar, permet de changer le design de la scrollbar, par defaut "scrollbar".
- scrollable  : classe du conteneur, permet de changer le design du conteneur, par defaut "scrollable".
- speed       : vitesse en ligne par cran de molette, permet de changer la vitesse de défilement.


Fonctionnalités
---------------

- Débloquage du scroll de page quand fin de course.
- Vitesse de défilement modifiable.
- Infinité de scrollbar.
- Scroll à la molette de souris.
- Scroll au clic souris sur la scrollbar
- Taille de la scrollbar calculé en fonction de la hauteur du contenu et du conteneur.
- Possibilité de changer la classe "scrollbar" de la barre de défilement (permet d'avoir plusieurs scrollbar différentes).
- Possibilité de changer la classe "scrollable" du conteneur.
- Possibilité d'ajouter un style quand la scrollbar est déplacée au clic.
- Scrollbar automatique (si le contenu n'est pas plus grand que le conteneur, la scrollbar n'apparaitra pas)


Licence
-------

[TeraScroll](http://lepalaisdumaking.com/TeraScroll/) de [Teraglehn](http://lepalaisdumaking.com) est mis à disposition selon les termes de la [licence Creative Commons Attribution - Pas d&#39;Utilisation Commerciale - Partage dans les Mêmes Conditions 3.0 France](http://creativecommons.org/licenses/by-nc-sa/3.0/fr/).

Les autorisations au-delà du champ de cette licence peuvent être obtenues à teraglehn@gmail.com.