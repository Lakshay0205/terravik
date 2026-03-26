# 🎨 Checkout System - Visual Guide

## 📱 Page Layouts

### Checkout Page Layout

```
┌─────────────────────────────────────────────────────────────┐
│                    🌿 CHECKOUT                              │
│                                                             │
│  ┌───┐────────┌───┐────────┌───┐                          │
│  │ 1 │ Contact│ 2 │ Shipping│ 3 │ Payment                 │
│  └───┘────────└───┘────────└───┘                          │
└─────────────────────────────────────────────────────────────┘

┌──────────────────────────────┐  ┌──────────────────────────┐
│  LEFT SIDE (Form)            │  │  RIGHT SIDE (Summary)    │
│                              │  │                          │
│  ┌────────────────────────┐ │  │  ┌────────────────────┐ │
│  │ 📞 Contact Information │ │  │  │  Order Summary      │ │
│  │                        │ │  │  │                     │ │
│  │  Phone Number *        │ │  │  │  [Product Image]    │ │
│  │  [______________]      │ │  │  │                     │ │
│  └────────────────────────┘ │  │  │  Product Name       │ │
│                              │  │  │  Product Type       │ │
│  ┌────────────────────────┐ │  │  │                     │ │
│  │ 📍 Delivery Address    │ │  │  │  Quantity: [-] 1 [+]│ │
│  │                        │ │  │  │                     │ │
│  │  First Name *          │ │  │  │  Price: ₹499        │ │
│  │  [______________]      │ │  │  │                     │ │
│  │                        │ │  │  │  ─────────────────  │ │
│  │  Last Name *           │ │  │  │  Subtotal:    ₹499  │ │
│  │  [______________]      │ │  │  │  Shipping:    FREE  │ │
│  │                        │ │  │  │  ─────────────────  │ │
│  │  Address Line 1 *      │ │  │  │  Total:       ₹499  │ │
│  │  [______________]      │ │  │  └────────────────────┘ │
│  │                        │ │  │                          │
│  │  Apartment (optional)  │ │  └──────────────────────────┘
│  │  [______________]      │ │
│  │                        │ │
│  │  City *    State *     │ │
│  │  [_____]   [▼_____]    │ │
│  │                        │ │
│  │  Pincode *             │ │
│  │  [______]              │ │
│  └────────────────────────┘ │
│                              │
│  ┌────────────────────────┐ │
│  │ 🚚 Shipping Method     │ │
│  │                        │ │
│  │  ○ 💳 Prepaid (FREE)   │ │
│  │  ○ 💵 COD (+₹50)       │ │
│  └────────────────────────┘ │
│                              │
│  ┌────────────────────────┐ │
│  │ [Place Order - ₹499]   │ │
│  │  🔒 Secure Payment     │ │
│  └────────────────────────┘ │
└──────────────────────────────┘
```

---

### Order Success Page Layout

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                    ┌─────────┐                             │
│                    │    ✓    │  (Animated)                 │
│                    └─────────┘                             │
│                                                             │
│            Order Placed Successfully!                       │
│     Thank you for your order. We'll send you a            │
│            confirmation email shortly.                      │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐  │
│  │  Order Details                                      │  │
│  │  ─────────────────────────────────────────────────  │  │
│  │                                                     │  │
│  │  📦  Product                                        │  │
│  │      TerraVik Liquid Gold                          │  │
│  │      Quantity: 1 × ₹499                            │  │
│  │                                                     │  │
│  │  📍  Delivery Address                              │  │
│  │      John Doe                                      │  │
│  │      123 Main Street, Apartment 4B                 │  │
│  │      Mumbai, Maharashtra - 400001                  │  │
│  │                                                     │  │
│  │  📞  Contact                                        │  │
│  │      9876543210                                    │  │
│  │                                                     │  │
│  │  💳  Payment Method                                │  │
│  │      Online Payment (Prepaid)                      │  │
│  │      Payment ID: pay_xxxxxxxxxxxxx                 │  │
│  │                                                     │  │
│  │  ─────────────────────────────────────────────────  │  │
│  │  Subtotal                              ₹499        │  │
│  │  Shipping                              FREE        │  │
│  │  ─────────────────────────────────────────────────  │  │
│  │  Total Amount                          ₹499        │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐  │
│  │  Estimated Delivery                                 │  │
│  │  Monday, January 15, 2024                          │  │
│  │  Your order will be delivered within 5-7 days     │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                             │
│     [Continue Shopping]  [Back to Home]                    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎨 Color Scheme

