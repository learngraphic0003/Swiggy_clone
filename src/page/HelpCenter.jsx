import React from 'react';

const HelpCenter = () => {
    return (
        <div className="font-sans text-gray-800 bg-cover" style={{ backgroundImage: 'url(https://cdn.leonardo.ai/users/233a57cb-df86-4ea5-9777-250f9067a8d2/generations/e71c0d65-b8c9-49d3-95bc-68d41d99f23e/segments/3:4:1/Flux_Dev_A_vibrant_and_bustling_fast_food_photo_set_in_a_moder_2.jpeg)' }}>
            <header className="text-white py-8 bg-cover bg-brightness-50" style={{ backgroundImage: 'url(https://cdn.leonardo.ai/users/233a57cb-df86-4ea5-9777-250f9067a8d2/generations/e71c0d65-b8c9-49d3-95bc-68d41d99f23e/segments/3:4:1/Flux_Dev_A_vibrant_and_bustling_fast_food_photo_set_in_a_moder_2.jpeg)' }}>
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl">Help Center - Online Food Delivery Service</h1>
                </div>
            </header>

            <nav className="bg-[#a33e3eb8] py-4">
                <div className="container mx-auto">
                    <ul className="flex justify-center space-x-8 text-white text-xl">
                        <li><a href="#getting-started">Getting Started</a></li>
                        <li><a href="#order-management">Managing Your Order</a></li>
                        <li><a href="#delivery-issues">Delivery Issues</a></li>
                        <li><a href="#payments-billing">Payments & Billing</a></li>
                        <li><a href="#account-settings">Account & Settings</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>
            </nav>

            <section id="getting-started" className="bg-[#ffffff5c] bg-opacity-60 py-8 mx-4 rounded-lg shadow-lg my-6 p-[20px]">
                <div className="container mx-auto">
                    <h2 className="text-3xl mb-4 font-bold ">Getting Started</h2>
                    <h3 className="text-2xl mb-3 font-medium">How do I place an order?</h3>
                    <p>1. Sign up or log in to your account.</p>
                    <p>2. Browse our wide range of restaurants or search by cuisine, dish, or restaurant name.</p>
                    <p>3. Add items to your cart, and review your order.</p>
                    <p>4. Select your delivery address and payment method.</p>
                    <p>5. Place your order and wait for updates!</p>
                    <h3 className="text-2xl mt-6 mb-3 font-medium ">Do I need to create an account to order?</h3>
                    <p>Creating an account allows you to save your preferences, track past orders, and make future orders quicker. However, you can also order as a guest without creating an account.</p>
                </div>
            </section>

            <section id="order-management" className="bg-[#ffffff5c] bg-opacity-60 py-8 mx-4 rounded-lg shadow-lg my-6  p-[20px] ">
                <div className="container mx-auto">
                    <h2 className="text-3xl mb-4 font-bold">Managing Your Order</h2>
                    <h3 className="text-2xl mb-3 font-medium">How do I track my order?</h3>
                    <p>After placing an order, you'll receive a confirmation email or app notification with the expected delivery time. You can track the status of your delivery in real-time through your account or app.</p>
                    <h3 className="text-2xl mt-6 mb-3 font-medium">Can I modify or cancel my order?</h3>
                    <p>Once the order is confirmed and the restaurant starts preparing it, changes are generally not possible. However, if you need assistance, please contact our customer support immediately, and we’ll do our best to help.</p>
                </div>
            </section>

            <section id="delivery-issues" className="bg-[#ffffff5c] bg-opacity-60 py-8 mx-4 rounded-lg shadow-lg my-6  p-[20px] ">
                <div className="container mx-auto">
                    <h2 className="text-3xl mb-4 font-bold ">Delivery Issues</h2>
                    <h3 className="text-2xl mb-3 font-medium">What should I do if my food is late?</h3>
                    <p>If your delivery is taking longer than expected, please check the status in your app. If the delay is not reflected, contact customer support with your order details, and we will investigate.</p>
                    <h3 className="text-2xl mt-6 mb-3 font-medium">What if my order is incorrect or missing items?</h3>
                    <p>If you receive an incorrect or incomplete order, please reach out to our support team immediately, and we’ll correct it as quickly as possible.</p>
                </div>
            </section>

            <section id="payments-billing" className="bg-[#ffffff5c] bg-opacity-60 py-8 mx-4 rounded-lg shadow-lg my-6  p-[20px] ">
                <div className="container mx-auto">
                    <h2 className="text-3xl mb-4 font-bold ">Payments & Billing</h2>
                    <h3 className="text-2xl mb-3 font-medium">What payment methods do you accept?</h3>
                    <p>We accept major credit cards, debit cards, and digital wallets like PayPal, Apple Pay, and Google Pay. You can also apply promo codes or vouchers if available.</p>
                    <h3 className="text-2xl mt-6 mb-3 font-medium">I was charged incorrectly. What do I do?</h3>
                    <p>If you believe there’s been an error in your billing, contact our support team with your order details. We’ll resolve the issue promptly.</p>
                </div>
            </section>

            <section id="account-settings" className="bg-[#ffffff5c] bg-opacity-60 py-8 mx-4 rounded-lg shadow-lg my-6  p-[20px] ">
                <div className="container mx-auto">
                    <h2 className="text-3xl mb-4 font-bold">Account & Settings</h2>
                    <h3 className="text-2xl mb-3 font-medium">How do I update my address?</h3>
                    <p>1. Go to your account settings. <br /> 2. Click Edit Address and enter your new address. <br /> 3. Save the changes for future orders.</p>
                    <h3 className="text-2xl mt-6 mb-3 font-medium">How do I reset my password?</h3>
                    <p>1. Go to the login page. <br /> 2. Click on Forgot Password. <br /> 3. Follow the instructions to reset it.</p>
                </div>
            </section>

            <section id="contact" className="bg-[#ffffff5c] bg-opacity-60 py-8 mx-4 rounded-lg shadow-lg my-6  p-[20px]">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                    <p>If you need further assistance, please don’t hesitate to reach out:</p>
                    <ul>
                        <li><strong>Email:</strong> <a href="subhamrawat9837@gmail.com" className="text-blue-400 font-bold">subhamrawat9837@gmail.com</a></li>
                        <li><strong>Phone:</strong> 9837408959 </li>
                        <li><strong>Live Chat:</strong> Available 24/7 on our website and app.</li>
                    </ul>
                </div>
            </section>

            <footer className="bg-gray-800 text-white py-4 text-center">
                <div className="container mx-auto">
                    <p>&copy; 2025 Online Food Delivery Service</p>
                </div>
            </footer>
        </div>
    );
}

export default HelpCenter;
