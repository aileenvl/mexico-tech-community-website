# MX Tech Community Platform

An open-source platform connecting and showcasing tech communities in México, Mexico. Built with Next.js and designed to be community-driven and easy to contribute to.

[Versión en Español](./README.md)

## 🌟 Features

- **Communities Directory** - Browse and discover local tech communities
- **Events Calendar** - Interactive calendar view of upcoming tech events
- **Sponsors Directory** - Showcase organizations supporting the tech community
- **Open Source** - Community-driven platform where anyone can contribute

## 📋 Project Structure

```
├── app/                    # Next.js app router pages
│   ├── page.tsx           # Homepage
│   ├── communities/       # Communities directory
│   ├── events/            # Events calendar
│   ├── sponsors/          # Sponsors page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── header.tsx        # Navigation header
│   ├── footer.tsx        # Footer
│   └── ...
├── data/                  # Data files
│   ├── communities.ts    # Communities data
│   ├── events.ts         # Events data
│   └── sponsors.ts       # Sponsors data
└── public/               # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/aileenvl/mexico-tech-community-website.git

# Navigate to the project
cd mexico-tech-community-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## 🤝 How to Contribute

We welcome all contributions! Here's how to add your community, event, or become a sponsor.

### Adding a Community

1. **Fork the repository**

   - Click the "Fork" button in the top right corner on GitHub

2. **Clone your fork**

   ```bash
   git clone https://github.com/aileenvl/mexico-tech-community-website.git
   cd mexico-tech-community-website
   ```

3. **Create a new branch**

   ```bash
   git checkout -b add-community-NAME
   ```

4. **Edit the `data/communities.ts` file**

   Add your community to the `communitiesData` array:

   ```typescript
   {
     id: "your-community-mty", // Unique identifier (lowercase with hyphens)
     name: "Your Community Name", // Name in English
     nameEs: "Tu Comunidad Nombre", // Name in Spanish
     description: "Brief description of your community", // Description in English
     descriptionEs: "Breve descripción de tu comunidad", // Description in Spanish
     category: "General Tech", // Category: "General Tech", "Backend / Database", "AI / Developer Tools", etc.
     focus: ["JavaScript", "React", "Node.js"], // Main technologies or topics
     members: 100, // Approximate number of members
     meetups: 5, // Number of meetups held
     image: "/your-logo.png", // Path to your logo (place it in public/ folder)
     city: "Monterrey", // City
     links: {
       website: "https://yourcommunity.com", // Website (optional)
       twitter: "https://twitter.com/yourcommunity", // Twitter (optional)
       linkedin: "https://linkedin.com/company/yourcommunity", // LinkedIn (optional)
       github: "https://github.com/yourcommunity", // GitHub (optional)
       discord: "https://discord.gg/yourcommunity", // Discord (optional)
       slack: "https://yourcommunity.slack.com", // Slack (optional)
     },
     contacts: [
       {
         name: "Your Name",
         role: "Community Lead",
         socials: {
           twitter: "https://twitter.com/yourname",
           linkedin: "https://linkedin.com/in/yourname",
           github: "https://github.com/yourname",
         },
       },
     ],
   }
   ```

5. **Add your community logo**

   - Place your logo in the `public/` folder
   - Recommended formats: PNG with transparent background or JPG
   - Recommended size: 400x160px or similar

6. **Test locally**

   ```bash
   npm run dev
   ```

   Verify your community appears correctly at http://localhost:3000/communities

7. **Commit your changes**

   ```bash
   git add .
   git commit -m "Add community: [Your Community Name]"
   git push origin add-community-NAME
   ```

8. **Create a Pull Request**
   - Go to your fork on GitHub
   - Click "Compare & pull request"
   - Describe the changes you made
   - Submit the Pull Request

### Adding an Event

1. **Follow steps 1-3 from "Adding a Community"** (fork, clone, create branch)

2. **Edit the `data/events.ts` file**

   Add your event to the `eventsData` array:

   ```typescript
   {
     id: "event-name-2025", // Unique identifier
     title: "Event Name", // Event title
     description: "Complete event description. Include what attendees will learn, who's speaking, etc.", // Detailed description
     date: "2025-12-31", // Date in YYYY-MM-DD format
     time: "18:00", // Time in 24h format (HH:MM)
     location: "Venue Name, Full Address, City", // Complete location
     city: "City", // City where the event takes place
     community: "Community Name", // Organizing community
     attendees: 50, // Expected number of attendees
     link: "https://eventlink.com/your-event", // Registration or info link
   }
   ```

3. **Verify the date is correct**

   - Use ISO format: YYYY-MM-DD (example: 2025-11-15)
   - Time must be in 24h format: HH:MM (example: 18:00)

4. **Test locally**

   ```bash
   npm run dev
   ```

   Verify your event appears at http://localhost:3000/events

5. **Commit and create Pull Request**
   ```bash
   git add .
   git commit -m "Add event: [Event Name]"
   git push origin add-event-NAME
   ```

### Becoming a Sponsor

Does your organization support tech communities in Monterrey? Join as a sponsor!

1. **Follow steps 1-3 from "Adding a Community"** (fork, clone, create branch)

2. **Edit the `data/sponsors.ts` file**

   Add your organization to the `sponsorsData` array:

   ```typescript
   {
     id: "your-organization", // Unique identifier
     name: "Your Organization", // Organization name
     description: "How you support the tech community (e.g., spaces, budget, mentorship)", // Support description
     type: "budget", // Type: "budget" (financial) or "space" (venues)
     logo: "YOUR ORG", // Short text or acronym for logo
     website: "https://yourorganization.com", // Website
   }
   ```

3. **Sponsorship types:**

   - `"budget"`: Financial support, donations, scholarships
   - `"space"`: Physical spaces, venues, offices for events

4. **Test, commit, and Pull Request**
   ```bash
   npm run dev # Test locally
   git add .
   git commit -m "Add sponsor: [Organization Name]"
   git push origin add-sponsor-NAME
   ```

## 📅 Data Format Reference

### Communities Structure

```typescript
interface Community {
  id: string; // Unique identifier (e.g., "gdg-monterrey")
  name: string; // Name in English
  nameEs: string; // Name in Spanish
  description: string; // Description in English
  descriptionEs: string; // Description in Spanish
  category: string; // Community category
  focus: string[]; // Array of technologies/topics
  members: number; // Number of members
  meetups: number; // Number of meetups
  image: string; // Logo path
  city: string; // City
  links?: {
    // Optional links
    website?: string;
    twitter?: string;
    linkedin?: string;
    github?: string;
    discord?: string;
    slack?: string;
  };
  contacts: Contact[]; // Array of contacts
}
```

### Events Structure

```typescript
interface Event {
  id: string; // Unique identifier
  title: string; // Event title
  description: string; // Complete description
  date: string; // Date (YYYY-MM-DD)
  time: string; // Time (HH:MM, 24h)
  location: string; // Complete location
  city: string; // Event city
  community: string; // Organizing community
  attendees: number; // Number of attendees
  link?: string; // Registration link (optional)
}
```

### Sponsors Structure

```typescript
interface Sponsor {
  id: string; // Unique identifier
  name: string; // Organization name
  description: string; // How they support
  type: "budget" | "space"; // Sponsorship type
  logo?: string; // Logo text
  website?: string; // Website
}
```

## ✅ Validation Rules

When adding content, ensure:

### Communities

- ✓ All required fields are complete
- ✓ The `id` is unique and uses lowercase with hyphens
- ✓ Includes descriptions in both English and Spanish
- ✓ Contact URLs are valid
- ✓ Logo is in the `public/` folder
- ✓ Contacts have at least one communication method

### Events

- ✓ Date is in `YYYY-MM-DD` format
- ✓ Time is in `HH:MM` format (24-hour)
- ✓ Date is in the future (no past events)
- ✓ Location is clear and complete
- ✓ Registration link is valid (if provided)

### Sponsors

- ✓ Type is exactly `"budget"` or `"space"`
- ✓ Description clearly explains how they support
- ✓ Website is a valid URL

## 🎨 Design System

The platform uses:

- **Framework**: Next.js 16 with React 19
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Font**: Inter

## 🔧 Available Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run linter
```

