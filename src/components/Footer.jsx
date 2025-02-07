import React from 'react';

const Footer = () => {
  return (
   
    <footer class="bg-gray-900 text-white py-8">
  <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
  
    <div>
      <h3 class="text-lg font-semibold mb-4">About Us</h3>
      <p class="text-gray-400">We are committed to delivering innovative solutions and meaningful content to engage and inspire our audience.</p>
    </div>

    
    <div>
      <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
      <ul>
        <li class="mb-2"><a href="#" class="hover:underline">Home</a></li>
        <li class="mb-2"><a href="#" class="hover:underline">Services</a></li>
        <li class="mb-2"><a href="#" class="hover:underline">About Us</a></li>
        <li class="mb-2"><a href="#" class="hover:underline">Contact</a></li>
      </ul>
    </div>

    
    <div>
      <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
      <ul>
        <li class="mb-2">Email: <a href="rawatsubham9837@gmail.com
" class="hover:underline">rawatsubham9837@gmail.com
        </a></li>
        <li class="mb-2">Phone: <a href="tel:+1234567890" class="hover:underline">9837408959</a></li>
        <li class="mb-2">Address: 123 Innovation Drive, Tech City</li>
      </ul>
    </div>
  </div>


  <div className='flex items-center p-1.5 m-10'>

  <h1 className='mr-[12px] text-2xl'> For better expreince, download the swiggy app now  </h1>
  <div className='w-[165px] flex '> <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png" alt="" className='m-1.5 '/>
  <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" alt=""  className='m-1.5 '  />  </div>
   
    
  </div>

  
  <div class="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
    <p>&copy; 2025 Your Company Name. All rights reserved.</p>
    <p>Made with ❤ for innovation.</p>
  </div>
</footer>
  );
};

export default Footer;
