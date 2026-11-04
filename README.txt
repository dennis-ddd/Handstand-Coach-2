Handstand-Coach als App
=======================

Stand: 04.11.2026 19:46

Was ist drin
- index.html          die App
- manifest.webmanifest, sw.js, icons/   machen sie installierbar und offline-fähig

Wichtig
Die Kamera funktioniert nur über HTTPS (oder localhost). Die Dateien müssen deshalb auf einem Webserver liegen.

Variante A: GitHub Pages (kostenlos, bleibt dauerhaft online)
1. Auf github.com ein neues Repository anlegen (öffentlich).
2. Alle Dateien dieses Ordners hochladen (Add file > Upload files).
3. Settings > Pages > Branch "main", Ordner "/ (root)" > Save.
4. Nach ca. einer Minute ist die App unter https://DEINNAME.github.io/REPONAME/ erreichbar.

Variante B: Netlify Drop (am schnellsten)
1. app.netlify.com/drop öffnen, den ganzen Ordner hineinziehen.
2. Mit einem kostenlosen Konto verknüpfen, sonst läuft die Seite nach kurzer Zeit ab.

Auf dem Handy installieren
- Android (Chrome): Adresse öffnen, Menü (drei Punkte) > "App installieren" oder "Zum Startbildschirm".
- iPhone (Safari): Teilen-Symbol > "Zum Home-Bildschirm".

Beim ersten Start mit Internet werden Bibliothek und Körpermodell geladen und gespeichert. Danach läuft die App auch ohne Netz.

Lokal testen am Computer
Im Ordner: python3 -m http.server 8000   dann http://localhost:8000 öffnen.

Updates
Neue Version = index.html (und sw.js) ersetzen. Die App holt sich die neue Seite beim nächsten Öffnen mit Internet und lädt dann einmal neu.
