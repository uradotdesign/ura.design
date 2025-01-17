document.addEventListener("DOMContentLoaded", function () {
  // Get all instances of the toggle switch, sliders, and containers
  const toggleSwitches = document.querySelectorAll(".toggle-input");
  const sliders = document.querySelectorAll(".slider");
  const containers = document.querySelectorAll(".ba-slider");
  const beforeTexts = document.querySelectorAll(".before-text");
  const afterTexts = document.querySelectorAll(".after-text");

  // Function to animate the slider
  const animateSlider = (slider, container, start, end, duration = 350) => {
    const stepTime = 10; // Step interval in ms
    const steps = duration / stepTime;
    const stepValue = (end - start) / steps;
    let currentValue = start;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      currentValue += stepValue;
      slider.value = currentValue;
      container.style.setProperty("--position", `${currentValue}%`);

      if (currentStep >= steps) {
        clearInterval(interval);
        slider.value = end; // Ensure it ends exactly at the target
        container.style.setProperty("--position", `${end}%`);
      }
    }, stepTime);
  };

  // Function to update the toggle switch based on slider position
  const updateToggleFromSlider = (
    container,
    slider,
    toggleSwitch,
    beforeText,
    afterText
  ) => {
    const position =
      parseFloat(container.style.getPropertyValue("--position")) || 0;

    if (position === 0 && !toggleSwitch.checked) {
      toggleSwitch.checked = true;
      afterText.classList.remove("text-muted");
      beforeText.classList.add("text-muted");
      toggleSwitch.setAttribute("aria-checked", "true");
    } else if (position === 100 && toggleSwitch.checked) {
      toggleSwitch.checked = false;
      afterText.classList.add("text-muted");
      beforeText.classList.remove("text-muted");
      toggleSwitch.setAttribute("aria-checked", "false");
    }
  };

  // Function to handle toggle switch logic
  const handleToggle = (
    toggleSwitch,
    slider,
    container,
    beforeText,
    afterText
  ) => {
    const isChecked = toggleSwitch.checked;

    if (isChecked) {
      // Show "After" view
      animateSlider(slider, container, parseFloat(slider.value), 0); // Animate to 0% (After)
      beforeText.classList.add("text-muted");
      afterText.classList.remove("text-muted");
      toggleSwitch.setAttribute("aria-checked", "true");
    } else {
      // Show "Before" view
      animateSlider(slider, container, parseFloat(slider.value), 100); // Animate to 100% (Before)
      afterText.classList.add("text-muted");
      beforeText.classList.remove("text-muted");
      toggleSwitch.setAttribute("aria-checked", "false");
    }
  };

  // Initialize the state for each slider instance
  toggleSwitches.forEach((toggleSwitch, index) => {
    const slider = sliders[index];
    const container = containers[index];
    const beforeText = beforeTexts[index];
    const afterText = afterTexts[index];

    if (slider && container && beforeText && afterText) {
      // Initialize slider position
      container.style.setProperty("--position", "0%");
      slider.value = 0;
      beforeText.classList.add("text-muted");
      afterText.classList.remove("text-muted");
      toggleSwitch.setAttribute("aria-checked", "true");

      // Add event listener for the switch toggle
      toggleSwitch.addEventListener("change", () => {
        handleToggle(toggleSwitch, slider, container, beforeText, afterText);
      });

      // Add event listener for manual slider input
      slider.addEventListener("input", () => {
        const value = parseFloat(slider.value);
        container.style.setProperty("--position", `${value}%`);
        updateToggleFromSlider(
          container,
          slider,
          toggleSwitch,
          beforeText,
          afterText
        );
      });
    } else {
      console.error(
        "One or more elements (slider, container, beforeText, afterText) are missing."
      );
    }
  });
});
