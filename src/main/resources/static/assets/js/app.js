/**
 * Spice Garden Restaurant - Interactive JS Functionality
 */

// 1. Menu Items Database
const MENU_ITEMS = [
    // STARTERS
    {
        id: 's1',
        name: 'Chicken 65',
        category: 'starters',
        description: 'Spice-infused crispy deep-fried chicken cubes tossed with curry leaves, yogurt, and authentic red chillies.',
        price: 280,
        image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=600&auto=format&fit=crop',
        type: 'nonveg'
    },
    {
        id: 's2',
        name: 'Paneer Tikka',
        category: 'starters',
        description: 'Cottage cheese cubes marinated in yogurt, mustard oil, and ground spices, grilled to perfection in the clay oven.',
        price: 250,
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=600&auto=format&fit=crop',
        type: 'veg'
    },
    {
        id: 's3',
        name: 'Gobi Manchurian',
        category: 'starters',
        description: 'Crispy cauliflower florets tossed in a flavorful Indo-Chinese ginger, garlic, and green onion sauce.',
        price: 220,
        image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?q=80&w=600&auto=format&fit=crop',
        type: 'veg'
    },
    {
        id: 's4',
        name: 'Chicken Tikka',
        category: 'starters',
        description: 'Succulent boneless chicken chunks marinated in aromatic spices and grilled on charcoal skewers.',
        price: 290,
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=600&auto=format&fit=crop',
        type: 'nonveg'
    },

    // MAIN COURSE
    {
        id: 'm1',
        name: 'Chicken Biryani',
        category: 'main-course',
        description: 'Fragrant basmati rice layered with juicy spiced chicken, slow-cooked in traditional dum style with saffron and herbs.',
        price: 320,
        image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=600&auto=format&fit=crop',
        type: 'nonveg'
    },
    {
        id: 'm2',
        name: 'Mutton Biryani',
        category: 'main-course',
        description: 'Premium tender goat meat cooked dum-style with basmati rice, mint, rose water, and royal spices.',
        price: 390,
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=600&auto=format&fit=crop',
        type: 'nonveg'
    },
    {
        id: 'm3',
        name: 'Veg Biryani',
        category: 'main-course',
        description: 'Aromatic basmati rice layered with fresh garden vegetables, paneer chunks, herbs, and caramelized onions.',
        price: 260,
        image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?q=80&w=600&auto=format&fit=crop',
        type: 'veg'
    },
    {
        id: 'm4',
        name: 'Butter Chicken',
        category: 'main-course',
        description: 'Tandoori grilled chicken pieces simmered in a silky tomato, cashew cream, and butter-rich gravy.',
        price: 340,
        image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=600&auto=format&fit=crop',
        type: 'nonveg'
    },
    {
        id: 'm5',
        name: 'Paneer Butter Masala',
        category: 'main-course',
        description: 'Soft cottage cheese cubes cooked in a creamy, velvety tomato, butter, and cashew paste gravy.',
        price: 290,
        image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=600&auto=format&fit=crop',
        type: 'veg'
    },

    // SOUTH INDIAN
    {
        id: 'so1',
        name: 'Masala Dosa',
        category: 'south-indian',
        description: 'Thin, crispy fermented rice and lentil crepe stuffed with a spiced potato mash. Served with chutneys and sambar.',
        price: 120,
        image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=600&auto=format&fit=crop',
        type: 'veg'
    },
    {
        id: 'so2',
        name: 'Idli',
        category: 'south-indian',
        description: 'Steamed pillowy soft cakes made from fermented rice and lentil batter. Served fresh with coconut chutney and hot sambar.',
        price: 80,
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=600&auto=format&fit=crop',
        type: 'veg'
    },
    {
        id: 'so3',
        name: 'Vada',
        category: 'south-indian',
        description: 'Crispy deep-fried savory lentil doughnuts flavored with pepper, onion, ginger, and curry leaves.',
        price: 90,
        image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=600&auto=format&fit=crop',
        type: 'veg'
    },
    {
        id: 'so4',
        name: 'Sambar',
        category: 'south-indian',
        description: 'A tangy, vegetable-loaded lentil soup brewed with tamarind and a special home-ground sambar spice mix.',
        price: 70,
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=600&auto=format&fit=crop',
        type: 'veg'
    },
    {
        id: 'so5',
        name: 'Andhra Meals',
        category: 'south-indian',
        description: 'Traditional heavy platter featuring hot rice, clarified butter (ghee), signature Andhra powder (podi), sambar, rasam, curd, gongura chutney, and dual curries.',
        price: 220,
        image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?q=80&w=600&auto=format&fit=crop',
        type: 'veg'
    },

    // DESSERTS
    {
        id: 'd1',
        name: 'Gulab Jamun',
        category: 'desserts',
        description: 'Golden fried milk-solid dumplings steeped in warm, fragrant cardamom and saffron-infused sugar syrup.',
        price: 100,
        image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=600&auto=format&fit=crop',
        type: 'veg'
    },
    {
        id: 'd2',
        name: 'Ice Cream',
        category: 'desserts',
        description: 'Two rich scoops of premium artisanal ice cream, topped with chopped pistachios, almonds, and a wafer.',
        price: 90,
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=600&auto=format&fit=crop',
        type: 'veg'
    },
    {
        id: 'd3',
        name: 'Brownie',
        category: 'desserts',
        description: 'Warm, dense, gooey chocolate fudge brownie loaded with walnuts and served with a splash of hot chocolate syrup.',
        price: 150,
        image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600&auto=format&fit=crop',
        type: 'veg'
    }
];

