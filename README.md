# The Wild Oasis

Welcome to The Wild Oasis, a Next.js project!

**Live Demo:** [https://next-js-room-booking-project.vercel.app/](https://next-js-room-booking-project.vercel.app/)

## Overview

This project appears to be a web application focused on providing a welcoming and engaging user experience, as suggested by the app link "Welcome / The Wild Oasis". Based on the live demo URL, it seems to be a **room booking project**. It leverages a modern tech stack for building a robust and interactive frontend.

## Technologies Used

This project utilizes the following key technologies:

* **Next.js (version 14.1.4):** A powerful React framework for building server-rendered and statically generated web applications, enabling features like improved performance and SEO.
* **React (version ^18):** A JavaScript library for building user interfaces, providing a component-based architecture for efficient development.
* **React DOM (version ^18):** Provides DOM-specific methods that are necessary to support the top-level React API.
* **NextAuth.js (version ^5.0.0-beta.16):** A comprehensive authentication library for Next.js applications, simplifying the implementation of various authentication strategies, likely used for user accounts and booking management.
* **Supabase (version ^2.48.1):** An open-source Firebase alternative, likely used as the backend for data storage (rooms, bookings, etc.) and potentially authentication. The `@supabase/supabase-js` client library facilitates interaction with the Supabase API.
* **Heroicons/react (version ^2.2.0):** A library of beautiful SVG icons, enhancing the visual appeal and user interface of the application.
* **date-fns (version ^4.1.0):** A modern JavaScript date utility library, providing a consistent and efficient way to handle date and time operations, crucial for managing booking dates.
* **react-day-picker (version ^9.5.1):** A customizable date picker component for React, essential for allowing users to select check-in and check-out dates for their bookings.

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd the-wild-oasis
    ```
    *(Replace `<repository_url>` with the actual repository URL)*

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root directory and configure the necessary environment variables. This will likely include your Supabase URL and API keys, as well as any NextAuth.js secrets. Refer to the documentation of Supabase and NextAuth.js for the required variables.

    ```
    NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
    NEXT_PUBLIC_SUPABASE_AN