## 🐛 Report Issues

If you find a bug or have a suggestion:

1. Check [existing Issues](https://github.com/aileenvl/mexico-tech-community-website/issues)
2. If it doesn't exist, create a new Issue with:
   - Descriptive title
   - Detailed problem or suggestion description
   - Steps to reproduce (if it's a bug)
   - Screenshots (if applicable)

## 💡 Ideas and Suggestions

Have ideas to improve the platform? We'd love to hear them!

- Create an Issue with the `enhancement` label
- Contact the organizers

## 📝 Code of Conduct

This community follows a code of conduct to ensure a respectful and welcoming environment for everyone:

- Be respectful and professional
- Value diversity of opinions
- Accept constructive criticism
- Focus on what's best for the community
- Show empathy toward other members

## 🙋 Support

Need help?

1. Review this documentation
2. Search [existing Issues](https://github.com/aileenvl/mexico-tech-community-website/issues)
3. Create a new Issue if you don't find an answer
4. Join community discussions

## 🎯 Roadmap

Upcoming planned features:

- [ ] Authentication system for organizers
- [ ] Advanced filters by technology
- [ ] Event notifications
- [ ] Calendar integrations (Google, Apple)
- [ ] RSVP system for events
- [ ] Interactive community map

## 📄 License

This project is open source and available under a permissive license.

---

**Built with ❤️ by and for the Mexican Tech Community**

**#MxTech #OpenSource #TechCommunity**
