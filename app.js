const subscriptionOptions = {
  Netflix: { 1: 2500, 3: 6500, 6: 11000, 12: 20000 },
  Spotify: { 1: 2000, 3: 5500, 6: 10000, 12: 19000 },
  "Amazon Prime": { 1: 2500, 3: 6500, 6: 11000, 12: 20000 },
  "Apple Music": { 1: 2500, 3: 6500, 6: 11000, 12: 20000 },
  Crunchyroll: { 1: 2500, 3: 6500, 6: 11000, 12: 20000 },
};

const countries = [
  // Existing countries
  { code: "+1", flag: "🇺🇸", name: "United States" },
  { code: "+44", flag: "🇬🇧", name: "United Kingdom" },
  { code: "+91", flag: "🇮🇳", name: "India" },
  { code: "+81", flag: "🇯🇵", name: "Japan" },
  { code: "+86", flag: "🇨🇳", name: "China" },
  { code: "+49", flag: "🇩🇪", name: "Germany" },
  { code: "+33", flag: "🇫🇷", name: "France" },
  { code: "+39", flag: "🇮🇹", name: "Italy" },
  { code: "+7", flag: "🇷🇺", name: "Russia" },
  { code: "+55", flag: "🇧🇷", name: "Brazil" },
  // African countries
  { code: "+20", flag: "🇪🇬", name: "Egypt" },
  { code: "+27", flag: "🇿🇦", name: "South Africa" },
  { code: "+234", flag: "🇳🇬", name: "Nigeria" },
  { code: "+254", flag: "🇰🇪", name: "Kenya" },
  { code: "+251", flag: "🇪🇹", name: "Ethiopia" },
  { code: "+212", flag: "🇲🇦", name: "Morocco" },
  { code: "+233", flag: "🇬🇭", name: "Ghana" },
  { code: "+225", flag: "🇨🇮", name: "Côte d'Ivoire" },
  { code: "+256", flag: "🇺🇬", name: "Uganda" },
  { code: "+255", flag: "🇹🇿", name: "Tanzania" },
  { code: "+213", flag: "🇩🇿", name: "Algeria" },
  { code: "+216", flag: "🇹🇳", name: "Tunisia" },
  { code: "+260", flag: "🇿🇲", name: "Zambia" },
  { code: "+263", flag: "🇿🇼", name: "Zimbabwe" },
  { code: "+250", flag: "🇷🇼", name: "Rwanda" },
  { code: "+237", flag: "🇨🇲", name: "Cameroon" },
  { code: "+221", flag: "🇸🇳", name: "Senegal" },
  { code: "+244", flag: "🇦🇴", name: "Angola" },
  { code: "+258", flag: "🇲🇿", name: "Mozambique" },
  { code: "+267", flag: "🇧🇼", name: "Botswana" },
];

const countryList = document.getElementById("countryList");
const countryDropdown = document.getElementById("countryDropdown");
const selectedCountry = document.getElementById("selectedCountry");

// Add search functionality
const searchInput = document.createElement("input");
searchInput.className =
  "w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline";
searchInput.placeholder = "Search countries...";
countryList.prepend(searchInput);

searchInput.addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();
  Array.from(countryList.children).forEach((child) => {
    if (child !== searchInput) {
      const text = child.textContent.toLowerCase();
      child.style.display = text.includes(searchTerm) ? "" : "none";
    }
  });
});

// Populate country list
countries.forEach((country) => {
  const div = document.createElement("div");
  div.className =
    "country-option px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer";
  div.innerHTML = `${country.flag} ${country.code} ${country.name}`;
  div.onclick = () => {
    selectedCountry.innerHTML = `${country.flag} ${country.code}`;
    countryList.classList.add("hidden");
  };
  countryList.appendChild(div);
});

// Toggle country list visibility
countryDropdown.onclick = () => {
  countryList.classList.toggle("hidden");
};

// Close country list when clicking outside
document.addEventListener("click", (event) => {
  if (!countryDropdown.contains(event.target)) {
    countryList.classList.add("hidden");
  }
});

document.getElementById("invoiceForm").addEventListener("submit", function (e) {
  e.preventDefault();
  generateInvoicePreview();
});

document.getElementById("downloadPDF").addEventListener("click", function () {
  // Placeholder for PDF generation functionality
  alert("PDF download functionality would be implemented here.");
});

function generateInvoicePreview() {
  const name = document.getElementById("name").value;
  const phoneCode = selectedCountry.textContent.split(" ")[1];
  const phone = document.getElementById("phone").value;
  const service = document.getElementById("service").value;
  const duration = document.getElementById("duration").value;

  const startDate = new Date();
  const endDate = new Date(startDate);
  endDate.setMonth(endDate.getMonth() + parseInt(duration));

  const amount = subscriptionOptions[service][duration];

  const previewContent = `
      <p><span class="font-bold">Name:</span> ${name}</p>
      <p><span class="font-bold">Phone:</span> ${phoneCode} ${phone}</p>
      <p><span class="font-bold">Service:</span> ${service}</p>
      <p><span class="font-bold">Duration:</span> ${duration} month(s)</p>
      <p><span class="font-bold">Start Date:</span> ${startDate.toLocaleDateString()}</p>
      <p><span class="font-bold">End Date:</span> ${endDate.toLocaleDateString()}</p>
      <p><span class="font-bold">Amount Paid:</span> $${amount}</p>
  `;

  document.getElementById("previewContent").innerHTML = previewContent;
  document.getElementById("invoicePreview").classList.remove("hidden");
}
document.getElementById("invoiceForm").addEventListener("submit", function (e) {
  e.preventDefault();
  generateInvoicePreview();
});

document.getElementById("downloadPDF").addEventListener("click", function () {
  // Placeholder for PDF generation functionality
  alert("PDF download functionality would be implemented here.");
});

function generateInvoicePreview() {
  const name = document.getElementById("name").value;
  const phoneCode = selectedCountry.textContent.split(" ")[1];
  const phone = document.getElementById("phone").value;
  const service = document.getElementById("service").value;
  const duration = document.getElementById("duration").value;

  const startDate = new Date();
  const endDate = new Date(startDate);
  endDate.setMonth(endDate.getMonth() + parseInt(duration));

  const amount = subscriptionOptions[service][duration];

  const previewContent = `
      <p><span class="font-bold">Name:</span> ${name}</p>
      <p><span class="font-bold">Phone:</span> ${phoneCode} ${phone}</p>
      <p><span class="font-bold">Service:</span> ${service}</p>
      <p><span class="font-bold">Duration:</span> ${duration} month(s)</p>
      <p><span class="font-bold">Start Date:</span> ${startDate.toLocaleDateString()}</p>
      <p><span class="font-bold">End Date:</span> ${endDate.toLocaleDateString()}</p>
      <p><span class="font-bold">Amount Paid:</span> ${amount} XAF</p>
  `;

  document.getElementById("previewContent").innerHTML = previewContent;
  document.getElementById("invoicePreview").classList.remove("hidden");
}
