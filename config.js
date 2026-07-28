/* Copyright © 2026 CilokTech (ciloktech.my.id) | Proprietary Software | Unauthorized copying/distribution prohibited | License: Commercial - Contact ciloktech.my.id */

// ============================================================
// Supplier Hub — Configuration
// ============================================================

// --- Firebase project config ---
const FIREBASE_CONFIG = {
  apiKey:            '«redacted»',
  authDomain:        'pos-enterprise-9dde0.firebaseapp.com',
  projectId:         'pos-enterprise-9dde0',
  storageBucket:     'pos-enterprise-9dde0.firebasestorage.app',
  messagingSenderId: '468231563907',
  appId:             '1:468231563907:web:ea437b138d7e868b66c9b6'
};

// --- Store identity ---
const STORE = {
  name:    'Supplier Hub',
  address: 'Jl. Gudang No. 1, Kawasan Industri',
  phone:   '0812-0000-0000',
  hours:   'Senin - Sabtu: 08.00 - 17.00',
  wa:      '0812-0000-0000',
  instagram: '@supplierhub',
  facebook:  'Supplier Hub Official',
  tiktok:    '@supplierhub',
  website:   'www.supplierhub.com',
  footer:  'Supplier Hub — Manajemen Pembelian & Supplier'
};

// --- Receipt / printer ---
const RECEIPT = {
  width: 80,
  copies: 1
};

// --- Firestore collections (prefix v3- untuk clean rebuild) ---
const COLLECTIONS = {
  products:      'v3-products',
  stockMoves:    'v3-stock-moves',
  transactions:  'v3-transactions',
  users:         'v3-users',
  suppliers:     'v3-suppliers',
  purchaseOrders:'v3-purchase-orders',
  payments:      'v3-supplier-payments'
};

// --- Auth / roles ---
const ADMIN_EMAIL = 'Admin@enterprise.com';

// --- Theme ---
const THEME = {
  primary: 'emerald',
  hex:     '#10b981'
};
