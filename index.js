// ChronosFX - Simple Date & Time Utilities (ESM Version)

// -------- HELPER: Convert input to Date object safely --------
function toDate(input) {
    if (input instanceof Date) return input;

    // If number (timestamp)
    if (typeof input === "number") return new Date(input);

    // If YYYY-MM-DD format
    if (typeof input === "string" && /^\d{4}-\d{2}-\d{2}$/.test(input)) {
        const [y, m, d] = input.split("-").map(Number);
        return new Date(y, m - 1, d);
    }

    // Try normal Date parsing
    const parsed = new Date(input);
    return isNaN(parsed.getTime()) ? null : parsed;
}

// -------- 1) Check if date is valid --------
export function isValidDate(input) {
    return toDate(input) !== null;
}

// -------- 2) Format date -> "14 Nov 2025" --------
export function formatDate(input) {
    const d = toDate(input);
    if (!d) return null;

    const day = String(d.getDate()).padStart(2, "0");

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const month = months[d.getMonth()];
    const year = d.getFullYear();

    return `${day} ${month} ${year}`;
}

// -------- 3) Format time -> "06:30 PM" or "18:30" --------
export function formatTime(input, options = { hour12: true }) {
    const d = toDate(input);
    if (!d) return null;

    let hours = d.getHours();
    const minutes = String(d.getMinutes()).padStart(2, "0");

    if (options.hour12) {
        const suffix = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;
        if (hours === 0) hours = 12;
        return `${String(hours).padStart(2, "0")}:${minutes} ${suffix}`;
    }

    return `${String(hours).padStart(2, "0")}:${minutes}`;
}

// -------- 4) Return current timestamp --------
export function getCurrentTimestamp() {
    return Date.now();
}

// -------- 5) Convert input to ISO format --------
export function toISO(input) {
    const d = toDate(input);
    return d ? d.toISOString() : null;
}

// -------- 6) Add days to a date --------
export function addDays(input, days = 0) {
    const d = toDate(input);
    if (!d) return null;

    const result = new Date(d);
    result.setDate(result.getDate() + days);

    const y = result.getFullYear();
    const m = String(result.getMonth() + 1).padStart(2, "0");
    const da = String(result.getDate()).padStart(2, "0");

    return `${y}-${m}-${da}`;
}

// -------- 7) Days between two dates --------
export function daysBetween(a, b) {
    const d1 = toDate(a);
    const d2 = toDate(b);
    if (!d1 || !d2) return null;

    const diffMs = Math.abs(
        new Date(d2.getFullYear(), d2.getMonth(), d2.getDate()) -
        new Date(d1.getFullYear(), d1.getMonth(), d1.getDate())
    );

    return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}

// -------- 8) Human readable "time ago" --------
export function timeAgo(input) {
    const d = toDate(input);
    if (!d) return null;

    const now = Date.now();
    const diff = now - d.getTime();

    if (diff < 10000) return "just now"; // under 10 sec

    const seconds = Math.floor(diff / 1000);
    if (seconds < 60) return `${seconds} seconds ago`;

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minutes ago`;

    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hours ago`;

    const days = Math.floor(hours / 24);
    if (days === 1) return "yesterday";
    if (days < 30) return `${days} days ago`;

    const months = Math.floor(days / 30);
    if (months < 12) return `${months} months ago`;

    const years = Math.floor(days / 365);
    return `${years} years ago`;
}

// -------- Default export (easy for users) --------
export default {
    isValidDate,
    formatDate,
    formatTime,
    getCurrentTimestamp,
    toISO,
    addDays,
    daysBetween,
    timeAgo
};
