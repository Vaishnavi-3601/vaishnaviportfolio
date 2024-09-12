import React from "react";

class Contact extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <div className="bg-rose-100 py-20 shadow-md rounded-lg text-center">
                        <h2 className="text-5xl font-semibold mb-6 text-rose-700">Contact Us</h2>
                        <p className="text-rose-900 mb-4">Feel free to connect with us through any of the platforms below:</p>

                        <div className="flex justify-center space-x-8">
                            {/* WhatsApp Icon */}
                            <a
                                href="https://wa.me/yourwhatsappnumber"
                                className="text-green-500 hover:text-green-600"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                            >
                                <i className="fab fa-whatsapp fa-3x"></i>
                            </a>

                            {/* GitHub Icon */}
                            <a
                                href="https://github.com/yourusername"
                                className="text-gray-800 hover:text-gray-900"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <i className="fab fa-github fa-3x"></i>
                            </a>

                            {/* LinkedIn Icon */}
                            <a
                                href="https://linkedin.com/in/yourusername"
                                className="text-blue-700 hover:text-blue-800"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <i className="fab fa-linkedin fa-3x"></i>
                            </a>

                            {/* Placeholder for Additional Icon */}
                            <a
                                href="abc"
                                className="text-gray-700 hover:text-gray-800"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Placeholder"
                            >
                                <i className="fas fa-user fa-3x"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;
