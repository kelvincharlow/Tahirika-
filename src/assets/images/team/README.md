## Kelvin's Photo

When you add Kelvin's photo, update the About.jsx imports:

```jsx
// Add this import:
import kelvinPhoto from '../assets/images/team/kelvin-musyoki.jpg'; // or .jpeg

// Then update Kelvin's card to use:
<div className="w-16 h-16 rounded-full overflow-hidden mb-4 mx-auto border-3 border-primary-200 shadow-lg">
  <img 
    src={kelvinPhoto} 
    alt="Kelvin Musyoki" 
    className="w-full h-full object-cover"
  />
</div>
```

Current status: Using gradient initials until photo is ready.