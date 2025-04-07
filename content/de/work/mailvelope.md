+++
layout = "work/single"
theme = "light"
background = "#CAEBDD"
accent = "#E30048"
text = "#354236"
title = "Mailvelope UX & UI Improvements"
summary = "We made it easier to set up Mailvelope in Nextcloud Mail and send encrypted emails."
date = "2025-04-01 12:00:00 +0200"
images = ["img/work/mailvelope.webp", "mailvelope"]
tags = []
categories = ["Accessibility", "UX Research", "Interaction Design"]
[links]
    "Usability study" = "#"
    "UI Recommendations" = "https://www.figma.com/design/pQ2Gyc9vlAs41aG8xRWJkr/Mailvelope-x-Nextcloud%3A-UI-Redesign?node-id=0-1&t=UFkc9n8RKB8iFK3Q-1"
+++

{{< figure class="with-js on-light" src="/img/work/mailvelope-cover.svg" alt="Mailvelope" >}}
{{< figure class="with-js on-dark" src="/img/work/mailvelope-cover-dark.svg" alt="Mailvelope" >}}
{{< figure class="no-js" src="/img/work/mailvelope-cover.webp" alt="Mailvelope" >}}

## About Mailvelope

Mailvelope is an open-source browser extension that enables users to secure their email messages with OpenPGP encryption. Known for its adaptability, it integrates seamlessly with webmail services like Gmail and Outlook, providing email encryption in a highly accessible and easy-to-use format.

Mailvelope has partnered with Nextcloud to extend its encryption capabilities, enabling users to send and receive encrypted messages directly within Nextcloud Mail. As part of this new integration, we were tasked with evaluating and improving the user experience to ensure it is intuitive, accessible, and aligned with the standards of Mailvelope’s other integrations.

{{< figure src="/img/work/mailvelope-desktop.webp" alt="Mailvelope Desktop" >}}

## Our Approach and Objectives

We wanted to make sure Mailvelope’s integration with Nextcloud matched the simplicity and usability of their other integrations. We focused on:

**Simplifying the setup process** to reduce friction and improve onboarding.

**Creating a seamless experience** that matched Mailvelope’s other integrations.

**Addressing usability pain points** by improving clarity of instructions, feedback, and user trust.

{{< figure class="with-js" src="/img/work/mailvelope-key-server.svg" alt="Mailvelope Key Server" >}}
{{< figure class="no-js" src="/img/work/mailvelope-key-server.webp" alt="Mailvelope Key Server" >}}

## Key Insights

Through user testing, we uncovered several key challenges that impacted the user experience, particularly for those who were unfamiliar with PGP encryption. These insights led us to focus on addressing the following critical issues:

---

**Complex Setup Process**: Users faced challenges with unclear setup instructions, confusing domain authorization steps, and overly technical jargon.

---

**Lack of Feedback**: The Nextcloud UI offered minimal visual or contextual feedback, leaving users uncertain about their what to do next or whether the integration had been successful.

---

**Confusing Encryption Workflows**: Core encryption and decryption features lacked clarity, leading to frustration and potential security risks.

---

## Recommendations

---

**Increase awareness of Mailvelope**: Add strategic touchpoints and notifications to raise awareness of Mailvelope’s PGP encryption capabilities in Nextcloud Mail.

---

**Simplify the integration process**: Provide clearer guidance and easy access to setup instructions, especially for tasks like domain authorization.

---

**Improve Encryption Visibility**: Enhance the visibility and messaging around encryption workflows to ensure users clearly understand when emails are being encrypted or decrypted.

---

## Design Solutions

The user testing revealed challenges across three key stages of the user journey: discovering Mailvelope, setting it up, and using it effectively within Nextcloud. Below, we outline the solutions we implemented to address these issues.

### Improving Discoverability

Users were unaware that Mailvelope's encryption features could now be used with Nextcloud Mail, to address this we added strategic touchpoints to the interface to raise awareness.

{{< figure src="/img/work/mailvelope-nextcloud.webp" alt="Mailvelope Nextcloud" >}}

### Simplifying Integration

After discovering Mailvelope’s integration with Nextcloud Mail, users had no clear way to complete the setup without leaving Nextcloud. To fix this, we added a floating notification card and a CTA button, guiding users to the integration page with step-by-step instructions.

{{< figure src="/img/work/mailvelope-integration.webp" alt="Mailvelope Integration" >}}

### Streamlining Access to Encrypted Email

The main challenge with the existing encrypted mail UI was user uncertainty about whether their emails were encrypted or not. Some users mistakenly believed that Mailvelope automatically encrypted all emails, which posed a serious security risk. To mitigate this, we introduced a dedicated ‘encrypted message’ button, deciding to send an encrypted email deliberately and clearly. This ensures users are aware of their actions, creating greater transparency and confidence in using the feature.

{{< figure src="/img/work/mailvelope-nextcloud-mail.webp" alt="Mailvelope Nextcloud Mail" >}}

## How we helped

**Better Visibility**: Visual cues were added to the Nextcloud interface to make Mailvelope more discoverable, ensuring users are aware of that they can now send encrypted emails.

**Simplified Setup**: To address users' difficulties in finding setup instructions, we added a floating notification card and a permanent CTA button that directs them to the download/integration page, eliminating the need for independent navigation.

**Clearer Encryption Workflows**: We refined the visibility and messaging of encryption workflows, helping users clearly understand when emails are being encrypted or decrypted, minimizing confusion.