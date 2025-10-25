const correctNumber = "7842";
const correctPassword = "45kibria";

const cartoon = document.getElementById("cartoon");
const loginPage = document.getElementById("loginPage");
const loginForm = document.getElementById("loginForm");
const numberInput = document.getElementById("numberInput");
const passwordInput = document.getElementById("passwordInput");
const errorMsg = document.getElementById("errorMsg");
const dashboard = document.getElementById("dashboard");
const whatsappBtn = document.getElementById("whatsappBtn");
const topFrame = document.getElementById("topFrame");

// বাংলাদেশ +88 কোডসহ WhatsApp নাম্বার
const whatsappNumber = "+8801878638870";

// ছবির ফ্রেম দেখা দেওয়া
window.addEventListener("load", () => {
    setTimeout(() => { topFrame.style.opacity = "1"; }, 2500);
});

// কার্টুন ক্লিক
cartoon.addEventListener("click", () => {
    cartoon.classList.add("fade-out");
    topFrame.style.display = "none"; 
    setTimeout(() => {
        cartoon.style.display = "none";
        loginPage.style.display = "block";
        loginPage.setAttribute("aria-hidden", "false");
        numberInput.focus();
    }, 1000);
});

// লগইন চেক
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    errorMsg.textContent = "";
    const enteredNumber = numberInput.value.trim();
    const enteredPassword = passwordInput.value;

    if (enteredNumber === correctNumber && enteredPassword === correctPassword) {
        loginPage.style.display = "none";
        loginPage.setAttribute("aria-hidden", "true");
        dashboard.style.display = "block";
        dashboard.setAttribute("aria-hidden", "false");
    } else {
        errorMsg.textContent = "আপনার পাসওয়ার্ড ভুল";
        loginPage.animate([
            { transform: "translateX(0px)" },
            { transform: "translateX(-8px)" },
            { transform: "translateX(8px)" },
            { transform: "translateX(0px)" }
        ], { duration: 300 });
    }
});

// WhatsApp বাটনে ক্লিক
whatsappBtn.addEventListener("click", () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
});