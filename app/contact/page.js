export const metadata = {
  title: "Contact Us | ShivaroX",
  description: "Get in touch with ShivaroX",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-white py-20 px-4">
      <div className="container mx-auto max-w-lg">
        <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
        <p className="mb-8 text-gray-300">
          Have questions or ideas? We'd love to hear from you. Fill out the
          form below and we'll get back to you as soon as possible.
        </p>
        <form
          action="https://formspree.io/f/{your_form_id}"
          method="POST"
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block mb-2 text-sm">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-4 py-2 bg-surface text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-2 bg-surface text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 bg-surface text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-primary text-black font-semibold rounded-md hover:bg-secondary transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}