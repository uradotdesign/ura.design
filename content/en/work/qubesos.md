+++
layout = "work/single"
featured = true
theme = "light"
background = "#FFFFFF"
accent = "#005F9C"
text = "#212529"
title = "Qubes OS Usability Audit"
summary = "Qubes OS is renowned for its security, but its complex interface can be a major hurdle for new users. This project aimed to untangle that complexity while preserving the advanced protections that make it one of the most secure systems available."
date = "2025-01-08 12:00:00 +0200"
images = ["img/work/qubesos.webp", "qubesos"]
tags = []
categories = ["Accessibility", "UX Research", "Illustrations"]
[links]
    "Qubes OS Website" = "https://www.qubes-os.org/"
+++

{{< figure class="with-js on-light" src="/img/work/qubesos-logo.svg" alt="QubesOS logo" >}}
{{< figure class="with-js on-dark" src="/img/work/qubesos-logo-dark.svg" alt="QubesOS logo" >}}
{{< figure class="no-js" src="/img/work/qubesos-logo.webp" alt="QubesOS logo" >}}

## Qubes OS Mission

Qubes OS is a security-focused operating system that uses virtualization to isolate tasks and applications in separate environments called ‘qubes’. This means that if one qube is compromised, the rest of the system stays secure. Think of it like a digital fortress, where each room is locked and independently secured.

{{< figure src="/img/work/qubesos-cover.webp" alt="QubesOS cover image" >}}

## Our Approach and Objectives

Qubes OS is known for its strong security but faces significant usability challenges. Technical users often bypass the user interface in favor of the command line, limiting its appeal to non-technical users.

We identified journalists as a key user group who need strong security but lack the technical expertise to navigate Qubes OS. For instance, a journalist investigating government corruption may need a secure system to protect sensitive communications but could struggle with the platform’s complexity.

To address these challenges, we focused on improving critical aspects of the user experience: accessibility, visual consistency, clear communication, and intuitive interface design. Our goal was to lower the learning curve and make Qubes OS accessible to a broader range of users without compromising its core strengths.

## Creating an accessible color system

We adopted the [Tailwind CSS](https://tailwindcss.com/docs/customizing-colors) color system, an open-source framework with a diverse palette. This system improves readability, accessibility, and creates a more cohesive, visually appealing UI with improved WCAG 2.2 compliance.

Each qube is identified by a color to help users differentiate them. The previous color scheme lacked sufficient contrast, making text hard to read. We updated the qube window colors using the Tailwind palette to improve readability and color contrast across Windows.

{{< ba-slider
    before_light="/img/work/qubesos-window-before.webp"
    before_dark="/img/work/qubesos-window-before.webp"
    before_nojs="/img/work/qubesos-window-before.webp"
    after_light="/img/work/qubesos-window-after.webp"
    after_dark="/img/work/qubesos-window-after.webp"
    after_nojs="/img/work/qubesos-window-after.webp"
>}}

## Building a consistent icon set

We reviewed the existing Qubes icons, analyzing their usage to understand how they functioned across the platform. This informed our proposal for a new icon set, sourced mostly from lucide.dev under an MIT license, featuring outlined designs with customizable stroke widths.

{{< ba-slider
    before_light="/img/work/qubesos-icons-before.webp"
    before_dark="/img/work/qubesos-icons-before-dark.webp"
    before_nojs="/img/work/qubesos-icons-before-dark.webp"
    after_light="/img/work/qubesos-icons-after.webp"
    after_dark="/img/work/qubesos-icons-after-dark.webp"
    after_nojs="/img/work/qubesos-icons-after-dark.webp"
>}}

While most icons were sourced from Lucide, we redesigned those for specific qube types, as the previous icons didn't align well with pixel grids. The redesign incorporated the updated qube colors and gave the icons a more modern look.

{{< ba-slider
    before_light="/img/work/qubesos-qubeicons-before.svg"
    before_dark="/img/work/qubesos-qubeicons-before.svg"
    before_nojs="/img/work/qubesos-qubeicons-before.webp"
    after_light="/img/work/qubesos-qubeicons-after.svg"
    after_dark="/img/work/qubesos-qubeicons-after.svg"
    after_nojs="/img/work/qubesos-qubeicons-after.webp"
>}}

## Rewriting UX copy

To improve clarity and accessibility, we conducted a copy audit of the Global Configuration settings. We focused on making the text **necessary**, **clear**, **concise**, and **useful**, ensuring it provided essential, actionable information for users. Based on these criteria, we proposed updated text to replace the old content.

## Bringing it all together

For the final step, we took all these elements; the new color system, icon set, and updated text to redesign the global configurations page. 

We chose screens from the global configuration settings that showcased the different design patterns that exist across all the screens. This way when the redesign is implemented they have all the different ux patterns documented so they can be applied across the different screens.

{{< ba-slider
    before_light="/img/work/qubesos-general-settings-before.svg"
    before_dark="/img/work/qubesos-general-settings-before.svg"
    before_nojs="/img/work/qubesos-general-settings-before.webp"
    after_light="/img/work/qubesos-general-settings-after.svg"
    after_dark="/img/work/qubesos-general-settings-after.svg"
    after_nojs="/img/work/qubesos-general-settings-after.webp"
>}}

## How we helped

**Improved Accessibility**: The introduction of the Tailwind color system and the update of qube window colors have improved the clarity of text and ensured compliance with WCAG 2.2 standards, making the interface more usable.

**Visual Consistency**: A refreshed logo has resolved inconsistencies in branding across platforms, reinforcing Qubes OS's visual identity.

**Enhanced Iconography**: The redesigned icon set creates a unified, modern look while improving functionality, making navigation and interaction more intuitive for users.

**Clearer UX Copy**: The audit of the Global Configuration settings copy has led to clearer, more concise text, improving user comprehension and facilitating smoother interactions.

**Unified UI/UX Design**: The redesign of the global configuration pages, incorporating new colors, icons, and updated text, has resulted in a cohesive and visually appealing user experience.