# Platform X Marketplace

A modern React marketplace UI built with Next.js, Redux Toolkit, and Tailwind CSS. This application provides a complete user interface for browsing, filtering, and purchasing digital projects.

## 🚀 Features

- **Project List Page** with advanced filtering by location, type, and price
- **Project Detail Page** with comprehensive project information
- **Purchase Modal** with quantity selection, summary, and checkout
- **Wallet View** showing balance and purchase history
- **State Management** using Redux Toolkit
- **Responsive Design** for all screen sizes
- **Modern UI** with animations and transitions

## 🛠️ Technologies Used

- **Next.js 14** - React framework
- **Redux Toolkit** - State management
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **React Hooks** - Component logic

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18.17.0 or higher)
- npm or yarn

## 🔧 Installation & Setup

Follow these steps to get the project running on your local machine:

1. **Clone the repository**

\`\`\`bash
git clone https://github.com/yourusername/platform-x-marketplace.git
cd platform-x-marketplace
\`\`\`

2. **Install dependencies**

\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. **Run the development server**

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

## 📁 Project Structure

\`\`\`
/
├── app/                  # Next.js app directory
│   ├── globals.css       # Global styles
│   ├── layout.js         # Root layout
│   ├── page.js           # Home page
│   ├── project/          # Project details pages
│   └── wallet/           # Wallet page
├── components/           # React components
│   ├── Navbar.js         # Navigation bar
│   ├── ProjectCard.js    # Project card component
│   ├── ProjectFilters.js # Filtering component
│   ├── PurchaseModal.js  # Purchase modal
│   └── StoreProvider.js  # Redux provider
├── store/                # Redux store
│   ├── store.js          # Store configuration
│   └── slices/           # Redux slices
│       ├── projectsSlice.js  # Projects state
│       ├── purchasesSlice.js # Purchases state
│       └── walletSlice.js    # Wallet state
├── public/               # Static assets
├── next.config.mjs       # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
└── package.json          # Project dependencies
\`\`\`

## 💻 Usage

### Home Page
The home page displays a list of available projects with filtering options:
- Filter by location (New York, California, Texas)
- Filter by type (Web Development, Design, AI/ML, etc.)
- Filter by price range (slider)

### Project Details
Click on a project card to view detailed information:
- Project features
- Seller information
- Price and purchase options

### Making a Purchase
1. Click "Purchase Now" on a project detail page
2. Select the desired quantity
3. Review the order summary
4. Click "Complete Purchase"

### Wallet
View your wallet balance and purchase history:
- Current balance
- Total spent
- List of all purchases

## 🚢 Deployment

### Deploying to Vercel

1. **Push your code to GitHub**

2. **Import your repository in Vercel**
   - Go to [Vercel](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Select the repository

3. **Configure project settings**
   - Framework Preset: Next.js
   - Root Directory: `.` (current directory)
   - Build Command: `next build`
   - Output Directory: `.next`

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Your application is now live!

## 📸 Screenshots

### Home Page
![Home Page](https://placeholder.svg?height=200&width=400&text=Home+Page)

### Project Details
![Project Details](https://placeholder.svg?height=200&width=400&text=Project+Details)

### Purchase Modal
![Purchase Modal](https://placeholder.svg?height=200&width=400&text=Purchase+Modal)

### Wallet View
![Wallet View](https://placeholder.svg?height=200&width=400&text=Wallet+View)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

Your Name - [GitHub Profile]([https://github.com/yourusername](https://github.com/UmerKhan1998))

---

Made with ❤️ using Next.js and Redux
