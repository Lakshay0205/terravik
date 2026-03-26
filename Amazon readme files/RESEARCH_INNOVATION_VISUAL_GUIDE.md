# Research & Innovation Page - Visual Guide & Code Examples

## Page Layout Overview

```
┌─────────────────────────────────────────────────────────┐
│                    HEADER SECTION                        │
│  "Research & Innovation"                                │
│  "Advancing agriculture through scientific research..." │
├─────────────────────────────────────────────────────────┤
│              RESEARCH SECTIONS (2x2 GRID)               │
│  ┌──────────────────┐  ┌──────────────────┐            │
│  │ 🤝 Research      │  │ 🔬 Scientific    │            │
│  │ Partnership      │  │ Validation       │            │
│  │ [Details...]     │  │ [Details...]     │            │
│  │ ✓ Point 1        │  │ ✓ Point 1        │            │
│  │ ✓ Point 2        │  │ ✓ Point 2        │            │
│  │ ✓ Point 3        │  │ ✓ Point 3        │            │
│  │ ✓ Point 4        │  │ ✓ Point 4        │            │
│  └──────────────────┘  └──────────────────┘            │
│  ┌──────────────────┐  ┌──────────────────┐            │
│  │ 🌱 Sustainable   │  │ 📈 Crop Yield    │            │
│  │ Innovation       │  │ Improvement      │            │
│  │ [Details...]     │  │ [Details...]     │            │
│  │ ✓ Point 1        │  │ ✓ Point 1        │            │
│  │ ✓ Point 2        │  │ ✓ Point 2        │            │
│  │ ✓ Point 3        │  │ ✓ Point 3        │            │
│  │ ✓ Point 4        │  │ ✓ Point 4        │            │
│  └──────────────────┘  └──────────────────┘            │
├─────────────────────────────────────────────────────────┤
│        UNIVERSITY PARTNERSHIP (3-COLUMN LAYOUT)         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │
│  │ 🏢 Research  │  │ 👨🔬 Expert   │  │ ✅ Validation│ │
│  │ Facilities   │  │ Scientists   │  │ & Testing    │ │
│  │ Description  │  │ Description  │  │ Description  │ │
│  └──────────────┘  └──────────────┘  └──────────────┘ │
├─────────────────────────────────────────────────────────┤
│           RESEARCH STATISTICS (4-COLUMN GRID)           │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐│
│  │   50+    │  │ 25-40%   │  │   100+   │  │   15+    ││
│  │ Research │  │  Yield   │  │  Field   │  │   Pub.   ││
│  │ Projects │  │Improvement│  │  Trials  │  │          ││
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘│
├─────────────────────────────────────────────────────────┤
│          DOCUMENT DOWNLOAD CENTER (3-COLUMN)            │
│  [All] [Certificates] [Research Papers] [Usage Guides] │
│  Showing 9 of 9 documents                               │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │ 📄 PDF       │  │ 📄 PDF       │  │ 📄 PDF       │  │
│  │ Document 1   │  │ Document 2   │  │ Document 3   │  │
│  │ Category     │  │ Category     │  │ Category     │  │
│  │ Description  │  │ Description  │  │ Description  │  │
│  │ 📅 2024 2.4MB│  │ 📅 2024 1.8MB│  │ 📅 2024 2.1MB│  │
│  │ [⬇️ Download]│  │ [⬇️ Download]│  │ [⬇️ Download]│  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│  [More documents...]                                    │
├─────────────────────────────────────────────────────────┤
│              CALL-TO-ACTION SECTION                      │
│  "Interested in Our Research?"                          │
│  "Contact us to learn more..."                          │
│  [Contact Research Team] [View All Publications]        │
└─────────────────────────────────────────────────────────┘
```

## Research Section Card Detailed View

```
┌─────────────────────────────────────────┐
│ Header (Gradient Background)            │
│ 🤝 | Research Partnership               │
│ Collaboration with TMU                  │
├─────────────────────────────────────────┤
│ Detailed Description:                   │
│ TerraVik partners with Teerthanker...   │
│                                         │
│ Key Points:                             │
│ ✓ Joint research initiatives            │
│ ✓ University-backed validation          │
│ ✓ Continuous innovation                 │
│ ✓ Student internship programs           │
└─────────────────────────────────────────┘
```

## Document Card Detailed View

