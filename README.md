### 1. **How you approached animations and responsiveness:**

For **animations**, the approach involved:
- Using CSS transitions for smooth effects when elements change their state, such as images rotating or moving with scroll.
- Implementing a parallax effect for images, so that they move at different speeds relative to the scroll, giving a 3D layered effect.
- For the mouse shadow, CSS `box-shadow` was used and applied dynamically to follow the cursor using JavaScript for real-time responsiveness.
  
For **responsiveness**:
- Flexbox was used to structure the image stacking and align elements properly for different screen sizes.
- The size of the circles and other elements was made dynamic to adapt to the viewport.
- Media queries could be added to further refine how the layout behaves on mobile and tablet screens if necessary.

### 2. **Any assumptions made:**
- It was assumed that the images need to be stacked with movement effects to match the aesthetic you might be going for.
- The white cursor shadow was intended to provide a glowing effect without a black circle, which was your desired outcome.
- The goal was to prioritize smooth performance across different screen sizes, so the approach was lightweight, using mostly CSS for animations.
- No specific instructions were provided for responsiveness on mobile, so desktop responsiveness was the primary focus.

### 3. **How you used AI tools (if applicable):**
AI tools (like myself, ChatGPT) were used to:
- Generate suggestions on structuring the CSS and JavaScript to handle mouse tracking and scroll-based animations.
- Help troubleshoot the issue with the shadow having a black circle initially, and providing the solution of making the background transparent while retaining the shadow.
- Offer optimizations for the animation and responsiveness based on common best practices for web development.

### 4. **Approximate time taken for that section:**
- **Animations**: Implementing the parallax effect, the scroll-based animations, and the circle scaling took approximately **45 minutes to 1 hour**.
- **Responsiveness**: Handling basic responsiveness using Flexbox and adapting the sizes dynamically took about **30 to 45 minutes**.
- **Mouse shadow**: Debugging and adjusting the mouse shadow behavior took around **20 minutes**.
