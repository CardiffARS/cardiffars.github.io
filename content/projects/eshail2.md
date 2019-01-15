---
title: Es'hail 2 Satellite 
date: 2018-03-03T09:17:17-08:00
draft: false
layout: single
slug: eshail2 
tags: ['satellite', 'radio']
categories: ['projects']
---

Es'hail 2 is a communications satellite recently launched by the Qatar Satellite Company which carries an Amateur Radio transponder capable of both narrowband and wideband modes. This transponder was designed by both the [Qatar Amateur Radio Society](https://en.wikipedia.org/wiki/Qatar_Amateur_Radio_Society) and [AMSAT Deutschland](https://amsat-dl.org/). Detailed information can be found on their [project page](https://amsat-dl.org/eshail-2-amsat-phase-4-a).

{{< figure src="/projects/Eshail-2x.jpg" width="75%" >}}

The transponder has a very broad coverage and will allow us to have audio and video conversations with all of Europe, Africa, and much of western Asia. The UK is well within the coverage area which should mean that we have a very reliable link. 

{{< figure src="/projects/P4-A-Coverage.png" width="75%" >}}

## Groundstation

We are interested in establishing a permanent groundstation that will allow us to operate both the narrowband and wideband modes. The uplink band is at 2.4 GHz and we will require ~200 Watts of power and a 1.8 meter diameter satellite dish to operate all modes. The downlink is at 10 GHz and requires a 75 cm dish. The [ADALM-PLUTO SDR](/info/equipment) is supported by both [GNU Radio](www.gnuradio.org) and [leandvb](http://www.pabr.org/radio/leandvb/leandvb.en.html) so the majority of the work we have is to design and assemble the RF frontends and antennas. If you are interested in either of these parts or the project in general come to a meeting or email us!

## Narrowband

{{< figure src="/projects/NB-Bandplan-V1.0.png">}}

## Wideband

{{< figure src="/projects/WB-DATV-bandplan.png">}}


