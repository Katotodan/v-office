# V-Office 🏢

A modern, responsive, and accessible intranet web application designed for seamless team collaboration. Built with **React**, **React Router**, and **Tailwind CSS**, V-Office is your digital workspace featuring quick access to chat, tasks, resources, and notifications.

---

## 🚀 Features

- ✅ Responsive layout (mobile, tablet, desktop, smart TV support)
- 🌗 Light & Dark mode support
- 🔔 Interactive notification dropdown with badge counter
- 👥 User profile dropdown with logout
- 🧭 Client-side routing using React Router
- 🔍 Search bar, resource quick links, and dashboard cards
- 🎥 Background image support for the welcome banner
- ♿ Accessible with proper ARIA roles, keyboard navigation, and screen reader tags

---

## 📁 Project Structure

src/
├── assets/ # Static images and banner media
├── components/ # Reusable components (Navbar, Footer, Dropdowns, etc.)
├── pages/ # Route-based pages
├── data/notifications.json # Sample notifications
├── App.jsx # Main routing
├── main.jsx # Entry point
└── index.css # Tailwind & global styles


---

## 🛠️ Tech Stack

- [React](https://reactjs.org/)
- [React Router v6](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/) (recommended, but works with CRA too)

---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/Katotodan/v-office.git
cd v-office

# Install dependencies
npm install

# Start the development server
npm run dev

🧪 Available Scripts

npm run dev — start development server
npm run build — build for production
npm run preview — locally preview production build

🌐 Routing Overview
| Path         | Description             |
| ------------ | ----------------------- |
| `/`          | Home / Dashboard        |
| `/dashboard` | Internal team messaging |
| `*`          | 404 Not Found fallback  |

🧩 Customization

Dark mode colors: Use dark: variants in Tailwind
Safe area insets: Uses env(safe-area-inset-*) for iOS
Notification data: Edit src/data/notifications.json

🛡️ License

This project is open-sourced under the MIT License.

✨ Credits

Built with ❤️ by APIPAWE KATOTO Daniel
Icons by React Icons
UI inspired by modern workplace dashboards

