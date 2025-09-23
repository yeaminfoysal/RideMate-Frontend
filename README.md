# RideMate 🚖

RideMate is a full-featured ride-sharing platform that connects riders with drivers efficiently and securely. Built with a modern **MERN stack** and enhanced with **real-time ride tracking**, analytics, and role-based access control, RideMate ensures a smooth experience for riders, drivers, and administrators.

---

## Features

### **Rider Features**
- **Ride Request Form:** Enter pickup and destination, estimate fare, choose payment method.  
- **Live Ride Tracking:** Real-time updates and driver details. 
- **Ride History:** Paginated, searchable, and filterable by date, fare range, and status.  
- **Ride Details Page:** Map route, timestamps, driver info, and ride status timeline.  
- **Profile Management:** Edit name, phone number, and change password and emmergency contact.
- **Profile Management:** Edit name, phone number, and change password and emmergency contact.
- **Emergency / SOS Button** *(Safety Feature)*:
  - Purpose: Quick access to call for help during a ride.  
  - **Button Placement:** Floating SOS button visible on active ride screen.  
  - **Emergency Options:** Call Police, Notify Emergency Contact, Share Live Location.  
  - **Pre-set Emergency Contact:** Users can save trusted contacts in Settings → Safety.  
  - **Live Location Sharing:** Automatically sends GPS link to selected contacts when triggered.  
  - **Visual Feedback:** Confirmation messages like “Emergency contact notified” or “Location shared successfully”.  
  - Implementation: Uses `navigator.geolocation` / `react-geolocated` for location, and `tel:`, SMS, and WhatsApp APIs for notifications. Only visible during active rides and styled to match site theme.


---

### **Driver Features**
- **Availability Control:** Toggle Online/Offline.  
- **Incoming Requests:** Accept or reject rider offers.  
- **Active Ride Management:** Update statuses (`Accepted → Picked Up → In Transit → Completed`) or cancel rides.  
- **Earnings Dashboard:** Visual breakdown (daily, weekly, monthly) with charts.  
- **Ride History:** Paginated, searchable, and filterable by date, fare range, and status.  
- **Profile Management:** Update vehicle details, contact info, password and emmergency contact.
- **Emergency / SOS Button** *(Safety Feature)*:
  - Purpose: Quick access to call for help during a ride.

---

### **Admin Features**
- **User Management:** Search, filter, block/unblock riders, approve/suspend drivers.  
- **Ride Oversight:** View all rides with advanced filtering by date, status, driver, or rider.  
- **Analytics Dashboard:** Data visualizations for ride volume, revenue trends, and driver activity.  
- **Search & Filter Tools:** Consistent across all admin listing pages.  
- **Profile Management:** Update personal profile and password.

---

### **Payment Integration**
- Fare is automatically generated based on distance.  
- **SSLCOMMERZ** is used as the payment gateway.

---

### **Authentication & Authorization**
- JWT-based login and registration with **role selection** (Rider, Driver, Admin).  
- Google login integration.  
- **Role-based landing pages** upon login.  
- **Persistent authentication state** across cookie.  
- Logout functionality.  
- Account Status Handling:
  - **Blocked or Suspended Users:** Redirected to a dedicated status page with instructions.  
  - **Offline Drivers:** Can access dashboards except ride acceptance features, with prompts to go online.

---
## Tech Stack

| Category           | Technologies Used |
|--------------------|-------------------|
| **Frontend**        | React.js, Tailwind CSS, Shadcn UI, Framer Motion, Vite, React Dom |
| **Backendend**     | Node.js, Express.js |
| **Database**       | MongoDB + Mongoose |
| **State Management**| Redux Toolkit |
| **Language**       | TypeScript |
| **Payment**        | SSLCOMMERTZ |
| **Authentication** | JWT+ Passport.js (Google OAuth) |
| **Forms & Validation**| React Hook Form, Zod |
| **Security**       | bcryptjs for password hashing |
| **Maps & Geolocation**   | Mapbox SDK |
| **Charts & Data Visualization**| Recharts |

---

## **Live URLs**
- **Frontend Live URL:** [https://ride-mate-frontend.vercel.app/](https://ride-mate-frontend.vercel.app/)  
- **Backend Repository:** [https://github.com/yeaminfoysal/RideMate-Backend](https://github.com/yeaminfoysal/RideMate-Backend)  
- **Backend Live URL:** [https://ride-mate-backend.vercel.app](https://ride-mate-backend.vercel.app/)  

---

##  Default Credentials

| Role     | Email              | Password   |
|----------|--------------------|------------|
| Admin    | admin@ridemate.com | Ridemate1! |
| Driver   | driver@ridemate.com| Ridemate1! |
| User     | user@ridemate.com  | Ridemate1! |


### **Dependencies**
```json
{
  "@fortawesome/free-brands-svg-icons": "^7.0.1",
  "@fortawesome/free-regular-svg-icons": "^7.0.1",
  "@fortawesome/free-solid-svg-icons": "^7.0.1",
  "@fortawesome/react-fontawesome": "^3.0.2",
  "@hookform/resolvers": "^5.2.1",
  "@mapbox/mapbox-sdk": "^0.16.1",
  "@radix-ui/react-accordion": "^1.2.12",
  "@radix-ui/react-alert-dialog": "^1.1.15",
  "@radix-ui/react-avatar": "^1.1.10",
  "@radix-ui/react-dialog": "^1.1.15",
  "@radix-ui/react-dropdown-menu": "^2.1.16",
  "@radix-ui/react-label": "^2.1.7",
  "@radix-ui/react-navigation-menu": "^1.2.14",
  "@radix-ui/react-popover": "^1.1.15",
  "@radix-ui/react-select": "^2.2.6",
  "@radix-ui/react-separator": "^1.1.7",
  "@radix-ui/react-slider": "^1.3.6",
  "@radix-ui/react-slot": "^1.2.3",
  "@radix-ui/react-switch": "^1.2.6",
  "@radix-ui/react-tabs": "^1.1.13",
  "@radix-ui/react-tooltip": "^1.2.8",
  "@reduxjs/toolkit": "^2.9.0",
  "@tailwindcss/vite": "^4.1.13",
  "@turf/bbox": "^7.2.0",
  "@turf/helpers": "^7.2.0",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "date-fns": "^4.1.0",
  "framer-motion": "^12.23.12",
  "leaflet": "^1.9.4",
  "lucide-react": "^0.542.0",
  "next-themes": "^0.4.6",
  "react": "^19.1.1",
  "react-day-picker": "^9.9.0",
  "react-dom": "^19.1.1",
  "react-hook-form": "^7.62.0",
  "react-map-gl": "^7.1.9",
  "react-redux": "^9.2.0",
  "react-router": "^7.8.2",
  "recharts": "^3.2.0",
  "sonner": "^2.0.7",
  "sweetalert2": "^11.23.0",
  "tailwind-merge": "^3.3.1",
  "tailwindcss": "^4.1.13",
  "zod": "^4.1.5"
}
```


---

## 🛠 Setup & Environment Instructions

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/yeaminfoysal/RideMate-Frontend
cd ridemate-frontend
```
### **2️⃣ Install Dependencies**
```bash
npm install
```

### **3️⃣ Create `.env` File**

Create a `.env` file in the root of the project with the following structure:

```bash

VITE_MAPBOX_TOKEN=your_map_box_token

VITE_BASE_URL=your_backend_url

```
💡 Replace the values with your own configuration before running the project.

### **4️⃣ Run in Development Mode**
```bash
npm run dev
```

---

## Future Improvements

- Real-time ride updates with Socket.IO