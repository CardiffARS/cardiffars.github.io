---
title: "Cardiff Microwave Roundtable"
description: ""
draft: false
layout: single
aliases: ["/roundtable"]
slug: 2019/roundtable
---

<div class="tabs is-centered">
    <ul>
        <li class=is-active><a>About</a></li>
        <li><a href="/events/2019/roundtable/program">Program</a></li>
        <li><a href="/events/2019/roundtable/dinner">Dinner</a></li>
        <li><a href="/events/2019/roundtable/register">Register</a></li>
    </ul>
</div>
 
CUARS will be hosting a meeting of the [UK Microwave Group](http://www.microwavers.org) on Saturday March 16, 2019 at our campus in Cardiff. This one day event is a mix of talks, measurements, and socializing about activities in the GHz frequencies.

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.4.0/dist/leaflet.css"
  integrity="sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA=="
  crossorigin=""/>

<script src="https://unpkg.com/leaflet@1.4.0/dist/leaflet.js"
  integrity="sha512-QVftwZFqvtRNi0ZyCtsznlKSWOStnDORoefr1enyq5mVL4tmKB3S/EnC3rRJcxCPavG10IcrVGSmPh6Qw5lwrg=="
  crossorigin=""></script>

<div id="mapid" style="height: 400px"></div>

<script>
  var mymap = L.map('mapid').setView([51.4844,-3.17], 8);
  var marker = L.marker([51.4844,-3.17]).addTo(mymap);
  marker.bindPopup("Cardiff University").openPopup();

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiY2FyZGlmZmFycyIsImEiOiJjanFvMGpvZDUwYXNtNDhwc21qZnQ0a21lIn0.d75xS1Kq8ls8pDlnAMB3gg'
  }).addTo(mymap);

</script>

## Call for Participation

If you are interested in giving a talk, putting up a poster, displaying a project, or otherwise being involved with the event please contact us at <a href="mailto:officers@cardiffars.org.uk">officers@cardiffars.org.uk</a>.
