// src/views/landing/pages/CreateAccount.jsx
import React, { useState, lazy, Suspense } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";

const Footer = lazy(() => import("../components/Footer"));

const CreateAccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", formData);
      localStorage.setItem("token", res.data.token);
      toast.success("Account created successfully!");
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.msg || "Registration failed");
    }
  };

  return (
    <div className="bg-black text-white min-h-screen font-inter overflow-x-hidden">
      <Navbar />
      <section className="flex items-center justify-center py-20 px-6 md:py-32">
        <div className="relative bg-[#111] border border-gray-700 rounded-xl shadow-2xl p-8 md:p-10 w-full max-w-md">
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-highlightGold/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          <div className="relative z-10">
            <div className="flex justify-center mb-2">
              <img src="/new logo.png" alt="Saita Rewards Logo" className="h-20 w-auto" />
            </div>

            <h2 className="text-3xl font-bold text-center font-orbitron text-highlightGold mb-2">
              Create Your Account
            </h2>
            <p className="text-gray-400 text-center text-sm mb-8">
              Start earning crypto rewards with a secure account
            </p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="text-sm block mb-2 text-gray-300">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0d0d0d] border border-gray-700 rounded-lg text-sm placeholder-gray-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="text-sm block mb-2 text-gray-300">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0d0d0d] border border-gray-700 rounded-lg text-sm placeholder-gray-500"
                  required
                />
              </div>

              <button type="submit" className="w-full py-3.5 bg-highlightGold text-black font-semibold rounded-lg">
                Create Account
              </button>
            </form>

            <p className="text-center text-sm text-gray-400 mt-8">
              Already have an account?{" "}
              <a href="/account" className="text-highlightGold hover:underline">Sign in</a>
            </p>
          </div>
        </div>
      </section>

      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default CreateAccount;
