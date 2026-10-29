const siteConfig = {
  // Website Information
  siteName: "Realistic Mart",
  tagline: "Shop Smart. Live Better.",
  description: "Discover quality products at great prices.",
  currency: "INR",
  currencySymbol: "₹",
  locale: "en-IN",

  // Website Appearance
  theme: {
    primaryColor: "#131921",
    secondaryColor: "#232f3e",
    accentColor: "#febd69",
    backgroundColor: "#ffffff",
    textColor: "#111827",
  },

  // Shopping Settings
  shopping: {
    allowGuestBrowsing: true,
    requireLoginForCheckout: true,
    enableCashOnDelivery: true,
    enableOnlinePayment: false,
    enableProductReviews: true,
    enableWishlist: true,
    enableProductVariants: true,
  },

  // Authentication Settings
  authentication: {
    enablePhoneLogin: true,
    enableEmailLogin: true,
    requireVerifiedPhoneForOrders: true,
  },

  // Order Settings
  orders: {
    enableOrderTracking: true,
    enableOrderCancellation: true,
    enableOrderHistory: true,
  },

  // Delivery Settings
  delivery: {
    country: "India",
    freeShipping: false,
    defaultShippingFee: 0,
  },

  // Admin Settings
  admin: {
    enableAdminDashboard: true,
    allowPublicRegistration: false,
  },

  // Feature Flags
  features: {
    enableSearch: true,
    enableCategories: true,
    enableCoupons: true,
    enableOffers: true,
    enableCustomerAddresses: true,
    enableNotifications: true,
  },
};

export default siteConfig;
