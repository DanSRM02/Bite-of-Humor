# 🚀 Getting Started

## 🏁 **Quick Start**

### **Prerequisites:**
- Node.js 18+, Git, VS Code

### **Setup:**
1. **Clone:** `git clone [repo] && cd Bite-of-Humor`
2. **Install:** `npm install` 
3. **Environment:** Copiar .env.local.example → .env.local
4. **Database:** `npx supabase db reset`
5. **Start:** `npm run dev`

---

## 📋 **Development Workflow**

### **Antes de Empezar:**
- Leer docs/project-overview.md
- Revisar docs/technical-architecture.md  
- Entender docs/design-system.md

### **Para Cada Feature:**
- Crear/actualizar types en src/types/
- Agregar traducciones a los 9 archivos de locale
- Seguir estructura de componentes
- Usar solo paleta stone/grayscale
- Probar responsive behavior

### **Antes de Commit:**
- `npm run lint && npm run type-check`
- Probar todos los locales
- Verificar responsive design

---

## 🎯 **Prioridades Actuales**

### **Esta Semana:**
1. **Completar Workshop Flow** - Preview + DB saving
2. **API Routes** - CRUD + error handling

### **Próximas 2 Semanas:**
1. **Testing** - Unit + integration tests
2. **SEO** - Sitemap + meta tags

---

## 📁 **Archivos Clave**

### **Arquitectura:**
- `src/app/layout.tsx` - Root layout + providers
- `src/middleware.ts` - Auth + i18n middleware
- `src/contexts/AuthContext.tsx` - Global auth state

### **Navegación:**
- `src/components/layout/navigation/` - Main nav
- `src/components/layout/navigationContext/` - Context cards
- `messages/*.json` - Traducciones

### **Design System:**
- `src/components/inputs/button/` - Button component
- `src/app/globals.css` - Styles + palette

---

## 🛠️ **Comandos**

### **Development:**
- `npm run dev` - Start dev server
- `npm run build` - Production build
- `npm run start` - Start production

### **Quality:**
- `npm run lint` - ESLint check
- `npm run type-check` - TypeScript check
- `npm run test` - Run tests

---

## 🌍 **i18n Workflow**

### **Agregar Traducciones:**
1. Agregar key en `messages/en-US.json`
2. Copiar a los otros 8 archivos
3. Traducir apropiadamente
4. Usar con `useTranslations('namespace')`

### **Locales:** 9 combinaciones (en/de/fr + US/DE/FR)

---

## 🎨 **Design Guidelines**

### **Colores:** Solo stone/grayscale palette
### **Botones:** Primary, secondary, ghost variants
### **Typography:** font-bold para headings, font-normal para body

---

## 🚨 **Common Issues**

### **Auth state not updating:**
- Verificar AuthContext provider en layout

### **Translation missing:**
- Agregar key a TODOS los 9 archivos de locale

### **Styling inconsistency:**
- Usar solo stone/grayscale colors

---

**Goal: Build robust, accessible, multilingual joke platform**

### **For Each Feature:**
- [ ] Create/update types in `src/types/`
- [ ] Add translations to all 9 locale files
- [ ] Follow component structure guidelines
- [ ] Use only stone/grayscale palette
- [ ] Test responsive behavior
- [ ] Add proper TypeScript types
- [ ] Update documentation if needed

### **Before Commit:**
- [ ] Run `npm run lint`
- [ ] Run `npm run type-check`
- [ ] Test all locale combinations
- [ ] Verify responsive design
- [ ] Check accessibility features

---

## 🎯 **Current Priorities**

### **🔥 High Priority (This Week)**
1. **Complete Workshop Flow**
   - Finish joke preview functionality
   - Implement database saving
   - Test complete creation flow

2. **API Routes Completion**
   - CRUD operations for jokes
   - Robust error handling
   - Server-side validation

### **⚡ Medium Priority (Next 2 Weeks)**
1. **Testing Implementation**
   - Critical unit tests
   - Auth integration tests
   - Basic E2E coverage

2. **SEO Optimization**
   - Complete sitemap
   - Structured data
   - Meta tags enhancement

---

## 📁 **Key Files for New Developers**

### **🏗️ Architecture Overview:**
- `src/app/layout.tsx` - Root layout with providers
- `src/middleware.ts` - Auth + i18n middleware
- `src/contexts/AuthContext.tsx` - Global auth state
- `src/i18n/` - Internationalization configuration

### **🧭 Navigation System:**
- `src/components/layout/navigation/` - Main navigation
- `src/components/layout/navigationContext/` - Contextual cards
- `messages/*.json` - All translations

### **🎨 Design System:**
- `src/components/inputs/button/` - Primary button component
- `src/app/globals.css` - Tailwind + custom styles
- Stone/grayscale palette only

### **🔐 Authentication:**
- `src/services/authService.ts` - Auth business logic
- `src/utils/supabase/` - Supabase clients
- `src/hooks/useAuth.tsx` - Auth state hook

---

## 🛠️ **Development Commands**