// 2. Gallery Database
const GALLERY_ITEMS = [
    {
        src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
        title: 'Premium Dining Room',
        category: 'interior'
    },
    {
        src: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
        title: 'Spice Garden Tandoor Special',
        category: 'food'
    },
    {
        src: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop',
        title: 'Our Executive Chef at Work',
        category: 'chef'
    },
    {
        src: 'https://images.unsplash.com/photo-1560624052-449f5ddf0c31?q=80&w=800&auto=format&fit=crop',
        title: 'Cozy Lounge Corner',
        category: 'interior'
    },
    {
        src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop',
        title: 'Signature Mutton Platter',
        category: 'food'
    },
    {
        src: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=800&auto=format&fit=crop',
        title: 'Culinary Team Presentation',
        category: 'chef'
    },
    {
        src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop',
        title: 'Corporate Celebration Setup',
        category: 'events'
    },
    {
        src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop',
        title: 'Chef Special Dessert Presentation',
        category: 'food'
    }
];

// Shopping Cart State
let cart = [];

// Lightbox State
let currentLightboxIndex = 0;
let filteredGallery = [...GALLERY_ITEMS];

// Global constants
const TAX_RATE = 0.05; // 5% GST
const FLAT_DELIVERY_FEE = 50; // ₹50 delivery
const FREE_DELIVERY_THRESHOLD = 500; // Free delivery above ₹500

document.addEventListener('DOMContentLoaded', () => {
    // Initialize components
    renderMenuGrid(MENU_ITEMS);
    renderGallery(GALLERY_ITEMS);
    initFilters();
    initSearch();
    initCart();
    initValidations();
    initScrollAnimations();
    initLightbox();
    initScrollspy();
    initScrollToTop();
});

