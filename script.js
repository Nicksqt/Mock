// JavaScript Functionality

// Modal functionality
const modal = document.getElementById("modal")
const modalBody = document.getElementById("modal-body")
const closeBtn = document.getElementsByClassName("close")[0]
const notification = document.getElementById("notification")
const notificationText = document.getElementById("notification-text")

// Product details data
const productDetails = {
  "Microsoft 365": {
    title: "Microsoft 365",
    description:
      "Get premium versions of Word, Excel, PowerPoint, and more with cloud storage and AI-powered features.",
    features: [
      "Premium Office apps",
      "OneDrive cloud storage",
      "Microsoft Teams",
      "AI-powered Copilot",
      "Advanced security features",
      "Cross-platform compatibility",
    ],
    price: "Starting at $6.99/month",
  },
  "Azure Cloud": {
    title: "Azure Cloud Services",
    description: "Build, deploy, and scale applications with our comprehensive cloud platform.",
    features: [
      "Virtual machines",
      "App services",
      "Database solutions",
      "AI and ML services",
      "DevOps tools",
      "Global data centers",
    ],
    price: "Pay-as-you-go pricing",
  },
  "Windows 11": {
    title: "Windows 11",
    description: "The most secure and productive Windows ever, designed for hybrid work.",
    features: [
      "Enhanced security",
      "Microsoft Teams integration",
      "New Start menu",
      "Snap layouts",
      "Voice typing",
      "Microsoft Store",
    ],
    price: "Free upgrade for eligible devices",
  },
  "Surface Devices": {
    title: "Surface Devices",
    description: "Premium laptops and tablets designed for professionals and creators.",
    features: [
      "Touchscreen displays",
      "All-day battery life",
      "Surface Pen support",
      "Premium build quality",
      "Windows 11 Pro",
      "Studio-quality cameras",
    ],
    price: "Starting at $999",
  },
  "Xbox Gaming": {
    title: "Xbox Gaming",
    description: "Gaming experiences across console, PC, and mobile with Xbox Game Pass.",
    features: [
      "Xbox Game Pass Ultimate",
      "Cloud gaming",
      "Cross-platform play",
      "4K gaming",
      "Smart Delivery",
      "Quick Resume",
    ],
    price: "Starting at $14.99/month",
  },
  "Microsoft Teams": {
    title: "Microsoft Teams",
    description: "Collaborate, meet, call, and chat in one place with integrated Microsoft 365 apps.",
    features: [
      "Video conferencing",
      "File sharing",
      "Real-time collaboration",
      "Third-party integrations",
      "Mobile apps",
      "Enterprise security",
    ],
    price: "Free with premium plans available",
  },
}

// News details data
const newsDetails = {
  "AI Revolution": {
    title: "Microsoft Build 2025: The Age of AI Agents",
    date: "May 15, 2025",
    content:
      "At Microsoft Build 2025, we unveiled revolutionary AI agents that can reason, remember, and act on your behalf. These breakthrough technologies are transforming how we work, create, and collaborate. The new AI capabilities include advanced reasoning models, persistent memory systems, and autonomous task execution that will reshape the future of productivity.",
    author: "Satya Nadella, CEO Microsoft",
  },
  "Cloud Innovation": {
    title: "Azure Cloud Services Expansion",
    date: "April 22, 2025",
    content:
      "Microsoft Azure continues to expand globally with new data centers in emerging markets and enhanced services for enterprise customers. Our latest innovations include improved AI services, enhanced security features, and better integration with Microsoft 365. These updates help businesses scale efficiently while maintaining the highest security standards.",
    author: "Azure Team",
  },
  "Productivity Update": {
    title: "Microsoft 365 Copilot Updates",
    date: "March 18, 2025",
    content:
      "The latest Microsoft 365 Copilot updates bring enhanced AI capabilities to Word, Excel, PowerPoint, and Teams. New features include intelligent document creation, advanced data analysis, and seamless collaboration tools that boost productivity for millions of users worldwide.",
    author: "Microsoft 365 Team",
  },
}

