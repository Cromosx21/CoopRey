import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import WhatsAppButton from "../components/common/WhatsAppButton";

const MainLayout = ({ children }) => {
	return (
		<div className="flex min-h-screen flex-col bg-background font-sans antialiased">
			<Header />
			<main className="flex-1">{children}</main>
			<Footer />
			<WhatsAppButton />
		</div>
	);
};

export default MainLayout;