// ==========================================
// MENU RENDER & FILTERING & SEARCH
// ==========================================
function renderMenuGrid(items) {
    const menuGrid = document.getElementById('menu-grid');
    if (!menuGrid) return;

    if (items.length === 0) {
        menuGrid.innerHTML = `
            <div class="col-12 text-center my-5">
                <i class="fa-solid fa-utensils text-muted mb-3" style="font-size: 3rem;"></i>
                <h5 class="text-muted">No items found matching your criteria.</h5>
            </div>
        `;
        return;
    }

    menuGrid.innerHTML = items.map(item => `
        <div class="col-lg-4 col-md-6 col-sm-12 menu-item-col" data-aos="fade-up">
            <div class="menu-card">
                <div class="menu-img-wrapper">
                    <img src="${item.image}" alt="${item.name}" class="menu-img" loading="lazy">
                    <span class="menu-badge">${item.category.replace('-', ' ').toUpperCase()}</span>
                    <div class="veg-indicator ${item.type}" title="${item.type === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></div>
                </div>
                <div class="menu-content">
                    <h4 class="menu-title">${item.name}</h4>
                    <p class="menu-desc">${item.description}</p>
                    <div class="menu-footer">
                        <span class="menu-price">${item.price}</span>
                        <button class="btn-add-cart" onclick="addToCart('${item.id}')" aria-label="Add ${item.name} to Cart">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function initFilters() {
    const filterButtons = document.querySelectorAll('.category-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.getAttribute('data-filter');
            applyFilters(category, document.getElementById('menu-search').value);
        });
    });
}

function initSearch() {
    const searchInput = document.getElementById('menu-search');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const activeCategory = document.querySelector('.category-btn.active').getAttribute('data-filter');
        applyFilters(activeCategory, e.target.value);
    });
}

function applyFilters(category, searchQuery) {
    let filtered = [...MENU_ITEMS];

    if (category !== 'all') {
        filtered = filtered.filter(item => item.category === category);
    }

    if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        filtered = filtered.filter(item => 
            item.name.toLowerCase().includes(query) || 
            item.description.toLowerCase().includes(query)
        );
    }

    renderMenuGrid(filtered);
}

// ==========================================
// SHOPPING CART FUNCTIONALITY
// ==========================================
function initCart() {
    // Listen to checkout form submission in cart
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            processOrderCheckout();
        });
    }
}

window.addToCart = function(id) {
    const item = MENU_ITEMS.find(i => i.id === id);
    if (!item) return;

    const existing = cart.find(c => c.id === id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            quantity: 1
        });
    }

    // Refresh display
    updateCartUI();
    
    // Play subtle animation on cart icons
    animateCartIcon();

    // Show temporary feedback toast/popup
    showToast(`${item.name} added to cart!`);
}

function updateCartUI() {
    const cartCountElements = document.querySelectorAll('.cart-count');
    const cartItemsList = document.getElementById('cart-items-list');
    const subtotalEl = document.getElementById('cart-subtotal');
    const deliveryEl = document.getElementById('cart-delivery');
    const taxEl = document.getElementById('cart-tax');
    const totalEl = document.getElementById('cart-total');
    const checkoutFormSection = document.getElementById('checkout-section');
    const cartSummarySection = document.getElementById('cart-summary-section');

    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElements.forEach(el => el.textContent = totalQty);

    if (cart.length === 0) {
        cartItemsList.innerHTML = `
            <div class="text-center py-5">
                <i class="fa-solid fa-basket-shopping text-muted mb-3" style="font-size: 2.5rem;"></i>
                <p class="text-muted mb-0">Your cart is empty.</p>
                <button class="btn btn-sm btn-outline-warning mt-3" data-bs-dismiss="offcanvas">Order Dishes Now</button>
            </div>
        `;
        if (checkoutFormSection) checkoutFormSection.classList.add('d-none');
        if (cartSummarySection) cartSummarySection.classList.add('d-none');
        return;
    }

    if (checkoutFormSection) checkoutFormSection.classList.remove('d-none');
    if (cartSummarySection) cartSummarySection.classList.remove('d-none');

    // Render cart items
    cartItemsList.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">₹${item.price} each</div>
            </div>
            <div class="cart-quantity-control">
                <button class="cart-qty-btn" onclick="updateQty('${item.id}', -1)" aria-label="Decrease quantity"><i class="fa-solid fa-minus"></i></button>
                <span class="cart-qty-val">${item.quantity}</span>
                <button class="cart-qty-btn" onclick="updateQty('${item.id}', 1)" aria-label="Increase quantity"><i class="fa-solid fa-plus"></i></button>
            </div>
            <button class="btn-remove-item" onclick="removeCartItem('${item.id}')" aria-label="Remove item">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </div>
    `).join('');

    // Calculate financials
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const delivery = subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : FLAT_DELIVERY_FEE;
    const tax = Math.round(subtotal * TAX_RATE * 100) / 100;
    const total = subtotal + delivery + tax;

    subtotalEl.textContent = `₹${subtotal}`;
    deliveryEl.textContent = delivery === 0 ? 'FREE' : `₹${delivery}`;
    taxEl.textContent = `₹${tax}`;
    totalEl.textContent = `₹${total}`;
}

