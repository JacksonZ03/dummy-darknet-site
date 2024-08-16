"use client";

export default function Home() {
    const exploits = [
        { id: "CVE-2023-41990", name: "Operation Apple-only ADJUST TrueType RCE", price: 90 },
        { id: "CVE-2023-32434", name: "XNU Integer Overflow Vuln", price: 75 },
        { id: "CVE-2024-3094", name: "XZ Utils backdoor", price: 150 },
    ];

    const handleContact = () => {
        alert("Send Funds To XMR Address: 46iAsWfzjh6AcqHbPkX1gpfoywnUxzW4bGavJpBSk4PpLMuFjFYuaSqYWRPFQorjCX1Kf5YYjHn6CB9Xh7txhVLLK6SbAKK");
    };

    return (
        <div className="home">
            <h1>TOP SECRET: EXPLOITS FOR SALE</h1>

            <div className="exploit-list">
                <h2>Available Exploits</h2>
                {exploits.map((exploit) => (
                    <div key={exploit.id} className="exploit-item">
                        <h3>
                            {exploit.id}: {exploit.name}
                        </h3>
                        <p>Price: {exploit.price} XMR</p>
                        <button onClick={handleContact}>Buy Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
