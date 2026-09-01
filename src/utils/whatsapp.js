import { companyInfo } from "../data/companyInfo";

export function createWhatsAppBookingUrl({
  carName = "",
  pickupDate = "",
  pickupTime = "",
  returnDate = "",
  returnTime = "",
  tripType = "Daily Rental",
  passengers = "1-4",
  customerName = "",
  customerPhone = "",
  pickupLocation = "Kota",
  notes = ""
} = {}) {
  let message = "🚗 *Kota Carz Self Drive - Booking Inquiry*\n\n";
  
  if (customerName) {
    message += `👤 *Name:* ${customerName}\n`;
  }
  if (customerPhone) {
    message += `📞 *Phone:* ${customerPhone}\n`;
  }
  if (carName) {
    message += `🚘 *Selected Car:* ${carName}\n`;
  }
  if (tripType) {
    message += `📋 *Trip Type:* ${tripType}\n`;
  }
  if (pickupDate) {
    message += `📅 *Pickup Date:* ${pickupDate} ${pickupTime ? "at " + pickupTime : ""}\n`;
  }
  if (returnDate) {
    message += `📅 *Return Date:* ${returnDate} ${returnTime ? "at " + returnTime : ""}\n`;
  }
  if (pickupLocation) {
    message += `📍 *Pickup Location:* ${pickupLocation}\n`;
  }
  if (passengers) {
    message += `👥 *Passengers:* ${passengers}\n`;
  }
  if (notes) {
    message += `📝 *Notes:* ${notes}\n`;
  }
  
  message += "\nPlease let me know the availability and best rental pricing!";
  
  return `https://api.whatsapp.com/send?phone=${companyInfo.phoneRaw}&text=${encodeURIComponent(message)}`;
}