window.updateQty = function(id, delta) {
    const item = cart.find(c => c.id === id);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        removeCartItem(id);
    } else {
        updateCartUI();
    }
}

window.removeCartItem = function(id) {
    cart = cart.filter(c => c.id !== id);
    updateCartUI();
}

function animateCartIcon() {
    const cartBtns = document.querySelectorAll('.cart-icon-btn');
    cartBtns.forEach(btn => {
        btn.classList.add('scale-animation');
        setTimeout(() => {
            btn.classList.remove('scale-animation');
        }, 300);
    });
}

function showToast(message) {
    // Try to find toast container
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.style.cssText = 'position: fixed; bottom: 30px; left: 30px; z-index: 10000;';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.style.cssText = `
        background-color: var(--dark-surface);
        color: var(--text-light);
        border-left: 4px solid var(--gold);
        padding: 12px 24px;
        margin-top: 10px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 0.9rem;
        animation: slideInLeft 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        transition: all 0.3s ease;
    `;
    toast.innerHTML = `<i class="fa-solid fa-circle-check text-gold"></i> <span>${message}</span>`;
    container.appendChild(toast);

    // Fade out and remove
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-20px)';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 2500);
}

// Add CSS keyframes dynamically for toast
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes slideInLeft {
    from { transform: translateX(-100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}
.scale-animation {
    transform: scale(1.25);
}
`;
document.head.appendChild(styleSheet);


// ==========================================
// RESERVATION & CONTACT VALIDATIONS
// ==========================================
function initValidations() {
    // 1. Table Reservation Submit
    const bookForm = document.getElementById('reservation-form');
    if (bookForm) {
        // Set minimum date to today
        const dateInput = document.getElementById('res-date');
        if (dateInput) {
            const today = new Date().toISOString().split('T')[0];
            dateInput.setAttribute('min', today);
        }

        bookForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (validateReservationForm()) {
                triggerBookingConfirmation();
            }
        });
    }

    // 2. Contact Form Submit
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (validateContactForm()) {
                triggerContactNotification();
            }
        });
    }
}

function validateReservationForm() {
    const name = document.getElementById('res-name');
    const phone = document.getElementById('res-phone');
    const email = document.getElementById('res-email');
    const date = document.getElementById('res-date');
    const time = document.getElementById('res-time');
    const guests = document.getElementById('res-guests');

    let isValid = true;

    // Helper error display
    const setError = (element, message) => {
        isValid = false;
        element.classList.add('is-invalid');
        
        let feedback = element.nextElementSibling;
        if (!feedback || !feedback.classList.contains('invalid-feedback')) {
            feedback = document.createElement('div');
            feedback.className = 'invalid-feedback';
            element.parentNode.appendChild(feedback);
        }
        feedback.textContent = message;
    };

    const clearError = (element) => {
        element.classList.remove('is-invalid');
    };

    // Validations
    if (!name.value.trim()) {
        setError(name, 'Please enter your name');
    } else {
        clearError(name);
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phone.value.trim() || !phoneRegex.test(phone.value.trim())) {
        setError(phone, 'Please enter a valid 10-digit mobile number');
    } else {
        clearError(phone);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() && !emailRegex.test(email.value.trim())) {
        setError(email, 'Please enter a valid email address');
    } else {
        clearError(email);
    }

    if (!date.value) {
        setError(date, 'Please choose a date');
    } else {
        clearError(date);
    }

    if (!time.value) {
        setError(time, 'Please choose a seating time');
    } else {
        clearError(time);
    }

    const guestVal = parseInt(guests.value, 10);
    if (isNaN(guestVal) || guestVal < 1 || guestVal > 20) {
        setError(guests, 'Please select between 1 and 20 guests');
    } else {
        clearError(guests);
    }

    return isValid;
}

function triggerBookingConfirmation() {
    const name = document.getElementById('res-name').value;
    const phone = document.getElementById('res-phone').value;
    const date = document.getElementById('res-date').value;
    const time = document.getElementById('res-time').value;
    const guests = document.getElementById('res-guests').value;
    const request = document.getElementById('res-request').value || 'None';

    const bookingRef = 'SG-' + Math.floor(1000 + Math.random() * 9000);

    // Render receipt inside Modal
    const receiptBox = document.getElementById('booking-receipt');
    receiptBox.innerHTML = `
        <div class="receipt-row"><strong>Booking Reference:</strong> <span class="text-gold">${bookingRef}</span></div>
        <div class="receipt-row"><strong>Guest Name:</strong> <span>${name}</span></div>
        <div class="receipt-row"><strong>Phone:</strong> <span>${phone}</span></div>
        <div class="receipt-divider"></div>
        <div class="receipt-row"><strong>Date:</strong> <span>${date}</span></div>
        <div class="receipt-row"><strong>Time:</strong> <span>${time}</span></div>
        <div class="receipt-row"><strong>Guests:</strong> <span>${guests} Persons</span></div>
        <div class="receipt-row"><strong>Requests:</strong> <span class="text-muted">${request}</span></div>
    `;

    // Show bootstrap modal
    const bookingModal = new bootstrap.Modal(document.getElementById('bookingConfirmModal'));
    bookingModal.show();

    // Reset Form
    document.getElementById('reservation-form').reset();
}

function validateContactForm() {
    const name = document.getElementById('contact-name');
    const email = document.getElementById('contact-email');
    const subject = document.getElementById('contact-subject');
    const message = document.getElementById('contact-message');

    let isValid = true;

    const setError = (element, msg) => {
        isValid = false;
        element.classList.add('is-invalid');
        let feedback = element.nextElementSibling;
        if (!feedback || !feedback.classList.contains('invalid-feedback')) {
            feedback = document.createElement('div');
            feedback.className = 'invalid-feedback';
            element.parentNode.appendChild(feedback);
        }
        feedback.textContent = msg;
    };

    const clearError = (element) => {
        element.classList.remove('is-invalid');
    };

    if (!name.value.trim()) {
        setError(name, 'Please enter your name');
    } else {
        clearError(name);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
        setError(email, 'Please enter a valid email address');
    } else {
        clearError(email);
    }

    if (!subject.value.trim()) {
        setError(subject, 'Please enter a subject');
    } else {
        clearError(subject);
    }

    if (!message.value.trim()) {
        setError(message, 'Please write your message');
    } else {
        clearError(message);
    }

    return isValid;
}

function triggerContactNotification() {
    // Show confirmation modal or alert
    const name = document.getElementById('contact-name').value;
    
    // Clear form
    document.getElementById('contact-form').reset();

    // Show a success modal
    const contactConfirmModal = new bootstrap.Modal(document.getElementById('contactConfirmModal'));
    const messageBox = document.getElementById('contact-success-msg');
    messageBox.innerHTML = `Thank you <strong>${name}</strong>! Your inquiry has been sent successfully. The Spice Garden team will get back to you shortly via email.`;
    contactConfirmModal.show();
}

// ==========================================
// CHECKOUT ORDER PROCESSING
// ==========================================
function processOrderCheckout() {
    const name = document.getElementById('cust-name').value;
    const phone = document.getElementById('cust-phone').value;
    const address = document.getElementById('cust-address').value;

    const nameInput = document.getElementById('cust-name');
    const phoneInput = document.getElementById('cust-phone');
    const addressInput = document.getElementById('cust-address');

    let valid = true;

    const setError = (element, msg) => {
        valid = false;
        element.classList.add('is-invalid');
        let f = element.nextElementSibling;
        if (!f || !f.classList.contains('invalid-feedback')) {
            f = document.createElement('div');
            f.className = 'invalid-feedback';
            element.parentNode.appendChild(f);
        }
        f.textContent = msg;
    };

    const clearError = (element) => {
        element.classList.remove('is-invalid');
    };

    if (!name.trim()) setError(nameInput, 'Enter customer name');
    else clearError(nameInput);

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phone.trim() || !phoneRegex.test(phone.trim())) setError(phoneInput, 'Enter a valid 10-digit mobile');
    else clearError(phoneInput);

    if (!address.trim()) setError(addressInput, 'Enter delivery address');
    else clearError(addressInput);

    if (!valid) return;

    // Build Receipt
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const delivery = subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : FLAT_DELIVERY_FEE;
    const tax = Math.round(subtotal * TAX_RATE * 100) / 100;
    const total = subtotal + delivery + tax;
    const orderRef = 'SG-ORD-' + Math.floor(100000 + Math.random() * 900000);

    const itemsSummary = cart.map(item => `
        <div class="receipt-row">
            <span>${item.name} (x${item.quantity})</span>
            <span>₹${item.price * item.quantity}</span>
        </div>
    `).join('');

    const receiptBox = document.getElementById('order-receipt');
    receiptBox.innerHTML = `
        <div class="receipt-row"><strong>Order ID:</strong> <span class="text-gold">${orderRef}</span></div>
        <div class="receipt-row"><strong>Customer:</strong> <span>${name}</span></div>
        <div class="receipt-row"><strong>Phone:</strong> <span>${phone}</span></div>
        <div class="receipt-row"><strong>Deliver to:</strong> <span style="max-width: 200px; text-align: right; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${address}</span></div>
        <div class="receipt-divider"></div>
        ${itemsSummary}
        <div class="receipt-divider"></div>
        <div class="receipt-row"><span>Subtotal:</span> <span>₹${subtotal}</span></div>
        <div class="receipt-row"><span>GST (5%):</span> <span>₹${tax}</span></div>
        <div class="receipt-row"><span>Delivery:</span> <span>${delivery === 0 ? 'FREE' : '₹' + delivery}</span></div>
        <div class="receipt-divider"></div>
        <div class="receipt-row font-heading" style="font-size: 1.1rem; color: var(--gold);">
            <strong>Grand Total:</strong>
            <strong>₹${total}</strong>
        </div>
    `;

    // Hide active shopping cart drawer (Bootstrap offcanvas)
    const cartDrawerEl = document.getElementById('cartDrawer');
    const cartDrawer = bootstrap.Offcanvas.getInstance(cartDrawerEl);
    if (cartDrawer) {
        cartDrawer.hide();
    }

    // Show Confirmation Modal
    const orderModal = new bootstrap.Modal(document.getElementById('orderConfirmModal'));
    orderModal.show();

    // Reset cart and checkout form
    cart = [];
    document.getElementById('checkout-form').reset();
    updateCartUI();
}

// ==========================================
// IMAGE GALLERY & CUSTOM LIGHTBOX
// ==========================================
function renderGallery(items) {
    const galleryGrid = document.getElementById('gallery-grid');
    if (!galleryGrid) return;

    galleryGrid.innerHTML = items.map((item, index) => `
        <div class="col-lg-3 col-md-6 col-sm-12 gallery-item-col" data-category="${item.category}" data-aos="zoom-in">
            <div class="gallery-card" onclick="openLightbox(${index})">
                <img src="${item.src}" alt="${item.title}" loading="lazy">
                <div class="gallery-overlay">
                    <i class="fa-solid fa-magnifying-glass-plus gallery-overlay-icon"></i>
                    <h5 class="gallery-overlay-title">${item.title}</h5>
                    <span class="gallery-overlay-cat">${item.category}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function initFiltersGallery() {
    const filterButtons = document.querySelectorAll('.gallery-filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.getAttribute('data-filter-gallery');
            filterGalleryGrid(category);
        });
    });
}