### **Development:**
```bash
npm run dev          # Start dev server
npm run dev:debug    # Dev with debug mode
npm run build        # Production build
npm run start        # Start production server
```

### **Code Quality:**
```bash
npm run lint         # ESLint check
npm run lint:fix     # Auto-fix linting issues
npm run type-check   # TypeScript check
npm run format       # Prettier formatting
```

### **Testing:**
```bash
npm run test         # Run all tests
npm run test:watch   # Watch mode
npm run test:coverage # Coverage report
npm run test:e2e     # End-to-end tests
```

### **Database:**
```bash
npx supabase start   # Start local Supabase
npx supabase stop    # Stop local Supabase
npx supabase db reset # Reset database
```

---

## 🌍 **Internationalization Workflow**

### **Adding New Translation Keys:**
1. Add key to `messages/en-US.json` (source)
2. Copy to all 8 other locale files
3. Translate appropriately
4. Use with `useTranslations('namespace')`

### **Supported Locales:**
- `en-US`, `en-DE`, `en-FR` (English)
- `de-US`, `de-DE`, `de-FR` (German)
- `fr-US`, `fr-DE`, `fr-FR` (French)

### **Translation Structure:**
```json
{
  "navigation": { ... },
  "auth": { ... },
  "workshop": { ... },
  "common": { ... }
}
```

---

## 🎨 **Design System Guidelines**

### **Color Palette (Stone/Grayscale Only):**
```css
/* Primary Colors */
stone-50, stone-100, stone-200
stone-300, stone-400, stone-500
stone-600, stone-700, stone-800, stone-900

/* Neutral Colors */
gray-50, gray-100, gray-200
gray-300, gray-400, gray-500
gray-600, gray-700, gray-800, gray-900
```

### **Button Variants:**
- `primary` - Stone-700 background
- `secondary` - Stone-200 background
- `ghost` - Transparent with border

### **Typography:**
- Headings: `font-bold` or `font-semibold`
- Body: `font-normal`
- Small text: `text-sm`

---

## 🔍 **Common Development Patterns**

### **Component Structure:**
```tsx
// components/feature/ComponentName/index.tsx
import { useTranslations } from 'next-intl';

interface ComponentNameProps {
  // Props with proper TypeScript
}

export default function ComponentName({ }: ComponentNameProps) {
  const t = useTranslations('namespace');
  
  return (
    <div className="responsive-classes">
      {/* Stone/grayscale styling only */}
    </div>
  );
}
```

### **API Route Pattern:**
```tsx
// app/api/endpoint/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { authService } from '@/services/authService';

export async function POST(request: NextRequest) {
  try {
    // Auth check
    const user = await authService.getCurrentUser();
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    
    // Business logic
    // Return response
  } catch (error) {
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
```

### **Hook Pattern:**
```tsx
// hooks/useFeature.tsx
import { useState, useEffect } from 'react';

export function useFeature() {
  const [state, setState] = useState(initialState);
  
  // Logic here
  
  return { state, actions };
}
```

---

## 🚨 **Common Gotchas & Solutions**

### **1. Authentication Issues:**
- **Problem:** User state not updating
- **Solution:** Check AuthContext provider wrapping
- **Check:** `src/app/layout.tsx` has `<AuthProvider>`

### **2. Translation Missing:**
- **Problem:** `[namespace.key]` showing instead of text
- **Solution:** Add key to ALL 9 locale files
- **Check:** Consistent JSON structure across locales

### **3. Styling Inconsistency:**
- **Problem:** Colors outside stone/grayscale palette
- **Solution:** Use only approved color classes
- **Check:** `docs/design-system.md` for approved colors

### **4. Navigation Issues:**
- **Problem:** Links not working with i18n
- **Solution:** Use `Link` from `@/i18n/navigation`
- **Check:** Import from correct path

### **5. Server/Client Component Confusion:**
- **Problem:** Hydration mismatches
- **Solution:** Use `'use client'` for interactive components
- **Check:** Hooks require client components

---

## 📚 **Learning Resources**

### **Framework Documentation:**
- [Next.js 14 Docs](https://nextjs.org/docs)
- [next-intl Documentation](https://next-intl-docs.vercel.app)
- [Supabase Auth Docs](https://supabase.com/docs/guides/auth)
- [Tailwind CSS](https://tailwindcss.com/docs)

### **Project-Specific Guides:**
- `docs/technical-architecture.md` - System design
- `docs/authentication-system.md` - Auth flows
- `docs/internationalization.md` - i18n patterns

---

## 🤝 **Getting Help**

### **Documentation First:**
1. Check `docs/` folder for comprehensive guides
2. Review `docs/development-status.md` for current state
3. Look for similar patterns in existing code

### **Code Patterns:**
1. Find similar components for reference
2. Check `src/types/` for TypeScript interfaces
3. Review existing translations structure

### **Debugging:**
1. Use VS Code debugger configuration
2. Check browser dev tools for client errors
3. Review Next.js build output for server errors

---

**🎯 Goal: Build robust, accessible, multilingual joke platform with clean architecture**

**🚀 Ready to start? Begin with reviewing the current priorities and diving into the codebase!**