### Primary Colors
```
┌──────────┐  ┌──────────┐  ┌──────────┐
│ #5a9a3c  │  │ #9ccc65  │  │ #ffd54f  │
│ Primary  │  │Secondary │  │  Accent  │
│  Green   │  │  Green   │  │   Gold   │
└──────────┘  └──────────┘  └──────────┘
```

### Semantic Colors
```
┌──────────┐  ┌──────────┐  ┌──────────┐
│ #4caf50  │  │ #ff9800  │  │ #f44336  │
│ Success  │  │ Warning  │  │  Error   │
└──────────┘  └──────────┘  └──────────┘
```

---

## 🔄 User Flow Diagram

```
┌─────────────────┐
│  Product Page   │
│                 │
│  [Buy Now]      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Checkout Page  │
│                 │
│  Step 1: ●──────│──── Contact Info
│  Step 2: ○──────│──── Shipping
│  Step 3: ○──────│──── Payment
└────────┬────────┘
         │
         ▼
    Fill Form
         │
         ▼
┌─────────────────┐
│ Select Shipping │
│                 │
│  ○ Prepaid      │
│  ● COD          │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Place Order    │
└────────┬────────┘
         │
    ┌────┴────┐
    │         │
    ▼         ▼
┌────────┐ ┌────────┐
│Prepaid │ │  COD   │
│        │ │        │
│Razorpay│ │ Direct │
└───┬────┘ └───┬────┘
    │          │
    └────┬─────┘
         │
         ▼
┌─────────────────┐
│ Order Success   │
│                 │
│  ✓ Confirmed    │
└─────────────────┘
```

---

## 📱 Mobile Layout

```
┌──────────────────┐
│   🌿 CHECKOUT    │
│                  │
│  ●────○────○     │
│  Contact         │
└──────────────────┘

┌──────────────────┐
│  Order Summary   │  ← Moves to top
│                  │
│  [Product]       │
│  [-] 1 [+]       │
│  Total: ₹499     │
└──────────────────┘

┌──────────────────┐
│  Contact Info    │
│  [Phone]         │
└──────────────────┘

┌──────────────────┐
│  Address         │
│  [First Name]    │
│  [Last Name]     │
│  [Address]       │
│  [City]          │
│  [State ▼]       │
│  [Pincode]       │
└──────────────────┘

┌──────────────────┐
│  Shipping        │
│  ○ Prepaid       │
│  ○ COD           │
└──────────────────┘

┌──────────────────┐
│ [Place Order]    │
└──────────────────┘
```

---

## 🎯 Interactive Elements

### Quantity Selector
```
┌─────────────────┐
│  [-]  1  [+]    │
└─────────────────┘
     ↓    ↓    ↓
   Minus Value Plus
```

### Shipping Options
```
┌──────────────────────────────┐
│ ● 💳 Prepaid (FREE)          │ ← Selected
└──────────────────────────────┘

┌──────────────────────────────┐
│ ○ 💵 COD (+₹50)              │
└──────────────────────────────┘
```

### Step Indicators
```
Active:   ●────────
Inactive: ○────────
```

### Buttons

**Primary Button (Place Order)**
```
┌──────────────────────────────┐
│  Place Order - ₹499          │
│  🔒 Secure Payment           │
└──────────────────────────────┘
```

**Loading State**
```
┌──────────────────────────────┐
│  ⟳ Processing...             │
└──────────────────────────────┘
```

---

