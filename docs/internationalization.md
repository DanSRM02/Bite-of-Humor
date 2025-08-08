# 🌍 Sistema de Internacionalización

## 🌐 **Configuración**

### **9 Locales Soportados:**
- **en-US, en-DE, en-FR** (Inglés)
- **de-US, de-DE, de-FR** (Alemán)  
- **fr-US, fr-DE, fr-FR** (Francés)

### **Default:** en-US

---

## 📁 **Estructura de Archivos**

### **Archivos por Locale:**
**messages/[locale].json** - 9 archivos con estructura idéntica

### **Organización JSON:**
- **navigation:** Links y menús
- **auth:** Login, registro, logout
- **workshop:** Creación de chistes
- **common:** Textos compartidos
- **error:** Mensajes de error

---

## 🔧 **Implementación**

### **En Componentes:**
- **useTranslations('namespace')** para obtener traducciones
- **t('key')** para renderizar texto traducido
- **Link de @/i18n/navigation** para rutas i18n

### **En Server Components:**
- **getTranslations('namespace')** en funciones async
- **getLocale()** para obtener locale actual

### **Navigation:**
- **Middleware** detecta y redirige según locale
- **Link component** maneja rutas automáticamente
- **useRouter** de @/i18n/navigation para navegación programática

---

## 🌍 **Workflow**

### **Agregar Nueva Traducción:**
1. Agregar key en en-US.json (fuente)
2. Copiar key a los 8 archivos restantes  
3. Traducir apropiadamente
4. Usar en componente con useTranslations

### **Estructura de Keys:**
- **Anidación:** navegation.home.title
- **Interpolación:** "Hello {name}"
- **Pluralización:** count_one, count_other

---

## 🛠️ **Herramientas**

### **Detección de Locale:**
- **URL path:** /en-US/page
- **Accept-Language header** como fallback
- **Cookie** para persistencia

### **Validación:**
- **TypeScript** para keys existentes
- **Build time** validación de archivos JSON
- **Runtime** fallbacks a default locale

---

**Última actualización:** 5 de agosto, 2025

### **Estructura JSON Estándar:**
```json
{
  "ComponentName": {
    "title": "Translated title",
    "subtitle": "Translated subtitle",
    "sections": {
      "sectionName": {
        "heading": "Section heading",
        "content": "Section content"
      }
    },
    "actions": {
      "submit": "Submit button text",
      "cancel": "Cancel button text"
    },
    "validation": {
      "required": "Field is required",
      "invalid": "Invalid input"
    }
  }
}
```

---

## 🔧 **Configuración Técnica**

### **Middleware de Localización:**
```typescript
// src/middleware.ts
import { createMiddleware } from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    '/((?!api|_next|_vercel|.*\\..*).*)',
    '/([\\w-]+)?/users/(.+)'
  ]
};
```

### **Layout con i18n:**
```typescript
// src/app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <html lang={locale}>
        <body>{children}</body>
      </html>
    </NextIntlClientProvider>
  );
}
```

---

## 📝 **Uso en Componentes**

### **Hook useTranslations:**
```typescript
import { useTranslations } from 'next-intl';

const MyComponent = () => {
  const t = useTranslations('ComponentName');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('subtitle')}</p>
      <button>{t('actions.submit')}</button>
    </div>
  );
};
```

### **Traducciones con Parámetros:**
```typescript
// JSON
{
  "userGreeting": "Hello, {name}!",
  "itemCount": "You have {count, plural, =0 {no items} =1 {one item} other {# items}}"
}

// Component
const t = useTranslations('HeaderNavigation');
<span>{t('userGreeting', { name: userName })}</span>
```

### **Traducciones con Rich Text:**
```typescript
// JSON
{
  "description": "This is <important>very important</important> text"
}

// Component
const t = useTranslations('ComponentName');
<p>{t.rich('description', {
  important: (chunks) => <strong className="font-bold">{chunks}</strong>
})}</p>
```

---

## 🗂️ **Organización de Traducciones**

### **Agrupación por Funcionalidad:**
```json
{
  "HeaderNavigation": {
    "navItems": {
      "home": "Home",
      "dashboard": "Dashboard",
      "workshop": "Workshop",
      "community": "Community",
      "logOut": "Log Out"
    },
    "userGreeting": "Hello, {name}!"
  },
  
  "AuthenticationForms": {
    "signUp": {
      "heading": "Create Account",
      "fields": {
        "email": "Email Address",
        "password": "Password"
      },
      "actions": {
        "submit": "Sign Up",
        "cancel": "Cancel"
      }
    }
  },
  
  "WorkshopPage": {
    "leadIn": {
      "heading": "Your Creative Workshop",
      "paragraph": "Build, craft, and perfect your comedy creations."
    },
    "form": {
      "fields": {
        "setup": {
          "label": "Setup",
          "placeholder": "Enter your joke setup..."
        }
      }
    }
  }
}
```

