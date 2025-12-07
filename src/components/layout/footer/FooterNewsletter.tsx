'use client';
import React, { useState } from 'react';
// import { Button } from "../ui/Button";
// import { Input } from "../ui/Input";

const FooterNewsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    console.log('Subscribe:', email);
    setEmail('');
  };

  return (
    <section className="text-center">
      <h2 className="text-lg font-semibold mb-2">Want to know when I publish new content?</h2>
      <p className="mb-4">Enter your email to join my newsletter:</p>
      <form onSubmit={handleSubmit} className="flex justify-center gap-2 flex-wrap">
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-64"
          required
        />
        <button type="submit" className="primary">
          →
        </button>
      </form>
    </section>
  );
};

export default FooterNewsletter;
