let Info = {
  serverURL: "https://chemapps.stolaf.edu/jmol/jsmol/php/jsmol.php",
  j2sPath: "https://vsb.fbb.msu.ru/share/jmol/jsmol/j2s/",
  use: "HTML5",
  width: 350,
  height: 350,
  color: "#ffffff",
  style: "border-radius: 5px;",
  script: "load=7a5z; cartoon on; cpk off; wireframe off; color structure; zoom 130; rotate;"
};

$(document).ready(function() {
  $(".jmol").html(Jmol.getAppletHtml("JSMol", Info));
  <!-- Сustom commands goes here -->
});
$(document).ready(function() {
  $(".jmol").html(Jmol.getAppletHtml("JSMol", Info));
  <!-- Сustom commands goes here -->
  $(".jmolStart").html(Jmol.jmolButton(JSMol, 'script http://kodomo.fbb.msu.ru/~w0lfgang/term2/scripts/jmol/pr3.spt', 'Start script'));
  $(".jmolResume").html(Jmol.jmolButton(JSMol, 'resume', 'Resume'));
});
