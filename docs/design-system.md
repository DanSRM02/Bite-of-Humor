# 🎨 Sistema de Diseño

## 🎯 **Principios**
- **Simplicidad:** Menos es más
- **Consistencia:** Experiencia unificada  
- **Accesibilidad:** Para todos los usuarios
- **Performance:** Rápido y eficiente

---

## 🎨 **Paleta Stone/Grayscale**

### **Colores Principales:**
- **stone-50/100:** Backgrounds claros
- **stone-200/300:** Borders y dividers
- **stone-400/500:** Texto secundario
- **stone-600/700:** Texto principal
- **stone-800/900:** Texto enfatizado

### **Variables CSS:**
- **primary-bg-color:** stone-50
- **secondary-bg-color:** stone-800
- **default-text-color:** stone-800
- **subtle-text-color:** stone-500
- **default-border-color:** stone-200

---

## 🔘 **Botones**

### **Variantes:**
- **Primary:** stone-700 bg, texto blanco - Acciones principales
- **Secondary:** stone-200 bg, texto stone-800 - Acciones secundarias  
- **Ghost:** Transparente con border - Acciones terciarias

### **Tamaños:**
- **Large:** 0.75rem padding, text-lg
- **Medium:** 0.5rem padding, text-base  
- **Small:** 0.25rem padding, text-sm

---

## 📱 **Responsive**

### **Breakpoints:**
- **Mobile:** 0-640px (sm)
- **Tablet:** 641-768px (md)
- **Desktop:** 769px+ (lg)

### **Grid System:**
- **Mobile:** 1 columna
- **Tablet:** 2-3 columnas
- **Desktop:** 3-4 columnas

---

## 📝 **Tipografía**

### **Jerarquía:**
- **H1:** text-3xl, font-bold - Títulos principales
- **H2:** text-2xl, font-semibold - Secciones
- **H3:** text-xl, font-medium - Subsecciones
- **Body:** text-base, font-normal - Contenido
- **Small:** text-sm - Texto auxiliar

### **Line Height:**
- **Headings:** leading-tight
- **Body:** leading-relaxed

---

## 🔲 **Layout**

### **Spacing:**
- **Sections:** py-8 md:py-12
- **Components:** p-4 md:p-6
- **Elements:** gap-4

### **Containers:**
- **Max Width:** max-w-6xl
- **Centering:** mx-auto
- **Padding:** px-4 md:px-6

---

## 🎯 **Estados**

### **Hover:**
- **Buttons:** Oscurecer 10%
- **Links:** Underline
- **Cards:** Sombra ligera

### **Focus:**
- **Ring:** ring-2 ring-stone-300
- **Offset:** ring-offset-2

### **Disabled:**
- **Opacity:** opacity-50
- **Cursor:** cursor-not-allowed

---

## ✅ **Accesibilidad**

### **Contraste:**
- **AA:** Mínimo 4.5:1
- **AAA:** Preferido 7:1

### **Focus Management:**
- Tab navigation consistente
- Skip links para navegación
- ARIA labels descriptivos

### **Semantic HTML:**
- Headings jerárquicos
- Form labels apropiados
- Button vs link usage correcto

---

**Última actualización:** 5 de agosto, 2025

### **Variantes Disponibles:**
```typescript
type ButtonVariant = "primary" | "secondary";
type ButtonSize = "small" | "medium" | "large";
```

### **Estilos CSS:**
```css
/* Primary Button */
.btn-primary {
  background-color: var(--secondary-bg-color);  /* #222222 */
  color: var(--primary-bg-color);               /* #ffffff */
  font-weight: var(--font-weight-semibold);
  box-shadow: var(--shadow-sm);
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
}

.btn-primary:hover {
  cursor: pointer;
  text-decoration: underline;
}

/* Secondary Button */
.btn-secondary {
  background-color: var(--primary-bg-color);    /* #ffffff */
  color: var(--default-text-color);             /* #212529 */
  border: 1px solid var(--default-border-color);
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  box-shadow: var(--shadow-sm);
}

.btn-secondary:hover {
  background-color: var(--chip-secondary-bg-color);
  color: var(--chip-secondary-text-color);
  cursor: pointer;
}
```

### **Tamaños:**
```css
/* Button Sizes */
.btn-large {
  padding: 0.75rem 1.5rem;
  font-size: 1.125rem;     /* text-lg */
}

.btn-medium {
  padding: 0.5rem 1rem;
  font-size: 1rem;         /* text-base */
}

.btn-small {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;     /* text-sm */
}
```

### **Uso en Componentes:**
```typescript
// Ejemplo de uso
<Button 
  variant="primary"      // Acción principal
  size="medium"
  onClick={handleSubmit}
>
  Crear Chiste
</Button>

<Button 
  variant="secondary"    // Acción secundaria
  size="small"
  onClick={handleCancel}
>
  Cancelar
</Button>
```

---

## 📝 **Tipografía**

### **Font Family:**
```css
/* System font stack */
font-family: 
  system-ui,
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  Roboto,
  'Helvetica Neue',
  Arial,
  sans-serif;
```

