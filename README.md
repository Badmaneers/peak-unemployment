# Valentine's Day Couples Website 💕

An interactive and playful Valentine's Day web application designed to ask your partner out with cute animations, GIFs, and a multi-page questionnaire experience.

## Features

✨ **Interactive Proposal Flow**
- Four progressively charming questions with "Yes" and "No" buttons
- Animated "No" button that repositions and blasts away (up to 4 times)
- Scaling "Yes" button that grows with each refusal
- Emotional denying page with multiple confirmation stages
- Cute GIFs and images throughout the experience

📋 **Post-Proposal Questionnaire**
- Date selection page
- Food preferences (8 options with circular images)
- Dessert preferences (6 options)
- Activities preferences (6 options)
- Thank you page with animated flowers

🎨 **Design Elements**
- Smooth animations and transitions
- Consistent pink theme (#ffe4e1)
- Responsive button interactions
- Touch and click event support for mobile
- Interactive GIF animations

## Project Structure

```
valentine-couples/
├── public/
│   ├── images/            # GIFs and images
│   ├── activities/        # Activity images
│   ├── food/              # Food images
│   ├── index.html         # Main entry point
│   └── congratulations.mp3 # Celebration audio
├── src/
│   ├── App.js             # Main component with flow logic
│   ├── pages.js           # Post-proposal pages
│   ├── index.js           # React entry point
│   ├── index.css          # Global styles
│   └── App.css            # Component styles
├── package.json           # Dependencies and scripts
└── README.md              # This file
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone or download the project:
   ```bash
   git clone <repository-url>
   cd valentine-couples
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

Start the development server:
```bash
npm start
```

The application will automatically open at [http://localhost:3000](http://localhost:3000)

### Building for Production

Create an optimized production build:
```bash
npm run build
```

The `build` folder will contain the production-ready files ready for deployment.

## Technologies Used

- **React** - UI library for building interactive components
- **Create React App** - Project scaffolding and build tools
- **CSS3** - Animations, transitions, and styling
- **HTML5** - Semantic markup

## File Guide

### `src/App.js` (Main Component)
Contains the core application logic:
- 4-question flow with state management
- Button interaction handlers (Yes/No)
- No button repositioning and blast animation
- Yes button scaling logic
- Denying page state machine
- CSS animations for interactive effects

### `src/pages.js` (Post-Proposal Pages)
Reusable page components:
- **ThankyouPage** - Initial thank you with celebration audio
- **DatePage** - Date selection form
- **FoodPage** - 8 food items with circular images (burgers, hotdog, Momos, pasta, pizza, salad, steak, sushi)
- **DessertPage** - 6 dessert items (boba, churro, che, mochi, random bun, taiyaki)
- **ActivitiesPage** - 6 activities (aquarium, arcade, cinema, ceramics, exhibition, park)
- **LastPage** - Thank you message with animated flowers (3 flowers with falling petals)

### `public/images/` (Asset Files)
All GIFs and images used in the application:
- `please.png` - First question image
- `are-you-sure?.gif` - Second question animation
- `fr?.gif` - Third question animation
- `sus-umm.gif` - Fourth question animation
- `crying-please.gif` - Denying page emotion
- `hehe.gif` - Confirmation reaction
- `get-off.gif` - Final interactive GIF (animates on click/touch)
- `when.gif` - Date selection visual
- `thanks.png` - Celebration image

## How It Works

### 1. Main Questions (4 Steps)
Users are presented with 4 yes/no questions:
- "Will you be my Valentine?"
- "Are you sure?"
- "Fr???"
- "Still sure??"

### 2. Button Interactions
- **Yes button**: Advances to next question or starts questionnaire
- **No button**: Triggers blast animation, repositions randomly (max 4 times)
- After 4th "No": Transitions to denying page

### 3. Denying Flow (If user refuses)
- Shows emotional denying page with GIF
- Offers two choices: "Yes" to accept or "No" to continue denying
- Multiple stages: Initial → Confirm → Final acceptance
- Each stage has custom messages and GIFs

### 4. Post-Proposal Questionnaire (After acceptance)
Sequential pages to gather preferences:
- Select preferred date
- Choose favorite foods (with checkboxes)
- Pick favorite desserts
- Select preferred activities
- Final thank you with animated flowers

## Customization

You can easily customize the application:

### Change Questions
Edit the `questions` array in `src/App.js`:
```javascript
const questions = [
  'Your custom question?',
  'Another question?',
  // ...
];
```

### Update Colors
Search for color values in `src/App.js`:
- Primary: `#d7263d` (red)
- Background: `#ffe4e1` (light pink)
- Buttons: `#1b1b1b` (dark), `#d7263d` (red)

### Replace Images/GIFs
Simply replace files in `public/images/` with your own:
- Keep the same filenames
- Supported formats: PNG, GIF, JPEG

### Modify Food/Dessert/Activities
Edit the arrays in `src/pages.js`:
```javascript
const foods = [
  { name: 'Burgers', img: '/food/burgers.jpeg' },
  // Add or modify items
];
```

## Browser Support

✅ Modern browsers with full support:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari 12+, Chrome Mobile)

## Performance Notes

- Animations use CSS keyframes for smooth 60fps performance
- GIF files are optimized for web delivery
- Touch events (onTouchStart) support mobile devices
- Inline styles for component encapsulation and no global conflicts

## Troubleshooting

### Images/GIFs Not Loading
- Check that files exist in `public/images/`
- Special characters (?) in filenames are URL-encoded as `%3F`
- Clear browser cache and restart dev server

### Animations Not Playing
- Ensure CSS is loaded properly
- Check browser console for errors
- Test in a different browser

### Mobile Issues
- Make sure touch events are enabled
- Test on actual device, not just browser emulation
- Check viewport meta tag in `public/index.html`

## Deployment

### Deploy to Netlify (Recommended)
1. Build the project: `npm run build`
2. Connect your Git repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`

### Deploy to Vercel
1. Push code to GitHub
2. Connect Vercel to your GitHub account
3. Deploy with one click

### Traditional Hosting
1. Run `npm run build`
2. Upload `build` folder to your web server
3. Configure server to serve `index.html` for all routes

## License

This project is for personal use. Feel free to customize and share with your loved one!

## Notes

- All styles are inline in components for better encapsulation
- State management uses React hooks (useState)
- Touch and click events are handled separately for cross-device support
- GIF animations use CSS keyframes and className bindings for smooth playback
- Special characters in image filenames are URL-encoded for proper serving

## Support

If you encounter any issues or want to customize further, check:
1. Browser console for error messages
2. Network tab to ensure all assets load
3. React DevTools to inspect component state

---

💕 Made with love for your Valentine! Feel free to personalize and share! 💕
