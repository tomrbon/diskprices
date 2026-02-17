/**
 * DiskPrices.info - Main JavaScript
 * Handles filtering, sorting, search, and deal highlighting
 */

(function() {
  'use strict';

  // DOM Elements
  const categoryFilter = document.getElementById('category-filter');
  const retailerFilter = document.getElementById('retailer-filter');
  const conditionFilter = document.getElementById('condition-filter');
  const sortFilter = document.getElementById('sort-filter');
  const searchInput = document.getElementById('search-input');
  const resultsCount = document.getElementById('results-count');
  const noResults = document.getElementById('no-results');
  const productsGrid = document.getElementById('products-grid');

  // Get all product cards
  const productCards = Array.from(productsGrid.querySelectorAll('.product-card'));

  // Track best deals per category
  let bestDeals = new Map();

  /**
   * Calculate best deals (lowest price per TB) for each category
   */
  function calculateBestDeals() {
    bestDeals.clear();
    
    // Get all visible cards grouped by category
    const cardsByCategory = new Map();
    
    productCards.forEach(card => {
      const category = card.dataset.category;
      if (!cardsByCategory.has(category)) {
        cardsByCategory.set(category, []);
      }
      cardsByCategory.get(category).push(card);
    });
    
    // Find best deal in each category
    cardsByCategory.forEach((cards, category) => {
      const sortedByPrice = [...cards].sort((a, b) => {
        return parseFloat(a.dataset.pricePerTb) - parseFloat(b.dataset.pricePerTb);
      });
      
      if (sortedByPrice.length > 0) {
        bestDeals.set(category, sortedByPrice[0]);
      }
    });
  }

  /**
   * Update best deal badges
   */
  function updateBestDealBadges() {
    // Remove existing badges
    productCards.forEach(card => {
      card.classList.remove('is-best-deal');
      const existingBadge = card.querySelector('.best-deal-badge');
      if (existingBadge) existingBadge.remove();
    });
    
    // Add badges to current best deals
    bestDeals.forEach((card, category) => {
      if (!card.classList.contains('hidden')) {
        card.classList.add('is-best-deal');
        
        // Add badge if not exists
        if (!card.querySelector('.best-deal-badge')) {
          const badge = document.createElement('div');
          badge.className = 'best-deal-badge';
          badge.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            Best Deal
          `;
          card.querySelector('.card-header').appendChild(badge);
        }
      }
    });
  }

  /**
   * Parse numeric value from data attribute
   */
  function parseNumeric(value) {
    return parseFloat(value) || 0;
  }

  /**
   * Filter products based on current filter values
   */
  function filterProducts() {
    const category = categoryFilter.value.toLowerCase();
    const retailer = retailerFilter.value.toLowerCase();
    const condition = conditionFilter.value.toLowerCase();
    const searchTerm = searchInput.value.toLowerCase().trim();

    let visibleCount = 0;

    productCards.forEach(card => {
      const cardCategory = card.dataset.category.toLowerCase();
      const cardRetailer = card.dataset.retailer.toLowerCase();
      const cardCondition = card.dataset.condition.toLowerCase();
      const cardName = card.dataset.name;

      // Check filters
      const categoryMatch = !category || cardCategory === category;
      const retailerMatch = !retailer || cardRetailer === retailer;
      const conditionMatch = !condition || cardCondition === condition;
      const searchMatch = !searchTerm || cardName.includes(searchTerm);

      // Show/hide card
      const shouldShow = categoryMatch && retailerMatch && conditionMatch && searchMatch;
      
      if (shouldShow) {
        card.classList.remove('hidden');
        card.style.display = '';
        visibleCount++;
      } else {
        card.classList.add('hidden');
        card.style.display = 'none';
      }
    });

    // Update results count with animation
    resultsCount.style.opacity = '0';
    setTimeout(() => {
      resultsCount.textContent = `${visibleCount} product${visibleCount !== 1 ? 's' : ''} found`;
      resultsCount.style.opacity = '1';
    }, 150);

    // Show/hide no results message
    noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    productsGrid.style.display = visibleCount === 0 ? 'none' : 'grid';

    // Recalculate best deals based on visible cards
    calculateBestDeals();
    
    // Sort visible products
    sortProducts();
    
    // Update badges after sorting
    updateBestDealBadges();
  }

  /**
   * Sort products based on current sort value
   */
  function sortProducts() {
    const [sortKey, sortDir] = sortFilter.value.split('-');

    // Get visible cards
    const visibleCards = productCards.filter(card => !card.classList.contains('hidden'));

    // Sort cards
    visibleCards.sort((a, b) => {
      let valueA, valueB;

      switch (sortKey) {
        case 'pricePerTB':
          valueA = parseNumeric(a.dataset.pricePerTb);
          valueB = parseNumeric(b.dataset.pricePerTb);
          break;
        case 'price':
          valueA = parseNumeric(a.dataset.price);
          valueB = parseNumeric(b.dataset.price);
          break;
        case 'capacity':
          valueA = parseNumeric(a.dataset.capacityTb);
          valueB = parseNumeric(b.dataset.capacityTb);
          break;
        default:
          return 0;
      }

      const modifier = sortDir === 'asc' ? 1 : -1;
      return (valueA - valueB) * modifier;
    });

    // Re-append sorted cards with animation
    visibleCards.forEach((card, index) => {
      // Reset animation
      card.style.animation = 'none';
      card.offsetHeight; // Trigger reflow
      card.style.animation = '';
      
      // Append to grid
      productsGrid.appendChild(card);
    });
  }

  /**
   * Debounce function for search input
   */
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Event listeners
  categoryFilter.addEventListener('change', filterProducts);
  retailerFilter.addEventListener('change', filterProducts);
  conditionFilter.addEventListener('change', filterProducts);
  sortFilter.addEventListener('change', filterProducts);
  searchInput.addEventListener('input', debounce(filterProducts, 200));

  // Add smooth transitions to filter controls
  [categoryFilter, retailerFilter, conditionFilter, sortFilter].forEach(select => {
    select.addEventListener('focus', function() {
      this.parentElement.classList.add('focused');
    });
    select.addEventListener('blur', function() {
      this.parentElement.classList.remove('focused');
    });
  });

  // Track affiliate link clicks (for analytics)
  document.querySelectorAll('.buy-link').forEach(link => {
    link.addEventListener('click', function(e) {
      const affiliateTag = this.dataset.affiliate || 'none';
      const card = this.closest('.product-card');
      const productId = card ? card.querySelector('.product-name')?.textContent : 'unknown';
      const isBestDeal = card?.classList.contains('is-best-deal') || false;
      
      // Log click (can be extended to send to analytics)
      if (typeof console !== 'undefined') {
        console.log('Affiliate click:', {
          product: productId,
          affiliate: affiliateTag,
          retailer: this.hostname,
          isBestDeal: isBestDeal
        });
      }
      
      // Add click animation
      this.style.transform = 'scale(0.98)';
      setTimeout(() => {
        this.style.transform = '';
      }, 150);
    });
  });

  // URL parameter handling for filters
  function getFilterFromURL(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param) || '';
  }

  function setFilterToURL() {
    const urlParams = new URLSearchParams();
    
    if (categoryFilter.value) urlParams.set('category', categoryFilter.value);
    if (retailerFilter.value) urlParams.set('retailer', retailerFilter.value);
    if (conditionFilter.value) urlParams.set('condition', conditionFilter.value);
    if (sortFilter.value !== 'pricePerTB-asc') urlParams.set('sort', sortFilter.value);
    
    const newURL = urlParams.toString() 
      ? `${window.location.pathname}?${urlParams.toString()}`
      : window.location.pathname;
    
    window.history.replaceState({}, '', newURL);
  }

  // Apply URL filters on load
  function applyURLFilters() {
    const category = getFilterFromURL('category');
    const retailer = getFilterFromURL('retailer');
    const condition = getFilterFromURL('condition');
    const sort = getFilterFromURL('sort');

    if (category) categoryFilter.value = category;
    if (retailer) retailerFilter.value = retailer;
    if (condition) conditionFilter.value = condition;
    if (sort) sortFilter.value = sort;

    if (category || retailer || condition || sort) {
      filterProducts();
    } else {
      // Initialize best deals on first load
      calculateBestDeals();
      updateBestDealBadges();
    }
  }

  // Update URL when filters change
  [categoryFilter, retailerFilter, conditionFilter, sortFilter].forEach(filter => {
    filter.addEventListener('change', setFilterToURL);
  });

  // Add keyboard navigation
  document.addEventListener('keydown', function(e) {
    // Focus search on '/' key
    if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    }
    
    // Clear search on Escape
    if (e.key === 'Escape' && document.activeElement === searchInput) {
      searchInput.value = '';
      filterProducts();
      searchInput.blur();
    }
  });

  // Initialize
  applyURLFilters();

  // Add intersection observer for card animations on scroll
  const observerOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
  };

  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe cards that might be added dynamically
  productCards.forEach(card => {
    cardObserver.observe(card);
  });

})();