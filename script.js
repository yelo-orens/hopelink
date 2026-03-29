const data = {
  family: [
    { title: "Family Bonding Tips", description: "Strengthen connections with meaningful activities and quality time" },
    { title: "Parenting 101", description: "Evidence-based strategies for raising happy, healthy children" },
    { title: "Healthy Relationships", description: "Build trust and communication in all your important relationships" },
    { title: "Work-Life Balance", description: "Master the art of juggling career and family responsibilities" },
    { title: "Raising Happy Kids", description: "Create a nurturing environment for your children to thrive" }
  ],
  health: [
    { title: "Mental Wellness Guide", description: "Transform your mental health with practical mindfulness techniques" },
    { title: "Daily Fitness Routine", description: "Simple exercises that fit into your busy lifestyle" },
    { title: "Healthy Eating", description: "Sustainable nutrition habits for a longer, healthier life" },
    { title: "Stress Management", description: "Proven methods to reduce anxiety and live peacefully" },
    { title: "Sleep Better Tips", description: "Wake up refreshed with scientifically-backed sleep solutions" }
  ],
  technology: [
    { title: "AI in Daily Life", description: "Discover how artificial intelligence is changing everything" },
    { title: "Future of Robotics", description: "Explore the next generation of automated innovation" },
    { title: "Cybersecurity Basics", description: "Protect your digital identity in an increasingly connected world" },
    { title: "Web Development Trends", description: "Stay ahead with the latest web technologies and frameworks" },
    { title: "Smart Devices", description: "Connect your home for convenience and security" }
  ],
  education: [
    { title: "Study Smarter", description: "Learn techniques that boost retention and grade performance" },
    { title: "Online Learning Tips", description: "Excel in virtual classrooms with proven strategies" },
    { title: "STEM Education", description: "Inspire the next generation of scientists and innovators" },
    { title: "Scholarship Guide", description: "Find and secure funding for your education dreams" },
    { title: "Time Management", description: "Master productivity and achieve your academic goals" }
  ]
};

const imageKeywords = {
  "Family Bonding Tips": "family,together,bonding",
  "Parenting 101": "parenting,family,children",
  "Healthy Relationships": "relationship,couple,love",
  "Work-Life Balance": "work,balance,productivity",
  "Raising Happy Kids": "children,happy,kids",
  "Mental Wellness Guide": "meditation,wellness,mental health",
  "Daily Fitness Routine": "fitness,exercise,workout",
  "Healthy Eating": "food,health,nutrition",
  "Stress Management": "stress,relax,calm",
  "Sleep Better Tips": "sleep,rest,bed",
  "AI in Daily Life": "artificial intelligence,technology,ai",
  "Future of Robotics": "robot,technology,future",
  "Cybersecurity Basics": "security,cyber,protection",
  "Web Development Trends": "code,programming,web",
  "Smart Devices": "smart home,technology,connected",
  "Study Smarter": "study,books,learning",
  "Online Learning Tips": "online,education,learning",
  "STEM Education": "science,technology,education",
  "Scholarship Guide": "education,scholarship,college",
  "Time Management": "time,productivity,planning"
};

const essayTemplates = {
  family: [
    "Building strong family bonds requires time, patience, and genuine interest in each other's lives. In today's fast-paced world, it's easy to get caught up in our individual pursuits and forget the importance of quality time with loved ones. This essay explores practical strategies for strengthening family relationships, from regular family dinners to meaningful conversations that go beyond surface-level small talk.",
    "Modern parenting is a challenging journey that comes with unprecedented access to information and advice. Parents today are often overwhelmed with choices about education, discipline, and child development. This article breaks down evidence-based parenting techniques that have been proven to create emotionally healthy and resilient children, while maintaining a balanced approach that honors individual family values.",
    "Work-life balance is not a destination but a continuous journey of adjustment and reflection. In an era where technology blurs the lines between professional and personal time, finding equilibrium becomes crucial for mental health and family wellness. Discover practical strategies for setting boundaries, managing stress, and creating quality time with family despite demanding careers."
  ],
  health: [
    "Mental wellness is just as important as physical health, yet it's often overlooked in our society. This comprehensive guide explores the interconnection between mind and body, discussing meditation, mindfulness, and stress-management techniques that can transform your daily life. Learn how to recognize the signs of mental health challenges and build a sustainable wellness routine.",
    "A daily fitness routine doesn't require expensive gym memberships or hours of training. This essay presents science-backed exercises and activities that can be incorporated into your daily schedule, regardless of fitness level. From short workout routines to the benefits of consistency, discover how movement can enhance your overall quality of life.",
    "Healthy eating is about nourishing your body with whole foods and understanding nutritional science. Rather than following restrictive diets, this article focuses on sustainable eating habits that promote longevity and vitality. Learn how to read labels, make informed food choices, and develop a positive relationship with eating."
  ],
  technology: [
    "Artificial Intelligence is no longer confined to science fiction; it's now an integral part of our daily lives. From recommendation algorithms to voice assistants, AI shapes how we work, communicate, and make decisions. This essay explores the practical applications of AI in everyday scenarios and discusses both its benefits and ethical considerations.",
    "The future of robotics holds tremendous potential for solving complex human problems. As robots become more sophisticated and accessible, they're being deployed in healthcare, manufacturing, disaster response, and beyond. Explore how robotics technology is evolving and what implications this has for the future of work and society.",
    "Cybersecurity is no longer just an IT concern; it's a personal responsibility in our connected world. With data breaches and cyber attacks increasing, understanding basic cybersecurity principles is essential. This guide covers password management, secure browsing, recognizing phishing attempts, and protecting your digital identity."
  ],
  education: [
    "Effective studying is a skill that can be learned and improved. Many students waste time using inefficient study methods when techniques like spaced repetition and active recall are scientifically proven to be superior. Discover study strategies that work with your brain's natural learning processes to maximize retention and understanding.",
    "Online learning offers unprecedented flexibility and access to education from around the world. However, succeeding in online environments requires different skills and discipline compared to traditional classroom learning. This article provides tips for staying motivated, managing your time, and getting the most from online educational platforms.",
    "STEM education (Science, Technology, Engineering, Mathematics) is critical for developing tomorrow's innovators and problem-solvers. This essay discusses the importance of early exposure to STEM concepts, hands-on learning experiences, and how to foster curiosity and critical thinking in students of all ages."
  ]
};