```
┌─────────────────────────────────────┐
│ Header (Primary Color)              │
│ 📄 | [PDF] Badge                    │
│ TMU Research Partnership Agreement  │
│ Certificates                        │
├─────────────────────────────────────┤
│ Official partnership agreement with │
│ Teerthanker Mahaveer University     │
│                                     │
│ 📅 2024 | 💾 2.4 MB                │
│                                     │
│ [⬇️ Download Button]                │
└─────────────────────────────────────┘
```

## Code Examples

### Example 1: Add New Research Section

```javascript
// In src/pages/Research/Research.jsx
// Add to researchSections array

{
  id: 5,
  title: 'Advanced Biotechnology',
  icon: '🧬',
  description: 'Cutting-edge biotech innovations',
  content: [
    'Genetic improvement of crop varieties',
    'Microbial consortium development',
    'Enzyme-based soil amendments',
    'Precision agriculture technology',
  ],
  details: 'Our advanced biotechnology research focuses on developing next-generation solutions for sustainable agriculture. We leverage cutting-edge techniques to create products that maximize yield while minimizing environmental impact.',
}
```

### Example 2: Add New Document

```javascript
// In src/pages/Research/Research.jsx
// Add to documents array

{
  id: 10,
  name: 'Advanced Biotechnology Research',
  category: 'Research Papers',
  type: 'PDF',
  size: '3.5 MB',
  date: '2024',
  description: 'Comprehensive study on genetic improvement and microbial innovations',
}
```

### Example 3: Customize Statistics

```javascript
// In src/pages/Research/Research.jsx
// Modify the statistics array in Research Impact section

[
  { number: '75+', label: 'Active Research Projects' },
  { number: '30-50%', label: 'Average Yield Increase' },
  { number: '150+', label: 'Field Trial Locations' },
  { number: '25+', label: 'Peer-Reviewed Publications' },
]
```

### Example 4: Backend Integration for Downloads

