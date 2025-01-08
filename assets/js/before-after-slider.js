document.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.getElementById("view-toggle");
  const slider = document.getElementById("slider");
  const container = document.querySelector(".ba-slider");
  const beforeText = document.getElementById("before-text");
  const afterText = document.getElementById("after-text");

  // Initialize the state
  const initializeState = () => {
    slider.value = 0; // Start with "After" at 0%
    container.style.setProperty("--position", "0%");
    beforeText.classList.add("text-muted");
    afterText.classList.remove("text-muted");
    toggleSwitch.setAttribute("aria-checked", "true");
  };

  // Function to animate the slider
  const animateSlider = (start, end, duration = 350) => {
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

  // Function to handle slider position when toggling
  const handleToggle = () => {
    const isChecked = toggleSwitch.checked;

    if (isChecked) {
      // Show "After" view
      animateSlider(parseFloat(slider.value), 0); // Animate to 0% (After)
      beforeText.classList.add("text-muted");
      afterText.classList.remove("text-muted");
      toggleSwitch.setAttribute("aria-checked", "true");
    } else {
      // Show "Before" view
      animateSlider(parseFloat(slider.value), 100); // Animate to 100% (Before)
      afterText.classList.add("text-muted");
      beforeText.classList.remove("text-muted");
      toggleSwitch.setAttribute("aria-checked", "false");
    }
  };

  // Initialize the state on page load
  initializeState();

  // Add event listener for the switch toggle
  toggleSwitch.addEventListener("change", handleToggle);

  // Add slider logic (if manual adjustment is still needed)
  slider.addEventListener("input", (e) => {
    container.style.setProperty("--position", `${e.target.value}%`);
  });
});