const categoryDescriptions = {
  family: "Strengthen bonds, nurture relationships, and explore guides on parenting, communication, and family wellbeing.",
  health: "Transform your wellness with insights on fitness, nutrition, mental health, and holistic living.",
  technology: "Stay ahead of innovation with AI, robotics, cybersecurity, and web development trends.",
  education: "Unlock your learning potential with study strategies, online tips, and STEM education insights."
};

const content = document.getElementById("content");

function toggleMenu() {
  const menu = document.getElementById("nav-menu");
  const hamburger = document.querySelector(".hamburger");
  menu.classList.toggle("active");
  hamburger.classList.toggle("active");
}

function closeMenu() {
  const menu = document.getElementById("nav-menu");
  const hamburger = document.querySelector(".hamburger");
  menu.classList.remove("active");
  hamburger.classList.remove("active");
}

function getImageUrl(title) {
  const keywords = imageKeywords[title] || "magazine,article";
  return `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000000000000000) % 20}?w=400&h=250&fit=crop&q=80&txt=${encodeURIComponent(title)}`;
}

function generateRandomEssay(category) {
  const essays = essayTemplates[category] || essayTemplates.family;
  return essays[Math.floor(Math.random() * essays.length)];
}

function createCard(item, category) {
  const title = typeof item === 'string' ? item : item.title;
  const description = typeof item === 'string' ? '' : item.description;
  return `
    <div class="card" onclick="loadEssay('${category}', '${title}')">
      <img src="https://picsum.photos/400/250?random=${Math.random()}" alt="${title}" />
      <div class="card-content">
        <div class="card-title">${title}</div>
        <p class="card-description">${description}</p>
        <p class="card-category">${category}</p>
      </div>
    </div>
  `;
}

function loadHome() {
  let html = `
    <section class="hero">
      <p>Stories that inspire hope, growth, and meaningful change in your life</p>
    </section>

    <div class="section layout">
      <div>
  `;

  Object.keys(data).forEach(cat => {
    html += `<h2>${cat.charAt(0).toUpperCase() + cat.slice(1)}</h2><div class="grid">`;
    data[cat].slice(0,3).forEach(item => {
      html += createCard(item, cat);
    });
    html += `</div>`;
  });

  html += `
      </div>

      <aside class="sidebar">
        <h3>Trending</h3>
        <ul>
          <li>Top 10 Life Tips</li>
          <li>AI Changing the World</li>
          <li>Healthy Living 2026</li>
          <li>Student Success Guide</li>
        </ul>
      </aside>
    </div>
  `;

  content.innerHTML = html;
}

function loadCategory(category) {
  let html = `
    <section class="hero">
      <p>${categoryDescriptions[category] || 'Explore our curated collection of inspiring stories.'}</p>
    </section>

    <div class="section">
      <div class="grid">
  `;

  data[category].forEach(item => {
    html += createCard(item, category);
  });

  html += `
      </div>
    </div>
  `;

  content.innerHTML = html;
}

function loadEssay(category, title) {
  const essayText = generateRandomEssay(category);
  const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);
  const html = `
    <button class="back-btn" onclick="loadCategory('${category}')">← Back to ${capitalizedCategory}</button>
    <div class="essay-container">
      <h2>${title}</h2>
      <div class="essay-meta">
        <span>Category: ${capitalizedCategory}</span> | <span>Published: March 2026</span>
      </div>
      <div class="essay-content">
        <p>${essayText}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  `;

  content.innerHTML = html;
}

loadHome();
