import { FaEnvelope, FaPhoneAlt, FaLinkedin } from 'react-icons/fa'
import { useState } from 'react'
import styles from "./Contact.module.css"
import emailjs from '@emailjs/browser';

export default function Contact(){

   const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  //  const handleChange = (e) => {
  //    const { name, value } = e.target
  //    setFormData((prev) => ({ ...prev, [name]: value }))
  //    setErrors((prev) => ({ ...prev, [name]: '' }))
  //  }
    const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    // setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) {
      return
    }
       try {
      const result = await emailjs.send(
        'service_pitadfh',
        'template_rg9ynmi',
        formData,
        'vCHxHYLDTA8wM2-9D'
      );
       console.log(result.text);

    // Simulate form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }  
   catch (error) {
      console.error('Failed to send message:', error);
    }
  }


  return (
  <section id="contact" className={`z-40 px-6 py-16 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white ${styles.contactsec}`} >
    <div className={`z-40 ${styles.contactcontainer}`}>
      <div className={`${styles.leftcontact} pb-8`}>
         <h2 className={`text-4xl font-bold mb-8 text-start ${styles.contactresume}`}>Contact Me</h2>
        <div className=" space-y-6 text-center md:text-center">
          <div className={`flex items-center gap-4 ${styles.contactresume}`}>
            <FaEnvelope className={`text-blue-600 text-2xl ${styles.ico}`}/>
            <a href="mailto:ighosandra@yahoo.com" className="hover:underline">
              ighosandra@yahoo.com
            </a>
          </div>
          <div className={`flex items-center gap-4 ${styles.contactresume}`}>
            <FaPhoneAlt className={`text-green-600 text-2xl ${styles.ico}`} />
            <a href="tel:2349068025726" className="hover:underline" target="_blank" rel="noopener noreferrer">
              +234 90 680 25726
            </a>
          </div>
          <div className={`flex items-center gap-4 ${styles.contactresume}`}>
            <FaLinkedin className={` text-blue-500 text-2xl ${styles.ico}`} />
            <a href="https://www.linkedin.com/in/sandra-ighoyivwi-bbb231256" className="hover:underline" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
          </div>
          <div className={`mt-20 transition-transform duration-200 hover:scale-105 ${styles.contactresume}`}>
            <a 
              href="/cv.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`px-4 py-2 rounded transition-transform duration-200 hover:scale-105 ${styles.resumebtn}`}
            >
              Resume
            </a>
          </div>

        </div>
      </div>

        {/* form */}
        <div className={`${styles.formcontainer}`}>
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">Name</label>
              <input id="name" type="text"  name="name"
                value={formData.name}
                onChange={handleChange} className={`w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600 ${
                  errors.name ? 'border-red-500' : '' }`} placeholder='Your Name' required />
                   {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>


            <div>
              <label htmlFor="email" className="block mb-1 font-medium">Email</label>
              <input id="email" type="email"  name="email"
                value={formData.email}
                onChange={handleChange} className={`w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600 ${
                  errors.email ? 'border-red-500' : ''
                }`} placeholder='Your Email' required />
                 {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>


            <div>
              <label htmlFor="message" className="block mb-1 font-medium">Message</label>
              <textarea id="message" rows="4"  name="message"
                value={formData.message}
                onChange={handleChange}
              className={`w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600 ${
                  errors.message ? 'border-red-500' : ''
              }`} 
              placeholder='Your Message' required></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>


            <button type="submit" className={`transition text-white px-4 py-2 rounded transition-transform duration-200 hover:scale-105 ${styles.resumebtn}`}>
              Send Message
            </button>
             {submitted && (
              <p className="text-green-600 mt-3">Message sent successfully!</p>
            )}
          </form>
        </div>
    </div>
  </section>
  )
}


