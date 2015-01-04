/**
var exports = (function () {
  var LINK = 1;
  var 

})();
***/

var tags={
  "app"        :"fa-cogs",
  "alignment"  :"fa-align-left",
  "article"    :"fa-newspaper-o",
  "book"       :"fa-book",
  "databank"   :"fa-database",
  "deck"       :"fa-stack-overflow",
  "game"       :"fa-gamepad",
  "home"       :"fa-home",
  "help"       :"fa-question",
  "link"       :"fa-link",
  "more"       :"fa-ellipsis-h",
  "photo"      :"fa-camera",
  "programming":"fa-keyboard-o",
  "reset"      :"fa-refresh",
  "sequence"   :"fa-file-text-o",
  "text"       :"fa-font",
  "video"      :"fa-video-camera"
};

var deck = [
  {
    image:"home",
    title:"Home & Help",
    props: FLIP,
    tags :["reset","home","help"],
    event: "",
    verso:"<h3>Title</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>",
    more :"<p>Hello World</p>",
  },
  {
    image  : "sequence",
    title  : "Sequence",
    tags   : ["deck","sequence"],
    event  : "deck(deck_sequence)",
    verso  : "<h3>Title</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>",
    more   : "<p>Hello World</p>",
  },
  {
    image:"alignment",
    title:"Home & Help",
    tags :["reset","home","help"],
    event: "deck(deck_alignment)",
    verso:"<h3>Title</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>",
    more :"<p>Hello World</p>",
  },
  {
    image:"keyboard",
    title:"Programming",
    tags :["deck","programming"],
    event: "deck(deck_programming)",
    verso:"<h3>Title</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>",
    more :"<p>Hello World</p>",
  },
  {
    image:"wikipedia",
    title:"BioInformatics",
    props: NO_FLIP,
    tags :["link"],
    event: "url(http://en.wikipedia.org/wiki/Bioinformatics)",
    verso:"",
    more :""
  },

];

var deck_sequence = [
  {
    image:"home",
    title:"Home & Help",
    tags :["reset","home","help"],
    event: "turn",
    verso:"<h3>Title</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>",
    more :"<p>Hello World</p>",
  },
  {
    image  : "home",
    title  : "Home & Help",
    tags   : ["reset","home","help"],
    event  : "link",
    target : "http://www.google.com",
    verso  : "",
    more   : "",
  },
  {
    image  : "databank",
    title  : "Database List",
    tags   : ["link","databank"],
    event  : "link",
    target : "http://www.oxfordjournals.org/our_journals/nar/database/c",
    verso  : "",
    more   : "",
  },
  {
    image  : "databank",
    title  : "Database List",
    tags   : ["article","databank"],
    event  : "turn",
    target : "",
    verso  : "<h3>Database List</h3><ul><li>2014</li></ul>",
    more   : "",
  },

];

  function createCard(a_card) {
    switch (a_card.event) {
    case exports.DECK:
    case exports.LINK:
    case exports.TURN:
    default:

    }
  }

  function deck(deck_name) {

  }

  function url(the_url) {

  }
