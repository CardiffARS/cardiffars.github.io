---
title: "Cardiff Microwave Roundtable"
description: ""
draft: false
layout: single
slug: 2019/roundtable/program
---

<div class="tabs is-centered">
    <ul>
        <li><a href="/events/2019/roundtable">About</a></li>
        <li class="is-active"><a>Program</a></li>
        <li><a href="/events/2019/roundtable/dinner">Dinner</a></li>
        <li><a href="/events/2019/roundtable/venue">Venue</a></li>
        <li><a href="/events/2019/roundtable/attendees">Attendees</a></li>
        <li><a href="/events/2019/roundtable/register">Register</a></li>
    </ul>
</div>

## March 16, 2019

Time    | Event    | Description
--------|----------|---
9:30    | Doors open
10:30   | Welcome  
10:40   | Talk 1   | [Amateur Television on the Microwave Bands](/events/2019/roundtable/program#amateur-television-on-the-microwave-bands)
11:15   | Talk 2   | [RF Power Amplifier Design Considerations](/events/2019/roundtable/program#rf-power-amplifier-design-considerations-for-amateur-radio)
11:50   | Break    | Measurements, project demos, etc
12:30   | Lunch    | Buffet at the University
13:30   | Talk 3   | [Amateur Optical Communications](/events/2019/roundtable/program#amateur-optical-communications)
14:05   | Talk 4   | [Advanced High Efficiency PAs](/events/2019/roundtable/program#advanced-high-efficiency-power-amplifier-architectures-for-modern-signals) 
14:40   | Break    | 
15:20   | Talk 5   | [Microwave Moonbounce Communication](/events/2019/roundtable/program#microwave-moonbounce-communication)
15:55   | Talk 6   | [Digital Pre-Distortion](/events/2019/roundtable/program#digital-pre-distortion-introduction-and-use)
16:30   | Closing remarks | ~5 minutes
17:00   | Venue Closes | Moving to a pub until dinner
18:30 - 21:00 | [Dinner](/events/2019/roundtable/dinner)

## Breaks

The ENGIN Forum will be open all day and have refreshments during breaks. There are five booths currently expected, if you want to bring items to show or to sell please let us know (officers@cardiffars.org.uk).

* Kevin G3AAF - http://g8fek.com
* David G4ASR - Surplus microwave equipment from individual components, connectors, modules to 100w 6cm sspa's
* Peter G3PHO - Misc microwave components, PC boards, and waveguide items
* British Amateur TV Club - https://batc.org.uk
* UK Radio Amateur Astronomy - https://www.ukraa.com & http://www.britastro.org/radio/

There will be a variety of microwave test equipment setup to make measurements of attendees items. If you have any equipment you can bring, please let us know.

Instrument    | Range
--------------|------
Two port VNA |  2 MHz to 6 GHz (PAs only to 2.4 GHz and 50 Watts due to available attenuators)
Frequency Counter |  10 Hz to 26.5 GHz
Power Meter  | 10 MHz to 26.5 GHz
Noise Figure | 10 MHz to 1.6 GHz (noise source to 18 GHz)
Signal Generator | 100 kHz to 40 GHz (Two tone capable)
Rubidium | 10 MHz reference (all devices will be locked to it)
Digital Multi Meters | 8.5 digits DC & AC current and voltage, resistance - 5.5 digit capacitance

## Talks

### Microwave Moonbounce Communication
Peter Blair - G3LTF

The talk will briefly cover the history of this fascinating mode of radio communication from WW2 to the present.  It will describe the physical factors that influence the signal path from earth to moon and back and how these are countered. Some typical amateur installations will be illustrated together with an outline of measurements and tools to assess their performance.

### Digital Pre-Distortion: Introduction and use
[Derek Kozel](https://www.twitter.com/derekkozel) - MW0LNA  

Digital Pre-Distortion is a powerful technique to reduce the distortion and loss of SNR caused by the non-linear effects of amplifiers. This talk introduces the technique and shows how it can be used with Software Defined Radios and [GNU Radio](www.gnuradio.org).

<a href="/events/2019_Derek Kozel_Digital Pre-Distortion.pdf" class="button is-link">Slides</a> 
<a href="/events/2019_Derek Kozel_DPD Files.zip" class="button is-link">GNU Radio Files</a>

### Amateur Television on the Microwave Bands
[Noel Matthews](https://www.twitter.com/g8gtz) - G8GTZ  

{{< figure src="/events/batc-logo.png" width="15%" caption="British Amateur Television Club" link="https://Batc.org.uk/" >}}

Noel will give an overview of his experiences of operating DATV on the Microwave bands from 3.4GHz to 76GHz.  The talk will give an overview of the system architectures used and lessons learnt, particularly the importance of low phase LO chains when operating DATV.

<a href="/events/2019_Noel Matthews_Microwave ATV.pdf" class="button is-link">Slides</a> 

### RF Power Amplifier Design Considerations for Amateur Radio 
Zack Costello

Modern RF power amplifier design typically involves extensive use of computer-aided design (CAD) tools, minimising the time and cost associated with prototyping. Use of RF test and measurement equipment is also an essential element of the design flow to verify performance and identify issues that may arise.

Commercial RF CAD packages and, in particular, measurement equipment are often unavailable to amateur radio operators due to both cost limitations and the necessary technical training required to effectively use these tools.

This talk will discuss PA design from an amateur radio perspective, looking at the fundamentals of PA design, the capabilities of current open-source RF CAD software, and highlighting some points of interest within the design flow.

<a href="/events/2019_Zack Costello_RF Power Amplifier Design Considerations.pdf" class="button is-link">Slides</a> 
<a href="/events/2019_Zack Costello_RFPA Files.zip" class="button is-link">QUCS and Octave Files</a>

### Amateur Optical Communications
Barry Chambers - G8AGN

This talk outlines what equipment is required for transmitting and receiving lightwave signals, how to build effective antennas, coping with QRM, operating techniques and modes and current DX records. 

### Advanced high efficiency power amplifier architectures for modern signals
David Collins - 2E0LXD

The power amplifier is often the largest consumer of energy in a radio system. So obtaining a high efficiency from the power amplifier is often a critical design criteria, especially when the system being designed is for portable applications where; low power consumption, compact design and thermal management are key.

Designing a power amplifier for high efficiency can be challenging, especially at microwave and mm wave frequencies and where other important design criteria such as linearity and maintaining high output power have to be considered. Often this leads to trade-offs and compromises having to be made. 

Doherty back in the 1930’s was the first to come up with a PA architecture that maintained high efficiency with non-constant envelope signals, in his case, MW AM broadcast transmitters. Since then modern digital modulation schemes such as OFDM and APSK (used in DVB) that have high peak to average power ratios and require high linearity have driven the research and design of high efficiency PA architectures.

This talk introduce the techniques and concepts for high efficiency power amplifier design. Some advanced PA architectures will be discussed and key design methodologies presented.
