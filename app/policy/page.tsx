"use client";

import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>

        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              1. Information We Collect
            </h2>
            <p>
              When you visit <strong>ColoresHTML.com</strong>, we do not collect
              any personally identifiable information. We only collect your
              cookie preference — whether you accept or decline cookies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              2. How We Use Your Information
            </h2>
            <p>
              Your cookie preference is stored in your session to honor your
              choice during your visit. We do not track, share, or sell any
              visitor information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">3. Cookies</h2>
            <p>
              We use cookies solely to save your cookie consent decision. You
              can control cookie usage through your browser settings.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">4. Data Storage</h2>
            <p>
              Your cookie preference is stored temporarily in your session and
              is automatically cleared after inactivity.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">5. Third-Party Services</h2>
            <p>
              ColoresHTML.com uses <strong>Google Analytics</strong> to better
              understand how visitors interact with our website. Google
              Analytics collects non-personally identifiable information, such
              as pages visited, time spent on pages, and device/browser type.
            </p>
            <p>
              This information helps us improve the website experience. All data
              collected via Google Analytics is subject to Google&apos;s own
              Privacy Policy. You can learn more about how Google collects and
              processes data by visiting{" "}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Google&apos;s Privacy & Terms page
              </a>
              .
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              6. Changes to This Policy
            </h2>
            <p>
              We may update this policy from time to time. Please check this
              page periodically for updates.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">7. Contact</h2>
            <p>
              If you have any questions, please contact us at:{" "}
              <strong>hola@marfru.com</strong>.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