// Show modal function
function showModal(content) {
  modalBody.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <h2 style="color: var(--nvidia-green); margin-bottom: 20px;">Microsoft Updates</h2>
            <p style="font-size: 1.1rem; line-height: 1.6; color: #333;">${content}</p>
            <button onclick="closeModal()" style="background: var(--nvidia-green); color: white; border: none; padding: 10px 20px; border-radius: 5px; margin-top: 20px; cursor: pointer;">Got it!</button>
        </div>
    `
  modal.style.display = "block"
  document.body.style.overflow = "hidden"
}

// Show product details
function showProductDetails(productName) {
  const product = productDetails[productName]
  if (product) {
    const featuresHTML = product.features.map((feature) => `<li>${feature}</li>`).join("")
    modalBody.innerHTML = `
            <div style="padding: 20px;">
                <h2 style="color: var(--nvidia-green); margin-bottom: 15px;">${product.title}</h2>
                <p style="font-size: 1.1rem; line-height: 1.6; color: #333; margin-bottom: 20px;">${product.description}</p>
                <h3 style="color: var(--nvidia-black); margin-bottom: 10px;">Key Features:</h3>
                <ul class="feature-list">${featuresHTML}</ul>
                <div class="price-tag">${product.price}</div>
                <div style="margin-top: 20px;">
                    <button onclick="showNotification('Added ${product.title} to your wishlist!')" style="background: var(--nvidia-green); color: white; border: none; padding: 12px 24px; border-radius: 5px; margin-right: 10px; cursor: pointer; font-weight: 600;">Add to Wishlist</button>
                    <button onclick="showNotification('Redirecting to ${product.title} page...')" style="background: transparent; color: var(--nvidia-green); border: 2px solid var(--nvidia-green); padding: 12px 24px; border-radius: 5px; cursor: pointer; font-weight: 600;">Learn More</button>
                </div>
            </div>
        `
    modal.style.display = "block"
    document.body.style.overflow = "hidden"
  }
}

// Show news details
function showNewsDetails(newsKey) {
  const news = newsDetails[newsKey]
  if (news) {
    modalBody.innerHTML = `
            <div style="padding: 20px;">
                <h2 style="color: var(--nvidia-green); margin-bottom: 10px;">${news.title}</h2>
                <p style="color: #666; margin-bottom: 20px; font-style: italic;">${news.date} • By ${news.author}</p>
                <p style="font-size: 1.1rem; line-height: 1.8; color: #333;">${news.content}</p>
                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                    <button onclick="showNotification('Article shared successfully!')" style="background: var(--nvidia-green); color: white; border: none; padding: 10px 20px; border-radius: 5px; margin-right: 10px; cursor: pointer;">Share Article</button>
                    <button onclick="showNotification('Subscribed to Microsoft News!')" style="background: transparent; color: var(--nvidia-green); border: 2px solid var(--nvidia-green); padding: 10px 20px; border-radius: 5px; cursor: pointer;">Subscribe to News</button>
                </div>
            </div>
        `
    modal.style.display = "block"
    document.body.style.overflow = "hidden"
  }
}

// Show account modal
function showAccountModal() {
  modalBody.innerHTML = `
        <div style="padding: 20px;">
            <h2 style="color: var(--nvidia-green); margin-bottom: 20px;">Microsoft Account</h2>
            <div style="text-align: center; margin-bottom: 30px;">
                <div style="width: 80px; height: 80px; background: var(--nvidia-green); border-radius: 50%; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem;">👤</div>
                <h3 style="margin-bottom: 5px;">Welcome to Microsoft</h3>
                <p style="color: #666;">Sign in to access your personalized experience</p>
            </div>
            <div style="margin-bottom: 20px;">
                <input type="email" placeholder="Email address" style="width: 100%; padding: 12px; border: 2px solid #ddd; border-radius: 6px; margin-bottom: 15px; font-size: 16px;">
                <input type="password" placeholder="Password" style="width: 100%; padding: 12px; border: 2px solid #ddd; border-radius: 6px; margin-bottom: 20px; font-size: 16px;">
            </div>
            <button onclick="showNotification('Sign in successful! Welcome back.')" style="width: 100%; background: var(--nvidia-green); color: white; border: none; padding: 15px; border-radius: 6px; font-size: 16px; font-weight: 600; cursor: pointer; margin-bottom: 15px;">Sign In</button>
            <div style="text-align: center;">
                <a href="#" onclick="showNotification('Password reset link sent to your email!')" style="color: var(--nvidia-green); text-decoration: none; margin-right: 20px;">Forgot password?</a>
                <a href="#" onclick="showNotification('Redirecting to create account page...')" style="color: var(--nvidia-green); text-decoration: none;">Create account</a>
            </div>
        </div>
    `
  modal.style.display = "block"
  document.body.style.overflow = "hidden"
}

// Close modal
function closeModal() {
  modal.style.display = "none"
  document.body.style.overflow = "auto"
}

// Toggle search
function toggleSearch() {
  const searchContainer = document.getElementById("searchContainer")
  searchContainer.classList.toggle("active")
  if (searchContainer.classList.contains("active")) {
    searchContainer.querySelector(".search-input").focus()
  }
}

// Handle search
function handleSearch(event) {
  if (event.key === "Enter") {
    const query = event.target.value
    if (query.trim()) {
      showNotification(`Searching for "${query}"...`)
      event.target.value = ""
      toggleSearch()
    }
  }
}

// Animate service
function animateService(element) {
  element.style.transform = "scale(1.05)"
  setTimeout(() => {
    element.style.transform = "scale(1)"
  }, 200)

  const title = element.querySelector(".service-title").textContent
  showNotification(`Learn more about ${title}`)
}

// Show notification
function showNotification(message) {
  notificationText.textContent = message
  notification.classList.add("show")

  setTimeout(() => {
    notification.classList.remove("show")
  }, 3000)
}

// Close modal when clicking outside
window.onclick = (event) => {
  if (event.target === modal) {
    closeModal()
  }
}

// Close modal with close button
closeBtn.onclick = () => {
  closeModal()
}

// Close modal with Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.style.display === "block") {
    closeModal()
  }
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Add loading states to buttons
function addLoadingState(button) {
  const originalText = button.textContent
  button.innerHTML = '<span class="loading"></span> Loading...'
  button.disabled = true

  setTimeout(() => {
    button.textContent = originalText
    button.disabled = false
  }, 2000)
}

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  // Add click handlers to CTA buttons
  document.querySelectorAll(".cta-button").forEach((button) => {
    button.addEventListener("click", function (e) {
      if (this.textContent.includes("Try Free")) {
        e.preventDefault()
        showNotification("Starting your free trial...")
      }
    })
  })

  // Add hover effects to product cards
  document.querySelectorAll(".product-card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })

  // Welcome message
  setTimeout(() => {
    showNotification("Welcome to Microsoft! Explore our latest products and services.")
  }, 1000)
})

// Add scroll effects
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 100) {
    header.style.background = "rgba(0, 0, 0, 0.95)"
    header.style.backdropFilter = "blur(10px)"
  } else {
    header.style.background = "var(--nvidia-black)"
    header.style.backdropFilter = "none"
  }
})
