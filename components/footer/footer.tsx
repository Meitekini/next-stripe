import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="w-full border-t border-gray-700 p-4 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
// This is a placeholder for the footer component. You can add your footer content here.
