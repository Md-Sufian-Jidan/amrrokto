# Product Requirements Document (PRD)
## AmrRokto 🩸 v1.0 — Trust-First Blood Donation Network for Bangladesh

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Problem Statement & Market Analysis](#2-problem-statement--market-analysis)
3. [User Personas & Journeys](#3-user-personas--journeys)
4. [Core Strategy Shift: v1.0 → v2.0](#4-core-strategy-shift-v10--v20)
5. [Functional Requirements — Page by Page](#5-functional-requirements--page-by-page)
6. [Non-Functional Requirements](#6-non-functional-requirements)
7. [Gamification & Rewards System](#7-gamification--rewards-system)
8. [Trust & Safety Architecture](#8-trust--safety-architecture)
9. [Launch & Distribution Strategy](#9-launch--distribution-strategy)
10. [Success Metrics & KPIs](#10-success-metrics--kpis)
11. [Technical Architecture Considerations](#11-technical-architecture-considerations)
12. [Timeline & Milestones](#12-timeline--milestones)
13. [Risks & Mitigations](#13-risks--mitigations)
14. [Appendix: API Changes](#14-appendix-api-changes)

---

## 1. Executive Summary

### 1.1 Product Vision

AmrRokto aims to become Bangladesh's most trusted peer-to-peer blood donation network — not by being the most feature-rich platform, but by being the fastest, safest, and most socially verifiable way to connect a patient in crisis with a willing donor nearby.

### 1.2 v2.0 Strategic Shift

| Dimension | v1.0 (Current) | v2.0 (Target) |
|-----------|----------------|---------------|
| **Core Philosophy** | Feature-complete platform | Trust-building machine |
| **Primary User Need** | "I want to find blood donors" | "I need someone I can trust, RIGHT NOW" |
| **Differentiation** | Gamification + AI | Social proof + Speed + Bengali-first UX |
| **Growth Engine** | Word of mouth | Facebook group virality + donor pride sharing |
| **Success Metric** | Feature adoption | Request fulfillment rate + Time-to-first-commit |

### 1.3 Key Objectives (30-Day Targets)

- **100 registered donors** (verifiable via database)
- **30 blood requests posted** (real or seeded with permission)
- **15 requests fulfilled** (50% fulfillment rate)
- **Average time-to-first-commit:** Under 45 minutes
- **Facebook share rate:** >20% of donors share their profile or donation card
- **Return rate:** >30% of donors log in again within 14 days

---

## 2. Problem Statement & Market Analysis

### 2.1 The Real Problem (Bangladesh-Specific)

| Surface Problem | Actual Root Problem |
|-----------------|---------------------|
| "Can't find blood donors" | **No verified, location-aware, real-time network exists** — Facebook posts are unstructured, unsearchable, and unverifiable |
| "Donors don't respond" | **No incentive system, no recognition, no ease of matching** — donors feel unappreciated and requests feel like spam |
| "Too many fake requests" | **Zero verification, zero social proof** — no way to know if a request is genuine or a prank |
| "Privacy concern" | **Donors fear harassment** — phone numbers publicly posted lead to unwanted calls months later |

### 2.2 Current Alternatives & Their Failures

| Alternative | Users | Why It Fails |
|-------------|-------|--------------|
| Facebook groups ("রক্তদাতা", "জরুরী রক্ত প্রয়োজন") | 500K+ members across 20+ groups | Unstructured, no search, no verification, posts get buried in hours |
| বাঁধন (Badhon) | Established volunteer network | Slow response chain, phone-tree based, no real-time matching |
| রেড ক্রিসেন্ট (Red Crescent) | Institutional | Not designed for individual emergency matching, bureaucratic |
| WhatsApp broadcast | Every Bangladeshi family | No donor database, limited reach, spam-like behavior |
| Quantum Foundation | Donor database | Closed system, requires membership, not real-time |

### 2.3 Market Opportunity

- **Addressable market:** 40M+ Bangladeshi adults eligible to donate blood
- **Annual demand:** ~800,000 units of blood needed in Bangladesh (WHO estimate)
- **Digital penetration:** 130M+ internet users, 95% on mobile
- **Cultural tailwind:** Blood donation during Ramadan, Eid, Victory Day, and national emergencies is seen as a noble act in both Muslim and Hindu communities
- **Underutilized demographic:** 18-30 year old university students — digitally native, altruistic, seeking purpose, heavy Facebook users

---

## 3. User Personas & Journeys

### 3.1 Primary Personas

#### Persona 1: Urgent Seeker — "Fatima, 34, Daughter Seeking for Father"

| Attribute | Detail |
|-----------|--------|
| **Situation** | Father hospitalized at Dhaka Medical, needs B+ blood for surgery tomorrow |
| **Emotional State** | Panicked, time-pressured, distrustful of strangers but desperate |
| **Tech Literacy** | Moderate — uses Facebook, WhatsApp, can fill forms on phone |
| **Primary Device** | Smartphone (3G/4G), possibly shared with family |
| **Key Behaviors** | Posts in 5 Facebook groups simultaneously, calls everyone she knows, asks relatives to share |
| **Core Need** | "Find me 2-3 B+ donors near Dhanmondi who can come to Dhaka Medical by tomorrow morning. I need to know they're real people." |
| **Pain Points with Current Solutions** | • Facebook post gets 200 comments, 90% are "contact me" spam<br>• No way to know who's genuine<br>• Phone ringing nonstop with unhelpful calls<br>• Can't filter by location |
| **AmrRokto Must Deliver** | • Post request in <2 minutes<br>• See matching donors within 30 minutes<br>• Know donors are verified/real<br>• Get phone numbers, not endless chat |

#### Persona 2: Willing Donor — "Rafiq, 23, University Student, O+"

| Attribute | Detail |
|-----------|--------|
| **Situation** | Healthy, donated 3 times at university blood camps, wants to help more |
| **Emotional State** | Altruistic but cautious, wants recognition, fears harassment |
| **Tech Literacy** | High — uses smartphone extensively, active on Facebook/Instagram |
| **Primary Device** | Mid-range Android smartphone, 4G |
| **Key Behaviors** | Shares donation photos on Facebook, responds to friend's blood requests, member of university blood donor club |
| **Core Need** | "Alert me when someone needs O+ blood within 5 km of my area. Let me help without getting 50 phone calls. Recognize my contributions publicly." |
| **Pain Points with Current Solutions** | • Facebook group posts are overwhelming and unfiltered<br>• No way to know which requests are still active<br>• Phone number shared publicly leads to spam<br>• No recognition beyond a few Facebook likes |
| **AmrRokto Must Deliver** | • Smart notifications for matching requests<br>• Privacy controls (share phone only when I commit)<br>• Public profile showing donation count and badges<br>• Shareable donation cards for Facebook |

#### Persona 3: Hospital Manager — "Dr. Nasrin, 41, Blood Bank Officer"

| Attribute | Detail |
|-----------|--------|
| **Situation** | Manages blood inventory at a private hospital in Chittagong |
| **Emotional State** | Professionally responsible, frustrated by shortage gaps, wants reliable donor pipeline |
| **Tech Literacy** | Moderate — uses email, smartphone, hospital management software |
| **Primary Device** | Smartphone + Desktop at work |
| **Key Behaviors** | Maintains a personal list of regular donors, calls them directly when stock runs low |
| **Core Need** | "When my hospital runs out of AB- blood, I need to reach 20 pre-verified donors instantly and track who's coming." |
| **Pain Points with Current Solutions** | • Personal donor list is static, not searchable by availability<br>• No way to verify if donor donated recently elsewhere<br>• Manual phone calls are slow in emergencies |
| **AmrRokto Must Deliver** | • Post verified requests with hospital name attached<br>• Shortlist matching donors from platform database<br>• Verify donations to trigger points/badges for donors<br>• Track blood inventory digitally |

### 3.2 User Journey Maps

#### Journey 1: Emergency Blood Request (Seeker — "Happy Path")

```
TIME 0-2 min:     Seeker lands on homepage
                   ↓
                  Clicks "🆘 জরুরী রক্ত প্রয়োজন"
                   ↓
TIME 2-4 min:     Emergency form opens
                  • Selects blood group from dropdown
                  • Selects district (auto-detected from IP if possible)
                  • Enters phone number
                  • Enters hospital name (optional, encouraged)
                  • Selects urgency: "তাত্ক্ষণিক" / "আজ" / "আগামীকাল"
                  • Submits
                   ↓
TIME 4-5 min:     Confirmation screen shows:
                  "✅ আপনার রিকোয়েস্ট পাঠানো হয়েছে।
                   ১২ জন ম্যাচিং ডোনারকে SMS ও নোটিফিকেশন পাঠানো হয়েছে।
                   আপনার ফোনে শীঘ্রই কল আসবে।"
                   
                  [ফেসবুকে শেয়ার করুন] button
                  [রিকোয়েস্ট দেখুন] button
                   ↓
TIME 5-45 min:    Matching donors receive:
                  • In-app notification: "আপনার কাছে জরুরী B+ রক্তের প্রয়োজন"
                  • Email notification (secondary)
                  • Donor views request → clicks "আমি সাহায্য করতে চাই"
                  • Seeker gets notification: "রাফিক U. সাহায্য করতে চান — ফোন: 01XXXXXXXXX"
                   ↓
TIME 45 min:      Request fulfilled — seeker confirms in app
                  Donor receives points + "জীবন বাঁচানো" badge
                  Donor prompted to share donation card on Facebook
```

#### Journey 2: Donor Registration & First Donation (Donor — "Engagement Loop")

```
TIME 0-1 min:    Donor lands on homepage via Facebook friend's shared card
                 ↓
                 Clicks "রক্তদাতা হিসেবে যোগ দিন"
                 ↓
TIME 1-3 min:    Registration wizard:
                 Step 1: রক্তের গ্রুপ → O+
                 Step 2: জেলা → ঢাকা, থানা → ধানমন্ডি
                 Step 3: নাম → রাফিক, ফোন → 01XXXXXXXXX
                 
                 At each step, contextual motivation:
                 "O+ রক্তের জন্য আপনার এলাকায় গত মাসে ১৫টি রিকোয়েস্ট এসেছে"
                 ↓
TIME 3-4 min:    Email/SMS verification sent → verified
                 ↓
TIME 4-5 min:    Onboarding complete → dashboard shows:
                 "অভিনন্দন! আপনি এখন ২৪৭ জন দাতার নেটওয়ার্কের অংশ।"
                 "আপনার কাছেই ২টি জরুরী রিকোয়েস্ট"
                 ↓
TIME 5-10 min:   Donor browses nearby requests, commits to one
                 ↓
TIME 10 min - 2 days: Donor goes to hospital, donates blood
                 ↓
POST-DONATION:   Donor logs donation via app:
                 • Uploads donation certificate photo
                 • Receives 100 points instantly
                 • Auto-generated donation card appears:
                   "রাফিক U. আজ রক্তদান করেছেন। তিনিই AmrRokto-তে ৪র্থ বার।"
                 • Prompted to share on Facebook
                 ↓
ONGOING:         Donor returns to check points, badges, new requests
                 Donor receives notifications for urgent nearby requests
```

---

## 4. Core Strategy Shift: v1.0 → v2.0

### 4.1 Critical Flaw in v1.0 Architecture

The current platform was built with a "field of dreams" assumption: *build it and they will come*. This fails for blood donation platforms because:

1. **Cold start death spiral:** Empty donor map → no requests posted → no reason to register → platform appears dead → no one returns
2. **Trust gap:** A stranger's blood request on a new platform has zero credibility compared to a Facebook post from "my cousin's colleague"
3. **Recognition gap:** Donors receive points but no real-world validation — the points system is abstract and invisible to their social circle

### 4.2 v2.0 Strategic Pillars

| Pillar | Description | v1.0 Status | v2.0 Target |
|--------|-------------|-------------|-------------|
| **1. Seeded Social Proof** | Platform must appear alive from day 1 | ❌ Empty | ✅ 50+ donor profiles, 10+ active requests, 5+ success stories, 3+ video testimonials at launch |
| **2. Facebook-Centric Virality** | Every action generates shareable content | ❌ No share buttons | ✅ "Share on Facebook" on donation cards, profiles, requests, and success stories |
| **3. Bengali-First UX** | Primary interface in Bangla, English as secondary | ⚠️ Mixed | ✅ All CTAs, error messages, onboarding in Bangla. English available as toggle. |
| **4. Progressive Trust** | Graduated information disclosure based on user verification level | ⚠️ All-or-nothing privacy | ✅ 3-tier visibility: Public name → Partial phone → Full details based on verification and commitment |
| **5. Real-World Rewards** | Points must convert to tangible value Bangladeshis care about | ❌ Abstract | ✅ Medicine discounts, free health checkups, mobile recharge — partnered with real local businesses |
| **6. Location-Aware Everything** | District/Thana-level granularity for all matching | ⚠️ District only | ✅ District + Thana + approximate distance in kilometers |

---

## 5. Functional Requirements — Page by Page

### 5.1 Homepage (`/`)

#### 5.1.1 Hero Section (Above Fold)

**Requirement ID:** HOM-001  
**Priority:** P0 (Critical)  
**User Story:** As a panicked seeker, I want to immediately understand this platform can help me find blood RIGHT NOW, so I don't bounce to Facebook.

**Design Requirements:**

| Element | Specification |
|---------|---------------|
| **Primary Headline** | "আপনার এলাকায় রক্তদাতা খুঁজুন। মাত্র ২ মিনিটে।" (Find blood donors in your area. In just 2 minutes.) — in Bangla, bold, high contrast |
| **Location Selector** | Prominent district dropdown with auto-detect from browser geolocation/IP. Pre-selected if detected. Label: "আপনার এলাকা নির্বাচন করুন" |
| **Primary CTA (Donors)** | Large button: "রক্তদাতা খুঁজুন" → links to `/donors?district=[selected]` |
| **Emergency CTA** | Giant red pulsing button (CSS animation, subtle): "🆘 জরুরী রক্ত প্রয়োজন" → links to `/emergency-request` |
| **Background** | Emotional but not graphic — soft red gradient with subtle heartbeat line animation OR hero image of diverse Bangladeshi faces (not stock photos — real donors from your seed group) |
| **Ticker Bar** | Below hero, auto-scrolling ticker: "🟢 রাফিক U. এইমাত্র রক্তদাতা হিসেবে যোগ দিয়েছেন • 🩸 A+ রক্তের রিকোয়েস্ট পূরণ হয়েছে ধানমন্ডিতে • 👤 ২৪৭ জন দাতা আপনার এলাকায়" |

**Acceptance Criteria:**
- [ ] Page loads and displays location selector within 2 seconds on 3G connection
- [ ] District auto-detection works for top 8 divisions and 64 districts
- [ ] Emergency button has visible pulse animation on page load
- [ ] Ticker shows real data from database (not static text)
- [ ] Page is fully responsive — all elements visible and clickable on 320px wide screen

**Technical Notes:**
- Use `navigator.geolocation` with fallback to IP-based location (consider using a free GeoIP API)
- Cache location selection in localStorage for returning users
- Ticker data fetched from `/api/public/recent-activity` endpoint (new endpoint needed)
- Pulse animation: CSS keyframes, `transform: scale()` with `box-shadow` expansion, 2-second cycle

---

#### 5.1.2 Live Statistics Section

**Requirement ID:** HOM-002  
**Priority:** P0  
**User Story:** As a skeptical first-time visitor, I want to see proof this platform is active and successful, so I trust it enough to register.

**Design Requirements:**

| Statistic | Data Source | Display Format |
|-----------|-------------|----------------|
| Total Registered Donors | `SELECT COUNT(*) FROM DonorProfile` | "৫০০+ রক্তদাতা" with counter animation |
| Active Requests (Open) | `SELECT COUNT(*) FROM BloodRequest WHERE status='OPEN'` | "১৫টি সক্রিয় রিকোয়েস্ট" |
| Lives Potentially Saved | `SELECT COUNT(*) FROM DonationHistory WHERE status='VERIFIED' * 3` (1 donation = up to 3 lives) | "১,২০০+ জীবন বাঁচানো সম্ভব" |
| Partner Organizations | `SELECT COUNT(*) FROM ManagerProfile WHERE verified=true` | "২০+ অংশীদার হাসপাতাল" |

**Display Specifications:**
- Four cards in a row on desktop, 2×2 grid on mobile
- Each card: Icon (Lucide/React Icons) + Number (large, animated count-up) + Label (in Bangla)
- Counter animation triggers on scroll-into-view (use Intersection Observer)
- Update frequency: Every 5 minutes via React Query `refetchInterval`
- Show "Last updated: 2 minutes ago" timestamp

**Acceptance Criteria:**
- [ ] Numbers match database counts (not hardcoded)
- [ ] Counter animation plays on first scroll into viewport
- [ ] Cards are readable on 320px wide screens
- [ ] Stats update without page refresh

**Technical Notes:**
- New API endpoint: `GET /api/public/stats` (already exists in your project, verify it returns all four fields)
- Use `countUp.js` or custom `useCountUp` hook for animation
- Intersection Observer with `threshold: 0.5`

---

#### 5.1.3 Social Proof Section

**Requirement ID:** HOM-003  
**Priority:** P0  
**User Story:** As a potential donor, I want to see real people like me using this platform, so I feel motivated to join.

**Design Requirements:**

| Component | Specification |
|-----------|---------------|
| **Video Testimonials** | 3 embedded videos (can be YouTube unlisted or self-hosted). Real Bangladeshi people saying "আমি AmrRokto ব্যবহার করে রক্ত পেয়েছি/দিয়েছি". 30-60 seconds each. Thumbnails with play button. |
| **Success Story Cards** | 3-5 cards with patient photo (or placeholder silhouette), blood group needed, how quickly found, donor name, and a quote. Example: "সায়মা, বয়স ৭, থ্যালাসেমিয়া রোগী। O+ ডোনার পেয়েছেন ৩৫ মিনিটে।" |
| **Recent Donor Wall** | Grid of 12-20 circular avatars with first name and blood group. Clicking shows mini-profile. Title: "আমাদের সর্বশেষ রক্তদাতারা" |
| **Organization Logos** | "আমাদের সাথে আছেন" — row of partner hospital/logos (even if pre-seeded). Trust through association. |

**Acceptance Criteria:**
- [ ] Video testimonials are real (not AI-generated or stock)
- [ ] Success stories are either real or marked as "নমুনা গল্প" (sample story) if seeded
- [ ] Donor wall pulls from real database, not static
- [ ] All sections gracefully handle empty states with "শীঘ্রই আসছে" (coming soon) placeholder

**Technical Notes:**
- Video hosting: YouTube (unlisted) or Cloudinary free tier for video
- Success stories: New database table needed? Or use `DonationHistory` with a `story` text field and `is_featured` boolean
- Donor wall: New API endpoint `GET /api/public/recent-donors?limit=20`
- Partner logos: Static JSON file for now, migrate to DB table later

---

#### 5.1.4 Urgent Requests Preview Section

**Requirement ID:** HOM-004  
**Priority:** P1  
**User Story:** As a willing donor, I want to immediately see who needs blood near me, so I can decide to help without navigating elsewhere.

**Design Requirements:**
- Show 5 most urgent open requests (sorted by deadline, then urgency level)
- Each card: Blood group badge (color-coded), district, urgency indicator (🔴 তাত্ক্ষণিক / 🟠 আজ / 🟡 আগামীকাল), "বিস্তারিত" link
- Red pulsing border for immediate requests
- "সব রিকোয়েস্ট দেখুন" → links to `/urgent-requests`
- Filter chip: "আমার রক্তের গ্রুপের সাথে মিল" (Show only matching my blood group) — only visible if user is logged in and has donor profile

**Acceptance Criteria:**
- [ ] Cards display correct color-coding based on urgency
- [ ] "Matches my blood group" filter works when logged in
- [ ] Section shows skeleton loading state while fetching
- [ ] Empty state: "এখন কোনো জরুরী রিকোয়েস্ট নেই। আপনি প্রথম রক্তদাতা হতে পারেন!"

**Technical Notes:**
- API: `GET /api/blood-requests?limit=5&sort=urgency&status=OPEN` (verify this endpoint exists and supports these params)
- Blood group color mapping: A+=Red, B+=Blue, O+=Green, AB+=Purple (and same for negatives with lighter shade)
- Skeleton component: `SkeletonCard.tsx` already exists in your project

---

#### 5.1.5 How It Works Section

**Requirement ID:** HOM-005  
**Priority:** P1  
**User Story:** As a first-time visitor, I want to understand the process in 3 simple steps, so I'm confident I can use this platform.

**Design Requirements:**
- 3-step visual guide (icons + short text, Bangla):
  1. "রক্তদাতা হিসেবে রেজিস্ট্রেশন করুন" (Register as a donor) — 📝 icon
  2. "রিকোয়েস্ট পোস্ট করুন বা রিকোয়েস্ট খুঁজুন" (Post or find requests) — 🔍 icon
  3. "রক্তদান করে জীবন বাঁচান" (Donate blood, save lives) — ❤️ icon
- Below steps: two CTAs side by side:
  - "আমি রক্তদাতা" (I'm a Donor) → `/register?role=DONOR`
  - "আমার রক্ত প্রয়োজন" (I Need Blood) → `/emergency-request`
- Section visible above the fold on mobile (before scrolling)

**Acceptance Criteria:**
- [ ] Steps are numbered and visually distinct
- [ ] CTAs have equal visual weight
- [ ] Entire section fits on one mobile screen (no horizontal scroll needed)

---

#### 5.1.6 Remaining Homepage Sections (Lower Priority)

| Section | Requirement ID | Priority | Key Specifications |
|---------|----------------|----------|-------------------|
| **Thalassemia Awareness** | HOM-006 | P2 | Educational section about thalassemia in Bangladesh. Link to `/eligibility`. Stats: "বাংলাদেশে প্রতি ১০০০ জনে ১ জন থ্যালাসেমিয়ায় আক্রান্ত" |
| **Awareness Campaigns** | HOM-007 | P2 | Showcase upcoming/ongoing blood donation camps. Calendar view or list. "আপনার এলাকায় রক্তদান ক্যাম্প" |
| **Why Donate** | HOM-008 | P2 | Health benefits of blood donation (reduces heart attack risk, burns calories, free health screening). 4-5 icon cards. |
| **Impact Wall** | HOM-009 | P2 | Larger version of success stories. Grid of photos with overlay text. Masonry layout. |
| **Community Trust** | HOM-010 | P2 | Logos of organizations that have endorsed or partnered. Verification badges explained. |
| **Testimonials** | HOM-011 | P2 | Deeper testimonial section with longer quotes, star ratings, and user photos. Pull from success story table. |
| **FAQ Preview** | HOM-012 | P2 | 5 most common FAQs with expand/collapse. "আরও প্রশ্ন" → links to `/faq` |

---

### 5.2 Emergency SOS Form (`/emergency-request`)

**Requirement ID:** ER-001  
**Priority:** P0 (Highest)  
**User Story:** As a panicked family member in a hospital, I want to post a blood request in under 2 minutes with minimal typing, so I can reach donors while I attend to my loved one.

#### 5.2.1 Form Design — Progressive Disclosure (Two-Step)

**Step 1: Essential Information (3 fields)**

| Field | Type | Validation | Purpose |
|-------|------|------------|---------|
| রক্তের গ্রুপ (Blood Group) | Dropdown — A+, A-, B+, B-, O+, O-, AB+, AB- | Required | Matching |
| জেলা (District) | Dropdown — 64 districts, auto-detect from IP/geolocation | Required | Location matching |
| ফোন নাম্বার (Phone Number) | Tel input — Bangladesh format (01XXXXXXXXX) | Required, regex: `^01[3-9]\d{8}$` | Primary contact |

**Step 1 UI Details:**
- Each field is full-width, large touch targets (minimum 48px height)
- Auto-focus on first field
- "জরুরী" badge at top of form
- Minimal UI chrome — no navbar, no footer, just the form and a back button
- Submit button: large red "সাহায্য প্রয়োজন" (Need Help) button
- After Step 1 submit: request is created with status `OPEN`, basic details saved

**Step 2: Enrich Request (Optional, Post-Creation)**

| Field | Type | Validation | Purpose |
|-------|------|------------|---------|
| হাসপাতালের নাম (Hospital Name) | Text input with autocomplete from hospital directory | Optional but encouraged | Donor trust |
| রোগীর বয়স (Patient Age) | Number, 0-120 | Optional | Context |
| রোগীর সাথে সম্পর্ক (Relationship to Patient) | Dropdown: স্বয়ং/সন্তান/পিতা-মাতা/স্বামী-স্ত্রী/ভাই-বোন/অন্যান্য | Optional | Humanization |
| জরুরী অবস্থা (Urgency Level) | Radio buttons: তাত্ক্ষণিক (দুর্ঘটনা/সার্জারী) / আজকের মধ্যে / আগামীকাল | Required, defaults to "আজকের মধ্যে" | Notification priority |
| অতিরিক্ত তথ্য (Additional Info) | Textarea, max 500 chars | Optional | Special requirements |

**Step 2 UI Details:**
- Appears immediately after Step 1 submission — but patient can skip entirely
- Clear "এড়িয়ে যান" (Skip) button, not just a small "skip" link
- Shows message: "এই তথ্যগুলো দিলে ডোনার পাওয়ার সম্ভাবনা ৩ গুণ বেড়ে যায়" (Providing this info triples chances of finding a donor)
- Each field shows why it matters in micro-copy below label

#### 5.2.2 Post-Submission Confirmation Screen

**Requirement ID:** ER-002  
**Priority:** P0

**Display immediately after submission:**

```
✅ আপনার রিকোয়েস্ট পাঠানো হয়েছে

[Animated checkmark icon]

১২ জন ম্যাচিং ডোনারকে নোটিফাই করা হয়েছে
আপনার জেলা: ঢাকা
আপনার রক্তের গ্রুপ: B+

আনুমানিক সময়: ১৫-৪৫ মিনিটের মধ্যে ফোন আসতে পারে

[বড় নীল বাটন] 📞 ডোনাররা কল দিলে কী বলবেন?
[ছোট টেক্সট] টিপস: আপনার অবস্থান, হাসপাতালের নাম, কত ইউনিট প্রয়োজন তা জানান

[বড় লাল বাটন] 📢 ফেসবুকে শেয়ার করুন
[ছোট টেক্সট] শেয়ার করলে ১০ গুণ বেশি মানুষের কাছে পৌঁছাবে

[সাদা বাটন] আমার রিকোয়েস্ট দেখুন →
```

**Technical Requirements:**
- After Step 1 submission, API creates `BloodRequest` with `status: OPEN`
- Trigger immediate notification to matching donors (see Notification System requirements)
- Matching algorithm: Find donors where `DonorProfile.bloodGroup === request.bloodGroup AND DonorProfile.district === request.district AND DonorProfile.isAvailable === true`
- If <5 exact matches, expand to same division
- SMS notification for top 5 donors (if phone numbers available and SMS gateway configured)

#### 5.2.3 Emergency Request — Additional Features

**Requirement ID:** ER-003  
**Priority:** P1

| Feature | Specification |
|---------|---------------|
| **Voice Note Upload** | Optional audio recording (max 60 seconds) describing the situation. For elderly family members who can't type. Upload as `.webm` or `.mp3`. Max 5MB. |
| **Duplicate Prevention** | When phone number is submitted, check if there's an existing OPEN request from same phone in last 6 hours. If yes, show: "আপনার একটি রিকোয়েস্ট আগে থেকেই আছে। নতুন রিকোয়েস্ট করবেন?" |
| **Request Tracking Link** | Generate a unique URL `AmrRokto.com/request/[id]` that seeker can bookmark and check without login |
| **Manual Refresh** | "ডোনার চেক করুন" button on request page to see updated matching donor count |
| **Close Request** | Seeker can close request (with phone number verification) → sends notification to committed donors: "রিকোয়েস্ট পূরণ হয়েছে, ধন্যবাদ" |

**Acceptance Criteria (Full ER Flow):**
- [ ] Step 1 form loads in <1.5 seconds on 3G
- [ ] Step 1 submission creates database record and returns confirmation in <500ms
- [ ] Matching donor notification triggers within 30 seconds of request creation
- [ ] Confirmation screen shows accurate donor match count (not placeholder)
- [ ] Facebook share button generates pre-filled Bangla post with correct request link
- [ ] Form is fully functional on 320px wide screens
- [ ] All dropdowns have Bangla labels
- [ ] Phone validation catches common Bangladeshi format errors
- [ ] Voice note recording works on Chrome and Firefox mobile browsers (MediaRecorder API)

**Technical Notes:**
- Voice note: Use `navigator.mediaDevices.getUserMedia({ audio: true })` and MediaRecorder API. Fallback: hide voice option if API not supported.
- Autocomplete for hospital names: New API `GET /api/public/hospitals/search?q=...` or use existing organization search
- Matching algorithm: Implement as database query with fallback logic. Cache results for 5 minutes if no new donors registered.
- Facebook share: Use `https://www.facebook.com/sharer/sharer.php?u=[encoded_url]&quote=[encoded_bangla_text]`

---

### 5.3 Donor Search & Discovery (`/donors`)

**Requirement ID:** DS-001  
**Priority:** P0  
**User Story:** As a seeker or hospital manager, I want to search for donors by blood group and location, see their availability, and contact them, so I can find compatible donors quickly.

#### 5.3.1 Search Interface

**Search Bar (Unified Search):**

| Feature | Specification |
|---------|---------------|
| **Input** | Single search box with placeholder: "নাম, ফোন, রক্তের গ্রুপ, জেলা, থানা লিখুন..." |
| **Autocomplete** | As user types (>2 chars), show dropdown suggestions from real data: "O+ (১২৩ জন) • ধানমন্ডি (৪৫ জন) • রাফিক (৩ জন)" |
| **Debounce** | 300ms debounce before API call |
| **Search Icon** | Magnifying glass icon, clickable to trigger search |

**Filter Chips (Below Search Bar):**

| Filter | Type | Options |
|--------|------|---------|
| রক্তের গ্রুপ | Multi-select chips | 8 blood groups as colored chips, selectable |
| জেলা | Dropdown | 64 districts |
| থানা | Dropdown (cascading) | Thanās within selected district |
| লিঙ্গ | Toggle | সব / পুরুষ / নারী (All/Male/Female) |
| উপলব্ধতা | Toggle | সব / 🟢 এখনই / 🟡 শীঘ্রই |
| সংগঠন | Dropdown | Filter by affiliated organization |

**Sort Options:**
- সাম্প্রতিক (Most Recent — default)
- সবচেয়ে বেশি দান (Most Donations)
- নিকটতম (Nearest — requires location permission)

#### 5.3.2 Donor Card Design

**Requirement ID:** DS-002  
**Priority:** P0

**Public View (Not Logged In):**

```
┌─────────────────────────────┐
│ 🟢 এখনই উপলব্ধ              │
│                             │
│ [Avatar Circle]  রাফিক U.   │
│                 O+           │
│                             │
│ 📍 ধানমন্ডি, ঢাকা           │
│ 🏥 ৫ বার রক্তদান             │
│ ⭐ ৪ জনের জীবন বাঁচিয়েছেন   │
│                             │
│ [বিস্তারিত দেখতে লগইন করুন]  │
└─────────────────────────────┘
```

**Logged In View (Donor or Manager):**

```
┌─────────────────────────────┐
│ 🟢 এখনই উপলব্ধ              │
│                             │
│ [Avatar Circle]  রাফিক U.   │
│                 O+           │
│                             │
│ 📍 ধানমন্ডি, ঢাকা           │
│ 📞 01XXXXXXXXX (দেখান)      │
│ 🏥 ৫ বার রক্তদান             │
│ ⭐ ৪ জনের জীবন বাঁচিয়েছেন   │
│ 🏅 গোল্ড ডোনার               │
│ 📅 শেষ দান: ১৫ জানুয়ারি     │
│                             │
│ [📩 মেসেজ পাঠান] [📞 কল]    │
└─────────────────────────────┘
```

**Card Specifications:**
- Status indicator (🟢🟡🔴⚫) based on last donation date:
  - 🟢 Available: Last donation >3 months ago OR never donated
  - 🟡 Available Soon: Last donation 2-3 months ago
  - 🔴 Recently Donated: Last donation <2 months ago
  - ⚫ Not Available: Manually set by donor
- Blood group displayed as colored badge (consistent with platform color scheme)
- "জীবন বাঁচিয়েছেন" count: Derived from `DonationHistory WHERE status='VERIFIED'` × 3
- Phone number: Initially hidden behind "দেখান" (Show) button. On click, reveal number AND log in audit trail.
- Avatar: First letter of name if no profile photo

**Acceptance Criteria:**
- [ ] Search results update within 500ms of filter change
- [ ] Empty state: "কোনো ডোনার পাওয়া যায়নি। ফিল্টার পরিবর্তন করুন অথবা [রক্তদাতা হিসেবে যোগ দিন]" (No donors found. Change filters or [join as a donor])
- [ ] Card shows skeleton loading animation while fetching
- [ ] Infinite scroll or pagination (20 per page)
- [ ] "Show phone" action logs in audit trail
- [ ] Gender filter works with database field (add `gender` to DonorProfile if not present)

**Technical Notes:**
- API: `GET /api/donors/search?q=...&bloodGroup=...&district=...&thana=...&gender=...&availability=...&sort=...&page=...`
- Availability calculation: Add a `lastDonationDate` field or derive from DonationHistory. If no donation ever, available.
- Autocomplete suggestions: New API endpoint `GET /api/search/suggestions?q=...` — query across donor names, districts, blood groups, thanas, and return categorized suggestions with counts
- "Show phone" tracking: Audit log entry with actor ID, target donor ID, action `VIEW_PHONE`, timestamp

---

### 5.4 Urgent Requests Feed (`/urgent-requests`)

**Requirement ID:** UR-001  
**Priority:** P0  
**User Story:** As a donor, I want to see all active blood requests sorted by urgency, with clear indication of which ones match my blood group, so I can quickly decide where to help.

#### 5.4.1 Feed Design

**Request Card Design:**

```
┌─────────────────────────────────────┐
│ 🔴 তাত্ক্ষণিক প্রয়োজন               │ ← Red border + subtle pulse
│                                     │
│ [Blood Group Badge] B+              │
│ প্রয়োজন: ২ ইউনিট                   │
│                                     │
│ 📍 ঢাকা মেডিকেল কলেজ হাসপাতাল        │
│ 📍 শাহবাগ, ঢাকা                     │
│                                     │
│ রোগী: পুরুষ, ৪৫ বছর                  │
│ সম্পর্ক: পিতা                        │
│                                     │
│ ⏰ বাকি আছে: ৩ ঘন্টা ২৫ মিনিট        │ ← Countdown timer
│ 👤 ২ জন ডোনার কমিট করেছেন            │ ← Social proof
│                                     │
│ [আমি সাহায্য করতে চাই] [বিস্তারিত]   │
└─────────────────────────────────────┘
```

**Color Coding by Urgency:**

| Urgency Level | Card Border | Badge | Animation |
|---------------|-------------|-------|-----------|
| তাত্ক্ষণিক (Immediate) | Red (#DC2626) | 🔴 তাত্ক্ষণিক | Subtle pulse (CSS) |
| আজকের মধ্যে (Today) | Orange (#EA580C) | 🟠 আজ | None |
| আগামীকাল (Tomorrow) | Yellow (#CA8A04) | 🟡 আগামীকাল | None |

**Filter Bar:**

| Filter | Type | Options |
|--------|------|---------|
| আমার রক্তের গ্রুপ | Toggle | On/Off — filters to only requests matching logged-in donor's blood group |
| রক্তের গ্রুপ | Multi-select chips | 8 blood groups |
| জেলা | Dropdown | 64 districts |
| জরুরী অবস্থা | Dropdown | সব / তাত্ক্ষণিক / আজ / আগামীকাল |

**Default Sort:** "সবচেয়ে জরুরী প্রথমে" (Most Urgent First)
- Secondary sort: Deadline (closest deadline first)
- Tertiary sort: Fewest donor commitments (requests with 0 commitments prioritized)

#### 5.4.2 Request Detail View (Click on Card)

**Requirement ID:** UR-002  
**Priority:** P1

Full request view showing:
- All card information expanded
- Patient details (if provided)
- Map view showing hospital location (Leaflet pin)
- List of committed donors (anonymized: "ডোনার #১ • O+ • ১৫ মিনিট আগে কমিট করেছেন")
- Action buttons:
  - **"আমি সাহায্য করতে চাই"** (I Want to Help) — for donors, commits them to request
  - **"বাতিল করুন"** (Cancel) — for request creator
  - **"ডোনার ভেরিফাই করুন"** (Verify Donor) — for managers
  - **"শেয়ার করুন"** (Share) — generates Facebook post

**Commit Flow:**
1. Donor clicks "আমি সাহায্য করতে চাই"
2. Confirmation modal: "আপনি কি নিশ্চিত? আপনার ফোন নাম্বার রিকোয়েস্টকারীর সাথে শেয়ার করা হবে।"
3. On confirm: Create `DonationHistory` with status `COMMITTED`
4. Notification sent to request creator: "[Donor Name] সাহায্য করতে চান। ফোন: [number]"
5. Donor phone number revealed to request creator

**Acceptance Criteria:**
- [ ] Feed loads with correct urgency sorting on page load
- [ ] "Matches my blood group" toggle works for logged-in donors
- [ ] Countdown timer updates in real-time (WebSocket or polling)
- [ ] Commit action requires authentication (redirect to login if not logged in)
- [ ] Empty state: "কোনো জরুরী রিকোয়েস্ট নেই। আপনি যখন রক্তদাতা হিসেবে রেজিস্ট্রার করবেন, তখন নতুন রিকোয়েস্ট এলে নোটিফিকেশন পাবেন।"
- [ ] Cards are shareable individually (share button on each card)

**Technical Notes:**
- Countdown timer: Calculate from `BloodRequest.deadline`. Use `setInterval` every 60 seconds for updates.
- Social proof ("X donors committed"): Real-time count from `DonationHistory WHERE requestId=X AND status='COMMITTED'`
- "Matches my blood group": Requires donor context. If not logged in or no donor profile, hide this filter.

---

### 5.5 Donor Registration & Onboarding (`/register`)

**Requirement ID:** REG-001  
**Priority:** P0  
**User Story:** As a potential donor, I want to register quickly with my phone number, understand the impact I can make, and feel immediately welcomed into a community, so I complete registration and return.

#### 5.5.1 Registration Wizard (3 Steps)

**Step 1: Blood Group & Motivation**

| Element | Specification |
|---------|---------------|
| **Question** | "আপনার রক্তের গ্রুপ কী?" (What is your blood group?) |
| **Input** | 8 large tappable cards for each blood group, each with: <br>• Blood group text (e.g., "A+")<br>• Prevalence in Bangladesh: "জনসংখ্যার ২৪%" (24% of population)<br>• Color-coded (red tones) |
| **Motivational Microcopy** | After selection, dynamic text appears: "A+ রক্তের জন্য গত ৩০ দিনে আপনার এলাকায় ১৫টি রিকোয়েস্ট এসেছে। আপনার মতো ১২৩ জন A+ ডোনার আছেন।" |
| **Continue Button** | "পরবর্তী ধাপ" (Next Step) — enabled after selection |

**Step 2: Location**

| Element | Specification |
|---------|---------------|
| **Question** | "আপনি কোথায় থাকেন?" (Where do you live?) |
| **Input** | Cascading dropdowns: বিভাগ (Division) → জেলা (District) → থানা (Thana)<br>Auto-detect from browser geolocation if permitted |
| **Motivational Microcopy** | After selection: "আপনার থানায় বর্তমানে ৪৭ জন রক্তদাতা আছেন। আপনি ৪৮তম!" |
| **Continue Button** | "পরবর্তী ধাপ" |

**Step 3: Contact & Account**

| Element | Specification |
|---------|---------------|
| **Question** | "আপনার নাম ও ফোন নাম্বার দিন" (Share your name and phone number) |
| **Inputs** | • Full Name (Bangla or English) — text input<br>• Phone Number — `01XXXXXXXXX` format<br>• Email (optional but encouraged — for recovery)<br>• Password — with strength indicator |
| **Privacy Notice** | Checkbox: "আমি সম্মতি দিচ্ছি যে জরুরী রিকোয়েস্টের জন্য আমার ফোন নাম্বার ডোনারকে দেখানো হবে" (I consent to my phone number being shared for emergency requests) — required |
| **Submit Button** | "রক্তদাতা হিসেবে যোগ দিন" (Join as a Donor) |

**Step 4 (Post-Registration): Celebration Screen**

```
🎉 অভিনন্দন, [নাম]!

আপনি এখন ৫০০+ রক্তদাতার নেটওয়ার্কের অংশ!

[Animated confetti or simple celebration animation]

আপনার পরবর্তী পদক্ষেপ:
□ ইমেইল ভেরিফাই করুন → ৫০ বোনাস পয়েন্ট
□ আপনার প্রোফাইল ফেসবুকে শেয়ার করুন → ২৫ বোনাস পয়েন্ট
□ কাছের রিকোয়েস্ট দেখুন → হতে পারে আপনি আজই কারো জীবন বাঁচাতে পারেন

[আমার ড্যাশবোর্ডে যান] [রিকোয়েস্ট দেখুন]
```

#### 5.5.2 Registration Technical Requirements

**Acceptance Criteria:**
- [ ] Step 1 loads instantly (no API calls needed, blood groups are static)
- [ ] Step 2 district auto-detection works before user interaction
- [ ] Step 3 phone validation catches invalid Bangladeshi numbers
- [ ] Password strength indicator shows visual feedback (red/yellow/green)
- [ ] On successful registration: JWT access token + httpOnly refresh cookie set
- [ ] Email verification email sent within 5 seconds (Nodemailer via Mailtrap in dev)
- [ ] Phone number uniqueness enforced at database level
- [ ] If registration fails (duplicate phone), show specific error in Bangla: "এই ফোন নাম্বারটি আগে থেকেই নিবন্ধিত"

**Technical Notes:**
- Blood group prevalence data: Static JSON — A+(24%), B+(32%), O+(30%), AB+(8%), negatives are rarer
- Location data: Already in `constants/` in your frontend. Verify cascading behavior.
- Auto-detection: `navigator.geolocation.getCurrentPosition()` → reverse geocode to district. Fallback: IP-based using free service.
- Add `phone` field uniqueness constraint in User model (if not already)
- Add `gender` field to DonorProfile (if not already) — needed for search filter

---

### 5.6 Donor Dashboard (`/dashboard/donor`)

**Requirement ID:** DASH-D-001  
**Priority:** P0  
**User Story:** As a registered donor, I want to see urgent requests near me first, track my donations and points, and share my impact, so I feel motivated to donate again.

#### 5.6.1 Dashboard Layout

**Priority Order of Sections (What Donor Sees First):**

```
┌─────────────────────────────────────────┐
│ SECTION 1: জরুরী রিকোয়েস্ট               │
│ "আপনার কাছেই ৩টি জরুরী রিকোয়েস্ট"         │
│ [Request Card 1] [Request Card 2] [Card 3]│
│ [সব রিকোয়েস্ট দেখুন →]                   │
├─────────────────────────────────────────┤
│ SECTION 2: আমার প্রভাব (My Impact)       │
│ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐    │
│ │ ৫ বার │ │ ৮৫০  │ │ গোল্ড │ │ ১৫    │    │
│ │ রক্ত-  │ │ পয়েন্ট│ │ ডোনার │ │ জীবন  │    │
│ │ দান    │ │      │ │       │ │ বাঁচানো│    │
│ └──────┘ └──────┘ └──────┘ └──────┘    │
├─────────────────────────────────────────┤
│ SECTION 3: দ্রুত অ্যাকশন (Quick Actions) │
│ [রক্তদান লগ করুন] [প্রোফাইল শেয়ার]       │
│ [রিওয়ার্ড দেখুন] [মেসেজ]                │
├─────────────────────────────────────────┤
│ SECTION 4: আমার ব্যাজ (My Badges)        │
│ [🏅 প্রথম রক্তদান] [⭐ ৫+ ডোনেশন]         │
│ [সব ব্যাজ দেখুন →]                       │
├─────────────────────────────────────────┤
│ SECTION 5: সাম্প্রতিক কার্যক্রম            │
│ • ১৫ জুন: O+ রক্তদান, ধানমন্ডি           │
│ • ১০ জুন: "জরুরী রিকোয়েস্ট"-এ কমিট করেছেন│
│ [সম্পূর্ণ ইতিহাস দেখুন →]                │
└─────────────────────────────────────────┘
```

#### 5.6.2 Donation Logging Flow

**Requirement ID:** DASH-D-002  
**Priority:** P0

**Step-by-Step Donation Logging:**

1. Donor clicks "রক্তদান লগ করুন" (Log Donation)
2. Form opens with:
   - **তারিখ** (Date) — date picker, defaults to today
   - **রক্তের গ্রুপ** — pre-filled from profile, editable
   - **স্থান** (Location) — "কোথায় রক্তদান করেছেন?" text input or select from hospital list
   - **রোগীর নাম** (Patient Name) — optional
   - **রিকোয়েস্ট লিংক** — if donated via platform request, link it
   - **সার্টিফিকেট আপলোড** (Certificate Upload) — image upload, drag & drop or camera capture
   - **নোট** (Notes) — optional textarea

3. On Submit:
   - **Immediate:** 100 points awarded, status = `PENDING_VERIFICATION`
   - Confirmation: "আপনার রক্তদান লগ করা হয়েছে! ১০০ পয়েন্ট পেয়েছেন। ভেরিফিকেশন হলে আরও ৫০ পয়েন্ট পাবেন।"
   - **Donation Card Auto-Generated:** Shareable image with donor name, blood group, donation count, date

4. **Verification (by Manager/Admin):**
   - Manager reviews certificate → approves
   - Bonus 50 points awarded
   - Status updated to `VERIFIED`
   - Check for badge eligibility → auto-award
   - Notification: "আপনার রক্তদান ভেরিফাই হয়েছে! +৫০ পয়েন্ট। এখন আপনার মোট পয়েন্ট ৯৫০।"

**Acceptance Criteria:**
- [ ] Image upload works on mobile (camera or gallery)
- [ ] Image max size 5MB, formats: JPG, PNG, WebP
- [ ] Points awarded immediately on log, not waiting for verification
- [ ] Donation card generated within 3 seconds of submission
- [ ] Donation card is downloadable and shareable
- [ ] Error handling: If image upload fails, donation log still succeeds (without image)

**Technical Notes:**
- Donation card generation: Use `canvas` (HTML5 Canvas API) or a library like `html-to-image`. Generate a branded card with donor details. Allow download as PNG. Component: `cardGenerator.ts` already exists in your project — verify functionality.
- Image upload: Multer middleware on backend, store in `/uploads/` or cloud storage (Cloudinary free tier)
- Badge eligibility check: After verification, run badge evaluation function (see Gamification section)

#### 5.6.3 Profile Sharing

**Requirement ID:** DASH-D-003  
**Priority:** P1

**Shareable Donor Profile Card:**

When donor clicks "প্রোফাইল শেয়ার করুন" (Share Profile):

1. Generate a beautiful image card:
   - Donor photo or avatar initial
   - Name (first name only for privacy)
   - Blood group prominently displayed
   - "৫ বার রক্তদান • গোল্ড ডোনার"
   - "AmrRokto.com-এ যুক্ত হোন"
   - QR code linking to platform

2. Share options:
   - 📢 ফেসবুকে শেয়ার করুন (Share on Facebook) — pre-filled post
   - 📥 ইমেজ ডাউনলোড করুন (Download Image)
   - 🔗 লিংক কপি করুন (Copy Link) — copies profile URL

3. Facebook pre-filled text (in Bangla):
   ```
   আমি AmrRokto-তে একজন রক্তদাতা। 🩸
   আমার রক্তের গ্রুপ: O+
   এখন পর্যন্ত ৫ বার রক্তদান করেছি।
   
   আপনার এলাকায় রক্তদাতা খুঁজুন বা রক্তদাতা হিসেবে যোগ দিন:
   https://AmrRokto.com
   
   #AmrRokto #রক্তদান #জীবনবাঁচান
   ```

**Acceptance Criteria:**
- [ ] Profile card image generates correctly with dynamic data
- [ ] Facebook share opens in new window with pre-filled text
- [ ] Share action awards 25 bonus points (one-time only)
- [ ] Tracking: Record share action in database for analytics

---

### 5.7 Donation Verification Flow

**Requirement ID:** VER-001  
**Priority:** P0  
**User Story:** As a manager or admin, I want to verify donor commitments and donation logs, so the platform maintains trust and donors get proper recognition.

#### 5.7.1 Two-Tier Verification System

**Tier 1: Auto-Verification (Instant)**

| Trigger | Action | Points |
|---------|--------|--------|
| Donor logs donation with certificate upload | Status: `PENDING_VERIFICATION` | +100 instantly |
| Donor commits to request | Status: `COMMITTED` | +10 instantly |

**Tier 2: Manual Verification (Manager/Admin)**

| Trigger | Action | Points |
|---------|--------|--------|
| Manager reviews certificate and approves | Status: `VERIFIED` | +50 bonus |
| Manager confirms donor fulfilled request commitment | Status: `VERIFIED` | +50 bonus |

**Verification Dashboard (Manager View):**

- List of pending verifications
- Each item shows: Donor name, blood group, date, uploaded certificate (thumbnail), linked request (if any)
- Actions: "ভেরিফাই করুন" (Verify) / "বাতিল করুন" (Reject with reason)
- Bulk verify option

**Acceptance Criteria:**
- [ ] Tier 1 points awarded synchronously on donation log
- [ ] Tier 2 verification triggers badge eligibility check
- [ ] Rejected verifications allow donor to resubmit with new certificate
- [ ] Verification actions are logged in audit trail
- [ ] Manager can add note when verifying/rejecting

---

### 5.8 Rewards Marketplace (`/rewards`)

**Requirement ID:** REW-001  
**Priority:** P1  
**User Story:** As a donor, I want to redeem my points for real-world benefits, so my donations feel tangibly appreciated.

#### 5.8.1 Marketplace Design

**Pre-Seeded Rewards (Launch Day):**

| Reward | Points Cost | Category | Partner | Details |
|--------|-------------|----------|---------|---------|
| ১০% ঔষধে ছাড় (10% Medicine Discount) | 500 | স্বাস্থ্য (Health) | Local pharmacy partner | One-time use voucher code |
| ফ্রি রক্তের গ্রুপ পরীক্ষা (Free Blood Group Test) | 300 | স্বাস্থ্য (Health) | Diagnostic center partner | At specific location |
| মোবাইল রিচার্জ ৳৫০ (৳50 Mobile Recharge) | 400 | টেলিকম (Telecom) | Platform-funded | Bikash/Nagad/Robi/Airtel |
| খাবার ভাউচার (Meal Voucher) | 600 | খাবার (Food) | Local restaurant partner | ৳150 off |
| পাথাও রাইড ৳১০০ ছাড় (৳100 off Pathao Ride) | 500 | পরিবহন (Transport) | Pathao partnership | To/from blood banks |
| "লিজেন্ডারি ডোনার" টি-শার্ট (Legendary Donor T-Shirt) | 2000 | বিশেষ (Special) | Platform-branded | Physical reward |

**Reward Card Design:**

```
┌─────────────────────────┐
│ [Icon]                  │
│ ১০% ঔষধে ছাড়           │
│                         │
│ 🏥 লাজ ফার্মাসি         │
│ 📍 ধানমন্ডি, ঢাকা       │
│                         │
│ ⭐ ৫০০ পয়েন্ট           │
│ 📦 ১৫টি বাকি আছে         │
│                         │
│ [রিডিম করুন]            │
└─────────────────────────┘
```

**Redemption Flow:**
1. Donor clicks "রিডিম করুন" (Redeem)
2. Confirmation: "৫০০ পয়েন্ট কাটা হবে। আপনি কি নিশ্চিত?"
3. On confirm:
   - Points deducted from donor
   - Voucher code generated (unique, 8-char alphanumeric)
   - Record created in `RedeemedReward`
   - Display: "আপনার ভাউচার কোড: REWARD-ABCD1234। এই কোডটি ৩০ দিনের মধ্যে ব্যবহার করুন।"
   - "ভাউচার ডাউনলোড করুন" (Download Voucher) — PDF or image

**Empty/Coming Soon State (Critical for Launch):**

If fewer than 5 rewards available, show for remaining slots:

```
┌─────────────────────────┐
│ 🔜 শীঘ্রই আসছে...       │
│                         │
│ 🛒 ফ্রি গ্রোসারি ডেলিভারি│
│ 🩺 ফ্রি স্বাস্থ্য পরীক্ষা│
│ 🎁 বিশেষ উপহার           │
│                         │
│ আপনার ব্যবসা এখানে দেখাতে│
│ চান? যোগাযোগ করুন       │
└─────────────────────────┘
```

**Acceptance Criteria:**
- [ ] At least 5 real rewards available at launch (partner with local businesses)
- [ ] Points balance updates in real-time after redemption
- [ ] Voucher codes are unique and trackable
- [ ] "শীঘ্রই আসছে" placeholders show for any empty slots
- [ ] Redemption history visible in donor dashboard

**Partnership Acquisition Strategy (Pre-Launch):**
1. Visit 10 local pharmacies near your area — offer free listing in exchange for 10% discount for donors
2. Reach out to 3 diagnostic centers — offer "free blood group test" partnership (they get foot traffic)
3. Contact Pathao/Uber BD via LinkedIn or email — CSR partnership proposal
4. If partnerships fail: Self-fund 20 mobile recharge vouchers (৳50 each = ৳1,000 total) as seed rewards

---

### 5.9 Messaging System (`/messages`)

**Requirement ID:** MSG-001  
**Priority:** P1  
**User Story:** As a seeker or donor, I want to communicate within the platform without sharing my personal phone number initially, so I can coordinate while maintaining privacy.

#### 5.9.1 Pre-Defined Message Templates

**Before Free Text, Offer Quick Templates:**

| Context | Template (Bangla) | English Translation |
|---------|-------------------|---------------------|
| Donor → Seeker (Interested) | "আমি রক্ত দিতে আগ্রহী। বিস্তারিত জানান।" | "I'm interested in donating. Share details." |
| Donor → Seeker (Coming) | "আমি আসছি। আনুমানিক সময় ৩০ মিনিট।" | "I'm coming. ETA 30 minutes." |
| Donor → Seeker (Can't) | "আমি দুঃখিত, পারব না। বিকল্প খুঁজুন।" | "Sorry, I can't. Find alternative." |
| Seeker → Donor (Details) | "রোগী: [name], হাসপাতাল: [hospital], প্রয়োজন: [units] ইউনিট" | Patient details template |
| Seeker → Donor (Urgent) | "অনুগ্রহ করে তাড়াতাড়ি আসুন। জরুরী অবস্থা।" | "Please come quickly. Emergency." |

**One-Tap Response Buttons:**

After receiving a message, show quick-reply buttons below the message bubble:
- "আমি আসছি" (I'm coming) — green button
- "পারব না" (Can't) — red button
- "বিকল্প খুঁজুন" (Find alternative) — gray button

Tapping inserts the text and sends immediately.

#### 5.9.2 Conversation List & Chat UI

**Conversation List:**
- Show last message preview
- Unread badge count
- Timestamp (relative: "৫ মিনিট আগে", "১ ঘন্টা আগে")
- Sender name and avatar

**Chat UI:**
- Message bubbles (sent vs received styling)
- Timestamp on each message
- Template buttons above text input for new conversations
- Text input with send button
- Character limit: 500

**Acceptance Criteria:**
- [ ] Templates appear automatically when starting a new conversation
- [ ] One-tap response buttons work and send message immediately
- [ ] Real-time or near-real-time delivery (<5 second delay)
- [ ] Messages persist in database
- [ ] Unread count visible in navbar/notification bell

**Technical Notes:**
- Real-time: Consider Socket.IO integration for true real-time. For MVP, polling every 10 seconds via React Query `refetchInterval` is acceptable.
- Templates: Static JSON configuration. Allow admin to add/edit templates in future.

---

### 5.10 Organizations & Hospitals (`/organizations`)

**Requirement ID:** ORG-001  
**Priority:** P1  
**User Story:** As a seeker, I want to see which hospitals are partnered with the platform, so I know this is legitimate and can find blood near medical facilities.

#### 5.10.1 Directory Design

**Pre-Seeded Hospitals (Launch Day):**

Seed 20-30 real Bangladeshi hospitals across major cities:

| Hospital | District | Type |
|----------|----------|------|
| ঢাকা মেডিকেল কলেজ হাসপাতাল (DMCH) | ঢাকা | সরকারি |
| বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয় (BSMMU) | ঢাকা | সরকারি |
| ইবনে সিনা হাসপাতাল | ঢাকা | বেসরকারি |
| ইউনাইটেড হাসপাতাল | ঢাকা | বেসরকারি |
| স্কয়ার হাসপাতাল | ঢাকা | বেসরকারি |
| বারডেম হাসপাতাল | ঢাকা | বিশেষায়িত |
| চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল | চট্টগ্রাম | সরকারি |
| ... (continue for 20-30 total) | | |

**Organization Card:**

```
┌──────────────────────────────┐
│ ✅ কর্মকর্তা দ্বারা পরিচালিত    │ ← If verified manager
│ (বা: 📋 কমিউনিটি লিস্টেড)      │ ← If community-listed
│                              │
│ [Hospital Logo/Placeholder]  │
│ ঢাকা মেডিকেল কলেজ হাসপাতাল    │
│                              │
│ 📍 শাহবাগ, ঢাকা               │
│ 📞 02-55165000               │
│ 🩸 A+: 12 ইউনিট • B+: 8 ইউনিট │ ← If inventory tracked
│                              │
│ 👥 ৩ জন ডোনার সদস্য            │
│ [বিস্তারিত দেখুন]             │
└──────────────────────────────┘
```

**Verification Badges:**
- ✅ "কর্মকর্তা দ্বারা পরিচালিত" (Managed by Official) — green badge, verified by admin
- 📋 "কমিউনিটি লিস্টেড" (Community Listed) — gray badge, added by community/seed

**Acceptance Criteria:**
- [ ] At least 20 hospitals pre-seeded at launch
- [ ] Cards show correct verification status
- [ ] Search/filter by district works
- [ ] Empty state not visible (due to seeding)

**Technical Notes:**
- Hospital data: Seed via Prisma seed script. Include name, district, thana, phone, type (government/private/specialized).
- Manager verification: Admin verifies hospital managers via `/admin/managers/:id/verify`

---

### 5.11 Admin Dashboard (`/dashboard/admin`)

**Requirement ID:** ADM-001  
**Priority:** P1  
**User Story:** As a platform admin, I need tools to manage users, monitor activity, and seed content, so the platform remains healthy and trustworthy.

#### 5.11.1 Admin Features — Prioritized

**Existing Features (Verify & Ensure Functionality):**
- Analytics dashboard
- User management (verify/ban)
- Audit logs
- Badge management
- Rewards management
- System configuration

**New Features for v2.0:**

| Feature | Requirement ID | Priority | Description |
|---------|----------------|----------|-------------|
| **Seed Data Panel** | ADM-002 | P0 | One-click seed: "৫০ জন ডোনার যোগ করুন" (Add 50 donors), "১০টি রিকোয়েস্ট যোগ করুন" (Add 10 requests), "৫টি সাকসেস স্টোরি যোগ করুন" (Add 5 success stories). Generates realistic sample data for launch. |
| **Facebook Post Generator** | ADM-003 | P1 | Admin writes one announcement → generates 5 variant Bangla posts optimized for different Facebook groups. Includes pre-generated hashtags and share images. |
| **Impact Report Generator** | ADM-004 | P1 | Monthly PDF report: "জানুয়ারি ২০২৬: ২৩টি রিকোয়েস্ট, ১৮টি পূরণ, ৫৪ জন জীবন বাঁচানো সম্ভব". Auto-generated from database. |
| **Emergency Broadcast** | ADM-005 | P2 | Send mass notification (in-app + email) to all donors in a specific district. For large-scale emergencies. Rate-limited to once per 24 hours. |
| **Donor Verification Queue** | ADM-006 | P0 | Queue of donation logs awaiting verification. Certificate image review. One-click verify/reject. |

#### 5.11.2 Seed Data Panel — Detailed Specification

**Requirement ID:** ADM-002  
**Priority:** P0

**Panel UI:**

```
┌────────────────────────────────────────────┐
│ 🛠️ সিড ডাটা ম্যানেজমেন্ট                    │
│                                            │
│ বর্তমান স্ট্যাটাস:                          │
│ ডোনার: ২৩ • রিকোয়েস্ট: ৫ • স্টোরি: ০      │
│                                            │
│ ┌────────────────────────────────────────┐ │
│ │ 📊 কুইক সিড                             │ │
│ │                                        │ │
│ │ ডোনার সংখ্যা: [___] (প্রস্তাবিত: ৫০)    │ │
│ │ রিকোয়েস্ট সংখ্যা: [___] (প্রস্তাবিত: ১০)│ │
│ │ স্টোরি সংখ্যা: [___] (প্রস্তাবিত: ৫)    │ │
│ │                                        │ │
│ │ ⚠️ সতর্কতা: এটি রিয়েল ডাটা ওভাররাইট      │ │
│ │ করবে না। শুধু নতুন ডাটা যোগ করবে।       │ │
│ │                                        │ │
│ │ [সিড ডাটা জেনারেট করুন]                 │ │
│ └────────────────────────────────────────┘ │
│                                            │
│ ┌────────────────────────────────────────┐ │
│ │ 🗑️ সিড ডাটা ক্লিনআপ                     │ │
│ │ সব সিড করা ডাটা মুছে ফেলুন (is_seeded     │ │
│ │ ফ্ল্যাগযুক্ত)                            │ │
│ │ [সিড ডাটা মুছুন]                        │ │
│ └────────────────────────────────────────┘ │
└────────────────────────────────────────────┘
```

**Seed Data Generation Rules:**
- All seeded data gets `is_seeded = true` flag in database
- Donors: Random Bangladeshi names, realistic phone numbers (01XXXXXXXXX format), mix of blood groups (weighted by prevalence), distributed across top 10 districts
- Requests: Mix of urgency levels, realistic blood needs, linked to seeded hospitals
- Stories: Composite narratives based on real Bangladeshi blood donation scenarios
- Seeded data is excluded from public stats unless flag ignored

**Acceptance Criteria:**
- [ ] Seed panel generates realistic data without breaking existing functionality
- [ ] Seeded data is clearly distinguishable from real data in database
- [ ] Cleanup function removes only seeded data, not real users
- [ ] Seed panel is accessible only to ADMIN role

**Technical Notes:**
- Add `is_seeded` boolean column to `User`, `BloodRequest`, and any new `SuccessStory` table
- Seed script: Use `faker` library (or custom name/phone generators) for realistic Bangladeshi data
- Do NOT seed into production without clear flagging

---

### 5.12 Static Pages — Trust-Building Content

#### 5.12.1 About Page (`/about`)

**Requirement ID:** STAT-001  
**Priority:** P1

**Content Requirements:**
- **Real team section:** Photos (or placeholder avatars) + names + roles of people behind platform
- **Mission in Bangla:** "আমাদের লক্ষ্য বাংলাদেশের প্রতিটি জরুরী রক্তের প্রয়োজনকে ৩০ মিনিটের মধ্যে ডোনারের সাথে সংযুক্ত করা"
- **Platform origin story:** Why you built this — personal connection if any
- **Trust indicators:** "আমরা কারো সাথে আপনার ব্যক্তিগত তথ্য শেয়ার করি না"

#### 5.12.2 Eligibility Page (`/eligibility`)

**Requirement ID:** STAT-002  
**Priority:** P1

**Interactive Eligibility Checker (New Feature):**

```
"আপনি কি রক্ত দিতে পারবেন?" (Can you donate blood?)

Step 1: আপনার বয়স ১৮-৬০ বছরের মধ্যে? [হ্যাঁ] [না]
Step 2: আপনার ওজন ৫০ কেজির বেশি? [হ্যাঁ] [না]
Step 3: গত ৩ মাসে রক্তদান করেছেন? [হ্যাঁ] [না]
Step 4: আপনার কি কোনো দীর্ঘমেয়াদী রোগ আছে? [হ্যাঁ] [না]
Step 5: আপনি কি বর্তমানে কোনো ওষুধ খাচ্ছেন? [হ্যাঁ] [না]

[ফলাফল দেখুন]

Result: "✅ আপনি রক্তদানের যোগ্য! আজই রক্তদাতা হিসেবে নিবন্ধন করুন।"
or: "❌ আপনি বর্তমানে রক্তদানের যোগ্য নন। [কারণ]। ৩ মাস পর আবার চেষ্টা করুন।"
```

**Static Content:**
- Blood compatibility chart (who can donate to whom) — visual table, not just text
- Temporary deferral reasons (recent illness, travel, medication)
- Permanent deferral reasons

#### 5.12.3 Saved Lives Page (`/saved-lives`)

**Requirement ID:** STAT-003  
**Priority:** P0 (Critical for trust)

**Content Requirements:**
- **5-10 success stories at launch** — either real or clearly marked as "পুনর্নির্মাণ" (reconstruction)
- Each story: Photo (or silhouette), patient name/first name, condition, blood group needed, time to find donor, donor name, outcome quote
- Example: "সায়মা, বয়স ৭, থ্যালাসেমিয়া রোগী। প্রতি মাসে O+ রক্ত প্রয়োজন। AmrRokto-র মাধ্যমে গত ৬ মাসে ৬ বার ডোনার পেয়েছেন। তার মা বলেন: 'এই প্লাটফর্ম আমার মেয়ের জীবন বাঁচিয়েছে।'"
- **Video story** if possible (even one)

**Story Submission Form (Public):**
- "আপনি কি AmrRokto-র মাধ্যমে রক্ত পেয়েছেন বা দিয়েছেন? আপনার গল্প শেয়ার করুন।"
- Name, email, story text, photo upload
- Admin reviews and publishes

#### 5.12.4 FAQ Page (`/faq`)

**Requirement ID:** STAT-004  
**Priority:** P1

**FAQ Categories:**
1. রক্তদান সম্পর্কে (About Blood Donation)
2. নিরাপত্তা (Safety)
3. প্লাটফর্ম ব্যবহার (Using the Platform)
4. পয়েন্ট ও রিওয়ার্ড (Points & Rewards)
5. সংগঠন (Organizations)

**Sample FAQs (Must Include):**
- "রক্তদান কি নিরাপদ?" (Is blood donation safe?)
- "আমার তথ্য কি নিরাপদ?" (Is my information safe?)
- "জরুরী রিকোয়েস্ট করলে কত দ্রুত ডোনার পাবো?" (How quickly will I get a donor?)
- "পয়েন্ট কিভাবে কাজ করে?" (How do points work?)
- "আমি কিভাবে ডোনার ভেরিফাই করবো?" (How do I verify a donor?)

**"আপনার প্রশ্ন জিজ্ঞাসা করুন" Box:**
- Text input → submits to Gemini AI assistant (already planned in AiFeatures.md)
- Responds with grounded answer from FAQ + platform knowledge base
- Fallback: "উত্তর পাচ্ছেন না? আমাদের সাথে যোগাযোগ করুন" → links to `/contact`

#### 5.12.5 Contact Page (`/contact`)

**Requirement ID:** STAT-005  
**Priority:** P1

**Content Requirements:**
- **Emergency Hotlines (Real):**
  - ৯৯৯ (জাতীয় জরুরি সেবা)
  - ১৬২৬৩ (স্বাস্থ্য বাতায়ন)
- **Platform Contact:**
  - Email: support@AmrRokto.com
  - WhatsApp number (your team's number)
  - Facebook page link
- **Contact Form:** Name, email, subject, message
- **Office Hours:** "আমরা ২৪/৭ ইমেইল চেক করি। জরুরী প্রয়োজনে WhatsApp-এ যোগাযোগ করুন।"

#### 5.12.6 Privacy Policy & Terms of Service

**Requirement ID:** STAT-006  
**Priority:** P0 (Legal necessity)

**Privacy Policy — Must Include (In Simple Bangla):**
- What data we collect (name, phone, email, blood group, location, donation history)
- How we use it (matching, notifications, platform improvement)
- Who we share it with (only with matched donors/seeker when you commit)
- How long we keep it
- User rights (delete account, export data)

**Bangla Summary at Top (Required):**
```
সহজ ভাষায়:
• আমরা আপনার তথ্য বিক্রি করি না।
• শুধুমাত্র জরুরী রক্তের রিকোয়েস্টের জন্য আপনার ফোন নাম্বার 
  ম্যাচিং ডোনার/সিকারকে দেখানো হয়।
• আপনি চাইলে যেকোনো সময় আপনার অ্যাকাউন্ট ডিলিট করতে পারবেন।
• আমরা আপনার ডোনেশন হিস্টরি সংরক্ষণ করি আপনার ইমপ্যাক্ট 
  ট্র্যাক করার জন্য।
```

---

### 5.13 Help Center + AI Assistant (`/help`)

**Requirement ID:** HELP-001  
**Priority:** P2  
**User Story:** As a confused user, I want to ask questions in natural Bangla and get instant answers, so I don't leave the platform frustrated.

#### 5.13.1 AI Assistant Enhancements

**Voice Input:**
- Microphone button in AI chat input
- Uses Web Speech API for Bangla (BN-BD) voice recognition
- Falls back silently if browser doesn't support (Chrome Android supports Bangla voice)
- Converts speech to text → sends to Gemini → returns text response

**Prompt Chips (Pre-Written Questions):**
Instead of blank chat, show tappable chips:
- "কিভাবে রক্তদাতা হবো?" (How to become a donor?)
- "জরুরী রক্ত চাই" (Need emergency blood)
- "পয়েন্ট কিভাবে পাবো?" (How to earn points?)
- "আমার তথ্য নিরাপদ তো?" (Is my info safe?)
- "রক্তদানের যোগ্যতা কী?" (What are eligibility requirements?)

**Gemini Grounding:**
- System prompt must include: FAQ content + eligibility rules + blood compatibility chart + platform features + Bangladesh-specific blood donation guidelines
- Temperature: 0.3 (factual, not creative)
- Max output tokens: 300 (concise answers)
- Fallback if Gemini unavailable: Show static FAQ search results

**Acceptance Criteria:**
- [ ] Voice input works on Chrome Android (primary target)
- [ ] Prompt chips are clickable and populate chat
- [ ] AI responds in Bangla when question is in Bangla
- [ ] Response time <3 seconds (use streaming if possible)
- [ ] Error handling: "দুঃখিত, এই মুহূর্তে AI সহায়ক অনুপলব্ধ। অনুগ্রহ করে FAQ দেখুন বা আমাদের সাথে যোগাযোগ করুন।"

---

## 6. Non-Functional Requirements

### 6.1 Performance

| Metric | Target | Measurement Method |
|--------|--------|-------------------|
| **Time to First Byte (TTFB)** | <500ms | Lighthouse / Vercel Analytics |
| **Largest Contentful Paint (LCP)** | <2.5s on 4G, <4s on 3G | Lighthouse |
| **First Input Delay (FID)** | <100ms | Lighthouse |
| **Cumulative Layout Shift (CLS)** | <0.1 | Lighthouse |
| **API Response Time (p95)** | <300ms for reads, <1s for writes | Backend monitoring |
| **Image Optimization** | All images served as WebP with fallback, max 100KB | Build-time optimization |
| **Bundle Size** | Total JS bundle <200KB gzipped | Next.js bundle analyzer |

### 6.2 Mobile-First Design

| Requirement | Specification |
|-------------|---------------|
| **Responsive Breakpoints** | Mobile: 320-640px, Tablet: 641-1024px, Desktop: 1025px+ |
| **Touch Targets** | Minimum 48×48px for all interactive elements |
| **Font Size** | Base 16px, minimum 14px for body text |
| **Viewport** | `<meta name="viewport" content="width=device-width, initial-scale=1.0">` |
| **Testing** | Test on actual Android device (mid-range, 3G throttling) |
| **PWA** | Add `manifest.json` and service worker for "Add to Home Screen" capability |

### 6.3 Accessibility

| Requirement | Specification |
|-------------|---------------|
| **Color Contrast** | WCAG AA minimum (4.5:1 for normal text, 3:1 for large text) |
| **Alt Text** | All images have descriptive `alt` attributes |
| **ARIA Labels** | All interactive elements have appropriate ARIA labels |
| **Keyboard Navigation** | All functionality accessible via keyboard |
| **Screen Reader** | Bangla content testable with screen reader (though limited support) |

### 6.4 Security

| Requirement | Implementation |
|-------------|----------------|
| **JWT Rotation** | Access token 15min, refresh token 7 days, rotation on refresh — Already implemented |
| **Rate Limiting** | Public endpoints: 100 req/15min per IP, Auth endpoints: 5 req/15min |
| **Input Sanitization** | All user inputs sanitized against XSS |
| **SQL Injection** | Prisma ORM prevents injection (parameterized queries) |
| **Phone Number Privacy** | Phone numbers only visible after mutual commitment or login |
| **Audit Trail** | Log all critical actions (view phone, verify donation, ban user) — Already implemented |
| **CORS** | Restrict to `CLIENT_URL` only |

### 6.5 Scalability (Post-100 Users)

| Milestone | Capacity Target | Action |
|-----------|----------------|--------|
| 100 users | 100 concurrent requests/day | Current stack sufficient |
| 1,000 users | 500 concurrent requests/day | Add Redis caching, optimize DB queries |
| 10,000 users | 2,000 concurrent requests/day | Migrate to managed PostgreSQL, CDN for static assets, load balancer |

---

## 7. Gamification & Rewards System

### 7.1 Points System

| Action | Points | Notes |
|--------|--------|-------|
| Register as donor | 50 | One-time |
| Complete profile (add photo, location, availability) | 50 | One-time |
| Verify email | 25 | One-time |
| Share donor profile on Facebook | 25 | One-time |
| Log a donation (with certificate) | 100 | Per donation, awarded instantly |
| Donation verified by manager | +50 | Bonus on top of log points |
| Commit to a request | 10 | Per commitment |
| Refer a friend (they register with your code) | 50 | Per successful referral (future feature) |
| Respond to emergency request within 30 min | +25 | Bonus on commitment |
| Donation on special dates (Victory Day, Eid, etc.) | 2x points | Limited-time events |

### 7.2 Tier Ranks

| Tier | Points Required | Badge Name (Bangla) | Perks |
|------|-----------------|---------------------|-------|
| 🥉 ব্রোঞ্জ (Bronze) | 0-499 | নবীন রক্তদাতা (New Donor) | Basic profile badge |
| 🥈 সিলভার (Silver) | 500-999 | নিয়মিত রক্তদাতা (Regular Donor) | 5% extra points on donations |
| 🥇 গোল্ড (Gold) | 1000-2499 | সম্মানিত রক্তদাতা (Honored Donor) | Priority matching, 10% extra points |
| 💎 প্লাটিনাম (Platinum) | 2500-4999 | অসাধারণ রক্তদাতা (Outstanding Donor) | Featured on homepage, exclusive rewards |
| 👑 টাইটানিয়াম (Titanium) | 5000+ | কিংবদন্তি রক্তদাতা (Legendary Donor) | Custom profile badge, physical certificate, annual recognition |

### 7.3 Badges

| Category | Badge | Criteria |
|----------|-------|----------|
| **Milestone** | 🩸 প্রথম রক্তদান (First Donation) | 1 verified donation |
| | ⭐ ৫+ ডোনেশন (5+ Donations) | 5 verified donations |
| | 🌟 ১০+ ডোনেশন (10+ Donations) | 10 verified donations |
| | 💫 ২৫+ ডোনেশন (25+ Donations) | 25 verified donations |
| | 👑 ৫০+ ডোনেশন (50+ Donations) | 50 verified donations |
| **Community** | 🤝 সাহায্যকারী (Helper) | Committed to 10 requests |
| | 📢 প্রচারক (Promoter) | Shared profile/request 10 times |
| | 👥 রেফারার (Referrer) | Referred 5 friends |
| **Special** | 🎖️ জরুরী বীর (Emergency Hero) | Responded to 5 emergency requests |
| | 🕌 রমজান দাতা (Ramadan Donor) | Donated during Ramadan |
| | 🎄 বিজয় দিবস দাতা (Victory Day Donor) | Donated on Dec 16 |
| | 🏥 হাসপাতাল অংশীদার (Hospital Partner) | Donated at same hospital 5+ times |
| **Rare Blood** | 🔮 বিরল রক্ত (Rare Blood) | AB- or B- blood group with 5+ donations |

### 7.4 Rewards Management

**For Managers/Admins:**
- Create reward: Title, description, points cost, category, stock quantity, voucher type (alphanumeric code or QR)
- Track redemptions: Who redeemed, when, voucher status (unused/used/expired)
- Auto-expire vouchers after 30 days if not used

**For Donors:**
- Browse marketplace by category
- Filter by points cost
- Redeem with one click
- View redemption history
- Download/share voucher

---

## 8. Trust & Safety Architecture

### 8.1 Progressive Information Disclosure

| Tier | Condition | Information Visible |
|------|-----------|---------------------|
| **Public (Not Logged In)** | Anyone visiting `/donors` | Name (first name only), blood group, district, thana, donation count, tier badge, availability status |
| **Logged In (Any Role)** | Authenticated user | Above + full name, partial phone (01XXXXX123), "Show Phone" button |
| **Committed (Request Context)** | Donor clicked "I want to help" on a request | Full phone number revealed to request creator only |
| **Verified Manager** | Admin-verified hospital manager | Can view full details of donors in their district for request management |

### 8.2 Verification Levels

| Entity | Verification Method | Badge |
|--------|---------------------|-------|
| **Donor — Email** | Token-based email verification | ✓ ইমেইল ভেরিফাইড |
| **Donor — Phone** | OTP via SMS (future) | ✓ ফোন ভেরিফাইড |
| **Donor — Identity** | NID upload (future, optional) | ✓ আইডি ভেরিফাইড |
| **Donor — Blood Group** | Upload blood group test report (future) | ✓ ব্লাড গ্রুপ ভেরিফাইড |
| **Manager** | Admin manually verifies hospital affiliation | ✅ কর্মকর্তা দ্বারা পরিচালিত |
| **Organization** | Manager verified → org auto-verified | ✅ ভেরিফাইড সংগঠন |

### 8.3 Abuse Prevention

| Concern | Mitigation |
|---------|------------|
| **Fake requests** | Rate limiting on emergency form (3 per phone number per day). Phone number uniqueness check. Suspicious pattern detection (future AI feature). |
| **Harassment of donors** | Phone number hidden behind "Show" button. Audit log of every phone reveal. Donors can block specific seekers. "Report" button on messages. |
| **Fake donation logs** | Certificate upload required. Manager verification. Pattern detection on repeated logs. |
| **Points farming** | Daily limits on point-earning actions. Admin review for suspicious activity. |
| **Spam requests** | Admin ability to close/ban requests. User reporting. |

### 8.4 Audit Trail (Already Implemented — Verify)

| Action | Logged Data |
|--------|-------------|
| User registration | Actor ID, timestamp, IP, email |
| Phone number view | Actor ID, target donor ID, request context, timestamp |
| Donation verification | Manager ID, donation ID, timestamp, status change |
| User ban/unban | Admin ID, target user ID, reason, timestamp |
| Reward redemption | Donor ID, reward ID, points deducted, voucher code |
| System config change | Admin ID, config key, old value, new value, timestamp |

---

## 9. Launch & Distribution Strategy

### 9.1 Pre-Launch Checklist (14 Days Before Launch)

| Task | Owner | Deadline | Status |
|------|-------|----------|--------|
| **Seed 50 donor profiles** in database with realistic Bangladeshi data | Developer | D-14 | ☐ |
| **Seed 10 active blood requests** (mix of blood groups, districts, urgency) | Developer | D-14 | ☐ |
| **Seed 5 success stories** (composite or real with permission) | Developer | D-14 | ☐ |
| **Record 3 video testimonials** (friends/family speaking in Bangla) | Team | D-14 | ☐ |
| **Create Facebook page** with profile picture, cover photo, and seeded content | Team | D-14 | ☐ |
| **Partner with 5 local pharmacies** for rewards (visit in person) | Team | D-10 | ☐ |
| **Partner with 2 diagnostic centers** for free blood group test rewards | Team | D-10 | ☐ |
| **Prepare 20 mobile recharge vouchers** (৳50 each, self-funded) | Team | D-7 | ☐ |
| **Final QA on mobile** (real Android device, 3G throttling) | Developer | D-3 | ☐ |
| **Load test** (simulate 50 concurrent users) | Developer | D-2 | ☐ |
| **Prepare Facebook group post templates** (5 variant Bangla posts) | Team | D-1 | ☐ |
| **Deploy to production** (Vercel/Netlify) | Developer | D-1 | ☐ |

### 9.2 Launch Day Activities (Day 0)

| Time | Activity | Channel | Expected Reach |
|------|----------|---------|----------------|
| 9:00 AM | Post on personal Facebook timeline with emotional video + link | Personal FB | 500-1000 friends |
| 9:30 AM | Share in university batch group (BUET/NSU/DU/BRAC/etc.) | FB Group | 200-400 batchmates |
| 10:00 AM | Post in "রক্তদাতা" Facebook groups (start with 3 groups) | FB Groups | 50K-200K members each |
| 10:30 AM | Message 20 friends individually on Messenger asking to register | Messenger | 20 direct asks |
| 11:00 AM | Post in "ঢাকা টু-লেট" / "বাসা ভাড়া" groups (context: "ঢাকায় নতুন? রক্তদাতা নেটওয়ার্কে যুক্ত হোন") | FB Groups | 100K+ members |
| 12:00 PM | Email to university club mailing lists | Email | 500-1000 |
| 3:00 PM | Post in LinkedIn (professional angle: "Building tech for social good in Bangladesh") | LinkedIn | 200-500 |
| 6:00 PM | Share first success story (seeded) on Facebook page | FB Page | Organic |
| 9:00 PM | Check analytics — respond to all comments and messages | All channels | — |

### 9.3 Growth Activities (Week 2-4)

| Week | Activity | Goal |
|------|----------|------|
| **Week 2** | Reach out to 5 university clubs (BUET Career Club, NSU ACM, DU IT Society, BRACU BC, IUT PS) — ask them to share with members | 50 new registrations |
| **Week 2** | Post in 10 more Facebook groups (health, medical, university, local community) | 30 new registrations |
| **Week 3** | Reach out to 3 micro-influencers (Bangladeshi tech/health bloggers with 2K-10K followers) for shoutout | 20 new registrations |
| **Week 3** | Physical poster at 10 pharmacies (A4 size, QR code) | Passive registration |
| **Week 4** | Mosque/community center announcements in your area | 20 new registrations |
| **Week 4** | First "Donor of the Month" feature on Facebook page | Engagement + sharing |

### 9.4 Viral Loop Design

```
Donor registers → Donates blood → Logs donation → Gets points + badge
→ Generates donation card → Shares on Facebook
→ Friends see: "Rafiq just donated blood for the 5th time on AmrRokto"
→ Friends click link → Register as donors
→ [Loop continues]
```

**Key Metrics for Viral Loop:**
- **Share rate:** % of donors who share donation card (target: >30%)
- **Conversion from share:** % of viewers who register (target: >5%)
- **Viral coefficient:** Average new users per existing user (target: >0.3)

### 9.5 Facebook Group Post Templates

**Template 1: Emotional (For Blood Donor Groups)**

```
🩸 আপনার ৩০ মিনিট, কারো সারাজীবন।

আমি AmrRokto নামে একটি প্লাটফর্ম বানিয়েছি যেখানে:
✅ ২ মিনিটে রক্তদাতা খুঁজুন
✅ আপনার এলাকার ভেরিফাইড ডোনার দেখুন
✅ জরুরী রিকোয়েস্ট করলে সাথে সাথে ডোনারদের নোটিফাই করা হয়

একদম ফ্রি, কোনো এড নেই।
আমাদের লক্ষ্য: বাংলাদেশের প্রতিটি রক্তের প্রয়োজনকে ৩০ মিনিটে পূরণ করা।

আপনার এলাকায় কতজন ডোনার আছে দেখুন: [লিংক]

#রক্তদান #AmrRokto #জীবনবাঁচান
```

**Template 2: Donor-Focused (For University Groups)**

```
বন্ধুরা, তোমাদের মধ্যে কে কে রক্তদাতা? 🩸

AmrRokto-তে তোমার রক্তের গ্রুপ রেজিস্টার করলে:
🔔 তোমার এলাকায় জরুরী রক্তের প্রয়োজন হলে নোটিফিকেশন পাবে
⭐ প্রতিবার রক্তদানে পয়েন্ট ও ব্যাজ পাবে
🎁 পয়েন্ট দিয়ে রিওয়ার্ড রিডিম করতে পারবে (ফ্রি মোবাইল রিচার্জ, ওষুধে ছাড়)

আমি ইতিমধ্যে রেজিস্টার করেছি। ৫০০+ ডোনার নেটওয়ার্কের অংশ হও:
[লিংক]
```

**Template 3: Seeker-Focused (For Local Community Groups)**

```
ঢাকায় জরুরী রক্ত প্রয়োজন? 🆘

AmrRokto-তে মাত্র ২ মিনিটে রিকোয়েস্ট করুন:
1️⃣ রক্তের গ্রুপ ও এরিয়া সিলেক্ট করুন
2️⃣ ফোন নাম্বার দিন
3️⃣ আপনার এলাকার ম্যাচিং ডোনারদের সাথে সাথে নোটিফাই করা হবে

গত মাসে আমাদের প্লাটফর্মে ১৫+ রিকোয়েস্ট পূরণ হয়েছে।

এখনই চেক করুন: [লিংক]
```

---

## 10. Success Metrics & KPIs

### 10.1 North Star Metric

**Request Fulfillment Rate:** % of blood requests where at least 1 donor committed within the deadline.

- **Target (30 days):** >50% (15 of 30 requests)
- **Target (90 days):** >70%

### 10.2 Key Performance Indicators

| KPI | Category | Target (30 Days) | Measurement |
|-----|----------|------------------|-------------|
| **Total Registered Donors** | Growth | 100 | Database count |
| **Total Blood Requests Posted** | Engagement | 30 | Database count |
| **Requests Fulfilled** | Impact | 15 | Database count |
| **Average Time-to-First-Commit** | Speed | <45 minutes | Timestamp difference |
| **Donor Return Rate (14-day)** | Retention | >30% | Cohort analysis |
| **Facebook Share Rate** | Virality | >20% | Event tracking |
| **Donation Log Rate** | Engagement | >40% of donors log at least 1 donation | Database count |
| **Email Verification Rate** | Quality | >60% of registered users | Database count |
| **Page Load Time (P95)** | Performance | <3s on 4G | Lighthouse / Analytics |
| **Bounce Rate** | UX | <50% | Analytics |

### 10.3 Dashboard for Tracking (Admin Panel)

Create a "Launch Analytics" view in admin dashboard showing:
- Daily registrations (line chart)
- Daily requests posted (bar chart)
- Requests fulfilled vs pending (pie chart)
- Donor geographic distribution (Bangladesh map with density heatmap)
- Top referral sources (Facebook groups, direct, etc.)

---

## 11. Technical Architecture Considerations

### 11.1 Current Stack (Already Implemented)

| Layer | Technology | Status |
|-------|------------|--------|
| Backend | Express.js + TypeScript | ✅ Implemented |
| ORM | Prisma 5 | ✅ Implemented |
| Database | PostgreSQL | ✅ Implemented |
| Auth | JWT access + httpOnly refresh | ✅ Implemented |
| Frontend | Next.js 16 (App Router) | ✅ Implemented |
| Styling | Tailwind CSS 4 + dark mode | ✅ Implemented |
| State | Zustand + TanStack React Query | ✅ Implemented |
| Forms | React Hook Form + Zod | ✅ Implemented |
| Maps | Leaflet | ✅ Implemented |
| Charts | Recharts | ✅ Implemented |
| Notifications | Sonner + Nodemailer | ✅ Implemented |
| AI | Google Gemini + OpenRouter fallback | ⚠️ Planned |
| Caching | node-cache | ⚠️ Planned |

### 11.2 New Dependencies for v2.0

| Feature | Library/Tool | Purpose |
|---------|--------------|---------|
| **Donation Card Image** | `html-to-image` or `html2canvas` | Generate shareable donation cards |
| **Voice Input** | Web Speech API (built-in browser) | Bangla voice for emergency form + AI chat |
| **Countdown Timers** | `date-fns` or custom hook | Real-time deadline countdowns |
| **Counter Animation** | `countup.js` or custom `useCountUp` | Animated stat numbers |
| **Image Optimization** | `next/image` with `sharp` | Automatic WebP conversion |
| **SMS Gateway** | Infobip / BulkSMSBD / Twilio | SMS notifications for emergency requests |
| **Facebook Share** | `react-share` or custom | Pre-filled Facebook share buttons |
| **PWA** | `next-pwa` | Service worker + manifest for mobile install |
| **Location Auto-Detect** | Browser Geolocation API + IP fallback | Pre-fill district on forms |

### 11.3 Database Schema Changes (if not already present)

| Table | New Column | Type | Purpose |
|-------|------------|------|---------|
| `DonorProfile` | `gender` | Enum (MALE/FEMALE/OTHER) | Search filter |
| `DonorProfile` | `is_seeded` | Boolean | Distinguish seed data |
| `DonorProfile` | `share_count` | Integer | Track social shares |
| `BloodRequest` | `urgency_level` | Enum (IMMEDIATE/TODAY/TOMORROW) | Notification priority |
| `BloodRequest` | `is_seeded` | Boolean | Distinguish seed data |
| `BloodRequest` | `patient_relation` | String | Relationship to patient |
| `BloodRequest` | `voice_note_url` | String | Voice note file path |
| `DonationHistory` | `certificate_url` | String | Uploaded certificate image |
| `DonationHistory` | `is_seeded` | Boolean | Distinguish seed data |
| `SuccessStory` | (New Table) | — | Success stories for saved lives page |
| `SystemConfig` | `key` = `launch_stats` | JSON | Cached public stats |

### 11.4 New API Endpoints Required

| Method | Endpoint | Purpose | Priority |
|--------|----------|---------|----------|
| GET | `/api/public/recent-activity` | Ticker data for homepage | P0 |
| GET | `/api/public/recent-donors?limit=20` | Donor wall for homepage | P0 |
| GET | `/api/search/suggestions?q=...` | Autocomplete for donor search | P0 |
| GET | `/api/public/stats` | Verify existing endpoint returns all fields | P0 |
| POST | `/api/blood-requests/emergency` | Verify existing endpoint works for 2-step form | P0 |
| GET | `/api/public/hospitals/search?q=...` | Hospital autocomplete for emergency form | P1 |
| POST | `/api/donors/me/share` | Record profile share, award points | P1 |
| GET | `/api/admin/seed/status` | Get current seed data counts | P0 |
| POST | `/api/admin/seed/generate` | Generate seed data | P0 |
| DELETE | `/api/admin/seed/cleanup` | Remove seed data | P0 |
| GET | `/api/public/success-stories` | Fetch published stories | P0 |
| POST | `/api/public/success-stories` | Submit story (public) | P1 |

---

## 12. Timeline & Milestones

### 12.1 30-Day Sprint Plan

| Week | Dates | Focus | Deliverables |
|------|-------|-------|-------------|
| **Week 1: Foundation** | Day 1-7 | Critical P0 features | • Emergency form 2-step redesign<br>• Homepage hero + stats + social proof<br>• Donor search with filters<br>• Seed data panel (admin)<br>• Phone number as primary auth option |
| **Week 2: Trust Layer** | Day 8-14 | Trust & virality | • Facebook share buttons on all key pages<br>• Donation card generator<br>• Success stories page + CMS<br>• Progressive information disclosure<br>• Eligibility checker (interactive) |
| **Week 3: Engagement** | Day 15-21 | Gamification & rewards | • Rewards marketplace populated<br>• Donation logging with certificate upload<br>• Dashboard redesign (requests-first)<br>• Messaging templates<br>• Badge auto-award system test |
| **Week 4: Launch Prep** | Day 22-28 | Testing & seeding | • Seed all data (50 donors, 10 requests, 5 stories)<br>• Record video testimonials<br>• Mobile QA (real device, 3G)<br>• Performance optimization<br>• Facebook page content prepared<br>• Partnership confirmations |

| **Day 29** | — | **Soft Launch** | Deploy to production, share with 20 friends for final feedback |
| **Day 30** | — | **Public Launch** | Execute launch day activities |

### 12.2 Post-Launch Iterations

| Week 5-6 | Analyze data, fix UX friction, respond to user feedback |
| Week 7-8 | Add voice input, AI enhancements, SMS notifications |
| Week 9-12 | Scale partnerships, add more rewards, optimize for retention |
| Month 3+ | Mobile app (React Native), SMS-only registration for non-smartphone users |

---

## 13. Risks & Mitigations

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| **Cold start: empty platform deters users** | High | Critical | Aggressive seeding (50+ donors, 10+ requests, 5+ stories). Platform must look alive from day 1. |
| **No real requests in first week** | High | High | Seed requests based on real Facebook group posts. Encourage friends to post test requests. |
| **Donors register but never return** | Medium | High | Immediate onboarding value: show nearby requests right after registration. Email re-engagement after 7 days inactive. |
| **Facebook groups ban promotional posts** | Medium | Medium | Frame posts as "I built this to solve a problem" not "Check out my product." Follow group rules. Prioritize groups that allow tech/social impact posts. |
| **Partnerships fall through** | Medium | Medium | Self-fund initial rewards (৳1,000 for mobile recharge vouchers). Pharmacies approached in-person (higher success rate). |
| **Data privacy concerns** | Low | High | Progressive information disclosure. Clear Bangla privacy summary. Audit trail for all phone reveals. |
| **Competitor launch** | Low | Medium | First-mover advantage in Bangladesh for this specific model. Focus on trust and community, not features. |
| **Scale issues with real-time notifications** | Low | Medium | Start with polling (30s intervals), upgrade to WebSocket at 500+ users. |
| **Legal: health data handling** | Low | Medium | Don't store patient medical records. Only blood group + contact info. Include disclaimer: "প্লাটফর্ম শুধুমাত্র সংযোগ স্থাপন করে, চিকিৎসা সেবা দেয় না।" |

---

## 14. Appendix: API Changes

### 14.1 Modified Endpoints

| Endpoint | Change | Reason |
|----------|--------|--------|
| `GET /api/donors` | Add `gender`, `availability` filter params | Enhanced search |
| `GET /api/donors/:id` | Progressive disclosure based on auth level | Privacy |
| `POST /api/blood-requests/emergency` | Accept `urgency_level`, `patient_relation`, `voice_note` | Enhanced emergency form |
| `GET /api/public/stats` | Add `recent_activity`, `lives_saved_calculation` | Homepage stats |

### 14.2 New Endpoints (Detailed)

**`GET /api/public/recent-activity`**
- Returns: Array of recent platform activities (last 24 hours)
- Format: `[{ type: "DONOR_REGISTERED" | "REQUEST_POSTED" | "DONATION_VERIFIED", message: "রাফিক U. রক্তদাতা হিসেবে যোগ দিয়েছেন", timestamp: "..." }]`
- Cache: 5 minutes

**`GET /api/search/suggestions?q=query&limit=10`**
- Returns: Categorized suggestions
- Format: `{ donors: [...], districts: [...], bloodGroups: [...], hospitals: [...] }`
- Query against: Donor names, district names, thana names, blood groups, hospital names
- Cache: 2 minutes

**`POST /api/admin/seed/generate`**
- Body: `{ donors: 50, requests: 10, stories: 5 }`
- Creates realistic seed data with `is_seeded=true`
- Returns: Count of created records
- Authorization: ADMIN only

**`DELETE /api/admin/seed/cleanup`**
- Deletes all records where `is_seeded=true`
- Returns: Count of deleted records
- Authorization: ADMIN only

### 14.3 WebSocket Events (Future)

| Event | Direction | Payload | Purpose |
|-------|-----------|---------|---------|
| `request:new` | Server → Client | `{ requestId, bloodGroup, district, urgency }` | Real-time new request notification |
| `donor:commit` | Server → Client | `{ requestId, donorName, bloodGroup }` | Notify seeker of new commitment |
| `message:new` | Server → Client | `{ conversationId, senderName, preview }` | Real-time messaging |
| `request:fulfilled` | Server → Client | `{ requestId }` | Notify committed donors request is closed |

---

## Document Approval

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Product Owner | _______________ | _______________ | _______________ |
| Lead Developer | _______________ | _______________ | _______________ |
| UX Designer | _______________ | _______________ | _______________ |

---

**Document Version History**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | Initial | — | Original platform spec |
| 2.0 | Current | PRD Based on Enhancement Analysis | Trust-first redesign, Bangladesh-specific features, launch strategy, detailed page-by-page requirements |

---

**Next Steps:**
1. Review and prioritize P0 items for Week 1 sprint
2. Set up Facebook page and begin recording video testimonials
3. Begin pharmacy/partner outreach for rewards
4. Schedule database migration for new columns
5. Create seed data generation script

---

*This PRD is a living document. All page-by-page requirements in Section 5 are considered the source of truth for implementation. Any deviation must be documented and approved.*