function filterGalleryGrid(category) {
    const cols = document.querySelectorAll('.gallery-item-col');
    
    if (category === 'all') {
        filteredGallery = [...GALLERY_ITEMS];
        cols.forEach(col => col.style.display = 'block');
    } else {
        filteredGallery = GALLERY_ITEMS.filter(item => item.category === category);
        cols.forEach(col => {
            if (col.getAttribute('data-category') === category) {
                col.style.display = 'block';
            } else {
                col.style.display = 'none';
            }
        });
    }
}

function initLightbox() {
    initFiltersGallery();

    const closeBtn = document.querySelector('.lightbox-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }

    // Keyboard controls
    document.addEventListener('keydown', (e) => {
        const lightbox = document.getElementById('customLightbox');
        if (lightbox && lightbox.style.display === 'block') {
            if (e.key === 'ArrowRight') nextLightbox();
            if (e.key === 'ArrowLeft') prevLightbox();
            if (e.key === 'Escape') closeLightbox();
        }
    });
}

window.openLightbox = function(index) {
    const clickedItem = GALLERY_ITEMS[index];
    // Find index inside currently filtered sub-list
    const relativeIndex = filteredGallery.findIndex(item => item.src === clickedItem.src);
    
    currentLightboxIndex = relativeIndex !== -1 ? relativeIndex : 0;
    updateLightboxContent();

    const lightbox = document.getElementById('customLightbox');
    lightbox.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Lock background scroll
}

window.closeLightbox = function() {
    const lightbox = document.getElementById('customLightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = ''; // Unlock scroll
}

window.nextLightbox = function() {
    currentLightboxIndex = (currentLightboxIndex + 1) % filteredGallery.length;
    updateLightboxContent();
}

window.prevLightbox = function() {
    currentLightboxIndex = (currentLightboxIndex - 1 + filteredGallery.length) % filteredGallery.length;
    updateLightboxContent();
}

function updateLightboxContent() {
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const item = filteredGallery[currentLightboxIndex];

    lightboxImg.src = item.src;
    lightboxCaption.innerHTML = `${item.title} <span>${item.category}</span>`;
}

// ==========================================
// SCROLL REVEAL ANIMATIONS (OBSERVER)
// ==========================================
function initScrollAnimations() {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                obs.unobserve(entry.target); // Trigger once
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
}

// ==========================================
// SCROLLSPY (ACTIVE LINK ON SCROLL)
// ==========================================
function initScrollspy() {
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.navbar-custom .nav-link');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < (sectionTop + sectionHeight)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    // Auto collapse mobile nav on click
    const navCollapse = document.getElementById('navbarNav');
    const mobileLinks = document.querySelectorAll('.navbar-custom .nav-link:not(.dropdown-toggle)');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navCollapse && navCollapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });
    });
}

// ==========================================
// SCROLL TO TOP BUTTON
// ==========================================
function initScrollToTop() {
    const scrollBtn = document.getElementById('scrollTopBtn');
    if (!scrollBtn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

