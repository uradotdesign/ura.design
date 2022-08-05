+++
layout = "work/single"
theme = "dark"
background = "#002275"
secondary = "#7EE4E8"
title = "Thunderbird"
summary = "We created the new Thunderbird brand and helped the project with extensive usability research."
date = "2019-01-24 12:00:00 +0200"
image = "thunderbird.svg"
tags = []
categories = ["Branding", "UX Research", "Web Development"]
[links]
    "Website" = "https://www.thunderbird.net/en-US/"
    "Style Guide" = "https://style.thunderbird.net/visuals/product-identity-assets.html"
[sources]
    "Style Guide" = "https://style.thunderbird.net/visuals/product-identity-assets.html"
    "Usability Studies" = "https://github.com/uradotdesign/works/tree/main/Thunderbird"
    "Brand Assets" = "https://style.thunderbird.net/"
+++

Since early on, we had a special connection with Thunderbird. While many users moved to web-based mail clients, we always preferred using a single mail client to manage our mail and calendar. In fact, in the early days our founder Elio helped redesign the Thunderbird Conversations add-on and even now our email infrastructure is powered by ProtonMail and ProtonMail Bridge via Thunderbird.

---

## Refreshing the identity

Unfortunately, Mozilla moving away from Thunderbird created technical and design debt throughout the past years, resulting in a wider gap between Firefox and Thunderbird. As a comparison, Firefox latest logo makeovers happened in 2010, 2013 and 2017. Respectively, the last update to the Thunderbird logo and branding was 2010.

In Open Source we often times encounter resistance and hesitation to change. It’s something we acknowledge and can understand, considering there are contributors who have been involved for years and suddenly someone out of the blue suggests doing a number of changes. We respect that. However the Thunderbird project has been welcoming to suggestions and help, allowing us to enjoy the process thoroughly beyond simply handing off the deliverables.

{{< figure src="/img/work/thunderbird-icon.webp" alt="Redesigned Thunderbird logo" >}}

## Improving user flows

We have worked on improving the user experience for many features of Thunderbird, starting with the preferences view redesign and continuing with an overall assessment of the security features, the most critical of them being OpenPGP encryption. Throughout the way, we utilized various user research methods to make sure we bring the users' voice to inform our designs and shared our findings with the broader community. 

{{< figure src="/img/work/thunderbird-mockup.webp" alt="Privacy & Security tab view in Thunderbird Settings" >}}

## Rethinking encryption

The redesign journey started with a heuristic evaluation to uncover potential pain points while encrypting messages using Thunderbird. The evaluation targeted
Account Settings/End-To-End Encryption, covering the entire user journey:

* Key management
* Encryption settings 
* Email
* Security/encryption for email

{{< figure src="/img/work/thunderbird-encryption.webp" alt="Redesigned OpenPGP setup wizard in Thunderbird" >}}

## How we helped

On our heuristic evaluation, we discovered 20+ usability violations in different realms: the match between the system and the real world, visibility of system status, help users recognize, diagnose, recover from errors, and help & documentation. 

We then offered insights and recommendations for quick improvements. 
In addition, during this research phase, we discovered that encryption was challenging to understand for novice users. That led us to continue our research with this particular segment in mind, to find optimal solutions for simplifying the encryption process. To help with this, we designed an onboarding system that guides new users to enable and use encryption in their daily workflow.

{{< figure src="/img/work/thunderbird-help.webp" alt="Set Up Encryption wizard Thunderbird" >}}

## Encryption Onboarding

We conducted a detailed competitive analysis of the onboarding process with multiple other email clients that offer OpenPGP/PGP encryption.
We identified common themes and patterns missing from the proposed designs and gaps(missing features) that Thunderbird could fill in. After that, we developed journey maps, and user flows to uncover user behaviors and mindsets with the main focus on encryption features. The design patterns and language were adapted to the existing end-to-end encryption that is already implemented as core functionality on Thunderbird.

We talked directly to novice Thunderbird users and non-users to validate our design proposals. The main focus relies on non-users of different backgrounds(students, IT professionals, "Non-technical" users) and new enterprise users.

These were semi-structured interviews in combination with formal usability testing to find out how the onboarding fits the overall Thunderbird experience and uncover usability flaws of our previously suggested prototypes.

{{< figure src="/img/work/thunderbird-onboarding.webp" alt="Import an Existing key view in Thunderbird" >}}