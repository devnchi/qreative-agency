import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `Contact Form: ${formData.subject} - ${formData.name}`;
    const body = `
Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.number}
Subject: ${formData.subject}

Message:
${formData.message}
    `.trim();

    const mailtoLink = `mailto:chiigbokwedev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Optional: Reset form after submission
    setFormData({
      name: "",
      company: "",
      email: "",
      number: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="bg-gradient-to-b from-white via-white dark:from-black dark:via-black p-8 rounded-md shadow-md font-mono">
      <h2 className="text-xl text-center lg:text-2xl font-bold mb-10">Send Us A Message</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-white">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-white">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="number" className="block text-sm font-medium text-gray-700 dark:text-white">
            Phone Number
          </label>
          <input
            type="tel"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-white">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md w-full"
            required
          >
            <option value="">Select a subject</option>
            {/* Add options dynamically based on services */}
            <option value="Brand & Product Strategy">Brand & Product Strategy</option>
            <option value="Software & AI Development">Software & AI Development</option>
            <option value="Design & Creative Production">Design & Creative Production</option>
            <option value="Venture Studio Partnerships">Venture Studio Partnerships</option>
            <option value="Qreative Labs">Qreative Labs</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-white">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md w-full h-32"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;