### **Escala Tipográfica:**
```css
/* Heading Scales */
.text-2xl { font-size: 1.5rem;   }  /* 24px - Main headings */
.text-xl  { font-size: 1.25rem;  }  /* 20px - Section headings */
.text-lg  { font-size: 1.125rem; }  /* 18px - Subsection headings */
.text-base{ font-size: 1rem;     }  /* 16px - Body text */
.text-sm  { font-size: 0.875rem; }  /* 14px - Small text */
.text-xs  { font-size: 0.75rem;  }  /* 12px - Captions */
```

### **Font Weights:**
```css
.font-bold     { font-weight: 700; }  /* Headings principales */
.font-semibold { font-weight: 600; }  /* Subheadings */
.font-medium   { font-weight: 500; }  /* Énfasis sutil */
.font-normal   { font-weight: 400; }  /* Texto body */
```

### **Uso Semántico:**
```typescript
// Headings
<h1 className="text-2xl font-bold text-stone-900">
  Título Principal
</h1>

// Body text
<p className="text-base font-normal text-stone-700">
  Texto del párrafo
</p>

// Secondary text
<span className="text-sm font-medium text-stone-500">
  Información secundaria
</span>
```

---

## 📏 **Espaciado y Layout**

### **Sistema de Espaciado (Tailwind):**
```css
/* Padding/Margin Scale */
.p-1  { padding: 0.25rem; }    /*  4px */
.p-2  { padding: 0.5rem;  }    /*  8px */
.p-3  { padding: 0.75rem; }    /* 12px */
.p-4  { padding: 1rem;    }    /* 16px */
.p-6  { padding: 1.5rem;  }    /* 24px */
.p-8  { padding: 2rem;    }    /* 32px */
.p-12 { padding: 3rem;    }    /* 48px */
```

### **Grid System:**
```css
/* Layout containers */
.container    { max-width: 1280px; margin: 0 auto; }
.max-w-sm     { max-width: 384px;  }  /* Small cards */
.max-w-md     { max-width: 448px;  }  /* Medium cards */
.max-w-lg     { max-width: 512px;  }  /* Large cards */
.max-w-4xl    { max-width: 896px;  }  /* Main content */
```

### **Grid Layouts:**
```typescript
// Responsive grid
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Grid items */}
</div>

// Flexible layout
<div className="flex flex-col sm:flex-row gap-4 items-center">
  {/* Flex items */}
</div>
```

---

## 🎭 **Componentes de Layout**

### **Card Component Pattern:**
```typescript
// Base card structure
<div className="border-2 border-dashed border-stone-300 bg-stone-50 rounded-xl p-6">
  <div className="text-center">
    {/* Card content */}
  </div>
</div>
```

### **Navigation Patterns:**
```typescript
// Desktop navigation
<nav className="hidden lg:flex items-center">
  <ul className="flex gap-2 xl:gap-4 items-center">
    {/* Nav items */}
  </ul>
</nav>

// Mobile navigation
<nav className="lg:hidden bg-white border-b border-stone-200 shadow-lg">
  <ul className="flex flex-col p-3 sm:p-4 space-y-1">
    {/* Nav items */}
  </ul>
</nav>
```

---

## 🎨 **Estados Interactivos**

### **Hover States:**
```css
/* Button hovers */
.hover\:bg-stone-100:hover { background-color: #f5f5f4; }
.hover\:bg-stone-700:hover { background-color: #44403c; }
.hover\:text-white:hover   { color: #ffffff; }

/* Transitions */
.transition-colors { transition: color, background-color 0.3s ease; }
.duration-300     { transition-duration: 300ms; }
```

### **Focus States:**
```css
/* Accessibility focus */
.focus\:ring-2:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow: 0 0 0 2px var(--secondary-bg-color);
}
```

### **Active States:**
```css
/* Active/pressed states */
.active\:bg-stone-200:active { background-color: #e7e5e4; }
.active\:scale-95:active     { transform: scale(0.95); }
```

---

## 🔧 **Design Tokens**

### **Shadows:**
```css
:root {
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
}
```

### **Border Radius:**
```css
.rounded-sm  { border-radius: 0.125rem; }  /* 2px */
.rounded     { border-radius: 0.25rem;  }  /* 4px */
.rounded-md  { border-radius: 0.375rem; }  /* 6px */
.rounded-lg  { border-radius: 0.5rem;   }  /* 8px */
.rounded-xl  { border-radius: 0.75rem;  }  /* 12px */
.rounded-full{ border-radius: 9999px;   }  /* Circle */
```

### **Animations:**
```css
/* Smooth transitions */
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}
```

---

## ✅ **Mejores Prácticas**

### **Do's:**
```typescript
// ✅ Usar sistema de componentes
<Button variant="primary" size="medium">Action</Button>

// ✅ Consistent spacing
<div className="p-4 mb-6 space-y-4">

// ✅ Semantic color usage
<div className="bg-stone-50 text-stone-800 border-stone-200">
```

### **Don'ts:**
```typescript
// ❌ Styles inline
<button style={{backgroundColor: '#blue'}}>

// ❌ Colores inconsistentes
<div className="bg-red-500 text-green-600">

// ❌ Spacing arbitrario
<div style={{padding: '13px', margin: '7px'}}>
```

---

**Última actualización:** 5 de agosto, 2025