```javascript
// In src/pages/Research/Research.jsx
// Add download handler

const handleDownload = async (document) => {
  try {
    const response = await fetch(`/api/documents/${document.id}/download`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${authToken}`,
      },
    });
    
    if (response.ok) {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${document.name}.pdf`;
      link.click();
      window.URL.revokeObjectURL(url);
    }
  } catch (error) {
    console.error('Download failed:', error);
  }
};
```

### Example 5: Add Document Search

```javascript
// In src/pages/Research/Research.jsx
// Add search state and filter logic

const [searchTerm, setSearchTerm] = useState('');

const filteredDocuments = selectedCategory === 'All'
  ? documents.filter(d => 
      d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  : documents.filter(d => 
      d.category === selectedCategory &&
      (d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       d.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );

// Add search input in JSX
<input
  type="text"
  placeholder="Search documents..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="w-full px-6 py-3 rounded-lg border-2 border-gray-200"
/>
```

## Responsive Behavior

### Mobile (< 640px)
```
┌─────────────────┐
│   Header        │
├─────────────────┤
│ Research Card 1 │
├─────────────────┤
│ Research Card 2 │
├─────────────────┤
│ Research Card 3 │
├─────────────────┤
│ Research Card 4 │
├─────────────────┤
│ Partnership 1   │
├─────────────────┤
│ Partnership 2   │
├─────────────────┤
│ Partnership 3   │
├─────────────────┤
│ Stat 1 | Stat 2 │
├─────────────────┤
│ Stat 3 | Stat 4 │
├─────────────────┤
│ [Filters]       │
├─────────────────┤
│ Document 1      │
├─────────────────┤
│ Document 2      │
├─────────────────┤
│ Document 3      │
└─────────────────┘
```

### Tablet (640-1024px)
```
┌──────────────────────────────┐
│         Header               │
├──────────────────────────────┤
│ Research 1  │  Research 2    │
├──────────────────────────────┤
│ Research 3  │  Research 4    │
├──────────────────────────────┤
│ Part 1 │ Part 2 │ Part 3     │
├──────────────────────────────┤
│ Stat 1 │ Stat 2 │ Stat 3 │ 4 │
├──────────────────────────────┤
│ [Filters]                    │
├──────────────────────────────┤
│ Doc 1  │  Doc 2  │  Doc 3    │
├──────────────────────────────┤
│ Doc 4  │  Doc 5  │  Doc 6    │
└──────────────────────────────┘
```

### Desktop (> 1024px)
```
┌────────────────────────────────────────┐
│              Header                    │
├────────────────────────────────────────┤
│ Research 1  │  Research 2              │
│ Research 3  │  Research 4              │
├────────────────────────────────────────┤
│ Part 1 │ Part 2 │ Part 3               │
├────────────────────────────────────────┤
│ Stat 1 │ Stat 2 │ Stat 3 │ Stat 4     │
├────────────────────────────────────────┤
│ [Filters]                              │
├────────────────────────────────────────┤
│ Doc 1  │  Doc 2  │  Doc 3              │
│ Doc 4  │  Doc 5  │  Doc 6              │
│ Doc 7  │  Doc 8  │  Doc 9              │
└────────────────────────────────────────┘
```

## Animation Sequences

### Research Card Animation
```
1. Page loads
   - Cards scale: 0.9 → 1
   - Cards opacity: 0 → 1
   - Duration: 0.5s
   - Stagger: 0.1s between cards

2. Mouse enters card
   - Shadow elevation: 0.5rem → 1rem
   - Duration: 0.3s

3. Mouse leaves card
   - Shadow elevation: 1rem → 0.5rem
   - Duration: 0.3s
```

### List Item Animation
```
1. Card appears
   - Items opacity: 0 → 1
   - Items x position: -20px → 0
   - Duration: 0.5s
   - Stagger: 0.1s between items
```

### Filter Button Animation
```
1. User clicks button
   - Button scale: 1 → 0.95
   - Duration: 0.1s

2. Button releases
   - Button scale: 0.95 → 1
   - Duration: 0.1s
   - Background color changes to brand color
```

## Document Filtering Examples

### Example 1: Filter by "Certificates"
```
Input: Click "Certificates" button
Results:
- TMU Research Partnership Agreement
- ISO 9001:2015 Certification
- Organic Certification
Count: 3 of 9 documents
```

### Example 2: Filter by "Research Papers"
```
Input: Click "Research Papers" button
Results:
- Soil Microbiome Enhancement Study
- Nutrient Bioavailability Analysis
- Sustainable Agriculture Impact Report
Count: 3 of 9 documents
```

### Example 3: Filter by "Usage Guides"
```
Input: Click "Usage Guides" button
Results:
- Product Usage Guide - Complete
- Dosage and Application Manual
- Troubleshooting Guide
Count: 3 of 9 documents
```

### Example 4: Show All Documents
```
Input: Click "All" button
Results: All 9 documents display
Count: 9 of 9 documents
```

## Testing Scenarios

### Scenario 1: User Browses Research Sections
1. User navigates to research page
2. Page loads with header
3. Research sections animate in
4. User reads research details
5. User hovers over cards (shadow effect)
6. User scrolls to next section

### Scenario 2: User Views University Partnership
1. User scrolls to partnership section
2. 3 partnership cards display
3. User reads about facilities, scientists, validation
4. Cards animate on scroll
5. Hover effects show on cards

### Scenario 3: User Checks Statistics
1. User scrolls to statistics section
2. 4 key metrics display
3. Numbers are color-coded
4. Hover effects show on cards
5. User reads impact information

### Scenario 4: User Filters Documents
1. User scrolls to download center
2. Category filter buttons display
3. User clicks "Certificates" button
4. Documents filter to show 3 certificates
5. Results counter updates to "3 of 9"
6. Button highlights with brand color

### Scenario 5: User Downloads Document
1. User clicks download button
2. Document card expands
3. Download initiates
4. Success feedback appears
5. File downloads to user's device

## Performance Optimization Tips

### 1. Lazy Load Research Sections
```javascript
<motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={containerVariants}
>
  {/* Content */}
</motion.section>
```

### 2. Memoize Document Cards
```javascript
import { memo } from 'react';

const DocumentCard = memo(({ doc, onDownload }) => {
  // Component code
});
```

### 3. Debounce Search
```javascript
import { useCallback } from 'react';

const handleSearch = useCallback(
  debounce((term) => setSearchTerm(term), 300),
  []
);
```

## Accessibility Features

- Semantic HTML structure (h1, h2, h3, section, article)
- ARIA labels on buttons
- Keyboard navigation support
- Focus indicators on interactive elements
- Color contrast meets WCAG standards
- Form labels associated with inputs
- Alt text for icons

## SEO Optimization

- Semantic heading hierarchy
- Descriptive research titles
- Meta tags for research pages
- Structured data for research content
- Mobile-friendly responsive design
- Fast page load times
- Descriptive link text

---

**Version**: 1.0
**Last Updated**: 2024
**Status**: Production Ready
