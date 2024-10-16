document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");
  const navLinks = document.querySelectorAll("nav a");
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");
  const mainContainer = document.getElementById("main-container");
  const settingsForm = document.getElementById("settings-form");
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const fontSizeSelect = document.getElementById("font-size");

  // פונקציה להחלפת הקונטיינרים
  function switchSection(sectionId) {
    const sections = mainContainer.querySelectorAll("section");
    sections.forEach((section) => {
      section.classList.remove("active");
    });
    const targetSection = document.getElementById(sectionId);
    targetSection.classList.add("active");
    updatePageTitle(sectionId);
  }

  // ניווט בין הקונטיינרים
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const sectionId = link.getAttribute("data-section");
      switchSection(sectionId);
      navMenu.classList.remove("show");
    });
  });

  // טיפול בטופס יצירת קשר
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("הטופס נשלח בהצלחה!");
    contactForm.reset();
  });

  // תפריט נייד
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  // הגדרות
  settingsForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("ההגדרות נשמרו בהצלחה!");
  });

  // מצב כהה
  darkModeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
  });

  // שינוי גודל גופן
  fontSizeSelect.addEventListener("change", () => {
    document.body.style.fontSize =
      fontSizeSelect.value === "small"
        ? "14px"
        : fontSizeSelect.value === "medium"
        ? "16px"
        : "18px";
  });

  // אנימציית הופעה לאלמנטים
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
  });

  // אנימציה לפורטפוליו
  const portfolioItems = document.querySelectorAll(".portfolio-item");
  portfolioItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.querySelector("img").style.transform = "scale(1.1)";
    });
    item.addEventListener("mouseleave", () => {
      item.querySelector("img").style.transform = "scale(1)";
    });
  });

  // סליידר המלצות
  const testimonials = document.querySelector(".testimonials-slider");
  let isDown = false;
  let startX;
  let scrollLeft;

  testimonials.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - testimonials.offsetLeft;
    scrollLeft = testimonials.scrollLeft;
  });

  testimonials.addEventListener("mouseleave", () => {
    isDown = false;
  });

  testimonials.addEventListener("mouseup", () => {
    isDown = false;
  });

  testimonials.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - testimonials.offsetLeft;
    const walk = (x - startX) * 2;
    testimonials.scrollLeft = scrollLeft - walk;
  });

  // אנימציה לכישורים בפרופיל
  const profileSkills = document.querySelectorAll(".profile-skills li");
  profileSkills.forEach((skill, index) => {
    skill.style.opacity = "0";
    skill.style.transform = "translateY(20px)";
    setTimeout(() => {
      skill.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      skill.style.opacity = "1";
      skill.style.transform = "translateY(0)";
    }, index * 100);
  });

  // עדכון כותרת הדף
  function updatePageTitle(sectionId) {
    const sectionTitles = {
      home: "דף הבית",
      about: "אודות",
      services: "שירותים",
      portfolio: "תיק עבודות",
      testimonials: "המלצות",
      contact: "צור קשר",
      settings: "הגדרות",
      dashboard: "דשבורד",
      profile: "פרופיל",
    };
    document.title = `אתר מקצועי מודרני - ${
      sectionTitles[sectionId] || "גרסה 0.7"
    }`;
  }

  // עדכן את פונקציית switchSection
  function switchSection(sectionId) {
    const sections = mainContainer.querySelectorAll("section");
    sections.forEach((section) => {
      section.classList.remove("active");
    });
    const targetSection = document.getElementById(sectionId);
    targetSection.classList.add("active");
    updatePageTitle(sectionId);
  }

  // הוסף את הקוד הבא בסוף הקובץ
  updatePageTitle("home");
});