### **Validaciones y Errores:**
```json
{
  "validation": {
    "category": {
      "required": "Category is required",
      "invalid": "Invalid category selected"
    },
    "setup": {
      "required": "Joke setup is required",
      "minWords": "Setup must contain at least 3 words",
      "maxLength": "Setup cannot exceed 200 characters"
    }
  },
  
  "jokeSubmission": {
    "errors": {
      "fixErrors": "Please fix the following errors:",
      "submissionFailed": "Submission failed",
      "generalError": "An error occurred while submitting your joke"
    },
    "success": {
      "submitted": "Your joke has been submitted successfully!"
    }
  }
}
```

---

## 🌍 **Traducciones Específicas por Idioma**

### **Inglés (en-*):**
```json
{
  "NavigationContext": {
    "title": "What's Next?",
    "subtitle": "Continue your journey with these recommended actions",
    "cards": {
      "setup": {
        "nextBuilding": {
          "title": "Next: Start Building",
          "description": "Ready to create your first joke? Enter our workshop and bring your humor to life.",
          "actionText": "Open Workshop"
        }
      }
    }
  }
}
```

### **Alemán (de-*):**
```json
{
  "NavigationContext": {
    "title": "Was kommt als Nächstes?",
    "subtitle": "Setzen Sie Ihre Reise mit diesen empfohlenen Aktionen fort",
    "cards": {
      "setup": {
        "nextBuilding": {
          "title": "Nächster Schritt: Mit dem Erstellen beginnen",
          "description": "Bereit, Ihren ersten Witz zu erstellen? Betreten Sie unsere Werkstatt und erwecken Sie Ihren Humor zum Leben.",
          "actionText": "Werkstatt öffnen"
        }
      }
    }
  }
}
```

### **Francés (fr-*):**
```json
{
  "NavigationContext": {
    "title": "Que faire ensuite ?",
    "subtitle": "Continuez votre parcours avec ces actions recommandées",
    "cards": {
      "setup": {
        "nextBuilding": {
          "title": "Suivant : Commencer à créer",
          "description": "Prêt à créer votre première blague ? Entrez dans notre atelier et donnez vie à votre humour.",
          "actionText": "Ouvrir l'atelier"
        }
      }
    }
  }
}
```

---

## 🛠️ **Herramientas y Utilities**

### **Detección de Locale:**
```typescript
// utils/localeDetection.ts
export function detectBrowserLocale(): string {
  const browserLang = navigator.language || navigator.languages[0];
  const supportedLocales = ['en-US', 'de-DE', 'fr-FR'];
  
  return supportedLocales.includes(browserLang) 
    ? browserLang 
    : 'en-US';
}
```

### **Formateo de Fechas y Números:**
```typescript
// Con next-intl
const t = useTranslations();
const format = useFormatter();

// Fecha
<time>{format.dateTime(new Date(), 'medium')}</time>

// Número
<span>{format.number(1234.56, 'currency')}</span>

// Plural
<span>{t('itemCount', { count: items.length })}</span>
```

### **Link Localizados:**
```typescript
import { Link } from '@/i18n/navigation';

// Automatic locale handling
<Link href="/joke/setup">
  {t('navigation.workshop')}
</Link>
```

---

## 📊 **Mantenimiento de Traducciones**

### **Checklist para Nuevas Traducciones:**
- [ ] ✅ Agregar claves en todos los 9 archivos de locale
- [ ] ✅ Verificar consistencia de estructura JSON
- [ ] ✅ Probar con diferentes longitudes de texto
- [ ] ✅ Validar caracteres especiales (ñ, ü, ç, etc.)
- [ ] ✅ Revisar contexto cultural apropiado

### **Herramientas de Validación:**
```typescript
// Script para validar completitud de traducciones
const validateTranslations = (baseLocale: string, targetLocale: string) => {
  const baseKeys = extractKeys(baseLocale);
  const targetKeys = extractKeys(targetLocale);
  
  const missing = baseKeys.filter(key => !targetKeys.includes(key));
  const extra = targetKeys.filter(key => !baseKeys.includes(key));
  
  return { missing, extra };
};
```

---

## 🌐 **SEO y Meta Tags**

### **Meta Tags Localizados:**
```typescript
// app/[locale]/layout.tsx
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      locale: locale,
    }
  };
}
```

### **Sitemap Multiidioma:**
```typescript
// app/sitemap.ts
export default function sitemap() {
  const locales = ['en-US', 'de-DE', 'fr-FR'];
  const pages = ['/joke/setup', '/joke/build', '/joke/setup/final'];
  
  return locales.flatMap(locale =>
    pages.map(page => ({
      url: `https://biteofhumor.com/${locale}${page}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          locales.map(l => [l, `https://biteofhumor.com/${l}${page}`])
        )
      }
    }))
  );
}
```

---

**Última actualización:** 5 de agosto, 2025