## 🎨 Component States

### Input Field States

**Normal**
```
┌──────────────────┐
│ [____________]   │
└──────────────────┘
```

**Focused**
```
┌──────────────────┐
│ [____________]   │ ← Green border
└──────────────────┘
```

**Error**
```
┌──────────────────┐
│ [____________]   │ ← Red border
│ ⚠ Error message  │
└──────────────────┘
```

---

## 💳 Payment Flow

### Prepaid Flow
```
[Place Order]
     ↓
Validate Form
     ↓
Create Razorpay Order
     ↓
Open Payment Popup
     ↓
┌─────────────────┐
│  Razorpay       │
│  Payment Modal  │
│                 │
│  [Pay ₹499]     │
└─────────────────┘
     ↓
Payment Success
     ↓
Order Success Page
```

### COD Flow
```
[Place Order]
     ↓
Validate Form
     ↓
Order Success Page
```

---

## 📊 Price Calculation Display

```
┌──────────────────────────┐
│  Subtotal:        ₹499   │
│  Shipping:        FREE   │ ← Changes based on method
│  ─────────────────────   │
│  Total:           ₹499   │ ← Auto-updates
└──────────────────────────┘
```

**With COD:**
```
┌──────────────────────────┐
│  Subtotal:        ₹499   │
│  Shipping:        ₹50    │
│  ─────────────────────   │
│  Total:           ₹549   │
└──────────────────────────┘
```

---

## 🎭 Animations

### Success Icon
```
Frame 1:  ○  (scale: 0)
Frame 2:  ◐  (scale: 0.5)
Frame 3:  ●  (scale: 1)
Frame 4:  ✓  (fade in)
```

### Loading Spinner
```
⟳  Rotating 360°
```

### Hover Effects
```
Normal:   [Button]
Hover:    [Button] ↑ (lift up 2px)
          └─ shadow increases
```

---

## 🎨 Shadow Hierarchy

```
Level 1 (Cards):
  box-shadow: 0 4px 12px rgba(0,0,0,0.08)

Level 2 (Buttons):
  box-shadow: 0 4px 12px rgba(90,154,60,0.3)

Level 3 (Hover):
  box-shadow: 0 6px 16px rgba(90,154,60,0.4)
```

---

## 📐 Spacing System

```
┌─────────────────────────────┐
│  ← 2rem padding →           │
│                             │
│  ┌───────────────────────┐  │
│  │  ← 1.5rem gap →       │  │
│  │                       │  │
│  │  [Input Field]        │  │
│  │  ↕ 1.5rem             │  │
│  │  [Input Field]        │  │
│  │                       │  │
│  └───────────────────────┘  │
│                             │
└─────────────────────────────┘
```

---

## 🎯 Responsive Breakpoints

```
Mobile (< 640px):
┌──────┐
│      │
│ Full │
│Width │
│      │
└──────┘

Tablet (640px - 1024px):
┌──────┐
│      │
│ Full │
│Width │
│      │
└──────┘

Desktop (> 1024px):
┌──────┬──────┐
│      │      │
│ Form │ Sum  │
│      │ mary │
│      │      │
└──────┴──────┘
```

---

## 🎨 Typography Scale

```
Title:     2.5rem  (40px)  ████████
Heading:   1.5rem  (24px)  ██████
Subhead:   1.25rem (20px)  █████
Body:      1rem    (16px)  ████
Small:     0.875rem(14px)  ███
Tiny:      0.75rem (12px)  ██
```

---

## 🔔 Notification States

### Success
```
┌──────────────────────────┐
│  ✓  Order Placed!        │ ← Green background
└──────────────────────────┘
```

### Error
```
┌──────────────────────────┐
│  ✗  Payment Failed       │ ← Red background
└──────────────────────────┘
```

### Loading
```
┌──────────────────────────┐
│  ⟳  Processing...        │ ← Blue background
└──────────────────────────┘
```

---

**This visual guide helps understand the layout, flow, and design system of the checkout implementation.**
