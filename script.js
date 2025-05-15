// script.js

// Example blog posts data
const posts = [
    {
        id: 1,
        title: "The Rise of AI in Everyday Life",
        date: "2025-05-15",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        content: `<p>Artificial Intelligence is transforming how we live, work, and interact. From smart assistants to self-driving cars, AI is everywhere. In this article, we explore the impact of AI on daily life and what the future holds for this exciting technology.</p>
        <h3>What is AI?</h3>
        <p>AI refers to machines or software that can perform tasks that typically require human intelligence. This includes problem-solving, learning, language understanding, and perception.</p>
        <h3>Examples in Daily Life</h3>
        <ul>
          <li>Voice assistants like Siri and Alexa</li>
          <li>Recommendation systems on Netflix and YouTube</li>
          <li>Navigation apps using real-time traffic data</li>
        </ul>
        <h3>The Future of AI</h3>
        <p>AI is expected to revolutionize healthcare, education, transportation, and more. However, ethical considerations and job displacement are important topics to address as AI evolves.</p>`
    },
    {
        id: 2,
        title: "JavaScript: The Language of the Web",
        date: "2025-05-14",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
        content: `<p>JavaScript powers interactive websites and web apps. Learn why it's essential for modern web development and how to get started with the basics, frameworks, and best practices.</p>
        <h3>Why JavaScript?</h3>
        <p>JavaScript is supported by all modern browsers and allows developers to create dynamic, interactive experiences for users.</p>
        <h3>Popular Frameworks</h3>
        <ul>
          <li>React</li>
          <li>Vue.js</li>
          <li>Angular</li>
        </ul>
        <h3>Getting Started</h3>
        <p>Start by learning the basics: variables, functions, loops, and events. Then, explore DOM manipulation and asynchronous programming with promises and async/await.</p>`
    },
    {
        id: 3,
        title: "Cloud Computing: The Future is Now",
        date: "2025-05-13",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
        content: `<p>Cloud platforms like AWS, Azure, and Google Cloud are changing how businesses deploy and scale applications. Discover the benefits and challenges of moving to the cloud.</p>
        <h3>What is Cloud Computing?</h3>
        <p>Cloud computing delivers computing services—servers, storage, databases, networking, software—over the internet (the cloud).</p>
        <h3>Benefits</h3>
        <ul>
          <li>Scalability</li>
          <li>Cost efficiency</li>
          <li>Accessibility from anywhere</li>
        </ul>
        <h3>Challenges</h3>
        <p>Security, compliance, and managing costs are key challenges organizations face when adopting cloud solutions.</p>`
    },
    {
        id: 4,
        title: "Responsive Design: Why It Matters",
        date: "2025-05-12",
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
        content: `<p>With users accessing the web on all kinds of devices, responsive design ensures your site looks great everywhere. Here’s how to implement it effectively and why it matters for user experience.</p>
        <h3>What is Responsive Design?</h3>
        <p>Responsive design means your website adapts to different screen sizes and devices, providing an optimal viewing experience.</p>
        <h3>Techniques</h3>
        <ul>
          <li>Flexible grids and layouts</li>
          <li>Media queries</li>
          <li>Responsive images</li>
        </ul>
        <h3>Why It Matters</h3>
        <p>Responsive design improves usability, accessibility, and SEO, making your site more effective and user-friendly.</p>`
    },
    {
        id: 5,
        title: "Getting Started with CSS Grid",
        date: "2025-05-11",
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
        content: `<p>CSS Grid makes complex layouts easy. Learn the basics and start building beautiful, flexible web pages today with practical examples and tips.</p>
        <h3>What is CSS Grid?</h3>
        <p>CSS Grid is a two-dimensional layout system for the web. It allows you to create complex layouts easily and responsively.</p>
        <h3>Basic Concepts</h3>
        <ul>
          <li>Grid container and grid items</li>
          <li>Rows and columns</li>
          <li>Grid areas</li>
        </ul>
        <h3>Example</h3>
        <pre><code>display: grid;
grid-template-columns: 1fr 2fr;
gap: 20px;</code></pre>
        <p>Experiment with different layouts and see how CSS Grid can simplify your design process!</p>`
    }
];

// Load posts on index.html
if (document.getElementById('posts-list')) {
    const postsList = document.getElementById('posts-list');
    postsList.innerHTML = '';
    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        postDiv.innerHTML = `
            <img src="${post.image}" alt="${post.title}" class="post-img">
            <h2><a href="post.html?id=${post.id}">${post.title}</a></h2>
            <small>${post.date}</small>
            <div>${post.content.substring(0, 90)}...</div>
        `;
        postsList.appendChild(postDiv);
    });
}

// Load single post on post.html
if (document.getElementById('post-content')) {
    const params = new URLSearchParams(window.location.search);
    const postId = parseInt(params.get('id'));
    const post = posts.find(p => p.id === postId);
    const postContent = document.getElementById('post-content');
    if (post) {
        postContent.innerHTML = `
            <article>
                <img src="${post.image}" alt="${post.title}" class="post-img">
                <h2>${post.title}</h2>
                <small>${post.date}</small>
                <div>${post.content}</div>
            </article>
        `;
    } else {
        postContent.innerHTML = '<p>Post not found.</p>';
    }
}

// Add smooth scroll to top button
const scrollBtn = document.createElement('button');
scrollBtn.textContent = '↑ Top';
scrollBtn.className = 'scroll-to-top';
document.body.appendChild(scrollBtn);
scrollBtn.style.display = 'none';

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
});
scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Add dark mode toggle
const darkModeBtn = document.createElement('button');
darkModeBtn.textContent = '🌙 Dark Mode';
darkModeBtn.className = 'dark-mode-toggle';
document.body.appendChild(darkModeBtn);

darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeBtn.textContent = '☀️ Light Mode';
    } else {
        darkModeBtn.textContent = '🌙 Dark Mode';
    }
});

// Dropdown menu interactivity
const menuToggle = document.getElementById('menuToggle');
const dropdownMenu = document.getElementById('dropdownMenu');

if (menuToggle && dropdownMenu) {
    menuToggle.addEventListener('click', () => {
        dropdownMenu.style.display = dropdownMenu.style.display === 'flex' ? 'none' : 'flex';
    });
    // Hide dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
}
